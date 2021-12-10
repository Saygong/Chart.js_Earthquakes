
window.onload = function(){

    const ctx = $('#myChart');

    function scale(mercalli) {
        return (window.innerWidth*mercalli)/400;
    }


    let example = [
            {
                label: 'Friuli',
                data: [{'x': 16, 'y': 39.5 , 'r': scale(10)},{'x': 14.40, 'y': 39.5 , 'r': scale(10)}],
                backgroundColor: 'rgba(0,129, 218, 0.8)',
            },
            {
                label: 'After',
                data: [{'x': 13, 'y': 52 , 'r': scale(4)}, {'x': 14.40, 'y': 39.5 , 'r': scale(10)}],
                backgroundColor: 'rgba(0,129, 218, 0.7)',
            }
            ];


/*
    function createData(){
        return [ {
            {
                labelString: 'Gemona del Friuli, Mercalli: 10, 1976',
                data: {'x': 13, 'y': 52 , 'r': scale(10), 'city': 'Gemona del Friuli', 'magnitudo': 10, 'anno': 1976 },
                fill:true,
                backgroundColor: 'rgba(0,129, 218, 0.7)',
            },
            {
                labelString: 'Castelnuovo di Conza, Mercalli, 1980',
                data: {'x': 14.40, 'y': 39.5 , 'r': scale(10), 'city': 'Castelnuovo di Conza', 'magnitudo': 10, 'anno': 1980 },
                fill:true,
                backgroundColor: 'rgba(0,129, 218, 0.7)',
            },
            {
                labelString: 'Foggia, Mercalli: 5, 1998',
                data: {'x': 14.70, 'y': 43 , 'r': scale(5), 'city': 'Foggia', 'magnitudo': 5, 'anno': 1998 },
                fill:true,
                backgroundColor: 'rgba(0,129, 218, 0.7)',
            },
            {
                labelString: 'Monte Cimone, Mercalli: 6, 1999',
                data: {'x': 11, 'y': 47.5 , 'r': scale(6), 'city': 'Monte Cimone', 'magnitudo': 6, 'anno': 1999 },
                fill:true,
                backgroundColor: 'rgba(0,129, 218, 0.7)',
            },
            }

            {
                labelString: 'Messina, Mercalli: 12, 1908',
                data: {'x': 14.40, 'y': 35 , 'r': scale(12), 'city': 'Messina', 'magnitudo': 12, 'anno': 1908 },
                fill:true,
                backgroundColor: 'rgba(0,129, 218, 0.7)',
            },
            {
                labelString: 'Etna, Mercalli: 10, 1911',
                data: {'x': 13.6, 'y': 33 , 'r': scale(10), 'city': 'Etna', 'magnitudo': 10, 'anno': 1911 },
                fill:true,
                backgroundColor: 'rgba(0,129, 218, 0.7)',
            },
            {
                labelString: 'Majella, Mercalli: 8, 1933',
                data: {'x': 13.2, 'y': 44 , 'r': scale(8), 'city': 'Majella', 'magnitudo': 8, 'anno': 1933 },
                fill:true,
                backgroundColor: 'rgba(0,129, 218, 0.7)',
            },
            {
                labelString: 'San Sepolcro, Mercalli: 8, 1948',
                data: {'x': 11.9, 'y': 45.1 , 'r': scale(8), 'city': 'San Sepolcro', 'magnitudo': 8, 'anno': 1948 },
                fill:true,
                backgroundColor: 'rgba(0,129, 218, 0.7)',
            }}

        ];
    }

*/


    function prettyPrinting(data) {
        return '(Magnitudo: ' + earthquakeData.magnitudo + ', Anno: ' + earthquakeData.anno + ')';
    }

    const myChart = new Chart(ctx, {
        type: 'bubble',
        data: {
            datasets: example,
        },
        options: {

            responsive: true,

            scales: {
                x: {
                    max:19,
                    min:6,
                    title: {
                        display: true,
                        text: 'Longitudine'
                    }
                },
                y: {
                    max:55,
                    min:30,
                    title: {
                        display: true,
                        text: 'Latitudine'
                    }
                }
            },
            plugins: {
                tooltip: {
                    callbacks: {
                        label: function (context, data) {
                            let label = data.datasets[context.datasetIndex].label
                            

                        }
                    }
                }
            }
        },
    });

    myChart.update()
};
