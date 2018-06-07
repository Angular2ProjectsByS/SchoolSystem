import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(".search-field").focus(function() {
      $(".search-button-img").addClass("rotate-90");
    });
    $(".search-field").focusout(function() {
      $(".search-button-img").removeClass("rotate-90");
    });
  }

}
