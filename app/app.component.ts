import { Component } from '@angular/core';

const todos = [
    'Изучить JavaScript',
    'Изучить Agnular 2',
    'Написать приложение'
];

@Component({
    moduleId: module.id,
    selector: 'app',
    templateUrl : 'app.component.html',
    styleUrls: ['app.component.css']
})
export class AppComponent {
    title = 'Angular 2Do';
    todos = todos;
}