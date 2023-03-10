import { Component } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Todo } from '../todo';
import { DeleteTodo, GetTodos, SetSelectedTodo } from '../todo.action';
import { TodoState } from '../todo.state';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  
  @Select(TodoState.getTodoList) todos$!: Observable<Todo[]>;

  constructor(private store: Store) {
  }

  ngOnInit() {
    this.store.dispatch(new GetTodos());
  }

  deleteTodo(id: number) {
    this.store.dispatch(new DeleteTodo(id));
  }

  editTodo(payload: Todo) {
    this.store.dispatch(new SetSelectedTodo(payload));
  }

}
