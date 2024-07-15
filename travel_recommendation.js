// Ruta al archivo local
const filePath = `https://eacanales-5500.theianext-0-labs-prod-misc-tools-us-east-0.proxy.cognitiveclass.ai/travelRecommendation/travel_recommendation_api.json`;

// Carga el archivo local
fetch(filePath)
    .then(response => response.json())
    .then(data => {
        console.log(data)
        }
    )
