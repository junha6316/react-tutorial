export interface IToDo {
  id: number;
  text: string;
  category: 'DONE' | 'DOING' | 'TO_DO';
}

export interface IForm {
  toDo: string;
}
