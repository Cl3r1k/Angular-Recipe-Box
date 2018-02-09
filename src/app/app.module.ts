import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

// Library
import { MatDialogModule, MatButtonModule, MatCardModule } from '@angular/material';
import { DialogDemoComponent } from './dialog-demo/dialog-demo.component';

@NgModule({
    declarations: [
        AppComponent,
        DialogDemoComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        MatDialogModule,
        MatButtonModule,
        MatCardModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
