const anchors = document.querySelectorAll('a.scroll-to');
for (let anchor of anchors)
  anchor.addEventListener('click', function (a) {
    a.preventDefault();
    let b = anchor.getAttribute('href');
    document.querySelector(b).scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
