import {
    IProjectTaskModel,
    IProjectTaskModelProperties,
    IProjectTaskModelNavigationProperties,
    IProjectTaskModelOdataNavigationProperties,
    IProjectTaskModelExpandables,
    IProjectTaskModelSelectables,
    IProjectTaskModelFilterables,
    IProjectTaskModelOrderBy,
    IProjectTaskModelKeys,
    IProjectTaskModelActions
} from './FinalTaskManager.Models.ProjectTask';

import { IFilterable } from './IFilterable';
import { IExpandable } from './IExpandable';
import { ISelectable } from './ISelectable';
import { IOrderByCommand } from 'odata-context';
import { Observable } from 'rxjs/Observable';

export type ITaskStatusModelKeys = number;

export interface ITaskStatusModel {
    Id?: number;
    StatusText?: string;
    'Tasks@odata.count'?: number;
}

export interface ITaskStatusModelProperties {
    Id?: any;
    StatusText?: any;
}

export interface ITaskStatusModelNavigationProperties {
   Tasks?: Array<IProjectTaskModel & IProjectTaskModelNavigationProperties>;
}

export interface ITaskStatusModelOdataNavigationProperties {
   Tasks?: IProjectTaskModelProperties & IProjectTaskModelOdataNavigationProperties;
}

export interface ITaskStatusModelExpandables extends IExpandable {
   Tasks?: IProjectTaskModelExpandables;
}

export interface ITaskStatusModelSelectables extends ISelectable {
    Id?: any;
    StatusText?: any;
    Tasks?: IProjectTaskModelSelectables;
}

export interface ITaskStatusModelFilterables extends IFilterable<
    ITaskStatusModelProperties & ITaskStatusModelOdataNavigationProperties,
    ITaskStatusModelOdataNavigationProperties,
    ITaskStatusModelFilterables
> {
    Tasks?: IProjectTaskModelFilterables;
}

export interface ITaskStatusModelOrderBy extends IOrderByCommand<
    ITaskStatusModelProperties & ITaskStatusModelOdataNavigationProperties,
    ITaskStatusModelOrderBy
> {
    Tasks?: IProjectTaskModelOrderBy;
}

export interface ITaskStatusModelActions {
    
}

