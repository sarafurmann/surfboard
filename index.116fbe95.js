const sections=$("section"),display=$(".maincontent"),mobileDetect=new MobileDetect(window.navigator.userAgent),isMobile=mobileDetect.mobile();let inScroll=!1;sections.first().addClass("active");const performTransition=e=>{if(!1===inScroll){inScroll=!0;const t=-100*e,i=sections.eq(e).attr("data-sidemenu-theme"),o=$(".fixed-menu");"dark"===i?o.addClass("fixed-menu--shadowed"):o.removeClass("fixed-menu--shadowed"),display.css({transform:`translateY(${t}%)`}),sections.eq(e).addClass("active").siblings().removeClass("active"),o.find(".fixed-menu__item").eq(e).addClass("active").siblings().removeClass("active"),setTimeout((()=>{inScroll=!1,o.find(".fixed-menu__item").eq(e).addClass("fixed-menu__item--active").siblings().removeClass("fixed-menu__item--active")}),1300)}},scrollViewport=e=>{const t=sections.filter(".active"),i=t.next(),o=t.prev();"next"===e&&i.length&&performTransition(i.index()),"prev"===e&&o.length&&performTransition(o.index())};$(window).on("wheel",(e=>{const t=e.originalEvent.deltaY;t>0&&scrollViewport("next"),t<0&&scrollViewport("prev"),console.log(t)})),$(window).on("keydown",(e=>{const t=e.target.tagName.toLowerCase();if("input"!==t&&"textarea"!==t)switch(e.keyCode){case 38:scrollViewport("prev");break;case 40:scrollViewport("next")}})),$(".wrapper").on(".touchmove",(t=>e.preventDefault())),$("[data-scroll-to]").click((e=>{e.preventDefault();const t=$(e.currentTarget).attr("data-scroll-to"),i=$(`[data-section-id=${t}]`);performTransition(i.index())})),isMobile&&$("body").swipe({swipe:function(e,t){"up"===t?scrollViewport("next"):"down"===t&&scrollViewport("prev")}});
//# sourceMappingURL=index.116fbe95.js.map