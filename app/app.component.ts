import { Component } from '@angular/core';
import {Todo} from './todo';

const TODOS: Todo[] = [
  { id: 1, task: 'Walk dog', status: false },
  { id: 2, task: 'Finish website', status: true},
  { id: 3, task: 'Learn Angular 2', status: false}
];

@Component({
	moduleId: module.id,
  selector: 'todo-lists',
  templateUrl: './templates/todoLists.html',
  styleUrls: ['./styles/todoLists.css', '../node_modules/ng2-dnd/style.css']

})

export class AppComponent {
	title = 'My Todo List';
	todos = TODOS;

	
  delete(clickedTodo:Todo){
    if (!clickedTodo) { return; }
    for(var i=0; i < this.todos.length; i++) {
        console.log(this.todos[i]);
       if(this.todos[i].task == clickedTodo.task )
       {  
          this.todos.splice(i,1);
       }
    }
  }


  add(task: string): void {
    task = task.trim();
    if (!task) { return; }

    var lastIndex = (this.todos.length);
    console.log(lastIndex);
    this.todos.push({id: lastIndex + 1, task: task, status: false });
  }
}
