import './styles.css'
import toDoListData, {myList, addList, addProject} from './data-todo-list.js'
import remove from './remove-todo-list.js'
import {addProjectBtn, valueProject, containerList} from './dom.js'


addList(
    'play soccer',
    'Go to private field with my friend',
    'tomorrow',
    'regular',
    'bring billfold and two pair of shoes',
    true,
)
addList(
    'repair my smartphone',
    'visit my trustworthy enginner that can fix my smartphone',
    'today',
    'urgent',
    'ask engineer for done repait process tomorrow',
    false,
)
addList(
    'Go to Sixpath library',
    'return expired rent Naruto light novel',
    '9 February 2025',
    'urgent',
    'Ask for return book evidence from library staff',
    false,
)
addList(
    'Go to traditional market',
    'Buy vegetables and fruits',
    'every morning',
    'urgent',
    '1 kg of banana, 1 kg of eggs, spinach',
    true,
)
addList(
    'Clean my house',
    'mop first and second floor',
    'every Sunday',
    'urgent',
    'Check mop and broom',
    true,
)

console.log(myList)

for (let index = 0; index < myList.notInProject.length; index++) {

    const div = document.createElement('div')
    div.classList.toggle('container-todo-list')
    containerList.appendChild(div)
}

for (let index = 0; index < document.querySelectorAll('.container-todo-list').length; index++) {
    const div = document.querySelector(`.container-todo-list:nth-child(${index + 1})`)
    
    const titleDiv = document.createElement('div')
    titleDiv.classList.toggle('title')
    titleDiv.textContent = myList.notInProject.at(index).title
    div.appendChild(titleDiv)

    const descriptionDiv = document.createElement('div')
    descriptionDiv.classList.toggle('description')
    descriptionDiv.textContent = myList.notInProject.at(index).description
    div.appendChild(descriptionDiv)

    const dueDateDiv = document.createElement('div')
    dueDateDiv.classList.toggle('dueDate')
    dueDateDiv.textContent = myList.notInProject.at(index).dueDate
    div.appendChild(dueDateDiv)

    const priorityDiv = document.createElement('div')
    priorityDiv.classList.toggle('priority')
    priorityDiv.textContent = myList.notInProject.at(index).priority
    div.appendChild(priorityDiv)

    const notesDiv = document.createElement('div')
    notesDiv.classList.toggle('notes')
    notesDiv.textContent = myList.notInProject.at(index).notes
    div.appendChild(notesDiv)

    const checklistDiv = document.createElement('div')
    checklistDiv.classList.toggle('checklist')
    checklistDiv.textContent = myList.notInProject.at(index).checklist
    div.appendChild(checklistDiv)
}


// remove(myList, 1)
// remove(myList, 2)

addProjectBtn.addEventListener('click', addProject)