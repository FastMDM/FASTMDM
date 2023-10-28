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

export interface CommonDictionaryItem extends Schema.Component {
  collectionName: 'components_common_dictionary_items';
  info: {
    displayName: 'DictionaryItem';
    icon: 'ad';
  };
  attributes: {
    name: Attribute.String;
  };
}

export interface CommonMetaItem extends Schema.Component {
  collectionName: 'components_common_meta_items';
  info: {
    displayName: 'MetaItem';
    icon: 'air-freshener';
  };
  attributes: {
    name: Attribute.String;
    value: Attribute.Text;
  };
}

export interface CommonMeta extends Schema.Component {
  collectionName: 'components_common_metas';
  info: {
    displayName: 'meta';
    icon: 'address-card';
    description: '';
  };
  attributes: {
    Meta: Attribute.Component<'common.meta-item', true>;
  };
}

export interface CommonQuoteItem extends Schema.Component {
  collectionName: 'components_common_quote_items';
  info: {
    displayName: 'QuoteItem';
    icon: 'angle-down';
  };
  attributes: {
    Quote: Attribute.String;
    Quoter: Attribute.String;
  };
}

export interface CommonQuote extends Schema.Component {
  collectionName: 'components_common_quotes';
  info: {
    displayName: 'Quote';
    icon: 'angle-right';
  };
  attributes: {
    Quote: Attribute.Component<'common.quote-item', true>;
  };
}

export interface CommonRichText extends Schema.Component {
  collectionName: 'components_common_rich_texts';
  info: {
    displayName: 'RichText';
    icon: 'align-justify';
  };
  attributes: {
    RichText: Attribute.RichText;
  };
}

export interface GlobalFooter extends Schema.Component {
  collectionName: 'components_global_footers';
  info: {
    displayName: 'footer';
    icon: 'align-right';
  };
  attributes: {
    footerColumns: Attribute.Component<'shared.footer-columns', true>;
    socialNetworks: Attribute.Component<'shared.social-networks', true>;
    button: Attribute.Component<'shared.button'>;
    label: Attribute.String;
  };
}

export interface GlobalNavigation extends Schema.Component {
  collectionName: 'components_global_navigations';
  info: {
    displayName: 'navigation';
    icon: 'location-arrow';
  };
  attributes: {
    links: Attribute.Component<'shared.link', true>;
    leftButton: Attribute.Component<'shared.link'>;
    rightButton: Attribute.Component<'shared.link'>;
  };
}

export interface PricingPerks extends Schema.Component {
  collectionName: 'components_shared_perks';
  info: {
    displayName: 'perks';
    icon: 'adjust';
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    included: Attribute.Boolean & Attribute.Required;
  };
}

export interface PricingPricingCards extends Schema.Component {
  collectionName: 'components_shared_pricing_cards';
  info: {
    displayName: 'pricingCards';
    icon: 'file-invoice-dollar';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    description: Attribute.String;
    price: Attribute.Integer & Attribute.Required;
    perks: Attribute.Component<'pricing.perks', true>;
  };
}

export interface QuestionAnswer extends Schema.Component {
  collectionName: 'components_question_answers';
  info: {
    displayName: 'Answer';
    icon: 'ambulance';
  };
  attributes: {
    author: Attribute.Relation<
      'question.answer',
      'oneToOne',
      'plugin::users-permissions.user'
    >;
    text: Attribute.RichText;
    scor: Attribute.Integer;
    Votes: Attribute.Component<'question.vote', true>;
    Comments: Attribute.Component<'question.comment', true>;
  };
}

export interface QuestionComment extends Schema.Component {
  collectionName: 'components_question_comments';
  info: {
    displayName: 'Comment';
    icon: 'american-sign-language-interpreting';
  };
  attributes: {
    author: Attribute.Relation<
      'question.comment',
      'oneToOne',
      'plugin::users-permissions.user'
    >;
    Body: Attribute.RichText;
  };
}

export interface QuestionVote extends Schema.Component {
  collectionName: 'components_question_votes';
  info: {
    displayName: 'Vote';
    icon: 'align-right';
  };
  attributes: {
    user: Attribute.Relation<
      'question.vote',
      'oneToOne',
      'plugin::users-permissions.user'
    >;
    Vote: Attribute.Integer;
  };
}

export interface RestaurantDishSlider extends Schema.Component {
  collectionName: 'components_restaurant_dish_sliders';
  info: {
    displayName: 'DishSlider';
    icon: 'angle-double-down';
  };
  attributes: {
    name: Attribute.String;
    Description: Attribute.Text;
    Image: Attribute.Media;
    Price: Attribute.Integer;
  };
}

export interface RestaurantDish extends Schema.Component {
  collectionName: 'components_restaurant_dishes';
  info: {
    displayName: 'Dish';
    icon: 'angle-double-right';
  };
  attributes: {
    DishSlider: Attribute.Component<'restaurant.dish-slider', true>;
  };
}

export interface RestaurantInformation extends Schema.Component {
  collectionName: 'components_restaurant_information';
  info: {
    displayName: 'information';
    icon: 'align-center';
  };
  attributes: {
    description: Attribute.Text;
    opening_hours: Attribute.Component<'restaurant.opening-hours', true>;
    location: Attribute.Component<'restaurant.location'>;
  };
}

export interface RestaurantLocation extends Schema.Component {
  collectionName: 'components_restaurant_more_information';
  info: {
    displayName: 'moreInformation';
    icon: 'allergies';
  };
  attributes: {
    address: Attribute.String;
    website: Attribute.String;
    phone: Attribute.String;
  };
}

export interface RestaurantOpeningHours extends Schema.Component {
  collectionName: 'components_opening_hours';
  info: {
    displayName: 'openingHours';
    icon: 'calendar-alt';
  };
  attributes: {
    day_interval: Attribute.String & Attribute.Required;
    opening_hour: Attribute.String;
    closing_hour: Attribute.String;
  };
}

export interface RestaurantRelatedRestaurants extends Schema.Component {
  collectionName: 'components_restaurant_related_restaurants';
  info: {
    displayName: 'RelatedRestaurants';
  };
  attributes: {
    Header: Attribute.Component<'shared.header'>;
    restaurants: Attribute.Relation<
      'restaurant.related-restaurants',
      'oneToMany',
      'api::restaurant.restaurant'
    >;
  };
}

export interface RestaurantRichContent extends Schema.Component {
  collectionName: 'components_restaurant_rich_contents';
  info: {
    displayName: 'richContent';
    icon: 'asterisk';
  };
  attributes: {
    content: Attribute.RichText;
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
      'common.dictionary-item': CommonDictionaryItem;
      'common.meta-item': CommonMetaItem;
      'common.meta': CommonMeta;
      'common.quote-item': CommonQuoteItem;
      'common.quote': CommonQuote;
      'common.rich-text': CommonRichText;
      'global.footer': GlobalFooter;
      'global.navigation': GlobalNavigation;
      'pricing.perks': PricingPerks;
      'pricing.pricing-cards': PricingPricingCards;
      'question.answer': QuestionAnswer;
      'question.comment': QuestionComment;
      'question.vote': QuestionVote;
      'restaurant.dish-slider': RestaurantDishSlider;
      'restaurant.dish': RestaurantDish;
      'restaurant.information': RestaurantInformation;
      'restaurant.location': RestaurantLocation;
      'restaurant.opening-hours': RestaurantOpeningHours;
      'restaurant.related-restaurants': RestaurantRelatedRestaurants;
      'restaurant.rich-content': RestaurantRichContent;
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
