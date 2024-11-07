import './styles.css'
import toDoListData, {myList, addList} from './data-todo-list.js'


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

// function takeEl(arr, numStart, numMid){
//     const arr1 = arr.slice(numStart, numMid)
//     const arr2 = arr.slice(numMid + 1)
//     const arrResult = arr1.concat(arr2)

//     return arrResult
// }
// let test = myList.slice(0,2)
// let test2 = myList.slice(3)
// let testResult = test.concat(test2)

// console.log([test, test2, testResult, takeEl(myList, 0, 2)])