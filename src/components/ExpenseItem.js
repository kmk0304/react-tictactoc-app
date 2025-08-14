import React, { Component } from 'react'
import './ExpenseItem.css'
import {MdDelete, MdEdit} from 'react-icons/md'

// export class ExpenseItem extends Component {
const ExpenseItem = ({expense, handleDelete, handleEdit}) =>{
  // render() {
    return (
      <li className='item'>
        <div className='info'>
          {/* <span className='expense'>{this.props.expense.charge}</span> */}
          <span className='expense'>{expense.charge}</span>
          {/* <span className='amount'>{this.props.expense.amount}</span> */}
          <span className='amount'>{expense.amount}</span>
        </div>
        <div>
          <button 
            className='edit-btn'
            onClick={() => handleEdit(expense.id)}
          ><MdEdit/></button>
          <button 
            className='clear-btn'
            onClick={()=>
              // this.props.handleDelete(this.props.expense.id)
              handleDelete(expense.id)
            }><MdDelete/></button>
        </div>
      </li>
    )
  // }
}

export default ExpenseItem