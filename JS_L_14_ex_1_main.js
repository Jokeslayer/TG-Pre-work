fetch('https://api-to-call.com/endpoint').then(response => {
  if(response.ok){
    // Code to handle a successful response
    return response.json();
  }
  // Code to handle a network error
  throw new Error('Request failed!');
}, networkError => {
	console.log(networkError.message);
}).then(jsonResponse => {
  return jsonResponse;
});
