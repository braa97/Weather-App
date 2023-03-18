// const Source = $("#").html()
// const template = Handlebars.compile(Source);
// const recipeElement = $(".")

let model = new Model()

model.getCities().then(() => {
    console.log(model.getData);
})

// model.deleteCity("Ibillin")

// model.getCities().then(() => {
//     console.log(model.getData);
// })

// let city = {name: "Arrabah", temperature: 24, condition: "Cloudy with a chance of meatballs", conditionPic: "05b"}

// model.addCity(city)