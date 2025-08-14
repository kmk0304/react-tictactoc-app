import React from 'react'
import './ExpenseList.css'
import ExpenseItem from './ExpenseItem'
import { MdDelete } from 'react-icons/md'

// const ExpenseList = (props) => {
const ExpenseList = ({handleDelete, expenses, handleEdit, clearItems}) => {
  // console.log(this.props.initialExpense) //부모로부터 data Get
  // console.log(props.initialExpense)
  return (
    <>
      <ul className = 'list'>
        {/* {this.props.initialExpense.map(expense =>{ */}
        {/* {props.initialExpense.map(expense =>{ */}
        {expenses.map(expense =>{
          return( 
            <ExpenseItem
              expense={expense}
              key={expense.id}
              // handleDelete = {this.props.handleDelete}
              // handleDelete = {props.handleDelete}
              handleDelete = {handleDelete}
              handleEdit = {handleEdit}
            />
          )            
        })}
      </ul>
      { expenses.length > 0 && (
        <button
         className = 'btn'
          onClick = { clearItems } >
          목록 지우기
          <MdDelete className='btn-icon'/>
        </button>
      )}
      
    </>
  )
}

export default ExpenseList