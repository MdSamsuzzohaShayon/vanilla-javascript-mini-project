const csvUrl = "https://gist.githubusercontent.com/MdSamsuzzohaShayon/8a2aed8d276f038aee513dd0a5bea5f8/raw/07f62137afbf6c9210b72d4fa728b2009ff788b3/colorsData.csv";


const fetchText = async (url)=>{
    const response = await fetch(url);
    return await response.text();

}
fetchText(csvUrl).then(text=>console.log(text));