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

submitList.addEventListener('click', function(e){
    
    const arrData = myList.notInProject
    
    addList(
        title.value,
        description.value,
        dueDate.value,
        priority.value,
        notes.textContent,
        checkList.checked
    )
    console.log(myList)

    delContent()
    displayListAlter(arrData)

    e.preventDefault()
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
        titleDiv.textContent = `title: ${arr.at(index).title}`
        div.appendChild(titleDiv)
    
        const dueDateDiv = document.createElement('div')
        dueDateDiv.classList.toggle('dueDate')
        dueDateDiv.textContent = `dueDate: ${arr.at(index).dueDate}`
        div.appendChild(dueDateDiv)

        expandBtn(div, index, myList.notInProject)
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

    const arrData = myList.notInProject
    
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
        
        delContent()
        displayListAlter(arrData)

        e.preventDefault()
    })

    const form = document.querySelector('.top > form')
    form.appendChild(createSubmit)

    delContent()
    displayListAlter(arrData)
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

    const arrData = myList.project[`${selectedNav}`]
    
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

        delContent()
        displayListAlter(arrData)

        e.preventDefault()
    })

    const form = document.querySelector('.top > form')
    form.appendChild(createSubmit)

    delContent()
    displayListAlter(arrData)
})

function displayListAlter(arr){

    if(arr.length <= 0){

        return null
    } else{

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
}

function delContent(){

    if(document.querySelector('.container-list') === null){
        return null
    }
    const divContainerList = document.querySelector('.container-list')
    divContainerList.remove()
}

function expandBtn(todoList, arrIndex, dataList){

    const expandButton = document.createElement('button')
    expandButton.classList.toggle('expand')
    expandButton.textContent = 'expand'

    todoList.appendChild(expandButton)

    expandButton.addEventListener('click', function(){
    
        const containerDiv = document.querySelector(`.container-todo-list:nth-child(${arrIndex+1})`)
        const description = document.querySelector(`.container-todo-list:nth-child(${arrIndex+1})>.description`)
        const expand = document.querySelector(`.container-todo-list:nth-child(${arrIndex+1})>.expand`)
        const del = document.querySelector(`.container-todo-list:nth-child(${arrIndex+1})>.delete`)
    
        const delBtn = document.createElement('button')
        delBtn.classList.toggle('delete')
        delBtn.textContent = 'delete'
        delBtn.addEventListener('click', function(){
            const divContainerList = document.querySelector('.container-list')
            remove(dataList, arrIndex)
            console.log(myList)
            divContainerList.remove()
            })
    
        if(description !== null){
            expand.textContent = 'expand'
            description.remove()
            return null
            }
                
        expand.textContent = 'hide'

        const descriptionDiv = document.createElement('div')
        descriptionDiv.classList.toggle('description')
        descriptionDiv.textContent = `description: ${dataList.at(arrIndex).description}`

        expand.remove()
        del.remove()

        containerDiv.appendChild(descriptionDiv)
        containerDiv.appendChild(expandButton)
        containerDiv.appendChild(delBtn)
        })
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