import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  connect() {
    console.log("Hello coconut")
  }

  mousedown() {
    console.log("mousedown wee!")
  }
  mouseup() {
    console.log("mouseup wee!")
  }
  mousemove() {
    console.log("mousemove wee!")
  }
}
