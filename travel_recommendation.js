document.getElementById('conditionInput').addEventListener('submit',showcountryDetails);

function showcountryDetails(event) {
    event.preventDefault();

        const conditionalInput = document.getElementById('conditionInput').value;
        // Ruta al archivo local
        const filePath = `https://eacanales-5500.theianext-0-labs-prod-misc-tools-us-east-0.proxy.cognitiveclass.ai/travelRecommendation/travel_recommendation_api.json`;

        // Carga el archivo local
        fetch(filePath)
            .then(response => response.json())
            .then(data => {
                const searchInfo = document.getElementById('searchInfo');
                if (searchInfo === country){
                    searchInfo.innerHTML = `<h2>Information requested by searchInfo</h2>
                                            <img src="sydney-australia.jpeg" alt="Australia" class="australia">`

                } else {
                alert('try again');
            }
    
    }
)





}


