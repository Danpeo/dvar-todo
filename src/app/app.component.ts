import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterOutlet} from '@angular/router';
import {TodoListService} from "./services/todo-list.service";
import {TodoList} from "./entities/todoList";
import {FormBuilder, ReactiveFormsModule, Validators} from "@angular/forms";
import {FormSectionComponent} from "./shared/form-section/form-section.component";
import {FormFieldSetComponent} from "./shared/form-field-set/form-field-set.component";
import {AddTodoItemComponent} from "./shared/add-todo-item/add-todo-item.component";
import {DisplayTodoComponent} from "./shared/display-todo/display-todo.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ReactiveFormsModule, FormSectionComponent, FormFieldSetComponent, AddTodoItemComponent, DisplayTodoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'DV TODO';
  todoLists: TodoList[] = [];

  todoList = new TodoList();

  todoForm = this.formBuilder.group({
    name: ['', Validators.required],
  });

  constructor(private readonly todoListService: TodoListService, private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.todoLists = this.todoListService.todoLists;
  }

  newItemClick(): void {
    let formValue = this.todoForm.value;

    if (formValue.name) {
      let newTodoList = new TodoList();

      newTodoList.name = formValue.name
      newTodoList.todoItems = [...this.todoList.todoItems]

      this.todoListService.createNew(newTodoList);
      this.todoList = new TodoList();
    }
  }
}
