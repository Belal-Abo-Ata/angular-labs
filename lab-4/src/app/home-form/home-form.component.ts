import { Component } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
	selector: 'app-home-form',
	standalone: true,
	imports: [ReactiveFormsModule],
	templateUrl: './home-form.component.html',
	styles: ``,
})
export class HomeFormComponent {
	checkForm = new FormGroup({
		name: new FormControl('', [Validators.minLength(3), Validators.required]),
		age: new FormControl(null, [
			Validators.pattern('[0-9]+'),
			Validators.min(20),
			Validators.max(40),
			Validators.required,
		]),
		email: new FormControl('', [Validators.email, Validators.required]),
	});

	checkData() {
		console.log(`name: ${this.nameValid}, age: ${this.ageValid}, email: ${this.emailValid}`);

		if (this.ageValid && this.nameValid && this.emailValid) {
			alert('the data are valid');
		}
	}

	get ageValid(): boolean {
		return this.checkForm.controls.age.valid;
	}
	get nameValid(): boolean {
		return this.checkForm.controls.name.valid;
	}
	get emailValid(): boolean {
		return this.checkForm.controls.email.valid;
	}
}
