const API_KEY = "DmYRxbLJS9yb3k8ri0gLMW7lTCg";
const API_URL = "https://ci-jshint.herokuapp.com/api";
const resultsModal = new bootstrap.Modal(document.getElementById("resultsModal"));

document.getElementById("status").addEventListener("click", e => getStatus(e));

async function getStatus(e) {
    const queryString = `${API_URL}?api_key=${API_KEY}`;

    const response = await fetch(queryString);

    const data = await response.json();

    if (response.ok) {
        displayStatus(data);
    } else {
        throw new Error(data.error);
    }
}

function displayStatus(data) {
    let heading = "API Key Status";
    let result = `<div>Your key is valid until</div>`;
    result += `<did class="key-status">${data.expire}</div>`;

    document.getElementBuId("resultModalTitle").innerText = heading;
    document.getElementById('result-content').innerHtml = results;

    resultsModal.show();
}