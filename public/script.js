function submitData() {
    const data = {
        country_name: document.getElementById('country_name').value,
		region: document.getElementById('region').value,
        country_food: document.getElementById('country_food').value,
        GDP: document.getElementById('GDP').value,
        population: document.getElementById('population').value,
        visited: document.getElementById('visited').checked
    };

    fetch('/country', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    })
    .then(response => response.text())
    .then(msg => alert(msg));
}

function runQuery() {
    const name = document.getElementById('countrySearch').value;
    
    fetch('/countries?name=' + name)
        .then(response => response.json())
        .then(data => {
            const display = document.getElementById('results');
            if (data.length > 0) {
                const item = data[0]; 
                display.innerHTML = `
                    <h3>Results for ${item.country_name}:</h3>
                    <p><strong>Representative Food:</strong> ${item.country_food}</p>
                `;
            } else {
                display.innerText = "Country isn't in database. Please search again.";
            }
        })
        .catch(err => console.error("Search Error:", err));
}