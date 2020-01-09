import $ from 'jquery';

$(document).ready( function() {

  const phrase = $('[data-phrase]');
  const fixedMenu = $('.fixed-menu');
  const scrollTopButton = $('.scroll_top');
  const htmlBody = $('html, body');
  //
  phrase.click(function() {
    htmlBody.animate({scrollTop: phrase.offset().top - fixedMenu.height()
    }, 1000);
  })

  // scrollWidth
  let div = document.createElement('div');
  div.style.overflowY = 'scroll';
  div.style.width = '50px';
  div.style.height = '50px';
  div.style.visibility = 'hidden';
  document.body.appendChild(div);
  let scrollWidth = div.offsetWidth - div.clientWidth;
  document.body.removeChild(div);
  // ----------------------------------

  $(window).scroll(function() {
    if ($(this).scrollTop() > $(this).height()/2) {
      scrollTopButton.addClass('active');
    } else {
      scrollTopButton.removeClass('active');
    }
  });

  scrollTopButton.click(function() {
    htmlBody.stop().animate({scrollTop: 0}, 1000);
  });
  
  $(window).scroll( function() {
      if ($(window).scrollTop() >= 250) {
        fixedMenu.fadeIn().addClass('active');
      }
      else {
        fixedMenu.fadeOut().removeClass('active');
      }
  });

	const iconHamb = $('.bars');
	const hambNav = $('.header__nav');
  const navOverlay = $('.olnav');
  const navHidden = $('.hdnav');
	const closeHamb = $('.btncloseNav');
  const body = $('body');
	
	iconHamb.click( function() {
    navOverlay.fadeIn();
    body.addClass('header__body');
    body.css('padding-right', scrollWidth);
    hambNav.addClass('active');
	});
	closeHamb.click( function() {
    navOverlay.fadeOut();
    body.removeClass('header__body');
    body.css('padding-right', 0);
    hambNav.removeClass('active');
	});
  navHidden.click( function() {
    navOverlay.fadeOut();
    body.removeClass('header__body');
    body.css('padding-right', 0);
    hambNav.removeClass('active');
  });
	
	const iconEnv = $('.envelope');
	const	envContact = $('.header__contact');
  const contactOverlay = $('.olcontact');
  const contactHidden = $('.hdcontact');
	const closeEnv = $('.btncloseCont');

	iconEnv.click( function() {
    contactOverlay.fadeIn();
    body.addClass('header__body');
    body.css('padding-right', scrollWidth);
    envContact.addClass('active');
	});
	closeEnv.click( function() {
    contactOverlay.fadeOut();
    body.removeClass('header__body');
    body.css('padding-right', 0);
    envContact.removeClass('active');
	});
  contactHidden.click( function() {
    contactOverlay.fadeOut();
    body.removeClass('header__body');
    body.css('padding-right', 0);
    envContact.removeClass('active');
  })

  const nameReg = /^[A-Za-z]+$/;
  const numberReg = /^[0-9]+$/;
  const emailReg = /^([\w-]+@([\w-]+\.)+[\w-]{2,4})?$/;
	
 // ---------------HEADER FORM----------------
  
  const names = $('#name_head');
  const telephone = $('#telephone_head');
  const country = $('#country_head');
  const city = $('#city_head');
  const email = $('#email_head');
  const message = $('#message_head');

  const arrHead = [names, country, city, email, telephone, message];

  function validateFormHead() {
    arrHead.forEach((item, i, arr) => {
      if (item.val() == "") {
        item.addClass('active');
        item.next().addClass('active');
      } else if ( i < 3 && !nameReg.test(item.val()) ||
                  i == 3 && !emailReg.test(arr[3].val()) ||
                  i == 4 && !numberReg.test(arr[4].val())
        ) {
        item.addClass('active');
        item.next().addClass('active');
      } else {
        item.removeClass('active');
        item.next().removeClass('active');
      }
    });
  }

  const formHead = $('.form_head');
  const inputHead = $('.input_head');
  const thanksHead = $('.header__thanks');

  formHead.submit( e => {
    e.preventDefault();
    validateFormHead();
    if (!inputHead.is('.active')) {
      $.ajax().done(function() {
        thanksHead.delay(300).fadeIn();
        formHead.trigger('reset');
        thanksHead.delay(2500).fadeOut();
        contactOverlay.delay(3500).fadeOut();
        envContact.delay(3500).removeClass('active');
        body.delay(3500).removeClass('header__body');
        body.delay(3500).css('padding-right', 0);
      });
      return false;
    }
  });

// --------------CONTACT PAGE FORM-----------------

  const namesC = $('#name_cont');
  const telephoneC = $('#telephone_cont');
  const companyC = $('#company_cont');
  const countryC = $('#country_cont');
  const cityC = $('#city_cont');
  const emailC = $('#email_cont');
  const messageC = $('#message_cont');

  const arrCont = [namesC, companyC, countryC, cityC, emailC, telephoneC, messageC];

  function validateFormCont() {
     arrCont.forEach((item, i, arr) => {
      if (item.val() == "") {
        item.addClass('active');
        item.next().addClass('active');
      } else if ( i < 4 && !nameReg.test(item.val()) ||
                  i == 4 && !emailReg.test(arr[4].val()) ||
                  i == 5 && !numberReg.test(arr[5].val())
        ) {
        item.addClass('active');
        item.next().addClass('active');
      } else {
        item.removeClass('active');
        item.next().removeClass('active');
      }
    });
  }

  const formCont = $('.form_cont');
  const inputCont = $('.input_cont');

  formCont.submit( e => {
    e.preventDefault();
    validateFormCont();
    if (!inputCont.is('.active')) {
      $.ajax().done(function() {
        thanksHead.delay(300).fadeIn();
        formCont.trigger('reset');
        thanksHead.delay(2500).fadeOut();
        contactOverlay.delay(3500).fadeOut();
        envContact.delay(3500).removeClass('active');
        body.delay(3500).removeClass('header__body')
      });
      return false;
    }
  });

// --------------------------------------------------
  
  const errorMessage = $('.error__text');
  $(window).resize(function() {
    if($(window).width() < 750) {
      errorMessage.css('display', 'none');
    } else if ($(window).width() > 750) {
      errorMessage.css('display', 'block');
    }
  });

  $(window).is(function() {
    if($(window).width() < 750) {
      errorMessage.css('display', 'none');
    } else if ($(window).width() > 750) {
      errorMessage.css('display', 'block');
    }
  });

});