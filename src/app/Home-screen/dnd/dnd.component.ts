import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-dnd',
  templateUrl: './dnd.component.html',
  styleUrls: ['./dnd.component.css'],
})
export class DndComponent {
  todo = [
    'Seperate',
    'Find Contract (Lydia)'
  ];

  done = [
    'Find Job (Brian)'
  ];

  drop(event: CdkDragDrop<string[]>): void {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
          event.container.data,
          event.previousIndex,
          event.currentIndex);
    }
  }

  onSubmit(f: NgForm){
    const newTodo = JSON.stringify(f.value.first).slice(1, -1);
    this.todo.push(newTodo);
    //Store new Todo state in local storage
    localStorage.setItem('todos', newTodo);
  }
}
