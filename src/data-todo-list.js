import { valueProject, displayProject, } from "./dom.js"

function list(title, description, dueDate, priority, notes, checklist){
    this.title = title
    this.description = description
    this.dueDate = dueDate
    this.priority = priority
    this.notes = notes
    this.checklist = checklist
}

list.prototype.getTitle = function(){
    return this.title
}

function addList(
    title,
    description,
    dueDate,
    priority,
    notes,
    checklist){
        myList.notInProject.push(
            new list(
                title,
                description,
                dueDate,
                priority,
                notes,
                checklist,
            )
        )
    }

function addProjectList(
    title,
    description,
    dueDate,
    priority,
    notes,
    checklist,
    nav
){
    myList.project[nav].push(
        new list(
            title,
            description,
            dueDate,
            priority,
            notes,
            checklist,)
    )

}

function addProject(){
    if(valueProject.value === ''){
        return null
    }
    myList.project[`${valueProject.value}`] = []
    displayProject(myList)
    setTodoListData()
    valueProject.value = ''
}
    
const myList = {
    notInProject: [],
    project: {},
}

function setTodoListData(){

    localStorage.setItem('local save', JSON.stringify(myList))

}

function getTodoListData(){

    const data = JSON.parse(localStorage.getItem('local save'))

    if(data === null){
        return null
    }

    const setNotInProject = data.notInProject.map(
        value => new list(
            value.title,
            value.description,
            value.dueDate,
            value.priority,
            value.notes,
            value.checklist
        )
    )
    
    function getProject(){
        const setProject = {}
        const arr = Object.keys(data.project)

        for (let index = 0; index < arr.length; index++) {
            setProject[`${arr.at(index)}`] = data.project[`${arr.at(index)}`]
            .map(value => new list(
                value.title,
                value.description,
                value.dueDate,
                value.priority,
                value.notes,
                value.checklist
                )
            )
        }

        return setProject

    }

    myList.notInProject = setNotInProject
    myList.project = getProject()
}

export default list
export {myList, addList, addProject, addProjectList, getTodoListData, setTodoListData}