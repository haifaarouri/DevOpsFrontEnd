import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CrudsService } from '../core/services/cruds.service';
import { Instructor } from '../core/model/instructor';

@Component({
  selector: 'app-instructor-form',
  templateUrl: './instructor-form.component.html',
  styleUrls: ['./instructor-form.component.css']
})
export class InstructorFormComponent implements OnInit {

  public form: FormGroup;
  public action: String;
  public instructor: Instructor;

  constructor(private formBuilder: FormBuilder,
    private crudService: CrudsService,
    private router: Router,
    private currentRoute: ActivatedRoute
  ) { }
  ngOnInit(): void {
    
    this.form = this.formBuilder.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      dateOfHire: [null, [Validators.required]],
    });
    let id = this.currentRoute.snapshot.params['id'];
    if (id != null) {
      this.action = 'Update';
      this.crudService.getById("", id).subscribe(
        (object: Instructor) => this.instructor = object
      )
    } else {
      this.action = 'Add';
      this.instructor = new Instructor();
    }
  }
  submit() {
    if (this.action == 'Add') {
      this.crudService.add("", this.instructor).subscribe(
        () => { this.router.navigate(['/']) }
      );
    }
    else if (this.action == 'Update') {
      this.crudService.update("", this.instructor).subscribe(
        () => this.router.navigate(['/'])
      )
    }
    else {
      this.router.navigate(['/']);
    }
  }
}
