const phoneSearch = () => {
    const searchField = document.getElementById('search-input');
    const searchFieldValue = searchField.value;
    searchField.value = '';

    const url = `https://openapi.programming-hero.com/api/phones?search=${searchFieldValue}`
    fetch(url)
        .then(res => res.json())
        .then(data => displaySearchResult(data.data))
}


const displaySearchResult = phones => {
    const searchResult = document.getElementById('search-result')
    phones.forEach(phone => {
        console.log(phone);
        const div = document.createElement('div')
        div.innerHTML = `
        <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 mt-14 w-64 h-96 justify-items-center">
            <div>
                <img class="rounded-t-lg ml-8 mt-4" src="${phone.image}" alt="" />
                <div class="p-5">
                        <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">${phone.phone_name.slice(0,22)}</h5>
                    <p class="mb-3 font-normal text-gray-200 ">${phone.brand}</p>
                    <a href="#"
                        class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 bg-blue-500">
                        More Details
                    </a>
                </div>
            </div>
        </div>
        `
        searchResult.appendChild(div)
    });

}
