import './styles.css'
import toDoListData, {myList} from './data-todo-list.js'

myList.push(
    new toDoListData(
        'play soccer',
        'Go to private field with my friend',
        'tomorrow',
        'regular',
        'bring billfold',
        true,
    ),
    new toDoListData(
        'repair my smartphone',
        'visit my trustworthy enginner that can fix my smartphone',
        'today',
        'urgent',
        'ask engineer for done repait process tomorrow',
        false,
    ),
    new toDoListData(
        'Go to Sixpath library',
        'return expired rent Naruto light novel',
        '9 February 2025',
        'urgent',
        'Ask for return book evidence from library staff',
        false,
    ),
    new toDoListData(
        'Go to traditional market',
        'Buy vegetables and fruits',
        'every morning',
        'urgent',
        '1 kg of banana, 1 kg of eggs, spinach',
        true,
    ),
    new toDoListData(
        'Clean my house',
        'mop first and second floor',
        'every Sunday',
        'urgent',
        'Check mop and broom',
        true,
    )
)

console.log(myList)