export function createInfoCard(type) {
  const infoCard = document.createElement('div')

  infoCard.className = 'info-card'
  infoCard.innerHTML = `
        <h2>${type} Information</h2>
    `

    
  return infoCard;
}
