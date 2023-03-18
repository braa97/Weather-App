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

    addCity(city) {
        return $.post('/weather', {
            name: city.name,
            temperature: city.temperature,
            condition: city.condition,
            conditionPic: city.conditionPic
        })
    }

    deleteCity(name) {
        return $.ajax({
            url: `/weather/${name}`,
            type: 'DELETE',
            success: function(response) {
                console.log("City deleted");
            }
         })
    }
    
    get getData() {
        return this._data
    }
}