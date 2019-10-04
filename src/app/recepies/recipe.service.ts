import {Recipe} from './recipe.model';
import {Injectable} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from '../shoping-list/shopping-list.service';
import {Subject} from 'rxjs';

@Injectable()
export class RecipeService {
  recipesChanged = new Subject<Recipe>();

  // private recipes: Recipe[] = [
  //   // tslint:disable-next-line:max-line-length
  // // tslint:disable-next-line:max-line-length
  //   new Recipe('Tasty Schnitzel', 'A super-tasty Schnitzel', 'https://www.thespruceeats.com/thmb/dFLHcwFFtDguBZGylUlDN8KaNaw=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/wiener-schnitzel-recipe-1447089-Hero-5b587d6c46e0fb0071b0059d.jpg', [
  //     new Ingredient('Meat', 1),
  //     new Ingredient('French Fries', 20)
  //   ]),
  //   // tslint:disable-next-line:max-line-length
  // // tslint:disable-next-line:max-line-length
  //   new Recipe('Big Fat Burger', 'What else you need to say', 'https://thecheekychickpea.com/wp-content/uploads/2018/07/IMG_1013-2.jpg', [
  //     new Ingredient('Buns', 2),
  //     new Ingredient('Meat', 1)
  //   ])
  // ];

   private recipes: Recipe[] = [];

  constructor(private slService: ShoppingListService) {
  }


  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    // @ts-ignore
    this.recipesChanged.next(this.recipes.slice());
  }

  getRecipes = () => this.recipes.slice();

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    // @ts-ignore
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    // @ts-ignore
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    // @ts-ignore
    this.recipesChanged.next(this.recipes.slice());
  }

}
