/* eslint-disable linebreak-style */
class Hero extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <div class="hero" id="hero">
          <picture class="hero__img">
          <source type="image/webp" media="(max-width: 480px)" srcset="./images/heros/hero.webp">
          <source type="image/webp" media="(max-width: 800px)" srcset="./images/heros/hero.webp">
          <source type="image/webp" srcset="./hero-image_4.webp">
          <source type="image/png" media="(max-width: 480px)" srcset="./images/heros/hero.png">
          <source type="image/png" media="(max-width: 800px)" srcset="./images/heros/hero.png">
              <img src="./images/heros/hero.png" alt="restaurant hero image">
          </picture>
          <div class="hero__content">
              <h1 tabindex="0" class="hero__title">Temukan Restoran Favoritmu Disini</h1>
              <p tabindex="0" class="hero__tagline">Jelajahi berbagai restoran untuk menemukan makanan yang cocok untukmu</p>
          </div>
      </div>
      `;
  }
}

customElements.define('hero-element', Hero);
