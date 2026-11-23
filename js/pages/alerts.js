import { createStatsCard } from "../components/statsCard.js";
import { createSearchBar } from "../components/searchBar.js";
import { createFilter } from "../components/filters.js";
import { createInfoCard } from "../components/infoCard.js";

const cardsContainer = document.querySelector('#cards-container')
const searchBarContainer = document.querySelector('#searchbar-container')
const filtersContainer = document.querySelector('#filters-container')
const infoCardsContainer = document.querySelector('#infocards-container')

cardsContainer.append(createStatsCard("bi bi-exclamation-triangle", "Total Alerts", "100"))
cardsContainer.append(createStatsCard("bi bi-bell", "New", "44"))
cardsContainer.append(createStatsCard("bi bi-check-circle", "Resolved", "809"))
cardsContainer.append(createStatsCard("bi bi-x-circle", "Dismissed", "349"))

searchBarContainer.append(createSearchBar("ALERTS", "36vw"))

filtersContainer.append(createFilter("Status"))
filtersContainer.append(createFilter("Risk"))
filtersContainer.append(createFilter("Rule"))
filtersContainer.append(createFilter("Period"))

infoCardsContainer.append(createInfoCard("Alert"))