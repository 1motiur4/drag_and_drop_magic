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

  mousedown(event) {
    this.isDragging = true;

    this.initialX = event.clientX - this.xOffset;
    this.initialY = event.clientY - this.yOffset;

    this.element.style.border = `solid 5px`
    this.element.style.borderColor = `blueviolet`
  }
  mouseup() {
    this.isDragging = false;
    this.element.style.border = ``

  }
  mousemove(event) {
    if (!this.isDragging) {
      return;
    }

    this.xOffset = event.clientX - this.initialX;
    this.yOffset = event.clientY - this.initialY;

    this.element.style.transform = `translate(${this.xOffset}px, ${this.yOffset}px)`;
  }
}
