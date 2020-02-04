const searchFilmsThenCatch = (query = "batman") => {
  return fetch(`http://api.tvmaze.com/search/shows?q=${query}`)
    .then(res => res.json())
    .then(res => {
      // res.map(el => console.log(el.show.name));
      // console.log(res);
      return res;
    })
    .catch(err => console.log(err));
};

const consoleArr = () => {
  searchFilmsThenCatch("superman").then(res => {
    arr = res;
    console.log(arr);
  });
};
consoleArr();
