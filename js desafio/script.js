const selecoes = [

    {
        pais: "Brasil",
        estrela: "Endrick",
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXxEybZKyIs9hLELO8xBnw6EMOTY0-aZOGrA&s",
        descricao: "A maior promessa brasileira para a Copa do Mundo de 2026."
    },

    {
        pais: "Argentina",
        estrela: "Julián Álvarez",
        imagem: "https://wallpapers4screen.com/Uploads/9-4-2025/72318/thumb2-julian-alvarez-argentina-national-football-team-blue-stone-background-argentine-football-player-grunge-art.jpg",
        descricao: "A nova referência ofensiva da Argentina."
    },

    {
        pais: "França",
        estrela: "Kylian Mbappé",
        imagem: "https://wallpapers4screen.com/Uploads/28-1-2026/99157/thumb2-kylian-mbappe-france-national-football-team-french-footballer-blue-stone-background-grunge-art.jpg",
        descricao: "Velocidade e talento impressionantes."
    },

    {
        pais: "Portugal",
        estrela: "Cristiano Ronaldo",
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2TggURAF9ZFHBs5_5uRhepAZT6dLQ_-OnOg&s",
        descricao: "A lenda portuguesa segue brilhando."
    },

    {
        pais: "Inglaterra",
        estrela: "Jude Bellingham",
        imagem: "https://i.pinimg.com/736x/da/c3/b2/dac3b239e6f56e984d92b8008e94c5f7.jpg",
        descricao: "O maestro da nova geração inglesa."
    },

    {
        pais: "Noruega",
        estrela: "Erling Haaland",
        imagem: "https://wallpapers4screen.com/Uploads/13-4-2026/107278/thumb-erling-haaland-norway-national-football-team-portrait-norwegian-footballer-2026.jpg",
        descricao: "Força física e muitos gols."
    },

    {
        pais: "Espanha",
        estrela: "Lamine Yamal",
        imagem: "https://m.media-amazon.com/images/I/71tXUSzj44L._AC_UF894,1000_QL80_.jpg",
        descricao: "A joia da nova geração espanhola."
    },

    {
        pais: "Alemanha",
        estrela: "Jamal Musiala",
        imagem: "https://cdn.displate.com/artwork/270x380/2024-11-26/be1f9e06-55b6-4686-9cd7-cc086f182037.jpg",
        descricao: "Criatividade e habilidade impressionantes."
    }

]

const container = document.getElementById("cards-container")

selecoes.forEach(selecao => {

    const card = `
    
        <div class="card">

            <img src="${selecao.imagem}" alt="${selecao.estrela}">

            <div class="card-content">

                <h2>${selecao.pais}</h2>

                <h3>⭐ ${selecao.estrela}</h3>

                <p>${selecao.descricao}</p>

            </div>

        </div>
    
    `

    container.innerHTML += card
})