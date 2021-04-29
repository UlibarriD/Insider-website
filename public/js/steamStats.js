
var competences = ['Deducción', 'Memoria', 'Pensamiento Creativo', 'Atención', 'Coordinación', 'Agilidad Mental', 'Razonamiento lógico matemático', 'Razonamiento Abstracto', 'Resolucion numérica'];
function skillsStats(skill){
    var skillAvg = document.getElementById('skillAvg').getContext('2d');
    new Chart(skillAvg, {
        type: 'bar',
        data: {
            labels: competences,
            datasets: [{
                label: 'Competencias',
                data: skill.split(','),
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(255, 205, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(201, 203, 207, 0.2)',
                    'rgba(255, 170, 170, 0.2)',
                    'rgba(48, 82, 82, 0.2)'
                ],
                borderColor: [
                    'rgb(255, 99, 132)',
                    'rgb(255, 159, 64)',
                    'rgb(255, 205, 86)',
                    'rgb(75, 192, 192)',
                    'rgb(54, 162, 235)',
                    'rgb(153, 102, 255)',
                    'rgb(201, 203, 207)',
                    '#EFAAC4',
                    '#305252'
                ],
            }]
        },
        options: {
            plugins: {
                title: {
                    text: "Promedio general por competencia.",
                    display: true,
                }
            },
            maintainAspectRatio: false,
        }
    })
}

var weekDays = ['lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sabado', 'domingo']
function Tendencies(scidata, techdata, engdata, artdata, mathdata){
    var gameTendencies = document.getElementById('gameTendencies').getContext('2d');
    new Chart(gameTendencies, {
        type: 'line',
        data: {
            labels: weekDays,
            datasets: [{
                label: 'Tendencias Ciencia',
                data: scidata.split(','),
                fill: false,
                borderColor: '#39A2AE',
                tension: 0.1
            },
            {
                label: 'Tendencias Tecnología',
                data: techdata.split(','),
                fill: false,
                borderColor: '#45B69C',
                tension: 0.1   
            },
            {
                label: 'Tendencias Ingeniería',
                data: engdata.split(','),
                fill: false,
                borderColor: '#561F37',
                tension: 0.1   
            },
            {
                label: 'Tendencias Arte',
                data: artdata.split(','),
                fill: false,
                borderColor: '#55DBCB',
                tension: 0.1   
            },
            {
                label: 'Tendencias Matemáticas',
                data: mathdata.split(','),
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
                text: 'Tendencias por día'
              }
            },
            maintainAspectRatio: false,
        },
    })
}

function genderS(skillValuesWomen, skillValuesMen){
    var genderSkills = document.getElementById('genderSkills').getContext('2d');
    new Chart(genderSkills, {
        type: 'radar',
        data: {
            labels: competences,
            datasets: [{
                label: 'Mujeres',
                data: skillValuesWomen.split(','),
                fill: true,
                backgroundColor: 'rgba(255, 170, 170, 0.4)',
                borderColor: 'rgba(255, 170, 170)',
                pointBackgroundColor: 'rgba(255, 170, 170)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(255, 170, 170)',     
            },
            {
                label: 'Hombres',
                data: skillValuesMen.split(','),
                fill: true,
                backgroundColor: 'rgba(0, 180, 216, 0.2)',
                borderColor: '#00b4d8',
                pointBackgroundColor: '#00b4d8',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: '#00b4d8',
            }]
        },  
        options: {
            elements: {
                line: {
                    borderWidth: 3
                }
            },
            plugins: {
                legend: {
                  position: 'top',
                },
                title: {
                  display: true,
                  text: 'Competencias por genero'
                }
              },
            scales: {
                r: {
                    angleLines: {
                        display: false
                    },
                    suggestedMin: 10,
                    suggestedMax: 100
                }
            },
            maintainAspectRatio: false,
        },
    })
}