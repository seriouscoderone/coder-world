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
  changeYBy(value) {
    this.y = this.y + value
  }
  whenGreenFlagClicked() {
    this.setXTo(-215)
    this.setYTo(163)
    // eslint-disable-next-line no-constant-condition
    while(true) {
      this.changeXBy(1)
      this.changeYBy(-1)
    }
  }
}