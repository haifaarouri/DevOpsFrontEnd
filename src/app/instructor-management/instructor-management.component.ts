import { Component, OnInit } from '@angular/core';
import { CrudsService } from '../core/services/cruds.service';
import { Instructor } from 'src/app/core/model/instructor';

@Component({
  selector: 'app-instructor-management',
  templateUrl: './instructor-management.component.html',
  styleUrls: ['./instructor-management.component.css']
})
export class InstructorManagementComponent implements OnInit {

  public instructor: Instructor;
  public list: Instructor[];

  constructor(private crudsService : CrudsService) {}

  ngOnInit(): void {
    this.crudsService.getAll("").subscribe({
      next: (params) => {
        this.list = params;
        console.log(params);
        console.log(this.list);
      },
      error: (error) => {
        console.log(error);
      },
      complete: () => {
        console.log('complete');
      }
   })
  }

}
