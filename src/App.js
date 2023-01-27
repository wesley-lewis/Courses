import Module from "./Module";
import "./App.css"
import { useEffect, useState } from "react";
import Quiz from "./Quiz"




function App() {
  const [isCompleted, setIsCompleted] = useState([]);
  const [module, setModule] = useState("")
  const [access, setAccess] = useState(true)
  const backButtonHandler = () => {
    setModule("")
  }
  useEffect(() => {
    
  }, [module, isCompleted])
  if (module === "") {
  return (
    <div className="App">
      <h1 className="page-title">Welcome to the Complete Ethereum Course</h1>
      
      <Module 
      title={"Ethereum Basics"} 
      isCompleted={isCompleted} 
      course="Ethereum Basics" 
      module={module} 
      setModule={setModule}
      setIsCompleted={setIsCompleted} />

      <Module 
      title={"Cryptography"} 
      isCompleted={isCompleted} 
      course="Cryptography" 
      module={module}
      setModule={setModule} 
      setIsCompleted={setIsCompleted} />

      <Module 
      title={"Transactions"} 
      isCompleted={isCompleted} 
      course="Transactions" 
      module={module} 
      setModule={setModule}
      setIsCompleted={setIsCompleted} />

      <Module 
      title={"Smart Contracts"} 
      isCompleted={isCompleted}  
      course="Smart Contracts" 
      module={module} 
      setModule={setModule}
      setIsCompleted={setIsCompleted} />


    </div>
  );
  } else if(access) {
    return (
      <div>
        <button onClick={() => { backButtonHandler() ;setModule("") }}>Go back</button>
        <Quiz module={module} isCompleted={isCompleted} setIsCompleted={setIsCompleted} setModule={setModule}/>
        
      </div>
    )
  }
  else {
    return (
      <>
      <button onClick={() => backButtonHandler()}>Go back</button>
      <h1>Finish the previous courses first to go to the next level</h1>
      </>
    )
  }
}

export default App;
