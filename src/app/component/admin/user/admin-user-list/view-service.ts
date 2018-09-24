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

  changeColorForRoles() {
    console.log("changeColorForRoles");
    $(document).ready(function() {
      $(".role-info").each(function() {
        console.log('zmieniam kolory dla each');
        let bgColor = "#000";
        console.log($(this).text());
        switch ($(this).text().toUpperCase()) {
          case RoleNames.ADMIN :
            bgColor = "#E81123";
            break;
          case RoleNames.TEACHER:
            bgColor = "#F7630C";
            break;
          case RoleNames.STUDENT:
            bgColor = "#2ecc71";
            break;
          case RoleNames.PARENT:
            bgColor = "#0078D7";
            break;
        }
        console.log("bgColor: " + bgColor);
        $(this).css("background-color", bgColor);
      });
    })
    console.log($(".role-info"));
    
  }

}