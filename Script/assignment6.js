let movies=[];
movies.push({
    title:("Frozen"),
    year:2013,
    isWatched:true

});
movies.push({
    title:("Lion King"),
    year:2000,
    isWatched:false

});
movies.push({
    title:("Aladdin"),
    year:2025,
    isWatched:true

});
console.log(movies);

function addMovie(){
    let title = prompt ("Movie title");
    let year  = prompt ("Release year");

    let newMovie = {
        title:title,
        year:year,
        isWatched:false
    };
    movies.push(newMovie);
    console.log(movies);
    alert("Movie added");
}
//addMovie();


 function listMovies(){
    movies.forEach(function(movie){
       console.log(movie.title + "("+movie.year+")");

         });
     }
 listMovies();

 function markAsWatched(title){
     let movie = movies.find(function(movie){
        return movie.title ===title;
    });
   if(movie){
        movie.isWatched = true;
        console.log("Movie watched");
        }else{
             console.log("Movie not found");
         }
    }
     markAsWatched("Frozen");
     console.log(movies)
//addMovie();

function removeMovie(title){
    movies = movies.filter(function (movie) {
        return movie.title !==title;
        
    })
    console.log ("Movie,removed");
    console.log(movies);
}
removeMovie("Aladdin");

function listUnwatched(){
    let listUnwatched = movies.filter(function(movie){
        return movie.isWatched ===false;
    });
}
listUnwatched();

let running = true;
while(running) {
    const choice = prompt(
    "Movie tracker\n" +
    "1. Add movie\n"  +
    "2. List movies\n" +
    "3. Mark as wachted\n" +
    "4. Remove movie\n" +
    "5.Exit"
    )};
switch(choice) {
    case "1":
        addMovie ();
        break;

    case "2":
        listMovies ();
        break;
    
    case "3":
       let watchedTitle = prompt ("Enter as watched");
       markAsWatched(watchedTitle);
        break;

    case "4":
        let removeTitle = prompt ("Enter to remove");
        removeMovie(removeTitle);
        break;

    case "5":
        running = false;
        alert ("Chio")
        break;
    
    default:
        alert("invalid choice")
        
    
}


















