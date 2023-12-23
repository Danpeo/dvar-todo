import {Entity} from "./entity";
import {TodoItem} from "./todoItem";

export class TodoList extends Entity {
  name: string = "";
  todoItems: TodoItem[] = [];

  constructor(name: string = '', todoItems: TodoItem[] = []) {
    super();
    this.name = name;
    this.todoItems = todoItems;
  }

}
