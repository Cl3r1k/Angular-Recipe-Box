import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
    selector: 'app-my-dialog',
    templateUrl: './my-dialog.component.html',
    styleUrls: ['./my-dialog.component.scss']
})
export class MyDialogComponent implements OnInit {

    dialogTitle = 'Add a Recipe';
    buttonTitle = 'Add new Recipe';
    recipeName: string;
    recipeIngredients: string;
    // isNew = true;

    constructor(public thisDialogRef: MatDialogRef<MyDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: string) {
        this.dialogTitle = data['dialogTitle'];
        this.buttonTitle = data['buttonTitle'];
        // this.isNew = data['isNew'];
        if (!data['isNew']) {
            this.recipeName = data['recipeName'];
            this.recipeIngredients = data['recipeIngredients'];
        }
     }

    ngOnInit() {
    }

    onCloseConfirm() {
        this.thisDialogRef.close({ recipeName: this.recipeName, recipeIngredients: this.recipeIngredients });
    }

    onCloseCancel() {
        this.thisDialogRef.close('Cancel');
    }

}
