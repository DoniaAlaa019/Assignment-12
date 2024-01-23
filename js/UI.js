//display data from api class ui
//display details
//copy from claa access this copy
//to showmethod related with display
import games from './games.js';


export default class Home {
    formatDes(value) {
        let t = typeof value;
        if (t != "undefined") {
            let arr = [value.split(/[-\s]+/, 8)];
            let des = arr.toString().split(' ,');
            return des;
        }

    }
    async displayGame(list) {
        let elem = document.getElementById('game-list');
        let showlist = ``;
        for (let i = 0; i < list.length; i++) {
            showlist += `                        
            <div class="col-md-3">
             <div data-id="${list[i].id}" class="card det text-center bg-transparent text-white" role="button">
                <div class="card-body">
                    <img src="${list[i].thumbnail}" alt="game" class="rounded-3 w-100">
                    <div class="d-flex flex-row justify-content-between align-items-center">
                        <h5 class="card-title">${list[i].title}</h5>
                        <span class="badge bg-primary ">Free</span>
                    </div>
                    <p class="card-text text-secondary">${this.formatDes(list[i]["short_description"])}</p>
                </div>
                <div class=" card-footer text-muted">
                    <div class="d-flex flex-row justify-content-between align-items-center ">
                        <span class="badge bg-dack-light">${list[i].genre}</span>
                        <span class="badge bg-dack-light">${list[i].platform}</span>
                    </div>
                </div>
             </div>
            </div>`;
        }
        elem.innerHTML = showlist;
    }
    displayDetails(dt) {
        let elem = document.getElementById('g-detail');
        let showlist = `                        
            <div class="col-md-4">
                    <img src="${dt.thumbnail}" alt="game1" class="w-100">
                </div>
                <div class="col-md-8 text-start">
                    <h3>Title: ${dt.title}</h3>
                    <p>Category: <span class="badge bg-blue-light text-dark">${dt.genre}</span></p>
                    <p>Platform: <span class="badge bg-blue-light text-dark">${dt.platform}</span></p>
                    <p>Status: <span class="badge bg-blue-light text-dark">${dt.status}</span></p>
                    <p>${dt.description}</p>
                    <a href="${dt.game_url}" target="_blank"><button class="btn btn-outline-warning  text-white "> Show Game</button></a>
                </div>`;

        elem.innerHTML = showlist;
    }
}