import { myList } from "./data-todo-list.js"
import { containerList, displayListAlter } from "./dom.js"

function remove(arr, numStart){
    arr.splice(numStart, 1)
}

function delList(arr){
    for (let index = 0; index < arr.length; index++) {
        const containerToDoList = document.querySelector(`.container-todo-list:nth-child(${index+1})`)

        const deleteButton = document.createElement('button')
        deleteButton.classList.toggle('delete')
        deleteButton.textContent = 'delete'
        deleteButton.addEventListener('click',function(){
            remove(arr, index)
            containerList.remove()
            console.log(myList)

            displayListAlter(arr)
        })
        containerToDoList.appendChild(deleteButton)
    }
}

export default remove
export {delList}