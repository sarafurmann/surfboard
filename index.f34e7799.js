const aboutMesureWidth=t=>{let e=0;const i=$(window).width(),o=t.closest(".about__list").find(".about__btn"),a=o.width()*o.length,n=t.find(".about__text"),s=parseInt(n.css("padding-left")),d=parseInt(n.css("padding-right"));return e=window.matchMedia("(max-width: 800px)").matches?i-a:500,{container:e,textContainer:e-s-d}},closeEveryItemInAbout=t=>{const e=t.find(".about__item"),i=t.find(".about__content");e.removeClass("about__item--active"),i.width(0)},openAboutItem=t=>{const e=t.find(".about__content"),i=aboutMesureWidth(t),o=t.find(".about__text");t.addClass("about__item--active"),e.width(i.container),o.width(i.textContainer)};$(".about__btn").on("click",(t=>{t.preventDefault();const e=$(t.currentTarget),i=e.closest(".about__item"),o=i.hasClass("about__item--active"),a=e.closest(".about__list");o?closeEveryItemInAbout(a):(closeEveryItemInAbout(a),openAboutItem(i))}));const isTablet=window.matchMedia("(max-width: 800px)").matches,isMobile=window.matchMedia("(max-width: 480px)").matches;isTablet&&(reqItemWidth=screenWidth-titlesWidth),isMobile&&(reqItemWidth=screenWidth-titlesBlocks.width()),isTablet||isMobile||(reqItemWidth=500);
//# sourceMappingURL=index.f34e7799.js.map
