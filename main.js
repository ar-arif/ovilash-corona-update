fetchData = async () => {
  let response = await fetch('https://api.covid19api.com/summary')
  let data = response.json()
  
};

console.log(fetchData());