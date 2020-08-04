// data fetch from api
fetch("https://corona-api.herokuapp.com/")
    .then((apiData) => {
      return apiData.json();
    })
    .then((data) => {
      afterThat(data);
    });


// main code in this function
function afterThat(data) {
  // console.log(data);

  const bd = data.BD


  // update covid-19 value
  document.getElementById("cases-24").innerText = bd.new_cases
  document.getElementById("deaths-24").innerText = bd.new_deaths
  document.getElementById("recovered-24").innerText = bd.new_recovered
  document.getElementById("Total-cases").innerText = bd.total_cases
  document.getElementById("Total-deaths").innerText = bd.total_deaths
  document.getElementById("Total-recovered").innerText = bd.total_recovered


  // Date
  let date = document.getElementById("date");
  const da = new Intl.DateTimeFormat("en", { day: "2-digit" }).format();
  const mo = new Intl.DateTimeFormat("en", { month: "2-digit" }).format();
  const ye = new Intl.DateTimeFormat("en", { year: "numeric" }).format();
  const currentDate = `${da}/${mo}/${ye}`;
  date.innerText = currentDate;
}
