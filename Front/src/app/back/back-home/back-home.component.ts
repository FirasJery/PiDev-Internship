import {Component, OnInit} from '@angular/core';
import {UserServiceService} from "../../Services/UserService/user-service.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-back-home',
  templateUrl: './back-home.component.html',
  styleUrl: './back-home.component.css'
})
export class BackHomeComponent implements OnInit
{

  welcome: string = "Welcome to the back office";
  constructor(private UserService: UserServiceService, private router: Router, private route: ActivatedRoute) {
  }
  sidebarExpanded = true;

  ngOnInit() {
  }

  getWelcomeMessage()
  {
    this.welcome = this.UserService.getSuperAdmin();
  }



}
