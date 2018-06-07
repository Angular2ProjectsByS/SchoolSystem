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
      $("i").css("transform", "rotate(90deg)");
    });
    $(".search-field").focusout(function() {
      $("i").css("transform", "rotate(0deg)");
    });
  }

}
