
export function createStatsCard(iconClass, cardText, cardNumber){
    const statsCard = document.createElement('div')
    statsCard.className = 'statsCard'
    statsCard.innerHTML = `
        <div id="card-label">
            <i class="${iconClass}"></i>
            <p>${cardText}</p>
        </div>
        <h4>${cardNumber}</h4>
    `
    return statsCard
}