// Define a function to dynamically load a script with a specified source and callback function
loadScript = (src, callback) => {
  // Create a new script element
  let script = document.createElement("script");
  // Set the source attribute of the script element to the specified source
  script.src = src;

  // Set up an onload event handler for the script
  script.onload = () => {
    console.log("Script loaded with src: " + src);

    // Uncomment this block if you want to invoke the callback functiononly when it is a type of function
    
    // if (callback && typeof callback === "function") {
    //   callback();
    // }

    // Pass the source as an argument to the callback function
    callback(src);
  };

  // Append the script element to the body of the HTML document
  document.body.appendChild(script);
};

// Define a function to be used as a callback when the script is loaded
create = (src) => {
  // Prompt the user for a script name
  let a = prompt("Enter the script name");

  // Create an <h1> element with the entered name and append it to the body
  document.body.appendChild(document.createElement("h1")).innerText = `My name is ${a}`;

  // Create a <p> element displaying the source site and append it to the body
  document.body.appendChild(document.createElement("p")).innerText = `Source site is ${src}`;
};

// Load the script with the specified source and use the 'create' function as a callback
loadScript('https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js', create);
