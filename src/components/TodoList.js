import React from 'react'
import styled from 'styled-components'
import TodoItem from './TodoItem'

const TodoListBlock = styled.div`
  flex: 1;
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-x: auto;
`
const array = []
for (let i = 0; i < localStorage.length; i++) {
  const item = localStorage.getItem(i)
  array.push(item)
}

function TodoList() {
  return (
    <TodoListBlock>
      {array.map(data => (
        <TodoItem data={data} done={false} />
      ))}
    </TodoListBlock>
  )
}

export default TodoList
