import './styles.css'
import toDoListData, {myList, addList, addProject, getTodoListData} from './data-todo-list.js'
import remove, {delList} from './remove-todo-list.js'
import {addProjectBtn, valueProject, containerList, displayList, displayListAlter, displayProject} from './dom.js'


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
// localStorage.clear()
getTodoListData()
// addProject()
displayProject(myList)
console.log(myList)

displayListAlter(myList.notInProject)

addProjectBtn.addEventListener('click', addProject)