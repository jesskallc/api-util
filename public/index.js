(async function main() {
    // Get a reference to the element to display our data in
    let display = document.getElementById('myData')
    let pic = document.getElementById('myImg')
    // Declare a message variable to be set later
    let message
    let img
    try {
      // Attempt to fetch data from our API
      let data = await (await fetch('/mailchimp/list')).json()
      console.log(data)
      message = data.message
    } catch (err) {
      // If there was an error catch it and display the message
      console.log(err)
      message = err.message
    }
    try {
      // Attempt to fetch data from our API
      let data = await (await fetch('/cloudinary')).json()
      console.log(data.img)
      img = data.img
    } catch (err) {
      // If there was an error catch it and display the message
      console.log(err)
      message = err.message
    }
    // If we created the display element and added the ID correctly
    if (display) {
      // Show the message
      display.innerHTML = message
    }
    if (pic){
      let html = img
      var template = document.createElement('template');
      html = html.trim(); // Never return a text node of whitespace as the result
      template.innerHTML = html;
      console.log(template.content.firstChild)
      pic.appendChild(template.content.firstChild)
    }
  }())