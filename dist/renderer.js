class Renderer {
    constructor() {}
    
    render(data) {
        let weatherElement = $(".forcast")
        let Source = $("#weatherCityContainer").html()
        let template = Handlebars.compile(Source);
        let newHTML = template(data);
        weatherElement.empty().append(newHTML)
    }
}