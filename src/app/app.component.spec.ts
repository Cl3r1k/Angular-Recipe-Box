import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import { AppComponent, Recipe } from './app.component';
import { By } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material';

describe('AppComponent', () => {
    let component: AppComponent;
    let fixture: ComponentFixture<AppComponent>;
    let addNewBtnEl;
    let editBtnEl;
    let deleteBtnEl;
    let expextedRecipeList: Recipe[];

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                AppComponent
            ],
            imports: [FormsModule, MatDialogModule]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AppComponent);
        component = fixture.componentInstance;

        expextedRecipeList = [
            new Recipe(0, 'cake', 'potato, oil, apple', false),
            new Recipe(1, 'cake with lemon', 'potato, oil, lemon', false),
            new Recipe(2, 'fried chicken', 'chicken, oil, onion', false)];

        fixture.detectChanges();

        addNewBtnEl = fixture.debugElement.query(By.css('.add-new'));       // Find add-new button element
        editBtnEl = fixture.debugElement.queryAll(By.css('.edit-button'))[0].nativeElement;       // Find edit button element
        deleteBtnEl = fixture.debugElement.queryAll(By.css('.delete-button'))[0].nativeElement;       // Find delete button element

        // console.log('%caddNewBtnEl: ', 'color: red;', addNewBtnEl);
        // console.log('%ceditBtnEl: ', 'color: red;', editBtnEl);
        // console.log('%cdeleteBtnEl: ', 'color: red;', deleteBtnEl);

        fixture.detectChanges();
    });

    it('should create the app (async)', async(() => {
        // Arrange

        // Act

        // Assert
        expect(component).toBeTruthy();
    }));

    it('should render title in a h2 tag (async)', async(() => {
        // Arrange

        // Act
        const compiled = fixture.debugElement.nativeElement;

        // Assert
        expect(compiled.querySelector('h2').textContent).toContain('Recipe Box');
    }));

    it(`should have initial params (async)`, async(() => {
        // Arrange

        // Act

        // Assert
        expect(component.hiddenSocialIcons).toBe(false, 'actually hiddenSocialIcons should be true, but changed in ngOnInit');
        expect(component.iconsHovered).toEqual(false);
        expect(component.dialogResult).toBe(undefined);
        // Testet length, as far onInit, loaded data from localStorage as Object[] but not as Recipe[]
        expect(component.recipeList.length).toEqual(expextedRecipeList.length);
    }));

    describe('#initApp', () => {
        it(`should init app with initial params (async)`, async(() => {
            // Arrange

            // Act
            component.initApp();

            // Assert
            expect(component.hiddenSocialIcons).toEqual(false);
        }));
    });

    describe('#toggleSocialIconsState', () => {
        it(`should revert 'hiddenSocialIcons' state (async)`, async(() => {
            // Arrange
            component.hiddenSocialIcons = true;

            // Act
            component.toggleSocialIconsState();

            // Assert
            expect(component.hiddenSocialIcons).toEqual(false);
        }));
    });

    describe('#enlarge', () => {
        it(`should revert 'active' state for given recipe.id (async)`, async(() => {
            // Arrange

            // Act
            component.enlarge(1);

            // Assert
            expect(component.recipeList[1].active).toEqual(true);
        }));
    });

    describe('#readLocalStorage', () => {
        it(`should read data from localStorage (async)`, async(() => {
            // Arrange

            // Act
            component.readLocalStorage();

            // Assert
            expect(component.recipeList.length).toEqual(3);
        }));
    });

    describe('#deleteRecipe', () => {
        it(`should delete recipe (async)`, async(() => {
            // Arrange

            // Act
            component.deleteRecipe(component.recipeList[1]);

            // Assert
            expect(component.recipeList.length).toEqual(2);
        }));
    });

    describe('#updateLocalStorage', () => {
        it(`should read data from localStorage (async)`, async(() => {
            // Arrange - restore initial values
            component.recipeList = expextedRecipeList;

            // Act
            component.updateLocalStorage();
            // component.readLocalStorage();

            // Assert
            expect(component.recipeList.length).toEqual(3);
        }));
    });

    describe(`#view tests`, () => {
        it(`clicking on button.add-new should call method 'openDialog()' (async)`, async () => {
            // Arrange

            // Act
            spyOn(component, 'openDialog');
            if (addNewBtnEl instanceof HTMLElement) {
                addNewBtnEl.click();
            } else {
                addNewBtnEl.triggerEventHandler('click', { button: 0 });
            }

            // Assert
            fixture.whenStable().then(() => {
                expect(component.openDialog).toHaveBeenCalled();
            });
        });

        it(`clicking on button.edit-button should call method 'openDialog()' (async)`, async () => {
            // Arrange

            // Act
            spyOn(component, 'openDialog');
            if (editBtnEl instanceof HTMLElement) {
                editBtnEl.click();
            } else {
                editBtnEl.triggerEventHandler('click', { button: 0 });
            }

            // Assert
            fixture.whenStable().then(() => {
                expect(component.openDialog).toHaveBeenCalled();
            });
        });

        it(`clicking on button.delete-button should call method 'deleteRecipe()' (async)`, async () => {
            // Arrange

            // Act
            spyOn(component, 'deleteRecipe');
            if (deleteBtnEl instanceof HTMLElement) {
                deleteBtnEl.click();
            } else {
                deleteBtnEl.triggerEventHandler('click', { button: 0 });
            }

            // Assert
            fixture.whenStable().then(() => {
                expect(component.deleteRecipe).toHaveBeenCalled();
            });
        });
    });
});
