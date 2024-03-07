import {Component, ViewChild} from '@angular/core';
import {Sidebar} from "primeng/sidebar";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {
  // Property to track sidebar state
  public isSidebarOpen: boolean = true;

  constructor() {}

  toggleSidebar(): void {
    this.isSidebarOpen = !this.isSidebarOpen;
    // Additional logic to adjust the UI as needed
  }
}
