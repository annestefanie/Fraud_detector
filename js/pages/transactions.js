import { createStatsCard } from "../components/statsCard.js";
import { createSearchBar } from "../components/searchBar.js";
import { createInfoCard } from "../components/infoCard.js";

const cardsContainer = document.querySelector('#cards-container')
const searchBarContainer = document.querySelector('#searchbar-container')
const infoCardsContainer = document.querySelector('#infocards-container')

cardsContainer.append(createStatsCard("bi-arrow-left-right", "Total Transactions", "100"))
cardsContainer.append(createStatsCard("bi-wallet2", "Balance", "44"))
cardsContainer.append(createStatsCard("bi-graph-up-arrow", "Income", "801"))

searchBarContainer.append(createSearchBar("TRANSACTIONS", "59.5vw"))

infoCardsContainer.append(createInfoCard("Transactions"))