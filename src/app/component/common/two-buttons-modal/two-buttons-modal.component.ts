import { Component, OnInit } from '@angular/core';
import { ModalData } from '../../../model/view/ModalData'

@Component({
  selector: 'app-two-buttons-modal',
  templateUrl: './two-buttons-modal.component.html',
  styleUrls: ['./two-buttons-modal.component.css']
})
export class TwoButtonsModalComponent implements OnInit {

  private modalData: ModalData;

  constructor() {

  }

  ngOnInit() {
  }

}
