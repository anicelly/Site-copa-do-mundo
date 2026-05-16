const jogadoresFora = [

    {
        nome: "Paul Pogba",
        pais: "França",
        imagem: "https://wallpapers.com/images/hd/france-national-football-team-paul-pogba-painted-art-rdhkocy7rzz1hwgn.jpg",
        motivo: "Suspensão e problemas físicos afastaram o meio-campista."
    },

    {
        nome: "David Alaba",
        pais: "Áustria",
        imagem: "https://pbs.twimg.com/media/ClOJ3ZjWYAAJsgL.jpg",
        motivo: "Recuperação longa após grave lesão."
    },

    {
        nome: "Gavi",
        pais: "Espanha",
        imagem: "https://mir-s3-cdn-cf.behance.net/projects/404/350234157608533.Y3JvcCwzMDI0LDIzNjUsMCw4MzA.jpg",
        motivo: "Lesão séria no joelho."
    },

    {
        nome: "Thibaut Courtois",
        pais: "Bélgica",
        imagem: "https://wallpapers4screen.com/Uploads/19-5-2025/76979/thumb-thibaut-courtois-real-madrid-belgian-footballer-green-stone-art-grunge-art.jpg",
        motivo: "Problemas físicos impediram retorno."
    },

    {
        nome: "Xavi Simons",
        pais: "Holanda",
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTwwfNPdkCkRosbtwvYktOuw2eP-vriWRy6g&s",
        motivo: "Ficou fora após decisão técnica e forte concorrência no elenco."
    },

    {
        nome: "Rodrygo",
        pais: "Brasil",
        imagem: "https://wallpapers4screen.com/Uploads/4-4-2025/71820/thumb-rodrygo-brazil-national-football-team-brazilian-football-player-yellow-stone-background-grunge-art.jpg",
        motivo: "Não convocado devido à reformulação tática da seleção."
    }

];

const container = document.getElementById("fora-container");

jogadoresFora.forEach(jogador => {

    const card = `
    
        <div class="card">

            <img src="${jogador.imagem}" alt="${jogador.nome}">

            <div class="card-content">

                <h2>${jogador.nome}</h2>

                <h3>❌ ${jogador.pais}</h3>

                <p>${jogador.motivo}</p>

            </div>

        </div>

    `;

    container.innerHTML += card;

});