import { Component } from '@angular/core';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
 title:string="eshop"
 constructor(private accountService:AccountService){}
 login(){
  this.accountService.login();
 }
}
