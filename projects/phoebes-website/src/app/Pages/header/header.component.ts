import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  name: string = '';
  tabs: any[];
  constructor(private router: Router) {
    this.tabs = [
      { name: "Illustration", route: "/illustration", isActive: true },
      { name: "Shop", route: "/shop", isActive: false }
    ]
    this.router.events.subscribe((event) => {
      event instanceof NavigationEnd ? this.makeTabActive(event.url) : null;
    });
  }

  ngOnInit(): void {

  }

  makeTabActive(url: string) {
    this.tabs.forEach(function(tab){
      tab.isActive = false;
      if(url == tab.route){
        tab.isActive = true;
      }
    });
  };

}
