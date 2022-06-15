import React, { useState } from 'react'

let today = new Date()
let year = String(today.toLocaleDateString())
function Today(props) {
  return (
    <div>
      <h1>{today}</h1>
    </div>
  )
}
export default Today
