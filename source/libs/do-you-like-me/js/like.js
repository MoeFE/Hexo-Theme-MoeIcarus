;(function ($) {
  var api = {
    baseURL: '//quq.cat',
    get: '/api/like?action=get',
    add: '/api/like?action=add',
  }

  $.getJSON(api.baseURL + api.get, function (data) {
    $('.like-vote span').animateNumber({ number: data.like });
  });

  $('.like-vote').click(function () {
    if ($('.like-title').html() === 'Do you like me?') {
      $.getJSON(api.baseURL + api.add, function (data) {
        if (data.success) {
          $('.like-vote span').animateNumber({ number: data.like });
          $('.like-title').html('我也喜欢你 (*≧▽≦)');
          setTimeout(function () {
            $('.like-title').html('Do you like me?');
          }, 2000)
        }
        else {
          $('.like-title').html('你的爱我已经感受到了~');
        }
      });
    }
  });
})(jQuery);
