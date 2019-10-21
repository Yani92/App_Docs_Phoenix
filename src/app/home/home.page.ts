import { Component, OnInit, OnDestroy } from '@angular/core';
import { LoginService } from '../pages/services/login.service';
import { User } from '../models/models';
import { Router } from '@angular/router';
import { ComponentRef } from '@angular/core/src/render3';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {


  public user: User

  constructor(
    private loginSrv: LoginService,
    private router: Router
  ) {

  }

  ngOnInit() {
    this.user = this.loginSrv.getUser()
  }

  logOut() {
    this.loginSrv.LOGOUT()
    this.router.navigate(['login'])
  }

}
