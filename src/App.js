import React, { useState, useRef, useEffect } from 'react'
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
  const [data, setData] = useState(() => {
    const saved = localStorage.getItem('data')
    if (saved !== null) {
      return JSON.parse(saved)
    } else {
      return ['']
    }
  })
  useEffect(() => {
    const saved = localStorage.setItem('data', JSON.stringify(data))
  }, [data])

  const onCreate = todo => {
    data.push({ id: data.length, todo: todo, done: false })
    setData([...data])
  }

  const onChDone = (id, value) => {
    const findIndex = data.findIndex(e => e.id == id)
    let copyArray = [...data]
    if (findIndex != -1) {
      copyArray[findIndex] = { ...copyArray[findIndex], done: value }
    }

    setData([...copyArray])
  }

  const onDeTodo = id => {
    const newData = data.filter(number => number.id !== id)
    setData(newData)
  }
  return (
    <>
      <GlobalStyle />
      <TodoTemplate>
        <TodoHead todoList={data} />
        <TodoList todoList={data} onChDone={onChDone} onDeTodo={onDeTodo} />
        <TodoCreate onCreate={onCreate} />
      </TodoTemplate>
    </>
  )
}

export default App
