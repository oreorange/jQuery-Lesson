// $(document).ready(function(){
//   $('body').html('<h1>Hello jQuery!!</h1>');
// });


// $(function(){
//   $('.box1').css({
//     'background-color':'#0000ff',
//     'height':'100px'
//   });
// });


// $(function(){
//   $('.box1').slideDown();
// });

// $(function(){
//   $('.box1').show();
//   $('.box1').css({'background-color':'#00f'});
// });

// $(function(){
//   $('.box1').hide();
// });

$(function(){
  $('.box1').slideDown(function(){
    $('.box1').css({
      'background-color':'#00f',
      'width':'200px',
      'height':'100px'
    }).slideUp();
  });
});

$(function(){
  $('.box2').mouseover(function(){
    $('.box2').css({'background-color':'#0000FF'});
  });
})

$(function(){
  $('.box2').mouseover(function(){
    $('.box2').css({'background-color': '#0000FF'});
  });
  $('.box2').mouseout(function(){
    $('.box2').css({'background-color': '#FF0000'});
  });
});

// マウス乗せた
// $(function(){
//   $('.box2').mouseover(function(){
//     $('.box2').addClass('box2-ext');
//   });
//   $('.box2').mouseout(function(){
//     $('.box2').removeClass('box2-ext');
//   });
// });

$(function(){
  $('.box2').on('click', function(){
    $('.box2').addClass('box2-ext');
  });
  $('.box2').mouseout(function(){
    $('.box2').removeClass('box2-ext');
  });
});