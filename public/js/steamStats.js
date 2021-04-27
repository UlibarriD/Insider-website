var weekDays = ['lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sabado', 'domingo']
function Tendencies(scidata, techdata, engdata, artdata, mathdata){
    var gameTendencies = document.getElementById('gameTendencies').getContext('2d');
    new Chart(gameTendencies, {
        type: 'line',
        data: {
            labels: weekDays,
            datasets: [{
                label: 'Tendencias Ciencia',
                data: scidata,
                fill: false,
                borderColor: '#39A2AE',
                tension: 0.1
            },
            {
                label: 'Tendencias Tecnología',
                data: techdata,
                fill: false,
                borderColor: '#45B69C',
                tension: 0.1   
            },
            {
                label: 'Tendencias Ingeniería',
                data: engdata,
                fill: false,
                borderColor: '#561F37',
                tension: 0.1   
            },
            {
                label: 'Tendencias Arte',
                data: artdata,
                fill: false,
                borderColor: '#55DBCB',
                tension: 0.1   
            },
            {
                label: 'Tendencias Matemáticas',
                data: mathdata,
                fill: false,
                borderColor: '#A0A4B8',
                tension: 0.1   
            }]
        },
        options: {
            responsive: true,
            plugins: {
              legend: {
                position: 'top',
              },
              title: {
                display: true,
                text: 'Chart.js Line Chart'
              }
            }
        },
    })
}
