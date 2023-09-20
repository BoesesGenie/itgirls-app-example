import './assets/global.scss';
import {TaskForm} from './presentation/components/TaskForm';
import RecipeRepository from "./domain/service/RecipeRepository";
import {Recipes} from "./presentation/components/Recipes";

const repository = new RecipeRepository();
const recipes = new Recipes();

const onSubmit = async (data) => {
  const result = await repository.find(data.query);

  recipes.update(result);
}

const form = new TaskForm(onSubmit);

const root = document.getElementById('root');

root.appendChild(form.render());
root.appendChild(recipes.render());
