const btnSearch = document.getElementById('btnSearch');

function searchRecomm() {
    const input = document.getElementById('conditionInput').value.toLowerCase();
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '';

        // Ruta al archivo local
        const filePath = `https://eacanales-5500.theianext-0-labs-prod-misc-tools-us-east-0.proxy.cognitiveclass.ai/travelRecommendation/travel_recommendation_api.json`;
        fetch(filePath)
            .then(response => response.json())
            .then(data => {
                const country = data.countries.find(item => item.name.toLowerCase() === input);
                /*const city = data.countries.cities.name;*/

                if (country) {
                    

                    resultDiv.innerHTML += `<h2>${country.name}</h2>`;
                    /*resultDiv.innerHTML += `<h2>${city.name}</h2>`;*/
                    resultDiv.innerHTML += `<img src="${country.imageUrl}" alt="${country.name}">`;
                    resultDiv.innerHTML += `<p><strong>TEST: </strong> test </p>`;

                } else {
                  resultDiv.innerHTML = 'Condition not found.';
                }
    
            })
            .catch(error => {
                console.error('Error:', error);
                resultDiv.innerHTML = 'An error ocurred while fetching data';
            });

}

btnSearch.addEventListener('click', searchRecomm);

