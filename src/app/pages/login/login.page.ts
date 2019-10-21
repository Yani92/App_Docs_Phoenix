import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { User } from '../../models/models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public user: User = {};

  constructor(
    private srv: LoginService,
    private router: Router,
  ) {
  }

  async ngOnInit() {

  }


  async onSubmitTemplate() {

    this.user = await this.srv.login(this.user.username, this.user.password);
    this.router.navigate(['home']);


  }

}
