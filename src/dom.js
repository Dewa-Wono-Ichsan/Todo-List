import list, { myList, addList, addProjectList,setTodoListData } from "./data-todo-list.js"
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
    setTodoListData()

    delContent()
    displayListAlter(arrData)

    e.preventDefault()
})


function displayProject(obj){
    const arrKey = Object.keys(obj.project)

    if(arrKey.length === 0){
        if(document.querySelector('.container-project .project') !== null){
            document.querySelector('.container-project .project').remove()
        }
        return null
    }
    const project = Array.from(document.querySelectorAll('.container-project  .project'))


    for (let index = 0; index < project.length; index++) {
        const element = project[index]
        element.remove()
    }

    for (let index = 0; index < arrKey.length; index++) {
        
        const div = document.createElement('div')
        div.classList.toggle('project')
        div.textContent = `${arrKey.at(index)}`
        containerProject.appendChild(div)
    }
}

const deleteProject = document.querySelector('.left .delete-project')
deleteProject.addEventListener('click', function(){
    const arrProject = Object.keys(myList.project)
    delete myList.project[`${arrProject.at(-1)}`]
    setTodoListData()
    displayProject(myList)
})

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
        setTodoListData()
        
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
        setTodoListData()

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
        
            const divDueDate = document.createElement('div')
            divDueDate.classList.toggle('dueDate')
            divDueDate.textContent = `dueDate: ${arr[index].dueDate}`
        
            div.appendChild(divDueDate)
        
            const delBtn = document.createElement('button')
            delBtn.classList.toggle('delete')
            delBtn.textContent = 'delete'
            delBtn.addEventListener('click', function(){
                remove(arr, index)
                console.log(myList)
                setTodoListData()

                divContainerList.remove()
                displayListAlter(arr)
            })
        
            expandBtn(div, index, arr)

            div.appendChild(delBtn)

            if(arr[index].checklist === true){
                div.style.backgroundColor = '#D6D6D6'
            } else if(arr[index].checklist === false){
                div.style.backgroundColor = 'white'
            }
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
        const priority = document.querySelector(`.container-todo-list:nth-child(${arrIndex+1})>.priority`)
        const notes = document.querySelector(`.container-todo-list:nth-child(${arrIndex+1})>.notes`)
        const checklist = document.querySelector(`.container-todo-list:nth-child(${arrIndex+1})>.checklist`)
        const expand = document.querySelector(`.container-todo-list:nth-child(${arrIndex+1})>.expand`)
        const del = document.querySelector(`.container-todo-list:nth-child(${arrIndex+1})>.delete`)
        const edit = document.querySelector(`.container-todo-list:nth-child(${arrIndex+1})>.edit`)
        const form = document.querySelector(`.container-todo-list:nth-child(${arrIndex+1})>form`)
    
        const delBtn = document.createElement('button')
        delBtn.classList.toggle('delete')
        delBtn.textContent = 'delete'
        delBtn.addEventListener('click', function(){
            const divContainerList = document.querySelector('.container-list')
            remove(dataList, arrIndex)
            console.log(myList)
            setTodoListData()

            divContainerList.remove()
            displayListAlter(dataList)
            })
        
        const editBtn = document.createElement('button')
        editBtn.classList.toggle('edit')
        editBtn.textContent = 'edit'
        editBtn.addEventListener('click', function(){

            if(editBtn.textContent === 'edit'){
                editBtn.textContent = 'close edit'
            } else {
                editBtn.textContent = 'edit'
            }

            const form = document.createElement('form')

            const sectionTitle = document.createElement('div')
            sectionTitle.classList.toggle('title')

            const labelTitle = document.createElement('label')
            labelTitle.textContent = 'title'
            
            const inputTitle = document.createElement('input')
            inputTitle.setAttribute('value', `${dataList.at(arrIndex).title}`)

            const sectionDuedate = document.createElement('div')
            sectionDuedate.classList.toggle('dueDate')

            const labelDuedate = document.createElement('label')
            labelDuedate.textContent = 'dueDate'
            
            const inputDuedate = document.createElement('input')
            inputDuedate.setAttribute('value', `${dataList.at(arrIndex).dueDate}`)
            inputDuedate.setAttribute('type', 'date')

            const sectionDescription = document.createElement('div')
            sectionDescription.classList.toggle('description')

            const labelDescription = document.createElement('label')
            labelDescription.textContent = 'description'

            const inputDescription = document.createElement('input')
            inputDescription.setAttribute('value', `${dataList.at(arrIndex).description}`)

            const sectionPriority = document.createElement('div')
            sectionPriority.classList.toggle('priority')

            const labelPriority = document.createElement('label')
            labelPriority.textContent = 'priority'

            const inputPriority = document.createElement('input')
            inputPriority.setAttribute('value', `${dataList.at(arrIndex).priority}`)

            const sectionNotes = document.createElement('div')
            sectionNotes.classList.toggle('notes')

            const labelNotes = document.createElement('label')
            labelNotes.textContent = 'notes'

            const inputNotes = document.createElement('textarea')
            inputNotes.setAttribute('rows', 10)
            inputNotes.textContent = `${dataList.at(arrIndex).notes}`

            const sectionChecklist = document.createElement('div')
            sectionChecklist.classList.toggle('checklist')

            const labelChecklist = document.createElement('label')
            labelChecklist.textContent = 'progress'

            const inputChecklist = document.createElement('input')
            inputChecklist.setAttribute('type', 'checkbox')
            if(dataList.at(arrIndex).checklist === true){
                inputChecklist.setAttribute('checked', '')
            }
            
            const changeBtn = document.createElement('button')
            changeBtn.classList.toggle('change-todo-list')
            changeBtn.textContent = 'change'
            changeBtn.addEventListener('click', function(e){
                const titleDisplay = document.querySelector(`.container-todo-list:nth-child(${arrIndex+1}) > .title`)
                const dueDateDisplay = document.querySelector(`.container-todo-list:nth-child(${arrIndex+1}) > .dueDate`)
                const descriptionDisplay = document.querySelector(`.container-todo-list:nth-child(${arrIndex+1}) > .description`)
                const priorityDisplay = document.querySelector(`.container-todo-list:nth-child(${arrIndex+1}) > .priority`)
                const notesDisplay = document.querySelector(`.container-todo-list:nth-child(${arrIndex+1}) > .notes`)
                const checklistDisplay = document.querySelector(`.container-todo-list:nth-child(${arrIndex+1}) > .checklist`)

                dataList.at(arrIndex).title = inputTitle.value
                dataList.at(arrIndex).dueDate = inputDuedate.value
                dataList.at(arrIndex).description = inputDescription.value
                dataList.at(arrIndex).priority = inputPriority.value
                dataList.at(arrIndex).notes = inputNotes.value
                dataList.at(arrIndex).checklist = inputChecklist.checked

                console.log(myList)
                setTodoListData()

                titleDisplay.textContent = `title: ${dataList.at(arrIndex).title}`
                dueDateDisplay.textContent = `dueDate: ${dataList.at(arrIndex).dueDate}`
                descriptionDisplay.textContent = `description: ${dataList.at(arrIndex).description}`
                priorityDisplay.textContent = `priority: ${dataList.at(arrIndex).priority}`
                notesDisplay.textContent = `notes: ${dataList.at(arrIndex).notes}`
                if(inputChecklist.checked === true){
                    checklistDisplay.textContent = 'progress: done'
                    todoList.style.backgroundColor = '#D6D6D6'
                }else{
                    checklistDisplay.textContent = 'progress: pending'
                    todoList.style.backgroundColor = 'white'
                }

                e.preventDefault()
                })
            
            const formTodoList = document.querySelector(`.container-todo-list:nth-child(${arrIndex+1})>form`)
            if(formTodoList !== null){
                formTodoList.remove()
                return null
            }

            containerDiv.appendChild(form)

            form.appendChild(sectionTitle)
            sectionTitle.appendChild(labelTitle)
            sectionTitle.appendChild(inputTitle)

            form.appendChild(sectionDuedate)
            sectionDuedate.appendChild(labelDuedate)
            sectionDuedate.appendChild(inputDuedate)

            form.appendChild(sectionDescription)
            sectionDescription.appendChild(labelDescription)
            sectionDescription.appendChild(inputDescription)

            form.appendChild(sectionPriority)
            sectionPriority.appendChild(labelPriority)
            sectionPriority.appendChild(inputPriority)

            form.appendChild(sectionNotes)
            sectionNotes.appendChild(labelNotes)
            sectionNotes.appendChild(inputNotes)

            form.appendChild(sectionChecklist)
            sectionChecklist.appendChild(labelChecklist)
            sectionChecklist.appendChild(inputChecklist)

            form.appendChild(changeBtn)
            })
    
        if(description !== null){
            expand.textContent = 'expand'
            description.remove()
            priority.remove()
            notes.remove()
            checklist.remove()
            edit.remove()
            if(form !== null){
                form.remove()
            }
            return null
            }
                
        expand.textContent = 'hide'

        const descriptionDiv = document.createElement('div')
        descriptionDiv.classList.toggle('description')
        descriptionDiv.textContent = `description: ${dataList.at(arrIndex).description}`

        const priorityDiv = document.createElement('div')
        priorityDiv.classList.toggle('priority')
        priorityDiv.textContent = `priority: ${dataList.at(arrIndex).priority}`

        const notesDiv = document.createElement('div')
        notesDiv.classList.toggle('notes')
        notesDiv.textContent = `notes: ${dataList.at(arrIndex).notes}`

        const checklistDiv = document.createElement('div')
        checklistDiv.classList.toggle('checklist')
        if(dataList.at(arrIndex).checklist === true){
            checklistDiv.textContent = 'progress: done'
        }else{
            checklistDiv.textContent = 'progress: pending'
        }

        expand.remove()
        del.remove()

        containerDiv.appendChild(descriptionDiv)
        containerDiv.appendChild(priorityDiv)
        containerDiv.appendChild(notesDiv)
        containerDiv.appendChild(checklistDiv)
        containerDiv.appendChild(expandButton)
        containerDiv.appendChild(delBtn)
        containerDiv.appendChild(editBtn)
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