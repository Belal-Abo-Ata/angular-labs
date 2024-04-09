import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-students-details',
  standalone: true,
  imports: [],
  templateUrl: './students-details.component.html',
  styles: ``
})
export class StudentsDetailsComponent {
  id!: number;

  constructor(route: ActivatedRoute) {
    this.id = route.snapshot.params['id']
  }

}
