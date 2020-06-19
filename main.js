async function fetchData() {
  let response = await fetch("https://api.covid19api.com/summary");
  let data = await response.json();

  return data;
}

fetchData().then((data) => afterThat(data));

function afterThat(data) {
  const coronaData = data;
  let bangladesh = coronaData.Countries[13];

  console.log(bangladesh);

  //  object data
  let todayCases = bangladesh.NewConfirmed;
  let todayDeaths = bangladesh.NewDeaths;
  let todayRecovered = bangladesh.NewRecovered;
  let totalCases = bangladesh.TotalConfirmed;
  let totalDeaths = bangladesh.TotalDeaths;
  let totalRecovered = bangladesh.TotalRecovered;

  //  html div collect
  let cases_24 = document.getElementById("cases-24");
  let deaths_24 = document.getElementById("deaths-24");
  let recovered_24 = document.getElementById("recovered-24");
  let total_cases = document.getElementById("Total-cases");
  let total_deaths = document.getElementById("Total-deaths");
  let total_recovered = document.getElementById("Total-recovered");

  // edit value of corona updRate
  cases_24.innerText = todayCases;

  deaths_24.innerText = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
  }).format(todayRecovered);

  recovered_24.innerText = todayRecovered;

  total_cases.innerText = totalCases;
  total_deaths.innerText = totalDeaths;
  total_recovered.innerText = totalRecovered;

  // Date
  let date = document.getElementById("date");

  const ye = new Intl.DateTimeFormat("en", { year: "numeric" }).format();
  const mo = new Intl.DateTimeFormat("en", { month: "short" }).format();
  const da = new Intl.DateTimeFormat("en", { day: "2-digit" }).format();
  const currentDate = `${da}-${mo}-${ye}`;

  date.innerText = currentDate;

  
        let slice = deaths_24.innerText.slice(1);

        deaths_24.innerText = slice;


   
  
}


