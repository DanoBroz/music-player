import { songsList } from '../data/songs.js';

const Playlist = (_ => {

  const songs = songsList;
  let currentlyPlayingIndex = 0;
  const currentSong = new Audio(songs[currentlyPlayingIndex].url);
  let isPlaying = false;

  const playlistEl = document.querySelector('.playlist');


  const init = _ => {
    render();
    listeners();
  }

  const changeAudioSrc = _ => {
    currentSong.src = songs[currentlyPlayingIndex].url;
  }

  const togglePlayPause = _ => {
    return currentSong.paused ? currentSong.play() : currentSong.pause();
  }

  const mainPlay = clickedIndex => {
    if (currentlyPlayingIndex === clickedIndex) {
      togglePlayPause();
    } else {
      currentlyPlayingIndex = clickedIndex;
      changeAudioSrc();
      togglePlayPause();
    }
  }

  const playNext = _ => {
    if(songs[currentlyPlayingIndex + 1]) {
      currentlyPlayingIndex++;
      changeAudioSrc();
      togglePlayPause();
      render();
    }
  }

  const listeners = _ => {
    playlistEl.addEventListener('click', e => {
      if(e.target && e.target.matches('.fa')) {
        const listEl = e.target.parentNode.parentNode;
        const listElIndex = [...listEl.parentElement.children].indexOf(listEl);
        mainPlay(listElIndex);
        render();
      }
    })

    currentSong.addEventListener('ended', _ => {
      playNext();
    })
  }

  const render = _ => {
    let markup = "";

    const toggleIcon = itemIndex => {
      if(currentlyPlayingIndex === itemIndex) {
        return currentSong.paused ? 'fa-play' : 'fa-pause';
      } else {
        return 'fa-play'
      }
    }

    songs.forEach((songObj, index) => {
      const isCurrentlyPlaying = index === currentlyPlayingIndex
      markup += `
        <li class="playlist__song ${isCurrentlyPlaying ? 'playlist__song--active' : ''}">
          <div class="play-pause">
            <i class="fa ${toggleIcon(index)} pp-icon"></i>
          </div>
          <div class="playlist__song-details">
            <span class="playlist__song-name">${songObj.title}</span>
            <br>
            <div class="playlist__song-artist">${songObj.artist}</div>
          </div>
          <div class="playlist__song-duration">${songObj.time}</div>
        </li>
      `;
    });

    playlistEl.innerHTML = markup;
  }

  return { init }
})();

export default Playlist
