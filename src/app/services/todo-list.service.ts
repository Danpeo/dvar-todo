import { Injectable } from '@angular/core';
import {TodoList} from "../entities/todoList";
import {LocalStorageService} from "./local-storage.service";

@Injectable({
  providedIn: 'root'
})
export class TodoListService {
  private readonly listLocalStorageKey: string = 'todoLists';
  todoLists: TodoList[] = [];

  constructor(private readonly localStorageService: LocalStorageService<TodoList>) {
    this.todoLists = localStorageService.loadFromStorage(this.listLocalStorageKey);
  }

  createNew(list: TodoList) {
    this.todoLists.push(list);
    this.localStorageService.saveToLocalStorage(this.listLocalStorageKey, this.todoLists);
  }

  update(lists: TodoList[]) {
    this.localStorageService.saveToLocalStorage(this.listLocalStorageKey, lists);
  }
}
