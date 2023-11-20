import { Component } from '@angular/core';
import { Task } from 'src/Interface/task';
import { TaskServiceService } from '../task-service.service';

@Component({
  selector: 'app-task-component',
  templateUrl: './task-component.component.html',
  styleUrls: ['./task-component.component.css']
})
export class TaskComponentComponent {
      
  tasks: Task[]=this.taskService.tasks

  constructor(private taskService:TaskServiceService) {}

  

  getTask() {
   this.tasks = this.taskService.getTask()
  }
  
  addTask(task:Task) {
    this.taskService.addTask(task)
  }

  editTask() {
    console.log('edit')
  }

  deleteTask(id: number) {
    console.log('delete task')
    this.taskService.deleteTask(id)
  }

}
