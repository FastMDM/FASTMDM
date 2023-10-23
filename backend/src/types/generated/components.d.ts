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

export interface SharedButton extends Schema.Component {
  collectionName: 'components_shared_buttons';
  info: {
    displayName: 'Button';
    description: '';
  };
  attributes: {
    theme: Attribute.Enumeration<['primary', 'secondary', 'muted']> &
      Attribute.Required &
      Attribute.DefaultTo<'primary'>;
    Link: Attribute.Component<'shared.link'>;
  };
}

export interface SharedCard extends Schema.Component {
  collectionName: 'components_shared_cards';
  info: {
    displayName: 'Card';
  };
  attributes: {
    Title: Attribute.String;
    Text: Attribute.String;
    Image: Attribute.Media;
  };
}

export interface SharedComment extends Schema.Component {
  collectionName: 'components_shared_comments';
  info: {
    displayName: 'Comment';
  };
  attributes: {
    Content: Attribute.Text;
  };
}

export interface SharedFeaturesCheck extends Schema.Component {
  collectionName: 'components_shared_features_checks';
  info: {
    displayName: 'FeaturesCheck';
  };
  attributes: {
    Text: Attribute.String;
  };
}

export interface SharedFooterColumns extends Schema.Component {
  collectionName: 'components_shared_footer_columns';
  info: {
    displayName: 'FooterColumns';
  };
  attributes: {
    Links: Attribute.Component<'shared.link', true>;
  };
}

export interface SharedHeader extends Schema.Component {
  collectionName: 'components_shared_headers';
  info: {
    displayName: 'Header';
    description: '';
  };
  attributes: {
    Theme: Attribute.Enumeration<['primary', 'secondary', 'muted']> &
      Attribute.DefaultTo<'primary'>;
    Label: Attribute.String;
    Title: Attribute.String;
  };
}

export interface SharedLink extends Schema.Component {
  collectionName: 'components_shared_links';
  info: {
    displayName: 'Link';
    description: '';
  };
  attributes: {
    Href: Attribute.String & Attribute.Required;
    Label: Attribute.String & Attribute.Required;
    Target: Attribute.Enumeration<['_blank']>;
    IsExternal: Attribute.Boolean & Attribute.DefaultTo<false>;
  };
}

export interface SharedMetaSocial extends Schema.Component {
  collectionName: 'components_shared_meta_socials';
  info: {
    displayName: 'MetaSocial';
  };
  attributes: {
    SocialNetwork: Attribute.Enumeration<['Facebook', 'Twitter']> &
      Attribute.Required;
    Title: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    Description: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 65;
      }>;
    Image: Attribute.Media &
      Attribute.SetPluginOptions<{
        translate: {
          translate: 'copy';
        };
      }>;
  };
}

export interface SharedPublication extends Schema.Component {
  collectionName: 'components_shared_publications';
  info: {
    displayName: 'Publication';
  };
  attributes: {
    Publish_at: Attribute.DateTime;
    Ready: Attribute.Boolean & Attribute.DefaultTo<true>;
  };
}

export interface SharedQuestionAnswer extends Schema.Component {
  collectionName: 'components_shared_question_answers';
  info: {
    displayName: 'questionAnswer';
    icon: 'question-circle';
    description: '';
  };
  attributes: {
    question: Attribute.String;
    answer: Attribute.RichText;
  };
}

export interface SharedSeo extends Schema.Component {
  collectionName: 'components_shared_seos';
  info: {
    displayName: 'Seo';
  };
  attributes: {
    MetaTitle: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    MetaDescription: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 50;
        maxLength: 160;
      }>;
    MetaImage: Attribute.Media & Attribute.Required;
    MetaSocial: Attribute.Component<'shared.meta-social', true>;
    Keywords: Attribute.Text;
    MetaRobots: Attribute.String;
    StructuredData: Attribute.JSON;
    MetaViewport: Attribute.String;
    CanonicalURL: Attribute.String;
  };
}

export interface SharedSocialNetwork extends Schema.Component {
  collectionName: 'components_shared_social_networks';
  info: {
    displayName: 'SocialNetwork';
  };
  attributes: {
    URL: Attribute.String & Attribute.Required;
  };
}

export interface SharedTeamCard extends Schema.Component {
  collectionName: 'components_shared_team_cards';
  info: {
    displayName: 'TeamCard';
  };
  attributes: {
    Fullname: Attribute.String & Attribute.Required;
    Job: Attribute.String & Attribute.Required;
    Description: Attribute.String & Attribute.Required;
    SocialNetworks: Attribute.Component<'shared.social-network', true>;
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
      'shared.button': SharedButton;
      'shared.card': SharedCard;
      'shared.comment': SharedComment;
      'shared.features-check': SharedFeaturesCheck;
      'shared.footer-columns': SharedFooterColumns;
      'shared.header': SharedHeader;
      'shared.link': SharedLink;
      'shared.meta-social': SharedMetaSocial;
      'shared.publication': SharedPublication;
      'shared.question-answer': SharedQuestionAnswer;
      'shared.seo': SharedSeo;
      'shared.social-network': SharedSocialNetwork;
      'shared.team-card': SharedTeamCard;
    }
  }
}
