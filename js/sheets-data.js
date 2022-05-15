import { credentials } from "./credentials.js";

const url = `https://sheets.googleapis.com/v4/spreadsheets/${credentials.spreadsheetId}/values/${credentials.range}?alt=json&key=${credentials.apiKey}`;

async function fetchData(url, callback) {
   const data = await fetch(url)
    .then(response => response.json())
    .then(data => {callback(data)} )
}

export { url, fetchData }