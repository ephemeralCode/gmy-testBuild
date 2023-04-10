let headerMenuDesctop = document.querySelector('.Header-menuDesctop')
let headerContainerMenu = document.querySelector('.Header-containerMenu')
let headerMenuLinks = document.querySelectorAll('.Header-menuLink')
let arrayMenuLinks = [...headerMenuLinks]

// desctop

headerMenuDesctop.addEventListener('click', () => {
    headerContainerMenu.classList.toggle('hidden')
})

arrayMenuLinks.map(item => item.addEventListener('click', () => {
    headerContainerMenu.classList.add('hidden')
}))

// mobile

let headerBurgerBtn = document.querySelector('.Header-burgerBtn')
let headerContainerBurgerMenu = document.querySelector('.Header-containerBurgerMenu')
let headerBurgerBtnClose = document.querySelector('.Header-burgerBtnClose')
let headerBurgerLink = document.querySelectorAll('.Header-burgerLink')
let arrayBurgerLinks = [...headerBurgerLink]
let headerBurgerSelectLink = document.querySelectorAll('.Header-wrapperBurgerMenuLinksSelect')
let arrayBurgerLinksSelect = [...headerBurgerSelectLink]
// scroll
let mainScroll = document.querySelector('body')

// burger menu
headerBurgerBtn.addEventListener('click', () => {
    mainScroll.style.overflowY = 'hidden'
    headerContainerBurgerMenu.classList.toggle('hidden')
})

headerBurgerBtnClose.addEventListener('click', () => {
    mainScroll.style.overflowY = 'scroll'
    headerContainerBurgerMenu.classList.add('hidden')
})

arrayBurgerLinks.map(item => item.addEventListener('click', () => {
    headerContainerBurgerMenu.classList.add('hidden')
}))

arrayBurgerLinksSelect.map(item => item.addEventListener('click', () => {
    headerContainerBurgerMenu.classList.add('hidden')
}))

// select links
let headerMenuMobile = document.querySelector('.Header-menuMobile')
let headerWrapperBurgerMenuLinksSelect = document.querySelector('.Header-wrapperBurgerMenuLinksSelect')

headerMenuMobile.addEventListener('click', () => {
    headerWrapperBurgerMenuLinksSelect.classList.toggle('hidden')
})