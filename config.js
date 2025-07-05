let rootPath = "https://mysite.itvarsity.org/api/ContactBook/";
//This is the base URL used to connect to your Contact Book system.
// All the other API links (like insert, delete, get contacts) will start with this.


let apiKey = checkApiKey();
//This runs the checkApiKey() function and stores the result in a variable called apiKey.
// The goal is to make sure the user has a saved API key before using the app.



function checkApiKey() {
    if (!localStorage.getItem("apiKey")) {
        window.open("enter-api-key.html", "_self");
    }
    return localStorage.getItem("apiKey");
}
//🔍 localStorage.getItem("apiKey")
// This checks if there is an API key saved in the browser’s local storage.
// Local storage lets the browser remember things like login or preferences, even after the page is closed.

//window.open("enter-api-key.html", "_self");
//The user is redirected to the enter-api-key.html page so they can enter and save their key.

//return localStorage.getItem("apiKey");
//It returns the stored key, so you can use it later when making API requests.
