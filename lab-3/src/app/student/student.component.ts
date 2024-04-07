import { Component, Input } from '@angular/core';
import { Student } from '../helpers/types';

@Component({
	selector: 'app-student',
	standalone: true,
	imports: [],
	templateUrl: './student.component.html',
	styleUrl: './student.component.css',
})
export class StudentComponent {
	@Input() stdArr: Student[] = [];
}

