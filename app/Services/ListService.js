import { ProxyState } from "../AppState.js";
import List from "../Models/List.js";
import { saveState } from "../Utils/LocalStorage.js";

//Public
class ListService {
  constructor() {
    ProxyState.on("lists", saveState)
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
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        ProxyState.lists = ProxyState.lists.filter(l => l.id != id)
        ProxyState.tasks = ProxyState.tasks.filter(t => t.listId != id)
        console.log(ProxyState.lists);
        console.log(ProxyState.tasks);
      }
    })
}

  create(blankList) {
    //TODO  Here is where we handle all of our business logic,
    //given the information you need in the controller,
    //what methods will you need to do when this class is first 'constructed'?
    //NOTE You will need this code to persist your data into local storage, be sure to call saveState everytime you change the state in any way, you can register saveState as a listener
    let lists = ProxyState.lists
    lists.push(new List(blankList))
    ProxyState.lists = lists
    console.log(ProxyState.lists);
  }

}

export const listService = new ListService();
