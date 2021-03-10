import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import TodoCommunication from '../todoCommunication';


@Component({
  selector: 'app-al-todo-table',
  templateUrl: './al-todo-table.component.html',
  styleUrls: ['./al-todo-table.component.css']
})
export class AlTodoTableComponent implements OnInit {
  
  private getUrl = ('https://jsonplaceholder.typicode.com/todos?_limit=10');
  todos:any = [] ;

  constructor(private http:HttpClient, private todoCom:TodoCommunication) { }

  ngOnInit(): void {
    this.loadTodos();
    this.todoCom.newTodoStrem.subscribe(p => this.loadTodos());
  }

  private loadTodos(){
    this.http.get(this.getUrl).subscribe(
      response => this.todos = response
    );
  };

  doDelete(todo:any){
    this.http.delete(this.getUrl)+ "/" + todo.id.subscribe(
      data => this.loadTodos())  
  };
  

  

  
 
  }
