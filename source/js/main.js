/* global jQuery */

(function ($) {
  var toTop = ($('#sidebar').height() - $(window).height()) + 60
  // Caption
  $('.article-entry').each(function (i) {
    $(this).find('img').each(function () {
      if (this.alt && !(!!$.prototype.justifiedGallery && $(this).parent('.justified-gallery').length)) {
        $(this).after('<span class="caption">' + this.alt + '</span>')
      }

      // 对于已经包含在链接内的图片不适用lightGallery
      if ($(this).parent().prop('tagName') !== 'A') {
        $(this).wrap('<a href="' + ($(this).attr('data-imgbig') ? $(this).attr('data-imgbig') : this.src) + '" title="' + this.alt + '" class="gallery-item"></a>')
      }
    })
  })
  if (typeof jQuery.prototype.lightGallery !== 'undefined') {
    var options = {
      selector: '.gallery-item'
    }
    $('.article-entry').lightGallery(options)
    $($('.article-gallery')[0]).lightGallery(options)
  }
  if ($.prototype.justifiedGallery) { // if justifiedGallery method is defined
    /* eslint-disable */
    var options = {
      rowHeight: 140,
      margins: 4,
      lastRow: 'justify'
    }
    $('.justified-gallery').justifiedGallery(options)
    /* eslint-enable */
  }

  // Profile card
  $(document).on('click', function () {
    $('#profile').removeClass('card')
  }).on('click', '#profile-anchor', function (e) {
    e.stopPropagation()
    $('#profile').toggleClass('card')
  }).on('click', '.profile-inner', function (e) {
    e.stopPropagation()
  })

  // To Top
  if ($('#sidebar').length) {
    $(document).on('scroll', function () {
      if ($(document).width() >= 800) {
        if (($(this).scrollTop() > toTop) && ($(this).scrollTop() > 0)) {
          $('#toTop').fadeIn()
          $('#toTop').css('left', $('#sidebar').offset().left)
        } else {
          $('#toTop').fadeOut()
        }
      } else {
        $('#toTop').fadeIn()
        $('#toTop').css('right', 20)
      }
    }).on('click', '#toTop', function () {
      $('body, html').animate({ scrollTop: 0 }, 600)
    })
  }

  // visibilitychange
  var link = $('link[rel="icon"]')
  var title = document.title
  var map = {
    0: { icon: link.attr('href'), title: '(/≧▽≦/)咦！又好了！' + title },
    1: { icon: '//www.anotherhome.net/wp-content/themes/Amativeness/fail.ico', title: '(●—●)喔哟，崩溃啦！' }
  }
  $(window).on('visibilitychange', function () {
    var data = map[+document.hidden]
    link.attr('href', data.icon)
    document.title = data.title
    setTimeout(function () {
      if (document.hidden) return
      document.title = title
    }, 2000)
  })
})(jQuery)
