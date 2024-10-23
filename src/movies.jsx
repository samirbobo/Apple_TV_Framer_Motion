export const movies = [
  { poster: "/public/posters/airplane.webp", name: "Airplane" },
  {
    poster: "/public/posters/family-man.webp",
    name: "Family man",
  },
  {
    poster: "/public/posters/laboratory.webp",
    name: "Laboratory",
  },
  { poster: "/public/posters/napoleon.webp", name: "Napoleon" },
  {
    poster: "/public/posters/person-in-darkness.webp",
    name: "Person in Darkness",
  },
  {
    poster: "/public/posters/scary-building.webp",
    name: "Scary Building",
  },
  { poster: "/public/posters/stars.webp", name: "Stars" },
];

export const randomMoviesSet1 = movies
  .sort(() => Math.random() - 0.5)
  .concat(movies.sort(() => Math.random() - 0.5))
  .concat(movies.sort(() => Math.random() - 0.5));

export const randomMoviesSet2 = movies
  .sort(() => Math.random() - 0.5)
  .concat(movies.sort(() => Math.random() - 0.5))
  .concat(movies.sort(() => Math.random() - 0.5))
  .sort(() => Math.random() - 0.5);
