const openItem = (item) => {
    const container = item.closest('.team__item')
    const contentBlock = container.find('.team__content--wrapper')
  
    container.addClass('')
    contentBlock.height(contentBlock.find('.team__content--wrapper').height())
  }
  
  const closeEveryItem = (container) => {
    container.find('.team__item').removeClass('team__content--wrapper')
    container.find('.team__content').height(0)
  }
  
  $('.team__name').click((e) => {
    const $this = $(e.currentTarget)
    const container = $this.closest('.team__list')
  
    if ($this.closest('.team__item').hasClass('')) {
      closeEveryItem(container)
    } else {
      closeEveryItem(container)
      openItem($this)
    }
  })