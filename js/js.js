$(document).ready(function() {

  $('.menu_burger').click(function(){
    $('body').toggleClass('open');
  });
  $('.mobile_menu ul li a').click(function(){
    $('body').removeClass('open');
  });

  $('.hero_slider').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [

    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    ]
  });
  $('.slider_about').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1
  });
  $('.slider_gallery').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: $('.custom_prev'),
    nextArrow: $('.custom_next'),
    responsive: [

    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    ]
  });
  $('.slider_flat').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1
  });

  
  $("input[name=phone]").mask("+9999999?9999999");
  
  var options = {
      delegation: true, clearForm: true, resetForm: true, type: 'post', beforeSubmit: function () {
          $.fancybox.close();
      }
      , success: function () {
          $.fancybox.open('<div id="popupTnx" class="popup tnx"><h2>Ваша заявка успешно отправлена!</h2> <h3>Наш менеджер свяжется с вами в течение 7-15 минут.</h3></div>',
              {type: 'inline', padding: 30}
          );
      }
      , error: function () {
          $.fancybox.open('<div id="popupError" class="popup tnx"><h3>При отправке заявки <br>произошла ошибка</h3></div>',
              {type: 'inline', padding: 30}
          );
      }
  }
  $('#form1').ajaxForm(options);
  $('#form2').ajaxForm(options);
  $('#form3').ajaxForm(options);
  $('#form4').ajaxForm(options);
  $('#form5').ajaxForm(options);
  $('#form6').ajaxForm(options);
  $('#popup_form1').ajaxForm(options);
  $('#popup_form2').ajaxForm(options);
  $('#popup_form3').ajaxForm(options);
  $('#popup_form4').ajaxForm(options);
  $('#form_quiz').ajaxForm(options);
  
});

$("#form1").validate( {rules: {name: {required: true, maxlength: 100,}, phone: {required: true, minlength: 10, maxlength: 25,}, email: {required: true,},}, messages: {name: {required: "Пожалуйста, заполните поле", maxlength: "",}, phone: {required: "Пожалуйста, заполните поле", minlength: "", maxlength: "",},}});
$("#form2").validate( {rules: {name: {required: true, maxlength: 100,}, phone: {required: true, minlength: 10, maxlength: 25,}, email: {required: true,},}, messages: {name: {required: "Пожалуйста, заполните поле", maxlength: "",}, phone: {required: "Пожалуйста, заполните поле", minlength: "", maxlength: "",},}});
$("#form3").validate( {rules: {name: {required: true, maxlength: 100,}, phone: {required: true, minlength: 10, maxlength: 25,}, email: {required: true,},}, messages: {name: {required: "Пожалуйста, заполните поле", maxlength: "",}, phone: {required: "Пожалуйста, заполните поле", minlength: "", maxlength: "",},}});
$("#form4").validate( {rules: {name: {required: true, maxlength: 100,}, phone: {required: true, minlength: 10, maxlength: 25,}, email: {required: true,},}, messages: {name: {required: "Пожалуйста, заполните поле", maxlength: "",}, phone: {required: "Пожалуйста, заполните поле", minlength: "", maxlength: "",},}});
$("#form5").validate( {rules: {name: {required: true, maxlength: 100,}, phone: {required: true, minlength: 10, maxlength: 25,}, email: {required: true,},}, messages: {name: {required: "Пожалуйста, заполните поле", maxlength: "",}, phone: {required: "Пожалуйста, заполните поле", minlength: "", maxlength: "",},}});
$("#form6").validate( {rules: {name: {required: true, maxlength: 100,}, phone: {required: true, minlength: 10, maxlength: 25,}, email: {required: true,},}, messages: {name: {required: "Пожалуйста, заполните поле", maxlength: "",}, phone: {required: "Пожалуйста, заполните поле", minlength: "", maxlength: "",},}});
$("#popup_form1").validate( {rules: {name: {required: true, maxlength: 100,}, phone: {required: true, minlength: 10, maxlength: 25,}, email: {required: true,},}, messages: {name: {required: "Пожалуйста, заполните поле", maxlength: "",}, phone: {required: "Пожалуйста, заполните поле", minlength: "", maxlength: "",},}});
$("#popup_form2").validate( {rules: {name: {required: true, maxlength: 100,}, phone: {required: true, minlength: 10, maxlength: 25,}, email: {required: true,},}, messages: {name: {required: "Пожалуйста, заполните поле", maxlength: "",}, phone: {required: "Пожалуйста, заполните поле", minlength: "", maxlength: "",},}});
$("#popup_form3").validate( {rules: {name: {required: true, maxlength: 100,}, phone: {required: true, minlength: 10, maxlength: 25,}, email: {required: true,},}, messages: {name: {required: "Пожалуйста, заполните поле", maxlength: "",}, phone: {required: "Пожалуйста, заполните поле", minlength: "", maxlength: "",},}});
$("#popup_form4").validate( {rules: {name: {required: true, maxlength: 100,}, phone: {required: true, minlength: 10, maxlength: 25,}, email: {required: true,},}, messages: {name: {required: "Пожалуйста, заполните поле", maxlength: "",}, phone: {required: "Пожалуйста, заполните поле", minlength: "", maxlength: "",},}});
$("#form_quiz").validate( {rules: {name: {required: true, maxlength: 100,}, phone: {required: true, minlength: 10, maxlength: 25,}, email: {required: true,},}, messages: {name: {required: "Пожалуйста, заполните поле", maxlength: "",}, phone: {required: "Пожалуйста, заполните поле", minlength: "", maxlength: "",},}});



function scrollToElement(element, offset) {
    $(element).click(function(e) {
        var elementClick=$(this).attr("href");
        var destination=$(elementClick).offset().top;
        if(destination<0) {
            destination=0;
        }
        $('html, body').animate( {
            scrollTop: destination-offset
        }
        , "slow");
        e.preventDefault();
    }
    );
}

scrollToElement("a[href='#f0']", 60);
scrollToElement("a[href='#f1']", 60);
scrollToElement("a[href='#f2']", 60);
scrollToElement("a[href='#f3']", 60);
scrollToElement("a[href='#f4']", 60);
scrollToElement("a[href='#f5']", 60);


    


$('.tab_1').click(function(){
  $('.tab').removeClass('active');
  $('.tab_content').removeClass('active');
  $(this).addClass('active');
  $('.tab_content_1').addClass('active');
});
$('.tab_2').click(function(){
  $('.tab').removeClass('active');
  $('.tab_content').removeClass('active');
  $(this).addClass('active');
  $('.tab_content_2').addClass('active');
});
$('.tab_3').click(function(){
  $('.tab').removeClass('active');
  $('.tab_content').removeClass('active');
  $(this).addClass('active');
  $('.tab_content_3').addClass('active');
});