import React, { useState, useEffect } from 'react'
import styled, { css } from 'styled-components'
import { MdAdd } from 'react-icons/md'

const CircleButton = styled.button`
  background: #38d9a9;
  &:hover {
    background: #63e6be;
  }
  &:active {
    background: #20c997;
  }

  z-index: 5;
  cursor: pointer;
  width: 80px;
  height: 80px;
  display: block;
  align-items: center;
  justify-content: center;
  font-size: 60px;
  position: absolute;
  left: 50%;
  bottom: 0px;
  transform: translate(-50%, 50%);
  color: white;
  border-radius: 50%;
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;

  transition: 0.125s all ease-in;
  ${props =>
    props.open &&
    css`
      background: #ff6b6b;
      &:hover {
        background: #ff8787;
      }
      &:active {
        background: #fa5252;
      }
      transform: translate(-50%, 50%) rotate(45deg);
    `}
`

const InsertFormPositioner = styled.div`
  width: 100%;
  bottom: 0;
  left: 0;
  position: absolute;
`

const InsertForm = styled.form`
  background: #f8f9fa;
  padding-left: 32px;
  padding-top: 32px;
  padding-right: 32px;
  padding-bottom: 72px;

  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-top: 1px solid #e9ecef;
`

const Input = styled.input`
  padding: 12px;
  border-radius: 4px;
  border: 1px solid #dee2e6;
  width: 100%;
  outline: none;
  font-size: 18px;
  box-sizing: border-box;
`

function TodoCreate(props) {
  const [open, setOpen] = useState(false)
  const [toDo, setToDo] = useState('')
  const onToggle = () => setOpen(!open)
  const idx = localStorage.getItem('idx')
  const [inputs, setInputs] = useState({
    id: 0,
    todo: '',
    done: false,
  })
  const { id, todo } = inputs // 비구조화 할당을 통한 값 추출

  const InsertToDo = () => {
    if (props.onInsert) {
      props.onInsert(inputs)
    }
    setInputs({
      ...inputs,
      id: id + 1,
    })
  }

  const onChange = e => {
    const { value } = e.target
    setInputs({
      ...inputs,
      todo: value,
    })
  }

  const onKeyPress = e => {
    if (e.key == 'Enter') {
      InsertToDo()
      e.preventDefault()
    }
  }

  return (
    <>
      {open && (
        <InsertFormPositioner>
          <InsertForm>
            <Input
              value={inputs.todo}
              onChange={onChange}
              autoFocus
              placeholder="할 일을 입력 후, Enter 를 누르세요"
              onKeyPress={onKeyPress}
            />
          </InsertForm>
        </InsertFormPositioner>
      )}
      <CircleButton onClick={onToggle} open={open}>
        <MdAdd />
      </CircleButton>
    </>
  )
}

export default TodoCreate
