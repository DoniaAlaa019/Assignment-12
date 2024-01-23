import Home from "./UI.js";

class Details {
    constructor(id) {
        document.getElementById("close").addEventListener("click", () => {
            document.getElementById("games-list").classList.remove("d-none");
            document.getElementById("game-details").classList.add("d-none");
        });

        this.getDetailgame(id);
    }
    async getDetailgame(id) {

        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '7ecb5e037dmsh769e45503efda4ep1c0f47jsn25a0b4e617e3',
                'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };
        const response = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`, options);
        const data = await response.json();
        let g = new Home();
        g.displayDetails(data);
    }
};
export default Details;