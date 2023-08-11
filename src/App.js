import FetchJoke from "./components/FetchJoke";

function App() {
  return (
    <>
      <div className="text-center bg-orange-500 p-10">
        <span className="text-xl text-white">Chuck Norris Jokes</span>
      </div>
      <FetchJoke />
    </>
  );
}

export default App;
