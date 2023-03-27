import React, { useState, useRef, useEffect } from 'react'
import { createGlobalStyle } from 'styled-components'
import TodoTemplate from './components/TodoTemplate'
import TodoHead from './components/TodoHead'
import TodoList from './components/TodoList'
import TodoCreate from './components/TodoCreate'
import {useDispatch, useSelector} from "react-redux";

const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`

function App() {

  const counter = useSelector(state => state.counter);
  const content = useSelector(state => state.data);
  const dispatch = useDispatch();

  const [data, setData] = useState(() => {
    const saved = localStorage.getItem('data')
    if (saved !== null) {
      return JSON.parse(saved)
    } else {
      return ['']
    }
  })
  const [searchData, setSearchData] = useState(() => {
    const saved = localStorage.getItem('data')
    if (saved !== null) {
      return JSON.parse(saved)
    } else {
      return ['']
    }
  })

  useEffect(() => {
    localStorage.setItem('data', JSON.stringify(data))
  }, [data])

  const onCreate = todo => {
    dispatch({type:'save',data: { id: data.length, todo: todo, done: false },})
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

  const onSearch = value => {
    const newData = data.filter(data => data.todo == value)
    setSearchData([...newData])
  }

  return (
    <>
      <GlobalStyle />
      <TodoTemplate>
        <TodoHead todoList={data} onSearch={onSearch} counter={counter}/>
        <TodoList
          todoList={data}
          onChDone={onChDone}
          onDeTodo={onDeTodo}
          searchList={searchData}
        />
        <TodoCreate onCreate={onCreate} />
      </TodoTemplate>
    </>
  )
}

export default App
