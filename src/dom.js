import list, { myList, addList, addProjectList } from "./data-todo-list"

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
            checkList.value,
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
            checkList.value,
            selectedNav
        )

        console.log(myList)
        

        e.preventDefault()
    })

    const form = document.querySelector('.top > form')
    form.appendChild(createSubmit)
})

export{addProjectBtn, valueProject, containerProject, displayProject, containerList, displayList}