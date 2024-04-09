import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { HomeFormComponent } from './home-form/home-form.component';
import { ProfileComponent } from './profile/profile.component';
import { StudentsComponent } from './students/students.component';
import { StudentsDetailsComponent } from './students-details/students-details.component';
import { ErrorComponent } from './error/error.component';

@Component({
	selector: 'app-root',
	standalone: true,
	imports: [
		RouterOutlet,
		HeaderComponent,
		HomeFormComponent,
		ProfileComponent,
		StudentsComponent,
		StudentsDetailsComponent,
		ErrorComponent,
	],
	templateUrl: './app.component.html',
	styleUrl: './app.component.css',
})
export class AppComponent {
	title = 'lab-4';
}
