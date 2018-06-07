import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-admin-main-page',
  templateUrl: './admin-main-page.component.html',
  styleUrls: ['./admin-main-page.component.css']
})
export class AdminMainPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(document).ready(function(){
     
      
      // $(".nav-link").click(function(){
      //   alert(".navbar-toggler: " + $('.navbar-toggler').position().top);
      //   alert("")
      //   if ( $('.navbar-toggler').position().top > $('#navbarSupportedContent').position().top ) {
      //     alert("Przycisk jest wyżej");
      //   }
      //     $(".navbar-toggler").click();
      // });
  });
  }

}
