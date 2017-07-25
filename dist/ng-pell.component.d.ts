import { EventEmitter, OnInit } from '@angular/core';
export declare class NgPellComponent implements OnInit {
    actions?: Array<string | object>;
    classes?: object;
    onChange: EventEmitter<string>;
    ngOnInit(): void;
}
