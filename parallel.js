const url1 = 'https://dummyjson.com/users/1';
const url2 = 'https://dummyjson.com/users/2'
const url3 = 'https://dummyjson.com/users/3';
const url4 = 'https://dummyjson.com/users/4';
const url5 = 'https://dummyjson.com/users/5';

const p1= fetch(url1).then(res => res.json());
const p2=fetch(url2).then(res=>res.json())
const p3=fetch(url3).then(res=>res.json())
const p4=fetch(url4).then(res=>res.json())
const p5=fetch(url5).then(res=>res.json())
Promise.all([p1, p2, p3, p4, p5])
.then(([data1, data2, data3, data4, data5]) => {
  console.log('1st api', data1);
  console.log('2nd api',data2);
  console.log('3rd api',data3);
  console.log('4th api',data4);
  console.log('5th api ',data5);
})

