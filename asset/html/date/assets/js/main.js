$(document).ready(function () {
    // 當點擊選單開關按鈕時，顯示/隱藏選單
    $(document).on('click', '#menu-toggle', function () {
        $(this).toggleClass('active');
        $('#sidr').toggleClass('sidr');
    });

    // 當點擊選單項目時，收起選單並延遲跳轉
    $('#sidr a').on('click', function (event) {
        event.preventDefault(); // 阻止直接跳轉

        var targetUrl = $(this).attr('href'); // 獲取點擊的連結

        // 給動畫一點時間來結束
        setTimeout(function () {
            $('#menu-toggle').removeClass('active'); // 讓開關按鈕回復初始狀態
            $('#sidr').removeClass('sidr'); // 隱藏選單
            
            // 延遲跳轉
            window.location.href = targetUrl; // 執行跳轉
        }, 300); // 這裡設置為300ms，根據你的動畫時間來調整
    });

    // 當點擊選單以外的區域時，收起選單
    $(document).on('click', function (event) {
        // 如果點擊的區域不是選單或選單開關按鈕，隱藏選單
        if (!$(event.target).closest('#sidr').length && !$(event.target).closest('#menu-toggle').length) {
            $('#menu-toggle').removeClass('active');
            
            // 延遲隱藏選單的動作
            setTimeout(function () {
                $('#sidr').removeClass('sidr');
            }, 300); // 延遲300ms，根據你的動畫時間來調整
        }
    });
});

$(document).on('click', '.navLinkIndex', function (event) {
    event.preventDefault(event);

    const listID = $(this).data('target');
    const targetElement = $("#" + listID);

    const scrollToTarget = (element) => {
        const targetPosition = element.offset().top - 50;
        $('html, body').animate({
            scrollTop: targetPosition
        }, 500);
    };

    if (targetElement.length) {
        scrollToTarget(targetElement);
        window.history.pushState(null, null, `#${listID}`);
    } else {
        window.location.href = `/#${listID}`;
    }
});