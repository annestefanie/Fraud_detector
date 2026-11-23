export function createFilter(filterType){
    const filter = document.createElement('select');
    
    filter.className = 'filters'

    filter.innerHTML = `
        <option>${filterType}</option>
    `
    return filter
}