import { Component, OnInit } from '@angular/core';

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

    constructor() { }

    ngOnInit() {
        this.initApp();
        const el = document.getElementById('loader-wrapper');
        if (el) {
            el.classList.add('loaded');
        }
    }

    initApp() {
        this.hiddenSocialIcons = false;
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
}
