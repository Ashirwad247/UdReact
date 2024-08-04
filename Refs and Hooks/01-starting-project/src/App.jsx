import Player from './components/Player.jsx';
import TimerC from './components/TimerC.jsx';
function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <TimerC title="Easy" targetTime={1}/>
        <TimerC title="Not Easy" targetTime={5}/>
        <TimerC title="Getting Tough" targetTime={10}/>
        <TimerC title="Pros only" targetTime={20}/>
      </div>
    </>
  );
}

export default App;
