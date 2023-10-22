import type { Schema, Attribute } from '@strapi/strapi';

export interface BlocksCtaCommandLine extends Schema.Component {
  collectionName: 'components_blocks_cta_command_lines';
  info: {
    displayName: 'CtaCommandLine';
    description: '';
  };
  attributes: {
    Theme: Attribute.Enumeration<['primary', 'secondary', 'muted']> &
      Attribute.DefaultTo<'primary'>;
    Title: Attribute.String;
    Text: Attribute.String;
    commandLine: Attribute.Text;
  };
}

export interface BlocksCta extends Schema.Component {
  collectionName: 'components_slices_ctas';
  info: {
    displayName: 'cta';
    icon: 'bullhorn';
  };
  attributes: {
    theme: Attribute.Enumeration<['primary', 'secondary', 'muted']> &
      Attribute.DefaultTo<'muted'>;
    title: Attribute.String;
    text: Attribute.String;
    buttons: Attribute.Component<'shared.button', true>;
  };
}

export interface BlocksFaq extends Schema.Component {
  collectionName: 'components_shared_faqs';
  info: {
    displayName: 'faq';
    icon: 'question';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    theme: Attribute.Enumeration<['primary', 'secondary', 'muted']> &
      Attribute.DefaultTo<'muted'>;
    faq: Attribute.Component<'shared.question-answer', true>;
  };
}

export interface BlocksFeaturesWithImages extends Schema.Component {
  collectionName: 'components_slices_features_with_images';
  info: {
    displayName: 'featuresWithImages';
    icon: 'images';
    description: '';
  };
  attributes: {
    header: Attribute.Component<'shared.header'>;
    text: Attribute.Text & Attribute.Required;
    theme: Attribute.Enumeration<['primary', 'secondary', 'muted']> &
      Attribute.DefaultTo<'primary'>;
    image: Attribute.Media;
    featuresCheck: Attribute.Component<'shared.features-check', true>;
  };
}

export interface BlocksFeatures extends Schema.Component {
  collectionName: 'components_slices_features';
  info: {
    displayName: 'features';
    icon: 'search-plus';
  };
  attributes: {
    theme: Attribute.Enumeration<['primary', 'secondary', 'muted']> &
      Attribute.DefaultTo<'secondary'>;
    header: Attribute.Component<'shared.header'>;
    cards: Attribute.Component<'shared.card', true>;
  };
}

export interface BlocksHero extends Schema.Component {
  collectionName: 'components_slices_heroes';
  info: {
    displayName: 'hero';
    icon: 'pizza-slice';
  };
  attributes: {
    images: Attribute.Media;
    header: Attribute.Component<'shared.header'>;
    text: Attribute.String;
    buttons: Attribute.Component<'shared.button', true>;
  };
}

export interface BlocksPricing extends Schema.Component {
  collectionName: 'components_slices_pricings';
  info: {
    displayName: 'pricing';
    icon: 'money-check-alt';
  };
  attributes: {
    header: Attribute.Component<'shared.header'>;
    pricingCards: Attribute.Component<'pricing.pricing-cards', true>;
  };
}

export interface BlocksTeam extends Schema.Component {
  collectionName: 'components_slices_teams';
  info: {
    displayName: 'team';
    icon: 'people-carry';
    description: '';
  };
  attributes: {
    header: Attribute.Component<'shared.header'>;
    members: Attribute.Relation<
      'blocks.team',
      'oneToMany',
      'plugin::users-permissions.user'
    >;
  };
}

export interface BlocksTestimonial extends Schema.Component {
  collectionName: 'components_shared_testimonials';
  info: {
    displayName: 'testimonial';
    icon: 'quote-right';
    description: '';
  };
  attributes: {
    theme: Attribute.Enumeration<['primary', 'secondary', 'muted']> &
      Attribute.DefaultTo<'primary'>;
    text: Attribute.Text & Attribute.Required;
    author: Attribute.Relation<
      'blocks.testimonial',
      'oneToOne',
      'plugin::users-permissions.user'
    >;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'blocks.cta-command-line': BlocksCtaCommandLine;
      'blocks.cta': BlocksCta;
      'blocks.faq': BlocksFaq;
      'blocks.features-with-images': BlocksFeaturesWithImages;
      'blocks.features': BlocksFeatures;
      'blocks.hero': BlocksHero;
      'blocks.pricing': BlocksPricing;
      'blocks.team': BlocksTeam;
      'blocks.testimonial': BlocksTestimonial;
    }
  }
}
