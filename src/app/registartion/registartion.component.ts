import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Student } from '../helpers/types';

@Component({
	selector: 'app-registartion',
	standalone: true,
	imports: [FormsModule],
	templateUrl: './registartion.component.html',
	styleUrl: './registartion.component.css',
})
export class RegistartionComponent {
	name!: string;
	age!: number;
	id: number = 0;
	std: Student = { id: 0, name: 'placeholder', age: 0 };
  nameValid: boolean = true;
  ageValid: boolean = true;

	@Output() registareEvent = new EventEmitter<Student>();

	addStd(e: Event) {
		this.name && this.name.length >= 3  ? (this.nameValid = true) : (this.nameValid = false);
		this.age && this.age >= 10 && this.age <= 30 ? (this.ageValid = true) : (this.ageValid = false);

		if (!this.nameValid || !this.ageValid) {
			e.preventDefault();
		} else {
			this.std.id = ++this.id;
			this.std.name = this.name;
			this.std.age = this.age;
			this.registareEvent.emit(this.std);
		}
	}
}
