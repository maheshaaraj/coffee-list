import { useState } from 'react'
// import Card from './Card'
import CoffeeList from './CoffeeList'
import Users from './Users'
import './App.css'

const App = () => {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <p>hello</p> */}
      {/* <Card /> */}
      <CoffeeList />
      <Users />
    </>
  )
}

export default App
