import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm!: FormGroup;

  constructor(){}

  ngOnInit(): void {
    console.log("inside ngonint");
    this.loginForm = new FormGroup({
      'email' : new FormControl('abc@gmail.com'),
      'password' : new FormControl()

    });
    console.log(this.loginForm.value);

  }  
  onSubmit(formData:any){
    console.log(formData.value);

  }
 


}
