import { ProxyState } from "../AppState.js";
import { listService } from "../Services/ListService.js";


// Private
//TODO Don't forget to render to the screen after every data change.
function _drawLists() {
  let template = ''
  ProxyState.lists.forEach(l => template += l.Template)
  document.getElementById("lists").innerHTML = template
}

//Public
export default class ListController {
  constructor() {
    //NOTE: Dont forget to register an event listener(s).
    ProxyState.on("lists", _drawLists);
    ProxyState.on("tasks", _drawLists);
    _drawLists()
  }

  //TODO: Your app will need the ability to create, and delete lists
  create(e) {
    e.preventDefault()

    let form = e.target

    let blankList = {
      // title: e.target.title.value
      title: form.title.value
    }

    listService.create(blankList)

    form.reset()
  }


  delete(id) {
    listService.delete(id)
  }

}
