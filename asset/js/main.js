
var settings = {
    "url": "./asset/js/page.json",
    "method": "GET",
    "timeout": 0,
};

$.ajax(settings).done(function (response) {
    var Page03HTML=`<figure><div class="sliderIMG"> <img src="asset/img/web/03-1177admin.png" alt=""> </div> <figcaption> <h2>系統後臺系統建置</h2> <p> <span>不便公開</span><span>會員資料表單建立</span><span>數據資料統計圖表化</span><span>資料建立與刪除</span><span>UI介面設計與美化</span> </p> <h4 class="mb-2">想了解更多??</h4> <a href="https://mail.google.com/mail/?view=cm&to=erin.feng210210@gmail.com" target="_blank" id="contectme" class="btn">Content Me</a> </figcaption> </figure>`;

        var Page05HTML=`
        <!-- <h3>關於我</h3> -->
                    <article class="areaAbout">
                        <aside class="wow fadeInUp" data-wow-duration="1s">
                            <figure class="myPhoto">
                                <img src="./asset/img/pp_pic.png" alt="">
                                <figcaption>
                                    <div class="qrcode">
                                        <img src="./asset/img/line_qrcode.png" alt="">
                                    </div>
                                    <div class="pp_info">
                                        <h4>馮 旻妃 | Erin Feng</h4>
                                        <a href="tel:+886-983980697">+886 983980697</a>
                                        <a href="mailto:erin.feng210210@gmail.com">erin.feng210210@gmail.com</a>
                                    </div>
                                </figcaption>
                            </figure>
                        </aside>
                        <div class="about_detail">
                            <p class="aboutText wow fadeInUp" data-wow-duration="1s">
                                因喜歡畫畫而踏入設計領域
                                <br> 一路上跌跌撞撞成長
                                <br> 從編排的基本概念到體會美學的魔法
                                <br> 不願停下腳步 進而接觸到網頁<br> 從不懂什麼是table 到現在的 if / else<br> 人生是條漫長的路
                                <br> 有幸踏上英國的旅程 收穫良多<br> 一年多的經歷體驗到世界之大
                                <br> 學習之路更是無窮無盡
                                <br> 不願畫上休止符 邁開腳步往前進<br> 望能學以致用 創造更多可能性<br>
                            </p>
                            <div class="infoBox info_skills">
                                <h3 class="wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.5s">Skill Set</h3>
                                <!-- item -->
                                <figure class="wow fadeInUp" data-wow-duration="1s" data-wow-delay="1s">
                                    <div><img src="./asset/img/icon_skill_1.png" alt=""></div>
                                    <figcaption>
                                        <h5>UI / UX Design</h5>
                                        <p>根據需求設計出符合網頁之使用介面，並與PM合作協調規劃流程。</p>
                                        <ul>
                                            <li>✦ User Research</li>
                                            <li>✦ Visual Design</li>
                                            <li>✦ Wireframe & Mockup Tools</li>
                                            <li>✦ Prototyping</li>
                                            <li>✦ Responsive Design</li>
                                        </ul>
                                    </figcaption>
                                </figure>
                                <!-- item -->
                                <figure>
                                    <div><img src="./asset/img/icon_skill_2.png" alt=""></div>

                                    <figcaption>
                                        <h5>Front to End</h5>
                                        <p>網站切版與介面互動效果，呈現出視覺與動態結合之RWD網頁。資料串接整合與計算。</p>
                                        <ul>
                                            <li>✦ Html5 / Scss</li>
                                            <li>✦ Javascript / JQuery</li>
                                            <li>✦ Github</li>
                                            <li>✦ WebPack</li>
                                            <li>✦ AJAX / JSON</li>
                                        </ul>
                                    </figcaption>
                                </figure>
                                <!-- item -->
                                <figure>
                                    <div><img src="./asset/img/icon_skill_3.png" alt=""></div>
                                    <figcaption>
                                        <h5>Graphic Design</h5>
                                        <p>LOGO設計、廣告BANNER、輸出品設計，以及產品包裝設計。</p>
                                        <ul>
                                            <li>✦ Branding Design</li>
                                            <li>✦ Marketing Design</li>
                                            <li>✦ Package Design</li>
                                        </ul>
                                    </figcaption>
                                </figure>
                            </div>
                            <div class="infoBox info_experience">
                                <h3>Experience</h3>
                                <!-- work item -->
                                <div class="infoItem wow fadeInUp" data-wow-duration="1s">
                                    <div class="info_year">
                                        <span>2024.04</span>
                                        <i></i>
                                        <span>2020.04</span>
                                    </div>
                                    <div class="info_work">
                                        <h5>網頁前端設計</h5>
                                        <h6>✦ PolyLulu Ltd.</h6>
                                        <ol>
                                            <li>官網維護與優化</li>
                                            <li>官網改版：UIUX設計與前端切版</li>
                                            <li>跨部門溝通協調與進度掌控</li>
                                            <li>前端效能調校</li>
                                            <li>APP UIUX優化</li>
                                        </ol>
                                        <small>#Scss #Webpack #JavaScript #Jquery #GitHub #figma</small>
                                    </div>
                                </div>
                                <!-- work item -->
                                <div class="infoItem">
                                    <div class="info_year">
                                        <span>2018.08</span>
                                        <i></i>
                                        <span>2015.07</span>
                                    </div>
                                    <div class="info_work">
                                        <h5>網頁視覺設計</h5>
                                        <h6>✦ MyDay Ltd.</h6>
                                        <ol>
                                            <li>廣宣活動頁視覺與切版</li>
                                            <li>前端系統資料初步整合</li>
                                            <li>網頁互動特效製作呈現</li>
                                        </ol>
                                        <small>#Html5 #scss #webpack #JavaScript #Jquery</small>
                                    </div>
                                </div>
                                <!-- work item -->
                                <div class="infoItem wow fadeInUp" data-wow-duration="1s">
                                    <div class="info_year">
                                        <span>2014.02</span>
                                        <i></i>
                                        <span>2013.09</span>
                                    </div>
                                    <div class="info_work">
                                        <h5>Art Designer</h5>
                                        <h6>✦Walplus Wall Stickers Ltd.</h6>
                                        <ol>
                                            <li>產品繪製設計</li>
                                            <li>產品包裝設計</li>
                                            <li>網站維護與開發</li>
                                            <li>商品上架事宜</li>
                                        </ol>
                                        <small>#VisualDesign #Illustration #PackagingDesign #PrintProduction</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </article>
        `;
    
    //page01 Info
    response[0].page01.forEach(item => {
                var pageHTML01 = `<figure class="wow fadeInUp" data-wow-duration="1s">
                                        <div class="sliderIMG">
                                            <img src="` + item.img + `" alt="">
                                        </div>
                                        <figcaption>
                                            <h2>` + item.title + `</h2>
                                            <p class="pageinfoTxT">` + item.info + `</p>
                                            <a href="` + item.url + `" class="btn"  target="_blank">View Website</a>
                                        </figcaption>
                                    </figure>`;

                $('#pageBOX01').append(pageHTML01);
    });
    //page02 Info
    response[1].page02.forEach(item => {
                var pageHTML02 = `<figure class="wow fadeInUp" data-wow-duration="1s">
                                        <div class="sliderIMG">
                                            <img src="` + item.img + `" alt="">
                                        </div>
                                        <figcaption>
                                            <h2>` + item.title + `</h2>
                                            <p class="pageinfoTxT">` + item.info + `</p>
                                            <a href="` + item.url + `" class="btn"  target="_blank">View Website</a>
                                        </figcaption>
                                    </figure>`;

                $('#pageBOX02').append(pageHTML02);
    });

    //page03 Info
 response[2].page03.forEach(item => {
                var pageHTML03 = `<figure class="wow fadeInUp" data-wow-duration="1s">
                                        <div class="sliderIMG">
                                            <img src="` + item.img + `" alt="">
                                        </div>
                                        <figcaption>
                                            <h2>` + item.title + `</h2>
                                            <p class="pageinfoTxT">` + item.info + `</p>
                                            <a href="` + item.url + `" class="btn"  target="_blank">View Website</a>
                                        </figcaption>
                                    </figure>`;

                $('#pageBOX03').append(pageHTML03);
            });

    //page04 Info
    response[3].page04.forEach(page => {
                // alert(page.pageTIT);
        
                var pageTitle = ` <article>
                <h3>` + page.pageTIT + `</h3>
                <div id="page` + page.pageTIT + `" class="row">
                
                </div>
            </article>`;
                $('#pageBOX04').append(pageTitle);
        
                page.items.forEach(item => {
                    var pageHTML04 = `<div class="col-12 col-sm-6 col-md-4">
                                        <figure class="wow fadeInUp" data-wow-duration="1s">
                                            <img src="` + item.img + `" alt="">
                                            <figcaption>` + item.title + ` </figcaption>
                                        </figure>
                                        <h5>` + item.title + `</h5>
                                    </div>`;
                    $('#page' + page.pageTIT).append(pageHTML04);
        
                });
                // console.log(page.logo.title);
        
    });
    
    $('#pageBOX05').html(Page05HTML);
    

    $(".navClick ul li").on("click", function() {
        $('.indexBGALL').addClass('z_index_up');
        // $('.pageIndex').show().addClass('z_page_up');
        $('header').fadeIn(500);
        

            // $('#goTopMenu').fadeIn();
            // $('footer').fadeIn();
        //get data PAge01
        
        if ($(this).hasClass('nav01')) {
            // $('#page01').siblings('section').find('.sliderBN').html('');
            $('.sliderBN').hide();
            $('#pageBOX01').fadeIn();
            $('#page01 .sliderCon').scrollTop();
            
        }

        //get data PAge02
        if($(this).hasClass('nav02')){
            $('.sliderBN').hide();
            $('#pageBOX02').fadeIn();
            // $('#page02').siblings('section').find('.sliderBN').html('');
            $('#page02 .sliderCon').scrollTop();
            
        }

        //get data PAge03
        if($(this).hasClass('nav03')){
            $('.sliderBN').hide();
            $('#pageBOX03').fadeIn();
            // $('#page03').siblings('section').find('.sliderBN').html('');
            $('#page03 .sliderCon').scrollTop();
           
        }
    
    
        //get data PAge04
        if($(this).hasClass('nav04')){
            $('.sliderBN').hide();
            $('#pageBOX04').fadeIn();
            // $('#page04').siblings('section').find('.sliderBN').html('');
            $('#page04 .sliderCon').scrollTop();
            
        }


        //get data PAge05
        if($(this).hasClass('nav05')){
            $('.sliderBN').hide();
            $('#pageBOX05').fadeIn();
            // $('#page05').siblings('section').find('.sliderBN').html('');
            $('#page05 .sliderCon').scrollTop();
        }

        var NN = Number($(this).index()) + 1;
        // alert(NN);
        var titEN = $(this).find('span').text();
        var titCN = $(this).find('b').text();
        var titlEHTML = titCN + '<span> #' + titEN + '</span>';
    
        $('.pageBg').hide();
        $(".page0"+NN).fadeIn();
    
        $('.pageNav').fadeOut(100);
    
        $("#mainTITLE").html(titlEHTML);
        $(".areaPAGE").fadeOut(100).removeClass('active');
        $("#page0" + NN).fadeIn(200).addClass('active');
        initLenisOnCurrentPage();
        $('.areaPAGE').animate({
            scrollTop: 0
        }, 500);
        return false
    });
    //page info from array to list
    for (let i = 0; i < $('.pageinfoTxT').length; i++) {
        var arINFO = $('.pageinfoTxT').eq(i).text().split(",");
        $('.pageinfoTxT').eq(i).html('');

        for (let j = 0; j < arINFO.length; j++) {

            var infoTXT = '<span>' + arINFO[j] + '</span>';
            // console.log(infoTXT);
            $('.pageinfoTxT').eq(i).append(infoTXT);
        }

    }

});




//add span tag to ball numbers
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
$('.navMenuList').click(function() {
    $('.pageNav').fadeIn(500);
    $('.btn_login').fadeIn(300);
    return false;
});
$('.btnClose').click(function() {
    $('.pageNav').fadeOut(100);
    return false;
});

//平滑
if (typeof Lenis === 'undefined') {
    console.error('Lenis library not loaded.');
} else {
    console.log('Lenis is loaded successfully.');
}

let lenis = null; // 用來存當前的 Lenis 實例

function initLenisOnCurrentPage() {
    const currentPage = document.querySelector('.areaPAGE.active'); // 只找有 .active 的
    if (!currentPage) {
        console.error('No active .areaPAGE found');
        return;
    }

    // 若已經有 lenis 實例，先關掉它
    if (lenis) {
        lenis.destroy(); // 釋放資源
    }

    // 初始化新的 Lenis
    lenis = new Lenis({
        wrapper: currentPage,
        content: currentPage.querySelector('main') || currentPage,
        lerp: 0.1,
        smoothWheel: true,
        smoothTouch: false
    });

    // 滾動動畫
    function animate(time) {
        lenis.raf(time);
        requestAnimationFrame(animate);
    }

    requestAnimationFrame(animate);
}


//Scroll gotop 這個要寫在最後面 --------------

$(function() {
    $('.goTopLogo').click(function () {
        // console.log($('.areaPAGE').scrollTop());
       
        $('.indexBGALL').removeClass('z_index_up');
        // $('.pageIndex').hide().removeClass('z_page_up');
        $('header').fadeOut(100);

        
        $(".areaPAGE").hide(100);
        return false;
    });
    
    /* 偵測卷軸滑動時，往下滑超過400px就讓GoTop按鈕出現 */
    $('.areaPAGE').scroll(function () {
        // console.log($(this).scrollTop());
        if ($(this).scrollTop() > 400) {
            $('#goTopMenu').fadeIn();
            // $('footer').fadeIn();
        } else {
            $('#goTopMenu').hide();
            // $('footer').hide();
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




