import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RegistartionComponent } from './registartion/registartion.component';
import { StudentComponent } from './student/student.component';
import { Student } from './helpers/types';


@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet, RegistartionComponent, StudentComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
})
export class AppComponent {
    title = 'lab-3';
    stdArr: Student[] = [];
    addStd(std: Student) {
        this.stdArr.push(std);
        console.log(this.stdArr);

    }
}

