// main.js

function openDetails(){

    window.location.href = './details.html';

}

function render(breweries) {
    const mainContainer = document.querySelector('.main-container');
    mainContainer.innerHTML = '';
  
    for (const brewery of breweries) {
      const div = document.createElement('div');
      div.classList.add('brewery-card');
  
      const breweryName = document.createElement('strong');
      breweryName.textContent = brewery.name;
      div.appendChild(breweryName);
      mainContainer.appendChild(div);

      const breweryState = document.createElement('p');
      breweryState.textContent = brewery.state;
      div.appendChild(breweryState);
      mainContainer.appendChild(div);

      const breweryAddress = document.createElement('p');
      breweryAddress.textContent = brewery.address_1;
      div.appendChild(breweryAddress);
      mainContainer.appendChild(div)

      const breweryLink = document.createElement('p');
      breweryLink.textContent = 'Visita il sito (se presente):';
      div.appendChild(breweryLink);
      mainContainer.appendChild(div)

      const breweryWebsite = document.createElement('a');
      breweryWebsite.textContent = brewery.website_url;
      breweryWebsite.href = brewery.website_url
      div.appendChild(breweryWebsite);
      mainContainer.appendChild(div);

      if (brewery.website_url){
        breweryWebsite.textContent = brewery.website_url;
        breweryWebsite.href = brewery.website_url;
        div.appendChild(breweryWebsite);
      } else {
        const breweryWebsite = document.createElement('span');
        breweryWebsite.textContent = 'N/A';
        div.appendChild(breweryWebsite);
      }

      const detailsButton = document.createElement('button');
      detailsButton.textContent = 'Visualizza dettagli';
      detailsButton.classList.add('details-button');
      detailsButton.addEventListener('click', openDetails);
      div.appendChild(detailsButton);
    }
  }
  
 
  document.addEventListener('DOMContentLoaded', () => {
    pageNumber = 1; 
  
    DBService.getBreweries(pageNumber)
      .then(breweries => render(breweries))
      .catch(error => {
        console.error('Si è verificato un errore:', error);
      });

      
  });
  
  function previous() {
    pageNumber--;
    DBService.getBreweries(pageNumber)
      .then(breweries => render(breweries))
      .catch(error => {
        console.error('Si è verificato un errore:', error);
      });
  }
  
  function next() {
    pageNumber++;
    DBService.getBreweries(pageNumber)
      .then(breweries => render(breweries))
      .catch(error => {
        console.error('Si è verificato un errore:', error);
      });
  }
  