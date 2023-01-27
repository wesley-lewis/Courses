import data from "./quizdata.json"
import { useState } from "react"

const Quiz = (props) => {
  
  const { module, setIsCompleted, isCompleted, setModule } = props
  const quizData = data[module]
  const ansFromData = quizData.map((item) => item.ans)
  const [ans, setAns] = useState([])
  const [redo, setRedo] = useState(false)
  const [wrongAns, setWrongAns] = useState()
  const submitHandler = (e) => {
    e.preventDefault()
    // if (JSON.stringify(ans) === JSON.stringify(ansFromData)) {
    //   setIsCompleted(obj => [...obj, module])
    //   setModule("")
    // }
    setIsCompleted(obj => [...obj, module])
    let form = document.forms.quiz;
    let formData = new FormData(form)
    for(let i = 0; i < quizData.length; i++) {
      if( quizData[i].ans !== formData.get(i)) {
        console.log(`${quizData[i].ans} ${formData.get(i)}`)
        setRedo(true)
        setWrongAns(i)
      }
    }
  }

  const renderData = quizData.map((item, index) => {
    
  return (
    <>
  <label htmlFor={index} key={index}>{item.question} {item.ans}</label> <br />
  <input name={index} key={index + 10} type="text" onBlur={event => setAns(arr => [...arr, event.target.value]) } /> <br />
  </>
  )
})
  if (!isCompleted.includes(module) || redo) {
  return (
    <form action="" method="post" id="quiz">
        {renderData}
        <br />
        <input type="submit" onClick={(event) => submitHandler(event)}/>
        {redo ? <h1>You will have to redo {wrongAns}</h1> : ""}  
    </form>
  )
  }
  
  else {
    return <h1>You have completed this course!</h1>
  }
}

export default Quiz;