import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { ModalData } from '../../../model/view/ModalData';
declare var $ : any;

@Component({
  selector: 'app-two-buttons-modal',
  templateUrl: './two-buttons-modal.component.html',
  styleUrls: ['./two-buttons-modal.component.css']
})
export class TwoButtonsModalComponent implements OnInit {

  @Input() modalData: ModalData;
  @Output() requetTrigger : EventEmitter<any> = new EventEmitter<any>();
  @Input() deleteMessageTrigger: EventEmitter<any> = new EventEmitter();

  constructor() {
    
  }

  startAcceptActions() {
    this.emitRequestEvent();
    this.closeModal();
  }

  emitRequestEvent() {
    console.log("TwoButtonsModalComponent: emitRequstEvent");
    console.log("Wysyłam trigger");
    this.requetTrigger.emit(null);
  }

  showModal() {
    $("#messageModal").modal('show');
  }

  closeModal() {
    $("#messageModal").modal('hide');
  }

  ngOnInit() {
  
  }

}
