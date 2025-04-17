"use strict";

var settings = {
  "url": "./asset/js/page.json",
  "method": "GET",
  "timeout": 0
};
$.ajax(settings).done(function (response) {
  var Page03HTML = "<figure><div class=\"sliderIMG\"> <img src=\"asset/img/web/03-1177admin.png\" alt=\"\"> </div> <figcaption> <h2>\u7CFB\u7D71\u5F8C\u81FA\u7CFB\u7D71\u5EFA\u7F6E</h2> <p> <span>\u4E0D\u4FBF\u516C\u958B</span><span>\u6703\u54E1\u8CC7\u6599\u8868\u55AE\u5EFA\u7ACB</span><span>\u6578\u64DA\u8CC7\u6599\u7D71\u8A08\u5716\u8868\u5316</span><span>\u8CC7\u6599\u5EFA\u7ACB\u8207\u522A\u9664</span><span>UI\u4ECB\u9762\u8A2D\u8A08\u8207\u7F8E\u5316</span> </p> <h4 class=\"mb-2\">\u60F3\u4E86\u89E3\u66F4\u591A??</h4> <a href=\"https://mail.google.com/mail/?view=cm&to=erin.feng210210@gmail.com\" target=\"_blank\" id=\"contectme\" class=\"btn\">Content Me</a> </figcaption> </figure>";
  var Page05HTML = "\n        <!-- <h3>\u95DC\u65BC\u6211</h3> -->\n                    <article class=\"areaAbout\">\n                        <aside class=\"wow fadeInUp\" data-wow-duration=\"1s\">\n                            <figure class=\"myPhoto\">\n                                <img src=\"./asset/img/pp_pic.png\" alt=\"\">\n                                <figcaption>\n                                    <div class=\"qrcode\">\n                                        <img src=\"./asset/img/line_qrcode.png\" alt=\"\">\n                                    </div>\n                                    <div class=\"pp_info\">\n                                        <h4>\u99AE \u65FB\u5983 | Erin Feng</h4>\n                                        <a href=\"tel:+886-983980697\">+886 983980697</a>\n                                        <a href=\"mailto:erin.feng210210@gmail.com\">erin.feng210210@gmail.com</a>\n                                    </div>\n                                </figcaption>\n                            </figure>\n                        </aside>\n                        <div class=\"about_detail\">\n                            <p class=\"aboutText wow fadeInUp\" data-wow-duration=\"1s\">\n                                \u56E0\u559C\u6B61\u756B\u756B\u800C\u8E0F\u5165\u8A2D\u8A08\u9818\u57DF\n                                <br> \u4E00\u8DEF\u4E0A\u8DCC\u8DCC\u649E\u649E\u6210\u9577\n                                <br> \u5F9E\u7DE8\u6392\u7684\u57FA\u672C\u6982\u5FF5\u5230\u9AD4\u6703\u7F8E\u5B78\u7684\u9B54\u6CD5\n                                <br> \u4E0D\u9858\u505C\u4E0B\u8173\u6B65 \u9032\u800C\u63A5\u89F8\u5230\u7DB2\u9801<br> \u5F9E\u4E0D\u61C2\u4EC0\u9EBC\u662Ftable \u5230\u73FE\u5728\u7684 if / else<br> \u4EBA\u751F\u662F\u689D\u6F2B\u9577\u7684\u8DEF\n                                <br> \u6709\u5E78\u8E0F\u4E0A\u82F1\u570B\u7684\u65C5\u7A0B \u6536\u7A6B\u826F\u591A<br> \u4E00\u5E74\u591A\u7684\u7D93\u6B77\u9AD4\u9A57\u5230\u4E16\u754C\u4E4B\u5927\n                                <br> \u5B78\u7FD2\u4E4B\u8DEF\u66F4\u662F\u7121\u7AAE\u7121\u76E1\n                                <br> \u4E0D\u9858\u756B\u4E0A\u4F11\u6B62\u7B26 \u9081\u958B\u8173\u6B65\u5F80\u524D\u9032<br> \u671B\u80FD\u5B78\u4EE5\u81F4\u7528 \u5275\u9020\u66F4\u591A\u53EF\u80FD\u6027<br>\n                            </p>\n                            <div class=\"infoBox info_skills\">\n                                <h3 class=\"wow fadeInUp\" data-wow-duration=\"1s\" data-wow-delay=\"0.5s\">Skill Set</h3>\n                                <!-- item -->\n                                <figure class=\"wow fadeInUp\" data-wow-duration=\"1s\" data-wow-delay=\"1s\">\n                                    <div><img src=\"./asset/img/icon_skill_1.png\" alt=\"\"></div>\n                                    <figcaption>\n                                        <h5>UI / UX Design</h5>\n                                        <p>\u6839\u64DA\u9700\u6C42\u8A2D\u8A08\u51FA\u7B26\u5408\u7DB2\u9801\u4E4B\u4F7F\u7528\u4ECB\u9762\uFF0C\u4E26\u8207PM\u5408\u4F5C\u5354\u8ABF\u898F\u5283\u6D41\u7A0B\u3002</p>\n                                        <ul>\n                                            <li>\u2726 User Research</li>\n                                            <li>\u2726 Visual Design</li>\n                                            <li>\u2726 Wireframe & Mockup Tools</li>\n                                            <li>\u2726 Prototyping</li>\n                                            <li>\u2726 Responsive Design</li>\n                                        </ul>\n                                    </figcaption>\n                                </figure>\n                                <!-- item -->\n                                <figure>\n                                    <div><img src=\"./asset/img/icon_skill_2.png\" alt=\"\"></div>\n\n                                    <figcaption>\n                                        <h5>Front to End</h5>\n                                        <p>\u7DB2\u7AD9\u5207\u7248\u8207\u4ECB\u9762\u4E92\u52D5\u6548\u679C\uFF0C\u5448\u73FE\u51FA\u8996\u89BA\u8207\u52D5\u614B\u7D50\u5408\u4E4BRWD\u7DB2\u9801\u3002\u8CC7\u6599\u4E32\u63A5\u6574\u5408\u8207\u8A08\u7B97\u3002</p>\n                                        <ul>\n                                            <li>\u2726 Html5 / Scss</li>\n                                            <li>\u2726 Javascript / JQuery</li>\n                                            <li>\u2726 Github</li>\n                                            <li>\u2726 WebPack</li>\n                                            <li>\u2726 AJAX / JSON</li>\n                                        </ul>\n                                    </figcaption>\n                                </figure>\n                                <!-- item -->\n                                <figure>\n                                    <div><img src=\"./asset/img/icon_skill_3.png\" alt=\"\"></div>\n                                    <figcaption>\n                                        <h5>Graphic Design</h5>\n                                        <p>LOGO\u8A2D\u8A08\u3001\u5EE3\u544ABANNER\u3001\u8F38\u51FA\u54C1\u8A2D\u8A08\uFF0C\u4EE5\u53CA\u7522\u54C1\u5305\u88DD\u8A2D\u8A08\u3002</p>\n                                        <ul>\n                                            <li>\u2726 Branding Design</li>\n                                            <li>\u2726 Marketing Design</li>\n                                            <li>\u2726 Package Design</li>\n                                        </ul>\n                                    </figcaption>\n                                </figure>\n                            </div>\n                            <div class=\"infoBox info_experience\">\n                                <h3>Experience</h3>\n                                <!-- work item -->\n                                <div class=\"infoItem wow fadeInUp\" data-wow-duration=\"1s\">\n                                    <div class=\"info_year\">\n                                        <span>2024.04</span>\n                                        <i></i>\n                                        <span>2020.04</span>\n                                    </div>\n                                    <div class=\"info_work\">\n                                        <h5>\u7DB2\u9801\u524D\u7AEF\u8A2D\u8A08</h5>\n                                        <h6>\u2726 PolyLulu Ltd.</h6>\n                                        <ol>\n                                            <li>\u5B98\u7DB2\u7DAD\u8B77\u8207\u512A\u5316</li>\n                                            <li>\u5B98\u7DB2\u6539\u7248\uFF1AUIUX\u8A2D\u8A08\u8207\u524D\u7AEF\u5207\u7248</li>\n                                            <li>\u8DE8\u90E8\u9580\u6E9D\u901A\u5354\u8ABF\u8207\u9032\u5EA6\u638C\u63A7</li>\n                                            <li>\u524D\u7AEF\u6548\u80FD\u8ABF\u6821</li>\n                                            <li>APP UIUX\u512A\u5316</li>\n                                        </ol>\n                                        <small>#Scss #Webpack #JavaScript #Jquery #GitHub #figma</small>\n                                    </div>\n                                </div>\n                                <!-- work item -->\n                                <div class=\"infoItem\">\n                                    <div class=\"info_year\">\n                                        <span>2018.08</span>\n                                        <i></i>\n                                        <span>2015.07</span>\n                                    </div>\n                                    <div class=\"info_work\">\n                                        <h5>\u7DB2\u9801\u8996\u89BA\u8A2D\u8A08</h5>\n                                        <h6>\u2726 MyDay Ltd.</h6>\n                                        <ol>\n                                            <li>\u5EE3\u5BA3\u6D3B\u52D5\u9801\u8996\u89BA\u8207\u5207\u7248</li>\n                                            <li>\u524D\u7AEF\u7CFB\u7D71\u8CC7\u6599\u521D\u6B65\u6574\u5408</li>\n                                            <li>\u7DB2\u9801\u4E92\u52D5\u7279\u6548\u88FD\u4F5C\u5448\u73FE</li>\n                                        </ol>\n                                        <small>#Html5 #scss #webpack #JavaScript #Jquery</small>\n                                    </div>\n                                </div>\n                                <!-- work item -->\n                                <div class=\"infoItem wow fadeInUp\" data-wow-duration=\"1s\">\n                                    <div class=\"info_year\">\n                                        <span>2014.02</span>\n                                        <i></i>\n                                        <span>2013.09</span>\n                                    </div>\n                                    <div class=\"info_work\">\n                                        <h5>Art Designer</h5>\n                                        <h6>\u2726Walplus Wall Stickers Ltd.</h6>\n                                        <ol>\n                                            <li>\u7522\u54C1\u7E6A\u88FD\u8A2D\u8A08</li>\n                                            <li>\u7522\u54C1\u5305\u88DD\u8A2D\u8A08</li>\n                                            <li>\u7DB2\u7AD9\u7DAD\u8B77\u8207\u958B\u767C</li>\n                                            <li>\u5546\u54C1\u4E0A\u67B6\u4E8B\u5B9C</li>\n                                        </ol>\n                                        <small>#VisualDesign #Illustration #PackagingDesign #PrintProduction</small>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </article>\n        "; //page01 Info

  response[0].page01.forEach(function (item) {
    var pageHTML01 = "<figure class=\"wow fadeInUp\" data-wow-duration=\"1s\">\n                                        <div class=\"sliderIMG\">\n                                            <img src=\"" + item.img + "\" alt=\"\">\n                                        </div>\n                                        <figcaption>\n                                            <h2>" + item.title + "</h2>\n                                            <p class=\"pageinfoTxT\">" + item.info + "</p>\n                                            <a href=\"" + item.url + "\" class=\"btn\"  target=\"_blank\">View Website</a>\n                                        </figcaption>\n                                    </figure>";
    $('#pageBOX01').append(pageHTML01);
  }); //page02 Info

  response[1].page02.forEach(function (item) {
    var pageHTML02 = "<figure class=\"wow fadeInUp\" data-wow-duration=\"1s\">\n                                        <div class=\"sliderIMG\">\n                                            <img src=\"" + item.img + "\" alt=\"\">\n                                        </div>\n                                        <figcaption>\n                                            <h2>" + item.title + "</h2>\n                                            <p class=\"pageinfoTxT\">" + item.info + "</p>\n                                            <a href=\"" + item.url + "\" class=\"btn\"  target=\"_blank\">View Website</a>\n                                        </figcaption>\n                                    </figure>";
    $('#pageBOX02').append(pageHTML02);
  }); //page03 Info

  response[2].page03.forEach(function (item) {
    var pageHTML03 = "<figure class=\"wow fadeInUp\" data-wow-duration=\"1s\">\n                                        <div class=\"sliderIMG\">\n                                            <img src=\"" + item.img + "\" alt=\"\">\n                                        </div>\n                                        <figcaption>\n                                            <h2>" + item.title + "</h2>\n                                            <p class=\"pageinfoTxT\">" + item.info + "</p>\n                                            <a href=\"" + item.url + "\" class=\"btn\"  target=\"_blank\">View Website</a>\n                                        </figcaption>\n                                    </figure>";
    $('#pageBOX03').append(pageHTML03);
  }); //page04 Info

  response[3].page04.forEach(function (page) {
    // alert(page.pageTIT);
    var pageTitle = " <article>\n                <h3>" + page.pageTIT + "</h3>\n                <div id=\"page" + page.pageTIT + "\" class=\"row\">\n                \n                </div>\n            </article>";
    $('#pageBOX04').append(pageTitle);
    page.items.forEach(function (item) {
      var pageHTML04 = "<div class=\"col-12 col-sm-6 col-md-4\">\n                                        <figure class=\"wow fadeInUp\" data-wow-duration=\"1s\">\n                                            <img src=\"" + item.img + "\" alt=\"\">\n                                            <figcaption>" + item.title + " </figcaption>\n                                        </figure>\n                                        <h5>" + item.title + "</h5>\n                                    </div>";
      $('#page' + page.pageTIT).append(pageHTML04);
    }); // console.log(page.logo.title);
  });
  $('#pageBOX05').html(Page05HTML);
  $(".navClick ul li").on("click", function () {
    $('.indexBGALL').addClass('z_index_up'); // $('.pageIndex').show().addClass('z_page_up');

    $('header').fadeIn(500); // $('#goTopMenu').fadeIn();
    // $('footer').fadeIn();
    //get data PAge01

    if ($(this).hasClass('nav01')) {
      // $('#page01').siblings('section').find('.sliderBN').html('');
      $('.sliderBN').hide();
      $('#pageBOX01').fadeIn();
      $('#page01 .sliderCon').scrollTop();
    } //get data PAge02


    if ($(this).hasClass('nav02')) {
      $('.sliderBN').hide();
      $('#pageBOX02').fadeIn(); // $('#page02').siblings('section').find('.sliderBN').html('');

      $('#page02 .sliderCon').scrollTop();
    } //get data PAge03


    if ($(this).hasClass('nav03')) {
      $('.sliderBN').hide();
      $('#pageBOX03').fadeIn(); // $('#page03').siblings('section').find('.sliderBN').html('');

      $('#page03 .sliderCon').scrollTop();
    } //get data PAge04


    if ($(this).hasClass('nav04')) {
      $('.sliderBN').hide();
      $('#pageBOX04').fadeIn(); // $('#page04').siblings('section').find('.sliderBN').html('');

      $('#page04 .sliderCon').scrollTop();
    } //get data PAge05


    if ($(this).hasClass('nav05')) {
      $('.sliderBN').hide();
      $('#pageBOX05').fadeIn(); // $('#page05').siblings('section').find('.sliderBN').html('');

      $('#page05 .sliderCon').scrollTop();
    }

    var NN = Number($(this).index()) + 1; // alert(NN);

    var titEN = $(this).find('span').text();
    var titCN = $(this).find('b').text();
    var titlEHTML = titCN + '<span> #' + titEN + '</span>';
    $('.pageBg').hide();
    $(".page0" + NN).fadeIn();
    $('.pageNav').fadeOut(100);
    $("#mainTITLE").html(titlEHTML);
    $(".areaPAGE").fadeOut(100).removeClass('active');
    $("#page0" + NN).fadeIn(200).addClass('active');
    initLenisOnCurrentPage();
    $('.areaPAGE').animate({
      scrollTop: 0
    }, 500);
    return false;
  }); //page info from array to list

  for (var i = 0; i < $('.pageinfoTxT').length; i++) {
    var arINFO = $('.pageinfoTxT').eq(i).text().split(",");
    $('.pageinfoTxT').eq(i).html('');

    for (var j = 0; j < arINFO.length; j++) {
      var infoTXT = '<span>' + arINFO[j] + '</span>'; // console.log(infoTXT);

      $('.pageinfoTxT').eq(i).append(infoTXT);
    }
  }
}); //add span tag to ball numbers
// for (let i = 0; i < $('.ballPP').length; i++) {
//     var arrBall = $('.ballPP').eq(i).text().split(",");
//     $('.ballPP').eq(i).html('');
//     for (let j = 0; j < arrBall.length; j++) {
//         var spanBall = '<span>' + arrBall[j] + '</span>';
//         // console.log(spanBall);
//         $('.ballPP').eq(i).append(spanBall);
//     }
// }
//MENU (for phone)--------------

$('.navMenuList').click(function () {
  $('.pageNav').fadeIn(500);
  $('.btn_login').fadeIn(300);
  return false;
});
$('.btnClose').click(function () {
  $('.pageNav').fadeOut(100);
  return false;
}); //平滑

if (typeof Lenis === 'undefined') {
  console.error('Lenis library not loaded.');
} else {
  console.log('Lenis is loaded successfully.');
}

var lenis = null; // 用來存當前的 Lenis 實例

function initLenisOnCurrentPage() {
  var currentPage = document.querySelector('.areaPAGE.active'); // 只找有 .active 的

  if (!currentPage) {
    console.error('No active .areaPAGE found');
    return;
  } // 若已經有 lenis 實例，先關掉它


  if (lenis) {
    lenis.destroy(); // 釋放資源
  } // 初始化新的 Lenis


  lenis = new Lenis({
    wrapper: currentPage,
    content: currentPage.querySelector('main') || currentPage,
    lerp: 0.1,
    smoothWheel: true,
    smoothTouch: false
  }); // 滾動動畫

  function animate(time) {
    lenis.raf(time);
    requestAnimationFrame(animate);
  }

  requestAnimationFrame(animate);
} //Scroll gotop 這個要寫在最後面 --------------


$(function () {
  $('.goTopLogo').click(function () {
    // console.log($('.areaPAGE').scrollTop());
    $('.indexBGALL').removeClass('z_index_up'); // $('.pageIndex').hide().removeClass('z_page_up');

    $('header').fadeOut(100);
    $(".areaPAGE").hide(100);
    return false;
  });
  /* 偵測卷軸滑動時，往下滑超過400px就讓GoTop按鈕出現 */

  $('.areaPAGE').scroll(function () {
    // console.log($(this).scrollTop());
    if ($(this).scrollTop() > 400) {
      $('#goTopMenu').fadeIn(); // $('footer').fadeIn();
    } else {
      $('#goTopMenu').hide(); // $('footer').hide();
    }
  });
  $('.goTop').click(function () {
    // console.log('toptop');
    $('.areaPAGE').animate({
      scrollTop: 0
    }, 500);
    return false;
  });
});