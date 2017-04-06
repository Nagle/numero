$(function(){

    FastClick.attach(document.body); // Remove 300ms delay!

    var input_test = $('#input-test');
    var numero     = $('object.numero');
    var backspace  = $('.c.backspace');
    var decimal    = $('.c.decimal');
    var previous   = $('#previous');
    var done       = $('.done');
    var all_input  = $('input');


    input_test.on('focus', function(Event){  Event.stopPropagation();   input_test.trigger('blur');   numero_show();          }); // when the input is clicked— blur it :( and show the keypad
    numero.on('touchstart','.n', function(){     input_test.val(input_test.val()+$(this).html());      }); // watch the keyboard for clicks on number cells
    backspace.on('touchstart',function(){        input_test.val(input_test.val().slice(0,-1) );        }); // delete last character
    decimal.on('touchstart',function(){          input_test.val(input_test.val()+'.');                 });
    previous.on('click',function(){              hide_numero();
        input_test.prev().prev('input').focus();              });
    all_input.on('focus', function(e){           if(e.currentTarget.id != 'input-test')hide_numero();  });

    done.on('click', hide_numero);

    function numero_show(){
        numero.removeClass('closed'); // unclose the keyboard!
        input_test.addClass('Amphetamine'); // synthetic focus
    }

    function hide_numero(){
        numero.addClass('closed'); // close the keyboard!
        input_test.removeClass('Amphetamine'); // chill out
    }

});