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

import {
    IIdentityUserRoleModel,
    IIdentityUserRoleModelProperties,
    IIdentityUserRoleModelNavigationProperties,
    IIdentityUserRoleModelOdataNavigationProperties,
    IIdentityUserRoleModelExpandables,
    IIdentityUserRoleModelSelectables,
    IIdentityUserRoleModelFilterables,
    IIdentityUserRoleModelOrderBy,
    IIdentityUserRoleModelKeys,
    IIdentityUserRoleModelActions
} from './Microsoft.AspNet.Identity.EntityFramework.IdentityUserRole';

import {
    IIdentityUserLoginModel,
    IIdentityUserLoginModelProperties,
    IIdentityUserLoginModelNavigationProperties,
    IIdentityUserLoginModelOdataNavigationProperties,
    IIdentityUserLoginModelExpandables,
    IIdentityUserLoginModelSelectables,
    IIdentityUserLoginModelFilterables,
    IIdentityUserLoginModelOrderBy,
    IIdentityUserLoginModelKeys,
    IIdentityUserLoginModelActions
} from './Microsoft.AspNet.Identity.EntityFramework.IdentityUserLogin';

 export type IProject = IProjectModel & Partial<IProjectModelNavigationProperties> & Partial<IProjectModelActions>;

 export type IApplicationUser = IApplicationUserModel & Partial<IApplicationUserModelNavigationProperties> & Partial<IApplicationUserModelActions>;

 export type IProjectChat = IProjectChatModel & Partial<IProjectChatModelNavigationProperties> & Partial<IProjectChatModelActions>;

 export type IProjectTask = IProjectTaskModel & Partial<IProjectTaskModelNavigationProperties> & Partial<IProjectTaskModelActions>;

 export type ITaskStatus = ITaskStatusModel & Partial<ITaskStatusModelNavigationProperties> & Partial<ITaskStatusModelActions>;

 export type IMessage = IMessageModel & Partial<IMessageModelNavigationProperties> & Partial<IMessageModelActions>;

 export type IIdentityUserClaim = IIdentityUserClaimModel & Partial<IIdentityUserClaimModelNavigationProperties> & Partial<IIdentityUserClaimModelActions>;

