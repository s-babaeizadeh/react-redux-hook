import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import allActions from "./actions"

import "./App.css"

const App = () => {
  const counter = useSelector((state) => state.counter)
  const currentUser = useSelector((state) => state.currentUser)

  const dispatch = useDispatch()
  const user = { name: "User" }

  useEffect(() => {
    dispatch(allActions.userActions.setUser(user))
  }, [])

  return (
    <div className="App">
      {currentUser.loggedIn ? (
        <>
          <h1>Hello, {currentUser.user.name}</h1>
          <button
            className="button"
            onClick={() => dispatch(allActions.userActions.logout())}
          >
            Logout
          </button>
        </>
      ) : (
        <>
          <h1>Login</h1>
          <button
            className="button"
            onClick={() => dispatch(allActions.userActions.setUser(user))}
          >
            Login as User
          </button>
        </>
      )}
      <h1>Counter: {counter}</h1>
      <button
        className="button-increment"
        onClick={() => dispatch(allActions.counterActions.increment())}
      >
        Increase Counter
      </button>
      <button
        className="button-decrement"
        onClick={() => dispatch(allActions.counterActions.decrement())}
      >
        Decrease Counter
      </button>
    </div>
  )
}

export default App
