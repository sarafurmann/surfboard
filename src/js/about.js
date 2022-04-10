const aboutMesureWidth = (item) => {
    let reqItemWidth = 0

    const screenWidth = $(window).width()
    const aboutContainer = item.closest('.about__list')
    const titlesBlocks = aboutContainer.find('.about__btn')
    const titlesWidth = titlesBlocks.width() * titlesBlocks.length
    const textContainer = item.find('.about__text')
    const paddingLeft = parseInt(textContainer.css('padding-left'))
    const paddingRight = parseInt(textContainer.css('padding-right'))
    const isMobile = window.matchMedia('(max-width: 800px)').matches
    if (isMobile) {
      reqItemWidth = screenWidth - titlesWidth
    } else {
      reqItemWidth = 500
    }
    return {
      container: reqItemWidth,
      textContainer: reqItemWidth - paddingLeft - paddingRight,
    }
}

const closeEveryItemInAbout = (aboutContainer) => {
    const aboutItems = aboutContainer.find('.about__item')
    const aboutContent = aboutContainer.find('.about__content')
    aboutItems.removeClass('about__item--active')
  
    aboutContent.width(0)
}

const openAboutItem = (item) => {
    const hiddenContent = item.find('.about__content')
    const aboutReqWidth = aboutMesureWidth(item)
    const textBlock = item.find('.about__text')
  
    item.addClass('about__item--active')
    hiddenContent.width(aboutReqWidth.container)
    textBlock.width(aboutReqWidth.textContainer)
}

$('.about__btn').on('click', (e) => {
    e.preventDefault()
    const $this = $(e.currentTarget)
    const item = $this.closest('.about__item')
    const aboutItemOpened = item.hasClass('about__item--active')
    const aboutContainer = $this.closest('.about__list')
  
    if (aboutItemOpened) {
      closeEveryItemInAbout(aboutContainer)
    } else {
      closeEveryItemInAbout(aboutContainer)
      openAboutItem(item)
    }
})

const isTablet = window.matchMedia('(max-width: 800px)').matches;
const isMobiles = window.matchMedia('(max-width: 480px)').matches;
if (isTablet) {
  reqItemWidth = screenWidth - titlesWidth
}
if (isMobiles) {
  reqItemWidth = screenWidth - titlesBlocks.width()
} 
if (!isTablet && !isMobiles) {
  reqItemWidth = 500
}


