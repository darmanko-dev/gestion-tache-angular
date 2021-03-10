import { Injectable } from "@angular/core";
import { Subject } from "rxjs";


@Injectable()
export default class TodoCommunication{

    private newTodo = new Subject <string>();

    newTodoStrem = this.newTodo.asObservable();

    constructor(){

    }

    newTodoCom(){
        this.newTodo.next("Ok");
    }

}