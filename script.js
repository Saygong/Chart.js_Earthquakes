
$(document).ready(function(){

    const ctx = $('#myChart');
    const container = $('.chart-container');

    /* Terremoti più disastrosi negli ultimi 100 anni
    https://it.wikipedia.org/wiki/Terremoti_in_Italia_nel_XX_secolo

    Messina e Reggio Calabria (28 dicembre 1908), 7,24 M, 100.000 morti


    Val di Noto, Sicilia orientale (11 gennaio 1693), 7,69 M, 60.000 morti
    Reggio Calabria e Messina (5 febbraio 1783), 6,91 M, 50.000 morti
    Avezzano, Abruzzo (13 gennaio 1915), 6,99 M, 30.519 morti


    Verona (3 gennaio 1117), 6,49 M, 30.000 morti


    Irpinia e Sannio (5 dicembre 1456), 6,96 Mw, 30.000 morti
    Catania (4 febbraio 1169), 6,60 Mw, 20.000 morti
    Montemurro, Basilicata (16 dicembre 1857), 6,96 Mw, 12.000 morti
    Nicastro (oggi Lamezia Terme), Calabria (27 marzo 1638), 7,00 Mw, oltre 10.000 morti
    Carinzia e Friuli (25 gennaio 1348), 6,66 Mw, 9900 morti



    */

    let data = [{'x': 14.40, 'y': 34.5 , 'r': 10}]  //11 gennaio 1693	Costa Siracusana - 12
    let data2 = [{'x': 12.7, 'y': 44 , 'r': 8}]   //14 gennaio 1703	Norcino, Reatino e Aquilano - 11

    let data3 = [{'x': 12.7, 'y': 51 , 'r': 8}]   //Carinzia e Friuli (25 gennaio 1348)

    const myChart = new Chart(ctx, {
        type: 'bubble',
        data: {
            labels: ['Gen', 'Feb', 'Mar', 'Apr', 'Mag', 'Giu', 'Lug'],
            datasets: [
                {
                    label: 'First Dataset',
                    data: data3,
                    fill:true,
                    backgroundColor: ['rgba(255, 0, 132, 0.2)'],
                }
            ]
        },
        options: {
            scales: {
                x: {
                    max:19,
                    min:6,
                    title: {
                        display: true,
                        text: 'Longitudine'
                    },
                    ticks: {
                        autoSkip: false
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
            }
        }

    });
    console.log(myChart);


});
