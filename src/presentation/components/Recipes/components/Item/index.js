import './styles.scss';

class Item {
  #block = document.createElement('div');
  #recipe;

  constructor(recipe, className) {
    this.#recipe = recipe;
    this.#block.className = 'item' + ' ' + className;
  }

  render() {
    const image = document.createElement('img');

    image.className = 'item__image';
    image.src = this.#recipe.image;

    this.#block.appendChild(image);

    const link = document.createElement('a');

    link.className = 'item__link';

    link.href = this.#recipe.url;
    link.innerText = this.#recipe.name;

    this.#block.appendChild(link);

    return this.#block;
  }
}

export { Item };
