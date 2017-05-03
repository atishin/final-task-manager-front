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
    IIdentityUserClaimModel,
    IIdentityUserClaimModelProperties,
    IIdentityUserClaimModelNavigationProperties,
    IIdentityUserClaimModelOdataNavigationProperties,
    IIdentityUserClaimModelExpandables,
    IIdentityUserClaimModelSelectables,
    IIdentityUserClaimModelFilterables,
    IIdentityUserClaimModelOrderBy,
    IIdentityUserClaimModelKeys,
    IIdentityUserClaimModelActions
} from './Microsoft.AspNet.Identity.EntityFramework.IdentityUserClaim';

import { IFilterable } from './IFilterable';
import { IExpandable } from './IExpandable';
import { ISelectable } from './ISelectable';
import { IOrderByCommand } from 'odata-context';
import { Observable } from 'rxjs/Observable';

export type IApplicationUserModelKeys = string;

export interface IApplicationUserModel {
    Email?: string;
    EmailConfirmed: boolean;
    PasswordHash?: string;
    SecurityStamp?: string;
    PhoneNumber?: string;
    PhoneNumberConfirmed: boolean;
    TwoFactorEnabled: boolean;
    LockoutEndDateUtc?: string;
    LockoutEnabled: boolean;
    AccessFailedCount: number;
    Roles?: any[];
    Logins?: any[];
    Id?: string;
    UserName?: string;
    'Projects@odata.count'?: number;
    'Messages@odata.count'?: number;
    'Tasks@odata.count'?: number;
    'Claims@odata.count'?: number;
}

export interface IApplicationUserModelProperties {
    Email?: any;
    EmailConfirmed?: any;
    PasswordHash?: any;
    SecurityStamp?: any;
    PhoneNumber?: any;
    PhoneNumberConfirmed?: any;
    TwoFactorEnabled?: any;
    LockoutEndDateUtc?: any;
    LockoutEnabled?: any;
    AccessFailedCount?: any;
    Roles?: any;
    Logins?: any;
    Id?: any;
    UserName?: any;
}

export interface IApplicationUserModelNavigationProperties {
   Projects?: Array<IProjectModel & IProjectModelNavigationProperties>;
   Messages?: Array<IMessageModel & IMessageModelNavigationProperties>;
   Tasks?: Array<IProjectTaskModel & IProjectTaskModelNavigationProperties>;
   Claims?: Array<IIdentityUserClaimModel & IIdentityUserClaimModelNavigationProperties>;
}

export interface IApplicationUserModelOdataNavigationProperties {
   Projects?: IProjectModelProperties & IProjectModelOdataNavigationProperties;
   Messages?: IMessageModelProperties & IMessageModelOdataNavigationProperties;
   Tasks?: IProjectTaskModelProperties & IProjectTaskModelOdataNavigationProperties;
   Claims?: IIdentityUserClaimModelProperties & IIdentityUserClaimModelOdataNavigationProperties;
}

export interface IApplicationUserModelExpandables extends IExpandable {
   Projects?: IProjectModelExpandables;
   Messages?: IMessageModelExpandables;
   Tasks?: IProjectTaskModelExpandables;
   Claims?: IIdentityUserClaimModelExpandables;
}

export interface IApplicationUserModelSelectables extends ISelectable {
    Email?: any;
    EmailConfirmed?: any;
    PasswordHash?: any;
    SecurityStamp?: any;
    PhoneNumber?: any;
    PhoneNumberConfirmed?: any;
    TwoFactorEnabled?: any;
    LockoutEndDateUtc?: any;
    LockoutEnabled?: any;
    AccessFailedCount?: any;
    Roles?: any;
    Logins?: any;
    Id?: any;
    UserName?: any;
    Projects?: IProjectModelSelectables;
    Messages?: IMessageModelSelectables;
    Tasks?: IProjectTaskModelSelectables;
    Claims?: IIdentityUserClaimModelSelectables;
}

export interface IApplicationUserModelFilterables extends IFilterable<
    IApplicationUserModelProperties & IApplicationUserModelOdataNavigationProperties,
    IApplicationUserModelOdataNavigationProperties,
    IApplicationUserModelFilterables
> {
    Projects?: IProjectModelFilterables;
    Messages?: IMessageModelFilterables;
    Tasks?: IProjectTaskModelFilterables;
    Claims?: IIdentityUserClaimModelFilterables;
}

export interface IApplicationUserModelOrderBy extends IOrderByCommand<
    IApplicationUserModelProperties & IApplicationUserModelOdataNavigationProperties,
    IApplicationUserModelOrderBy
> {
    Projects?: IProjectModelOrderBy;
    Messages?: IMessageModelOrderBy;
    Tasks?: IProjectTaskModelOrderBy;
    Claims?: IIdentityUserClaimModelOrderBy;
}

export interface IApplicationUserModelActions {
    
}

