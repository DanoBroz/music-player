import Playlist from "./playlist.js";

const PlayInfo = (_ => {
  const state = {
    songsLeft: 0,
    isPlaying: false,
  }

  const playerCountEl = document.querySelector('.player__count');
  const playerTriggerEl = document.querySelector('.player__trigger');

  const render = _ => {
    playerCountEl.innerHTML = state.songsLeft;
    playerTriggerEl.innerHTML = state.isPlaying ? 'Pause' : 'Play';
  }

  const setState = stateObj => {
    state.songsLeft = stateObj.songsLength;
    state.isPlaying = stateObj.isPlaying;
    render();
  }

  const listeners = _ => {
    playerTriggerEl.addEventListener('click', _ => {
      state.isPlaying = !state.isPlaying;
      render();
      Playlist.flip();
    })
  }

  const init = _ => {
    render();
    listeners();
  }

  return { init, setState }
})()

export default PlayInfo;