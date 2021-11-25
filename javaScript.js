var isButtonClicked = false;

function getMovie(){
    if(isButtonClicked === false){
        fetch('./movie.json')
.then(response => {
    return response.json();
})
.then (data => {
    console.log(data.Movie)
    const filmer = data.Movie.map(film => {
        return '</br>' + film.Title  + " | " + " Year:" + film.Year 
    })
    document.getElementById('filmer').innerHTML += filmer
  
    
})
    }
    isButtonClicked = true;
    
}

