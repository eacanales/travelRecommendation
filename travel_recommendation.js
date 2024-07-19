/* This version of JS is working */

const btnSearch = document.getElementById('btnSearch');
const btnReset = document.getElementById('btnReset');

function searchRecomm() {
  const input = document.getElementById('conditionInput').value.toLowerCase();
  const resultDiv = document.getElementById('result');
  resultDiv.innerHTML = '';
  
  const filePath = `travel_recommendation_api.json`;
  fetch(filePath)
    .then(response => response.json())
    .then(data => {
        if (input === "country") {
            data.countries.forEach(country => {
              resultDiv.innerHTML += `<h2>${country.name}</h2>`;
              country.cities.forEach(city => {
                resultDiv.innerHTML += `
                  <div>
                    <h3>${city.name}</h3>
                    <img src="${city.imageUrl}" alt="${city.name}">
                    <p>${city.description}</p>
                  </div>
                `;
              });
            });

      /*const country = data.countries.find(item => item.name.toLowerCase() === input); 
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
        });*/

      } else {
        resultDiv.innerHTML = 'Country not found.';
      }
    })
    .catch(error => {
      console.error('Error:', error);
      resultDiv.innerHTML = 'An error occurred while fetching data';
    });
} 

function searchRecomm() {
    const input = document.getElementById('conditionInput').value.toLowerCase();
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '';
    
    const filePath = `travel_recommendation_api.json`;
    fetch(filePath)
      .then(response => response.json())
      .then(data => {
          if (input === "country") {
              data.countries.forEach(country => {
                resultDiv.innerHTML += `<h2>${country.name}</h2>`;
                country.cities.forEach(city => {
                  resultDiv.innerHTML += `
                    <div>
                      <h3>${city.name}</h3>
                      <img src="${city.imageUrl}" alt="${city.name}">
                      <p>${city.description}</p>
                    </div>
                  `;
                });
              });

        /*const country = data.countries.find(item => item.name.toLowerCase() === input); 
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
          });*/
  
        } else if (input === "temple"){
            data.temples.forEach(temple => {
                resultDiv.innerHTML += `<h2>${temple.name}</h2>`;
                    resultDiv.innerHTML += `
                    <div>
                      <h3>${temple.name}</h3>
                      <img src="${temple.imageUrl}" alt="${temple.name}">
                      <p>${temple.description}</p>
                    </div>
                  `;
                });              

        } else if (input === "beach"){
            data.beaches.forEach(beach => {    
                resultDiv.innerHTML += `<h2>${beach.name}</h2>`;
                    resultDiv.innerHTML += `
                    <div>
                        <h3>${beach.name}</h3>
                        <img src="${beach.imageUrl}" alt="${beach.name}">
                        <p>${beach.description}</p>
                    </div>
                  `;
                });   

        }
        else {
          resultDiv.innerHTML = 'not found.';
        }
      })
      .catch(error => {
        console.error('Error:', error);
        resultDiv.innerHTML = 'An error occurred while fetching data';
      });
  } 

btnSearch.addEventListener('click', searchRecomm);

function clearRecomm() {
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '';  
    const input = document.getElementById('conditionInput');
    input.value = '';
}

btnReset.addEventListener('click', clearRecomm)

