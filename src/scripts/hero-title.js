const animatedElements = document.querySelectorAll('.animated-element');

const animateElement = (element, duration, delay) => {
    const keyframes = {
        opacity: [0, 1],
        transform: ['translateY(50px)', 'translateY(0)'],
    };
    const options = {
        duration: duration,
        easing: 'ease',
        delay: delay,
    };

    const animation = element.animate(keyframes, options);

    animation.onfinish = () => {
        element.style.opacity = 1; // アニメーションが終了したら不透明度を1に設定
    };
};

animateElement(animatedElements[0], 2000, 0);
animateElement(animatedElements[1], 2000, 1500);
animateElement(animatedElements[2], 2000, 3000);

// ページが表示された際にアニメーションを再生
playAnimations();

// ページが戻った時にもアニメーションを再生
window.addEventListener('pageshow', playAnimations);
