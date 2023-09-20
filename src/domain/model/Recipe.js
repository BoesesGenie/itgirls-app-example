class Recipe {
  #url;
  #image;
  #name;

  constructor(url, image, name) {
    this.#url = url;
    this.#image = image;
    this.#name = name;
  }

  get url() {
    return this.#url;
  }

  get image() {
    return this.#image;
  }

  get name() {
    return this.#name;
  }
}

export default Recipe;
