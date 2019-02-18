let myChart = document.getElementById('myChart').getContext('2d');

// global options
Chart.defaults.global.defaultFontFamily = 'Lato';
Chart.defaults.global.defaultFontSize = 18;
Chart.defaults.global.defaultFontColor = '#777';




//https://www.chartjs.org/docs/latest/charts/bar.html
let massPopChart = new Chart(myChart, {
    // type: 'bar',
    // type: 'horizontalBar',
    // type: 'doughnut',
    // type: 'radar',
    // type: 'polarArea',

    type: 'radar', //bar, pie, line, horizontalBar, doughnut, radar, polarArea
    data: {
        labels: ['datar', 'Beijing', 'Karachi', 'Istanbul', 'Dhaka', 'Tokyo'],
        datasets: [{
            label: 'Population',
            data: [
                24153000,
                18590000,
                18000000,
                14657000,
                14543000,
                13617000
            ],
            //below propertics are not necessary
            //backgroundColor: 'green'
            backgroundColor: [
                'rgba(255, 99, 132, 0.6)',
                'rgba(54, 162, 235, 0.6)',
                'rgba(255, 206, 86, 0.6)',
                'rgba(75, 192, 192, 0.6)',
                'rgba(152, 102, 255, 0.6)',
                'rgba(255, 99, 132, 0.6)',
                'rgba(255, 99, 132, 0.6)',
            ],
            borderWidth: 1,
            borderColor: '#777',
            hoverBorderWidth: 3,
            hoverBorderColor: '#000'
        }]
    },

    //options properties is optional
    //not necessary to add
    options: {
        title: {
            display: true,
            text: 'Largest city in the world',
            fontSize: 25
        },
        // button click effect . to see click on population in right side
        legend: {
            //display: false, // hide population button
            position: 'right',
            labels: {
                fontColor: '#000'
            }
        },
        layout: {
            padding: {
                left: 50,
                right: 0,
                bottom: 0,
                left: 0
            }
        },
        tooltips: {
            enabled: false // for showing tool tips make it false
        }
    }

});