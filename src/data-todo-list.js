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
        myList.push(
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

const myList = []

export default list
export {myList, addList}