function fetchSequential() {
  const url1 = 'https://dummyjson.com/users/1';
  const url2 = 'https://dummyjson.com/users/2'
  const url3 = 'https://dummyjson.com/users/3';
  const url4 = 'https://dummyjson.com/users/4';
  const url5 = 'https://dummyjson.com/users/5';
  fetch(url1)
    .then(response => response.json())
    .then(data1 => {
      console.log('First API data:', data1);
      return fetch(url2);
    })
    .then(response => response.json())
    .then(data2 => {
      console.log('Second API data:', data2);
      return fetch(url3)
    })
    .then(response => response.json())
    .then(data3 => {
      console.log("3rd api data", data3)
      return fetch(url4)
    })
    .then(response => response.json())
    .then(data4 => {
      console.log("4th api data", data4)
      return fetch(url5)
    })
    .then(response => response.json())
    .then(data5 => {
      console.log("5th api data", data5)
    })
    .catch(error => console.log('Error found', error));
}
fetchSequential();