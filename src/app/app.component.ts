import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder // Dependency Injection or autowiring
  ) {
  }

  title = "my firs tapp in angular";
  
  isLoaded = true;
  data = [10, 20, 30, 40]; // global variable
  // First lifcyle hook
  ngOnInit(): void {
    let temp = null; //variable declaration
    console.log('temp -->', temp);
    if (temp === undefined) {
      console.log('value is undefined');
    }
    if (!temp) {
      console.log('value is undefined using not operator');
    }
    if (temp) {
      console.log('value is defined');
    }
    console.log('ng onit called', this.data);

  }

 
  // function sample() {

  // }

  sample() {

  }

  // using arrow function
  sample1 = () => {
    
  }
}