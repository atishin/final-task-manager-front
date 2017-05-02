import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
    MdSidenavModule,
    MdButtonModule,
    MdIconModule,
    MdCheckboxModule,
    MdDialogModule,
    MdInputModule,
    MdSnackBarModule,
    MdToolbarModule,
    MdCardModule,
    MdListModule,
} from '@angular/material';

@NgModule({
    imports: [
        CommonModule,
        MdSidenavModule,
        MdButtonModule,
        MdIconModule,
        MdCheckboxModule,
        MdDialogModule,
        MdInputModule,
        MdSnackBarModule,
        MdToolbarModule,
        MdCardModule,
        MdListModule
    ],
    exports: [
        MdSidenavModule,
        MdButtonModule,
        MdIconModule,
        MdCheckboxModule,
        MdDialogModule,
        MdInputModule,
        MdSnackBarModule,
        MdToolbarModule,
        MdCardModule,
        MdListModule,
    ],
    declarations: []
})
export class MaterialModule { }
