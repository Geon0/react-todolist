import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import { useState } from 'react'

const TodoHeadBlock = styled.div`
  padding: 48px 32px 24px 32px;
  border-bottom: 1px solid #e9ecef;
  h1 {
    margin: 0px;
    font-size: 36px;
    color: 343a40;
  }
  .day {
    margin-top: 4px;
    color: #868e96;
    font-size: 21px;
  }
  .tasks-left {
    color: #20c997;
    font-size: 18px;
    margin-top: 40px;
    font-weight: bold;
  }
  .tasks-search {
    color: #20c997;
    font-size: 18px;
    font-weight: bold;
    float: right;
  }
`

const TodoHead = props => {
  const [date, setDate] = useState('')
  const [day, setDay] = useState('')
  const [inputVal, setInputVal] = useState('')

  useEffect(() => {
    currentTime()
  }, [])

  const currentTime = () => {
    let today = new Date()
    let year = String(today.toLocaleDateString())
    const week = [
      '일요일',
      '월요일',
      '화요일',
      '수요일',
      '목요일',
      '금요일',
      '토요일',
    ]
    let day = week[today.getDay()]
    setDate(year)
    setDay(day)
  }

  const data = props.todoList
  const numValue = data.filter(value => value.done !== true)
  const searchRef = useRef(null)

  const onChange = e => {
    setInputVal(e.target.value)
  }

  const onSearch = e => {
    if (props.onSearch) {
      const search = e.target.value
      props.onSearch(search)
    }
  }

  const onKeyPress = e => {
    if (e.key == 'Enter') {
      onSearch(e)
    }
  }
  return (
    <TodoHeadBlock>
      <div className="day">{date}</div>
      <div className="day">{day}</div>
      <div className="tasks-left">
        할일 {numValue.length}개남음
        <input
          ref={searchRef}
          className="tasks-search "
          onChange={e => {
            onChange(e)
          }}
          onKeyPress={onKeyPress}
          type="text"
          value={inputVal}
        />
      </div>
    </TodoHeadBlock>
  )
}

export default TodoHead
