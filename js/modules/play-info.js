const PlayInfo = (_ => {
  const state = {
    songsLeft: 0,
    isPlaying: false,
  }

  const playerCountEl = document.querySelector('.player__count');
  const playerTriggerEl = document.querySelector('.player__trigger');

  const render = _ => {

  }

  const init = _ => {
    render();
  }

  return { init }
})()

export default PlayInfo;