import { Routes } from '@angular/router';
import { HomeFormComponent } from './home-form/home-form.component';
import { StudentsComponent } from './students/students.component';
import { StudentsDetailsComponent } from './students-details/students-details.component';
import { ProfileComponent } from './profile/profile.component';
import { ErrorComponent } from './error/error.component';

export const routes: Routes = [
	{ path: '', component: HomeFormComponent },
	{ path: 'home', component: HomeFormComponent },
	{ path: 'students', component: StudentsComponent },
	{ path: 'students/:id', component: StudentsDetailsComponent },
	{ path: 'profile', component: ProfileComponent },
	{ path: '**', component: ErrorComponent },
];
