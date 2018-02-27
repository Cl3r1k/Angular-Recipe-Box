import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

// Library
import { MatDialogModule, MatButtonModule, MatCardModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { MyDialogComponent } from './my-dialog/my-dialog.component';

@NgModule({
    declarations: [
        AppComponent,
        MyDialogComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        MatDialogModule,
        MatButtonModule,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule
    ],
    entryComponents: [MyDialogComponent],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
