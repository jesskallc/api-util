(async function main() {
    // Get a reference to the element to display our data in
    let display = document.getElementById('myData')
    // Declare a message variable to be set later
    let message
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
    // If we created the display element and added the ID correctly
    if (display) {
      // Show the message
      display.innerHTML = message
    }
  }())