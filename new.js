function handleSearch(event){
    event.preventDefault();
    let searchElement = document.querySelector("#searchInput");
    let cityElement = document.querySelector("#newCity");
    cityElement.innerHTML = searchElement.value ;
}

let searchInputElement = document.querySelector("#theForm");
searchInputElement.addEventListener("submit", handleSearch);