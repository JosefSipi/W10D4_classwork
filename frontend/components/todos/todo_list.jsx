import React from 'react';
import { TodoListItem } from '../todo_list/todo_list_item'
import { receiveTodo } from '../../actions/todo_actions';
import TodoForm from '../todo_list/todo_form'

class TodoList extends React.Component {
 constructor(props) {
     super(props);

     this.state = {
        id: this.id,
        title: this.title, 
        body: this.body,
        done: this.done
     }

 }

    

 render() {
    return (
        <TodoForm receiveTodo={receiveTodo} />
    )
 }


//     return (
//     < div >
//       <h1>Todo List</h1>
//       <ul> 
//         {props.todos.map(todo => TodoListItem(todo))} 
//     </ul>
//     </div >
//   );
};

export default TodoList; 

