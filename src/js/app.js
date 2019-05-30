import $ from 'jquery';

$(document).ready( function() {

  $(window).scroll(function() {
    if ($(this).scrollTop() > $(this).height()/2) {
      $('.scroll_top').addClass('active');
    } else {
      $('.scroll_top').removeClass('active');
    }
  });

  $('.scroll_top').click(function() {
    $('html, body').stop().animate({scrollTop: 0}, 1000);
  });
  
  $(window).scroll( function() {
      if ($(window).scrollTop() >= 250) {
        $('.fixed-menu').fadeIn().addClass('active');
      }
      else {
        $('.fixed-menu').fadeOut().removeClass('active');
      }
  });

	var iconHamb = $('.bars');
	var hambNav = $('.header__nav');
  var navOverlay = $('.olnav');
  var navHidden = $('.hdnav');
	var closeHamb = $('.btncloseNav');
  var body = $('body');
	
	iconHamb.click( function() {
    navOverlay.fadeIn();
    body.addClass('header__body');
    hambNav.addClass('active');
	});
	closeHamb.click( function() {
    navOverlay.fadeOut();
    body.removeClass('header__body');
    hambNav.removeClass('active');
	});
  navHidden.click( function() {
    navOverlay.fadeOut();
    hambNav.removeClass('active');
    body.removeClass('header__body');
  });
	
	var iconEnv = $('.envelope');
	var	envContact = $('.header__contact');
  var contactOverlay = $('.olcontact');
  var contactHidden = $('.hdcontact');
	var closeEnv = $('.btncloseCont');

	iconEnv.click( function() {
    contactOverlay.fadeIn();
    body.addClass('header__body');
    envContact.addClass('active');
	});
	closeEnv.click( function() {
    contactOverlay.fadeOut();
    body.removeClass('header__body');
    envContact.removeClass('active');
	});
  contactHidden.click( function() {
    contactOverlay.fadeOut();
    body.removeClass('header__body');
    envContact.removeClass('active');
  })

  var nameReg = /^[A-Za-z]+$/;
  var numberReg =  /^[0-9]+$/;
  var emailReg = /^([\w-]+@([\w-]+\.)+[\w-]{2,4})?$/;
	
 // ---------------HEADER FORM----------------

  $('.form_head').submit( function(formHead) {

    if ($('.input_head').is('.active')) {

      validateFormHead();

        if ($('.input_head').is('.active')) {
          validateFormHead();
          formHead.preventDefault();
        } else {
          $.ajax().done( function () {
            $('.header__thanks').delay(300).fadeIn();
            $('.form_head').trigger('reset');
            $('.header__thanks').delay(2500).fadeOut();
            contactOverlay.delay(3500).fadeOut();
            envContact.delay(3500).removeClass('active');
            body.delay(3500).removeClass('header__body');
          });
          return false;
        }

    } else {
      validateFormHead();
      formHead.preventDefault();
    }

  });

  function validateFormHead() {

    var names = $('#name_head').val();
    var telephone = $('#telephone_head').val();
    var country = $('#country_head').val();
    var city = $('#city_head').val();
    var email = $('#email_head').val();
    var message = $('#message_head').val();

    var inputVal = [names, telephone, country, city, email, message];
    
      if (inputVal[0] == "") {
        $('#name_head').addClass('active');
        $('.label_head-name .error').addClass('active');
      } else if (!nameReg.test(names)) {
        $('#name_head').addClass('active');
        $('.label_head-name .error').addClass('active');
      } else {
        $('#name_head').removeClass('active');
        $('.label_head-name .error').removeClass('active');
      }

      if (inputVal[1] == "") {
        $('#telephone_head').addClass('active');
        $('.label_head-telephone .error').addClass('active');
      } else if (!numberReg.test(telephone)){
        $('#telephone_head').addClass('active');
        $('.label_head-telephone .error').addClass('active');
      } else {
        $('#telephone_head').removeClass('active');
        $('.label_head-telephone .error').removeClass('active');
      }

      if (inputVal[2] == "") {
        $('#country_head').addClass('active');
        $('.label_head-country .error').addClass('active');
      } else if (!nameReg.test(country)) {
        $('#country_head').addClass('active');
        $('.label_head-country .error').addClass('active');
      } else {
        $('#country_head').removeClass('active');
        $('.label_head-country .error').removeClass('active');
      }
      
      if (inputVal[3] == "") {
        $('#city_head').addClass('active');
        $('.label_head-city .error').addClass('active');
      } else if (!nameReg.test(city)) {
        $('#city_head').addClass('active');
        $('.label_head-city .error').addClass('active');
      } else {
        $('#city_head').removeClass('active');
        $('.label_head-city .error').removeClass('active');
      }  

      if (inputVal[4] == "") {
        $('#email_head').addClass('active');
        $('.label_head-email .error').addClass('active');
      } else if (!emailReg.test(email)) {
        $('#email_head').addClass('active');
        $('.label_head-email .error').addClass('active');
      } else {
        $('#email_head').removeClass('active');
        $('.label_head-email .error').removeClass('active');
      }

      if (inputVal[5] == "") {
        $('#message_head').addClass('active');
      } else {
        $('#message_head').removeClass('active');
      }

  }

// --------------CONTACT PAGE FORM-----------------

  $('.form_cont').submit( function(formCont) {

    if ($('.input_cont').is('.active')) {
      validateFormCont();

        if ($('.input_cont').is('.active')) {
          validateFormCont();
          formCont.preventDefault();
        } else {
          $.ajax().done( function () {
            $('.header__thanks').delay(300).fadeIn();
            $('.form_cont').trigger('reset');
            $('.header__thanks').delay(2500).fadeOut();
            contactOverlay.delay(3500).fadeOut();
            envContact.delay(3500).removeClass('active');
            body.delay(3500).removeClass('header__body')
          });
          return false;
        }

    } else {
      validateFormCont();
      formCont.preventDefault();
    }

  });

  function validateFormCont() {

    var namesC = $('#name_cont').val();
    var telephoneC = $('#telephone_cont').val();
    var companyC = $('#company_cont').val();
    var countryC = $('#country_cont').val();
    var cityC = $('#city_cont').val();
    var emailC = $('#email_cont').val();
    var messageC = $('#message_cont').val();

    var inputValCont = [namesC, telephoneC, companyC, countryC, cityC, emailC, messageC];
    
    if (inputValCont[0] == "") {
      $('#name_cont').addClass('active');
      $('.label_cont-name .error').addClass('active');
    } else if (!nameReg.test(namesC)) {
      $('#name_cont').addClass('active');
      $('.label_cont-name .error').addClass('active');
    } else {
      $('#name_cont').removeClass('active');
      $('.label_cont-name .error').removeClass('active');
    }

    if (inputValCont[1] == "") {
      $('#telephone_cont').addClass('active');
      $('.label_cont-telephone .error').addClass('active');
    } else if (!numberReg.test(telephoneC)){
      $('#telephone_cont').addClass('active');
      $('.label_cont-telephone .error').addClass('active');
    } else {
      $('#telephone_cont').removeClass('active');
      $('.label_cont-telephone .error').removeClass('active');
    }

    if (inputValCont[2] == "") {
      $('#company_cont').addClass('active');
      $('.label_cont-company .error').addClass('active');
    } else if (!nameReg.test(companyC)) {
      $('#company_cont').addClass('active');
      $('.label_cont-company .error').addClass('active');
    } else {
      $('#company_cont').removeClass('active');
      $('.label_cont-company .error').removeClass('active');
    }

    if (inputValCont[3] == "") {
      $('#country_cont').addClass('active');
      $('.label_cont-country .error').addClass('active');
    } else if (!nameReg.test(countryC)) {
      $('#country_cont').addClass('active');
      $('.label_cont-country .error').addClass('active');
    } else {
      $('#country_cont').removeClass('active');
      $('.label_cont-country .error').removeClass('active');
    }
    
    if (inputValCont[4] == "") {
      $('#city_cont').addClass('active');
      $('.label_cont-city .error').addClass('active');
    } else if (!nameReg.test(cityC)) {
      $('#city_cont').addClass('active');
      $('.label_cont-city .error').addClass('active');
    } else {
      $('#city_cont').removeClass('active');
      $('.label_cont-city .error').removeClass('active');
    }

    if (inputValCont[5] == "") {
      $('#email_cont').addClass('active');
      $('.label_cont-email .error').addClass('active');
    } else if (!emailReg.test(emailC)) {
      $('#email_cont').addClass('active');
      $('.label_cont-email .error').addClass('active');
    } else {
      $('#email_cont').removeClass('active');
      $('.label_cont-email .error').removeClass('active');
    }

    if (inputValCont[6] == "") {
      $('#message_cont').addClass('active');
    } else {
      $('#message_cont').removeClass('active');
    }

  }

// --------------------------------------------------

  $(window).resize(function() {
    if($(window).width() < 750) {
      $('.error').empty();
    } else if ($(window).width() > 750) {
      $('.error').text("Error message");
    }
  });

  $(window).is(function() {
    if($(window).width() < 750) {
      $('.error').empty();
    } else if ($(window).width() > 750) {
      $('.error').text("Error message");
    }
  });

});