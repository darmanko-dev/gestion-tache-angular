import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AlTodoTableComponent } from './al-todo-table/al-todo-table.component';
import { AlTodoFormComponent } from './al-todo-form/al-todo-form.component';
import { HttpClientModule } from '@angular/common/http';
import TodoCommunication from './todoCommunication'
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AlTodoTableComponent,
    AlTodoFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [TodoCommunication],
  bootstrap: [AppComponent]
})
export class AppModule { }
