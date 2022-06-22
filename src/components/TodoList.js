import React, { useEffect } from 'react'
import styled from 'styled-components'
import TodoItem from './TodoItem'

const TodoListBlock = styled.div`
  flex: 1;
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-x: auto;
`

function TodoList(props) {
  const array = props.todoList
  const searchArray = props.searchList
  const result = searchArray.length != 0 ? searchArray : array
  console.log('search', result)

  const changeDone = (id, value) => {
    props.onChDone(id, value)
  }

  const deleteTodo = id => {
    props.onDeTodo(id)
  }
  return (
    <TodoListBlock>
      {result.map(item => (
        <TodoItem
          item={item}
          key={item.id}
          changeDone={changeDone}
          deleteTodo={deleteTodo}
        />
      ))}
    </TodoListBlock>
  )
}

export default TodoList

//item={item}에서 앞의 item은 TodoItem 컴포넌트에 들어가는
//item 인자를 의미하고, 뒤의 {item}는 array 배열의 각 원소값을 의미
