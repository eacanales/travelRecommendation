// Ruta al archivo local
const filePath = `https://eacanales-5500.theianext-0-labs-prod-misc-tools-us-east-0.proxy.cognitiveclass.ai/travelRecommendation/data-api.json`;

// Carga el archivo local
fetch(filePath)
    .then(response => response.json())
    .then(data => {
        alert(JSON.stringify(data))
        }
    )
