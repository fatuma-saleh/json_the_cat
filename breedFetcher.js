const catBreedArr = process.argv.slice(2);
const request = require('request');
request(`https://api.thecatapi.com/v1/breeds/search?q=${catBreedArr[0]}`, (error, response, body) => {
  console.log('error:', error); // Print the error if one occurred
  if (error) {
    throw error;
  }
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  const data = JSON.parse(body);
  //console.log(data);
  if (data.length === 0) {
    console.log("Invalid Breed");
  } else if (data.length > 0) {
    console.log(typeof data);
    console.log('Description: ', data[0].description);
  }

});