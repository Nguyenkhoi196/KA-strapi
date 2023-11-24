import type { Schema, Attribute } from '@strapi/strapi';

export interface InformationContacts extends Schema.Component {
  collectionName: 'components_information_contacts';
  info: {
    displayName: 'contacts';
    icon: 'phone';
    description: '';
  };
  attributes: {
    phone: Attribute.String & Attribute.Required;
    email: Attribute.String;
  };
}

export interface InformationLocation extends Schema.Component {
  collectionName: 'components_information_locations';
  info: {
    displayName: 'Location';
    icon: 'pinMap';
    description: '';
  };
  attributes: {
    address: Attribute.String;
    city: Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Shared {
    export interface Components {
      'information.contacts': InformationContacts;
      'information.location': InformationLocation;
    }
  }
}
