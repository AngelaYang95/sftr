'use strict';

/** Navigation bar that hides on scroll down. */
class NavBar extends HTMLElement {
	constructor() {
		super();
		this.isAnimating = false;
		this.oldY = 0;
		this.handleScroll = this.handleScroll.bind(this);
	}

 	connectedCallback() {    
		window.addEventListener("scroll", this.handleScroll);
  }

	handleScroll(e) {
		this.isAnimating = true;

		const target = e.currentTarget;
	  const isScrollUp = this.oldY > target.scrollY;
    if (isScrollUp)
      this.removeAttribute('hide');
    else
      this.setAttribute('hide', '');

    this.oldY = target.scrollY;
	  setTimeout(() => this.isAnimating = false, 500);
	}
}

window.customElements.define('nav-bar', NavBar);
