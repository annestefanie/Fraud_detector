import { createStatsCard } from "../components/statsCard.js";
import { createInfoCard } from "../components/infoCard.js";

const cardsContainer = document.querySelector('#cards-container')
const searchBarContainer = document.querySelector('#searchbar-container')
const infoCardsContainer = document.querySelector('#infocards-container')

cardsContainer.append(createStatsCard("bi-arrow-left-right", "Accounts Monitored", "100"))
cardsContainer.append(createStatsCard("bi-wallet2", "Active Alerts", "44"))
cardsContainer.append(createStatsCard("bi-graph-up-arrow", "Total Balance", "801"))
infoCardsContainer.append(createInfoCard("Account"))