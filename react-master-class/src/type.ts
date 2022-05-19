export enum ToDoCategory {
  Done = 'DONE',
  Doing = 'DOING',
  ToDo = 'TO_DO',
}

export interface IToDo {
  id: number;
  text: string;
  category: ToDoCategory;
}

export interface IForm {
  toDo: string;
}
