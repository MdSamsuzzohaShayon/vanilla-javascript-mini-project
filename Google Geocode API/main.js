//geocode();

// get location form

let locationForm = document.getElementById('location-form');
locationForm.addEventListener('submit', geocode);

function geocode(e) {
    // prevent actual submit
    e.preventDefault();
    // let location = 'Motijheel Dhaka'
    let location = document.getElementById('location-input');
    axios.get('https://maps.googleapis.com/maps/api/geocode/json', {
            params: {
                address: location,
                key: 'AIzaSyD6mQkq0QuyLBMML7Fx6ut-C0HQqtR26TY'
            }
        })
        .then((response) => {
            //log full response
            console.log(response);



            // formatted address
            let formattedAddress = response.data.results[0].formatted_address;
            let formattedAddressOutput = `
            <ul class="list-group mt-5">
                <li class="list-group-item list-group-item-warning">${formattedAddress}</li>
            </ul>
        `;



            //address components
            let addressComponents = response.data.results[0].address_components;
            let addressComponentOutput = '<ul class="list-group">'
            for (let i = 0; i < addressComponents.length; i++) {
                addressComponentOutput += `
            <li class="list-group-item list-group-item-info"> <strong>${addressComponents[i].types[0]} </strong>: ${addressComponents[i].long_name}</li>
            `;
            }
            addressComponentOutput += '</ul>';



            // Geometry
            let lat = response.data.results[0].geometry.location.lat;
            let lng = response.data.results[0].geometry.location.lng;
            let geomatryOutput = `
            <ul class="list-group">
                <li class="list-group-item list-group-item-secondary"><strong>Latitude : </strong>${lat}</li>
                <li class="list-group-item list-group-item-secondary"><strong>Longitude : </strong>${lng}</li>
            </ul>
        `;



            // output to app
            document.getElementById('formatted-address').innerHTML = formattedAddressOutput;
            document.getElementById('address-component').innerHTML = addressComponentOutput;
            document.getElementById('geometry').innerHTML = geomatryOutput;
        })
        .catch((error) => {
            console.log(error);
        })
}