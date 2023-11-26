import type { Schema, Attribute } from '@strapi/strapi';

export interface ButtonButton extends Schema.Component {
  collectionName: 'components_button_buttons';
  info: {
    displayName: 'Button';
  };
  attributes: {
    text: Attribute.String;
    link: Attribute.RichText;
  };
}

export interface CardCard extends Schema.Component {
  collectionName: 'components_card_cards';
  info: {
    displayName: 'Card';
    icon: 'dashboard';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    heading: Attribute.String;
    description: Attribute.String;
    button: Attribute.Component<'button.button'>;
  };
}

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

export interface SectionSection extends Schema.Component {
  collectionName: 'components_section_sections';
  info: {
    displayName: 'Section';
    icon: 'stack';
    description: '';
  };
  attributes: {
    image: Attribute.Component<'text.image-section'>;
    text: Attribute.Component<'text.text-section'>;
  };
}

export interface TextImageSection extends Schema.Component {
  collectionName: 'components_text_image_sections';
  info: {
    displayName: 'image-section';
    icon: 'picture';
    description: '';
  };
  attributes: {
    img: Attribute.Media;
  };
}

export interface TextTextSection extends Schema.Component {
  collectionName: 'components_text_text_sections';
  info: {
    displayName: 'text-section';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    heading: Attribute.String;
    description: Attribute.Text;
    link: Attribute.Text;
    button: Attribute.Component<'button.button'>;
  };
}

declare module '@strapi/strapi' {
  export module Shared {
    export interface Components {
      'button.button': ButtonButton;
      'card.card': CardCard;
      'information.contacts': InformationContacts;
      'information.location': InformationLocation;
      'section.section': SectionSection;
      'text.image-section': TextImageSection;
      'text.text-section': TextTextSection;
    }
  }
}
