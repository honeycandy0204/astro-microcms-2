const showPlayer = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const animationOptions = {
        duration: 1000,
        easing: 'ease',
        fill: 'forwards',
      };

      const animationProperties = {
        translate: ['4rem 0', 0],
        opacity: [0, 1], // 閾値を満たしたらopacityを変更して表示
        visibility: 'visible', // 閾値を満たしたらvisibilityを変更して表示
      };

      // .right-slide-in
      if (entry.target.classList.contains('right-slide-in')) {
        entry.target.animate(animationProperties, animationOptions);
      }

      // .left-slide-in
      if (entry.target.classList.contains('left-slide-in')) {
        animationProperties.translate = ['-4rem 0', 0];
        entry.target.animate(animationProperties, animationOptions);
      }

      // 一度表示されたら監視をやめる
      observer.unobserve(entry.target);
    }
  });
};

// 監視ロボットの設定
const playerObserver = new IntersectionObserver(showPlayer, {
  threshold: 0.5, // thresholdの設定
});

// .slide-inを監視するよう指示
const fadeElements = document.querySelectorAll('.right-slide-in, .left-slide-in');
fadeElements.forEach((fadeElement) => {
  playerObserver.observe(fadeElement);
});
