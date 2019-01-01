// ===============================================================================
// DATA
// Below data will hold all of the friends.
// Initially we just set it equal to a "dummy" friend.
// But you could have it be an empty array as well.
// ===============================================================================

const friendsArray = [
  {
    name: "Ganon",
    photo:
      "https://vignette.wikia.nocookie.net/zelda/images/1/18/Ganon_%28Oracle_of_Ages_%26_Oracle_of_Seasons%29.png/revision/latest?cb=20100413011018",
    scores: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]
    //32
  },
  {
    name: "Bowser",
    photo:
      "https://i.pinimg.com/originals/5f/c2/ab/5fc2ab3ccfdc99f50e751b80604ea28f.png",
    scores: [2, 5, 1, 3, 5, 3, 4, 3, 2, 2]
    //30
  },
  {
    name: "Wario",
    photo:
      "https://aff5fa4925746bf9c161-fb36f18ca122a30f6899af8eef8fa39b.ssl.cf5.rackcdn.com/images/Masthead_Wario.5fb367ea.png",
    scores: [5, 5, 5, 5, 5, 5, 5, 5, 5, 5]
    //50
  },
  {
    name: "Princess Peach",
    photo:
      "https://aff5fa4925746bf9c161-fb36f18ca122a30f6899af8eef8fa39b.ssl.cf5.rackcdn.com/images/Masthead_Peach.5fb367ea.png",
    scores: [1, 5, 1, 2, 1, 1, 1, 1, 1, 1]
    //15
  },
  {
    name: "Toad",
    photo:
      "https://vignette.wikia.nocookie.net/nintendo/images/0/01/Toad_NSMBW.png/revision/latest?cb=20120110143846&path-prefix=en",
    scores: [3, 4, 3, 2, 2, 4, 1, 2, 2, 2]
    //25
  },
  {
    name: "Mario",
    photo:
      "http://mario.nintendo.com/assets/img/home/char-mario.png",
    scores: [2, 5, 4, 3, 1, 4, 5, 3, 4, 4]
    //35
  },
  {
    name: "Samus Aran",
    photo: "https://images-na.ssl-images-amazon.com/images/I/41oC9uyPY2L._SL500_AC_SS350_.jpg",
    scores: [3, 4, 4, 5, 5, 5, 3, 5, 3, 3]
    //40
  },
  {
    name: "Link",
    photo: "https://vignette.wikia.nocookie.net/zelda/images/2/2a/Link_Hyrule_Warriors.png/revision/latest?cb=20140620205907",
    scores: [3, 4, 4, 5, 5, 5, 3, 5, 3, 3]
    //40
  },
  {
    name: "Princess Zelda",
    photo: "https://vignette.wikia.nocookie.net/zelda/images/5/5f/Zelda_Artwork_%28Breath_of_the_Wild%29.png/revision/latest?cb=20170306081400",
    scores: [3, 4, 4, 5, 5, 5, 3, 5, 3, 3]
    //40
  }
];

// Note how we export the array. This makes it accessible to other files using require.
module.exports = friendsArray;
