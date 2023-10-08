import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, FormGroup } from "@angular/forms";


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
  loginForm!: FormGroup;

  // First lifcyle hook
  ngOnInit(): void {
    console.log('ng onit called');
    this.loginForm = this.formBuilder.group({
      userName: ['angular'],
      password: new FormControl('')
    });
  }

  login() {
    console.log(this.loginForm.value);
  }
}