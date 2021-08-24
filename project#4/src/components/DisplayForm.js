import {useState} from 'react';
import{ useSelector, useDispatch} from 'react-redux';

const DisplayForm = () =>{
  const tasks = useSelector(state => state.tasks)
  const [feedBack, setFeedback] = useState('')
  const [feedBackClassName, setFeedbackClassName] = useState('')
  const [newTask, setNewTask] = useState('')

  const dispatch = useDispatch()

  const onChangeInputHandler = (e) =>{
    setNewTask( e.target.value );
  }

  const onButtonClick = () =>{
    //form validation (empty input)
    if (newTask === ''){
      setFeedback('Please dont leave the input empty')
      setFeedbackClassName('red')
      return;
    }  
    //form validation (duplicates)
    let included = false
    tasks.map(task => {
      if(task.name.toLowerCase() === newTask.toLowerCase()){
        included = true
      }
      return task
    })
    if(!included){
      dispatch({type: 'ADD_TASK', payload: newTask})
      setFeedback("Task added successfully")
      setFeedbackClassName('green')
      setNewTask('')
    }
    //form validation (success)
    else {
      setFeedback('item already included on the list')
      setFeedbackClassName('red')
    }
  }

  return(
    <>
      <div className="container">
        <h1 className="gray">New Task</h1>
        <div className="container__inputs">
          <label htmlFor="input">Task Name</label>
          <input id="input" type="text" value= {newTask} onChange={ (e) => onChangeInputHandler(e)  } />
          <span className={feedBackClassName}>{feedBack}</span>
          <button onClick={ onButtonClick } >+ Add Task</button>
        </div>
      </div>
    </>

  )
}

export default DisplayForm;