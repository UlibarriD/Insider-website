var competences = ['Deducción', 'Memoria', 'Pensamiento Creativo', 'Atención', 'Coordinación', 'Agilidad Mental', 'Razonamiento lógico matemático', 'Razonamiento Abstracto', 'Resolucion numérica'];
var redColor = '#E63946';

function radar(playerScoresData){
    var playerScores = document.getElementById('playerScores').getContext('2d');
    new Chart(playerScores, {
        type: 'radar',
        data: {
            labels: competences,
            datasets: [{
                label: 'Puntajes',
                data: playerScoresData.split(','),
                fill: true,
                backgroundColor: 'rgba(230, 57, 70, 0.4)',
                borderColor: redColor,
                pointBackgroundColor: redColor,
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: redColor,     
            }]
        },
    
        options: {
            elements: {
                line: {
                    borderWidth: 3
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
        },
    })
}

var weekDays = ['lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sabado', 'domingo']
function science(scienceData){
    var scienceScores = document.getElementById('scienceScores').getContext('2d');
    new Chart(scienceScores, {
        type: 'line',
        data: {
            labels: weekDays,
            datasets: [{
                label: 'Puntuación',
                data: scienceData.split(','),
                fill: true,
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.1
            }]
        },
        options: {
            plugins: {
                title: {
                    text: "Puntuación semanal de Ciencia",
                    display: true,
                }
            },
            scales: {
                y: {
                    suggestedMin: 0,
                    suggestedMax: 100
                }
            },
        },
    })
}
function tech(techData){
    var techScore = document.getElementById('techScore').getContext('2d');
    new Chart(techScore, {
        type: 'line',
        data: {
            labels: weekDays,
            datasets: [{
                label: 'Puntuación',
                data: techData.split(','),
                fill: false,
                borderColor: '#E63946',
                tension: 0.1
            }]
        },
        options: {
            plugins: {
                title: {
                    text: "Puntuación semanal de Tecnología",
                    display: true,
                }
            },
            scales: {
                y: {
                    suggestedMin: 0,
                    suggestedMax: 100
                }
            },
        },
    })
}
function eng(engData){
    var engScore = document.getElementById('engScore').getContext('2d');
    new Chart(engScore, {
        type: 'line',
        data: {
            labels: weekDays,
            datasets: [{
                label: 'Puntuación',
                data: engData.split(','),
                fill: false,
                borderColor: '#1D3557',
                tension: 0.1
            }]
        },
        options: {
            plugins: {
                title: {
                    text: "Puntuación semanal de Ingeniería",
                    display: true,
                }
            },
            scales: {
                y: {
                    suggestedMin: 0,
                    suggestedMax: 100
                }
            },
        },
    })
}
function art(artData){
    var artScore = document.getElementById('artScore').getContext('2d');
    new Chart(artScore, {
        type: 'line',
        data: {
            labels: weekDays,
            datasets: [{
                label: 'Puntuación',
                data: artData.split(','),
                fill: false,
                borderColor: '#ff006e',
                tension: 0.1
            }]
        },
        options: {
            plugins: {
                title: {
                    text: "Puntuación semanal de Arte",
                    display: true,
                }
            },
            scales: {
                y: {
                    suggestedMin: 0,
                    suggestedMax: 100
                }
            },
        },
    })
}
function math(mathData){
    var mathScore = document.getElementById('mathScore').getContext('2d');
    new Chart(mathScore, {
        type: 'line',
        data: {
            labels: weekDays,
            datasets: [{
                label: 'Puntuación',
                data: mathData.split(','),
                fill: false,
                borderColor: '#457B9D',
                tension: 0.1
            }]
        },
        options: {
            plugins: {
                title: {
                    text: "Puntuación semanal de Matemáticas",
                    display: true,
                }
            },
            scales: {
                y: {
                    suggestedMin: 0,
                    suggestedMax: 100
                }
            },
        },
    })
}
