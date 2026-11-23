export function createSearchBar(searchType, width){
    const searchBar = document.createElement('form');
    
    searchBar.className = 'search-bar'
    searchBar.style.width = `${width}`

    searchBar.innerHTML = `
        <input type="search" placeholder="SEARCH ${searchType}...">
        <button type="submit">
            <i class="bi bi-search"></i>
        </button>
    `
    return searchBar
}