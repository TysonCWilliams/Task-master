import { ProxyState } from "../AppState.js";
import { listService } from "../Services/ListService.js";
import { taskService } from "../Services/TaskService.js";


//Private


//Public
export default class TaskController {

  create(e, listId) {
    e.preventDefault()

    let form = e.target
    // console.log(form[0].value)
    let newTask = {
      title: form.taskTitle.value,
      // taskId
      listId: listId
    }

    taskService.create(newTask)

    form.reset()
  }

  delete(id) {
    taskService.delete(id)
  }

}