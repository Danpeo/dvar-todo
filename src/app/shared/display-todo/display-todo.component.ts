import {Component, EventEmitter, Input, Output} from '@angular/core';
import {TodoList} from "../../entities/todoList";
import {NgClass, NgForOf} from "@angular/common";
import {TodoItem} from "../../entities/todoItem";
import {LocalStorageService} from "../../services/local-storage.service";
import {TodoListService} from "../../services/todo-list.service";

@Component({
  selector: 'app-display-todo',
  standalone: true,
  imports: [
    NgForOf,
    NgClass
  ],
  templateUrl: './display-todo.component.html',
  styleUrl: './display-todo.component.css'
})
export class DisplayTodoComponent {
  @Input({required: true}) todoLists: TodoList[] = [];
  @Output() todoChanged = new EventEmitter<TodoList[]>();

  constructor(private todoListService: TodoListService) {
  }

  sortTodoItems(todoItems: TodoItem[]): TodoItem[] {
    return todoItems.slice().sort((lhs, rhs) => {
      return lhs.done === rhs.done ? 0 : lhs.done ? 1 : -1;
    });
  }

  toggleItem(item: TodoItem) {
    item.done = !item.done;
  }

  removeList(index: number) {
    this.todoLists.splice(index, 1);
    this.todoListService.update(this.todoLists);
  }
}
