const model = new Model()
const renderer = new Renderer()

window.onload = function() {
    model.getCities().then(() => {
        renderer.render(model.getData)
    })
}


$("#search").on("click", () => {
    let cityName = $("#search-field").val()
    if (!cityName) {
        alert("City field cannot be empty")
        return
    }
    model.getCity(cityName).then(() => {
        renderer.render(model.getData)
        $("#search-field").val("")
    })
})

$(".forcast").on("click", ".fa-circle-plus", function() {
    let card = $(this).closest(".card")
    let name = card.find("#city").text()
    let temperature = card.find("#temp").text()
    let condition = card.find("#condition").text()
    let conditionPic = card.find("#icon").data('id')
    let city = {name: name, temperature: temperature, condition: condition, conditionPic: conditionPic}
    model.addCity(city).then((doc) => {
        $(this).removeClass('fa-circle-plus').addClass('fa-circle-minus')
        // $(this).closest(".card").attr('data-id', doc._id)
    })
})

$(".forcast").on("click", ".fa-circle-minus", function() {
    let name = $(this).closest(".card").find("#city").text()
    model.deleteCity(name).then((doc) => {
        $(this).removeClass('fa-circle-minus').addClass('fa-circle-plus')
    })
})