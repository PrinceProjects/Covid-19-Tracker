var cell = document.getElementById("cell");
var ui = document.getElementById("ui");
ui.addEventListener("keyup", search);
function search(e) {
  cell.innerHTML = "";
  val = ui.value;
  fetch(`https://api.covid19india.org/data.json`)
    .then((res) => res.json())
    .then((d) => output2(d));

  function output2(d) {
    for (let i = 1; i < d.statewise.length; i++) {
      var heading = document.createElement("h3"),
        totalCases = document.createElement("p"),
        activeCases = document.createElement("p"),
        recovered = document.createElement("p");
      deaths = document.createElement("p");
      hrule = document.createElement("hr");
      testreg = new RegExp(`${val}`, "gi");

      str = d.statewise[i].state;
      mat = str.match(testreg);
      if (mat) {
        heading.innerHTML = `${d.statewise[i].state}`;
        totalCases.innerHTML = `Total Cases : ${d.statewise[i].confirmed}`;
        activeCases.innerHTML = `Active Cases : ${d.statewise[i].active}`;
        recovered.innerHTML = `Recovered : ${d.statewise[i].recovered}`;
        deaths.innerHTML = `Deaths : ${d.statewise[i].deaths}`;
        cell.appendChild(heading);
        cell.appendChild(totalCases);
        cell.appendChild(activeCases);
        cell.appendChild(recovered);
        cell.appendChild(deaths);
        cell.appendChild(hrule);
      }
    }
    if (cell.innerHTML == "") {
      app();
    }
  }
}
window.addEventListener("load", app);

function app(e) {
  fetch(`https://api.covid19india.org/data.json`)
    .then((res) => res.json())
    .then((d) => output(d));

  function output(d) {
    var headingIn = document.createElement("h3"),
      totalCasesIn = document.createElement("p"),
      activeCasesIn = document.createElement("p"),
      recoveredIn = document.createElement("p"),
      deathsIn = document.createElement("p"),
      hruleIn = document.createElement("hr");

    headingIn.innerHTML = `INDIA`;
    totalCasesIn.innerHTML = `Total Cases : ${d.statewise[0].confirmed}`;
    activeCasesIn.innerHTML = `Active Cases : ${d.statewise[0].active}`;
    recoveredIn.innerHTML = `Recovered : ${d.statewise[0].recovered}`;
    deathsIn.innerHTML = `Deaths : ${d.statewise[0].deaths}`;
    cell.appendChild(headingIn);
    cell.appendChild(totalCasesIn);
    cell.appendChild(activeCasesIn);
    cell.appendChild(recoveredIn);
    cell.appendChild(deathsIn);
    cell.appendChild(hruleIn);

    for (let i = 1; i < d.statewise.length; i++) {
      var heading = document.createElement("h3"),
        totalCases = document.createElement("p"),
        activeCases = document.createElement("p"),
        recovered = document.createElement("p");
      deaths = document.createElement("p");
      hrule = document.createElement("hr");

      heading.innerHTML = `${d.statewise[i].state}`;
      totalCases.innerHTML = `Total Cases : ${d.statewise[i].confirmed}`;
      activeCases.innerHTML = `Active Cases : ${d.statewise[i].active}`;
      recovered.innerHTML = `Recovered : ${d.statewise[i].recovered}`;
      deaths.innerHTML = `Deaths : ${d.statewise[i].deaths}`;
      cell.appendChild(heading);
      cell.appendChild(totalCases);
      cell.appendChild(activeCases);
      cell.appendChild(recovered);
      cell.appendChild(deaths);
      cell.appendChild(hrule);
    }
  }
}
