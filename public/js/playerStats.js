var playerScores = document.getElementById('playerScores').getContext('2d');
var competences = ['Deducción', 'Atención', 'Memoria', 'Razonamiento', 'Coordinación', 'Matemático', 'Lógica'];
var redColor = '#E63946';

var playerScoresData = [65, 59, 90, 81, 56, 55, 40];

const radarChart = new Chart(playerScores, {
    type: 'radar',
    data: {
        labels: competences,
        datasets: [{
            label: 'Puntajes',
            data: playerScoresData,
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
                suggestedMin: 20,
                suggestedMax: 100
            }
        },
    },
})

var weekDays = ['lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sabado', 'domingo']

var scienceData = [30, 50, 37, 41, 39, 81, 90];
var scienceScores = document.getElementById('scienceScores').getContext('2d');
const scienceChart = new Chart(scienceScores, {
    type: 'line',
    data: {
        labels: weekDays,
        datasets: [{
            label: 'Puntuación',
            data: scienceData,
            fill: false,
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
        }
    },
})

var techData = [30, 50, 37, 41, 39, 81, 90];
var techScore = document.getElementById('techScore').getContext('2d');
const techChart = new Chart(techScore, {
    type: 'line',
    data: {
        labels: weekDays,
        datasets: [{
            label: 'Puntuación',
            data: techData,
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
        }
    },
})

var engData = [30, 50, 37, 41, 39, 81, 90];
var engScore = document.getElementById('engScore').getContext('2d');
const engChart = new Chart(engScore, {
    type: 'line',
    data: {
        labels: weekDays,
        datasets: [{
            label: 'Puntuación',
            data: engData,
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
        }
    },
})

var artData = [30, 50, 37, 41, 39, 81, 90];
var artScore = document.getElementById('artScore').getContext('2d');
const artChart = new Chart(artScore, {
    type: 'line',
    data: {
        labels: weekDays,
        datasets: [{
            label: 'Puntuación',
            data: artData,
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
        }
    },
})

var mathData = [30, 50, 37, 41, 39, 81, 90];
var mathScore = document.getElementById('mathScore').getContext('2d');
const mathChart = new Chart(mathScore, {
    type: 'line',
    data: {
        labels: weekDays,
        datasets: [{
            label: 'Puntuación',
            data: mathData,
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
        }
    },
})
