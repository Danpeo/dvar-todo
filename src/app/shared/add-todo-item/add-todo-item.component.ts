import {Component, EventEmitter, Input, Output} from '@angular/core';
import {TodoItem} from "../../entities/todoItem";
import {NgForOf} from "@angular/common";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-add-todo-item',
  standalone: true,
  imports: [
    NgForOf,
    FormsModule
  ],
  templateUrl: './add-todo-item.component.html',
  styleUrl: './add-todo-item.component.css'
})
export class AddTodoItemComponent {
  @Input({required: true}) items: TodoItem[] = [];
  @Output() itemsChange = new EventEmitter<TodoItem[]>();

  constructor() {
  }

  addItem(): void {
    this.items.push(new TodoItem());
    this.itemsChange.emit(this.items)
  }

  removeItem(index: number) {
    this.items.splice(index, 1);
    this.itemsChange.emit(this.items)
  }
}
