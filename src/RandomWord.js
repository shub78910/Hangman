let movies = 
    {
    "forrest-gump": "Tom Hanks!",
    "pulp-fiction": "Tarantino classic",
    "gone-girl": "Movie about a mysteriously missing writer",
    "harry-potter": "wingardium leviosa!",
    "batman": "It's not who I am underneath, but what I do that defines me.",
    "the-dark-knight": "Madness, as you know, is a lot like gravity. All it takes is a little push.",
    "borat": "My country send me to the United States to make a movie-film. Please, come and see my film. If not success, I will be execute.",
    "joker": "I just don’t want to feel so bad anymore.",
    "life-of-pi": "Richar parkerrrr!!!",
    "the-terminal": "Krakozhiaa!/TomHanks/Airport",
    "memento": "Nolan classic",
    "rockstar": "AR rahman/Mohit Chauhan",
    "good-will-hunting": "He pushes people away before they get a chance to leave him. It's a defense mechanism. And for 20 years he's been alone because of that.",
    "the-shining": "Wendy? Darling? Light, of my life. I'm not gonna hurt ya. I'm just going to bash your brains in.",
    "american-psycho": "I've got an 8:30 rez at Dorsia."
  }
  
  function randomWord() {
    let movieArray = Object.keys(movies)
    return movieArray[
      Math.floor(Math.random() * movieArray.length)
    ];
  }
  
  export { randomWord };
  export {movies}; 