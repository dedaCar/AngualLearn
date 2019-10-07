import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Recipe} from '../recepies/recipe.model';
import {RecipeService} from '../recepies/recipe.service';
import {exhaustMap, map, take, tap} from 'rxjs/operators';
import {AuthService} from '../auth/auth.service';

@Injectable()
export class DataStorageService {

  constructor(private http: HttpClient, private recipeService: RecipeService, private authService: AuthService) {
  }


  storeRecipes() {
    const recipes = this.recipeService.getRecipes();
    this.http.put('https://course-app-50f22.firebaseio.com/recipes.json',
      recipes).subscribe(response => {
      console.log(response);
    });
  }

  fetchRecipes() {
      return this.http.get<Recipe[]>('https://course-app-50f22.firebaseio.com/recipes.json'
    ).pipe( map(recipe => {
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
