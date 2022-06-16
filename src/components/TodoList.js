import React, { useEffect } from 'react'
import styled from 'styled-components'
import TodoItem from './TodoItem'

const TodoListBlock = styled.div`
  flex: 1;
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-x: auto;
`

function TodoList({}) {
  const array = []
  for (let i = 0; i < localStorage.length; i++) {
    array.push(JSON.parse(localStorage.getItem(i)))
  }
  useEffect(() => {}, [array])

  const getItem = () => {}
  return (
    <TodoListBlock>
      {array.map(item => (
        <TodoItem item={item} key={item.id} />
      ))}
    </TodoListBlock>
  )
}

export default TodoList

//item={item}에서 앞의 item은 TodoItem 컴포넌트에 들어가는
//item 인자를 의미하고, 뒤의 {item}는 array 배열의 각 원소값을 의미
