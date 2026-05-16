const favoritas = [

    {
        selecao: "Brasil",
        estrela: "Endrick",
        imagem: "https://i.pinimg.com/474x/2b/09/7f/2b097fd8e412da82acc51ace5bf97477.jpg",
        descricao: "A Seleção Brasileira chega forte com uma geração jovem extremamente talentosa.",
        chance: "92%"
    },

    {
        selecao: "França",
        estrela: "Kylian Mbappé",
        imagem: "https://i.pinimg.com/564x/d0/bb/e2/d0bbe208790eaff9404f3c7c11545911.jpg",
        descricao: "Velocidade, profundidade de elenco e experiência fazem da França uma favorita.",
        chance: "90%"
    },

    {
        selecao: "Argentina",
        estrela: "Julián Álvarez",
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgJ_PVNhclZDOQovC7lmDkLFBS3Fqw3rcD1A&s",
        descricao: "Atual campeã mundial, a Argentina mantém uma base extremamente competitiva.",
        chance: "88%"
    },

    {
        selecao: "Inglaterra",
        estrela: "Jude Bellingham",
        imagem: "https://thumbs.dreamstime.com/b/logotipo-da-equipa-de-futebol-do-nacional-inglaterra-117115926.jpg",
        descricao: "A Inglaterra possui uma das gerações mais completas do futebol europeu.",
        chance: "86%"
    },

    {
        selecao: "Espanha",
        estrela: "Lamine Yamal",
        imagem: "https://upload.wikimedia.org/wikipedia/pt/3/31/Spain_National_Football_Team_badge.png",
        descricao: "A Espanha aposta em jovens craques e em um futebol extremamente técnico.",
        chance: "84%"
    },

    {
        selecao: "Portugal",
        estrela: "Cristiano Ronaldo",
        imagem: "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/482.png",
        descricao: "Portugal mistura juventude e experiência em um elenco muito perigoso.",
        chance: "82%"
    }

];

const container = document.getElementById("favoritas-container");

favoritas.forEach(time => {

    const card = `

        <div class="card">

            <img src="${time.imagem}" alt="${time.selecao}">

            <div class="card-content">

                <h2>🏆 ${time.selecao}</h2>

                <h3>⭐ Estrela: ${time.estrela}</h3>

                <p>${time.descricao}</p>

                <div class="chance">

                    <strong>Chance de título: ${time.chance}</strong>

                    <div class="barra">

                        <div class="preenchimento" style="width:${time.chance}"></div>

                    </div>

                </div>

            </div>

        </div>

    `;

    container.innerHTML += card;

});