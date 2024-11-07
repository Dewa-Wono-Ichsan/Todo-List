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


// list.prototype.getIndex = function(){
//     const num = myList.findIndex((el) => el === this)

//     return num
// }

// list.prototype.delete = function(){
//     let indexNum = this.getIndex()
//     return myList.splice(indexNum, 1)
// }

// list.prototype.provideNumber = function(number){
//     number++
// }

const myList = []

export default list
export {myList, addList}