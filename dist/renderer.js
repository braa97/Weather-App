class Renderer {
    
    render(data) {
        weatherElement.empty()
        let newHTML = template(data);
        weatherElement.append(newHTML)
    }
}