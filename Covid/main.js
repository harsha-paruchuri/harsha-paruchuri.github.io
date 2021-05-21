$(document).ready(function () {
    // Get JSON data from url
    $.getJSON("https://api.covid19india.org/data.json", function (data) {
      var states = [];
      var confirmed = [];
      var recovered = [];
      var deaths = [];
      var lastupdatedtime = [];
      var deltaconfirmed = [];
      var deltarecovered = [];
      var deltadeaths = [];
  
      var total_active;
      var total_confirmed;
      var total_recovered;
      var total_deaths; 
      var last_date;
      var new_confirmed;
      var new_recovered;
      var new_deaths;

  
      // Take the first element in statewise array and add the objects values into the above variables
      total_active = data.statewise[0].active;
      total_confirmed = data.statewise[0].confirmed;
      total_recovered = data.statewise[0].recovered;
      total_deaths = data.statewise[0].deaths;
      last_date = data.statewise[0].lastupdatedtime;
      new_confirmed = data.statewise[0].deltaconfirmed;
      new_recovered = data.statewise[0].deltarecovered;
      new_deaths = data.statewise[0].deltadeaths;
      // The each loop select a single statewise array element
      // Take the data in that array and add it to variables
      $.each(data.statewise, function (id, obj) {
        states.push(obj.state);
        confirmed.push(obj.confirmed);
        recovered.push(obj.recovered);
        deaths.push(obj.deaths);
      });
  
      // Remove the first element in the states, confirmed, recovered, and deaths as that is the total value
      states.shift();
      confirmed.shift();
      recovered.shift();
      deaths.shift();
  
      // console.log(confirmed);
      $("#confirmed").append(total_confirmed)
      $("#deltaconfirmed").append(new_confirmed)
      $("#active").append(total_active)
      $("#recovered").append(total_recovered)
      $("#deltarecovered").append(new_recovered)
      $("#deaths").append(total_deaths)
      $("#deltadeaths").append(new_deaths)
      $("#lastupdatedtime").append(last_date)
      // Chart initialization
      var myChart = document.getElementById("myChart").getContext("2d");
      var chart = new Chart(myChart, {
        type: "line",
        data: {
          labels: states,
          datasets: [
            {
              label: "CONFIRMED CASES",
              data: confirmed,
              backgroundColor: "#ffe600",
              minBarLength: 100,
            },
            {
              label: "RECOVERED",
              data: recovered,
              backgroundColor: "#07e866",
              minBarLength: 100,
            },
            {
              label: "DECEASED",
              data: deaths,
              backgroundColor: "#fa0000",
              minBarLength: 100,
              
            },

          ],
        },
        option: {},
      });
    });
  });
