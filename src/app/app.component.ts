import { Component, OnInit } from '@angular/core';

import { MyDialogComponent } from './my-dialog/my-dialog.component';

import { MatDialog } from '@angular/material';

export class Recipe {
    id: number;
    title: string;
    ingredients: string;
    active: boolean;

    constructor(id: number, title: string, ingedients: string, active: boolean) {
        this.id = id;
        this.title = title;
        this.ingredients = ingedients;
        this.active = active;
    }
}

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

    hiddenSocialIcons = true;
    recipeList: Recipe[] = [
        new Recipe(0, 'cake', 'potato, oil, apple', false),
        new Recipe(1, 'cake with lemon', 'potato, oil, lemon', false),
        new Recipe(2, 'fried chicken', 'chicken, oil, onion', false)];

    dialogResult;

    constructor(private dialog: MatDialog) { }

    ngOnInit() {
        this.initApp();
        const el = document.getElementById('loader-wrapper');
        if (el) {
            el.classList.add('loaded');
        }
    }

    initApp() {
        this.hiddenSocialIcons = false;
        this.readLocalStorage();
    }

    toggleSocialIconsState() {
        this.hiddenSocialIcons = !this.hiddenSocialIcons;
    }

    addNewRecipe() {
        //
    }

    enlarge(recipeId: number) {
        this.recipeList.forEach(item => {
            item.active = item.id === recipeId && item.active === false ? true : false;
        });
    }

    openDialog(recipe: Recipe) {
        let data: Object;
        if (recipe) {
            data = {
                dialogTitle: 'Edit Recipe',
                buttonTitle: 'Edit Recipe',
                isNew: false,
                recipeName: recipe.title,
                recipeIngredients: recipe.ingredients
            };
        } else {
            data = {
                dialogTitle: 'Add a Recipe',
                buttonTitle: 'Add new Recipe',
                isNew: true
            };
        }

        const dialogRef = this.dialog.open(MyDialogComponent, {
            width: '600px',
            data: data
        });

        dialogRef.afterClosed().subscribe(result => {
            if (result !== undefined && result !== 'Cancel') {

                let updated = false;
                let lastIndex = 0;
                const recipes = this.recipeList.forEach(item => {
                    if (item.title === result['recipeName']) {
                        item.ingredients = result['recipeIngredients'];
                        updated = true;
                    }

                    lastIndex = item.id;
                });

                if (!updated) {
                    if (!result['recipeName']) {
                        result['recipeName'] = 'Untitled';
                    }
                    this.recipeList.push(new Recipe(lastIndex + 1, result['recipeName'], result['recipeIngredients'], false));
                }

                this.updateLocalStorage();
            }
        });
    }

    deleteReciper(recipe: Recipe) {
        const recipeListTmp = this.recipeList.filter(item => {
            return item.id !== recipe.id;
        });

        this.recipeList = recipeListTmp;
    }

    readLocalStorage() {
        const data = localStorage.getItem('_username_recipes');

        if (data) {
            this.recipeList = JSON.parse(data);
        }
    }

    updateLocalStorage() {
        localStorage.setItem('_username_recipes', JSON.stringify(this.recipeList));
    }
}
