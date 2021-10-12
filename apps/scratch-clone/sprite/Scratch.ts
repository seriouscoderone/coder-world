export default class Scratch {
  x: number // 100
  y: number
  setXTo(value: number) {
    this.x = value
  }
  setYTo(value: number) {
    this.y = value
  }
  changeXBy(value) {
    this.x = this.x + value
  }
  whenGreenFlagClicked() {
    this.setXTo(100)
    this.setYTo(50)
  }
}