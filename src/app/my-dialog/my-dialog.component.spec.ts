import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsModule } from '@angular/forms';

import { MyDialogComponent } from './my-dialog.component';
import { MatFormFieldModule, MatDialogModule, MatDialogRef } from '@angular/material';

describe('MyDialogComponent', () => {
    let component: MyDialogComponent;
    let fixture: ComponentFixture<MyDialogComponent>;
    const matDialogRefStub = {};

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [MyDialogComponent],
            imports: [FormsModule, MatFormFieldModule, MatDialogModule],
            providers: [
                { provider: MatDialogRef, useValue: matDialogRefStub}
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(MyDialogComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
