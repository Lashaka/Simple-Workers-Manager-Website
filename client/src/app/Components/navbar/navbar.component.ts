import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit  {


  ngOnInit(): void {
// Get the current URL path
const path: string = window.location.pathname;

// Find the link with the matching routerLink attribute
const link: HTMLAnchorElement | null = document.querySelector(`[routerLink="${path}"]`);

// Add the active class to the link
if (link) {
  link.classList.add("active");
}
  }
}
