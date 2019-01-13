function initMap() {



    let options = {
        zoom: 8,
        center: {
            lat: 23.8103,
            lng: 90.4125
        }
    }
    let map = new google.maps.Map(document.getElementById('map'), options);




    // LISTEN FOR CLICK ON MAP
    google.maps.event.addListener(map, 'click', (event)=>{
        //ADD MARKER
        addMarker({coords:event.latLng})
    })





    /*
    //ADD MARKER
    let marker = new google.maps.Marker({
        position: {
            lat: 24.3636,
            lng: 88.6241
        },
        map: map,
        icon: 'http://www.creativehunt.co/wp-content/uploads/2016/02/Flag-Point-300x300.png',

    });



    // click for view details
    let infoWindow = new google.maps.InfoWindow({
        content: '<h1>Rajshahi</h1>'
    });
    marker.addListener('click', () => {
        infoWindow.open(map, marker);
    });*/






    /*
    addMarker({
        coords: {
            lat: 25.7439,
            lng: 89.2752
        },
        iconImage: 'flag2.png',
        content: '<h1>Rangpur</h1>'
    });

    addMarker({
        coords: {
            lat: 24.3636,
            lng: 88.6241
        },
        iconImage: 'flag2.png',
        content: '<h1>Natore</h1>'
    });*/






    //ARRAY OF MARKERS
    let markers = [
        {
            coords: {
                lat: 25.7439,
                lng: 89.2752
            },
            iconImage: 'flag2.png',
            content: '<h1>Rangpur</h1>'
        },
        {
            coords: {
                lat: 24.3636,
                lng: 88.6241
            },
            iconImage: 'flag2.png',
            content: '<h1>Natore</h1>'
        }
    ];
    // LOOP THOUGH MARKERS
    for (let i =0; i<markers.length; i++){
        addMarker(markers[i]);
    }










    //ADD MARKER FUNCTION
    function addMarker(props) {

        let marker = new google.maps.Marker({
            position: props.coords,
            map: map,
            // icon: props.iconImage,
        });


        //CHECK FOR CUSTOM IMAGE
        if (props.iconImage) {
            //SET ICON IMAGE
            marker.setIcon(props.iconImage);
        }

        //CHECK FOR CONTENT
        if (props.content) {
            // click for view details
            let infoWindow = new google.maps.InfoWindow({
                content: props.content
            });
            marker.addListener('click', () => {
                infoWindow.open(map, marker);
            });
        }

    }





}