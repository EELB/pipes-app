import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';
import { BasicInformation } from './model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'Personal data';

  userInformation: BasicInformation = {
    fullname: 'Pedro Picapieda',
    bithDate: new Date(),
    age: 21,
    weight: 89.5,
    salary: 10000,
  };

  ngOnInit(): void {
    initFlowbite();
  }
}
