$(document).ready(function () {
    var statusFilter;
    var documentTitle;
    var payslipMonth=moment().subtract(1, 'months').format('MMMM');
    documentTitle=payslipMonth+" Payslips";

    function PayslipMonth(){
        $('.filter-container .drop-txt a').on('click', function(){
            var payslipMonth=$(this).text();
            return payslipMonth;
           
        });
    }

 $('.filter-container .loanFilter').on('change', function(){
     statusFilter=$(this).val();

        if(statusFilter==="withLoans"){
            statusFilter="Has Loan";
            documentTitle=PayslipMonth+"'s Members with Loans";
        }

        if(statusFilter==="withoutLoans"){
            statusFilter="No Loan";
            documentTitle=PayslipMonth+"'s Members without loans"
        }

       

        var data_table = $('#bulk_sms').DataTable();
        var column_index = 4;
        data_table.columns(column_index).search(statusFilter, true, false).draw();
       

        if(statusFilter==="all"){
            data_table.columns(column_index).search('', true, false).draw();
             documentTitle=PayslipMonth+"'s Members"
        }

 });

 startDataTable();

 function startDataTable(){
    if ($("#bulk_sms")[0]) {
        $("#bulk_sms").DataTable({
          autoWidth: !1,
          responsive: !0,
          lengthMenu: [
            [15, 30, 45, -1],
            ["15 Rows", "30 Rows", "45 Rows", "Everything"]
          ],
          language: {
            searchPlaceholder: "Search for records..."
          },
          sDom: '<"dataTables__top"lfB>rt<"dataTables__bottom"ip><"clear">',
          buttons: [{
            extend: "excelHtml5",
            title: documentTitle ,
          }, {
            extend: "csvHtml5",
            title: documentTitle
          }, {
            extend: "print",
            title: documentTitle
          }],
          initComplete: function (a, b) {
            $(this).closest(".dataTables_wrapper").find(".dataTables__top").prepend('<div class="dataTables_buttons  actions"><span class="actions__item zmdi zmdi-print" data-table-action="print" /><span class="actions__item zmdi zmdi-fullscreen fullscreen-btn" data-table-action="fullscreenData" /><div class="dropdown actions__item"><i data-toggle="dropdown" class="zmdi zmdi-download" /><ul class="dropdown-menu dropdown-menu-right"><a href="" class="dropdown-item" data-table-action="excel">Excel (.xlsx)</a><a href="" class="dropdown-item" data-table-action="csv">CSV (.csv)</a></ul></div></div>')
          }
        }),
        
        $(".dataTables_filter input[type=search]").focus(function () {
          $(this).closest(".dataTables_filter").addClass("dataTables_filter--toggled")
        }), $(".dataTables_filter input[type=search]").blur(function () {
          $(this).closest(".dataTables_filter").removeClass("dataTables_filter--toggled")
        }), $("body").on("click", "[data-table-action]", function (a) {
          a.preventDefault();
          var b = $(this).data("table-action");
          if ("excel" === b && $(this).closest(".dataTables_wrapper").find(".buttons-excel").trigger("click"), "csv" === b && $(this).closest(".dataTables_wrapper").find(".buttons-csv").trigger("click"), "print" === b && $(this).closest(".dataTables_wrapper").find(".buttons-print").trigger("click"), "fullscreenData" === b) {
            var c = $(this).parent().parent().parent().parent().parent().parent().parent()
            c.hasClass("card--fullscreen") ? (c.removeClass("card--fullscreen"), $("body").removeClass("data-table-toggled")) : (c.addClass("card--fullscreen"), $("body").addClass("data-table-toggled"))
          }
        })
      }
 }
	
	
	
  
});

