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

export interface PageButton extends Schema.Component {
  collectionName: 'components_page_buttons';
  info: {
    displayName: 'button';
  };
  attributes: {
    title: Attribute.String;
    link: Attribute.Text;
    icon: Attribute.String;
  };
}

export interface PageCard extends Schema.Component {
  collectionName: 'components_page_cards';
  info: {
    displayName: 'card';
    description: '';
  };
  attributes: {
    icon: Attribute.String;
    title: Attribute.String;
    heading: Attribute.String;
    description: Attribute.RichText;
    image: Attribute.Media;
    button: Attribute.Component<'page.button'>;
  };
}

export interface PageHeroBanner extends Schema.Component {
  collectionName: 'components_page_hero_banners';
  info: {
    displayName: 'section';
    description: '';
  };
  attributes: {
    image: Attribute.Media;
    button: Attribute.Component<'page.button'>;
    heading: Attribute.String;
    description: Attribute.RichText;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'information.contacts': InformationContacts;
      'information.location': InformationLocation;
      'page.button': PageButton;
      'page.card': PageCard;
      'page.hero-banner': PageHeroBanner;
    }
  }
}
