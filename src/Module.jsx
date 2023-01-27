import "./index.css"
import order from "./order"
import { useEffect, useState} from "react"


const Module = (props) => {
  let completed = ""
  const {title, isCompleted, course, module, setModule} = props
  const [access, setAccess] = useState(true)
  if (isCompleted.includes(module)) {
    completed = "completed"
  }
  
  const onClickHandler = (course) => {
    setModule(course)
  }
  useEffect(() => {
    for (const key in order) {
      if(order[key] < order[module]) {
        if(!isCompleted.includes(key)) {
          setAccess(false)
        }
      }
    }
  }, [module, isCompleted])
  if(access) {
  return (
    <div className={"course-box " + completed} onClick={() => onClickHandler(course)}>
      <p className="course-text">{title}</p>
    </div>
  )
  }
  else {
    return <h1>You will have to complete the previous courses first : (</h1>
  }
}

export default Module;