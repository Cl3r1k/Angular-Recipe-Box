import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MyDialogComponent } from './my-dialog.component';
import { MatDialogRef, MAT_DIALOG_DATA, MatInputModule, MatDialogModule } from '@angular/material';
import { MatDialogRefMock } from '../_testing/mat-dialog-mock';

describe('MyDialogComponent', () => {
    let component: MyDialogComponent;
    let fixture: ComponentFixture<MyDialogComponent>;
    let dialogConfirmBtnEl;

    // Mock MAT_DIALOG_DATA with the Object
    const dataForDialog = {
        dialogTitle: 'Add a Recipe',
        buttonTitle: 'Add new Recipe',
        isNew: true
    };

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [MyDialogComponent],
            imports: [FormsModule, MatInputModule, MatDialogModule, BrowserAnimationsModule],
            providers: [
                { provide: MatDialogRef, useClass: MatDialogRefMock },
                {
                    provide: MAT_DIALOG_DATA, useValue: {
                        data: {
                            data: dataForDialog
                        }
                    }
                }
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(MyDialogComponent);
        component = fixture.componentInstance;

        dialogConfirmBtnEl = fixture.debugElement.query(By.css('.dialog__confirm-btn'));       // Find close button element

        // console.log('%cdialogConfirmBtnEl: ', 'color: red;', dialogConfirmBtnEl);

        fixture.detectChanges();
    });

    it(`should create an instance of 'MyDialogComponent' (async)`, async(() => {
        // Arrange

        // Act

        // Assert
        expect(component).toBeTruthy();
    }));

    describe(`#view tests`, () => {
        it(`clicking on button.dialog__confirm-btn should call method 'onCloseConfirm()' (async)`, async () => {
            // Arrange

            // Act
            spyOn(component, 'onCloseConfirm');
            if (dialogConfirmBtnEl instanceof HTMLElement) {
                dialogConfirmBtnEl.click();
            } else {
                dialogConfirmBtnEl.triggerEventHandler('click', { button: 0 });
            }

            // Assert
            fixture.whenStable().then(() => {
                expect(component.onCloseConfirm).toHaveBeenCalled();
            });
        });
    });
});
