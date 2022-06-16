import React, { useState, useRef } from 'react'
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
  const [data, setData] = useState([])

  const onCreate = todo => {
    data.push({ id: data.length, todo: todo, done: false })
    setData([...data])
  }

  const onChDone = (id, value) => {
    const findIndex = data.findIndex(e => e.id == id)
    let copyArray = [...data]
    if (findIndex != -1) {
      copyArray[findIndex] = { ...copyArray[findIndex], done: 'true' }
    }
    setData([...copyArray])
  }

  return (
    <>
      <GlobalStyle />
      <TodoTemplate>
        <TodoHead todoList={data} />
        <TodoList todoList={data} onChDone={onChDone} />
        <TodoCreate onCreate={onCreate} />
      </TodoTemplate>
    </>
  )
}

export default App
