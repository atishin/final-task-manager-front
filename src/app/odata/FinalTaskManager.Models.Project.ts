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

import {
    IProjectChatModel,
    IProjectChatModelProperties,
    IProjectChatModelNavigationProperties,
    IProjectChatModelOdataNavigationProperties,
    IProjectChatModelExpandables,
    IProjectChatModelSelectables,
    IProjectChatModelFilterables,
    IProjectChatModelOrderBy,
    IProjectChatModelKeys,
    IProjectChatModelActions
} from './FinalTaskManager.Models.ProjectChat';

import { IFilterable } from './IFilterable';
import { IExpandable } from './IExpandable';
import { ISelectable } from './ISelectable';
import { IOrderByCommand } from 'odata-context';
import { Observable } from 'rxjs/Observable';

export type IProjectModelKeys = number;

export interface IProjectModel {
    Id?: number;
    Title?: string;
    Description?: string;
    ManagerId?: string;

    'Tasks@odata.count'?: number;

}

export interface IProjectModelProperties {
    Id?: any;
    Title?: any;
    Description?: any;
    ManagerId?: any;
}

export interface IProjectModelNavigationProperties {
   Manager?: IApplicationUserModel & IApplicationUserModelNavigationProperties;
   Tasks?: Array<IProjectTaskModel & IProjectTaskModelNavigationProperties>;
   ProjectChat?: IProjectChatModel & IProjectChatModelNavigationProperties;
}

export interface IProjectModelOdataNavigationProperties {
   Manager?: IApplicationUserModelProperties & IApplicationUserModelOdataNavigationProperties;
   Tasks?: IProjectTaskModelProperties & IProjectTaskModelOdataNavigationProperties;
   ProjectChat?: IProjectChatModelProperties & IProjectChatModelOdataNavigationProperties;
}

export interface IProjectModelExpandables extends IExpandable {
   Manager?: IApplicationUserModelExpandables;
   Tasks?: IProjectTaskModelExpandables;
   ProjectChat?: IProjectChatModelExpandables;
}

export interface IProjectModelSelectables extends ISelectable {
    Id?: any;
    Title?: any;
    Description?: any;
    ManagerId?: any;
    Manager?: IApplicationUserModelSelectables;
    Tasks?: IProjectTaskModelSelectables;
    ProjectChat?: IProjectChatModelSelectables;
}

export interface IProjectModelFilterables extends IFilterable<
    IProjectModelProperties & IProjectModelOdataNavigationProperties,
    IProjectModelOdataNavigationProperties,
    IProjectModelFilterables
> {
    Manager?: IApplicationUserModelFilterables;
    Tasks?: IProjectTaskModelFilterables;
    ProjectChat?: IProjectChatModelFilterables;
}

export interface IProjectModelOrderBy extends IOrderByCommand<
    IProjectModelProperties & IProjectModelOdataNavigationProperties,
    IProjectModelOrderBy
> {
    Manager?: IApplicationUserModelOrderBy;
    Tasks?: IProjectTaskModelOrderBy;
    ProjectChat?: IProjectChatModelOrderBy;
}

export interface IProjectModelActions {
    
}

