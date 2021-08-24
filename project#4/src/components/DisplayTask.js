import{ useSelector, useDispatch } from 'react-redux';

const DisplayTask = () =>{
  const tasks = useSelector(state => state.tasks)
  let pendingTasks = tasks.filter( task => task.status === "Pending" );
  let doneTasks = tasks.filter( task => task.status === 'Done' );

  const dispatch = useDispatch()

  return(
    <>
      <div className="container">
      {pendingTasks.length === 0 ? <h3 className="full"> No Pending tasks </h3> : <h3 className="gray">Pending Tasks</h3> }
      <div className="container__list">
        <ul>
          { pendingTasks.map( task =>     
            <li key={task.id}>
              <p> { task.name } </p>
              <button onClick={ ()=> dispatch({type: 'PENDING_TO_DONE', payload: task.id})}>Done</button>
              <button onClick = { ()=> dispatch({type:'REMOVE_TASK', payload: task.id })  }>Delete</button>
            </li>
          )}
        </ul>
      </div>
      </div>
      <div className="container">
      { doneTasks.length === 0 ? <h3 className="full"> No Done tasks </h3> :<h3 className="gray">Done Tasks</h3>}  
        <div className="container__list">
          <ul>
            { doneTasks.map( task =>
              <li key={task.id}>
                <p> { task.name } </p>
                <button onClick = { ()=> dispatch({type:'REMOVE_TASK', payload: task.id })  }>Delete</button>
              </li>
            )}
          </ul>
        </div>
      </div>
    </>
  )

} 

export default DisplayTask;