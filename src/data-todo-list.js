function list(title, description, dueDate, priority, notes, checklist){
    this.title = title
    this.description = description
    this.dueDate = dueDate
    this.priority = priority
    this.notes = notes
    this.checklist = checklist
}

let myList = []

export default list
export {myList}