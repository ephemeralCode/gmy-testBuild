
// const portfolioMainBtnGraphicDesign = document.querySelector('.PortfolioMain-btnGraphicDesign')
// const portfolioMainBtnVideoProduction = document.querySelector('.PortfolioMain-btnVideoProduction')

const portfolioHeaderBtnGraphicDesign = document.querySelector('.PortfolioHeader-btnGraphicDesign')
const portfolioHeaderBtnVideoProduction = document.querySelector('.PortfolioHeader-btnVideoProduction')

const portfolioGraphicDesignContainer = document.querySelector('.PortfolioGraphicDesign')
const portfolioVideoProductionContainer = document.querySelector('.PortfolioVideoProduction')

portfolioHeaderBtnGraphicDesign.addEventListener('click', () => {
    portfolioHeaderBtnGraphicDesign.classList.add('active')
    portfolioHeaderBtnVideoProduction.classList.remove('active')

    portfolioGraphicDesignContainer.classList.remove('hidden')
    portfolioVideoProductionContainer.classList.add('hidden')
})

portfolioHeaderBtnVideoProduction.addEventListener('click', () => {
    portfolioHeaderBtnVideoProduction.classList.add('active')
    portfolioHeaderBtnGraphicDesign.classList.remove('active')

    portfolioVideoProductionContainer.classList.remove('hidden')
    portfolioGraphicDesignContainer.classList.add('hidden')
})