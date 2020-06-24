document.addEventListener('DOMContentLoaded', () => {
  // DATA
  const sample = [
    { name: "bob bobson", pos: "SG", ht: "6'6", pts: "25", reb: "5", ast: "5", stl: "1", blk: "2", to: "3", img: 'src/images/jordan.png' },
    { name: "rob robson", pos: "SF", ht: "6'7", pts: "26", reb: "6", ast: "6", stl: "2", blk: "3", to: "2", img: 'src/images/harden.png' },
    { name: "dob dobson", pos: "PF", ht: "6'8", pts: "27", reb: "7", ast: "7", stl: "0", blk: "1", to: "4", img: 'src/images/lebron.png' }
  ];

  // PLAYER CARD STATS
  const player = Array.from(document.querySelectorAll('.player-card-details'));
  const playerImg = Array.from(document.querySelectorAll('.player-photo'));

  const name = Array.from(document.querySelectorAll(".player-name"));
  const position = Array.from(document.querySelectorAll(".player-pos"));
  const height = Array.from(document.querySelectorAll(".player-height"));
  const points = Array.from(document.querySelectorAll(".points"));
  const rebounds = Array.from(document.querySelectorAll(".rebounds"));
  const assists = Array.from(document.querySelectorAll(".assists"));
  const steals = Array.from(document.querySelectorAll(".steals"));
  const blocks = Array.from(document.querySelectorAll(".blocks"));
  const turnovers = Array.from(document.querySelectorAll(".turnovers"));

  const addStats = (data) => {
    if (points[0].innerHTML === "PTS:" && data.name !== name[1].innerHTML) {
      // SET FIRST CARD DATA
      name[0].innerHTML = `${data.name}`
      position[0].innerHTML = `${data.pos}`
      height[0].innerHTML = `${data.ht}`
      points[0].innerHTML = `PTS: ${data.pts}`
      rebounds[0].innerHTML = `REB: ${data.reb}`
      assists[0].innerHTML = `AST: ${data.ast}`
      steals[0].innerHTML = `STL: ${data.stl}`
      blocks[0].innerHTML = `BLK: ${data.blk}`
      turnovers[0].innerHTML = `TO: ${data.to}`

      // const img = document.query('img')
      // img.src = data.img
      // img.id = 'player-1-photo'

      // player[0].appendChild(img)
      playerImg[0].style.backgroundImage = `url(${data.img})`
    } else if (points[1].innerHTML === "PTS:" && data.name !== name[0].innerHTML) {
      // SET 2ND CARD DATA
      name[1].innerHTML = `${data.name}`
      position[1].innerHTML = `${data.pos}`
      height[1].innerHTML = `${data.ht}`
      points[1].innerHTML = `PTS: ${data.pts}`
      rebounds[1].innerHTML = `REB: ${data.reb}`
      assists[1].innerHTML = `AST: ${data.ast}`
      steals[1].innerHTML = `STL: ${data.stl}`
      blocks[1].innerHTML = `BLK: ${data.blk}`
      turnovers[1].innerHTML = `TO: ${data.to}`

      // const img = document.createElement('img')
      // img.src = data.img
      // img.id = 'player-2-photo'

      // player[1].appendChild(img)
      playerImg[1].style.backgroundImage = `url(${data.img})`
    } 
    // else {
    //   // REPLACE 2ND CARD DATA
    //   if (name[0].innerHTML !== data.name) {
    //     name[1].innerHTML = `${data.name}`
    //     position[1].innerHTML = `${data.pos}`
    //     height[1].innerHTML = `${data.ht}`
    //     points[1].innerHTML = `PTS: ${data.pts}`
    //     rebounds[1].innerHTML = `REB: ${data.reb}`
    //     assists[1].innerHTML = `AST: ${data.ast}`
    //     steals[1].innerHTML = `STL: ${data.stl}`
    //     blocks[1].innerHTML = `BLK: ${data.blk}`
    //     turnovers[1].innerHTML = `TO: ${data.to}`
    //   }
    // }
  };

  const closeStats = (idx) => {
    name[idx].innerHTML = ""
    position[idx].innerHTML = ""
    height[idx].innerHTML = ""
    points[idx].innerHTML = "PTS:"
    rebounds[idx].innerHTML = "REB:"
    assists[idx].innerHTML = "AST:"
    steals[idx].innerHTML = "STL:"
    blocks[idx].innerHTML = "BLK:"
    turnovers[idx].innerHTML = "TO:"

    playerImg[idx].style.backgroundImage = ""
    // const playerImg = document.getElementById(`player-${idx + 1}-photo`)
    // player[idx].removeChild(playerImg)
  }

  // PLAYER BUTTONS
  const buttons = Array.from(document.querySelectorAll('.player-button'));

  buttons.forEach(button => {
    const idx = sample.indexOf(sample.find(el => el.name === button.innerHTML))

    button.addEventListener("click", () => {
      if (name[0].innerHTML  === sample[idx].name) {
        closeStats(0);
        button.classList.remove('active');
      } else if (name[1].innerHTML  === sample[idx].name) {
        closeStats(1);
        button.classList.remove('active');
      } else {
        if (!name[0].innerHTML || !name[1].innerHTML) {
          button.classList.add('active');
        }
  
        addStats(sample[idx]);
      }
    });
  });

  // d3.csv("src/data/career.csv")
  //   .then(data => {
  //     console.log(data)
  //     d3.select(".player-select")
  //       .append('button')
  //       .text("click me")
  //   });
})