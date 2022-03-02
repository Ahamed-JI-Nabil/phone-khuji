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
            // console.log(phone);
            const div = document.createElement('div')
            div.innerHTML = `
        <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 mt-14 w-64 h-96 justify-items-center">
            <div>
                <img class="rounded-t-lg ml-8 mt-4" src="${phone.image}" alt="" />
                <div class="p-5">
                        <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">${phone.phone_name.slice(0, 22)}</h5>
                    <p class="mb-3 font-normal text-gray-200 ">${phone.brand}</p>
                    <button onclick="loadPhoneData('${phone.slug}')"
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



const loadPhoneData = phoneID => {
    const url = `https://openapi.programming-hero.com/api/phone/${phoneID}`

    fetch(url)
        .then(res => res.json())
        .then(data => loadPhoneDetails(data.data))


    document.getElementById('phone-details-table').textContent = ''

}

const loadPhoneDetails = details => {
    // console.log(details);
    const phoneDetailsTable = document.getElementById('phone-details-table')
    // console.log(details);
    const div = document.createElement('div')
    div.innerHTML = `
        <div class="bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 mt-14 w-min w-max justify-items-center">
            <div>
                <img class="rounded-t-lg ml-8 mt-4" src="${details.image}" alt="" />
                <div class="p-5">
                    <p class="mb-3 font-normal text-gray-200 "><span class="font-bold">Display Size</span>- ${details.mainFeatures.displaySize}</p>
                    <p class="mb-3 font-normal text-gray-200 "><span class="font-bold">Storage</span>- ${details.mainFeatures.storage}</p>
                    <p class="mb-3 font-normal text-gray-200 "><span class="font-bold">ChipSet</span>- ${details.mainFeatures.chipSet}</p>
                    <p class="mb-3 font-normal text-gray-200 "><span class="font-bold">Memory</span>- ${details.mainFeatures.memory}</p>
                    <p class="mb-3 font-normal text-gray-200 "><span class="font-bold">Sensors</span>- ${details.mainFeatures.sensors}</p>
                </div>
                    <button 
                        class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 bg-blue-500 ml-4 mb-4">
                        More Details
                    </button>
            </div>
        </div>
        `
    phoneDetailsTable.appendChild(div)



}

