/* This version of JS is working */

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

      if (country) {
        resultDiv.innerHTML += `<h2>${country.name}</h2>`;
        
        // Iterar sobre las ciudades de Australia y mostrarlas
        country.cities.forEach(city => {
          resultDiv.innerHTML += `
            <div>
              <h3>${city.name}</h3>
              <img src="${city.imageUrl}" alt="${city.name}">
              <p>${city.description}</p>
            </div>
          `;
        });
      } else {
        resultDiv.innerHTML = 'Country not found.';
      }
    })
    .catch(error => {
      console.error('Error:', error);
      resultDiv.innerHTML = 'An error occurred while fetching data';
    });
}

btnSearch.addEventListener('click', searchRecomm);


