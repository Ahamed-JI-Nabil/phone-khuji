const phoneSearch = () => {
    const searchField = document.getElementById('search-input');
    const searchFieldValue = searchField.value;
    searchField.value = '';

    const url = `https://openapi.programming-hero.com/api/phones?search=${searchFieldValue}`
    fetch(url)
        .then(res => res.json())
        .then(data => displaySearchResult(data.data))
}


const displaySearchResult = phones =>{
    console.log(phones);

}
