class Model {
    constructor() {
        this._data = []
    }
    
    getCities() {
        return $.get("/weather").then((weatherData) => {
            weatherData.forEach(element => {
                this._data.push(element)
            });
        })
    }

    getCity(name) {
        return $.get(`/weather/${name}`).then((weatherData) => {
            this._data.push(weatherData)
        })
    }
    
    get getData() {
        return this._data
    }
}