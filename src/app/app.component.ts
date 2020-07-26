import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;

  cars = [];
  companies = [];

  pushCars(data) {
    this.cars.push(data);
  }

   onRemoveCar(item) {
    this.cars.splice(item, 1);
  }

  pushCompanies(data) {
    this.companies.push(data);
  }

   onRemoveCompany(item) {
    this.companies.splice(item, 1);
  }

 
}
