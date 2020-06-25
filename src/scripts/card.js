document.addEventListener('DOMContentLoaded', () => {
  d3.csv("src/data/career.csv")
    .then(data => {
      // PLAYER CARD ELEMENTS
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

      // PLAYER CARD METHODS
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

          name[0].classList.remove('hidden')
          position[0].classList.remove('hidden')
          height[0].classList.remove('hidden')

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

          name[1].classList.remove('hidden')
          position[1].classList.remove('hidden')
          height[1].classList.remove('hidden')

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

        name[idx].classList.add('hidden')
        position[idx].classList.add('hidden')
        height[idx].classList.add('hidden')

        playerImg[idx].style.backgroundImage = ""
      }

      // PLAYER BUTTONS
      const buttons = Array.from(document.querySelectorAll('.player-button'));

      buttons.forEach(button => {
        const idx = data.indexOf(data.find(el => el.name === button.innerHTML))

        button.addEventListener("click", () => {
          if (name[0].innerHTML  === data[idx].name) {
            closeStats(0);
            button.classList.remove('active');
          } else if (name[1].innerHTML  === data[idx].name) {
            closeStats(1);
            button.classList.remove('active');
          } else {
            if (!name[0].innerHTML || !name[1].innerHTML) {
              button.classList.add('active');
            }
      
            addStats(data[idx]);
          }
        });
      });
    });
})