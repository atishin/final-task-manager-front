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
    MdSelectModule,
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
        MdListModule,
        MdSelectModule,
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
        MdSelectModule,
    ],
    declarations: []
})
export class MaterialModule { }
