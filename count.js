const urls = [
  'https://dummyjson.com/users/1',
  'https://dummyjson.com/users/2',
  'https://dummyjson.com/users/3',
  'https://dummyjson.com/users/4',
  'https://dummyjson.com/users/5',
  'https://dummyjson.com/users/6',
  'https://dummyjson.com/users/7',
  'https://dummyjson.com/users/8',
  'https://dummyjson.com/users/9',
  'https://dummyjson.com/users/10'
];
console.log("Total URLs available:", urls.length);
const num = 4;                                                                                                          
if (num <= 0 || num > urls.length) {
  console.log(`Invalid. enter a number between 1 and ${urls.length}`);
} else {
  const selected = urls.slice(0, num);
  const promises = selected.map(url =>
    fetch(url)
      .then(res => {
        if (!res.ok) throw new Error(`Failed to fetch ${url} (status ${res.status})`);
        return res.json();
      })
  );
  Promise.all(promises)
    .then(data => {
      console.log("Fetched data successfully:");
      console.log(data);
    })
    .catch(error => {
      console.error("Error fetching data:", error.message);
    });
}
