import { ProxyState } from "../AppState.js";
import Task from "../Models/Task.js";
import { loadState, saveState } from "../Utils/LocalStorage.js";



class TaskService {
  constructor() {
    ProxyState.on("tasks", saveState)
  }

  

  delete(id) {
    
    Swal.fire({
      imageUrl: '../shark.jpg',
      imageWidth: 400,
      imageHeight: 200,
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'info',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!',
      reverseButtons: false
    }).then((result) => {
      if (result.isConfirmed) {
      ProxyState.tasks = ProxyState.tasks.filter(t => t.id != id)
      }
    })

  }

  create(newTask) {
    let tasks = ProxyState.tasks
    tasks.push(new Task(newTask))
    ProxyState.tasks = tasks
  }
}


export const taskService = new TaskService();