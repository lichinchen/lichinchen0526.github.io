const requestURL = 'https://lichinchen.github.io/lichinchen0526.github.io/lesson13_finalproject/data/event.json';

   async function getJSON() {
       try {
           let res = await fetch(requestURL);
           return await res.json();
       } catch (error) {
           console.log(error);
       }
   }
 
   async function renderGetCityEvents(cityName) {
       let eventHTML = '<h3>&#x1F4E2; Upcoming Events &#127881;</h3><ul>';
       let citiesJSON = await getJSON();
       let cities = citiesJSON['city'];
       let cityData = cities.filter(city => city.name == cityName);
       cityData[0].events.forEach(event => {
           eventParts = event.split(':');
           eventHTML += `<li>${eventParts[0]}:<span class="event-desc">${eventParts[1]}</span></li>`;
       });
       eventHTML += '</ul>';
       document.querySelector("div.events").innerHTML = eventHTML;
   }
   
   let activeMenuCity = document.querySelector("a.active");
   if (activeMenuCity !== null) {
       renderGetCityEvents(activeMenuCity.textContent);
   }


   