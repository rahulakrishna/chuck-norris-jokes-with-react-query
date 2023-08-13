import { useState } from 'react'
import { useQuery } from 'react-query'

import FetchJoke from './components/FetchJoke'
import Joke from './components/Joke'
import Loading from './components/Loading'

import { capitalize } from 'lodash'

function App() {
  const [category, setCategory] = useState('random')
  const [refetchOnChange, setRefetchOnChange] = useState(false)
  const queryDependencies = refetchOnChange ? [category] : []
  const {
    isLoading: categoriesLoading,
    error: categoriesError,
    data: categories,
  } = useQuery('chuck-norris-categories', () =>
    fetch('https://api.chucknorris.io/jokes/categories').then((res) =>
      res.json(),
    ),
  )
  const {
    isLoading: jokeLoading,
    error: jokeError,
    data: joke,
    refetch: refetchJoke,
  } = useQuery(['chuck-norris-joke', ...queryDependencies], () =>
    fetch(
      `https://api.chucknorris.io/jokes/random${
        category !== 'random' ? `/?category=${category}` : ''
      }`,
    ).then((res) => res.json()),
  )
  return (
    <>
      <div className="text-center bg-orange-500 p-10">
        <span className="text-xl text-white">Chuck Norris Jokes</span>
      </div>
      <div className="text-center">
        {categoriesLoading ? (
          <div className="text-center m-10">
            <Loading />
          </div>
        ) : categoriesError ? (
          'Some Error Occured'
        ) : (
          <select
            className="m-10"
            onChange={(e) => {
              setCategory(e.target.value)
            }}
          >
            <option value="random">Random</option>
            {categories.map((category) => (
              <option value={category} key={category}>
                {capitalize(category)}
              </option>
            ))}
          </select>
        )}

        <br />
        <label className="m-10">
          <input
            type="checkbox"
            onChange={() => setRefetchOnChange(!refetchOnChange)}
          />{' '}
          Refetch on Change
        </label>
      </div>

      {!refetchOnChange && <FetchJoke refetchJoke={refetchJoke} />}

      {jokeLoading ? (
        <div className="text-center m-10">
          <Loading />
        </div>
      ) : !jokeError ? (
        <Joke joke={joke.value} />
      ) : (
        'Some Error Occured'
      )}
    </>
  )
}

export default App
