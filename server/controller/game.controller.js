const axios = require("axios").default;

exports.listGames = async (req, res) => {
  try {
    const options = {
      method: 'POST',
      url: 'https://gamedatabasestefan-skliarovv1.p.rapidapi.com/listGames',
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
        'x-rapidapi-key': 'd7df3be0d4msh35a23c679714854p12a9b9jsne83f0555a186',
        'x-rapidapi-host': 'GameDatabasestefan-skliarovV1.p.rapidapi.com'
      },
      data: {userKey: 'random', requestUrl: 'localhost'}
    };

    const games = await axios.request(options)
      .then(({data}) => {
        return data;
      }).catch(err => {
        throw err;
    });
    res.json(games);

  } catch(err) {
    res.status(500).json({data: err});
  }
}
