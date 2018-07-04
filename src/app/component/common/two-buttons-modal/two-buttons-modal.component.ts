import { Component, OnInit, Input } from '@angular/core';
import { ModalData } from '../../../model/view/ModalData'

@Component({
  selector: 'app-two-buttons-modal',
  templateUrl: './two-buttons-modal.component.html',
  styleUrls: ['./two-buttons-modal.component.css']
})
export class TwoButtonsModalComponent implements OnInit {

  @Input() modalData: ModalData;

  constructor() {

  }

  showModal() {
    
  }

  ngOnInit() {
  }

}
