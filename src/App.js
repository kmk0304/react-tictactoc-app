import { Component, useState } from "react"
import "./App.css";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import Alert from "./components/Alert";


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

   const [alert, setAlert] = useState({show: false})

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
      handleAlert({type: "success", text: "아이템이 생성되었습니다."})
    } else{
      console.log('error')
      handleAlert({type: "danger", text: "charge는 빈 값일 수 없으며 amount는 0 보다 커야 합니다."})
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
     handleAlert({type: "danger" , text: "아이템이 삭제되었습니다."})
  }

  const handleAlert =({type, text}) =>{
    setAlert({show: true, type, text})
    setTimeout(()=>{
      setAlert({show: false})
    },7000)
  }

  // render(){
    return(
      <main className = "main-container">
        { alert.show ? <Alert type={alert.type} text={alert.text} /> : null }
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