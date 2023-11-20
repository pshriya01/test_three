import { Injectable } from '@angular/core';
import { Task } from 'src/Interface/task';

@Injectable({
  providedIn: 'root'
})
export class TaskServiceService {
  tasks: Task[] =[{id:1,title:"read",description:"read documentation",status:false},{id:2,title:"exercise",description:"ten min exercise",status:false}]
  constructor() {}

  getTask(): Task[] {
    return this.tasks
  }

  addTask(task:Task) {
    this.tasks.push(task)
  } 

  editTask(id: number,newtask:Task) {
       this.tasks=this.tasks.map((task)=>task.id===id?{...task,newtask}:task)
       console.log(this.tasks)
  }

  deleteTask(id: number) {
    this.tasks=this.tasks.filter((task)=>task.id!==id)
    console.log('service',this.tasks)
  }
}
