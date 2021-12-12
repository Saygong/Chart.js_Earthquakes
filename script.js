
window.onload = async function(){

    const ctx = $('#myChart');

    // Function that scales the dimension of a bubble according to the mercalli's value
    function scale(mercalli) {
        return (window.innerWidth*mercalli)/400;
    }

    // returns an array containing the data
    function createData(type){
        let after = [
            {'x': 12.5, 'y': 51 , 'r': scale(10), 'city': 'Gemona del Friuli', 'magnitude': 10, 'year': 1976 },
            {'x': 14.40, 'y': 39 , 'r': scale(10), 'city': 'Castelnuovo di Conza', 'magnitude': 10, 'year': 1980 },
            {'x': 14.70, 'y': 42.5 , 'r': scale(5), 'city': 'Foggia', 'magnitude': 5, 'year': 1998 },
            {'x': 10.7, 'y': 47.5 , 'r': scale(6), 'city': 'Monte Cimone', 'magnitude': 6, 'year': 1999 },
        ];
        let before = [
            {'x': 10.5, 'y': 36.5 , 'r': scale(5), 'city': 'Villasimius', 'magnitude': 5, 'year': 1616 },
            {'x': 14.40, 'y': 33.5 , 'r': scale(12), 'city': 'Messina', 'magnitude': 12, 'year': 1908 },
            {'x': 13.2, 'y': 43 , 'r': scale(8), 'city': 'Majella', 'magnitude': 8, 'year': 1933 },
            {'x': 11.9, 'y': 45.1 , 'r': scale(8), 'city': 'San Sepolcro', 'magnitude': 8, 'year': 1948 },
        ];
        if (type === "before"){
            return [{
                label: 'Prima del 1950',
                data: before,
                backgroundColor: 'rgba(0,129, 218, 0.7)',
            }];
        }
        else{
            return [{
                label: 'Dopo il 1950',
                data: after,
                backgroundColor: 'rgba(0,129, 218, 0.7)',
            },]
        }

    }

    //myChar definition
    const myChart = new Chart(ctx, {

        type: 'bubble',

        options: {
            animation: {
                onComplete: () => {
                    delayed = true;
                },
                delay: (context) => {
                    let delay = 0;
                    if (context.type === 'data' && context.mode === 'default') {
                        delay = context.dataIndex * 1700 + context.datasetIndex * 100;
                    }
                    return delay;
                },
            },
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

    //Utility function
    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    // Adding first dataset
    let firstData = createData("before");
    myChart.data.datasets = firstData;
    myChart.update();

    // Trick in order to correctly concat the animations of the 2 different datasets
    await sleep(6500);

    // Adding second dataset
    myChart.data.datasets = firstData.concat(createData("after"));
    myChart.update();

};
