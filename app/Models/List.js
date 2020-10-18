import { generateId } from "../Utils/GenerateId.js";
import { ProxyState } from '../AppState.js'

export default class List {
  constructor(data) {
    //TODO Your constructor takes in a data object that should have the properties you need to create your list here is a freebie, it will set the id its provided, or if that is undefined it will create a new one (this is an alternative to object destructuring)
    this.title = data.title
    this.id = data.id || generateId()
  }
  //Be sure to add the methods needed to create the view template for this model
  //For starting out, your tasks may be strings alone, but later you may wish to turn them into full objects, that will be up to you
  get Template() {

    return /*html*/`
    <div class="col-4 border rounded shadow-lg">
        <h1>${this.title} <button class="text-danger close mt-3" onclick="app.listController.delete('${this.id}')"><span>&times;</span></button></h1>
        <form onsubmit="app.taskController.create(event, '${this.id}')">
                <div class="form-group">
                    <input type="text" name="taskTitle" class="form-control" placeholder="Enter Task Title here...">
                    <button type="submit" name="" id="" class="btn btn-dark btn-lg btn-block">Create</button>
                </div>
        </form>
        <h5>Tasks:</h5>
        <div id="tasks" class="row">
            ${this.Tasks}
        </div>
    </div>
    `
  }
  get Tasks() {
    let template = ""
    let tasks = ProxyState.tasks.filter(t => t.listId == this.id)
    console.log(tasks)
    tasks.forEach(t => template += t.Template)
    return template
  }

}
