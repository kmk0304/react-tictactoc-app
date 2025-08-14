import React from 'react'
import "./ExpenseForm.css"
import { MdSend } from 'react-icons/md'

const ExpenseForm = ({handleCharge, charge, handleAmount, amount, handleSubmit}) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className='form-center'>
        <div className='form-group'>
          <label>지출 항목</label>
          <input
            type = "text"
            className = "form-control"
            id = "charge"
            name = "charge"
            value={charge}
            placeholder = "예) 렌트비"
            onChange = { handleCharge }
          />
        </div>
        <div className='form-group'>
            <label>비용 항목</label>
          <input
            type = "number"
            className = "form-control"
            id = "amount"
            name = "amount"
            value={amount}
            placeholder = "예) 100"
            onChange={handleAmount}
          />
        </div>
      </div>
      <button type= 'submit' className = 'btn'>
        제출
        <MdSend className='btn-icon'/>
      </button>
    </form>
  )
}

export default ExpenseForm