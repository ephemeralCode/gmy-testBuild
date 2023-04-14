
const portfolioMainBtnGraphicDesign = document.querySelector('.PortfolioMain-btnGraphicDesign')
const portfolioMainBtnVideoProduction = document.querySelector('.PortfolioMain-btnVideoProduction')

const portfolioGraphicDesignContainer = document.querySelector('.PortfolioGraphicDesign')
const portfolioVideoProductionContainer = document.querySelector('.PortfolioVideoProduction')

portfolioMainBtnGraphicDesign.addEventListener('click', () => {
    portfolioMainBtnGraphicDesign.classList.add('active')
    portfolioMainBtnVideoProduction.classList.remove('active')

    portfolioGraphicDesignContainer.classList.remove('hidden')
    portfolioVideoProductionContainer.classList.add('hidden')
})

portfolioMainBtnVideoProduction.addEventListener('click', () => {
    portfolioMainBtnVideoProduction.classList.add('active')
    portfolioMainBtnGraphicDesign.classList.remove('active')

    portfolioVideoProductionContainer.classList.remove('hidden')
    portfolioGraphicDesignContainer.classList.add('hidden')
})