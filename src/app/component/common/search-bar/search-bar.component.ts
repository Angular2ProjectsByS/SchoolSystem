import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  constructor() { }

  @Output() showAddFormTrigger : EventEmitter<any> = new EventEmitter<any>();
  @Output() passKeyWordsTrigger : EventEmitter<string[]> = new EventEmitter<string[]>()

  ngOnInit() {
    $(".search-field").focus(function() {
      $(".search-button-img").addClass("rotate-90");
    });
    $(".search-field").focusout(function() {
      $(".search-button-img").removeClass("rotate-90");
    });
  }

  public showAddForm() {
    this.showAddFormTrigger.emit();
  }
 

  passKeyWords(keyWords) {
    let keyWordsArray = keyWords.split(/\b(\s)/)
    this.passKeyWordsTrigger.emit(keyWordsArray);
  }

}
