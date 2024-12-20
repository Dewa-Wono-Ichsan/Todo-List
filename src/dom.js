import list, { myList, addList, addProjectList } from "./data-todo-list.js"
import remove from "./remove-todo-list.js"

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
    console.log(myList)
    event.preventDefault()
})

let count = 0
function displayProject(arr){
    const div = document.createElement('div')
    div.classList.toggle('project')
    div.textContent = `${Object.keys(arr.project).at(count++)}`
    containerProject.appendChild(div)
}

const containerList = document.querySelector('.container-list')

function displayList(arr){
    for (let index = 0; index < arr.length; index++) {

        const div = document.createElement('div')
        div.classList.toggle('container-todo-list')
        containerList.appendChild(div)
    }
    
    for (let index = 0; index < document.querySelectorAll('.container-todo-list').length; index++) {
        const div = document.querySelector(`.container-todo-list:nth-child(${index + 1})`)
        
        const titleDiv = document.createElement('div')
        titleDiv.classList.toggle('title')
        titleDiv.textContent = arr.at(index).title
        div.appendChild(titleDiv)
    
        const descriptionDiv = document.createElement('div')
        descriptionDiv.classList.toggle('description')
        descriptionDiv.textContent = arr.at(index).description
        div.appendChild(descriptionDiv)
    
        const dueDateDiv = document.createElement('div')
        dueDateDiv.classList.toggle('dueDate')
        dueDateDiv.textContent = arr.at(index).dueDate
        div.appendChild(dueDateDiv)
    
        const priorityDiv = document.createElement('div')
        priorityDiv.classList.toggle('priority')
        priorityDiv.textContent = arr.at(index).priority
        div.appendChild(priorityDiv)
    
        const notesDiv = document.createElement('div')
        notesDiv.classList.toggle('notes')
        notesDiv.textContent = arr.at(index).notes
        div.appendChild(notesDiv)
    
        const checklistDiv = document.createElement('div')
        checklistDiv.classList.toggle('checklist')
        checklistDiv.textContent = arr.at(index).checklist
        div.appendChild(checklistDiv)
    }
}

const headingFormList = document.querySelector('.top > h2')

const containerNotInProject = document.querySelector('.container-not-in-project')
containerNotInProject.addEventListener('click',function(e){

    headingFormList.textContent = `List Form ${e.target.textContent}`
    const submitButton = document.querySelector('#add-list')
    submitButton.remove()
    
    const createSubmit = document.createElement('button')
    createSubmit.setAttribute('id', 'add-list')
    createSubmit.setAttribute('type', 'submit')
    createSubmit.textContent = 'submit'
    
    createSubmit.addEventListener('click', function(e){

        addList(
            title.value,
            description.value,
            dueDate.value,
            priority.value,
            notes.value,
            checkList.checked,
        )

        console.log(myList)
        

        e.preventDefault()
    })

    const form = document.querySelector('.top > form')
    form.appendChild(createSubmit)
})

const changeNavList2 = document.querySelector('.container-project')
changeNavList2.addEventListener('click', function(e){

    const selectedNav = e.target.textContent
    headingFormList.textContent = `List Form ${e.target.textContent}`
    const submitButton = document.querySelector('#add-list')
    submitButton.remove()
    
    const createSubmit = document.createElement('button')
    createSubmit.setAttribute('id', 'add-list')
    createSubmit.setAttribute('type', 'submit')
    createSubmit.textContent = 'submit'
    
    createSubmit.addEventListener('click', function(e){

        addProjectList(
            title.value,
            description.value,
            dueDate.value,
            priority.value,
            notes.value,
            checkList.checked,
            selectedNav
        )

        console.log(myList)
        

        e.preventDefault()
    })

    const form = document.querySelector('.top > form')
    form.appendChild(createSubmit)
})

function displayListAlter(arr){
    const content = document.querySelector('.content')
    const divContainerList = document.createElement('div')
    divContainerList.classList.toggle('container-list')
    
    content.appendChild(divContainerList)

    const newContainerList = document.querySelector('.container-list')
    
    for (let index = 0; index < arr.length; index++) {
        const divContainerTodoList = document.createElement('div')
        divContainerTodoList.classList.toggle('container-todo-list')

        newContainerList.appendChild(divContainerTodoList)
    }

    for (let index = 0; index < arr.length; index++) {

        const div = document.querySelector(`.container-todo-list:nth-child(${index + 1})`)
        
        const divTitle = document.createElement('div')
        divTitle.classList.toggle('title')
        divTitle.textContent = `title: ${arr[index].title}`

        div.appendChild(divTitle)

        const divDescription = document.createElement('div')
        divDescription.classList.toggle('description')
        divDescription.textContent = `description: ${arr[index].description}`

        div.appendChild(divDescription)

        const divDueDate = document.createElement('div')
        divDueDate.classList.toggle('dueDate')
        divDueDate.textContent = `dueDate: ${arr[index].dueDate}`

        div.appendChild(divDueDate)

        const divPriority = document.createElement('div')
        divPriority.classList.toggle('priority')
        divPriority.textContent = `priority: ${arr[index].priority}`

        div.appendChild(divPriority)

        const divNotes = document.createElement('div')
        divNotes.classList.toggle('notes')
        divNotes.textContent = `notes: ${arr[index].notes}`

        div.appendChild(divNotes)

        const divChecklist = document.createElement('div')
        divChecklist.classList.toggle('checklist')
        divChecklist.textContent = `checklist: ${arr[index].checklist}`

        div.appendChild(divChecklist)

        const delBtn = document.createElement('button')
        delBtn.classList.toggle('delete')
        delBtn.textContent = 'delete'
        delBtn.addEventListener('click', function(){
            remove(arr, index)
            console.log(myList)
            divContainerList.remove()
            displayListAlter(arr)
        })

        div.appendChild(delBtn)

    }
}

export{
    addProjectBtn,
    valueProject,
    containerProject,
    displayProject,
    containerList,
    displayList,
    displayListAlter,
}