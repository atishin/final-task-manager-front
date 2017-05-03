import { OdataDbSet } from 'odata-context';

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

export interface IOdataSets {
    OProjects: OdataDbSet<IProjectModel, IProjectModelProperties, IProjectModelNavigationProperties, IProjectModelOdataNavigationProperties, IProjectModelExpandables, IProjectModelSelectables, IProjectModelFilterables, IProjectModelOrderBy, IProjectModelKeys, IProjectModelActions>;
    OApplicationUsers: OdataDbSet<IApplicationUserModel, IApplicationUserModelProperties, IApplicationUserModelNavigationProperties, IApplicationUserModelOdataNavigationProperties, IApplicationUserModelExpandables, IApplicationUserModelSelectables, IApplicationUserModelFilterables, IApplicationUserModelOrderBy, IApplicationUserModelKeys, IApplicationUserModelActions>;
    OProjectChats: OdataDbSet<IProjectChatModel, IProjectChatModelProperties, IProjectChatModelNavigationProperties, IProjectChatModelOdataNavigationProperties, IProjectChatModelExpandables, IProjectChatModelSelectables, IProjectChatModelFilterables, IProjectChatModelOrderBy, IProjectChatModelKeys, IProjectChatModelActions>;
    OProjectTasks: OdataDbSet<IProjectTaskModel, IProjectTaskModelProperties, IProjectTaskModelNavigationProperties, IProjectTaskModelOdataNavigationProperties, IProjectTaskModelExpandables, IProjectTaskModelSelectables, IProjectTaskModelFilterables, IProjectTaskModelOrderBy, IProjectTaskModelKeys, IProjectTaskModelActions>;
    OTaskStatus: OdataDbSet<ITaskStatusModel, ITaskStatusModelProperties, ITaskStatusModelNavigationProperties, ITaskStatusModelOdataNavigationProperties, ITaskStatusModelExpandables, ITaskStatusModelSelectables, ITaskStatusModelFilterables, ITaskStatusModelOrderBy, ITaskStatusModelKeys, ITaskStatusModelActions>;
    OMessages: OdataDbSet<IMessageModel, IMessageModelProperties, IMessageModelNavigationProperties, IMessageModelOdataNavigationProperties, IMessageModelExpandables, IMessageModelSelectables, IMessageModelFilterables, IMessageModelOrderBy, IMessageModelKeys, IMessageModelActions>;
}
