// api fetching
fetchData = async () => {
  let response = await fetch("https://api.covid19api.com/summary");
  let data = await response.json();
  return data;
};

// calling fetch function
fetchData().then((data) => afterThat(data));

// main code in this 1 function
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

  // number to currency format
  let currencyFormat = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
  });

  // edit value of corona update
  cases_24.innerText = currencyFormat.format(todayCases);
  deaths_24.innerText = currencyFormat.format(todayDeaths);
  recovered_24.innerText = currencyFormat.format(todayRecovered);
  total_cases.innerText = currencyFormat.format(totalCases);
  total_deaths.innerText = currencyFormat.format(totalDeaths);
  total_recovered.innerText = currencyFormat.format(totalRecovered);

  // remove $
  dollerRemove = (input) => {
    let slice = input.innerText.slice(1);
    input.innerText = slice;
  };
  dollerRemove(cases_24);
  dollerRemove(deaths_24);
  dollerRemove(recovered_24);
  dollerRemove(total_cases);
  dollerRemove(total_deaths);
  dollerRemove(total_recovered);

  // Date
  let date = document.getElementById("date");
  const ye = new Intl.DateTimeFormat("en", { year: "numeric" }).format();
  const mo = new Intl.DateTimeFormat("en", { month: "short" }).format();
  const da = new Intl.DateTimeFormat("en", { day: "2-digit" }).format();
  const currentDate = `${da}-${mo}-${ye}`;
  date.innerText = currentDate;
}
