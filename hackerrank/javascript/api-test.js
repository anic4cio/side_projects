const axios = require('axios')

const getTeams = async (year, k) => {
  const response = await axios.get(`https://jsonmock.hackerrank.com/api/football_matches?competition=UEFA%20Champions%20League&year=2011&page=2`);
  const result = response.data;

  console.log(JSON.parse(result));
}

getTeams()