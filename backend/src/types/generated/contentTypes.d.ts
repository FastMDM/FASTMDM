import type { Schema, Attribute } from '@strapi/strapi';

export interface AdminPermission extends Schema.CollectionType {
  collectionName: 'admin_permissions';
  info: {
    name: 'Permission';
    description: '';
    singularName: 'permission';
    pluralName: 'permissions';
    displayName: 'Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    actionParameters: Attribute.JSON & Attribute.DefaultTo<{}>;
    subject: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    properties: Attribute.JSON & Attribute.DefaultTo<{}>;
    conditions: Attribute.JSON & Attribute.DefaultTo<[]>;
    role: Attribute.Relation<'admin::permission', 'manyToOne', 'admin::role'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminUser extends Schema.CollectionType {
  collectionName: 'admin_users';
  info: {
    name: 'User';
    description: '';
    singularName: 'user';
    pluralName: 'users';
    displayName: 'User';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    firstname: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    lastname: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    username: Attribute.String;
    email: Attribute.Email &
      Attribute.Required &
      Attribute.Private &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    password: Attribute.Password &
      Attribute.Private &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    resetPasswordToken: Attribute.String & Attribute.Private;
    registrationToken: Attribute.String & Attribute.Private;
    isActive: Attribute.Boolean &
      Attribute.Private &
      Attribute.DefaultTo<false>;
    roles: Attribute.Relation<'admin::user', 'manyToMany', 'admin::role'> &
      Attribute.Private;
    blocked: Attribute.Boolean & Attribute.Private & Attribute.DefaultTo<false>;
    preferedLanguage: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'admin::user', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'admin::user', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface AdminRole extends Schema.CollectionType {
  collectionName: 'admin_roles';
  info: {
    name: 'Role';
    description: '';
    singularName: 'role';
    pluralName: 'roles';
    displayName: 'Role';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    code: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    description: Attribute.String;
    users: Attribute.Relation<'admin::role', 'manyToMany', 'admin::user'>;
    permissions: Attribute.Relation<
      'admin::role',
      'oneToMany',
      'admin::permission'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'admin::role', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'admin::role', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface AdminApiToken extends Schema.CollectionType {
  collectionName: 'strapi_api_tokens';
  info: {
    name: 'Api Token';
    singularName: 'api-token';
    pluralName: 'api-tokens';
    displayName: 'Api Token';
    description: '';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    description: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Attribute.DefaultTo<''>;
    type: Attribute.Enumeration<['read-only', 'full-access', 'custom']> &
      Attribute.Required &
      Attribute.DefaultTo<'read-only'>;
    accessKey: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    lastUsedAt: Attribute.DateTime;
    permissions: Attribute.Relation<
      'admin::api-token',
      'oneToMany',
      'admin::api-token-permission'
    >;
    expiresAt: Attribute.DateTime;
    lifespan: Attribute.BigInteger;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::api-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::api-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminApiTokenPermission extends Schema.CollectionType {
  collectionName: 'strapi_api_token_permissions';
  info: {
    name: 'API Token Permission';
    description: '';
    singularName: 'api-token-permission';
    pluralName: 'api-token-permissions';
    displayName: 'API Token Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    token: Attribute.Relation<
      'admin::api-token-permission',
      'manyToOne',
      'admin::api-token'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::api-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::api-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminTransferToken extends Schema.CollectionType {
  collectionName: 'strapi_transfer_tokens';
  info: {
    name: 'Transfer Token';
    singularName: 'transfer-token';
    pluralName: 'transfer-tokens';
    displayName: 'Transfer Token';
    description: '';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    description: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Attribute.DefaultTo<''>;
    accessKey: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    lastUsedAt: Attribute.DateTime;
    permissions: Attribute.Relation<
      'admin::transfer-token',
      'oneToMany',
      'admin::transfer-token-permission'
    >;
    expiresAt: Attribute.DateTime;
    lifespan: Attribute.BigInteger;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::transfer-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::transfer-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminTransferTokenPermission extends Schema.CollectionType {
  collectionName: 'strapi_transfer_token_permissions';
  info: {
    name: 'Transfer Token Permission';
    description: '';
    singularName: 'transfer-token-permission';
    pluralName: 'transfer-token-permissions';
    displayName: 'Transfer Token Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    token: Attribute.Relation<
      'admin::transfer-token-permission',
      'manyToOne',
      'admin::transfer-token'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::transfer-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::transfer-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUploadFile extends Schema.CollectionType {
  collectionName: 'files';
  info: {
    singularName: 'file';
    pluralName: 'files';
    displayName: 'File';
    description: '';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    alternativeText: Attribute.String;
    caption: Attribute.String;
    width: Attribute.Integer;
    height: Attribute.Integer;
    formats: Attribute.JSON;
    hash: Attribute.String & Attribute.Required;
    ext: Attribute.String;
    mime: Attribute.String & Attribute.Required;
    size: Attribute.Decimal & Attribute.Required;
    url: Attribute.String & Attribute.Required;
    previewUrl: Attribute.String;
    provider: Attribute.String & Attribute.Required;
    provider_metadata: Attribute.JSON;
    related: Attribute.Relation<'plugin::upload.file', 'morphToMany'>;
    folder: Attribute.Relation<
      'plugin::upload.file',
      'manyToOne',
      'plugin::upload.folder'
    > &
      Attribute.Private;
    folderPath: Attribute.String &
      Attribute.Required &
      Attribute.Private &
      Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::upload.file',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::upload.file',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUploadFolder extends Schema.CollectionType {
  collectionName: 'upload_folders';
  info: {
    singularName: 'folder';
    pluralName: 'folders';
    displayName: 'Folder';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    pathId: Attribute.Integer & Attribute.Required & Attribute.Unique;
    parent: Attribute.Relation<
      'plugin::upload.folder',
      'manyToOne',
      'plugin::upload.folder'
    >;
    children: Attribute.Relation<
      'plugin::upload.folder',
      'oneToMany',
      'plugin::upload.folder'
    >;
    files: Attribute.Relation<
      'plugin::upload.folder',
      'oneToMany',
      'plugin::upload.file'
    >;
    path: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::upload.folder',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::upload.folder',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginContentReleasesRelease extends Schema.CollectionType {
  collectionName: 'strapi_releases';
  info: {
    singularName: 'release';
    pluralName: 'releases';
    displayName: 'Release';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    releasedAt: Attribute.DateTime;
    scheduledAt: Attribute.DateTime;
    timezone: Attribute.String;
    status: Attribute.Enumeration<
      ['ready', 'blocked', 'failed', 'done', 'empty']
    > &
      Attribute.Required;
    actions: Attribute.Relation<
      'plugin::content-releases.release',
      'oneToMany',
      'plugin::content-releases.release-action'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::content-releases.release',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::content-releases.release',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginContentReleasesReleaseAction
  extends Schema.CollectionType {
  collectionName: 'strapi_release_actions';
  info: {
    singularName: 'release-action';
    pluralName: 'release-actions';
    displayName: 'Release Action';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    type: Attribute.Enumeration<['publish', 'unpublish']> & Attribute.Required;
    entry: Attribute.Relation<
      'plugin::content-releases.release-action',
      'morphToOne'
    >;
    contentType: Attribute.String & Attribute.Required;
    locale: Attribute.String;
    release: Attribute.Relation<
      'plugin::content-releases.release-action',
      'manyToOne',
      'plugin::content-releases.release'
    >;
    isEntryValid: Attribute.Boolean;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::content-releases.release-action',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::content-releases.release-action',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginTranslateBatchTranslateJob
  extends Schema.CollectionType {
  collectionName: 'translate_batch_translate_jobs';
  info: {
    singularName: 'batch-translate-job';
    pluralName: 'batch-translate-jobs';
    displayName: 'Translate Batch Translate Job';
  };
  options: {
    draftAndPublish: false;
    comment: '';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    contentType: Attribute.String;
    sourceLocale: Attribute.String;
    targetLocale: Attribute.String;
    entityIds: Attribute.JSON;
    status: Attribute.Enumeration<
      [
        'created',
        'setup',
        'running',
        'paused',
        'finished',
        'cancelled',
        'failed'
      ]
    > &
      Attribute.DefaultTo<'created'>;
    failureReason: Attribute.JSON;
    progress: Attribute.Float & Attribute.DefaultTo<0>;
    autoPublish: Attribute.Boolean & Attribute.DefaultTo<false>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::translate.batch-translate-job',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::translate.batch-translate-job',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginMultiTenantTenant extends Schema.CollectionType {
  collectionName: 'tenants';
  info: {
    singularName: 'tenant';
    pluralName: 'tenants';
    displayName: 'Tenant';
  };
  options: {
    draftAndPublish: false;
    comment: '';
  };
  attributes: {
    name: Attribute.String;
    userGroups: Attribute.Relation<
      'plugin::multi-tenant.tenant',
      'oneToMany',
      'plugin::multi-tenant.user-group'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::multi-tenant.tenant',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::multi-tenant.tenant',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginMultiTenantUserGroup extends Schema.CollectionType {
  collectionName: 'user_groups';
  info: {
    singularName: 'user-group';
    pluralName: 'user-groups';
    displayName: 'UserGroup';
  };
  options: {
    draftAndPublish: false;
    comment: '';
  };
  attributes: {
    name: Attribute.String;
    users: Attribute.Relation<
      'plugin::multi-tenant.user-group',
      'oneToMany',
      'plugin::users-permissions.user'
    >;
    tenant: Attribute.Relation<
      'plugin::multi-tenant.user-group',
      'manyToOne',
      'plugin::multi-tenant.tenant'
    > &
      Attribute.Required;
    parent: Attribute.Relation<
      'plugin::multi-tenant.user-group',
      'manyToOne',
      'plugin::multi-tenant.user-group'
    >;
    children: Attribute.Relation<
      'plugin::multi-tenant.user-group',
      'oneToMany',
      'plugin::multi-tenant.user-group'
    >;
    restaurants: Attribute.Relation<
      'plugin::multi-tenant.user-group',
      'oneToMany',
      'api::restaurant.restaurant'
    >;
    legals: Attribute.Relation<
      'plugin::multi-tenant.user-group',
      'oneToMany',
      'api::legal.legal'
    >;
    animals: Attribute.Relation<
      'plugin::multi-tenant.user-group',
      'oneToMany',
      'api::animal.animal'
    >;
    assets: Attribute.Relation<
      'plugin::multi-tenant.user-group',
      'oneToMany',
      'api::asset.asset'
    >;
    autos: Attribute.Relation<
      'plugin::multi-tenant.user-group',
      'oneToMany',
      'api::auto.auto'
    >;
    hotels: Attribute.Relation<
      'plugin::multi-tenant.user-group',
      'oneToMany',
      'api::hotel.hotel'
    >;
    inventories: Attribute.Relation<
      'plugin::multi-tenant.user-group',
      'oneToMany',
      'api::inventory.inventory'
    >;
    areas: Attribute.Relation<
      'plugin::multi-tenant.user-group',
      'oneToMany',
      'api::area.area'
    >;
    cities: Attribute.Relation<
      'plugin::multi-tenant.user-group',
      'oneToMany',
      'api::city.city'
    >;
    city_districts: Attribute.Relation<
      'plugin::multi-tenant.user-group',
      'oneToMany',
      'api::city-district.city-district'
    >;
    countries: Attribute.Relation<
      'plugin::multi-tenant.user-group',
      'oneToMany',
      'api::country.country'
    >;
    settlements: Attribute.Relation<
      'plugin::multi-tenant.user-group',
      'oneToMany',
      'api::settlement.settlement'
    >;
    streets: Attribute.Relation<
      'plugin::multi-tenant.user-group',
      'oneToMany',
      'api::street.street'
    >;
    steads: Attribute.Relation<
      'plugin::multi-tenant.user-group',
      'oneToMany',
      'api::stead.stead'
    >;
    realties: Attribute.Relation<
      'plugin::multi-tenant.user-group',
      'oneToMany',
      'api::realty.realty'
    >;
    houses: Attribute.Relation<
      'plugin::multi-tenant.user-group',
      'oneToMany',
      'api::house.house'
    >;
    time_zones: Attribute.Relation<
      'plugin::multi-tenant.user-group',
      'oneToMany',
      'api::time-zone.time-zone'
    >;
    legal_directories: Attribute.Relation<
      'plugin::multi-tenant.user-group',
      'oneToMany',
      'api::legal-directory.legal-directory'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::multi-tenant.user-group',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::multi-tenant.user-group',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginI18NLocale extends Schema.CollectionType {
  collectionName: 'i18n_locale';
  info: {
    singularName: 'locale';
    pluralName: 'locales';
    collectionName: 'locales';
    displayName: 'Locale';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.SetMinMax<
        {
          min: 1;
          max: 50;
        },
        number
      >;
    code: Attribute.String & Attribute.Unique;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::i18n.locale',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::i18n.locale',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUsersPermissionsPermission
  extends Schema.CollectionType {
  collectionName: 'up_permissions';
  info: {
    name: 'permission';
    description: '';
    singularName: 'permission';
    pluralName: 'permissions';
    displayName: 'Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String & Attribute.Required;
    role: Attribute.Relation<
      'plugin::users-permissions.permission',
      'manyToOne',
      'plugin::users-permissions.role'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::users-permissions.permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::users-permissions.permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUsersPermissionsRole extends Schema.CollectionType {
  collectionName: 'up_roles';
  info: {
    name: 'role';
    description: '';
    singularName: 'role';
    pluralName: 'roles';
    displayName: 'Role';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
    description: Attribute.String;
    type: Attribute.String & Attribute.Unique;
    permissions: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToMany',
      'plugin::users-permissions.permission'
    >;
    users: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToMany',
      'plugin::users-permissions.user'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUsersPermissionsUser extends Schema.CollectionType {
  collectionName: 'up_users';
  info: {
    name: 'user';
    description: '';
    singularName: 'user';
    pluralName: 'users';
    displayName: 'User';
  };
  options: {
    draftAndPublish: false;
    timestamps: true;
  };
  attributes: {
    username: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
    email: Attribute.Email &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    provider: Attribute.String;
    password: Attribute.Password &
      Attribute.Private &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    resetPasswordToken: Attribute.String & Attribute.Private;
    confirmationToken: Attribute.String & Attribute.Private;
    confirmed: Attribute.Boolean & Attribute.DefaultTo<false>;
    blocked: Attribute.Boolean & Attribute.DefaultTo<false>;
    role: Attribute.Relation<
      'plugin::users-permissions.user',
      'manyToOne',
      'plugin::users-permissions.role'
    >;
    todos: Attribute.Relation<
      'plugin::users-permissions.user',
      'oneToMany',
      'api::todo.todo'
    >;
    company_directories: Attribute.Relation<
      'plugin::users-permissions.user',
      'oneToMany',
      'api::company-directory.company-directory'
    >;
    companies: Attribute.Relation<
      'plugin::users-permissions.user',
      'manyToMany',
      'api::company.company'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::users-permissions.user',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::users-permissions.user',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiAddressAddress extends Schema.CollectionType {
  collectionName: 'addresses';
  info: {
    singularName: 'address';
    pluralName: 'addresses';
    displayName: 'Address';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
        translate: {
          translate: 'translate';
        };
      }>;
    postal_code: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
        translate: {
          translate: 'translate';
        };
      }>;
    country: Attribute.Relation<
      'api::address.address',
      'manyToOne',
      'api::country.country'
    > &
      Attribute.SetPluginOptions<{
        translate: {
          translate: 'translate';
        };
      }>;
    region: Attribute.Relation<
      'api::address.address',
      'manyToOne',
      'api::region.region'
    > &
      Attribute.SetPluginOptions<{
        translate: {
          translate: 'translate';
        };
      }>;
    area: Attribute.Relation<
      'api::address.address',
      'manyToOne',
      'api::area.area'
    > &
      Attribute.SetPluginOptions<{
        translate: {
          translate: 'translate';
        };
      }>;
    userGroup: Attribute.Relation<
      'api::address.address',
      'manyToOne',
      'api::city-district.city-district'
    > &
      Attribute.SetPluginOptions<{
        translate: {
          translate: 'translate';
        };
      }>;
    settlement: Attribute.Relation<
      'api::address.address',
      'manyToOne',
      'api::settlement.settlement'
    > &
      Attribute.SetPluginOptions<{
        translate: {
          translate: 'translate';
        };
      }>;
    street: Attribute.Relation<
      'api::address.address',
      'manyToOne',
      'api::street.street'
    > &
      Attribute.SetPluginOptions<{
        translate: {
          translate: 'translate';
        };
      }>;
    realties: Attribute.Relation<
      'api::address.address',
      'oneToMany',
      'api::realty.realty'
    > &
      Attribute.SetPluginOptions<{
        translate: {
          translate: 'translate';
        };
      }>;
    stead: Attribute.Relation<
      'api::address.address',
      'manyToOne',
      'api::stead.stead'
    > &
      Attribute.SetPluginOptions<{
        translate: {
          translate: 'translate';
        };
      }>;
    house: Attribute.Relation<
      'api::address.address',
      'manyToOne',
      'api::house.house'
    > &
      Attribute.SetPluginOptions<{
        translate: {
          translate: 'translate';
        };
      }>;
    block: Attribute.Relation<
      'api::address.address',
      'manyToOne',
      'api::block.block'
    > &
      Attribute.SetPluginOptions<{
        translate: {
          translate: 'translate';
        };
      }>;
    entrance: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }> &
      Attribute.SetMinMaxLength<{
        maxLength: 10;
      }>;
    floor: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }> &
      Attribute.SetMinMaxLength<{
        maxLength: 10;
      }>;
    flat_fias_id: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }> &
      Attribute.SetMinMaxLength<{
        maxLength: 36;
      }>;
    flat_cadnum: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }> &
      Attribute.SetMinMaxLength<{
        maxLength: 50;
      }>;
    flat_type: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
        translate: {
          translate: 'translate';
        };
      }> &
      Attribute.SetMinMaxLength<{
        maxLength: 10;
      }>;
    flat_type_full: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
        translate: {
          translate: 'translate';
        };
      }> &
      Attribute.SetMinMaxLength<{
        maxLength: 50;
      }>;
    flat: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
        translate: {
          translate: 'translate';
        };
      }> &
      Attribute.SetMinMaxLength<{
        maxLength: 50;
      }>;
    flat_area: Attribute.Decimal &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }>;
    square_meter_price: Attribute.Decimal &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    flat_price: Attribute.Decimal &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    postal_box: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }> &
      Attribute.SetMinMaxLength<{
        maxLength: 50;
      }>;
    fias_id: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }> &
      Attribute.SetMinMaxLength<{
        maxLength: 36;
      }>;
    fias_level: Attribute.Integer &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }>;
    fias_actuality_state: Attribute.Integer &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }>;
    kladr_id: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }> &
      Attribute.SetMinMaxLength<{
        maxLength: 19;
      }>;
    capital_marker: Attribute.Integer &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }>;
    okato: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }> &
      Attribute.SetMinMaxLength<{
        maxLength: 11;
      }>;
    oktmo: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }> &
      Attribute.SetMinMaxLength<{
        maxLength: 11;
      }>;
    tax_office_person: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }> &
      Attribute.SetMinMaxLength<{
        maxLength: 4;
      }>;
    tax_office_legal: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }> &
      Attribute.SetMinMaxLength<{
        maxLength: 4;
      }>;
    time_zone: Attribute.Relation<
      'api::address.address',
      'manyToOne',
      'api::time-zone.time-zone'
    > &
      Attribute.SetPluginOptions<{
        translate: {
          translate: 'translate';
        };
      }>;
    geo_lat: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }> &
      Attribute.SetMinMaxLength<{
        maxLength: 12;
      }>;
    geo_lon: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }> &
      Attribute.SetMinMaxLength<{
        maxLength: 12;
      }>;
    legals: Attribute.Relation<
      'api::address.address',
      'oneToMany',
      'api::legal.legal'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::address.address',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::address.address',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    localizations: Attribute.Relation<
      'api::address.address',
      'oneToMany',
      'api::address.address'
    >;
    locale: Attribute.String;
  };
}

export interface ApiAnimalAnimal extends Schema.CollectionType {
  collectionName: 'animals';
  info: {
    singularName: 'animal';
    pluralName: 'animals';
    displayName: 'Animal';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    Name: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
        translate: {
          translate: 'translate';
        };
      }>;
    userGroup: Attribute.Relation<
      'api::animal.animal',
      'manyToOne',
      'plugin::multi-tenant.user-group'
    > &
      Attribute.SetPluginOptions<{
        translate: {
          translate: 'translate';
        };
      }>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::animal.animal',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::animal.animal',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    localizations: Attribute.Relation<
      'api::animal.animal',
      'oneToMany',
      'api::animal.animal'
    >;
    locale: Attribute.String;
  };
}

export interface ApiAreaArea extends Schema.CollectionType {
  collectionName: 'areas';
  info: {
    singularName: 'area';
    pluralName: 'areas';
    displayName: 'Area';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    area_fias_id: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }> &
      Attribute.SetMinMaxLength<{
        maxLength: 36;
      }>;
    area_kladr_id: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }> &
      Attribute.SetMinMaxLength<{
        maxLength: 19;
      }>;
    area_with_type: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
        translate: {
          translate: 'translate';
        };
      }> &
      Attribute.SetMinMaxLength<{
        maxLength: 131;
      }>;
    area_type: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
        translate: {
          translate: 'translate';
        };
      }> &
      Attribute.SetMinMaxLength<{
        maxLength: 10;
      }>;
    area_type_full: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
        translate: {
          translate: 'translate';
        };
      }> &
      Attribute.SetMinMaxLength<{
        maxLength: 50;
      }>;
    area: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
        translate: {
          translate: 'translate';
        };
      }> &
      Attribute.SetMinMaxLength<{
        maxLength: 120;
      }>;
    addresses: Attribute.Relation<
      'api::area.area',
      'oneToMany',
      'api::address.address'
    > &
      Attribute.SetPluginOptions<{
        translate: {
          translate: 'translate';
        };
      }>;
    userGroup: Attribute.Relation<
      'api::area.area',
      'manyToOne',
      'plugin::multi-tenant.user-group'
    > &
      Attribute.SetPluginOptions<{
        translate: {
          translate: 'translate';
        };
      }>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'api::area.area', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'api::area.area', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    localizations: Attribute.Relation<
      'api::area.area',
      'oneToMany',
      'api::area.area'
    >;
    locale: Attribute.String;
  };
}

export interface ApiAssetAsset extends Schema.CollectionType {
  collectionName: 'assets';
  info: {
    singularName: 'asset';
    pluralName: 'assets';
    displayName: 'Asset';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    Name: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
        translate: {
          translate: 'translate';
        };
      }>;
    userGroup: Attribute.Relation<
      'api::asset.asset',
      'manyToOne',
      'plugin::multi-tenant.user-group'
    > &
      Attribute.SetPluginOptions<{
        translate: {
          translate: 'translate';
        };
      }>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::asset.asset',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::asset.asset',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    localizations: Attribute.Relation<
      'api::asset.asset',
      'oneToMany',
      'api::asset.asset'
    >;
    locale: Attribute.String;
  };
}

export interface ApiAutoAuto extends Schema.CollectionType {
  collectionName: 'autos';
  info: {
    singularName: 'auto';
    pluralName: 'autos';
    displayName: 'Auto';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    Title: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
        translate: {
          translate: 'translate';
        };
      }>;
    Description: Attribute.Text &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
        translate: {
          translate: 'translate';
        };
      }>;
    Price: Attribute.Integer &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    currency: Attribute.Relation<
      'api::auto.auto',
      'manyToOne',
      'api::currency.currency'
    > &
      Attribute.SetPluginOptions<{
        translate: {
          translate: 'translate';
        };
      }>;
    City: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
        translate: {
          translate: 'translate';
        };
      }>;
    PostalCode: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
        translate: {
          translate: 'translate';
        };
      }>;
    VIN: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }>;
    Odometer: Attribute.Integer &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Make: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }>;
    Model: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }>;
    ModelYear: Attribute.Integer &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    CryptoCurrency: Attribute.Boolean &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }>;
    DeliveryAvaliable: Attribute.Boolean &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }>;
    MoreAds: Attribute.Boolean &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }>;
    ContactEmail: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }>;
    PhoneNumber: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }>;
    ContactName: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }>;
    color: Attribute.Relation<
      'api::auto.auto',
      'manyToOne',
      'api::auto-color.auto-color'
    > &
      Attribute.SetPluginOptions<{
        translate: {
          translate: 'translate';
        };
      }>;
    condition: Attribute.Relation<
      'api::auto.auto',
      'manyToOne',
      'api::auto-condition.auto-condition'
    > &
      Attribute.SetPluginOptions<{
        translate: {
          translate: 'translate';
        };
      }>;
    cylinder: Attribute.Relation<
      'api::auto.auto',
      'manyToOne',
      'api::auto-cylinder.auto-cylinder'
    > &
      Attribute.SetPluginOptions<{
        translate: {
          translate: 'translate';
        };
      }>;
    drive: Attribute.Relation<
      'api::auto.auto',
      'manyToOne',
      'api::auto-drive.auto-drive'
    > &
      Attribute.SetPluginOptions<{
        translate: {
          translate: 'translate';
        };
      }>;
    fuel: Attribute.Relation<
      'api::auto.auto',
      'manyToOne',
      'api::auto-fuel.auto-fuel'
    > &
      Attribute.SetPluginOptions<{
        translate: {
          translate: 'translate';
        };
      }>;
    size: Attribute.Relation<
      'api::auto.auto',
      'manyToOne',
      'api::auto-size.auto-size'
    > &
      Attribute.SetPluginOptions<{
        translate: {
          translate: 'translate';
        };
      }>;
    status: Attribute.Relation<
      'api::auto.auto',
      'manyToOne',
      'api::auto-status.auto-status'
    > &
      Attribute.SetPluginOptions<{
        translate: {
          translate: 'translate';
        };
      }>;
    transmission: Attribute.Relation<
      'api::auto.auto',
      'manyToOne',
      'api::auto-transmission.auto-transmission'
    > &
      Attribute.SetPluginOptions<{
        translate: {
          translate: 'translate';
        };
      }>;
    type: Attribute.Relation<
      'api::auto.auto',
      'manyToOne',
      'api::auto-type.auto-type'
    > &
      Attribute.SetPluginOptions<{
        translate: {
          translate: 'translate';
        };
      }>;
    userGroup: Attribute.Relation<
      'api::auto.auto',
      'manyToOne',
      'plugin::multi-tenant.user-group'
    > &
      Attribute.SetPluginOptions<{
        translate: {
          translate: 'translate';
        };
      }>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'api::auto.auto', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'api::auto.auto', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    localizations: Attribute.Relation<
      'api::auto.auto',
      'oneToMany',
      'api::auto.auto'
    >;
    locale: Attribute.String;
  };
}

export interface ApiAutoColorAutoColor extends Schema.CollectionType {
  collectionName: 'auto_colors';
  info: {
    singularName: 'auto-color';
    pluralName: 'auto-colors';
    displayName: 'AutoColor';
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    Name: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Value: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }>;
    autos: Attribute.Relation<
      'api::auto-color.auto-color',
      'oneToMany',
      'api::auto.auto'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::auto-color.auto-color',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::auto-color.auto-color',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    localizations: Attribute.Relation<
      'api::auto-color.auto-color',
      'oneToMany',
      'api::auto-color.auto-color'
    >;
    locale: Attribute.String;
  };
}

export interface ApiAutoConditionAutoCondition extends Schema.CollectionType {
  collectionName: 'auto_conditions';
  info: {
    singularName: 'auto-condition';
    pluralName: 'auto-conditions';
    displayName: 'AutoCondition';
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    Name: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Value: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    autos: Attribute.Relation<
      'api::auto-condition.auto-condition',
      'oneToMany',
      'api::auto.auto'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::auto-condition.auto-condition',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::auto-condition.auto-condition',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    localizations: Attribute.Relation<
      'api::auto-condition.auto-condition',
      'oneToMany',
      'api::auto-condition.auto-condition'
    >;
    locale: Attribute.String;
  };
}

export interface ApiAutoCylinderAutoCylinder extends Schema.CollectionType {
  collectionName: 'auto_cylinders';
  info: {
    singularName: 'auto-cylinder';
    pluralName: 'auto-cylinders';
    displayName: 'AutoCylinder';
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    Name: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Value: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    autos: Attribute.Relation<
      'api::auto-cylinder.auto-cylinder',
      'oneToMany',
      'api::auto.auto'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::auto-cylinder.auto-cylinder',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::auto-cylinder.auto-cylinder',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    localizations: Attribute.Relation<
      'api::auto-cylinder.auto-cylinder',
      'oneToMany',
      'api::auto-cylinder.auto-cylinder'
    >;
    locale: Attribute.String;
  };
}

export interface ApiAutoDriveAutoDrive extends Schema.CollectionType {
  collectionName: 'auto_drives';
  info: {
    singularName: 'auto-drive';
    pluralName: 'auto-drives';
    displayName: 'AutoDrive';
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    Name: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Value: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    autos: Attribute.Relation<
      'api::auto-drive.auto-drive',
      'oneToMany',
      'api::auto.auto'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::auto-drive.auto-drive',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::auto-drive.auto-drive',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    localizations: Attribute.Relation<
      'api::auto-drive.auto-drive',
      'oneToMany',
      'api::auto-drive.auto-drive'
    >;
    locale: Attribute.String;
  };
}

export interface ApiAutoFuelAutoFuel extends Schema.CollectionType {
  collectionName: 'auto_fuels';
  info: {
    singularName: 'auto-fuel';
    pluralName: 'auto-fuels';
    displayName: 'AutoFuel';
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    Name: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Value: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    autos: Attribute.Relation<
      'api::auto-fuel.auto-fuel',
      'oneToMany',
      'api::auto.auto'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::auto-fuel.auto-fuel',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::auto-fuel.auto-fuel',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    localizations: Attribute.Relation<
      'api::auto-fuel.auto-fuel',
      'oneToMany',
      'api::auto-fuel.auto-fuel'
    >;
    locale: Attribute.String;
  };
}

export interface ApiAutoSizeAutoSize extends Schema.CollectionType {
  collectionName: 'auto_sizes';
  info: {
    singularName: 'auto-size';
    pluralName: 'auto-sizes';
    displayName: 'AutoSize';
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    Name: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Value: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    autos: Attribute.Relation<
      'api::auto-size.auto-size',
      'oneToMany',
      'api::auto.auto'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::auto-size.auto-size',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::auto-size.auto-size',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    localizations: Attribute.Relation<
      'api::auto-size.auto-size',
      'oneToMany',
      'api::auto-size.auto-size'
    >;
    locale: Attribute.String;
  };
}

export interface ApiAutoStatusAutoStatus extends Schema.CollectionType {
  collectionName: 'auto_statuses';
  info: {
    singularName: 'auto-status';
    pluralName: 'auto-statuses';
    displayName: 'AutoStatus';
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    Name: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Value: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    autos: Attribute.Relation<
      'api::auto-status.auto-status',
      'oneToMany',
      'api::auto.auto'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::auto-status.auto-status',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::auto-status.auto-status',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    localizations: Attribute.Relation<
      'api::auto-status.auto-status',
      'oneToMany',
      'api::auto-status.auto-status'
    >;
    locale: Attribute.String;
  };
}

export interface ApiAutoTransmissionAutoTransmission
  extends Schema.CollectionType {
  collectionName: 'auto_transmissions';
  info: {
    singularName: 'auto-transmission';
    pluralName: 'auto-transmissions';
    displayName: 'AutoTransmission';
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    Name: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Value: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    autos: Attribute.Relation<
      'api::auto-transmission.auto-transmission',
      'oneToMany',
      'api::auto.auto'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::auto-transmission.auto-transmission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::auto-transmission.auto-transmission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    localizations: Attribute.Relation<
      'api::auto-transmission.auto-transmission',
      'oneToMany',
      'api::auto-transmission.auto-transmission'
    >;
    locale: Attribute.String;
  };
}

export interface ApiAutoTypeAutoType extends Schema.CollectionType {
  collectionName: 'auto_types';
  info: {
    singularName: 'auto-type';
    pluralName: 'auto-types';
    displayName: 'AutoType';
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    Name: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Value: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    autos: Attribute.Relation<
      'api::auto-type.auto-type',
      'oneToMany',
      'api::auto.auto'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::auto-type.auto-type',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::auto-type.auto-type',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    localizations: Attribute.Relation<
      'api::auto-type.auto-type',
      'oneToMany',
      'api::auto-type.auto-type'
    >;
    locale: Attribute.String;
  };
}

export interface ApiBlockBlock extends Schema.CollectionType {
  collectionName: 'blocks';
  info: {
    singularName: 'block';
    pluralName: 'blocks';
    displayName: 'Block';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    block_type: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
        translate: {
          translate: 'translate';
        };
      }> &
      Attribute.SetMinMaxLength<{
        maxLength: 10;
      }>;
    block_type_full: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
        translate: {
          translate: 'translate';
        };
      }> &
      Attribute.SetMinMaxLength<{
        maxLength: 50;
      }>;
    block: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
        translate: {
          translate: 'translate';
        };
      }> &
      Attribute.SetMinMaxLength<{
        maxLength: 50;
      }>;
    userGroup: Attribute.Relation<
      'api::block.block',
      'oneToOne',
      'plugin::multi-tenant.user-group'
    > &
      Attribute.SetPluginOptions<{
        translate: {
          translate: 'translate';
        };
      }>;
    addresses: Attribute.Relation<
      'api::block.block',
      'oneToMany',
      'api::address.address'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::block.block',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::block.block',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    localizations: Attribute.Relation<
      'api::block.block',
      'oneToMany',
      'api::block.block'
    >;
    locale: Attribute.String;
  };
}

export interface ApiBlogBlog extends Schema.CollectionType {
  collectionName: 'blogs';
  info: {
    singularName: 'blog';
    pluralName: 'blogs';
    displayName: 'Blog';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    Title: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
        translate: {
          translate: 'translate';
        };
      }>;
    Description: Attribute.Text &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
        translate: {
          translate: 'translate';
        };
      }>;
    Slug: Attribute.Text &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }>;
    DynZone: Attribute.DynamicZone<
      ['common.meta', 'common.quote', 'common.rich-text']
    > &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
        translate: {
          translate: 'translate';
        };
      }>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'api::blog.blog', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'api::blog.blog', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    localizations: Attribute.Relation<
      'api::blog.blog',
      'oneToMany',
      'api::blog.blog'
    >;
    locale: Attribute.String;
  };
}

export interface ApiCityCity extends Schema.CollectionType {
  collectionName: 'cities';
  info: {
    singularName: 'city';
    pluralName: 'cities';
    displayName: 'City';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    city_fias_id: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }> &
      Attribute.SetMinMaxLength<{
        maxLength: 36;
      }>;
    city_kladr_id: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }> &
      Attribute.SetMinMaxLength<{
        maxLength: 19;
      }>;
    city_with_type: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }> &
      Attribute.SetMinMaxLength<{
        maxLength: 131;
      }>;
    city_type: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
        translate: {
          translate: 'translate';
        };
      }> &
      Attribute.SetMinMaxLength<{
        maxLength: 10;
      }>;
    city_type_full: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
        translate: {
          translate: 'translate';
        };
      }> &
      Attribute.SetMinMaxLength<{
        maxLength: 50;
      }>;
    city: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
        translate: {
          translate: 'translate';
        };
      }> &
      Attribute.SetMinMaxLength<{
        maxLength: 120;
      }>;
    userGroup: Attribute.Relation<
      'api::city.city',
      'manyToOne',
      'plugin::multi-tenant.user-group'
    > &
      Attribute.SetPluginOptions<{
        translate: {
          translate: 'translate';
        };
      }>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'api::city.city', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'api::city.city', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    localizations: Attribute.Relation<
      'api::city.city',
      'oneToMany',
      'api::city.city'
    >;
    locale: Attribute.String;
  };
}

export interface ApiCityDistrictCityDistrict extends Schema.CollectionType {
  collectionName: 'city_districts';
  info: {
    singularName: 'city-district';
    pluralName: 'city-districts';
    displayName: 'CityDistrict';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    city_district_fias_id: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }> &
      Attribute.SetMinMaxLength<{
        maxLength: 36;
      }>;
    city_district_kladr_id: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }> &
      Attribute.SetMinMaxLength<{
        maxLength: 19;
      }>;
    city_district_with_type: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
        translate: {
          translate: 'translate';
        };
      }> &
      Attribute.SetMinMaxLength<{
        maxLength: 131;
      }>;
    city_district_type: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
        translate: {
          translate: 'translate';
        };
      }> &
      Attribute.SetMinMaxLength<{
        maxLength: 10;
      }>;
    city_district_type_full: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
        translate: {
          translate: 'translate';
        };
      }> &
      Attribute.SetMinMaxLength<{
        maxLength: 50;
      }>;
    city_district: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
        translate: {
          translate: 'translate';
        };
      }> &
      Attribute.SetMinMaxLength<{
        maxLength: 120;
      }>;
    addresses: Attribute.Relation<
      'api::city-district.city-district',
      'oneToMany',
      'api::address.address'
    > &
      Attribute.SetPluginOptions<{
        translate: {
          translate: 'translate';
        };
      }>;
    userGroup: Attribute.Relation<
      'api::city-district.city-district',
      'manyToOne',
      'plugin::multi-tenant.user-group'
    > &
      Attribute.SetPluginOptions<{
        translate: {
          translate: 'translate';
        };
      }>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::city-district.city-district',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::city-district.city-district',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    localizations: Attribute.Relation<
      'api::city-district.city-district',
      'oneToMany',
      'api::city-district.city-district'
    >;
    locale: Attribute.String;
  };
}

export interface ApiCoachingCoaching extends Schema.CollectionType {
  collectionName: 'coachings';
  info: {
    singularName: 'coaching';
    pluralName: 'coachings';
    displayName: 'Coaching';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    Name: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
        translate: {
          translate: 'translate';
        };
      }>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::coaching.coaching',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::coaching.coaching',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    localizations: Attribute.Relation<
      'api::coaching.coaching',
      'oneToMany',
      'api::coaching.coaching'
    >;
    locale: Attribute.String;
  };
}

export interface ApiCompanyCompany extends Schema.CollectionType {
  collectionName: 'companies';
  info: {
    singularName: 'company';
    pluralName: 'companies';
    displayName: 'Company';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    title: Attribute.Text &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
        translate: {
          translate: 'translate';
        };
      }>;
    description: Attribute.RichText &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
        translate: {
          translate: 'translate';
        };
      }>;
    url: Attribute.Text &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }>;
    phone: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }>;
    fax: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }>;
    address: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }>;
    city: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }>;
    postcode: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }>;
    country: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }>;
    OldCode: Attribute.Integer &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }>;
    company_directories: Attribute.Relation<
      'api::company.company',
      'manyToMany',
      'api::company-directory.company-directory'
    > &
      Attribute.SetPluginOptions<{
        translate: {
          translate: 'translate';
        };
      }>;
    topic: Attribute.Text &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }>;
    email: Attribute.Text &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
        translate: {
          translate: 'translate';
        };
      }>;
    categoryid: Attribute.Integer &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    usastate: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
        translate: {
          translate: 'translate';
        };
      }>;
    worldregion: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
        translate: {
          translate: 'translate';
        };
      }>;
    canadaprovince: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
        translate: {
          translate: 'translate';
        };
      }>;
    pobox: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
        translate: {
          translate: 'translate';
        };
      }>;
    users: Attribute.Relation<
      'api::company.company',
      'manyToMany',
      'plugin::users-permissions.user'
    > &
      Attribute.SetPluginOptions<{
        translate: {
          translate: 'translate';
        };
      }>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::company.company',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::company.company',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    localizations: Attribute.Relation<
      'api::company.company',
      'oneToMany',
      'api::company.company'
    >;
    locale: Attribute.String;
  };
}

export interface ApiCompanyDirectoryCompanyDirectory
  extends Schema.CollectionType {
  collectionName: 'company_directories';
  info: {
    singularName: 'company-directory';
    pluralName: 'company-directories';
    displayName: 'CompanyDirectory';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    title: Attribute.Text &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    oldcode: Attribute.Integer &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }>;
    titleen: Attribute.Text &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }>;
    parent: Attribute.Relation<
      'api::company-directory.company-directory',
      'manyToOne',
      'api::company-directory.company-directory'
    >;
    child: Attribute.Relation<
      'api::company-directory.company-directory',
      'oneToMany',
      'api::company-directory.company-directory'
    >;
    user: Attribute.Relation<
      'api::company-directory.company-directory',
      'manyToOne',
      'plugin::users-permissions.user'
    >;
    companies: Attribute.Relation<
      'api::company-directory.company-directory',
      'manyToMany',
      'api::company.company'
    >;
    parenttitle: Attribute.Text &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    parentid: Attribute.Integer &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::company-directory.company-directory',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::company-directory.company-directory',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    localizations: Attribute.Relation<
      'api::company-directory.company-directory',
      'oneToMany',
      'api::company-directory.company-directory'
    >;
    locale: Attribute.String;
  };
}

export interface ApiCountryCountry extends Schema.CollectionType {
  collectionName: 'countries';
  info: {
    singularName: 'country';
    pluralName: 'countries';
    displayName: 'Country';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
        translate: {
          translate: 'translate';
        };
      }>;
    country_iso_code: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
        translate: {
          translate: 'translate';
        };
      }> &
      Attribute.SetMinMaxLength<{
        maxLength: 2;
      }>;
    userGroup: Attribute.Relation<
      'api::country.country',
      'manyToOne',
      'plugin::multi-tenant.user-group'
    > &
      Attribute.SetPluginOptions<{
        translate: {
          translate: 'translate';
        };
      }>;
    addresses: Attribute.Relation<
      'api::country.country',
      'oneToMany',
      'api::address.address'
    > &
      Attribute.SetPluginOptions<{
        translate: {
          translate: 'translate';
        };
      }>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::country.country',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::country.country',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    localizations: Attribute.Relation<
      'api::country.country',
      'oneToMany',
      'api::country.country'
    >;
    locale: Attribute.String;
  };
}

export interface ApiCourseCourse extends Schema.CollectionType {
  collectionName: 'courses';
  info: {
    singularName: 'course';
    pluralName: 'courses';
    displayName: 'Course';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    Name: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
        translate: {
          translate: 'translate';
        };
      }>;
    Description: Attribute.Text &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
        translate: {
          translate: 'translate';
        };
      }>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::course.course',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::course.course',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    localizations: Attribute.Relation<
      'api::course.course',
      'oneToMany',
      'api::course.course'
    >;
    locale: Attribute.String;
  };
}

export interface ApiCurrencyCurrency extends Schema.CollectionType {
  collectionName: 'currencies';
  info: {
    singularName: 'currency';
    pluralName: 'currencies';
    displayName: 'Currency';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    Name: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
        translate: {
          translate: 'translate';
        };
      }>;
    autos: Attribute.Relation<
      'api::currency.currency',
      'oneToMany',
      'api::auto.auto'
    > &
      Attribute.SetPluginOptions<{
        translate: {
          translate: 'translate';
        };
      }>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::currency.currency',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::currency.currency',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    localizations: Attribute.Relation<
      'api::currency.currency',
      'oneToMany',
      'api::currency.currency'
    >;
    locale: Attribute.String;
  };
}

export interface ApiEventEvent extends Schema.CollectionType {
  collectionName: 'events';
  info: {
    singularName: 'event';
    pluralName: 'events';
    displayName: 'Event';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    Title: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
        translate: {
          translate: 'translate';
        };
      }>;
    Text: Attribute.Text &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
        translate: {
          translate: 'translate';
        };
      }>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::event.event',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::event.event',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    localizations: Attribute.Relation<
      'api::event.event',
      'oneToMany',
      'api::event.event'
    >;
    locale: Attribute.String;
  };
}

export interface ApiHotelHotel extends Schema.CollectionType {
  collectionName: 'hotels';
  info: {
    singularName: 'hotel';
    pluralName: 'hotels';
    displayName: 'Hotel';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    Name: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
        translate: {
          translate: 'translate';
        };
      }>;
    hotel_features: Attribute.Relation<
      'api::hotel.hotel',
      'manyToMany',
      'api::hotel-feature.hotel-feature'
    > &
      Attribute.SetPluginOptions<{
        translate: {
          translate: 'translate';
        };
      }>;
    userGroup: Attribute.Relation<
      'api::hotel.hotel',
      'manyToOne',
      'plugin::multi-tenant.user-group'
    > &
      Attribute.SetPluginOptions<{
        translate: {
          translate: 'translate';
        };
      }>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::hotel.hotel',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::hotel.hotel',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    localizations: Attribute.Relation<
      'api::hotel.hotel',
      'oneToMany',
      'api::hotel.hotel'
    >;
    locale: Attribute.String;
  };
}

export interface ApiHotelFeatureHotelFeature extends Schema.CollectionType {
  collectionName: 'hotel_features';
  info: {
    singularName: 'hotel-feature';
    pluralName: 'hotel-features';
    displayName: 'HotelFeature';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    Name: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
        translate: {
          translate: 'translate';
        };
      }>;
    hotels: Attribute.Relation<
      'api::hotel-feature.hotel-feature',
      'manyToMany',
      'api::hotel.hotel'
    > &
      Attribute.SetPluginOptions<{
        translate: {
          translate: 'translate';
        };
      }>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::hotel-feature.hotel-feature',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::hotel-feature.hotel-feature',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    localizations: Attribute.Relation<
      'api::hotel-feature.hotel-feature',
      'oneToMany',
      'api::hotel-feature.hotel-feature'
    >;
    locale: Attribute.String;
  };
}

export interface ApiHouseHouse extends Schema.CollectionType {
  collectionName: 'houses';
  info: {
    singularName: 'house';
    pluralName: 'houses';
    displayName: 'House';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    house_fias_id: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
        translate: {
          translate: 'translate';
        };
      }> &
      Attribute.SetMinMaxLength<{
        maxLength: 36;
      }> &
      Attribute.DefaultTo<'36'>;
    house_kladr_id: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }> &
      Attribute.SetMinMaxLength<{
        maxLength: 19;
      }>;
    house_cadnum: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }> &
      Attribute.SetMinMaxLength<{
        maxLength: 50;
      }>;
    house_type: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
        translate: {
          translate: 'translate';
        };
      }> &
      Attribute.SetMinMaxLength<{
        maxLength: 10;
      }>;
    house_type_full: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
        translate: {
          translate: 'translate';
        };
      }> &
      Attribute.SetMinMaxLength<{
        maxLength: 50;
      }>;
    house: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
        translate: {
          translate: 'translate';
        };
      }> &
      Attribute.DefaultTo<'50'>;
    userGroup: Attribute.Relation<
      'api::house.house',
      'manyToOne',
      'plugin::multi-tenant.user-group'
    > &
      Attribute.SetPluginOptions<{
        translate: {
          translate: 'translate';
        };
      }>;
    addresses: Attribute.Relation<
      'api::house.house',
      'oneToMany',
      'api::address.address'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::house.house',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::house.house',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    localizations: Attribute.Relation<
      'api::house.house',
      'oneToMany',
      'api::house.house'
    >;
    locale: Attribute.String;
  };
}

export interface ApiInventoryInventory extends Schema.CollectionType {
  collectionName: 'inventories';
  info: {
    singularName: 'inventory';
    pluralName: 'inventories';
    displayName: 'Inventory';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    Name: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
        translate: {
          translate: 'translate';
        };
      }>;
    userGroup: Attribute.Relation<
      'api::inventory.inventory',
      'manyToOne',
      'plugin::multi-tenant.user-group'
    > &
      Attribute.SetPluginOptions<{
        translate: {
          translate: 'translate';
        };
      }>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::inventory.inventory',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::inventory.inventory',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    localizations: Attribute.Relation<
      'api::inventory.inventory',
      'oneToMany',
      'api::inventory.inventory'
    >;
    locale: Attribute.String;
  };
}

export interface ApiLegalLegal extends Schema.CollectionType {
  collectionName: 'legals';
  info: {
    singularName: 'legal';
    pluralName: 'legals';
    displayName: 'Legal';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    Name: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
        translate: {
          translate: 'translate';
        };
      }>;
    Description: Attribute.Text &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
        translate: {
          translate: 'translate';
        };
      }>;
    Slug: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
        translate: {
          translate: 'translate';
        };
      }>;
    Image: Attribute.Media &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
        translate: {
          translate: 'translate';
        };
      }>;
    Images: Attribute.Media &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
        translate: {
          translate: 'translate';
        };
      }>;
    AddressRel: Attribute.Relation<
      'api::legal.legal',
      'manyToOne',
      'api::address.address'
    > &
      Attribute.SetPluginOptions<{
        translate: {
          translate: 'translate';
        };
      }>;
    Phone: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }>;
    Fax: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }>;
    Email: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }>;
    Site: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
        translate: {
          translate: 'translate';
        };
      }>;
    Chat: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }>;
    OpeningHours: Attribute.Component<'restaurant.opening-hours', true> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }>;
    legal_directory: Attribute.Relation<
      'api::legal.legal',
      'manyToOne',
      'api::legal-directory.legal-directory'
    > &
      Attribute.SetPluginOptions<{
        translate: {
          translate: 'translate';
        };
      }>;
    SocialNetwork: Attribute.Component<'shared.social-network', true> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
        translate: {
          translate: 'translate';
        };
      }>;
    Blocks: Attribute.DynamicZone<
      ['common.rich-text', 'blocks.cta', 'blocks.faq']
    > &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
        translate: {
          translate: 'translate';
        };
      }>;
    userGroup: Attribute.Relation<
      'api::legal.legal',
      'manyToOne',
      'plugin::multi-tenant.user-group'
    > &
      Attribute.SetPluginOptions<{
        translate: {
          translate: 'translate';
        };
      }>;
    restaurant: Attribute.Component<'restaurant.restaurant'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
        translate: {
          translate: 'translate';
        };
      }>;
    hotel: Attribute.Component<'hotel.hotel'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
        translate: {
          translate: 'translate';
        };
      }>;
    title: Attribute.Text &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
        translate: {
          translate: 'translate';
        };
      }>;
    url: Attribute.Text &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }>;
    address: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }>;
    city: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }>;
    postcode: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }>;
    country: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }>;
    OldCode: Attribute.Integer &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }>;
    topic: Attribute.Text &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }>;
    categoryid: Attribute.Integer &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }>;
    usastate: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }>;
    worldregion: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }>;
    canadaprovince: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }>;
    pobox: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::legal.legal',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::legal.legal',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    localizations: Attribute.Relation<
      'api::legal.legal',
      'oneToMany',
      'api::legal.legal'
    >;
    locale: Attribute.String;
  };
}

export interface ApiLegalDirectoryLegalDirectory extends Schema.CollectionType {
  collectionName: 'legal_directories';
  info: {
    singularName: 'legal-directory';
    pluralName: 'legal-directories';
    displayName: 'LegalDirectory';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    title: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
        translate: {
          translate: 'translate';
        };
      }>;
    parents: Attribute.Relation<
      'api::legal-directory.legal-directory',
      'oneToMany',
      'api::legal-directory.legal-directory'
    > &
      Attribute.SetPluginOptions<{
        translate: {
          translate: 'translate';
        };
      }>;
    child: Attribute.Relation<
      'api::legal-directory.legal-directory',
      'manyToOne',
      'api::legal-directory.legal-directory'
    > &
      Attribute.SetPluginOptions<{
        translate: {
          translate: 'translate';
        };
      }>;
    legals: Attribute.Relation<
      'api::legal-directory.legal-directory',
      'oneToMany',
      'api::legal.legal'
    > &
      Attribute.SetPluginOptions<{
        translate: {
          translate: 'translate';
        };
      }>;
    userGroup: Attribute.Relation<
      'api::legal-directory.legal-directory',
      'manyToOne',
      'plugin::multi-tenant.user-group'
    > &
      Attribute.SetPluginOptions<{
        translate: {
          translate: 'translate';
        };
      }>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::legal-directory.legal-directory',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::legal-directory.legal-directory',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    localizations: Attribute.Relation<
      'api::legal-directory.legal-directory',
      'oneToMany',
      'api::legal-directory.legal-directory'
    >;
    locale: Attribute.String;
  };
}

export interface ApiMenuMenu extends Schema.CollectionType {
  collectionName: 'menus';
  info: {
    singularName: 'menu';
    pluralName: 'menus';
    displayName: 'Menu';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    Name: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
        translate: {
          translate: 'translate';
        };
      }>;
    Url: Attribute.Text &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }>;
    parent: Attribute.Relation<
      'api::menu.menu',
      'manyToOne',
      'api::menu.menu'
    > &
      Attribute.SetPluginOptions<{
        translate: {
          translate: 'translate';
        };
      }>;
    children: Attribute.Relation<
      'api::menu.menu',
      'oneToMany',
      'api::menu.menu'
    > &
      Attribute.SetPluginOptions<{
        translate: {
          translate: 'translate';
        };
      }>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'api::menu.menu', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'api::menu.menu', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    localizations: Attribute.Relation<
      'api::menu.menu',
      'oneToMany',
      'api::menu.menu'
    >;
    locale: Attribute.String;
  };
}

export interface ApiPersonPerson extends Schema.CollectionType {
  collectionName: 'people';
  info: {
    singularName: 'person';
    pluralName: 'people';
    displayName: 'Person';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    Name: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
        translate: {
          translate: 'translate';
        };
      }>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::person.person',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::person.person',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    localizations: Attribute.Relation<
      'api::person.person',
      'oneToMany',
      'api::person.person'
    >;
    locale: Attribute.String;
  };
}

export interface ApiProductProduct extends Schema.CollectionType {
  collectionName: 'products';
  info: {
    singularName: 'product';
    pluralName: 'products';
    displayName: 'Product';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    Name: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
        translate: {
          translate: 'translate';
        };
      }>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::product.product',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::product.product',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    localizations: Attribute.Relation<
      'api::product.product',
      'oneToMany',
      'api::product.product'
    >;
    locale: Attribute.String;
  };
}

export interface ApiRealtyRealty extends Schema.CollectionType {
  collectionName: 'realties';
  info: {
    singularName: 'realty';
    pluralName: 'realties';
    displayName: 'Realty';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    Name: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
        translate: {
          translate: 'translate';
        };
      }>;
    address: Attribute.Relation<
      'api::realty.realty',
      'manyToOne',
      'api::address.address'
    > &
      Attribute.SetPluginOptions<{
        translate: {
          translate: 'translate';
        };
      }>;
    Price: Attribute.Integer &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Images: Attribute.Media &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
        translate: {
          translate: 'translate';
        };
      }>;
    Description: Attribute.Text &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
        translate: {
          translate: 'translate';
        };
      }>;
    Guests: Attribute.Integer &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Bedrooms: Attribute.Integer &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Beds: Attribute.Integer &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Baths: Attribute.Integer &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    WiFi: Attribute.Boolean &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Kitchen: Attribute.Boolean &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Heating: Attribute.Boolean &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    FreeParking: Attribute.Boolean &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    EntirePlace: Attribute.Boolean &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    realty_type: Attribute.Relation<
      'api::realty.realty',
      'manyToOne',
      'api::realty-type.realty-type'
    > &
      Attribute.SetPluginOptions<{
        translate: {
          translate: 'translate';
        };
      }>;
    userGroup: Attribute.Relation<
      'api::realty.realty',
      'manyToOne',
      'plugin::multi-tenant.user-group'
    > &
      Attribute.SetPluginOptions<{
        translate: {
          translate: 'translate';
        };
      }>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::realty.realty',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::realty.realty',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    localizations: Attribute.Relation<
      'api::realty.realty',
      'oneToMany',
      'api::realty.realty'
    >;
    locale: Attribute.String;
  };
}

export interface ApiRealtyTypeRealtyType extends Schema.CollectionType {
  collectionName: 'realty_types';
  info: {
    singularName: 'realty-type';
    pluralName: 'realty-types';
    displayName: 'RealtyType';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    Name: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
        translate: {
          translate: 'translate';
        };
      }>;
    realties: Attribute.Relation<
      'api::realty-type.realty-type',
      'oneToMany',
      'api::realty.realty'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::realty-type.realty-type',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::realty-type.realty-type',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    localizations: Attribute.Relation<
      'api::realty-type.realty-type',
      'oneToMany',
      'api::realty-type.realty-type'
    >;
    locale: Attribute.String;
  };
}

export interface ApiRegionRegion extends Schema.CollectionType {
  collectionName: 'regions';
  info: {
    singularName: 'region';
    pluralName: 'regions';
    displayName: 'Region';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    federal_district: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
        translate: {
          translate: 'translate';
        };
      }> &
      Attribute.SetMinMaxLength<{
        maxLength: 20;
      }>;
    region_fias_id: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }> &
      Attribute.SetMinMaxLength<{
        maxLength: 36;
      }>;
    region_kladr_id: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }> &
      Attribute.SetMinMaxLength<{
        maxLength: 19;
      }>;
    region_iso_code: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }> &
      Attribute.SetMinMaxLength<{
        maxLength: 6;
      }>;
    region_with_type: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
        translate: {
          translate: 'translate';
        };
      }> &
      Attribute.SetMinMaxLength<{
        maxLength: 131;
      }>;
    region_type: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
        translate: {
          translate: 'translate';
        };
      }> &
      Attribute.SetMinMaxLength<{
        maxLength: 10;
      }>;
    region_type_full: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
        translate: {
          translate: 'translate';
        };
      }> &
      Attribute.SetMinMaxLength<{
        maxLength: 50;
      }>;
    region: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
        translate: {
          translate: 'translate';
        };
      }> &
      Attribute.DefaultTo<'120'>;
    addresses: Attribute.Relation<
      'api::region.region',
      'oneToMany',
      'api::address.address'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::region.region',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::region.region',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    localizations: Attribute.Relation<
      'api::region.region',
      'oneToMany',
      'api::region.region'
    >;
    locale: Attribute.String;
  };
}

export interface ApiRestaurantRestaurant extends Schema.CollectionType {
  collectionName: 'restaurants';
  info: {
    singularName: 'restaurant';
    pluralName: 'restaurants';
    displayName: 'Restaurant';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    Name: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
        translate: {
          translate: 'translate';
        };
      }>;
    Description: Attribute.RichText &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
        translate: {
          translate: 'translate';
        };
      }>;
    Image: Attribute.Media &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
        translate: {
          translate: 'translate';
        };
      }>;
    Blocks: Attribute.DynamicZone<
      [
        'restaurant.dish',
        'common.rich-text',
        'blocks.faq',
        'blocks.cta',
        'restaurant.related-restaurants'
      ]
    > &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
        translate: {
          translate: 'translate';
        };
      }>;
    restaurant_cuisines: Attribute.Relation<
      'api::restaurant.restaurant',
      'manyToMany',
      'api::restaurant-cuisine.restaurant-cuisine'
    > &
      Attribute.SetPluginOptions<{
        translate: {
          translate: 'translate';
        };
      }>;
    restaurant_dishes: Attribute.Relation<
      'api::restaurant.restaurant',
      'manyToMany',
      'api::restaurant-dish.restaurant-dish'
    > &
      Attribute.SetPluginOptions<{
        translate: {
          translate: 'translate';
        };
      }>;
    restaurant_features: Attribute.Relation<
      'api::restaurant.restaurant',
      'manyToMany',
      'api::restaurant-feature.restaurant-feature'
    > &
      Attribute.SetPluginOptions<{
        translate: {
          translate: 'translate';
        };
      }>;
    restaurant_prices: Attribute.Relation<
      'api::restaurant.restaurant',
      'manyToMany',
      'api::restaurant-price.restaurant-price'
    > &
      Attribute.SetPluginOptions<{
        translate: {
          translate: 'translate';
        };
      }>;
    restaurant_types: Attribute.Relation<
      'api::restaurant.restaurant',
      'manyToMany',
      'api::restaurant-type.restaurant-type'
    > &
      Attribute.SetPluginOptions<{
        translate: {
          translate: 'translate';
        };
      }>;
    slug: Attribute.UID<'api::restaurant.restaurant', 'Name'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    information: Attribute.Component<'restaurant.information'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }>;
    socialNetworks: Attribute.Component<'shared.social-network', true> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }>;
    userGroup: Attribute.Relation<
      'api::restaurant.restaurant',
      'manyToOne',
      'plugin::multi-tenant.user-group'
    > &
      Attribute.SetPluginOptions<{
        translate: {
          translate: 'translate';
        };
      }>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::restaurant.restaurant',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::restaurant.restaurant',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    localizations: Attribute.Relation<
      'api::restaurant.restaurant',
      'oneToMany',
      'api::restaurant.restaurant'
    >;
    locale: Attribute.String;
  };
}

export interface ApiRestaurantCuisineRestaurantCuisine
  extends Schema.CollectionType {
  collectionName: 'restaurant_cuisines';
  info: {
    singularName: 'restaurant-cuisine';
    pluralName: 'restaurant-cuisines';
    displayName: 'RestaurantCuisine';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    Name: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
        translate: {
          translate: 'translate';
        };
      }>;
    restaurants: Attribute.Relation<
      'api::restaurant-cuisine.restaurant-cuisine',
      'manyToMany',
      'api::restaurant.restaurant'
    > &
      Attribute.SetPluginOptions<{
        translate: {
          translate: 'translate';
        };
      }>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::restaurant-cuisine.restaurant-cuisine',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::restaurant-cuisine.restaurant-cuisine',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    localizations: Attribute.Relation<
      'api::restaurant-cuisine.restaurant-cuisine',
      'oneToMany',
      'api::restaurant-cuisine.restaurant-cuisine'
    >;
    locale: Attribute.String;
  };
}

export interface ApiRestaurantDishRestaurantDish extends Schema.CollectionType {
  collectionName: 'restaurant_dishes';
  info: {
    singularName: 'restaurant-dish';
    pluralName: 'restaurant-dishes';
    displayName: 'RestaurantDish';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    Name: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
        translate: {
          translate: 'translate';
        };
      }>;
    restaurants: Attribute.Relation<
      'api::restaurant-dish.restaurant-dish',
      'manyToMany',
      'api::restaurant.restaurant'
    > &
      Attribute.SetPluginOptions<{
        translate: {
          translate: 'translate';
        };
      }>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::restaurant-dish.restaurant-dish',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::restaurant-dish.restaurant-dish',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    localizations: Attribute.Relation<
      'api::restaurant-dish.restaurant-dish',
      'oneToMany',
      'api::restaurant-dish.restaurant-dish'
    >;
    locale: Attribute.String;
  };
}

export interface ApiRestaurantFeatureRestaurantFeature
  extends Schema.CollectionType {
  collectionName: 'restaurant_features';
  info: {
    singularName: 'restaurant-feature';
    pluralName: 'restaurant-features';
    displayName: 'RestaurantFeature';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    Name: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
        translate: {
          translate: 'translate';
        };
      }>;
    restaurants: Attribute.Relation<
      'api::restaurant-feature.restaurant-feature',
      'manyToMany',
      'api::restaurant.restaurant'
    > &
      Attribute.SetPluginOptions<{
        translate: {
          translate: 'translate';
        };
      }>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::restaurant-feature.restaurant-feature',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::restaurant-feature.restaurant-feature',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    localizations: Attribute.Relation<
      'api::restaurant-feature.restaurant-feature',
      'oneToMany',
      'api::restaurant-feature.restaurant-feature'
    >;
    locale: Attribute.String;
  };
}

export interface ApiRestaurantPriceRestaurantPrice
  extends Schema.CollectionType {
  collectionName: 'restaurant_prices';
  info: {
    singularName: 'restaurant-price';
    pluralName: 'restaurant-prices';
    displayName: 'RestaurantPrice';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    Name: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
        translate: {
          translate: 'translate';
        };
      }>;
    restaurants: Attribute.Relation<
      'api::restaurant-price.restaurant-price',
      'manyToMany',
      'api::restaurant.restaurant'
    > &
      Attribute.SetPluginOptions<{
        translate: {
          translate: 'translate';
        };
      }>;
    OrderBy: Attribute.Integer &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::restaurant-price.restaurant-price',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::restaurant-price.restaurant-price',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    localizations: Attribute.Relation<
      'api::restaurant-price.restaurant-price',
      'oneToMany',
      'api::restaurant-price.restaurant-price'
    >;
    locale: Attribute.String;
  };
}

export interface ApiRestaurantTypeRestaurantType extends Schema.CollectionType {
  collectionName: 'restaurant_types';
  info: {
    singularName: 'restaurant-type';
    pluralName: 'restaurant-types';
    displayName: 'RestaurantType';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    Name: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        translate: {
          translate: 'translate';
        };
        i18n: {
          localized: true;
        };
      }>;
    restaurants: Attribute.Relation<
      'api::restaurant-type.restaurant-type',
      'manyToMany',
      'api::restaurant.restaurant'
    > &
      Attribute.SetPluginOptions<{
        translate: {
          translate: 'translate';
        };
      }>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::restaurant-type.restaurant-type',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::restaurant-type.restaurant-type',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    localizations: Attribute.Relation<
      'api::restaurant-type.restaurant-type',
      'oneToMany',
      'api::restaurant-type.restaurant-type'
    >;
    locale: Attribute.String;
  };
}

export interface ApiServiceService extends Schema.CollectionType {
  collectionName: 'services';
  info: {
    singularName: 'service';
    pluralName: 'services';
    displayName: 'Service';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    Name: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
        translate: {
          translate: 'translate';
        };
      }>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::service.service',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::service.service',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    localizations: Attribute.Relation<
      'api::service.service',
      'oneToMany',
      'api::service.service'
    >;
    locale: Attribute.String;
  };
}

export interface ApiSettlementSettlement extends Schema.CollectionType {
  collectionName: 'settlements';
  info: {
    singularName: 'settlement';
    pluralName: 'settlements';
    displayName: 'Settlement';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    settlement_fias_id: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }> &
      Attribute.SetMinMaxLength<{
        maxLength: 36;
      }>;
    settlement_kladr_id: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }> &
      Attribute.SetMinMaxLength<{
        maxLength: 19;
      }>;
    settlement_with_type: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
        translate: {
          translate: 'translate';
        };
      }> &
      Attribute.SetMinMaxLength<{
        maxLength: 131;
      }>;
    settlement_type: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
        translate: {
          translate: 'translate';
        };
      }> &
      Attribute.SetMinMaxLength<{
        maxLength: 10;
      }>;
    settlement_type_full: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
        translate: {
          translate: 'translate';
        };
      }> &
      Attribute.SetMinMaxLength<{
        maxLength: 50;
      }>;
    settlement: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
        translate: {
          translate: 'translate';
        };
      }> &
      Attribute.SetMinMaxLength<{
        maxLength: 120;
      }>;
    userGroup: Attribute.Relation<
      'api::settlement.settlement',
      'manyToOne',
      'plugin::multi-tenant.user-group'
    > &
      Attribute.SetPluginOptions<{
        translate: {
          translate: 'translate';
        };
      }>;
    addresses: Attribute.Relation<
      'api::settlement.settlement',
      'oneToMany',
      'api::address.address'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::settlement.settlement',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::settlement.settlement',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    localizations: Attribute.Relation<
      'api::settlement.settlement',
      'oneToMany',
      'api::settlement.settlement'
    >;
    locale: Attribute.String;
  };
}

export interface ApiSteadStead extends Schema.CollectionType {
  collectionName: 'steads';
  info: {
    singularName: 'stead';
    pluralName: 'steads';
    displayName: 'Stead';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    stead_fias_id: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }> &
      Attribute.SetMinMaxLength<{
        maxLength: 36;
      }>;
    stead_kladr_id: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }> &
      Attribute.SetMinMaxLength<{
        maxLength: 19;
      }>;
    stead_cadnum: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
        translate: {
          translate: 'translate';
        };
      }> &
      Attribute.SetMinMaxLength<{
        maxLength: 50;
      }>;
    stead_type: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
        translate: {
          translate: 'translate';
        };
      }> &
      Attribute.SetMinMaxLength<{
        maxLength: 10;
      }>;
    stead_type_full: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
        translate: {
          translate: 'translate';
        };
      }> &
      Attribute.SetMinMaxLength<{
        maxLength: 50;
      }>;
    stead: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
        translate: {
          translate: 'translate';
        };
      }> &
      Attribute.SetMinMaxLength<{
        maxLength: 50;
      }>;
    userGroup: Attribute.Relation<
      'api::stead.stead',
      'manyToOne',
      'plugin::multi-tenant.user-group'
    > &
      Attribute.SetPluginOptions<{
        translate: {
          translate: 'translate';
        };
      }>;
    addresses: Attribute.Relation<
      'api::stead.stead',
      'oneToMany',
      'api::address.address'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::stead.stead',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::stead.stead',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    localizations: Attribute.Relation<
      'api::stead.stead',
      'oneToMany',
      'api::stead.stead'
    >;
    locale: Attribute.String;
  };
}

export interface ApiStreetStreet extends Schema.CollectionType {
  collectionName: 'streets';
  info: {
    singularName: 'street';
    pluralName: 'streets';
    displayName: 'Street';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    street_fias_id: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }> &
      Attribute.SetMinMaxLength<{
        maxLength: 36;
      }>;
    street_kladr_id: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }> &
      Attribute.SetMinMaxLength<{
        maxLength: 19;
      }>;
    street_with_type: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
        translate: {
          translate: 'translate';
        };
      }> &
      Attribute.SetMinMaxLength<{
        maxLength: 131;
      }>;
    street_type: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
        translate: {
          translate: 'translate';
        };
      }> &
      Attribute.SetMinMaxLength<{
        maxLength: 10;
      }>;
    street_type_full: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
        translate: {
          translate: 'translate';
        };
      }> &
      Attribute.SetMinMaxLength<{
        maxLength: 50;
      }>;
    street: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
        translate: {
          translate: 'translate';
        };
      }> &
      Attribute.SetMinMaxLength<{
        maxLength: 120;
      }>;
    userGroup: Attribute.Relation<
      'api::street.street',
      'manyToOne',
      'plugin::multi-tenant.user-group'
    > &
      Attribute.SetPluginOptions<{
        translate: {
          translate: 'translate';
        };
      }>;
    addresses: Attribute.Relation<
      'api::street.street',
      'oneToMany',
      'api::address.address'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::street.street',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::street.street',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    localizations: Attribute.Relation<
      'api::street.street',
      'oneToMany',
      'api::street.street'
    >;
    locale: Attribute.String;
  };
}

export interface ApiTimeZoneTimeZone extends Schema.CollectionType {
  collectionName: 'time_zones';
  info: {
    singularName: 'time-zone';
    pluralName: 'time-zones';
    displayName: 'TimeZone';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    Name: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
        translate: {
          translate: 'translate';
        };
      }>;
    userGroup: Attribute.Relation<
      'api::time-zone.time-zone',
      'manyToOne',
      'plugin::multi-tenant.user-group'
    > &
      Attribute.SetPluginOptions<{
        translate: {
          translate: 'translate';
        };
      }>;
    addresses: Attribute.Relation<
      'api::time-zone.time-zone',
      'oneToMany',
      'api::address.address'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::time-zone.time-zone',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::time-zone.time-zone',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    localizations: Attribute.Relation<
      'api::time-zone.time-zone',
      'oneToMany',
      'api::time-zone.time-zone'
    >;
    locale: Attribute.String;
  };
}

export interface ApiTodoTodo extends Schema.CollectionType {
  collectionName: 'todos';
  info: {
    singularName: 'todo';
    pluralName: 'todos';
    displayName: 'Todo';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    title: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
        translate: {
          translate: 'translate';
        };
      }>;
    description: Attribute.Text &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
        translate: {
          translate: 'translate';
        };
      }>;
    due: Attribute.Date &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }>;
    finished: Attribute.Boolean &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }> &
      Attribute.DefaultTo<false>;
    users_permissions_user: Attribute.Relation<
      'api::todo.todo',
      'manyToOne',
      'plugin::users-permissions.user'
    > &
      Attribute.SetPluginOptions<{
        translate: {
          translate: 'translate';
        };
      }>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'api::todo.todo', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'api::todo.todo', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    localizations: Attribute.Relation<
      'api::todo.todo',
      'oneToMany',
      'api::todo.todo'
    >;
    locale: Attribute.String;
  };
}

export interface ApiTransportTransport extends Schema.CollectionType {
  collectionName: 'transports';
  info: {
    singularName: 'transport';
    pluralName: 'transports';
    displayName: 'Transport';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    Name: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
        translate: {
          translate: 'translate';
        };
      }>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::transport.transport',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::transport.transport',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    localizations: Attribute.Relation<
      'api::transport.transport',
      'oneToMany',
      'api::transport.transport'
    >;
    locale: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface ContentTypes {
      'admin::permission': AdminPermission;
      'admin::user': AdminUser;
      'admin::role': AdminRole;
      'admin::api-token': AdminApiToken;
      'admin::api-token-permission': AdminApiTokenPermission;
      'admin::transfer-token': AdminTransferToken;
      'admin::transfer-token-permission': AdminTransferTokenPermission;
      'plugin::upload.file': PluginUploadFile;
      'plugin::upload.folder': PluginUploadFolder;
      'plugin::content-releases.release': PluginContentReleasesRelease;
      'plugin::content-releases.release-action': PluginContentReleasesReleaseAction;
      'plugin::translate.batch-translate-job': PluginTranslateBatchTranslateJob;
      'plugin::multi-tenant.tenant': PluginMultiTenantTenant;
      'plugin::multi-tenant.user-group': PluginMultiTenantUserGroup;
      'plugin::i18n.locale': PluginI18NLocale;
      'plugin::users-permissions.permission': PluginUsersPermissionsPermission;
      'plugin::users-permissions.role': PluginUsersPermissionsRole;
      'plugin::users-permissions.user': PluginUsersPermissionsUser;
      'api::address.address': ApiAddressAddress;
      'api::animal.animal': ApiAnimalAnimal;
      'api::area.area': ApiAreaArea;
      'api::asset.asset': ApiAssetAsset;
      'api::auto.auto': ApiAutoAuto;
      'api::auto-color.auto-color': ApiAutoColorAutoColor;
      'api::auto-condition.auto-condition': ApiAutoConditionAutoCondition;
      'api::auto-cylinder.auto-cylinder': ApiAutoCylinderAutoCylinder;
      'api::auto-drive.auto-drive': ApiAutoDriveAutoDrive;
      'api::auto-fuel.auto-fuel': ApiAutoFuelAutoFuel;
      'api::auto-size.auto-size': ApiAutoSizeAutoSize;
      'api::auto-status.auto-status': ApiAutoStatusAutoStatus;
      'api::auto-transmission.auto-transmission': ApiAutoTransmissionAutoTransmission;
      'api::auto-type.auto-type': ApiAutoTypeAutoType;
      'api::block.block': ApiBlockBlock;
      'api::blog.blog': ApiBlogBlog;
      'api::city.city': ApiCityCity;
      'api::city-district.city-district': ApiCityDistrictCityDistrict;
      'api::coaching.coaching': ApiCoachingCoaching;
      'api::company.company': ApiCompanyCompany;
      'api::company-directory.company-directory': ApiCompanyDirectoryCompanyDirectory;
      'api::country.country': ApiCountryCountry;
      'api::course.course': ApiCourseCourse;
      'api::currency.currency': ApiCurrencyCurrency;
      'api::event.event': ApiEventEvent;
      'api::hotel.hotel': ApiHotelHotel;
      'api::hotel-feature.hotel-feature': ApiHotelFeatureHotelFeature;
      'api::house.house': ApiHouseHouse;
      'api::inventory.inventory': ApiInventoryInventory;
      'api::legal.legal': ApiLegalLegal;
      'api::legal-directory.legal-directory': ApiLegalDirectoryLegalDirectory;
      'api::menu.menu': ApiMenuMenu;
      'api::person.person': ApiPersonPerson;
      'api::product.product': ApiProductProduct;
      'api::realty.realty': ApiRealtyRealty;
      'api::realty-type.realty-type': ApiRealtyTypeRealtyType;
      'api::region.region': ApiRegionRegion;
      'api::restaurant.restaurant': ApiRestaurantRestaurant;
      'api::restaurant-cuisine.restaurant-cuisine': ApiRestaurantCuisineRestaurantCuisine;
      'api::restaurant-dish.restaurant-dish': ApiRestaurantDishRestaurantDish;
      'api::restaurant-feature.restaurant-feature': ApiRestaurantFeatureRestaurantFeature;
      'api::restaurant-price.restaurant-price': ApiRestaurantPriceRestaurantPrice;
      'api::restaurant-type.restaurant-type': ApiRestaurantTypeRestaurantType;
      'api::service.service': ApiServiceService;
      'api::settlement.settlement': ApiSettlementSettlement;
      'api::stead.stead': ApiSteadStead;
      'api::street.street': ApiStreetStreet;
      'api::time-zone.time-zone': ApiTimeZoneTimeZone;
      'api::todo.todo': ApiTodoTodo;
      'api::transport.transport': ApiTransportTransport;
    }
  }
}
