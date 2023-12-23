import {Entity} from "./entity";

export class TodoItem extends Entity {
  name: string;
  done: boolean = false;

  constructor(name: string = '') {
    super();
    this.name = name;
  }
}
