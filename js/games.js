import Details from './details.js';
import Home from './UI.js';
class games {
    async getgames(category) {
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '7ecb5e037dmsh769e45503efda4ep1c0f47jsn25a0b4e617e3',
                'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };
        const response = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`, options);
        const data = await response.json();
        // console.log(data);
        let gameHome = new Home();
        gameHome.displayGame(data);
        document.getElementById('loading').classList.add("d-none");
        document.getElementById("games-list").classList.remove("d-none");

        this.startEvent();
        return data;
    }
    startEvent() {
        document.querySelectorAll('.card').forEach((item) => {
            item.addEventListener("click", () => {
                const id = item.dataset.id;
                this.showDetails(id);
            });
        });
    }

    async showDetails(idGame) {
        const details = new Details(idGame);
        document.getElementById("games-list").classList.add("d-none");
        document.getElementById('loading').classList.add("d-none");
        document.getElementById("game-details").classList.remove("d-none");


    }
};



export default games;