document.addEventListener('DOMContentLoaded', () => {
  const sample = [
    { name: "bob bobson", pos: "SG", ht: "6'6", pts: "25", reb: "5", ast: "5", stl: "1", blk: "2", to: "3" },
    { name: "rob robson", pos: "SF", ht: "6'7", pts: "26", reb: "6", ast: "6", stl: "2", blk: "3", to: "2" },
    { name: "dob dobson", pos: "PF", ht: "6'8", pts: "27", reb: "7", ast: "7", stl: "0", blk: "1", to: "4" }]

  const name = Array.from(document.querySelectorAll(".player-name"))
  const position = Array.from(document.querySelectorAll(".player-pos"))
  const height = Array.from(document.querySelectorAll(".player-height"))
  const points = Array.from(document.querySelectorAll(".points"))
  const rebounds = Array.from(document.querySelectorAll(".rebounds"))
  const assists = Array.from(document.querySelectorAll(".assists"))
  const steals = Array.from(document.querySelectorAll(".steals"))
  const blocks = Array.from(document.querySelectorAll(".blocks"))
  const turnovers = Array.from(document.querySelectorAll(".turnovers"))
  const button = document.querySelector(".player-button");

  const addStats = (data) => {
    if (points[0].innerHTML === "PTS:") {
      // SET FIRST CARD DATA
      name[0].innerHTML = `${data[0].name}`
      position[0].innerHTML = `${data[0].pos}`
      height[0].innerHTML = `${data[0].ht}`
      points[0].innerHTML = `PTS: ${data[0].pts}`
      rebounds[0].innerHTML = `REB: ${data[0].reb}`
      assists[0].innerHTML = `AST: ${data[0].ast}`
      steals[0].innerHTML = `STL: ${data[0].stl}`
      blocks[0].innerHTML = `BLK: ${data[0].blk}`
      turnovers[0].innerHTML = `TO: ${data[0].to}`

      closeOne.classList.remove('hidden')
    } else if (points[1].innerHTML === "PTS:") {
      // SET 2ND CARD DATA
      name[1].innerHTML = `${data[1].name}`
      position[1].innerHTML = `${data[1].pos}`
      height[1].innerHTML = `${data[1].ht}`
      points[1].innerHTML = `PTS: ${data[1].pts}`
      rebounds[1].innerHTML = `REB: ${data[1].reb}`
      assists[1].innerHTML = `AST: ${data[1].ast}`
      steals[1].innerHTML = `STL: ${data[1].stl}`
      blocks[1].innerHTML = `BLK: ${data[1].blk}`
      turnovers[1].innerHTML = `TO: ${data[1].to}`

      closeTwo.classList.remove('hidden')
    } else {
      // REPLACE 2ND CARD DATA
      name[1].innerHTML = `${data[2].name}`
      position[1].innerHTML = `${data[2].pos}`
      height[1].innerHTML = `${data[2].ht}`
      points[1].innerHTML = `PTS: ${data[2].pts}`
      rebounds[1].innerHTML = `REB: ${data[2].reb}`
      assists[1].innerHTML = `AST: ${data[2].ast}`
      steals[1].innerHTML = `STL: ${data[2].stl}`
      blocks[1].innerHTML = `BLK: ${data[2].blk}`
      turnovers[1].innerHTML = `TO: ${data[2].to}`
    }
  }

  button.addEventListener("click", () => {
    addStats(sample);
  })

  // CLOSE BUTTONS
  const closeOne = document.querySelector('.close-one')
  const closeTwo = document.querySelector('.close-two')

  closeOne.addEventListener('click', () => {
    name[0].innerHTML = ""
    position[0].innerHTML = ""
    height[0].innerHTML = ""
    points[0].innerHTML = "PTS:"
    rebounds[0].innerHTML = "REB:"
    assists[0].innerHTML = "AST:"
    steals[0].innerHTML = "STL:"
    blocks[0].innerHTML = "BLK:"
    turnovers[0].innerHTML = "TO:"

    closeOne.classList.add('hidden')
  })

  closeTwo.addEventListener('click', () => {
    name[1].innerHTML = ""
    position[1].innerHTML = ""
    height[1].innerHTML = ""
    points[1].innerHTML = "PTS:"
    rebounds[1].innerHTML = "REB:"
    assists[1].innerHTML = "AST:"
    steals[1].innerHTML = "STL:"
    blocks[1].innerHTML = "BLK:"
    turnovers[1].innerHTML = "TO:"

    closeTwo.classList.add('hidden')
  })

  // d3.csv("src/data/career.csv")
  //   .then(data => {
  //     console.log(data)
  //     d3.select(".player-select")
  //       .append('button')
  //       .text("click me")
  //   })
})