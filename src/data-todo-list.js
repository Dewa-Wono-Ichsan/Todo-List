import { valueProject } from "./dom"

function list(title, description, dueDate, priority, notes, checklist){
    this.title = title
    this.description = description
    this.dueDate = dueDate
    this.priority = priority
    this.notes = notes
    this.checklist = checklist
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

function addProject(){
    myList.project[`${valueProject.value}`] = []
    console.warn(myList)
    valueProject.value = ''
}
    
const myList = {
    notInProject: [],
    project: {},
}

export default list
export {myList, addList, addProject}