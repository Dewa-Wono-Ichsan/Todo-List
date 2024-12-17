import { valueProject, displayProject, } from "./dom.js"

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
    myList.project[`${valueProject.value}`] = []
    displayProject(myList)
    valueProject.value = ''
}
    
const myList = {
    notInProject: [],
    project: {},
}

export default list
export {myList, addList, addProject, addProjectList}