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

import { IFilterable } from './IFilterable';
import { IExpandable } from './IExpandable';
import { ISelectable } from './ISelectable';
import { IOrderByCommand } from 'odata-context';
import { Observable } from 'rxjs/Observable';

export type IMessageModelKeys = number;

export interface IMessageModel {
    Id?: number;
    Text?: string;
    MessageTime: string;
    ProjectChatId?: number;
    UserId?: string;


}

export interface IMessageModelProperties {
    Id?: any;
    Text?: any;
    MessageTime?: any;
    ProjectChatId?: any;
    UserId?: any;
}

export interface IMessageModelNavigationProperties {
   ProjectChat?: IProjectChatModel & IProjectChatModelNavigationProperties;
   User?: IApplicationUserModel & IApplicationUserModelNavigationProperties;
}

export interface IMessageModelOdataNavigationProperties {
   ProjectChat?: IProjectChatModelProperties & IProjectChatModelOdataNavigationProperties;
   User?: IApplicationUserModelProperties & IApplicationUserModelOdataNavigationProperties;
}

export interface IMessageModelExpandables extends IExpandable {
   ProjectChat?: IProjectChatModelExpandables;
   User?: IApplicationUserModelExpandables;
}

export interface IMessageModelSelectables extends ISelectable {
    Id?: any;
    Text?: any;
    MessageTime?: any;
    ProjectChatId?: any;
    UserId?: any;
    ProjectChat?: IProjectChatModelSelectables;
    User?: IApplicationUserModelSelectables;
}

export interface IMessageModelFilterables extends IFilterable<
    IMessageModelProperties & IMessageModelOdataNavigationProperties,
    IMessageModelOdataNavigationProperties,
    IMessageModelFilterables
> {
    ProjectChat?: IProjectChatModelFilterables;
    User?: IApplicationUserModelFilterables;
}

export interface IMessageModelOrderBy extends IOrderByCommand<
    IMessageModelProperties & IMessageModelOdataNavigationProperties,
    IMessageModelOrderBy
> {
    ProjectChat?: IProjectChatModelOrderBy;
    User?: IApplicationUserModelOrderBy;
}

export interface IMessageModelActions {
    
}

