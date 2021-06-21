const csvUrl = "https://gist.githubusercontent.com/MdSamsuzzohaShayon/8a2aed8d276f038aee513dd0a5bea5f8/raw/07f62137afbf6c9210b72d4fa728b2009ff788b3/colorsData.csv";
const messageContainer = document.getElementById('message');

// THIS IS ONE WAY OF PARSING CSV DATA 
/*
const fetchText = async (url)=>{
    const response = await fetch(url);
    return await response.text();

}
fetchText(csvUrl).then(text=>{
    const data = d3.csvParse(text);
    let message = data.length + " - Rows; " + data.columns.length + " - Columns; " + Math.round(text.length / 1024) + " - kB";
    // console.log(data.length + " - Rows");
    // console.log(data.columns.length + " - Columns");
    // console.log(Math.round(text.length / 1024) + " - kB");
    console.log(message);
    messageContainer.textContent = message;
});
*/


// ANOTHER WAY TO PARSING CSV DATA 
d3.csv(csvUrl).then(data=>{
    const message = data.length + " - Rows; " + data.columns.length + " - Columns; " + Math.round(d3.csvFormat(data).length / 1024) + " - kB";
    console.log(message);
    messageContainer.textContent = message;
});