import { Component, useState } from "react"
import "./App.css";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";


// class App extends Component{
  // constructor(props) {
  //   super(props)  //constructor 내 this. 사용하기 위해 정의 
  //   this.state = {
  //     expenses: [{
  //         id: 1,
  //         charge: "렌트비",
  //         amount: 1600
  //       },
  //       {
  //         id: 2,
  //         charge: "교통비",
  //         amount: 400
  //       },
  //       {
  //         id: 3,
  //         charge: "식비",
  //         amount: 1200
  //       },
  //     ]
  //   }
  // }
 const App = () => {

  const [charge, setCharge] = useState("")

  const [amount, setAmount] = useState(0)

  const [expenses, setExpenses] = useState([{
      id: 1,
      charge: "렌트비",
      amount: 1600
    },
    {
      id: 2,
      charge: "교통비",
      amount: 400
    },
    {
      id: 3,
      charge: "식비",
      amount: 1200
    },
  ])

  const handleCharge = (e) => {
    console.log(e.target.value)
    setCharge(e.target.value) //e.target.value: string
  }

  const handleAmount = (e) => {
    setAmount(e.target.valueAsNumber) //e.target.valueAsNumber: number
  }

  const handleSubmit = (e) => {
    e.preventDefault() //Page Refresh Block
    if(charge !== "" && amount > 0){
      const newExpense = {id: crypto.randomUUID(), charge, amount}
      
      //불변성을 지켜주기 위해 새로운 expenses 생성
      const newExpeses = [...expenses, newExpense]
      setExpenses(newExpeses)
      setCharge("")
      setAmount(0)
    } else{
      console.log('error')
    }

  }

  const handleDelete = (id) => {
    // const newExpenses = this.state.expenses.filter(expense =>
    //    expense.id !== id
    // )
    // console.log(newExpenses)
    // this.setState({expenses: newExpenses})
     const newExpenses = expenses.filter(expense =>
       expense.id !== id
     )
     setExpenses(newExpenses)
  }

  // render(){
    return(
      <main className = "main-container">
        <h1>예산 계산기</h1>
        <div style = {{width:'100%',backgroundColor: 'white', padding: '1rem' }}>
          {/* Expense Form */}
          <ExpenseForm 
            handleCharge = {handleCharge}
            charge = {charge}
            handleAmount = {handleAmount}
            amount = {amount}
            handleSubmit = {handleSubmit}
          />
        </div>

        <div style = {{width:'100%',backgroundColor: 'white', padding: '1rem' }}>
          {/* Expense List */}
          <ExpenseList 
            // initialExpense = {this.state.expenses}
            // handleDelete = {this.handleDelete}
            initialExpense = {expenses}
            handleDelete = {handleDelete}
          />
        </div>

        <div style = {{display: 'flex', justifyContent:'end', marginTop: '1rem'}}>
          <p style = {{fontSize: '2rem'}}>
            총지출:
            <span>원</span>
          </p>
        </div>
      </main>
    )
  // }
}

export default App;