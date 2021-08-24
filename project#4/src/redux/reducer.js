import { v4 as uuidv4 } from 'uuid'

const inititalState = {
  tasks: [],
}

const reducer = (state = inititalState, action) => {
  switch (action.type) {
    case 'ADD_TASK':
      let newTask = { id: uuidv4(), name: action.payload, status: "Pending" };
      return { tasks: [...state.tasks, newTask] };
    case 'REMOVE_TASK':
      let removedTaskList = state.tasks.filter(task => task.id !== action.payload);
      return ({ tasks: removedTaskList })
    case 'PENDING_TO_DONE':
      console.log(action.payload)
      let updatedTaskList = state.tasks.filter(task => { 
        if (task.id === action.payload) {
           task.status = "Done"; 
        } 
        return task;
       });
       console.log(updatedTaskList)
      return ({ tasks: updatedTaskList })
    default:
      return state
  }
}

export default reducer