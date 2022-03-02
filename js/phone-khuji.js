const phoneSearch = () => {
    const searchField = document.getElementById('search-input');
    const searchFieldValue = searchField.value;
    searchField.value = '';


    const url = `https://openapi.programming-hero.com/api/phones?search=${searchFieldValue}`
    fetch(url)
        .then(res => res.json())
        .then(data => displaySearchResult(data.data))

    document.getElementById('not-found').textContent = ''
    document.getElementById('search-result').textContent = ''
}


const displaySearchResult = phones => {
    if (phones.length === 0) {
        const notFound = document.getElementById('not-found')
        const p = document.createElement('p')
        p.innerText = "❌Sorry! No Result Found. Please Try Again❌"
        notFound.appendChild(p)

    }
    else {
        document.getElementById('not-found').textContent = ''
        const searchResult = document.getElementById('search-result')
        searchResult.textContent = ''
        phones.forEach(phone => {
            const div = document.createElement('div')
            div.innerHTML = `
        <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 mt-14 w-64 h-96 justify-items-center">
            <div>
                <img class="rounded-t-lg ml-8 mt-4" src="${phone.image}" alt="" />
                <div class="p-5">
                        <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">${phone.phone_name.slice(0, 22)}</h5>
                    <p class="mb-3 font-normal text-gray-200 ">${phone.brand}</p>
                    <button onclick="loadPhoneDetails('${phone.slug}')"
                        class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 bg-blue-500">
                        More Details
                    </button>
                </div>
            </div>
        </div>
        `
            searchResult.appendChild(div)
        });

    }




}



const loadPhoneDetails = phoneID => {
    const url = `https://openapi.programming-hero.com/api/phone/${phoneID}`

    fetch(url)
        .then(res => res.json())
        .then(data => console.log(data))


    

}



