document.addEventListener('DOMContentLoaded', () => {
  const searchOne = document.querySelector('.player-one-search');
  const searchTwo = document.querySelector('.player-two-search');

  const loadPlayers = (name) => {
    fetch(`https://www.balldontlie.io/api/v1/players?search=${name}`)
      .then(res => res.json())
      .then(data => {
        console.log(data)
        data.data.forEach(el => {
          d3.select('body')
            .append('button')
            .text(`${el.first_name} ${el.last_name}`)
            .on('click', () => {
              fetch(`https://www.balldontlie.io/api/v1/season_averages?season=2018&player_ids[]=${el.id}`)
                .then(res => res.json())
                .then(data => {
                  console.log(data)
                  d3.select('body')
                    .append('p')
                    .text(`${data.data[0].pts} ${data.data[0].reb} ${data.data[0].ast}`)
                });
            })
        })
      })
  };

  searchOne.addEventListener('keyup', (e) => {
    loadPlayers(e.target.value)
  })
})