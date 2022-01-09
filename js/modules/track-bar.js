const Trackbar = (_ => {
  const state = {
    currentTrackTime: 0,
    fullTrackTime: 0,
    fillWidth: 0,
  }

  const trackBarFillEl = document.querySelector('.track-bar__fill');


  const render = _ => {
    trackBarFillEl.style.width = `${state.fillWidth}%`;
  }

  const init = _ => {
    render();
  }

  const getPercent = (current, full) => {
    return (current/full) * 100;
  }

  const setState = obj => {
    state.currentTrackTime = obj.currentTime,
    state.fullTrackTime = obj.duration,
    state.fillWidth = getPercent(state.currentTrackTime, state.fullTrackTime);
    render();
  }

  return { init, setState }
})();

export default Trackbar;