import FetchJoke from "./components/FetchJoke";
import Joke from "./components/Joke";

function App() {
  return (
    <>
      <div className="text-center bg-orange-500 p-10">
        <span className="text-xl text-white">Chuck Norris Jokes</span>
      </div>
      <FetchJoke />
      <Joke />
    </>
  );
}

export default App;
