import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

   userName:string = '';
   userAge:string = '';
   userPassword:string = '';
   userEmail:string = '';

   isFormInvalid(): boolean {
    if(this.userName && this.userAge && this.userEmail && this.userPassword){
return true;
    }else{
      return false;
    }
   }



}
