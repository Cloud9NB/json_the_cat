const request = require('request');
// const breed = process.argv.slice(2);

const fetchBreedDescription = (breedName, callback) => {
  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
  request(url, (error, response, body) => {
    if (error) {
      callback(error);
      return;
    }

    const data = JSON.parse(body);

    if (data[0]) {
      callback(error, data[0].description);
    } else {
      callback('Breed NOT found');
    }
  }
  );
};

module.exports = { fetchBreedDescription };