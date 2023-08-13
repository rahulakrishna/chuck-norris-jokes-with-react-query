const FetchJoke = ({ refetchJoke }) => {
  return (
    <div className="text-center m-10">
      <button
        className="bg-amber-200 py-4 px-10 rounded-md shadow-sm transition ease-in-out delay-150 hover:shadow-md"
        onClick={() => refetchJoke()}
      >
        Fetch a Joke
      </button>
    </div>
  )
}

export default FetchJoke
