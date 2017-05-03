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
    IMessageModel,
    IMessageModelProperties,
    IMessageModelNavigationProperties,
    IMessageModelOdataNavigationProperties,
    IMessageModelExpandables,
    IMessageModelSelectables,
    IMessageModelFilterables,
    IMessageModelOrderBy,
    IMessageModelKeys,
    IMessageModelActions
} from './FinalTaskManager.Models.Message';

import { IFilterable } from './IFilterable';
import { IExpandable } from './IExpandable';
import { ISelectable } from './ISelectable';
import { IOrderByCommand } from 'odata-context';
import { Observable } from 'rxjs/Observable';

export type IProjectChatModelKeys = number;

export interface IProjectChatModel {
    Id?: number;

    'Messages@odata.count'?: number;
}

export interface IProjectChatModelProperties {
    Id?: any;
}

export interface IProjectChatModelNavigationProperties {
   Project?: IProjectModel & IProjectModelNavigationProperties;
   Messages?: Array<IMessageModel & IMessageModelNavigationProperties>;
}

export interface IProjectChatModelOdataNavigationProperties {
   Project?: IProjectModelProperties & IProjectModelOdataNavigationProperties;
   Messages?: IMessageModelProperties & IMessageModelOdataNavigationProperties;
}

export interface IProjectChatModelExpandables extends IExpandable {
   Project?: IProjectModelExpandables;
   Messages?: IMessageModelExpandables;
}

export interface IProjectChatModelSelectables extends ISelectable {
    Id?: any;
    Project?: IProjectModelSelectables;
    Messages?: IMessageModelSelectables;
}

export interface IProjectChatModelFilterables extends IFilterable<
    IProjectChatModelProperties & IProjectChatModelOdataNavigationProperties,
    IProjectChatModelOdataNavigationProperties,
    IProjectChatModelFilterables
> {
    Project?: IProjectModelFilterables;
    Messages?: IMessageModelFilterables;
}

export interface IProjectChatModelOrderBy extends IOrderByCommand<
    IProjectChatModelProperties & IProjectChatModelOdataNavigationProperties,
    IProjectChatModelOrderBy
> {
    Project?: IProjectModelOrderBy;
    Messages?: IMessageModelOrderBy;
}

export interface IProjectChatModelActions {
    
}

