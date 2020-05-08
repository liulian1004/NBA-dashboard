import nba from 'nba';
//import the nba data from library
const SERVER_URL = 'https://nba.laiprojects.com';
//nba library can't connect with app directly
// connect with the server
// app tell server want to the data, serve will connect to the nba database, get the data and return to app
export default {
    //... means get all data
    ...nba,
    stats: {
        ...nba.stats,
        playerInfo: function({ PlayerID }) {
            return fetch(`${SERVER_URL}/players/${PlayerID}`).then(res => res.json())
        },
        shots: function({ PlayerID }) {
            return fetch(`${SERVER_URL}/players/${PlayerID}/shots`).then(res => res.json())
        },
    },
};
