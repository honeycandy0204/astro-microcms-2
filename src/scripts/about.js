// 監視対象が範囲内に現れたら実行する動作
const showAbout = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.animate(
        {
          opacity: [0, 1],
          filter: ['blur(.4rem)', 'blur(0)'],
          translate: ['0 4rem', 0],
        },
        {
          duration: 2000,
          easing: 'ease',
          fill: 'forwards',
        }
      );
      // 一度表示されたら監視をやめる
      observer.unobserve(entry.target);
    }
  });
};

// 監視ロボットの設定
const aboutObserver = new IntersectionObserver(showAbout);

// .fade-inを監視するよう指示
const fadeElements = document.querySelectorAll('.fade-in');
fadeElements.forEach((fadeElement) => {
  aboutObserver.observe(fadeElement);
});
