import React, { Component } from 'react'
import './ExpenseList.css'
import ExpenseItem from './ExpenseItem'
import { MdDelete } from 'react-icons/md'

export class ExpenseList extends Component {
  render() {
    console.log(this.props.initialExpense) //부모로부터 data Get
    return (
      <>
        <ul className = 'list'>
          <ExpenseItem/>
        </ul>
        <button className='btn'>
          목록 지우기
          <MdDelete className='btn-icon'/>
        </button>
      </>
    )
  }
}

export default ExpenseList