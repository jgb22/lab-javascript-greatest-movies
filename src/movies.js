// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// 
//const movies = [
/*     {
        title: 'The Shawshank Redemption',
        year: 1994,
        director: 'Frank Darabont',
        duration: '2h 22min',
        genre: ['Crime', 'Drama'],
        score: 9.3
      }, */


//How could you "clean" a bit this array and make it unified (without duplicates)?

function getAllDirectors(moviesArray) { 

    let directorList = moviesArray.map (movie =>  {

    return movie.director  
    
   })
   return directorList
}

const onlyDrama = moviesArray => moviesArray.filter(movie=> movie.genre.includes )

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  return moviesArray.filter(movie => {
    return movie.director === "Steven Spielberg" && movie.genre.includes("Drama")
  }).length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals

  function scoresAverage (moviesArray) {
    if (moviesArray.length === 0) {
      return 0
    }
  const sum = moviesArray.reduce ((total, current) => {
    if (typeof current.score === "number") {
          return total + current.score
    }
    else {return total}
  }, 0)
  
  const average = sum / moviesArray.length

  const decimals = Math.round(average * 100) / 100
  
    return decimals

  }



// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  return scoresAverage(onlyDrama(moviesArray))

  const targetDrama = moviesArray.filter(movie=>movie.genre.includes("Drama"))
  return scoresAverage (targetDrama)
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  const copy = moviesArray.map(movie => movie)

copy.sort((a, b) => {
  if(a.year ===b.year){

  } else {
    return a.year - b.year
  }
  
})

  return copy

}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {

  const onlyTitle = moviesArray.map(movie => movie.title)
  onlyTitle.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()))
  const top20 = onlyTitle.slice(0,20)
 
  return top20

}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
