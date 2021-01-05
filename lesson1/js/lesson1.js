/*-----current year-----*/
const options = {year: 'numeric'};
    document.getElementById('currentYear').textContent = new Date().toLocaleDateString('en-US', options);

/*-----last updated-----*/
document.getElementById('lastupdated').innerHTML = document.lastModified