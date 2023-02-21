
		$(document).ready(function() {
			
			//			created bills  datatable
			$('#created-bills thead tr').clone(true).appendTo( '#created-bills thead' );
			$('#created-bills thead tr:eq(1) th').each( function (i) {
				$(this).addClass('d-none');
			var title = $(this).text();
			$(this).html( '<input type="text" placeholder="Search '+title+'" />' );
				
			//			filtering by bill status
			$( '.created-bills #bill-status').on( 'change', function () {
				if ( table.column(2).search() !== this.value ) {
					table
						.column(2)
						.search( this.value )
						.draw();
				}
			} );
				
				//				filtering by agent
				$( '.created-bills #agent-name').on( 'change', function () {
				if ( table.column(4).search() !== this.value ) {
					table
						.column(4)
						.search( this.value )
						.draw();
				}
			} );
				
				//				filtering by merchant
				$( '#merchant').on( 'change', function () {
				if ( table.column(1).search() !== this.value ) {
					table
						.column(1)
						.search( this.value )
						.draw();
				}
			} );
				
		} );
			var table = $('#created-bills').DataTable( {
			orderCellsTop: true,
			fixedHeader: true,
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
				title: "Export Data"
			  }, {
				extend: "csvHtml5",
				title: "Export Data"
			  }, {
				extend: "print",
				title: "Created Bills"
			  }],
			  initComplete: function (a, b) {
				$(this).closest(".dataTables_wrapper").find("#created-bills_filter").append('<div class="dataTables_buttons actions"><span class="actions__item zmdi zmdi-print" data-table-action="print" /><span class="actions__item zmdi zmdi-fullscreen" data-table-action="fullscreen" /><div class="dropdown actions__item"><i data-toggle="dropdown" class="zmdi zmdi-download" /><ul class="dropdown-menu dropdown-menu-right"><a href="" class="dropdown-item" data-table-action="excel">Excel (.xlsx)</a><a href="" class="dropdown-item" data-table-action="csv">CSV (.csv)</a></ul></div></div>')
			  }
		} );
			
			
//			$('#created-bills').DataTable();
			
			 $("body").on("click", "[data-table-action]", function (a) {
			  a.preventDefault();
			  var b = $(this).data("table-action");
			  if ("excel" === b && $(this).closest(".dataTables_wrapper").find(".buttons-excel").trigger("click"), "csv" === b && $(this).closest(".dataTables_wrapper").find(".buttons-csv").trigger("click"), "print" === b && $(this).closest(".dataTables_wrapper").find(".buttons-print").trigger("click"), "fullscreen" === b) {
				var c = $(this).closest(".card");
				c.hasClass("card--fullscreen") ? (c.removeClass("card--fullscreen"), $("body").removeClass("data-table-toggled")) : (c.addClass("card--fullscreen"), $("body").addClass("data-table-toggled"))
			  }
			});
		} );
		
		$(document).ready(function() {
			$('#receipted-bills thead tr').clone(true).appendTo( '#receipted-bills thead' );
			$('#receipted-bills thead tr:eq(1) th').each( function (i) {
			$(this).addClass('d-none');
			var title = $(this).text();
			$(this).html( '<input type="text" placeholder="Search '+title+'" />' );
				
				//			filtering by payment mode
			$( '.receipted-bills #payment-mode').on( 'change', function () {
				if ( table.column(2).search() !== this.value ) {
					table
						.column(2)
						.search( this.value )
						.draw();
				}
			} );
				
				//			filtering by receipting agent
			$( '.receipted-bills #agent-name').on( 'change', function () {
				if ( table.column(5).search() !== this.value ) {
					table
						.column(5)
						.search( this.value )
						.draw();
				}
			} );
				
				//			filtering by billing agent
			$( '.receipted-bills #billed-by').on( 'change', function () {
				if ( table.column(4).search() !== this.value ) {
					table
						.column(4)
						.search( this.value )
						.draw();
				}
			} );
				
				
				
			});
			
			var table = $('#receipted-bills').DataTable(
			{
			orderCellsTop: true,
			fixedHeader: true,
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
				title: "Receipted Bills"
			  }, {
				extend: "csvHtml5",
				title: "Receipted Bills"
			  }, {
				extend: "print",
				title: "Receipted Bills"
			  }],
			  initComplete: function (a, b) {
				$(this).closest(".dataTables_wrapper").find("#receipted-bills_filter").append('<div class="dataTables_buttons actions"><span class="actions__item zmdi zmdi-print" data-table-action="print" /><span class="actions__item zmdi zmdi-fullscreen" data-table-action="fullscreen" /><div class="dropdown actions__item"><i data-toggle="dropdown" class="zmdi zmdi-download" /><ul class="dropdown-menu dropdown-menu-right"><a href="" class="dropdown-item" data-table-action="excel">Excel (.xlsx)</a><a href="" class="dropdown-item" data-table-action="csv">CSV (.csv)</a></ul></div></div>')
			  }
		});
 
					var filteredData = table
					.column( 0 )
					.data()
					.filter( function ( value, index ) {
						return value > 20 ? true : false;
					});
			
			
			
			
			
//			$('#receipted-bills').DataTable();
		} );
		
		$(document).ready(function() {
			$('#top-up').DataTable(
			{
			orderCellsTop: true,
			fixedHeader: true,
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
				title: "Top Up transaction Reports"
			  }, {
				extend: "csvHtml5",
				title: "Top Up transaction Reports"
			  }, {
				extend: "print",
				title: "Top Up transaction Reports",
				  subTitle:"prepared by: names name"
			  }],
			  initComplete: function (a, b) {
				$(this).closest(".dataTables_wrapper").find("#top-up_filter").append('<div class="dataTables_buttons actions"><span class="actions__item zmdi zmdi-print" data-table-action="print" /><span class="actions__item zmdi zmdi-fullscreen" data-table-action="fullscreen" /><div class="dropdown actions__item"><i data-toggle="dropdown" class="zmdi zmdi-download" /><ul class="dropdown-menu dropdown-menu-right"><a href="" class="dropdown-item" data-table-action="excel">Excel (.xlsx)</a><a href="" class="dropdown-item" data-table-action="csv">CSV (.csv)</a></ul></div></div>')
			  }
		});
		} );