import reddit from './redditapi';
const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');







//FORM EVENT LISTENER
searchForm.addEventListener('submit', (e) => {
    // console.log(123);

    //GET SEARCH TERM
    const searchTerm = searchInput.value;
    // console.log(searchTerm);
    //GET RADIO BUTTON
    const sortBy = document.querySelector('input[name="sortby"]:checked').value;
    console.log(sortBy);
    const searchLimit = document.getElementById('limit').value;
    console.log(searchLimit);
    //CHECK INPUT
    if (searchTerm === '') {
        showMessage('Please add a search term', 'alert-danger');
    }
    //CLEAR FIELD
    searchInput.value = '';
    //REDIT SEARCH
    reddit.search(searchTerm, searchLimit, sortBy).then(results => {
        let output = '<div class="card-columns">';
        console.log(results);
        results.forEach(post => {
            //CHECK FOR IMAGE
            const image = post.preview ? post.preview.images[0].source.url:'https://cdn.vox-cdn.com/thumbor/SfU1irp-V79tbpVNmeW1N6PwWpI=/0x0:640x427/1200x800/filters:focal(0x0:640x427)/cdn.vox-cdn.com/uploads/chorus_image/image/45970810/reddit_logo_640.0.jpg';
            output += `
                <div class="card">
                    <img src="${image}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${post.title}</h5>
                        <p class="card-text">${truncateText(post.selftext, 100)}</p>
                        <a href="${post.url}" target="_blank" class="btn btn-primary">Read More</a>
                        <hr>
                        <span class="badge badge-secondary">Subreddit: ${post.subreddit}</span>
                        <span class="badge badge-dark">Score: ${post.score}</span>
                    </div>
                </div>
                `;
        });
        output += '</div>';
        document.getElementById('results').innerHTML = output;
    });
    e.preventDefault();
});









//SHOW MESSAGE
function showMessage(message, className) {
    //CREATE DIV
    const div = document.createElement('div');
    div.className = `alert ${className}`;
    //ADD TEXT
    div.appendChild(document.createTextNode(message));
    //GET PARRENT CONTAINER
    const searchContainer = document.getElementById('search-container');
    //GET SEARCH
    const search = document.getElementById('search');
    //INSERT MESSAGE
    searchContainer.insertBefore(div, search);
    //TIMEOUT ALERT
    setTimeout(() => document.querySelector('.alert').remove(), 3000);
}



// TRUNCATE TEXT
function truncateText(text, limit){
    const shortened = text.indexOf(' ', limit);
    if(shortened == -1) return text;
    return text.substring(0, shortened);
}