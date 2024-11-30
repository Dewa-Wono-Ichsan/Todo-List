import { myList, addList } from "./data-todo-list"

const addProjectBtn = document.querySelector('button.add-project')
const valueProject = document.querySelector('input#project-name')
const containerProject = document.querySelector('.container-project')

const title = document.querySelector('input#list-title')
const description = document.querySelector('input#list-description')
const dueDate = document.querySelector('input#list-dueDate')
const priority = document.querySelector('input#list-priority')
const notes = document.querySelector('#list-notes')
const checkList = document.querySelector('input#list-checklist')
const submitList = document.querySelector('#add-list')

submitList.addEventListener('click', function(){
    addList(
        title.value,
        description.value,
        dueDate.value,
        priority.value,
        notes.textContent,
        checkList.checked
    )
    console.log(myList);
    event.preventDefault()
})

let count = 0
function displayProject(arr){
    const div = document.createElement('div')
    div.classList.toggle('project')
    div.textContent = `${Object.keys(arr.project).at(count++)}`
    containerProject.appendChild(div)
}

export{addProjectBtn, valueProject, containerProject, displayProject}