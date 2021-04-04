const requestURL = 'https://lichinchen.github.io/lichinchen0526.github.io/lesson13_finalproject/data/event.json';
fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const towns = jsonObject['city'];
    function townName(town) {
      if (town.name == "Indianapolis") {
        return true;
      }
    };

    let assignTowns = towns.filter(townName);
    
    for (let i = 0; i < assignTowns.length; i++) {
      let card = document.createElement('section');
      let name = document.createElement('p0');
      let year = document.createElement('p1');
      let population = document.createElement('p2');
      let rainfall = document.createElement('p3');
      let snowfall = document.createElement('p4');
      let sunnyday = document.createElement('p5');

      name.textContent = assignTowns[i].name;
      year.textContent = "Year Founded: " + assignTowns[i].yearFounded;
      population.textContent = "Population: " + assignTowns[i].currentPopulation;
      rainfall.textContent = "Annual Rain Fall: " + assignTowns[i].averageRainfall;
      snowfall.textContent = "Annual Snow Fall: " + assignTowns[i].averageSnowfall;
      sunnyday.textContent = "Annual Rain Fall: " + assignTowns[i].averageSunnyday;

      card.appendChild(name);
      card.appendChild(year);
      card.appendChild(population);
      card.appendChild(rainfall);
      card.appendChild(snowfall);
      card.appendChild(sunnyday);

      document.querySelector('div.towns').appendChild(card);
    }
  });

  




  