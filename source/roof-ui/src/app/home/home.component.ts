import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PropertyService } from '../properties/property.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'app';
  selectedValue = '';
  items = [
    { value: '0', view: 'zero' },
    { value: '1', view: 'one' },
    { value: '2', view: 'Two' }
  ];
  searchForm: FormGroup;
  propertyData: any[];
  allPropertyData: any[];
  // tslint:disable-next-line: variable-name

  constructor(private propertyService: PropertyService) {
    this.searchForm = new FormGroup({
      city: new FormControl(Validators.required),
      bhk: new FormControl(Validators.required)
    });
  }
  async onSearchPropertyHandler() {
    console.log(this.searchForm.value.city);
    console.log(this.searchForm.value.bhk);
    this.propertyData = await this.propertyService.filterProperty(this.searchForm.value.city, this.searchForm.value.bhk);
    this.allPropertyData = this.propertyData;
    console.log('Inside filter');
    console.log(this.propertyData);

  }
  async getAllProperties() {
    this.allPropertyData = await this.propertyService.getAllProperties();
  }
  ngOnInit() {

    this.getAllProperties();
  }
//   set enteredCity(newValue: string)  {
//     this._enteredCity = newValue;
//   }
//   filterCity() {
// this.searchForm.value.city = this._enteredCity;
// console.log(this.searchForm.value.city);
//   }

}
