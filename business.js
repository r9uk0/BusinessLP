/* 到達したら要素を表示させる */
function showElementAnimation() {
    let elementY = document.getElementsByClassName('fadeinY');
    let elementXR = document.getElementsByClassName('fadeinXR');
    let elementXL = document.getElementsByClassName('fadeinXL');
    if (!elementY && !elementXR && !elementXL) return; // 要素無キャンセル

    let showTiming = window.innerHeight > 768 ? 200 : 80; // 要素表示タイミング
    let scrollY = window.pageYOffset; //スクロール量取得
    let windowH = window.innerHeight; //ビューポートの高さ取得
    for (let i = 0; i < elementY.length; i++) {
        let elemClientRect = elementY[i].getBoundingClientRect();
        let elemY = scrollY + elemClientRect.top;
        if (scrollY + windowH - showTiming > elemY) {
            elementY[i].classList.add('isShow');
        } else if (scrollY + windowH < elemY) {
            elementY[i].classList.remove('isShow');
        }
    }
    for (let i = 0; i < elementXR.length; i++) {
        let elemClientRect = elementXR[i].getBoundingClientRect();
        let elemY = scrollY + elemClientRect.top;
        if (scrollY + windowH - showTiming > elemY) {
            elementXR[i].classList.add('isShow');
        } else if (scrollY + windowH < elemY) {
            elementXR[i].classList.remove('isShow');
        }
    }
    for (let i = 0; i < elementXL.length; i++) {
        let elemClientRect = elementXL[i].getBoundingClientRect();
        let elemY = scrollY + elemClientRect.top;
        if (scrollY + windowH - showTiming > elemY) {
            elementXL[i].classList.add('isShow');
        } else if (scrollY + windowH < elemY) {
            elementXL[i].classList.remove('isShow');
        }
    }
}
showElementAnimation();
window.addEventListener('scroll', showElementAnimation);

//アコーディオン
for (let i = 1; i <= 5; i++) {
    document.getElementById('qParts' + i).addEventListener('click', function() {
        document.getElementById('close' + i).classList.toggle('open');
        document.getElementById('aParts' + i).classList.toggle('disp');
    });
}


window.onload = function() {
    //トップの幕開
    const bg = document.getElementsByClassName('bg')[0];
    bg.classList.toggle('-visible');

    //2秒後幕閉⇒追従制御(PC:スクロールで表示位置調整、TAB:調整無)
    setInterval(function() {
        bg.classList.add('delete');
        window.addEventListener('scroll', function() {
            if (document.body.clientWidth < 769) {
                document.getElementsByClassName('cvBanner')[0].classList.add('-visible');
            } else if (window.pageYOffset > 200) {
                document.getElementsByClassName('cvBanner')[0].classList.add('cvBannerDisp');
            } else {
                document.getElementsByClassName('cvBanner')[0].classList.remove('cvBannerDisp');
            }
        });
    }, 2000);

    //スライド設定
    let swiper = new Swiper('.swiper-container', {
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        spaceBetween: 8,
        centeredSlides: true,
        loop: true,
        updateOnWindowResize: true,
        slidesPerView: 1,
        autoplay: {
            delay: 7000,
        },
        breakpoints: {
            // 768px以上
            768: {
                slidesPerView: 1.1,
                spaceBetween: 24,
            },
        }
    });
}

//追従削除
document.getElementById('bannerCan').addEventListener('click', function() {
    document.getElementsByClassName('cvBanner')[0].children[0].remove();
    document.getElementsByClassName('cvBanner')[0].children[0].remove();
});