import {Component, EventEmitter, Input, Output} from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent 
{
  title = 'onewaybinding';
  selectedAnimal: string = '';

selectChangeHandler (event: any) {
  
  this.selectedAnimal = event.target.value;
 ;
  console.log(event.target.value);
  if(this.selectedAnimal=="dog")
  {
    this.selectedAnimal="./assets/Animalimages/dog.jpeg";
  }else if(this.selectedAnimal=="lion")
  {
    this.selectedAnimal="./assets/Animalimages/Lion.jpeg";
  }
  else if(this.selectedAnimal=="elephant")
  {
    this.selectedAnimal="./assets/Animalimages/elephant.jpeg";
  }
  else if(this.selectedAnimal=="dianosar")
  {
    this.selectedAnimal="./assets/Animalimages/dianosar.jpeg";
  }
else if(this.selectedAnimal=="fox")
{
  this.selectedAnimal="./assets/Animalimages/fox.jpeg";
}
}
}