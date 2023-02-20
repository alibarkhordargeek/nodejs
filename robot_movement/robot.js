const fs = require("fs")

class robot {
  constructor(x = 0, y = 0, f = "NORTH") {
    this.x = x
    this.y = y
    this.f = f
  }

  place({ x, y, f }) {
    this.x = x
    this.y = y
    this.f = f
  }

  move() {
    if (this.f === "NORTH") {
      if (this.y === 5) return
      this.y ++
    } else if (this.f === "SOUTH") {
      if (this.y === 0) return
      this.y --
    } else if (this.f === "WEST") {
      if (this.x === 0) return
      this.x --
    } else if (this.f === "EAST"){
      if (this.x === 5) return
      this.x ++
    }
  }

  left() {
    if (this.f === "NORTH") {
      this.f = "WEST"
    } else if (this.f === "WEST") {
      this.f = "SOUTH"
    } else if (this.f === "SOUTH") {
      this.f = "EAST"
    } else if (this.f === "EAST"){
      this.f = "NORTH"
    }
  }
  
  right() {
    if (this.f === "NORTH") {
      this.f = "EAST"
    } else if (this.f === "EAST") {
      this.f = "SOUTH"
    } else if (this.f === "SOUTH") {
      this.f = "WEST"
    } else if (this.f === "WEST"){
      this.f = "NORTH"
    }
  }

  report() {
    const current_location = `The robot is at ${this.x}, ${this.y}, ${this.f}`
    console.log(current_location)
  }
}

function readOrders() {
  const my_robot = new robot()
  const file = fs.readFileSync("./orders.txt").toString()
  file.split(/\n/).forEach((command) => {
    if (command.match(/^PLACE/)) {
      const locates = command.replace("PLACE", "").trim().split(",")
      const entries = {
        x: Number(locates[0]),
        y: Number(locates[1]),
        f: locates[2],
      }
      my_robot.place(entries)
    }
    else if (command.match(/^MOVE/)) {
      my_robot.move()
    }
    else if (command.match(/^LEFT/)) {
      my_robot.left()
    }
    else if (command.match(/^RIGHT/)) {
      my_robot.right()
    }
    else if (command.match(/^REPORT/)) {
      my_robot.report()
    }
  })
}

readOrders()
