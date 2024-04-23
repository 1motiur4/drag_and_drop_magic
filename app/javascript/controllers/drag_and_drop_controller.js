import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  connect() {
    console.log("Hello coconut");
  }

  initialize() {
    this.isDragging = false;
    this.xOffset = 0;
    this.yOffset = 0;
  }

  mousedown() {
    this.isDragging = true;
    console.log("mousedown wee!");
  }
  mouseup() {
    this.isDragging = false;
    console.log("mouseup wee!");
  }
  mousemove() {
    if (!this.isDragging) {
      return;
    }
    console.log("mousemove wee!");
  }
}
