// LISTER FOR SUBMIT
document.querySelector('#zipForm').addEventListener('submit', getLocationInfo);

//LISTEN FOR DELETE
document.querySelector('body').addEventListener('click', deleteLocation);



function getLocationInfo(e) {
    //GET ZIP VALUE FROM IMPUT
    const zip = document.querySelector('.zip').value;
    //MAKE REQUEST
    fetch(`http://api.zippopotam.us/bd/${zip}`).then(response => {
        if (response.status != 200) {
            showIcon('remove');
            document.querySelector('#output').innerHTML = `
                <article class="message is-danger">
                    <div class="message-body"> 
                        Invalid zip code, please try again
                    </div>
                </article>`;
            throw Error(response.statusText)
        } else {
            showIcon('check');
            return response.json();
        }
        console.log(response.status);
    }).then(data => {
        // console.log(data);
        //SHOW LOCATION INFO
        let output = '';
        data.places.forEach(place => {
            output += `<article class="message is-primary">
                <div class="message-header">
                    <p>Location Info</p>
                    <button class="delete"></button>
                </div>
                <div class="message-body">
                    <ul>
                        <li><strong>Place Name: </strong>${place['place name']}</li>
                        <li><strong>State: </strong>${place['state']}</li>
                        <li><strong>Longitude: </strong>${place['longitude']}</li>
                        <li><strong> Latitude: </strong>${place['latitude']}</li>
                    </ul>
                </div>
            </article`;
        });
        //INSERT INTO OUTPUT DIV
        document.querySelector('#output').innerHTML = output;
    }).catch(err => console.log(err));
    e.preventDefault();
}



function showIcon(icon) {
    //CLEAR ICONS
    document.querySelector('.icon-check').style.display = 'none';
    //SHOW THE CORRECT ICON
    document.querySelector(`.icon-${icon}`).style.display = 'inline-flex';
}

//DELETE LOCATION
function deleteLocation(e) {
    if(e.target.className == 'delete'){
        document.querySelector('.message').remove();
        document.querySelector('.zip').value = '';
        document.querySelector('.icon-check').remove();
    }
}