// to call our json data file.
const albums = require("../data/albums");

// it is a necessary Request-Response function to get the all albums and albums by query.
getAllAlbums = (req, res) => {
  if (req.query.id) {
    const album = albums.filter((album) => album.id == req.query.id);

    //if the result array is empty, return an error.
    album.length
      ? res.send(album)
      : res.status(400).send("The Album was not found..");
  } else if (req.query.userId) {
    const userAlbum = albums.filter(
      (userAlbum) => userAlbum.userId == req.query.userId
    );

    //if the result array is empty, return an error.
    userAlbum.length
      ? res.send(userAlbum)
      : res
          .status(400)
          .send("Albums belonging to this user has not been found..");
  } else {
    res.send(albums);
  }
};

// it is a necessary Request-Response function to get the albums by userId.
getAlbumsByUserId = (req, res) => {
  const albumsByUserId = albums.filter(
    (userAlbums) => userAlbums.userId == req.params.userId
  );

  //if the result array is empty, return an error.
  albumsByUserId.length
    ? res.send(albumsByUserId)
    : res
        .status(400)
        .send("Albums belonging to this user has not been found..");
};

// the export process required to open methods to external sources.
module.exports = { getAllAlbums, getAlbumsByUserId };
