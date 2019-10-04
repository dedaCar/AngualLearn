import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Recipe} from '../recepies/recipe.model';
import {RecipeService} from '../recepies/recipe.service';
import {map, tap} from 'rxjs/operators';

@Injectable()
export class DataStorageService {

  constructor(private http: HttpClient, private recipeService: RecipeService) {
  }


  storeRecipes() {
    const recipes = this.recipeService.getRecipes();
    this.http.put('https://course-app-50f22.firebaseio.com/recipes.json',
      recipes).subscribe(response => {
      console.log(response);
    });
  }

  fetchRecipes() {
    return this.http.get<Recipe[]>('https://course-app-50f22.firebaseio.com/recipes.json')
    // @ts-ignore
      .pipe(map(recipe => {
        // @ts-ignore
        // tslint:disable-next-line:no-shadowed-variable
        return recipe.map(recipe => {
          return {...recipe, ingredients: recipe.ingredients ? recipe.ingredients : []};
        }); // js map!! not rxjs!!!
      }), tap(recipe => {
        this.recipeService.setRecipes(recipe);
      }));
  }

}
