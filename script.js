
window.onload = function(){

    const ctx = $('#myChart');

    function scale(mercalli) {
        return (window.innerWidth*mercalli)/400;
    }


    function createData(){
        let after = [
            {'x': 13, 'y': 52 , 'r': scale(10), 'city': 'Gemona del Friuli', 'magnitude': 10, 'year': 1976 },
            {'x': 14.40, 'y': 39.5 , 'r': scale(10), 'city': 'Castelnuovo di Conza', 'magnitude': 10, 'year': 1980 },
            {'x': 14.70, 'y': 43 , 'r': scale(5), 'city': 'Foggia', 'magnitude': 5, 'year': 1998 },
            {'x': 11, 'y': 47.5 , 'r': scale(6), 'city': 'Monte Cimone', 'magnitude': 6, 'year': 1999 },
        ];
        let before = [
            {'x': 10.5, 'y': 37 , 'r': scale(5), 'city': 'Villasimius', 'magnitude': 5, 'year': 1616 },
            {'x': 14.40, 'y': 35 , 'r': scale(12), 'city': 'Messina', 'magnitude': 12, 'year': 1908 },
            {'x': 13.2, 'y': 44 , 'r': scale(8), 'city': 'Majella', 'magnitude': 8, 'year': 1933 },
            {'x': 11.9, 'y': 45.1 , 'r': scale(8), 'city': 'San Sepolcro', 'magnitude': 8, 'year': 1948 },
        ];
        return data = [
        {
            label: 'Dopo il 1950',
            data: after,
            backgroundColor: 'rgba(0,129, 218, 0.7)',

        },
        {
            label: 'Prima del 1950',
            data: before,
            backgroundColor: 'rgba(0,129, 218, 0.7)',
        }];

    }


    function prettyPrinting(data) {
        return '(Magnitudo: ' + earthquakeData.magnitudo + ', Anno: ' + earthquakeData.anno + ')';
    }

    const myChart = new Chart(ctx, {
        type: 'bubble',

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
            maintainAspectRatio: false,
            plugins: {
                tooltip: {
                    callbacks: {
                        label: function (toolTipItem) {
                            let index = toolTipItem.dataIndex;
                            let obj = toolTipItem.dataset.data[index];
                            return obj.city + ", Mercalli: " + obj.magnitude + ", " + obj.year;
                        }
                    }
                }
            }
        },
    });


    myChart.data.datasets = createData();
    myChart.update();
};
