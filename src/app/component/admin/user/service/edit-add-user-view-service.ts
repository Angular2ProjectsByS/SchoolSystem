declare var $: any;

export class EditAddUserViewService {

    customizeYearInput() {
        $(function() {
            $('#datepicker').datepicker({
                changeYear: true,
                showButtonPanel: true,
                dateFormat: 'yy',
                onClose: function(dateText, inst) {
                    const year = $('#ui-datepicker-div .ui-datepicker-year :selected').val();
                    $(this).datepicker('setDate', new Date(year, 1));
                }
            });
         $('.date-picker-year').focus(function () {
                $('.ui-datepicker-month').hide();
            });
        });
    }

}
