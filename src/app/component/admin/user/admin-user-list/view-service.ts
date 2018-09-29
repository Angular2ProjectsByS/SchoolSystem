import { Injectable } from "@angular/core";
import { RoleNames } from "@app/model/role-names";
declare var $ : any;

@Injectable()
export class ViewService {

    showOperationSection(i) {
        let display = $("#operations-section-" + i).css('display');
      
        if (display == "none") {
          $("#btn-op-section-" + i).css("transform", "rotate(90deg)");
          $("#operations-section-" + i).removeClass("d-none");
        }
        else {
          $("#btn-op-section-" + i).css("transform", "rotate(0deg)");
          $("#operations-section-" + i).addClass("d-none");
          
        }
      }

  showUserMoreInfoSection(i) {
    let display = $("#user-more-info-sec-" + i).css('display');
    if (display == "none") {
      $("#user-more-info-sec-" + i).css('display', 'block');
    }
    else {
      $("#user-more-info-sec-" + i).css('display', 'none');
    }
  }
    
  

}