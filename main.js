DBService.getBreweries(1)
.then(breweries => render(breweries));

//qui ho chiamato il then che mancava dalla promise nel main e funziona tutto lo stesso

let pageNumber = 1;

function render(breweries){

    for (const brewery of breweries) {
        console.log(brewery.name);
    }

}

function previous(){
    pageNumber --;
    DBService.getBreweries(pageNumber)
    .then(breweries => render(breweries));
}

function next(){

    pageNumber ++;
    DBService.getBreweries(pageNumber)
    .then(breweries => render(breweries));
}