import React, { useEffect } from 'react'
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
`

const TodoHead = () => {
  const [date, setDate] = useState('')
  const [day, setDay] = useState('')
  const [toDo, setToDo] = useState(0)

  useEffect(() => {
    currentTime()
    getItem()
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

  const getItem = () => {
    let item = window.localStorage.length
    setToDo(item)
  }

  return (
    <TodoHeadBlock>
      <div className="day">{date}</div>
      <div className="day">{day}</div>
      <div className="tasks-left">할일 {toDo}개남음</div>
    </TodoHeadBlock>
  )
}

export default TodoHead

/*
function callback(){
}
// <button onClick={currentTime}>Click</button> <=> window.addEventListener("click", callback);

function callback2(param){
}

<button onClick={()  => {callback2(78); }}>Click</button> <=> <button onClick={callback2.bind(this, 45)}>Click</button> = window.addEventListener("click", callback2.bind(this, 45))
*/