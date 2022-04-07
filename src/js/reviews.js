const findBlockByAlias = (alias) => {
    console.log($(".reviews__item"));
    return $(".reviews__item").filter((ndx, item) => {
      return $(item).attr("data-content") == alias;
    })
}
  
$(".interactive__switcher-link").click((e) =>{
    e.preventDefault();
    const $this = $(e.currentTarget);
    const target = $this.attr("data-open");
    const itemToShow = findBlockByAlias(target);
    const curItem = $this.closest(".reviews__switcher-item");
    itemToShow.addClass("reviews__item--active").siblings().removeClass("reviews__item--active");
    curItem.addClass("interactive-avatar--active").siblings().removeClass("interactive-avatar--active")
})