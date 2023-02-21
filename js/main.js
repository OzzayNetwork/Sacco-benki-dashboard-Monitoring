$(window).on('load', function () {
	new WOW().init();

    // date range picker manenos
	var start = moment();
	var end = moment();
	
	$(function() {
	
		function cb(start, end) {
			// $('#today').html(start.format('MMMM D, YYYY'));
	
			if(end.format('MMMM D, YYYY') === start.format('MMMM D, YYYY')){			
				$('#reportrange span').html(start.format('MMMM D, YYYY'));
				$('#today').html(start.format('MMMM D, YYYY'));
	
				if(moment().format('MMMM D, YYYY') === start.format('MMMM D, YYYY')){
					// if todays date is today
					$('#date-reset').addClass('d-none');
				}
				else{
					$('#date-reset').removeClass('d-none');	
				}
	
				
	
			} else {
				$('#reportrange span').html(start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY'));
				$('#today').html(start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY'));
				$('#date-reset').removeClass('d-none');	
			}
	
		}
	
		$('#reportrange').daterangepicker({
			startDate: start,
			endDate: end,
			ranges: {
				'Today': [moment(), moment()],
				'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
				'Last 7 Days': [moment().subtract(6, 'days'), moment()],
				'Last 30 Days': [moment().subtract(29, 'days'), moment()],
				'This Month': [moment().startOf('month'), moment().endOf('month')],
				'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
			}
		}, cb, );
	
		cb(start, end);
	
	});

	$("#date-reset").on('click', function (){
		$('#reportrange span').html(moment().format('MMMM D, YYYY'));
		$('#today').html(moment().format('MMMM D, YYYY'));
		$('#date-reset').addClass('d-none');	
	
	});
    // date range manenos end

	$('.institution-activities-item').on('click', function(){
		var link = $(this).attr('href');
		$(link).removeClass('d-none').siblings().addClass('d-none');
		$(this).addClass('active').siblings().removeClass('active');

		$('.suppler-cost').removeClass('suppler-cost-clicked');

	});

	$('.suppler-cost').on('click', function(){
		$(this).addClass('suppler-cost-clicked');
		$("#invoices").removeClass('d-none').siblings().addClass('d-none');
	});
	
	
	var to_day = moment().format('ddd, MMMM Do YYYY');
	$('.date-range-text').text(to_day);
	$('.today').text(moment().format("MMM Do YYYY"));

	$('.year-abr').text(moment().format('YY'));
	$('.this-year').text(moment().format('YYYY'));
	$('.this-month').text(moment().format('MMMM'));
	$('.month-abr').text(moment().format('MMM'));

	$('.full-month').text(moment().format('MMMM'));
	$('.full-year').text(moment().format('YYYY'));
	$('.today-full').text(moment().format("MMM Do YY"));

	const today = moment();
	const otherday = moment()
	const too_date = otherday.endOf('week');
	const from_date = today.startOf('week');
	const the_date = from_date.format("DD, MMM") + ' To ' + too_date.format("DD, MMM");
	$('.week-full').text(the_date);
	//alert(from_date);

	//	custom day time picker
	$('#daily_date').on('change', function () {
		var dated = $(this).val();
		var dated = (moment(dated).format('LL'));
		$('.the_day').text(dated);
		//		alert(moment(dated).format('LL'));
	});


	//decline requests
	$('.decline-btn').on('click', function () {
		$('.modal .request-container').addClass('d-none');
		$('.modal .decline-reason').removeClass('d-none');
		$(this).parent().addClass('d-none');
	});

	$('.canceldec-btn').on('click', function () {
		$('.modal .request-container').removeClass('d-none');
		$('.modal .decline-reason').addClass('d-none');
		$(this).parent().parent().parent().parent().parent().parent().siblings('.modal-footer').removeClass('d-none');
	});

	$('#associate').on('click', '.close', function () {
		$('.modal .request-container').removeClass('d-none');
		$('.modal .decline-reason').addClass('d-none');
		$('#associate .modal-footer').removeClass('d-none');
	});
	//decline requests

	//card deactivation
	$('.table').on('click', '.deactivator', function () {
		var the_title = $(this).parent().siblings('.std_name').text();
		$('#deactivate-title').text("Deactivate " + the_title + "'s Card");
	});

	//my list of blinkers
	$('.table').on('click', '.my_blinkers', function () {
		var the_title = $(this).parent().siblings('.the_guardian').children('p').children('a').text();
		$('#MyBlinkers #MyBlinkers_title').text(the_title + "'s Blinkers");
	});

	//my list of guardians
	$('.table').on('click', '.my_guardians', function () {
		var the_title = $(this).parent().siblings('.the_blinkers').children('p').children('a').text();
		$('#MyGuardians #MyGuardians_title').text(the_title + "'s Guardians");
	});

	//------------------------------------------------------------------------------------------------------
	//blocking functions
	//------------------------------------------------------------------------------------------------------

	//parent accounts blocking
	$('.table').on('click', '.deactivate-parent', function () {
		var the_title = $(this).parent().siblings('.the_guardian').children('p').children('a').text();
		$('#deactivate-parent #deactivate-parent-title').text("Why do you want to block " + the_title + "'s Account?");
	})
	//parent account blocking

	//students account blocking
	$('.table').on('click', '.deactivate-blinker', function () {
		var the_title = $(this).parent().siblings('.the_blinkers').children('p').children('a').text();
		$('#deactivate-blinker #deactivate-blinker-title').text("Why do you want to block " + the_title + "'s Account?");
	});
	//students account blocking

	//deactivating shop

	$('.table').on('click', '.deactivate-shop', function () {
		var the_title = $(this).parent().siblings('.shops_name').text();
		$('#deactivate-shop #deactivate-shop-title').text("Why do you want deactivate " + the_title + "'s shop?");
	});
	//deactivating shop

	//deactivating system usres

	$('.table').on('click', '.deactivate-user', function () {
		var the_title = $(this).parent().siblings('.the_user').children('p').text();
		$('#deactivate-user #deactivate-user-title').text("Why do you want deactivate " + the_title + "'s Account?");
	});
	//------------------------------------------------------------------------------------------------------
	//blocking functions
	//------------------------------------------------------------------------------------------------------

	//terminating association
	$('.table').on('click', '.terminate-association', function () {
		var the_guardian = $(this).parent().siblings('.the-guardian').children('p').text();
		var the_blinker = $(this).parent().siblings('.blinkers_name').text();
		$('#terminate-association #terminate-association-title').text("What's the reason for terminating " + the_guardian + "'s and " + the_blinker + "'s Association");
	});
	//terminating association



	//decline association
	$('.table').on('click', '.disaprove-association', function () {
		var the_guardian = $(this).parent().siblings('.the-guardian').children('p').text();
		var the_blinker = $(this).parent().siblings('.blinkers_name').text();
		$('#disaprove-association #disaprove-association-title').text("What's the reason for terminating " + the_guardian + "'s and " + the_blinker + "'s Association request");
	});
	//decline association



	//	$('.table-ranger').on('change', function(){
	//		var therange=$(this).val();
	//		alert(therange);
	//	});

	$('.table-ranger').on('change', function () {

	});
	//	increase wigdth when value changes
	function Expand(obj) {
		if (!obj.savesize) obj.savesize = obj.size;
		obj.size = Math.max(obj.savesize, obj.value.length);
	}


	//member navigations
	$('.member-navs-container .member-info').on('click', function () {
		$('.member-info').removeClass('d-none').siblings('.row.slideInLeft').addClass('d-none');
	});

	$('.member-navs-container .member-statements').on('click', function () {
		$('.transactions-member').removeClass('d-none').siblings('.row.slideInLeft').addClass('d-none');
	});

	$('.member-navs-container .member-loans').on('click', function () {
		$('.member-acc-loans').removeClass('d-none').siblings('.row.slideInLeft').addClass('d-none');
	});

	//member navigations


	//	date ranger functions

	$(".date-range")[0] && $(".date-range").flatpickr({
		enableTime: !1,
		altInput: true,
		mode: "range",
		altFormat: "j-F, Y",
		dateFormat: "Y-m-d",
		maxDate: "today",
		minDate: "06-10-2019",


		nextArrow: '<i class="zmdi zmdi-long-arrow-right" />',
		prevArrow: '<i class="zmdi zmdi-long-arrow-left" />',

		//		write a function here when making changes in regards to date ranger

		onClose: function (selectedDates, dateStr, instance) {
			var therange = $('#date_ranger').val();

			//selected date range
			var dates = therange.split(' to ');

			//date in the format 2020-mm-dd
			var date1 = dates[0];
			var date2 = dates[1];

			// date in the format March 19, 2020
			var date1read = moment(date1).format('ddd, MMMM Do YYYY');
			var date2read = moment(date2).format('ddd, MMMM Do YYYY');

			//======= write custom functions bellow once a change has been made to the date range=======

			//function to update text output with new date range
			$('.date-range-text').text(date1read + ' To ' + date2read);


		}
	});
	//	full screen table


	$("body").on("click", "[data-table-action]", function (a) {
		a.preventDefault();
		var b = $(this).data("table-action");
		if ("print" === b && $(this).closest(".dataTables_wrapper").find(".buttons-print").trigger("click"), "fullscreen" === b) {
			var c = $(this).parent().parent().parent().parent().parent().parent().parent()
			c.hasClass("card--fullscreen") ? (c.removeClass("card--fullscreen"), $("body").removeClass("data-table-toggled")) : (c.addClass("card--fullscreen"), $("body").addClass("data-table-toggled"))
		}
	});
	//full screen controller


	//	datatable navigation styling
	$('.nav-link').on('click', function () {
		event.preventDefault();
		$(this).addClass('active').parent().siblings().children('.nav-link').removeClass('active');
	});

	// $('td').eq(0).on('click', function(){
	// 	$('.modal-body-header').children('span').html("nothing");

	// 	var html_data=$('this').siblings().index(6).text();
	// 	alert(html_data);
	// });



	$('.show-all').on('click', function () {
		$('.table-all').removeClass('d-none').siblings().addClass('d-none');
	});

	$('.show-compliant').on('click', function () {
		$('.table-compliant').removeClass('d-none').siblings().addClass('d-none');
	});

	$('.show-uncompliant').on('click', function () {
		$('.table-uncompliant').removeClass('d-none').siblings().addClass('d-none');
	});

	$('.show-penalty').on('click', function () {
		$('.table-penalty').removeClass('d-none').siblings().addClass('d-none');
	});



});
//=====================================================================================
//****************** Disbursement functions ******************************/
//=====================================================================================

//selecting mpesa funtion
$('.lab-mpesa-opt').on('click', function () {
	showMpesaSendLoan();
});

function showMpesaSendLoan() {
	$('.sendToMpesaOptions').removeClass('d-none').siblings('.send-options').addClass('d-none');
	console.log('mpesa');
}

//selecting send to account
$('.sendMethods .lab-acc').on('click', function () {
	showAccountSendLoan();
})

function showAccountSendLoan() {
	$('.sendToAccountOptions').removeClass('d-none').siblings('.send-options').addClass('d-none');
	console.log('mpesa');
}

function hideOtherAccountAccounts() {
	$('.memberAccounts .otherAccountContainer').addClass('d-none');

}
$('.memberAccounts .my-account').on('click', function () {
	hideOtherAccountAccounts();
})



function otherAccountAccounts() {
	$('.memberAccounts .otherAccountContainer').removeClass('d-none');

}
$('.memberAccounts .otherAccount-lab').on('click', function () {
	otherAccountAccounts();
});

//selecting split method
$('.sendMethods .lab-split').on('click', function () {
	showSplitSendLoan();
})

function showSplitSendLoan() {
	$('.splitOption').removeClass('d-none').siblings('.send-options').addClass('d-none');
	console.log('mpesa');
}

function hideOtherAccountSplit() {
	$('.splitMemberAccounts .otherAccountContainer').addClass('d-none');
}

function showOtherAccountSplit() {
	$('.splitMemberAccounts .otherAccountContainer').removeClass('d-none');
}

$('.splitMemberAccounts .my-account').on('click', function () {
	hideOtherAccountSplit();
});

$('.splitMemberAccounts .other-lab').on('click', function () {
	showOtherAccountSplit();
});











//=====================================================================================
//****************** Disbursement functions ******************************/
//=====================================================================================


//=========================================================
// repayment modes
//========================================================
$('.payment-method-container .mpesa-option').on('click', function () {
	$(this).addClass('active').siblings().removeClass('active');
	$('.payment-method-container .with-mpesa').removeClass('d-none').siblings('form').addClass('d-none');

});

$('.payment-method-container .cash-option').on('click', function () {
	$(this).addClass('active').siblings().removeClass('active');
	$('.payment-method-container .over-counter').removeClass('d-none').siblings('form').addClass('d-none');

});

//=========================================================
// repayment modes
//========================================================


//=====================================================================================
//******************membership form ******************************/
//=====================================================================================
//preventing enter key from submitting membership form
$('.membership-form input').keydown(function (e) {
	if (e.keyCode == 13) {
		e.preventDefault();
		alert("enter was clicked")
		return false;
	}
});

//getting first phone number
$('.form-gen-information .phone-num').on('change', function () {
	var phone = $(this).val();
	$('.form-save .mpesa-number').val(phone);
})
//go gen info

//disabling function
check_gen_info();

$('.form-gen-information input').on("change", function () {
	check_gen_info();
});

$('.form-gen-information input').on("keyup", function () {
	check_gen_info();
});



$('.form-gen-information select').on("change", function () {
	check_gen_info();
});

$('.form-gen-information .dob1').on("change", function () {
	var dated = $(this).val();
	$('.form-gen-information .dob2').val(dated);
});

$('.form-gen-information .dob2').on("change", function () {
	var dated = $(this).val();
	$('.form-gen-information .dob1').val(dated);
});


function myFunction() {
	var email_address = document.getElementById("id1");
	if (!email_address.checkValidity()) {

		//alert(email_address.setCustomValidity("Input a valid email address!"));

		email_address.setCustomValidity("I am expecting an e-mail address!");
	} else {

		//alert("Input OK");
	}
}

function disable_genifo() {
	$('.gen-info-link').parent().siblings().children().addClass('disabled');
	$('.form-gen-information .btn-next').attr('disabled', true).addClass('disabled');
	// alert("successfull");
}




function check_gen_info() {
	$('.form-gen-information input[required]').each(function (index, value) {
		// myFunction()
		//alert("got them");

		var has_error = $(this).hasClass('error');

		var the_value = $(this).val();
		var nationality = $('.form-gen-information .nationality-form').val();
		$('.form-gen-information .nationality-form').removeClass('border-danger');

		//alert(nationality);
		var gender = $('.form-gen-information .gender-form').val();
		$('.form-gen-information .gender-form').removeClass('border-danger');

		//alert(gender);
		var status = $('.form-gen-information .status-form').val();
		$('.form-gen-information .status-form').removeClass('border-danger');
		//alert(status);
		var country = $('.form-gen-information .country-form').val();
		$('.form-gen-information .country-form').removeClass('border-danger')
		//alert(country);	

		$(this).removeClass('border-danger');


		if (the_value == "") {
			disable_genifo();
			$(this).addClass('border-danger');
			return false;
			// alert("value is empty");			
		}
		if (has_error == true) {

			disable_genifo();
			$(this).addClass('border-danger');
			return false;
			// alert("value is empty");			
		}

		if (nationality == 0) {
			disable_genifo();
			$('.form-gen-information .nationality-form').addClass('border-danger')
			return false;


		}
		if (gender == 0) {
			disable_genifo();
			$('.form-gen-information .gender-form').addClass('border-danger')

			return false;
		}

		if (status == 0) {
			disable_genifo();
			$('.form-gen-information .status-form').addClass('border-danger')

			return false;

		}

		if (country == 0) {
			disable_genifo();
			$('.form-gen-information .country-form').addClass('border-danger')

			return false;
		}


		if (the_value !== "") {
			$('.form-gen-information .btn-next').attr('disabled', false).removeClass('disabled');
			$(this).removeClass('border-danger');
			$('.nav-link .occupation-link').removeClass('disabled');
			//alert("value is not empty");
			//alert(the_value);
		}

	});
}
//disabling function
$('a.gen-prev').on('click', function () {
	$(this).parent().parent("div").addClass('d-none').prev().removeClass('d-none');
	$('.gen-info-link').removeClass('disabled').addClass('active').parent().siblings().children().removeClass('active');

});

$('a.gen-info-link').on('click', function () {
	$('.form-gen-information').removeClass('d-none').siblings('.row').addClass('d-none');
	$(this).removeClass('disabled').addClass('active').parent().siblings().children().removeClass('active');

});
//******************occupation form functions **************************************/
function disable_occupation() {
	$('.gen-info-link').parent().siblings().children().addClass('disabled');
	$('.occupation-link').removeClass('disabled');
	$('.form-occupation .btn-next').attr('disabled', true).addClass('disabled');
	// alert("successfull");
}


function disable_ben() {
	$('.ben-link').parent().siblings().children().addClass('disabled');
	$('.occupation-link').removeClass('disabled');
	$('.gen-info-link').removeClass('disabled');
	$('.form-ben .btn-next').attr('disabled', true).addClass('disabled');
	//alert("successfull");
}

function disable_attach() {
	$('.doc-link').parent().siblings().children().addClass('disabled');
	$('.occupation-link').removeClass('disabled');
	$('.gen-info-link').removeClass('disabled');
	$('.ben-link').removeClass('disabled');
	$('.form-attach .btn-next').attr('disabled', true).addClass('disabled');
	//alert("successfull");
}

function disableActivation() {
	$('.form-save .btn-submit').attr('disabled', true).addClass('disabled');
}


function activate_occupation() {

	$('.form-occupation .btn-next').attr('disabled', false).removeClass('disabled');
	// alert("successfull");
}

var employed_has_dnone = $(".form-occupation .employer-opt").hasClass('d-none');
var business_has_dnone = $(".form-occupation .business-opt").hasClass('d-none');

function activateEmployed() {
	$('.employer-opt').removeClass('d-none').siblings('.business-opt').addClass('d-none');
	employed_has_dnone = $(".form-occupation .employer-opt").hasClass('d-none');

	$('.employer-opt .emp-employer').attr("pattern", '^[0-9a-zA-Z\\s]{2,100}$');
	$('.employer-opt .emp-position').attr("pattern", '^[0-9a-zA-Z\\s]{2,100}$');
	$('.employer-opt .emp-employer').attr("pattern", '^[0-9a-zA-Z\\s]{2,100}$');
	$('.employer-opt .emp-income').attr("pattern", '^[0-9]{2,10000}$');
	$('.employer-opt .emp-staff-num').attr("pattern", "^[^$%?#!<>*+'\\x22]+$");

	$('.employer-opt .must-input').each(function (index, value) {
		$(this).attr('required', '');
	});

	//alert("employee activated");
}

function deactivateEmployed() {

	$('.employer-opt .emp-employer').removeAttr("pattern");
	$('.employer-opt .emp-position').removeAttr("pattern");
	$('.employer-opt .emp-employer').removeAttr("pattern");
	$('.employer-opt .emp-income').removeAttr("pattern");
	$('.employer-opt .emp-staff-num').removeAttr("pattern");

	$('.employer-opt .must-input').each(function (index, value) {
		$(this).removeAttr("required");
	});
	//alert("employee deactivated");

}

function checkEmployedValidity() {
	$('.employer-opt input').each(function (index, value) {

		$(this).removeClass('border-danger');
		var has_error = $(this).hasClass('error');
		var has_required = $(this).attr('required');
		var field_value = $(this).val();



		//alert(has_required);
		if (field_value == "") {
			if (has_required == "required") {
				disable_occupation();
				$(this).addClass('border-danger');
				// alert("the required is "+has_required);
				return false;
			}
			//alert("employee value empty");

		}

		if (has_error == true) {
			disable_occupation();
			$(this).addClass('border-danger');
			//alert(has_error);
			return false;
		} else {
			$('.gen-info-link').parent().next().children().removeClass('disabled');
			$('.form-occupation .btn-next').attr('disabled', false).removeClass('disabled');
		}
	});
}

function activateBusiness() {
	$('.business-opt').removeClass('d-none').siblings('.employer-opt').addClass('d-none');
	business_has_dnone = $(".form-occupation .business-opt").hasClass('d-none');

	$('.business-opt .business-name').attr("pattern", '^[0-9a-zA-Z\\s]{2,100}$');
	$('.business-opt .business-nature').attr("pattern", '^[0-9a-zA-Z\\s]{2,100}$');
	$('.business-opt .business-location').attr("pattern", '^[0-9a-zA-Z\\s]{2,100}$');
	$('.business-opt .business-income').attr("pattern", '^[0-9]{2,10000}$');
	$('.business-opt .business-address').attr("pattern", "^[^$%?#!<>*+'\\x22]+$");

	$('.business-opt .must-input').each(function (index, value) {
		$(this).attr('required', '');
	});
	//alert("business activated");
}

function deactivateBusiness() {
	$('.business-opt input').each(function (index, value) {
		$(this).removeAttr("pattern").removeAttr("required");
	});

	//alert("business deactivated");
}


function checkBusinessValidity() {
	$('.business-opt input').each(function (index, value) {

		$(this).removeClass('border-danger');
		var has_error = $(this).hasClass('error');
		var has_required = $(this).attr('required');
		var field_value = $(this).val();
		//alert("the required is "+has_required);
		//alert("not showing employed"+employed_has_dnone);


		//alert(has_required);
		if (field_value == "") {
			if (has_required == "required") {
				disable_occupation();
				$(this).addClass('border-danger');
				//alert($(this).eq(index)+": employed value empty");
				//alert("the required is "+has_required);
				return false;
			}


		}

		if (has_error == true) {
			disable_occupation();
			$(this).addClass('border-danger');
			//alert(has_error);
			return false;
		} else {
			$('.gen-info-link').parent().next().children().removeClass('disabled');
			$('.form-occupation .btn-next').attr('disabled', false).removeClass('disabled');
		}
	});
}

$('.form-occupation .occupation-text').on('change', function () {
	deactivateEmployed();
	deactivateBusiness();
	var occupation = $(this).val();
	//alert(occupation);
	if (occupation == "Employment") {

		activateEmployed();
		business_has_dnone = $(".form-occupation .business-opt").hasClass('d-none');
		employed_has_dnone = $(".form-occupation .employer-opt").hasClass('d-none');
		checkEmployedValidity();
	}
	if (occupation == "Business") {

		activateBusiness();
		business_has_dnone = $(".form-occupation .business-opt").hasClass('d-none');
		employed_has_dnone = $(".form-occupation .employer-opt").hasClass('d-none');
		checkBusinessValidity();
	}
	if (occupation == 0) {
		disable_occupation();

		$('.form-occupation .business-opt').addClass('d-none');
		$('.form-occupation .employer-opt').addClass('d-none');
		business_has_dnone = $(".form-occupation .business-opt").hasClass('d-none');
		employed_has_dnone = $(".form-occupation .employer-opt").hasClass('d-none');
	}
	if (occupation == "Pension") {
		activate_occupation();

		$('.form-occupation .business-opt').addClass('d-none');
		$('.form-occupation .employer-opt').addClass('d-none');
		business_has_dnone = $(".form-occupation .business-opt").hasClass('d-none');
		employed_has_dnone = $(".form-occupation .employer-opt").hasClass('d-none');
	}

	business_has_dnone = $(".form-occupation .business-opt").hasClass('d-none');
	employed_has_dnone = $(".form-occupation .employer-opt").hasClass('d-none');
});
disable_occupation();

// employed
$(".form-occupation .employer-opt input").on("keyup", function () {
	checkEmployedValidity();
});

// alert("the employer is "+employed_has_dnone);
if (employed_has_dnone == false) {
	activateEmployed();
	checkEmployedValidity();
}

// business
$(".form-occupation .business-opt input").on("keyup", function () {
	checkBusinessValidity();
});
if (business_has_dnone == false) {
	activateBusiness();
	checkBusinessValidity();
}

//check for errors
//alert(employed_has_dnone);

//beneficiaries actions
//disable_ben();
// $('.form-ben input').on("change", function(){
// 	checkBenValidity();
// });

$('.form-ben input').on("keyup", function () {
	checkBenValidity();
});
$('.form-ben select').on("change", function () {
	checkBenValidity();
});



// getting totals

function getDepositShares() {
	var total_shares = 0;
	$('.form-ben .deposit-ben tbody tr .shares').each(function (index, value) {
		//total_shares=0;
		$(this).removeClass('border-danger');
		$('.form-ben .deposit-ben .shares').parent().removeClass('bg-danger-light');
		$('.form-ben .deposit-ben thead tr th').eq(5).children('small').addClass('d-none');
		if ($(this).val() !== "") {
			var shares = parseInt($(this).val());
			total_shares = shares + total_shares;
			console.log("Total shares: " + total_shares);
			if (total_shares > 100) {
				console.log("shares are beyond 100%");
				$(this).addClass('border-danger');
				$('.form-ben .deposit-ben .shares').parent().addClass('bg-danger-light');
				$('.form-ben .deposit-ben thead tr th').eq(5).children('small').removeClass('d-none');
				disable_ben();
				return false;
			}

		}


	});
}

// funeral beneficiaries
function getFuneralShares() {
	var total_shares = 0;
	$('.form-ben .funeral-ben tbody tr .shares').each(function (index, value) {
		//total_shares=0;
		$(this).removeClass('border-danger');
		$('.form-ben .funeral-ben .shares').parent().removeClass('bg-danger-light');
		$('.form-ben .funeral-ben thead tr th').eq(5).children('small').addClass('d-none');
		if ($(this).val() !== "") {
			var shares = parseInt($(this).val());
			total_shares = shares + total_shares;
			console.log("Total shares: " + total_shares);
			if (total_shares > 100) {
				console.log("shares are beyond 100%");
				$(this).addClass('border-danger');
				$('.form-ben .funeral-ben .shares').parent().addClass('bg-danger-light');
				$('.form-ben .funeral-ben thead tr th').eq(5).children('small').removeClass('d-none');
				disable_ben();
				return false;
			}

		}


	});
}


checkBenValidity();

function checkBenValidity() {
	$('.form-ben input').each(function (index, value) {
		var field_value = $(this).val();
		$(this).removeClass('border-danger').removeClass('error');

		var relationship1 = $(".form-ben .ben1-relationship").val();
		var relationship2 = $(".form-ben .ben2-relationship").val();
		$(".form-ben .ben1-relationship").removeClass('border-danger');
		$(".form-ben .ben2-relationship").removeClass('border-danger')


		var has_error = $(this).hasClass('error');
		var has_required = $(this).attr('required');
		var field_value = $(this).val();
		//alert("the required is "+has_required);
		//alert("not showing employed"+employed_has_dnone);


		//alert(has_required);
		if (has_required == "required") {
			if (field_value == "") {
				disable_ben();
				$(this).addClass('border-danger');
				//alert($(this).eq(index)+": employed value empty");
				//alert("the required is "+has_required);
				return false;
			}


		}

		if (has_error == true) {
			disable_ben();
			$(this).addClass('border-danger');
			//alert(has_error);
			return false;
		}
		if (relationship1 == "--Select Relationship--") {
			disable_ben();
			$(".form-ben .ben1-relationship").addClass('border-danger');
			//alert(has_error);
			return false;
		}
		if (relationship2 == "--Select Relationship--") {
			disable_ben();
			$(".form-ben .ben2-relationship").addClass('border-danger');
			//alert(has_error);
			return false;
		} else {
			$('.ben-link').parent().next().children().removeClass('disabled');
			$('.form-ben .btn-next').attr('disabled', false).removeClass('disabled');
		}
	});

}

getDepositShares();
getFuneralShares();

$('.form-ben .deposit-ben .shares').on('keyup', function () {
	//console.log()
	getDepositShares();
});

$('.form-ben .funeral-ben .shares').on('keyup', function () {

	getFuneralShares()
});

$('.form-attach input').on('change', function () {
	attachValidate();
});
attachValidate();

//form attach validations
function attachValidate() {
	$('.form-attach input').each(function (index, value) {
		var field_value = $(this).val();
		//alert(field_value);
		if (field_value == "") {
			//alert("empty field");
			disable_attach();
			return false;
		} else {
			$('.doc-link').parent().next().children().removeClass('disabled');
			$('.form-attach .btn-next').attr('disabled', false).removeClass('disabled');
		}
	});
}
var mpesaMethodNone = $(".form-save .act-mpesa").hasClass('d-none');
var cashMethodNone = $(".form-save .act-mpesa").hasClass('d-none');

function hidePayMethods() {
	$('.form-save .act-mpesa').addClass('d-none');
	$('.form-save .act-cash').addClass('d-none');
	mpesaMethodNone = $(".form-save .act-mpesa").hasClass('d-none');
	//alert(mpesaMethodNone);

	//alert('removed');
}

$('.form-save .radio').on('click', function () {
	hidePayMethods();
	checkingPayRadio();
	//if($('input[name="pay-method"]').is(':checked')) { alert("it's checked"); }
});


$('.form-save .method-mpesa').on('click', function () {

	activateMpesaFields();
	deactivateCashFields();

});

$('.form-save .method-cash').on('click', function () {
	deactivateMpesaFields();
	activateCashFields();

});
checkingPayRadio();
$('.form-save input').on('keyup', function () {
	checkingPayRadio();
});

// $('form-save input').on('change', function(){
// 	checkingPayRadio();
// });
function activateCashFields() {
	$('.form-save .act-cash').removeClass('d-none');
	cashMethodNone = $(".form-save .act-mpesa").hasClass('d-none');
	$('.form-save .act-cash .must-input').each(function (index, value) {
		$(this).attr('required', '');
	});

	//alert("employee activated");
}

function deactivateCashFields() {
	$('.form-save .act-cash').addClass('d-none');
	cashMethodNone = $(".form-save .act-mpesa").hasClass('d-none');

	$('.form-save .act-cash .must-input').each(function (index, value) {
		$(this).removeAttr("required");
	});

	//alert("employee activated");
}


function activateMpesaFields() {
	$('.form-save .act-mpesa').removeClass('d-none');
	mpesaMethodNone = $(".form-save .act-mpesa").hasClass('d-none');

	$('.form-save .act-mpesa .mpesa-number').attr("pattern", "^[0-9']{9,10}$");
	$('.form-save .act-mpesa .mpesa-amount').attr("pattern", '^[0-9]{1,1000000}$');
	//$('.employer-opt .emp-staff-num').attr("pattern", "^[^$%?#!<>*+'\\x22]+$");

	$('.form-save .act-mpesa .must-input').each(function (index, value) {
		$(this).attr('required', '');
	});

	//alert("employee activated");
}

function deactivateMpesaFields() {
	$('.form-save .act-mpesa').addClass('d-none');
	mpesaMethodNone = $(".form-save .act-mpesa").hasClass('d-none');

	$('.form-save .act-mpesa .mpesa-number').removeAttr("pattern");
	$('.form-save .act-mpesa .mpesa-amount').removeAttr("pattern");
	//$('.employer-opt .emp-staff-num').attr("pattern", "^[^$%?#!<>*+'\\x22]+$");

	$('.form-save .act-mpesa .must-input').each(function (index, value) {
		$(this).removeAttr("required");
	});

	//alert("employee activated");
}

function checkingPayRadio() {
	if ($('.form-save input[name="pay-method"]').is(':checked')) {
		$('.form-save input').each(function (index, value) {

			var has_error = $(this).hasClass('error');
			$(this).removeClass('border-danger');
			var has_required = $(this).attr('required');

			var field_value = $(this).val();
			//alert("the required is "+has_required);
			//alert("not showing employed"+employed_has_dnone);


			//alert(has_required);
			if (has_required == "required") {
				if (field_value == "") {
					disableActivation();
					$(this).addClass('border-danger');
					//alert($(this).eq(index)+": employed value empty");
					//alert("the required is "+has_required);
					return false;
				}


			}
			if (has_error == true) {
				disableActivation();
				$(this).addClass('border-danger');
				//alert(has_error);
				return false;
			} else {
				console.log("we are good to go")
				$('.form-save .btn-submit').attr('disabled', false).removeClass('disabled');

			}



		});
	} else {
		//alert("not possible");
		disableActivation();
	}


}












//employment validationn of inputs


//go to occupation
$('a.occupation-next').on('click', function () {
	//e.preventDefault();
	$(this).parent().parent("div").addClass('d-none').next().removeClass('d-none');
	$('.occupation-link').removeClass('disabled').addClass('active').parent().siblings().children().removeClass('active');
});

$('a.occupation-link').on('click', function () {
	$('.form-occupation').removeClass('d-none').siblings('.row').addClass('d-none');
	$(this).removeClass('disabled').addClass('active').parent().siblings().children().removeClass('active');

});

$('a.occ-prev').on('click', function () {
	$(this).parent().parent("div").addClass('d-none').prev().removeClass('d-none');
	$('.occupation-link').removeClass('disabled').addClass('active').parent().siblings().children().removeClass('active');
});

//go to beneficiaries
$('a.ben-next').on('click', function () {
	$(this).parent().parent("div").addClass('d-none').next().removeClass('d-none');
	$('.ben-link').removeClass('disabled').addClass('active').parent().siblings().children().removeClass('active');;
});


$('a.ben-link').on('click', function () {
	$('.form-ben').removeClass('d-none').siblings('.row').addClass('d-none');
	$(this).removeClass('disabled').addClass('active').parent().siblings().children().removeClass('active');

});

$('a.ben-prev').on('click', function () {
	$(this).parent().parent("div").addClass('d-none').prev().removeClass('d-none');
	$('.ben-link').removeClass('disabled').addClass('active').parent().siblings().children().removeClass('active');
});


//go to documents
$('a.attach-next').on('click', function () {
	$(this).parent().parent("div").addClass('d-none').next().removeClass('d-none');
	$('.doc-link').removeClass('disabled').addClass('active').parent().siblings().children().removeClass('active');;

});

$('a.doc-link').on('click', function () {
	$('.form-attach').removeClass('d-none').siblings('.row').addClass('d-none');
	$(this).removeClass('disabled').addClass('active').parent().siblings().children().removeClass('active');

});

$('a.attach-prev').on('click', function () {
	$(this).parent().parent("div").addClass('d-none').prev().removeClass('d-none');
	$('.doc-link').removeClass('disabled').addClass('active').parent().siblings().children().removeClass('active');
});


//go to save
$('a.fund-next').on('click', function () {
	$(this).parent().parent("div").addClass('d-none').next().removeClass('d-none');
	$('.save-link').removeClass('disabled').addClass('active').parent().siblings().children().removeClass('active');

});

$('a.save-link').on('click', function () {
	$('.form-save').removeClass('d-none').siblings('.row').addClass('d-none');
	$(this).removeClass('disabled').addClass('active').parent().siblings().children().removeClass('active');

});



//occupation functions

$('.occupation-text').on("change", function () {
	var occupation = $(this).text();
});

$('#nat-id').on('change', function () {

	var file = $(this).val();
	var fullPath = $(this).val();

	var startIndex = (fullPath.indexOf('\\') >= 0 ? fullPath.lastIndexOf('\\') : fullPath.lastIndexOf('/'));
	var filename = fullPath.substring(startIndex);
	if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
		filename = filename.substring(1);
	}

	if (file == "") {
		alert("No files selected");
		$(".id-container").removeClass("activated");
		$(".id-container small strong").text("No file selected");
		$(".id-container small").addClass("text-danger").removeClass("text-success");


	} else {
		$(".id-container").addClass("activated");
		$(".id-container small strong").text("File (" + filename + ") Selected");
		$(".id-container small").addClass("text-success").removeClass("text-danger");
	}
	//id-container
});

$('#kra-pin').on('change', function () {

	var file = $(this).val();
	var fullPath = $(this).val();

	var startIndex = (fullPath.indexOf('\\') >= 0 ? fullPath.lastIndexOf('\\') : fullPath.lastIndexOf('/'));
	var filename = fullPath.substring(startIndex);
	if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
		filename = filename.substring(1);
	}


	if (file == "") {
		alert("No files selected");
		$(".kra-container").removeClass("activated");
		$(".kra-container small strong").text("No file selected");
		$(".kra-container small").addClass("text-danger").removeClass("text-success");


	} else {
		$(".kra-container").addClass("activated");
		$(".kra-container small strong").text("File (" + filename + ") Selected");
		$(".kra-container small").addClass("text-success").removeClass("text-danger");
	}

});

$('#user-photo').on('change', function () {

	var file = $(this).val();
	var fullPath = $(this).val();

	var startIndex = (fullPath.indexOf('\\') >= 0 ? fullPath.lastIndexOf('\\') : fullPath.lastIndexOf('/'));
	var filename = fullPath.substring(startIndex);
	if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
		filename = filename.substring(1);
	}
	//alert("changed");


	if (file == "") {
		// alert("No files selected") ; 
		$(".user-photo-container").removeClass("activated");
		$(".user-photo-container small strong").text("No file selected");
		$(".user-photo-container small").addClass("text-danger").removeClass("text-success");


	} else {
		$(".user-photo-container").addClass("activated");
		$(".user-photo-container small strong").text("File (" + filename + ") Selected");
		$(".user-photo-container small").addClass("text-success").removeClass("text-danger");
	}

});

$('#mpesa-statement').on('change', function () {

	var file = $(this).val();
	var fullPath = $(this).val();

	var startIndex = (fullPath.indexOf('\\') >= 0 ? fullPath.lastIndexOf('\\') : fullPath.lastIndexOf('/'));
	var filename = fullPath.substring(startIndex);
	if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
		filename = filename.substring(1);
	}


	if (file == "") {
		alert("No files selected");
		$(".mpesa-statement-container").removeClass("activated");
		$(".mpesa-statement-container small strong").text("No file selected");
		$(".mpesa-statement-container small").addClass("text-danger").removeClass("text-success");


	} else {
		$(".mpesa-statement-container").addClass("activated");
		$(".mpesa-statement-container small strong").text("File (" + filename + ") Selected");
		$(".mpesa-statement-container small").addClass("text-success").removeClass("text-danger");
	}

});

$('.gen-info-link').parent().siblings().children().addClass('disabled');

//=====================================================================================
//******************membership form ******************************/
//=====================================================================================


//================================================================================
//*************************** account setup********************************** */
//================================================================================


show_limit();
$('.acc-form .check-limit').on('click', function () {

	show_limit();
});

function show_limit() {

	if ($('.acc-form .check-limit').is(':checked')) {
		$('.acc-form .acc-limit').removeClass('d-none');
		$('.acc-form .acc-limit').children('input').attr('required', '');
	} else {
		$('.acc-form .acc-limit').addClass('d-none');
		$('.acc-form .acc-limit').children('input').removeAttr("required");

	}
}

//collection trends
var diff = $('.trend h4').text();
//		diff=diff.replace(',', '');
var count = (diff.match(/,/g) || []).length;

var i;
count = count + 1;
for (i = 0; i < count; i++) {
	diff = diff.replace(',', '')
}

diff = parseInt(diff);

if (diff > 0) {
	$('.trend h4').addClass('text-success');
	$('.trend i').addClass(' zmdi-trending-up');
}

if (diff < 0) {
	$('.trend h4').addClass('text-danger');
	$('.trend i').addClass('zmdi-trending-down');
}

if (diff == 0) {
	$('.trend h4').addClass('text-info');
	$('.trend i').addClass('zmdi-dot-circle');
}


// Slick
$(function () {
	$('.statistics').slick({
		autoplay: true,
		dots: true,
		arrows: true,
		prevArrow: $('.card-prev'),
		nextArrow: $('.card-next '),
		centerMode: false,
		pauseOnFocus: true,
	});
});




//================================================================================
//*************************** account setup********************************** */
//================================================================================

//filtering gross profit


$('.loanBreakdown').on('click', function () {
	$('#loanBreakdown').removeClass('d-none').siblings().addClass('d-none');
});

$('.allLoans').on('click', function () {
	$('#all-loans').removeClass('d-none').siblings().addClass('d-none');
});

//mpesa loader

$('.submit-mpesa').on('click', function () {

	function openReceipt() {
		window.open("/main/receipt/withdraw-receipt.html");
		$('#mpesa-payment').modal('hide');
		location.reload();
		// alert('Opening nigga');
	}
	setTimeout(openReceipt, 5000);

})

//owl initializer
$(document).ready(function () {

	var owl = $('.owl-carousel');
	owl.owlCarousel({

		items: 4,
		loop: true,
		margin: 10,
		autoplay: true,
		autoplayTimeout: 15000,
		autoplayHoverPause: true,
		responsive: {
			0: {
				items: 1
			},
			768: {
				items: 1
			},
			992: {
				items: 2
			},
			1200: {
				items: 3
			},
			1440: {
				items: 4
			}
		}
	});

});
//disableBtn();

function checkAll(bx) {
	var cbs = document.getElementsByTagName('input');
	for (var i = 0; i < cbs.length; i++) {
		if (cbs[i].type == 'checkbox') {
			cbs[i].checked = bx.checked;
			// $('#bulk_button').removeClass('deactivated');
			// $('#bulk_button').fadeIn(300);
		}
	}
}

$('body').on('change', '.bulk_sms_table input', function () {
	disableBtn();

});

function disableBtn() {

	$('.bulk_sms_table input').each(function (value, index) {
		if (this.checked) {

			$('#bulk_button').removeClass('deactivated');
			$('#bulk_button').fadeIn(300);
			$('#bulk_button').attr('disabled', false);

			return false;
		} else {

			$('#bulk_button').addClass('deactivated');
			$('#bulk_button').fadeIn(300);
			$('#bulk_button').attr('disabled', true);


		}

	});
}