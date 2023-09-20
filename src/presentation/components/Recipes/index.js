import {Item} from "./components/Item";
import './styles.scss';

class Recipes {
  #block = document.createElement('div');
  #recipes = [];

  update(recipes) {
    this.#recipes = recipes;

    this.render();
  }

  render() {
    this.#block.innerHTML = '';

    this.#recipes.forEach((recipe, index) => {
      const itemClassName = `recipes__item_${index % 2 === 0 ? 'odd' : 'even'}`;

      const recipeItem = new Item(recipe, itemClassName);

      this.#block.appendChild(recipeItem.render());
    });

    return this.#block;
  }
}

export { Recipes };
