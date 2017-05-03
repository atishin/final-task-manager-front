import {
    IApplicationUserModel,
    IApplicationUserModelProperties,
    IApplicationUserModelNavigationProperties,
    IApplicationUserModelOdataNavigationProperties,
    IApplicationUserModelExpandables,
    IApplicationUserModelSelectables,
    IApplicationUserModelFilterables,
    IApplicationUserModelOrderBy,
    IApplicationUserModelKeys,
    IApplicationUserModelActions
} from './FinalTaskManager.Models.ApplicationUser';

import {
    IProjectModel,
    IProjectModelProperties,
    IProjectModelNavigationProperties,
    IProjectModelOdataNavigationProperties,
    IProjectModelExpandables,
    IProjectModelSelectables,
    IProjectModelFilterables,
    IProjectModelOrderBy,
    IProjectModelKeys,
    IProjectModelActions
} from './FinalTaskManager.Models.Project';

import {
    ITaskStatusModel,
    ITaskStatusModelProperties,
    ITaskStatusModelNavigationProperties,
    ITaskStatusModelOdataNavigationProperties,
    ITaskStatusModelExpandables,
    ITaskStatusModelSelectables,
    ITaskStatusModelFilterables,
    ITaskStatusModelOrderBy,
    ITaskStatusModelKeys,
    ITaskStatusModelActions
} from './FinalTaskManager.Models.TaskStatus';

import { IFilterable } from './IFilterable';
import { IExpandable } from './IExpandable';
import { ISelectable } from './ISelectable';
import { IOrderByCommand } from 'odata-context';
import { Observable } from 'rxjs/Observable';

export type IProjectTaskModelKeys = number;

export interface IProjectTaskModel {
    Id?: number;
    Title?: string;
    Description?: string;
    StartDate: string;
    EndDate?: string;
    ClosedByUserId?: string;
    ProjectId?: number;
    TaskStatusId?: number;



}

export interface IProjectTaskModelProperties {
    Id?: any;
    Title?: any;
    Description?: any;
    StartDate?: any;
    EndDate?: any;
    ClosedByUserId?: any;
    ProjectId?: any;
    TaskStatusId?: any;
}

export interface IProjectTaskModelNavigationProperties {
   ClosedByUser?: IApplicationUserModel & IApplicationUserModelNavigationProperties;
   Project?: IProjectModel & IProjectModelNavigationProperties;
   TaskStatus?: ITaskStatusModel & ITaskStatusModelNavigationProperties;
}

export interface IProjectTaskModelOdataNavigationProperties {
   ClosedByUser?: IApplicationUserModelProperties & IApplicationUserModelOdataNavigationProperties;
   Project?: IProjectModelProperties & IProjectModelOdataNavigationProperties;
   TaskStatus?: ITaskStatusModelProperties & ITaskStatusModelOdataNavigationProperties;
}

export interface IProjectTaskModelExpandables extends IExpandable {
   ClosedByUser?: IApplicationUserModelExpandables;
   Project?: IProjectModelExpandables;
   TaskStatus?: ITaskStatusModelExpandables;
}

export interface IProjectTaskModelSelectables extends ISelectable {
    Id?: any;
    Title?: any;
    Description?: any;
    StartDate?: any;
    EndDate?: any;
    ClosedByUserId?: any;
    ProjectId?: any;
    TaskStatusId?: any;
    ClosedByUser?: IApplicationUserModelSelectables;
    Project?: IProjectModelSelectables;
    TaskStatus?: ITaskStatusModelSelectables;
}

export interface IProjectTaskModelFilterables extends IFilterable<
    IProjectTaskModelProperties & IProjectTaskModelOdataNavigationProperties,
    IProjectTaskModelOdataNavigationProperties,
    IProjectTaskModelFilterables
> {
    ClosedByUser?: IApplicationUserModelFilterables;
    Project?: IProjectModelFilterables;
    TaskStatus?: ITaskStatusModelFilterables;
}

export interface IProjectTaskModelOrderBy extends IOrderByCommand<
    IProjectTaskModelProperties & IProjectTaskModelOdataNavigationProperties,
    IProjectTaskModelOrderBy
> {
    ClosedByUser?: IApplicationUserModelOrderBy;
    Project?: IProjectModelOrderBy;
    TaskStatus?: ITaskStatusModelOrderBy;
}

export interface IProjectTaskModelActions {
    
}

