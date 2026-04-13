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
        isWatched:true
    };
    movies.push(newMovie);
    console.log(movies);
    alert("Movie added");
}
addMovie();
addMovie();