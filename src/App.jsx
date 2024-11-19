import './App.css'
import { useEffect, useState } from 'react'
import GetData from './components/GetData'

function App() {

  const [flag, setFlag] = useState(false)
  const [count, setCount] = useState(0)

  useEffect(() => {
    console.log("Use effect triggered")
  }, [count])

  /* 
    ? useEffect()
    * Hook which allows us to perform side effects in React
    * These include: DOM manipulation; setTimeout; and fetching data
    * it takes a callback fx; cleanup fx; and a dependency
    * callback fx
      * fx that runs (by default every time a rerender occurs)
    * dependencies
      * none, [], [<some-state-variable>]
      * none --> runs after every rerender
      * [] --> runs during intitial render only
      * [<some-dependency>] --> runs on initial render and each time dependency changes
  */

  return (
    <>
      <GetData />
      <button onClick={e => { setFlag(!flag); console.log("Component rerendered") }}>Click Me</button >
      <button onClick={() => setCount(prevCount => prevCount + 1)}>+</button>
    </>
  )
}

export default App
