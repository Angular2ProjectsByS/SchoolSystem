import { Component, OnInit, ViewChild } from '@angular/core';
import { RestService } from '@app/service/global/request/rest-service.service';
import { Prefix } from '@app/model/school-classes/details/prefix';
import { ModalData } from '@app/model/view/ModalData';
import { URLS } from '@app/constants/urls';
import { TwoButtonsModalComponent } from '@app/component/common/two-buttons-modal/two-buttons-modal.component';
import { ResultRequest } from '@app/model/request/result-request';
import { Constants } from '@app/constants/constants';
import { BannerMessageInfo } from '@app/model/view/banner-message-info';

declare var $ : any;

@Component({
  selector: 'app-admin-prefixes',
  templateUrl: './admin-prefixes.component.html',
  styleUrls: ['./admin-prefixes.component.css']
})
export class AdminPrefixesComponent implements OnInit {

  noPrefixes: boolean = true;
  banerInfo: BannerMessageInfo;
  prefixes : Prefix[] = [];
  modalData : ModalData;
  prefixToDeletePosition : number;
  showAddForm : boolean = false;
  private editingPrefixIndex : number = -1;
  @ViewChild("twoButtonsModal") twoButtonsModal: TwoButtonsModalComponent;

  constructor(private restService : RestService) {
    this.initModalData();
    this.loadAllPrefixes();
  }

  ngOnInit() {
  }

  private initModalData():void {
    this.modalData = new ModalData();
    this.modalData.title = "";
    this.modalData.body = "";
    this.modalData.url = "";
  }

  private async loadAllPrefixes() {

    let url = URLS.prefixes.getAll;
    let resultRequestSet = await this.restService.get<Prefix>(url);
    

    if (resultRequestSet.responseCode == 200) {
      this.prefixes = resultRequestSet.result;
    }

    console.log("loadAllPrefixes: Sprawdzam kod odpowiedzi.");
    this.checkResponseCode(resultRequestSet);
    this.checkPrefixesExists(resultRequestSet);

  }

  showDeleteModal(index) {
    this.setupModalData(index);
    this.prefixToDeletePosition = index;
    this.twoButtonsModal.showModal();
  }


  private checkResponseCode(requestResult : ResultRequest) {
      if (requestResult.responseCode >= 400) {
        console.log("checkResponseCode: Mamy błąd powyżej 400");
        console.log("Code: " + requestResult.responseCode);
        this.noPrefixes = true;
        this.setProperMessageBanerContent(requestResult, Constants.LOADING_SCH_PREFIXES_ERROR, false);
      }
      else {
        this.noPrefixes = false;
      }
  }

  private checkPrefixesExists(resultRequest) {
    console.log("checkPrefixesExists");
    if (resultRequest.responseCode == 200) {
      console.log("checkPrefixesExists: kod 200");
      if (resultRequest.result.length == 0) {
        
        this.noPrefixes = true;
        this.banerInfo = new BannerMessageInfo();

        this.banerInfo
          .setAll(
            Constants.NO_SCH_PREFIXES_MESSAGE,
            Constants.ALERT_STYLES.ALERT_WARNING
          );
      }
    }
  }

  private setupModalData(index) {
    console.log("setupModalData");
    this.modalData.body = "Czy napewno chcesz usunąć prefix \"" 
      + this.prefixes[index].name
      + "\"? ";

    this.modalData.title = "Usuwanie prefiksu \"" + this.prefixes[index].name + "\""; 
  }

  async deletePrfixRequest() {
    console.log("deletePrfixRequest()");
    let url = URLS.prefixes.deleteOne + "/" + this.prefixes[this.prefixToDeletePosition].id;
    let response = await this.restService.delete(url);
    console.log("Sprawdzam kod błędu " + response.responseCode);
    this.setProperMessageBanerContent(response, Constants.DELETING_PREFIX_FAILURE_MESSAGE, true);
    if (response.responseCode == 200) {
      this.loadAllPrefixes(); 
    }
  }

  private setProperMessageBanerContent(requestResult : ResultRequest, errorString: string, showSuccess : boolean) {
    console.log("admin-prefix: setProperMessage");
    let banerInfo = new BannerMessageInfo();
    if (requestResult.responseCode == 200) {
      if (showSuccess) {
        console.log("kod 200");
        banerInfo = new BannerMessageInfo();
        banerInfo
          .setAll(
            Constants.REQUEST_SUCCESS_MESSAGE,
            Constants.ALERT_STYLES.ALERT_SUCCESS
          );

          this.banerInfo = banerInfo;
      }
    }
    else if (requestResult.responseCode >= 400 && requestResult.responseCode < 500) {
      console.log("Błąd 400");
      banerInfo = new BannerMessageInfo();

      banerInfo
        .setAll(
          errorString + Constants.MESSAGE_ERROR_400,
          Constants.ALERT_STYLES.ALERT_DANGER);

      this.banerInfo = banerInfo;
    }
    else if (requestResult.responseCode >= 500) {
      console.log("setProperMessageBannerContent: ustawiam bannerInfo na błąd dla 500");
      console.log("No prefixes: " + this.noPrefixes);
      console.log(this.prefixes);
      banerInfo = new BannerMessageInfo();
      banerInfo
        .setAll(
          errorString + Constants.MESSAGE_ERROR_500,
          Constants.ALERT_STYLES.ALERT_DANGER);

      this.banerInfo = banerInfo;
    }
  }

  showAddSetMessageResult(banerInfo) {
    console.log("Rezultat zbioru: ");
    console.log(banerInfo);
    
    this.banerInfo = banerInfo;
  }

  editSection(i) {
    console.log("editSection(i)");
    if (this.editingPrefixIndex < 0) {
      $("#editPrefixSection" + i).attr("hidden", false);
      this.editingPrefixIndex = i;
    }
    else if (this.editingPrefixIndex == i) {
      let hidden = $("#editPrefixSection" + i).attr("hidden");

      if (hidden === undefined) {
        $("#editPrefixSection" + i).attr("hidden", true);
      }
      else {
        $("#editPrefixSection" + i).attr("hidden", false);
      }
    }
    else {
      $("#editPrefixSection" + this.editingPrefixIndex).attr("hidden", true);
      $("#editPrefixSection" + i).attr("hidden", false);
      this.editingPrefixIndex = i;
    }

  }



}
