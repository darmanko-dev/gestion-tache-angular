import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import TodoCommunication from '../todoCommunication';

@Component({
  selector: 'app-al-todo-form',
  templateUrl: './al-todo-form.component.html',
  styleUrls: ['./al-todo-form.component.css']
})
export class AlTodoFormComponent implements OnInit {

  private getUrl = ('https://jsonplaceholder.typicode.com/todos?_limit=10');

  constructor(private http:HttpClient , private todoCom:TodoCommunication) { }

  ngOnInit(): void {

  }

  doSUbmit(todo){
    this.http.post(this.getUrl,todo).subscribe((
      response => this.todoCom.newTodoCom()
    ))
  };
}
