function getSchedule(busLine) {
    return new Promise((resolve, _) => {
            var endPoint = getScheduleEndpoint(busLine)
            fetch(endPoint)
                .then(response => response.json())
                .then(response => resolve(convertToSchedule(response, busLine)))
        })
}

const STOP = 'IDNA'
// const API = 'http://open_preprod.tan.fr/ewp/horairesarret.json'
const API = '/tan/horairesarret.json#'

function getScheduleEndpoint(busLine) {
    return `${API}/${STOP}/${busLine.line}/${busLine.direction}`
}

function convertToSchedule(response, busLine) {
    return {
        direction: response.ligne['directionSens' + busLine.direction],
        next: response.prochainsHoraires
            .map(h => h.passages.map(m => convertToDate(h.heure, m)))
            .reduce((a, b) => a.concat(b))
            .map(h => getMinuteDiff(h, new Date()))
            [0]
    }
}

function convertToDate(hours, minutes) {
    let date = new Date()
    date.setHours(Number(hours.replace(/h$/, '')))
    date.setMinutes(Number(minutes))
    date.setSeconds(0)
    return date    
}

function getMinuteDiff(a, b) {
    return (a - b) / 1000 / 60 
}

export default { 
    getSchedule
}