// Import here...
const res = require("express/lib/response");

const express = require("express");
const router = express.Router();

const films = [
  {
    id: 1,
    title: "Bonnie and Clyde",
    director: "Arthur Penn"
  },
  {
    id: 2,
    title: "Reservoir Dogs",
    director: "Quentin Tarantino"
  },
  {
    id: 3,
    title: "Inception",
    director: "Christopher Nolan"
  },
  {
    id: 4,
    title: "Django Unchained",
    director: "Quentin Tarantino"
  }
];

router.get("/", (req, res) => {
  res.json({films});
})

router.get("/:id", (req, res) => {
  const { id } = req.params;

  const parsedId = parseInt(id)
  const film = films.find((film) => film.id === parsedId)

  res.json({ film })
})

router.get("/director/:director", (req, res) => {
  const { director } = req.params;

  const film = films.filter((film) => film.director === director)
  
  res.json({ film })
})

router.post("/", (req, res) => {
  const filmToCreate = {
    ...req.body
  };

  filmToCreate.id = films.length + 1;

  res.json({ film: filmToCreate });
});

module.exports = router;