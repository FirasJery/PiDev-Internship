import { Component } from '@angular/core';
import {UserServiceService} from "../../Services/UserService/user-service.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-user-management-component',
  templateUrl: './user-management-component.component.html',
  styleUrl: './user-management-component.component.css'
})
export class UserManagementComponentComponent {

  message: string = "";
  constructor(private UserService: UserServiceService, private router: Router, private route: ActivatedRoute) {
  }
  addUser()
  {
    this.message = this.UserService.adduser();
  }

}
