import React, { useState } from 'react'
import { createGlobalStyle } from 'styled-components'
import TodoTemplate from './components/TodoTemplate'
import TodoHead from './components/TodoHead'
import TodoList from './components/TodoList'
import TodoCreate from './components/TodoCreate'

const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`

function App() {
  const [num, setNum] = useState(localStorage.getItem('num') || 0)
  function toDoInsert(value) {
    localStorage.setItem(num, value)
    localStorage.setItem('num', parseInt(num) + 1)
    console.log(`on insert ${value}`)
  }

  return (
    <>
      <GlobalStyle />
      <TodoTemplate>
        <TodoHead />
        <TodoList />
        <TodoCreate onInsert={toDoInsert} />
      </TodoTemplate>
    </>
  )
}

export default App
