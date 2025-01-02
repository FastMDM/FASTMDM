import type { Attribute, Schema } from '@strapi/strapi';

export interface AdminApiToken extends Schema.CollectionType {
  collectionName: 'strapi_api_tokens';
  info: {
    description: '';
    displayName: 'Api Token';
    name: 'Api Token';
    pluralName: 'api-tokens';
    singularName: 'api-token';
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
    accessKey: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::api-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    description: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Attribute.DefaultTo<''>;
    expiresAt: Attribute.DateTime;
    lastUsedAt: Attribute.DateTime;
    lifespan: Attribute.BigInteger;
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    permissions: Attribute.Relation<
      'admin::api-token',
      'oneToMany',
      'admin::api-token-permission'
    >;
    type: Attribute.Enumeration<['read-only', 'full-access', 'custom']> &
      Attribute.Required &
      Attribute.DefaultTo<'read-only'>;
    updatedAt: Attribute.DateTime;
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
    description: '';
    displayName: 'API Token Permission';
    name: 'API Token Permission';
    pluralName: 'api-token-permissions';
    singularName: 'api-token-permission';
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
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::api-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    token: Attribute.Relation<
      'admin::api-token-permission',
      'manyToOne',
      'admin::api-token'
    >;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'admin::api-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminPermission extends Schema.CollectionType {
  collectionName: 'admin_permissions';
  info: {
    description: '';
    displayName: 'Permission';
    name: 'Permission';
    pluralName: 'permissions';
    singularName: 'permission';
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
    conditions: Attribute.JSON & Attribute.DefaultTo<[]>;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    properties: Attribute.JSON & Attribute.DefaultTo<{}>;
    role: Attribute.Relation<'admin::permission', 'manyToOne', 'admin::role'>;
    subject: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'admin::permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminRole extends Schema.CollectionType {
  collectionName: 'admin_roles';
  info: {
    description: '';
    displayName: 'Role';
    name: 'Role';
    pluralName: 'roles';
    singularName: 'role';
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
    code: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'admin::role', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    description: Attribute.String;
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    permissions: Attribute.Relation<
      'admin::role',
      'oneToMany',
      'admin::permission'
    >;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<'admin::role', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    users: Attribute.Relation<'admin::role', 'manyToMany', 'admin::user'>;
  };
}

export interface AdminTransferToken extends Schema.CollectionType {
  collectionName: 'strapi_transfer_tokens';
  info: {
    description: '';
    displayName: 'Transfer Token';
    name: 'Transfer Token';
    pluralName: 'transfer-tokens';
    singularName: 'transfer-token';
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
    accessKey: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::transfer-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    description: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Attribute.DefaultTo<''>;
    expiresAt: Attribute.DateTime;
    lastUsedAt: Attribute.DateTime;
    lifespan: Attribute.BigInteger;
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    permissions: Attribute.Relation<
      'admin::transfer-token',
      'oneToMany',
      'admin::transfer-token-permission'
    >;
    updatedAt: Attribute.DateTime;
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
    description: '';
    displayName: 'Transfer Token Permission';
    name: 'Transfer Token Permission';
    pluralName: 'transfer-token-permissions';
    singularName: 'transfer-token-permission';
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
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::transfer-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    token: Attribute.Relation<
      'admin::transfer-token-permission',
      'manyToOne',
      'admin::transfer-token'
    >;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'admin::transfer-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminUser extends Schema.CollectionType {
  collectionName: 'admin_users';
  info: {
    description: '';
    displayName: 'User';
    name: 'User';
    pluralName: 'users';
    singularName: 'user';
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
    blocked: Attribute.Boolean & Attribute.Private & Attribute.DefaultTo<false>;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'admin::user', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    email: Attribute.Email &
      Attribute.Required &
      Attribute.Private &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    firstname: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    isActive: Attribute.Boolean &
      Attribute.Private &
      Attribute.DefaultTo<false>;
    lastname: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    password: Attribute.Password &
      Attribute.Private &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    preferedLanguage: Attribute.String;
    registrationToken: Attribute.String & Attribute.Private;
    resetPasswordToken: Attribute.String & Attribute.Private;
    roles: Attribute.Relation<'admin::user', 'manyToMany', 'admin::role'> &
      Attribute.Private;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<'admin::user', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    username: Attribute.String;
  };
}

export interface ApiAddressAddress extends Schema.CollectionType {
  collectionName: 'addresses';
  info: {
    description: '';
    displayName: 'Address';
    pluralName: 'addresses';
    singularName: 'address';
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
    businesses: Attribute.Relation<
      'api::address.address',
      'oneToMany',
      'api::business.business'
    >;
    capital_marker: Attribute.Integer &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
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
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::address.address',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    entrance: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }> &
      Attribute.SetMinMaxLength<{
        maxLength: 10;
      }>;
    fias_actuality_state: Attribute.Integer &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
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
    flat_cadnum: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }> &
      Attribute.SetMinMaxLength<{
        maxLength: 50;
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
    flat_price: Attribute.Decimal &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
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
    floor: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }> &
      Attribute.SetMinMaxLength<{
        maxLength: 10;
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
    kladr_id: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }> &
      Attribute.SetMinMaxLength<{
        maxLength: 19;
      }>;
    legals: Attribute.Relation<
      'api::address.address',
      'oneToMany',
      'api::legal.legal'
    >;
    locale: Attribute.String;
    localizations: Attribute.Relation<
      'api::address.address',
      'oneToMany',
      'api::address.address'
    >;
    name: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
        translate: {
          translate: 'translate';
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
    postal_box: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }> &
      Attribute.SetMinMaxLength<{
        maxLength: 50;
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
    square_meter_price: Attribute.Decimal &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
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
    tax_office_legal: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }> &
      Attribute.SetMinMaxLength<{
        maxLength: 4;
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
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::address.address',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
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
  };
}

export interface ApiAnimalAnimal extends Schema.CollectionType {
  collectionName: 'animals';
  info: {
    description: '';
    displayName: 'Animal';
    pluralName: 'animals';
    singularName: 'animal';
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
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::animal.animal',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    locale: Attribute.String;
    localizations: Attribute.Relation<
      'api::animal.animal',
      'oneToMany',
      'api::animal.animal'
    >;
    Name: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
        translate: {
          translate: 'translate';
        };
      }>;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::animal.animal',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
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
  };
}

export interface ApiAreaArea extends Schema.CollectionType {
  collectionName: 'areas';
  info: {
    description: '';
    displayName: 'Area';
    pluralName: 'areas';
    singularName: 'area';
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
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'api::area.area', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    locale: Attribute.String;
    localizations: Attribute.Relation<
      'api::area.area',
      'oneToMany',
      'api::area.area'
    >;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<'api::area.area', 'oneToOne', 'admin::user'> &
      Attribute.Private;
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
  };
}

export interface ApiAssetAsset extends Schema.CollectionType {
  collectionName: 'assets';
  info: {
    description: '';
    displayName: 'Asset';
    pluralName: 'assets';
    singularName: 'asset';
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
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::asset.asset',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    locale: Attribute.String;
    localizations: Attribute.Relation<
      'api::asset.asset',
      'oneToMany',
      'api::asset.asset'
    >;
    Name: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
        translate: {
          translate: 'translate';
        };
      }>;
    publishedAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::asset.asset',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
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
  };
}

export interface ApiAutoColorAutoColor extends Schema.CollectionType {
  collectionName: 'auto_colors';
  info: {
    displayName: 'AutoColor';
    pluralName: 'auto-colors';
    singularName: 'auto-color';
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
    autos: Attribute.Relation<
      'api::auto-color.auto-color',
      'oneToMany',
      'api::auto.auto'
    >;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::auto-color.auto-color',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    locale: Attribute.String;
    localizations: Attribute.Relation<
      'api::auto-color.auto-color',
      'oneToMany',
      'api::auto-color.auto-color'
    >;
    Name: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    publishedAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::auto-color.auto-color',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    Value: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }>;
  };
}

export interface ApiAutoConditionAutoCondition extends Schema.CollectionType {
  collectionName: 'auto_conditions';
  info: {
    displayName: 'AutoCondition';
    pluralName: 'auto-conditions';
    singularName: 'auto-condition';
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
    autos: Attribute.Relation<
      'api::auto-condition.auto-condition',
      'oneToMany',
      'api::auto.auto'
    >;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::auto-condition.auto-condition',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    locale: Attribute.String;
    localizations: Attribute.Relation<
      'api::auto-condition.auto-condition',
      'oneToMany',
      'api::auto-condition.auto-condition'
    >;
    Name: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    publishedAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::auto-condition.auto-condition',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    Value: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
  };
}

export interface ApiAutoCylinderAutoCylinder extends Schema.CollectionType {
  collectionName: 'auto_cylinders';
  info: {
    displayName: 'AutoCylinder';
    pluralName: 'auto-cylinders';
    singularName: 'auto-cylinder';
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
    autos: Attribute.Relation<
      'api::auto-cylinder.auto-cylinder',
      'oneToMany',
      'api::auto.auto'
    >;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::auto-cylinder.auto-cylinder',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    locale: Attribute.String;
    localizations: Attribute.Relation<
      'api::auto-cylinder.auto-cylinder',
      'oneToMany',
      'api::auto-cylinder.auto-cylinder'
    >;
    Name: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    publishedAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::auto-cylinder.auto-cylinder',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    Value: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
  };
}

export interface ApiAutoDriveAutoDrive extends Schema.CollectionType {
  collectionName: 'auto_drives';
  info: {
    displayName: 'AutoDrive';
    pluralName: 'auto-drives';
    singularName: 'auto-drive';
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
    autos: Attribute.Relation<
      'api::auto-drive.auto-drive',
      'oneToMany',
      'api::auto.auto'
    >;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::auto-drive.auto-drive',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    locale: Attribute.String;
    localizations: Attribute.Relation<
      'api::auto-drive.auto-drive',
      'oneToMany',
      'api::auto-drive.auto-drive'
    >;
    Name: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    publishedAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::auto-drive.auto-drive',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    Value: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
  };
}

export interface ApiAutoFuelAutoFuel extends Schema.CollectionType {
  collectionName: 'auto_fuels';
  info: {
    displayName: 'AutoFuel';
    pluralName: 'auto-fuels';
    singularName: 'auto-fuel';
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
    autos: Attribute.Relation<
      'api::auto-fuel.auto-fuel',
      'oneToMany',
      'api::auto.auto'
    >;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::auto-fuel.auto-fuel',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    locale: Attribute.String;
    localizations: Attribute.Relation<
      'api::auto-fuel.auto-fuel',
      'oneToMany',
      'api::auto-fuel.auto-fuel'
    >;
    Name: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    publishedAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::auto-fuel.auto-fuel',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    Value: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
  };
}

export interface ApiAutoSizeAutoSize extends Schema.CollectionType {
  collectionName: 'auto_sizes';
  info: {
    displayName: 'AutoSize';
    pluralName: 'auto-sizes';
    singularName: 'auto-size';
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
    autos: Attribute.Relation<
      'api::auto-size.auto-size',
      'oneToMany',
      'api::auto.auto'
    >;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::auto-size.auto-size',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    locale: Attribute.String;
    localizations: Attribute.Relation<
      'api::auto-size.auto-size',
      'oneToMany',
      'api::auto-size.auto-size'
    >;
    Name: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    publishedAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::auto-size.auto-size',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    Value: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
  };
}

export interface ApiAutoStatusAutoStatus extends Schema.CollectionType {
  collectionName: 'auto_statuses';
  info: {
    displayName: 'AutoStatus';
    pluralName: 'auto-statuses';
    singularName: 'auto-status';
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
    autos: Attribute.Relation<
      'api::auto-status.auto-status',
      'oneToMany',
      'api::auto.auto'
    >;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::auto-status.auto-status',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    locale: Attribute.String;
    localizations: Attribute.Relation<
      'api::auto-status.auto-status',
      'oneToMany',
      'api::auto-status.auto-status'
    >;
    Name: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    publishedAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::auto-status.auto-status',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    Value: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
  };
}

export interface ApiAutoTransmissionAutoTransmission
  extends Schema.CollectionType {
  collectionName: 'auto_transmissions';
  info: {
    displayName: 'AutoTransmission';
    pluralName: 'auto-transmissions';
    singularName: 'auto-transmission';
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
    autos: Attribute.Relation<
      'api::auto-transmission.auto-transmission',
      'oneToMany',
      'api::auto.auto'
    >;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::auto-transmission.auto-transmission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    locale: Attribute.String;
    localizations: Attribute.Relation<
      'api::auto-transmission.auto-transmission',
      'oneToMany',
      'api::auto-transmission.auto-transmission'
    >;
    Name: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    publishedAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::auto-transmission.auto-transmission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    Value: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
  };
}

export interface ApiAutoTypeAutoType extends Schema.CollectionType {
  collectionName: 'auto_types';
  info: {
    displayName: 'AutoType';
    pluralName: 'auto-types';
    singularName: 'auto-type';
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
    autos: Attribute.Relation<
      'api::auto-type.auto-type',
      'oneToMany',
      'api::auto.auto'
    >;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::auto-type.auto-type',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    locale: Attribute.String;
    localizations: Attribute.Relation<
      'api::auto-type.auto-type',
      'oneToMany',
      'api::auto-type.auto-type'
    >;
    Name: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    publishedAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::auto-type.auto-type',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    Value: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
  };
}

export interface ApiAutoAuto extends Schema.CollectionType {
  collectionName: 'autos';
  info: {
    description: '';
    displayName: 'Auto';
    pluralName: 'autos';
    singularName: 'auto';
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
    City: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
        translate: {
          translate: 'translate';
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
    ContactEmail: Attribute.String &
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
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'api::auto.auto', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    CryptoCurrency: Attribute.Boolean &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
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
    DeliveryAvaliable: Attribute.Boolean &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
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
    locale: Attribute.String;
    localizations: Attribute.Relation<
      'api::auto.auto',
      'oneToMany',
      'api::auto.auto'
    >;
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
    MoreAds: Attribute.Boolean &
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
    PhoneNumber: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
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
    Price: Attribute.Integer &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    publishedAt: Attribute.DateTime;
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
    Title: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
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
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<'api::auto.auto', 'oneToOne', 'admin::user'> &
      Attribute.Private;
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
    VIN: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }>;
  };
}

export interface ApiBlockBlock extends Schema.CollectionType {
  collectionName: 'blocks';
  info: {
    description: '';
    displayName: 'Block';
    pluralName: 'blocks';
    singularName: 'block';
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
    addresses: Attribute.Relation<
      'api::block.block',
      'oneToMany',
      'api::address.address'
    >;
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
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::block.block',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    locale: Attribute.String;
    localizations: Attribute.Relation<
      'api::block.block',
      'oneToMany',
      'api::block.block'
    >;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::block.block',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
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
  };
}

export interface ApiBlogBlog extends Schema.CollectionType {
  collectionName: 'blogs';
  info: {
    description: '';
    displayName: 'Blog';
    pluralName: 'blogs';
    singularName: 'blog';
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
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'api::blog.blog', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    Description: Attribute.Text &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
        translate: {
          translate: 'translate';
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
    locale: Attribute.String;
    localizations: Attribute.Relation<
      'api::blog.blog',
      'oneToMany',
      'api::blog.blog'
    >;
    Slug: Attribute.Text &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }>;
    Title: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
        translate: {
          translate: 'translate';
        };
      }>;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<'api::blog.blog', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface ApiBusinessDirectoryBusinessDirectory
  extends Schema.CollectionType {
  collectionName: 'business_directories';
  info: {
    description: '';
    displayName: 'BusinessDirectory';
    pluralName: 'business-directories';
    singularName: 'business-directory';
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
    businesses: Attribute.Relation<
      'api::business-directory.business-directory',
      'oneToMany',
      'api::business.business'
    > &
      Attribute.SetPluginOptions<{
        translate: {
          translate: 'translate';
        };
      }>;
    childs: Attribute.Relation<
      'api::business-directory.business-directory',
      'manyToOne',
      'api::business-directory.business-directory'
    > &
      Attribute.SetPluginOptions<{
        translate: {
          translate: 'translate';
        };
      }>;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::business-directory.business-directory',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    locale: Attribute.String;
    localizations: Attribute.Relation<
      'api::business-directory.business-directory',
      'oneToMany',
      'api::business-directory.business-directory'
    >;
    Name: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
        translate: {
          translate: 'translate';
        };
      }>;
    oldcode: Attribute.Integer &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }>;
    parent: Attribute.Relation<
      'api::business-directory.business-directory',
      'oneToMany',
      'api::business-directory.business-directory'
    > &
      Attribute.SetPluginOptions<{
        translate: {
          translate: 'translate';
        };
      }>;
    parentid: Attribute.Integer &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }>;
    parenttitle: Attribute.Text &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }>;
    title: Attribute.Text &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
        translate: {
          translate: 'translate';
        };
      }>;
    titleen: Attribute.Text &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }>;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::business-directory.business-directory',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    userGroup: Attribute.Relation<
      'api::business-directory.business-directory',
      'manyToOne',
      'plugin::multi-tenant.user-group'
    > &
      Attribute.SetPluginOptions<{
        translate: {
          translate: 'translate';
        };
      }>;
  };
}

export interface ApiBusinessBusiness extends Schema.CollectionType {
  collectionName: 'businesses';
  info: {
    description: '';
    displayName: 'Business';
    pluralName: 'businesses';
    singularName: 'business';
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
    address: Attribute.Relation<
      'api::business.business',
      'manyToOne',
      'api::address.address'
    > &
      Attribute.SetPluginOptions<{
        translate: {
          translate: 'translate';
        };
      }>;
    AddressText: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
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
    business_directory: Attribute.Relation<
      'api::business.business',
      'manyToOne',
      'api::business-directory.business-directory'
    > &
      Attribute.SetPluginOptions<{
        translate: {
          translate: 'translate';
        };
      }>;
    canadaprovince: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }>;
    CategoryId: Attribute.Integer &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }>;
    Chat: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }>;
    City: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }>;
    Country: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }>;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::business.business',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    Description: Attribute.Text &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
        translate: {
          translate: 'translate';
        };
      }>;
    Email: Attribute.String &
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
    Hotel: Attribute.Component<'hotel.hotel', true> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
        translate: {
          translate: 'translate';
        };
      }>;
    Images: Attribute.Media<'images' | 'files' | 'videos' | 'audios', true> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
        translate: {
          translate: 'translate';
        };
      }>;
    locale: Attribute.String;
    localizations: Attribute.Relation<
      'api::business.business',
      'oneToMany',
      'api::business.business'
    >;
    Name: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
        translate: {
          translate: 'translate';
        };
      }>;
    OldCode: Attribute.Integer &
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
    Phone: Attribute.String &
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
    Postcode: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }>;
    Restaurant: Attribute.Component<'restaurant.restaurant'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
        translate: {
          translate: 'translate';
        };
      }>;
    Site: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }>;
    Slug: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }>;
    SocialNetwork: Attribute.Component<'shared.social-network', true> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }>;
    title: Attribute.Text &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
        translate: {
          translate: 'translate';
        };
      }>;
    Topic: Attribute.Text &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }>;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::business.business',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    url: Attribute.Text &
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
    userGroup: Attribute.Relation<
      'api::business.business',
      'manyToOne',
      'plugin::multi-tenant.user-group'
    > &
      Attribute.SetPluginOptions<{
        translate: {
          translate: 'translate';
        };
      }>;
    worldregion: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }>;
  };
}

export interface ApiCityDistrictCityDistrict extends Schema.CollectionType {
  collectionName: 'city_districts';
  info: {
    description: '';
    displayName: 'CityDistrict';
    pluralName: 'city-districts';
    singularName: 'city-district';
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
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::city-district.city-district',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    locale: Attribute.String;
    localizations: Attribute.Relation<
      'api::city-district.city-district',
      'oneToMany',
      'api::city-district.city-district'
    >;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::city-district.city-district',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
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
  };
}

export interface ApiCityCity extends Schema.CollectionType {
  collectionName: 'cities';
  info: {
    description: '';
    displayName: 'City';
    pluralName: 'cities';
    singularName: 'city';
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
    capital: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
        translate: {
          translate: 'translate';
        };
      }>;
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
    city_with_type: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }> &
      Attribute.SetMinMaxLength<{
        maxLength: 131;
      }>;
    country: Attribute.Relation<
      'api::city.city',
      'manyToOne',
      'api::country.country'
    > &
      Attribute.SetPluginOptions<{
        translate: {
          translate: 'translate';
        };
      }>;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'api::city.city', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    lat: Attribute.Decimal &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }>;
    lng: Attribute.Decimal &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }>;
    locale: Attribute.String;
    localizations: Attribute.Relation<
      'api::city.city',
      'oneToMany',
      'api::city.city'
    >;
    name: Attribute.String &
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
    population: Attribute.BigInteger &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    simplymaps_id: Attribute.BigInteger &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<'api::city.city', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    url: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
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
  };
}

export interface ApiCoachingCoaching extends Schema.CollectionType {
  collectionName: 'coachings';
  info: {
    description: '';
    displayName: 'Coaching';
    pluralName: 'coachings';
    singularName: 'coaching';
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
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::coaching.coaching',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    locale: Attribute.String;
    localizations: Attribute.Relation<
      'api::coaching.coaching',
      'oneToMany',
      'api::coaching.coaching'
    >;
    Name: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
        translate: {
          translate: 'translate';
        };
      }>;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::coaching.coaching',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiCountryCountry extends Schema.CollectionType {
  collectionName: 'countries';
  info: {
    description: '';
    displayName: 'Country';
    pluralName: 'countries';
    singularName: 'country';
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
    cities: Attribute.Relation<
      'api::country.country',
      'oneToMany',
      'api::city.city'
    >;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::country.country',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    external_Id: Attribute.Integer &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }>;
    iso2: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
        translate: {
          translate: 'translate';
        };
      }> &
      Attribute.SetMinMaxLength<{
        maxLength: 2;
      }>;
    iso3: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }> &
      Attribute.SetMinMaxLength<{
        maxLength: 3;
      }>;
    locale: Attribute.String;
    localizations: Attribute.Relation<
      'api::country.country',
      'oneToMany',
      'api::country.country'
    >;
    name: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
        translate: {
          translate: 'translate';
        };
      }>;
    population: Attribute.Integer &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }>;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::country.country',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
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
  };
}

export interface ApiCourseCourse extends Schema.CollectionType {
  collectionName: 'courses';
  info: {
    description: '';
    displayName: 'Course';
    pluralName: 'courses';
    singularName: 'course';
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
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::course.course',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    Description: Attribute.Text &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
        translate: {
          translate: 'translate';
        };
      }>;
    locale: Attribute.String;
    localizations: Attribute.Relation<
      'api::course.course',
      'oneToMany',
      'api::course.course'
    >;
    Name: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
        translate: {
          translate: 'translate';
        };
      }>;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::course.course',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiCurrencyCurrency extends Schema.CollectionType {
  collectionName: 'currencies';
  info: {
    description: '';
    displayName: 'Currency';
    pluralName: 'currencies';
    singularName: 'currency';
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
    createdBy: Attribute.Relation<
      'api::currency.currency',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    locale: Attribute.String;
    localizations: Attribute.Relation<
      'api::currency.currency',
      'oneToMany',
      'api::currency.currency'
    >;
    Name: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
        translate: {
          translate: 'translate';
        };
      }>;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::currency.currency',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiEventEvent extends Schema.CollectionType {
  collectionName: 'events';
  info: {
    description: '';
    displayName: 'Event';
    pluralName: 'events';
    singularName: 'event';
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
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::event.event',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    locale: Attribute.String;
    localizations: Attribute.Relation<
      'api::event.event',
      'oneToMany',
      'api::event.event'
    >;
    Text: Attribute.Text &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
        translate: {
          translate: 'translate';
        };
      }>;
    Title: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
        translate: {
          translate: 'translate';
        };
      }>;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::event.event',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiHotelFeatureHotelFeature extends Schema.CollectionType {
  collectionName: 'hotel_features';
  info: {
    description: '';
    displayName: 'HotelFeature';
    pluralName: 'hotel-features';
    singularName: 'hotel-feature';
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
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::hotel-feature.hotel-feature',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
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
    locale: Attribute.String;
    localizations: Attribute.Relation<
      'api::hotel-feature.hotel-feature',
      'oneToMany',
      'api::hotel-feature.hotel-feature'
    >;
    Name: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
        translate: {
          translate: 'translate';
        };
      }>;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::hotel-feature.hotel-feature',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiHotelHotel extends Schema.CollectionType {
  collectionName: 'hotels';
  info: {
    description: '';
    displayName: 'Hotel';
    pluralName: 'hotels';
    singularName: 'hotel';
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
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::hotel.hotel',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
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
    locale: Attribute.String;
    localizations: Attribute.Relation<
      'api::hotel.hotel',
      'oneToMany',
      'api::hotel.hotel'
    >;
    Name: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
        translate: {
          translate: 'translate';
        };
      }>;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::hotel.hotel',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
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
  };
}

export interface ApiHouseHouse extends Schema.CollectionType {
  collectionName: 'houses';
  info: {
    description: '';
    displayName: 'House';
    pluralName: 'houses';
    singularName: 'house';
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
    addresses: Attribute.Relation<
      'api::house.house',
      'oneToMany',
      'api::address.address'
    >;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::house.house',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
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
    house_cadnum: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }> &
      Attribute.SetMinMaxLength<{
        maxLength: 50;
      }>;
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
    locale: Attribute.String;
    localizations: Attribute.Relation<
      'api::house.house',
      'oneToMany',
      'api::house.house'
    >;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::house.house',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
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
  };
}

export interface ApiInventoryInventory extends Schema.CollectionType {
  collectionName: 'inventories';
  info: {
    description: '';
    displayName: 'Inventory';
    pluralName: 'inventories';
    singularName: 'inventory';
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
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::inventory.inventory',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    locale: Attribute.String;
    localizations: Attribute.Relation<
      'api::inventory.inventory',
      'oneToMany',
      'api::inventory.inventory'
    >;
    Name: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
        translate: {
          translate: 'translate';
        };
      }>;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::inventory.inventory',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
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
  };
}

export interface ApiLegalDirectoryLegalDirectory extends Schema.CollectionType {
  collectionName: 'legal_directories';
  info: {
    description: '';
    displayName: 'LegalDirectory';
    pluralName: 'legal-directories';
    singularName: 'legal-directory';
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
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::legal-directory.legal-directory',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
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
    locale: Attribute.String;
    localizations: Attribute.Relation<
      'api::legal-directory.legal-directory',
      'oneToMany',
      'api::legal-directory.legal-directory'
    >;
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
    title: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
        translate: {
          translate: 'translate';
        };
      }>;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::legal-directory.legal-directory',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
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
  };
}

export interface ApiLegalLegal extends Schema.CollectionType {
  collectionName: 'legals';
  info: {
    description: '';
    displayName: 'Legal';
    pluralName: 'legals';
    singularName: 'legal';
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
    address: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
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
    canadaprovince: Attribute.String &
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
    Chat: Attribute.String &
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
    country: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }>;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::legal.legal',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    Description: Attribute.Text &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
        translate: {
          translate: 'translate';
        };
      }>;
    Email: Attribute.String &
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
    hotel: Attribute.Component<'hotel.hotel'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
        translate: {
          translate: 'translate';
        };
      }>;
    Image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
        translate: {
          translate: 'translate';
        };
      }>;
    Images: Attribute.Media<'images' | 'files' | 'videos' | 'audios', true> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
        translate: {
          translate: 'translate';
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
    locale: Attribute.String;
    localizations: Attribute.Relation<
      'api::legal.legal',
      'oneToMany',
      'api::legal.legal'
    >;
    Name: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
        translate: {
          translate: 'translate';
        };
      }>;
    OldCode: Attribute.Integer &
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
    Phone: Attribute.String &
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
    postcode: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
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
    Site: Attribute.String &
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
    SocialNetwork: Attribute.Component<'shared.social-network', true> &
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
    topic: Attribute.Text &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }>;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::legal.legal',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    url: Attribute.Text &
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
    worldregion: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }>;
  };
}

export interface ApiMenuMenu extends Schema.CollectionType {
  collectionName: 'menus';
  info: {
    description: '';
    displayName: 'Menu';
    pluralName: 'menus';
    singularName: 'menu';
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
    createdBy: Attribute.Relation<'api::menu.menu', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    locale: Attribute.String;
    localizations: Attribute.Relation<
      'api::menu.menu',
      'oneToMany',
      'api::menu.menu'
    >;
    Name: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
        translate: {
          translate: 'translate';
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
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<'api::menu.menu', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    Url: Attribute.Text &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }>;
  };
}

export interface ApiPersonPerson extends Schema.CollectionType {
  collectionName: 'people';
  info: {
    displayName: 'Person';
    pluralName: 'people';
    singularName: 'person';
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
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::person.person',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    locale: Attribute.String;
    localizations: Attribute.Relation<
      'api::person.person',
      'oneToMany',
      'api::person.person'
    >;
    Name: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
        translate: {
          translate: 'translate';
        };
      }>;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::person.person',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiProductProduct extends Schema.CollectionType {
  collectionName: 'products';
  info: {
    displayName: 'Product';
    pluralName: 'products';
    singularName: 'product';
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
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::product.product',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    locale: Attribute.String;
    localizations: Attribute.Relation<
      'api::product.product',
      'oneToMany',
      'api::product.product'
    >;
    Name: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
        translate: {
          translate: 'translate';
        };
      }>;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::product.product',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiRealtyTypeRealtyType extends Schema.CollectionType {
  collectionName: 'realty_types';
  info: {
    displayName: 'RealtyType';
    pluralName: 'realty-types';
    singularName: 'realty-type';
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
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::realty-type.realty-type',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    locale: Attribute.String;
    localizations: Attribute.Relation<
      'api::realty-type.realty-type',
      'oneToMany',
      'api::realty-type.realty-type'
    >;
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
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::realty-type.realty-type',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiRealtyRealty extends Schema.CollectionType {
  collectionName: 'realties';
  info: {
    description: '';
    displayName: 'Realty';
    pluralName: 'realties';
    singularName: 'realty';
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
    Baths: Attribute.Integer &
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
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::realty.realty',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    Description: Attribute.Text &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
        translate: {
          translate: 'translate';
        };
      }>;
    EntirePlace: Attribute.Boolean &
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
    Guests: Attribute.Integer &
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
    Images: Attribute.Media<'images' | 'files' | 'videos' | 'audios', true> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
        translate: {
          translate: 'translate';
        };
      }>;
    Kitchen: Attribute.Boolean &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    locale: Attribute.String;
    localizations: Attribute.Relation<
      'api::realty.realty',
      'oneToMany',
      'api::realty.realty'
    >;
    Name: Attribute.String &
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
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::realty.realty',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
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
    WiFi: Attribute.Boolean &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
  };
}

export interface ApiRegionRegion extends Schema.CollectionType {
  collectionName: 'regions';
  info: {
    displayName: 'Region';
    pluralName: 'regions';
    singularName: 'region';
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
    addresses: Attribute.Relation<
      'api::region.region',
      'oneToMany',
      'api::address.address'
    >;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::region.region',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
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
    locale: Attribute.String;
    localizations: Attribute.Relation<
      'api::region.region',
      'oneToMany',
      'api::region.region'
    >;
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
    region_fias_id: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }> &
      Attribute.SetMinMaxLength<{
        maxLength: 36;
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
    region_kladr_id: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }> &
      Attribute.SetMinMaxLength<{
        maxLength: 19;
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
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::region.region',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiRestaurantCuisineRestaurantCuisine
  extends Schema.CollectionType {
  collectionName: 'restaurant_cuisines';
  info: {
    description: '';
    displayName: 'RestaurantCuisine';
    pluralName: 'restaurant-cuisines';
    singularName: 'restaurant-cuisine';
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
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::restaurant-cuisine.restaurant-cuisine',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    locale: Attribute.String;
    localizations: Attribute.Relation<
      'api::restaurant-cuisine.restaurant-cuisine',
      'oneToMany',
      'api::restaurant-cuisine.restaurant-cuisine'
    >;
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
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::restaurant-cuisine.restaurant-cuisine',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiRestaurantDishRestaurantDish extends Schema.CollectionType {
  collectionName: 'restaurant_dishes';
  info: {
    description: '';
    displayName: 'RestaurantDish';
    pluralName: 'restaurant-dishes';
    singularName: 'restaurant-dish';
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
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::restaurant-dish.restaurant-dish',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    locale: Attribute.String;
    localizations: Attribute.Relation<
      'api::restaurant-dish.restaurant-dish',
      'oneToMany',
      'api::restaurant-dish.restaurant-dish'
    >;
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
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::restaurant-dish.restaurant-dish',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiRestaurantFeatureRestaurantFeature
  extends Schema.CollectionType {
  collectionName: 'restaurant_features';
  info: {
    description: '';
    displayName: 'RestaurantFeature';
    pluralName: 'restaurant-features';
    singularName: 'restaurant-feature';
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
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::restaurant-feature.restaurant-feature',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    locale: Attribute.String;
    localizations: Attribute.Relation<
      'api::restaurant-feature.restaurant-feature',
      'oneToMany',
      'api::restaurant-feature.restaurant-feature'
    >;
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
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::restaurant-feature.restaurant-feature',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiRestaurantPriceRestaurantPrice
  extends Schema.CollectionType {
  collectionName: 'restaurant_prices';
  info: {
    description: '';
    displayName: 'RestaurantPrice';
    pluralName: 'restaurant-prices';
    singularName: 'restaurant-price';
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
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::restaurant-price.restaurant-price',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    locale: Attribute.String;
    localizations: Attribute.Relation<
      'api::restaurant-price.restaurant-price',
      'oneToMany',
      'api::restaurant-price.restaurant-price'
    >;
    Name: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
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
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::restaurant-price.restaurant-price',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiRestaurantTypeRestaurantType extends Schema.CollectionType {
  collectionName: 'restaurant_types';
  info: {
    description: '';
    displayName: 'RestaurantType';
    pluralName: 'restaurant-types';
    singularName: 'restaurant-type';
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
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::restaurant-type.restaurant-type',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    locale: Attribute.String;
    localizations: Attribute.Relation<
      'api::restaurant-type.restaurant-type',
      'oneToMany',
      'api::restaurant-type.restaurant-type'
    >;
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
      'api::restaurant-type.restaurant-type',
      'manyToMany',
      'api::restaurant.restaurant'
    > &
      Attribute.SetPluginOptions<{
        translate: {
          translate: 'translate';
        };
      }>;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::restaurant-type.restaurant-type',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiRestaurantRestaurant extends Schema.CollectionType {
  collectionName: 'restaurants';
  info: {
    description: '';
    displayName: 'Restaurant';
    pluralName: 'restaurants';
    singularName: 'restaurant';
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
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::restaurant.restaurant',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    Description: Attribute.RichText &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
        translate: {
          translate: 'translate';
        };
      }>;
    Image: Attribute.Media<'images' | 'files' | 'videos'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
        translate: {
          translate: 'translate';
        };
      }>;
    information: Attribute.Component<'restaurant.information'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }>;
    locale: Attribute.String;
    localizations: Attribute.Relation<
      'api::restaurant.restaurant',
      'oneToMany',
      'api::restaurant.restaurant'
    >;
    Name: Attribute.String &
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
    socialNetworks: Attribute.Component<'shared.social-network', true> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }>;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::restaurant.restaurant',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
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
  };
}

export interface ApiServiceService extends Schema.CollectionType {
  collectionName: 'services';
  info: {
    displayName: 'Service';
    pluralName: 'services';
    singularName: 'service';
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
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::service.service',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    locale: Attribute.String;
    localizations: Attribute.Relation<
      'api::service.service',
      'oneToMany',
      'api::service.service'
    >;
    Name: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
        translate: {
          translate: 'translate';
        };
      }>;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::service.service',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiSettlementSettlement extends Schema.CollectionType {
  collectionName: 'settlements';
  info: {
    description: '';
    displayName: 'Settlement';
    pluralName: 'settlements';
    singularName: 'settlement';
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
    addresses: Attribute.Relation<
      'api::settlement.settlement',
      'oneToMany',
      'api::address.address'
    >;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::settlement.settlement',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    locale: Attribute.String;
    localizations: Attribute.Relation<
      'api::settlement.settlement',
      'oneToMany',
      'api::settlement.settlement'
    >;
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
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::settlement.settlement',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
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
  };
}

export interface ApiSteadStead extends Schema.CollectionType {
  collectionName: 'steads';
  info: {
    description: '';
    displayName: 'Stead';
    pluralName: 'steads';
    singularName: 'stead';
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
    addresses: Attribute.Relation<
      'api::stead.stead',
      'oneToMany',
      'api::address.address'
    >;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::stead.stead',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    locale: Attribute.String;
    localizations: Attribute.Relation<
      'api::stead.stead',
      'oneToMany',
      'api::stead.stead'
    >;
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
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::stead.stead',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
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
  };
}

export interface ApiStreetStreet extends Schema.CollectionType {
  collectionName: 'streets';
  info: {
    description: '';
    displayName: 'Street';
    pluralName: 'streets';
    singularName: 'street';
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
    addresses: Attribute.Relation<
      'api::street.street',
      'oneToMany',
      'api::address.address'
    >;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::street.street',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    locale: Attribute.String;
    localizations: Attribute.Relation<
      'api::street.street',
      'oneToMany',
      'api::street.street'
    >;
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
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::street.street',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
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
  };
}

export interface ApiTimeZoneTimeZone extends Schema.CollectionType {
  collectionName: 'time_zones';
  info: {
    description: '';
    displayName: 'TimeZone';
    pluralName: 'time-zones';
    singularName: 'time-zone';
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
    addresses: Attribute.Relation<
      'api::time-zone.time-zone',
      'oneToMany',
      'api::address.address'
    >;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::time-zone.time-zone',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    locale: Attribute.String;
    localizations: Attribute.Relation<
      'api::time-zone.time-zone',
      'oneToMany',
      'api::time-zone.time-zone'
    >;
    Name: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
        translate: {
          translate: 'translate';
        };
      }>;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::time-zone.time-zone',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
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
  };
}

export interface ApiTransportTransport extends Schema.CollectionType {
  collectionName: 'transports';
  info: {
    displayName: 'Transport';
    pluralName: 'transports';
    singularName: 'transport';
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
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::transport.transport',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    locale: Attribute.String;
    localizations: Attribute.Relation<
      'api::transport.transport',
      'oneToMany',
      'api::transport.transport'
    >;
    Name: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
        translate: {
          translate: 'translate';
        };
      }>;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::transport.transport',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginContentReleasesRelease extends Schema.CollectionType {
  collectionName: 'strapi_releases';
  info: {
    displayName: 'Release';
    pluralName: 'releases';
    singularName: 'release';
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
    actions: Attribute.Relation<
      'plugin::content-releases.release',
      'oneToMany',
      'plugin::content-releases.release-action'
    >;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::content-releases.release',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    name: Attribute.String & Attribute.Required;
    releasedAt: Attribute.DateTime;
    scheduledAt: Attribute.DateTime;
    status: Attribute.Enumeration<
      ['ready', 'blocked', 'failed', 'done', 'empty']
    > &
      Attribute.Required;
    timezone: Attribute.String;
    updatedAt: Attribute.DateTime;
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
    displayName: 'Release Action';
    pluralName: 'release-actions';
    singularName: 'release-action';
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
    contentType: Attribute.String & Attribute.Required;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::content-releases.release-action',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    entry: Attribute.Relation<
      'plugin::content-releases.release-action',
      'morphToOne'
    >;
    isEntryValid: Attribute.Boolean;
    locale: Attribute.String;
    release: Attribute.Relation<
      'plugin::content-releases.release-action',
      'manyToOne',
      'plugin::content-releases.release'
    >;
    type: Attribute.Enumeration<['publish', 'unpublish']> & Attribute.Required;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'plugin::content-releases.release-action',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginI18NLocale extends Schema.CollectionType {
  collectionName: 'i18n_locale';
  info: {
    collectionName: 'locales';
    description: '';
    displayName: 'Locale';
    pluralName: 'locales';
    singularName: 'locale';
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
    code: Attribute.String & Attribute.Unique;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::i18n.locale',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    name: Attribute.String &
      Attribute.SetMinMax<
        {
          max: 50;
          min: 1;
        },
        number
      >;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'plugin::i18n.locale',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginMultiTenantTenant extends Schema.CollectionType {
  collectionName: 'tenants';
  info: {
    displayName: 'Tenant';
    pluralName: 'tenants';
    singularName: 'tenant';
  };
  options: {
    comment: '';
    draftAndPublish: false;
  };
  attributes: {
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::multi-tenant.tenant',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    name: Attribute.String;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'plugin::multi-tenant.tenant',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    userGroups: Attribute.Relation<
      'plugin::multi-tenant.tenant',
      'oneToMany',
      'plugin::multi-tenant.user-group'
    >;
  };
}

export interface PluginMultiTenantUserGroup extends Schema.CollectionType {
  collectionName: 'user_groups';
  info: {
    displayName: 'UserGroup';
    pluralName: 'user-groups';
    singularName: 'user-group';
  };
  options: {
    comment: '';
    draftAndPublish: false;
  };
  attributes: {
    animals: Attribute.Relation<
      'plugin::multi-tenant.user-group',
      'oneToMany',
      'api::animal.animal'
    >;
    areas: Attribute.Relation<
      'plugin::multi-tenant.user-group',
      'oneToMany',
      'api::area.area'
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
    business_directories: Attribute.Relation<
      'plugin::multi-tenant.user-group',
      'oneToMany',
      'api::business-directory.business-directory'
    >;
    businesses: Attribute.Relation<
      'plugin::multi-tenant.user-group',
      'oneToMany',
      'api::business.business'
    >;
    children: Attribute.Relation<
      'plugin::multi-tenant.user-group',
      'oneToMany',
      'plugin::multi-tenant.user-group'
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
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::multi-tenant.user-group',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    hotels: Attribute.Relation<
      'plugin::multi-tenant.user-group',
      'oneToMany',
      'api::hotel.hotel'
    >;
    houses: Attribute.Relation<
      'plugin::multi-tenant.user-group',
      'oneToMany',
      'api::house.house'
    >;
    inventories: Attribute.Relation<
      'plugin::multi-tenant.user-group',
      'oneToMany',
      'api::inventory.inventory'
    >;
    legal_directories: Attribute.Relation<
      'plugin::multi-tenant.user-group',
      'oneToMany',
      'api::legal-directory.legal-directory'
    >;
    legals: Attribute.Relation<
      'plugin::multi-tenant.user-group',
      'oneToMany',
      'api::legal.legal'
    >;
    name: Attribute.String;
    parent: Attribute.Relation<
      'plugin::multi-tenant.user-group',
      'manyToOne',
      'plugin::multi-tenant.user-group'
    >;
    realties: Attribute.Relation<
      'plugin::multi-tenant.user-group',
      'oneToMany',
      'api::realty.realty'
    >;
    restaurants: Attribute.Relation<
      'plugin::multi-tenant.user-group',
      'oneToMany',
      'api::restaurant.restaurant'
    >;
    settlements: Attribute.Relation<
      'plugin::multi-tenant.user-group',
      'oneToMany',
      'api::settlement.settlement'
    >;
    steads: Attribute.Relation<
      'plugin::multi-tenant.user-group',
      'oneToMany',
      'api::stead.stead'
    >;
    streets: Attribute.Relation<
      'plugin::multi-tenant.user-group',
      'oneToMany',
      'api::street.street'
    >;
    tenant: Attribute.Relation<
      'plugin::multi-tenant.user-group',
      'manyToOne',
      'plugin::multi-tenant.tenant'
    > &
      Attribute.Required;
    time_zones: Attribute.Relation<
      'plugin::multi-tenant.user-group',
      'oneToMany',
      'api::time-zone.time-zone'
    >;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'plugin::multi-tenant.user-group',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    users: Attribute.Relation<
      'plugin::multi-tenant.user-group',
      'oneToMany',
      'plugin::users-permissions.user'
    >;
  };
}

export interface PluginTranslateBatchTranslateJob
  extends Schema.CollectionType {
  collectionName: 'translate_batch_translate_jobs';
  info: {
    displayName: 'Translate Batch Translate Job';
    pluralName: 'batch-translate-jobs';
    singularName: 'batch-translate-job';
  };
  options: {
    comment: '';
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
    autoPublish: Attribute.Boolean & Attribute.DefaultTo<false>;
    contentType: Attribute.String;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::translate.batch-translate-job',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    entityIds: Attribute.JSON;
    failureReason: Attribute.JSON;
    progress: Attribute.Float & Attribute.DefaultTo<0>;
    sourceLocale: Attribute.String;
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
    targetLocale: Attribute.String;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'plugin::translate.batch-translate-job',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUploadFile extends Schema.CollectionType {
  collectionName: 'files';
  info: {
    description: '';
    displayName: 'File';
    pluralName: 'files';
    singularName: 'file';
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
    alternativeText: Attribute.String;
    caption: Attribute.String;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::upload.file',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    ext: Attribute.String;
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
    formats: Attribute.JSON;
    hash: Attribute.String & Attribute.Required;
    height: Attribute.Integer;
    mime: Attribute.String & Attribute.Required;
    name: Attribute.String & Attribute.Required;
    previewUrl: Attribute.String;
    provider: Attribute.String & Attribute.Required;
    provider_metadata: Attribute.JSON;
    related: Attribute.Relation<'plugin::upload.file', 'morphToMany'>;
    size: Attribute.Decimal & Attribute.Required;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'plugin::upload.file',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    url: Attribute.String & Attribute.Required;
    width: Attribute.Integer;
  };
}

export interface PluginUploadFolder extends Schema.CollectionType {
  collectionName: 'upload_folders';
  info: {
    displayName: 'Folder';
    pluralName: 'folders';
    singularName: 'folder';
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
    children: Attribute.Relation<
      'plugin::upload.folder',
      'oneToMany',
      'plugin::upload.folder'
    >;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::upload.folder',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    files: Attribute.Relation<
      'plugin::upload.folder',
      'oneToMany',
      'plugin::upload.file'
    >;
    name: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    parent: Attribute.Relation<
      'plugin::upload.folder',
      'manyToOne',
      'plugin::upload.folder'
    >;
    path: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    pathId: Attribute.Integer & Attribute.Required & Attribute.Unique;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'plugin::upload.folder',
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
    description: '';
    displayName: 'Permission';
    name: 'permission';
    pluralName: 'permissions';
    singularName: 'permission';
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
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::users-permissions.permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    role: Attribute.Relation<
      'plugin::users-permissions.permission',
      'manyToOne',
      'plugin::users-permissions.role'
    >;
    updatedAt: Attribute.DateTime;
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
    description: '';
    displayName: 'Role';
    name: 'role';
    pluralName: 'roles';
    singularName: 'role';
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
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    description: Attribute.String;
    name: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
    permissions: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToMany',
      'plugin::users-permissions.permission'
    >;
    type: Attribute.String & Attribute.Unique;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    users: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToMany',
      'plugin::users-permissions.user'
    >;
  };
}

export interface PluginUsersPermissionsUser extends Schema.CollectionType {
  collectionName: 'up_users';
  info: {
    description: '';
    displayName: 'User';
    name: 'user';
    pluralName: 'users';
    singularName: 'user';
  };
  options: {
    draftAndPublish: false;
    timestamps: true;
  };
  attributes: {
    blocked: Attribute.Boolean & Attribute.DefaultTo<false>;
    confirmationToken: Attribute.String & Attribute.Private;
    confirmed: Attribute.Boolean & Attribute.DefaultTo<false>;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::users-permissions.user',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    email: Attribute.Email &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    password: Attribute.Password &
      Attribute.Private &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    provider: Attribute.String;
    resetPasswordToken: Attribute.String & Attribute.Private;
    role: Attribute.Relation<
      'plugin::users-permissions.user',
      'manyToOne',
      'plugin::users-permissions.role'
    >;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'plugin::users-permissions.user',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    username: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface ContentTypes {
      'admin::api-token': AdminApiToken;
      'admin::api-token-permission': AdminApiTokenPermission;
      'admin::permission': AdminPermission;
      'admin::role': AdminRole;
      'admin::transfer-token': AdminTransferToken;
      'admin::transfer-token-permission': AdminTransferTokenPermission;
      'admin::user': AdminUser;
      'api::address.address': ApiAddressAddress;
      'api::animal.animal': ApiAnimalAnimal;
      'api::area.area': ApiAreaArea;
      'api::asset.asset': ApiAssetAsset;
      'api::auto-color.auto-color': ApiAutoColorAutoColor;
      'api::auto-condition.auto-condition': ApiAutoConditionAutoCondition;
      'api::auto-cylinder.auto-cylinder': ApiAutoCylinderAutoCylinder;
      'api::auto-drive.auto-drive': ApiAutoDriveAutoDrive;
      'api::auto-fuel.auto-fuel': ApiAutoFuelAutoFuel;
      'api::auto-size.auto-size': ApiAutoSizeAutoSize;
      'api::auto-status.auto-status': ApiAutoStatusAutoStatus;
      'api::auto-transmission.auto-transmission': ApiAutoTransmissionAutoTransmission;
      'api::auto-type.auto-type': ApiAutoTypeAutoType;
      'api::auto.auto': ApiAutoAuto;
      'api::block.block': ApiBlockBlock;
      'api::blog.blog': ApiBlogBlog;
      'api::business-directory.business-directory': ApiBusinessDirectoryBusinessDirectory;
      'api::business.business': ApiBusinessBusiness;
      'api::city-district.city-district': ApiCityDistrictCityDistrict;
      'api::city.city': ApiCityCity;
      'api::coaching.coaching': ApiCoachingCoaching;
      'api::country.country': ApiCountryCountry;
      'api::course.course': ApiCourseCourse;
      'api::currency.currency': ApiCurrencyCurrency;
      'api::event.event': ApiEventEvent;
      'api::hotel-feature.hotel-feature': ApiHotelFeatureHotelFeature;
      'api::hotel.hotel': ApiHotelHotel;
      'api::house.house': ApiHouseHouse;
      'api::inventory.inventory': ApiInventoryInventory;
      'api::legal-directory.legal-directory': ApiLegalDirectoryLegalDirectory;
      'api::legal.legal': ApiLegalLegal;
      'api::menu.menu': ApiMenuMenu;
      'api::person.person': ApiPersonPerson;
      'api::product.product': ApiProductProduct;
      'api::realty-type.realty-type': ApiRealtyTypeRealtyType;
      'api::realty.realty': ApiRealtyRealty;
      'api::region.region': ApiRegionRegion;
      'api::restaurant-cuisine.restaurant-cuisine': ApiRestaurantCuisineRestaurantCuisine;
      'api::restaurant-dish.restaurant-dish': ApiRestaurantDishRestaurantDish;
      'api::restaurant-feature.restaurant-feature': ApiRestaurantFeatureRestaurantFeature;
      'api::restaurant-price.restaurant-price': ApiRestaurantPriceRestaurantPrice;
      'api::restaurant-type.restaurant-type': ApiRestaurantTypeRestaurantType;
      'api::restaurant.restaurant': ApiRestaurantRestaurant;
      'api::service.service': ApiServiceService;
      'api::settlement.settlement': ApiSettlementSettlement;
      'api::stead.stead': ApiSteadStead;
      'api::street.street': ApiStreetStreet;
      'api::time-zone.time-zone': ApiTimeZoneTimeZone;
      'api::transport.transport': ApiTransportTransport;
      'plugin::content-releases.release': PluginContentReleasesRelease;
      'plugin::content-releases.release-action': PluginContentReleasesReleaseAction;
      'plugin::i18n.locale': PluginI18NLocale;
      'plugin::multi-tenant.tenant': PluginMultiTenantTenant;
      'plugin::multi-tenant.user-group': PluginMultiTenantUserGroup;
      'plugin::translate.batch-translate-job': PluginTranslateBatchTranslateJob;
      'plugin::upload.file': PluginUploadFile;
      'plugin::upload.folder': PluginUploadFolder;
      'plugin::users-permissions.permission': PluginUsersPermissionsPermission;
      'plugin::users-permissions.role': PluginUsersPermissionsRole;
      'plugin::users-permissions.user': PluginUsersPermissionsUser;
    }
  }
}
