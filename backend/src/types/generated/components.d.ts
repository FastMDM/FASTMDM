import type { Attribute, Schema } from '@strapi/strapi';

export interface BlocksCta extends Schema.Component {
  collectionName: 'components_slices_ctas';
  info: {
    displayName: 'cta';
    icon: 'bullhorn';
  };
  attributes: {
    buttons: Attribute.Component<'shared.button', true>;
    text: Attribute.String;
    theme: Attribute.Enumeration<['primary', 'secondary', 'muted']> &
      Attribute.DefaultTo<'muted'>;
    title: Attribute.String;
  };
}

export interface BlocksCtaCommandLine extends Schema.Component {
  collectionName: 'components_blocks_cta_command_lines';
  info: {
    description: '';
    displayName: 'CtaCommandLine';
  };
  attributes: {
    commandLine: Attribute.Text;
    Text: Attribute.String;
    Theme: Attribute.Enumeration<['primary', 'secondary', 'muted']> &
      Attribute.DefaultTo<'primary'>;
    Title: Attribute.String;
  };
}

export interface BlocksFaq extends Schema.Component {
  collectionName: 'components_shared_faqs';
  info: {
    description: '';
    displayName: 'faq';
    icon: 'question';
  };
  attributes: {
    faq: Attribute.Component<'shared.question-answer', true>;
    theme: Attribute.Enumeration<['primary', 'secondary', 'muted']> &
      Attribute.DefaultTo<'muted'>;
    title: Attribute.String;
  };
}

export interface BlocksFeatures extends Schema.Component {
  collectionName: 'components_slices_features';
  info: {
    displayName: 'features';
    icon: 'search-plus';
  };
  attributes: {
    cards: Attribute.Component<'shared.card', true>;
    header: Attribute.Component<'shared.header'>;
    theme: Attribute.Enumeration<['primary', 'secondary', 'muted']> &
      Attribute.DefaultTo<'secondary'>;
  };
}

export interface BlocksFeaturesWithImages extends Schema.Component {
  collectionName: 'components_slices_features_with_images';
  info: {
    description: '';
    displayName: 'featuresWithImages';
    icon: 'images';
  };
  attributes: {
    featuresCheck: Attribute.Component<'shared.features-check', true>;
    header: Attribute.Component<'shared.header'>;
    image: Attribute.Media<'images' | 'files' | 'videos'>;
    text: Attribute.Text & Attribute.Required;
    theme: Attribute.Enumeration<['primary', 'secondary', 'muted']> &
      Attribute.DefaultTo<'primary'>;
  };
}

export interface BlocksHero extends Schema.Component {
  collectionName: 'components_slices_heroes';
  info: {
    displayName: 'hero';
    icon: 'pizza-slice';
  };
  attributes: {
    buttons: Attribute.Component<'shared.button', true>;
    header: Attribute.Component<'shared.header'>;
    images: Attribute.Media<'images' | 'files' | 'videos', true>;
    text: Attribute.String;
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
    description: '';
    displayName: 'team';
    icon: 'people-carry';
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
    description: '';
    displayName: 'testimonial';
    icon: 'quote-right';
  };
  attributes: {
    author: Attribute.Relation<
      'blocks.testimonial',
      'oneToOne',
      'plugin::users-permissions.user'
    >;
    text: Attribute.Text & Attribute.Required;
    theme: Attribute.Enumeration<['primary', 'secondary', 'muted']> &
      Attribute.DefaultTo<'primary'>;
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

export interface CommonMeta extends Schema.Component {
  collectionName: 'components_common_metas';
  info: {
    description: '';
    displayName: 'meta';
    icon: 'address-card';
  };
  attributes: {
    Meta: Attribute.Component<'common.meta-item', true>;
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
    button: Attribute.Component<'shared.button'>;
    footerColumns: Attribute.Component<'shared.footer-columns', true>;
    label: Attribute.String;
    socialNetworks: Attribute.Component<'shared.social-networks', true>;
  };
}

export interface GlobalNavigation extends Schema.Component {
  collectionName: 'components_global_navigations';
  info: {
    displayName: 'navigation';
    icon: 'location-arrow';
  };
  attributes: {
    leftButton: Attribute.Component<'shared.link'>;
    links: Attribute.Component<'shared.link', true>;
    rightButton: Attribute.Component<'shared.link'>;
  };
}

export interface HotelHotel extends Schema.Component {
  collectionName: 'components_hotel_hotels';
  info: {
    description: '';
    displayName: 'Hotel';
  };
  attributes: {
    hotel_features: Attribute.Relation<
      'hotel.hotel',
      'oneToMany',
      'api::hotel-feature.hotel-feature'
    >;
  };
}

export interface PricingPerks extends Schema.Component {
  collectionName: 'components_shared_perks';
  info: {
    displayName: 'perks';
    icon: 'adjust';
  };
  attributes: {
    included: Attribute.Boolean & Attribute.Required;
    name: Attribute.String & Attribute.Required;
  };
}

export interface PricingPricingCards extends Schema.Component {
  collectionName: 'components_shared_pricing_cards';
  info: {
    displayName: 'pricingCards';
    icon: 'file-invoice-dollar';
  };
  attributes: {
    description: Attribute.String;
    perks: Attribute.Component<'pricing.perks', true>;
    price: Attribute.Integer & Attribute.Required;
    title: Attribute.String & Attribute.Required;
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
    Comments: Attribute.Component<'question.comment', true>;
    scor: Attribute.Integer;
    text: Attribute.RichText;
    Votes: Attribute.Component<'question.vote', true>;
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

export interface RestaurantDish extends Schema.Component {
  collectionName: 'components_restaurant_dishes';
  info: {
    description: '';
    displayName: 'Dish';
    icon: 'angle-double-right';
  };
  attributes: {
    DishSlider: Attribute.Component<'restaurant.dish-slider', true>;
  };
}

export interface RestaurantDishSlider extends Schema.Component {
  collectionName: 'components_restaurant_dish_sliders';
  info: {
    description: '';
    displayName: 'DishSlider';
    icon: 'angle-double-down';
  };
  attributes: {
    Description: Attribute.Text;
    Image: Attribute.Media<'images' | 'files' | 'videos'>;
    Name: Attribute.String;
    Price: Attribute.Integer;
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
    location: Attribute.Component<'restaurant.location'>;
    opening_hours: Attribute.Component<'restaurant.opening-hours', true>;
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
    phone: Attribute.String;
    website: Attribute.String;
  };
}

export interface RestaurantOpeningHours extends Schema.Component {
  collectionName: 'components_opening_hours';
  info: {
    displayName: 'openingHours';
    icon: 'calendar-alt';
  };
  attributes: {
    closing_hour: Attribute.String;
    day_interval: Attribute.String & Attribute.Required;
    opening_hour: Attribute.String;
  };
}

export interface RestaurantRelatedRestaurants extends Schema.Component {
  collectionName: 'components_restaurant_related_restaurants';
  info: {
    displayName: 'RelatedRestaurants';
  };
  attributes: {
    Header: Attribute.Component<'shared.header'>;
  };
}

export interface RestaurantRestaurant extends Schema.Component {
  collectionName: 'components_restaurant_restaurants';
  info: {
    description: '';
    displayName: 'Restaurant';
  };
  attributes: {
    DishSlider: Attribute.Component<'restaurant.dish-slider', true>;
    restaurant_cuisines: Attribute.Relation<
      'restaurant.restaurant',
      'oneToMany',
      'api::restaurant-cuisine.restaurant-cuisine'
    >;
    restaurant_dishes: Attribute.Relation<
      'restaurant.restaurant',
      'oneToMany',
      'api::restaurant-dish.restaurant-dish'
    >;
    restaurant_features: Attribute.Relation<
      'restaurant.restaurant',
      'oneToMany',
      'api::restaurant-feature.restaurant-feature'
    >;
    restaurant_price: Attribute.Relation<
      'restaurant.restaurant',
      'oneToOne',
      'api::restaurant-price.restaurant-price'
    >;
    restaurant_type: Attribute.Relation<
      'restaurant.restaurant',
      'oneToOne',
      'api::restaurant-type.restaurant-type'
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
    description: '';
    displayName: 'Button';
  };
  attributes: {
    Link: Attribute.Component<'shared.link'>;
    theme: Attribute.Enumeration<['primary', 'secondary', 'muted']> &
      Attribute.Required &
      Attribute.DefaultTo<'primary'>;
  };
}

export interface SharedCard extends Schema.Component {
  collectionName: 'components_shared_cards';
  info: {
    displayName: 'Card';
  };
  attributes: {
    Image: Attribute.Media<'images' | 'files' | 'videos'>;
    Text: Attribute.String;
    Title: Attribute.String;
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
    description: '';
    displayName: 'Header';
  };
  attributes: {
    Label: Attribute.String;
    Theme: Attribute.Enumeration<['primary', 'secondary', 'muted']> &
      Attribute.DefaultTo<'primary'>;
    Title: Attribute.String;
  };
}

export interface SharedLink extends Schema.Component {
  collectionName: 'components_shared_links';
  info: {
    description: '';
    displayName: 'Link';
  };
  attributes: {
    Href: Attribute.String & Attribute.Required;
    IsExternal: Attribute.Boolean & Attribute.DefaultTo<false>;
    Label: Attribute.String & Attribute.Required;
    Target: Attribute.Enumeration<['_blank']>;
  };
}

export interface SharedMetaSocial extends Schema.Component {
  collectionName: 'components_shared_meta_socials';
  info: {
    displayName: 'MetaSocial';
  };
  attributes: {
    Description: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 65;
      }>;
    Image: Attribute.Media<'images' | 'files' | 'videos'> &
      Attribute.SetPluginOptions<{
        translate: {
          translate: 'copy';
        };
      }>;
    SocialNetwork: Attribute.Enumeration<['Facebook', 'Twitter']> &
      Attribute.Required;
    Title: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 60;
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
    description: '';
    displayName: 'questionAnswer';
    icon: 'question-circle';
  };
  attributes: {
    answer: Attribute.RichText;
    question: Attribute.String;
  };
}

export interface SharedSeo extends Schema.Component {
  collectionName: 'components_shared_seos';
  info: {
    displayName: 'Seo';
  };
  attributes: {
    CanonicalURL: Attribute.String;
    Keywords: Attribute.Text;
    MetaDescription: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 160;
        minLength: 50;
      }>;
    MetaImage: Attribute.Media<'images' | 'files' | 'videos'> &
      Attribute.Required;
    MetaRobots: Attribute.String;
    MetaSocial: Attribute.Component<'shared.meta-social', true>;
    MetaTitle: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    MetaViewport: Attribute.String;
    StructuredData: Attribute.JSON;
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
    Description: Attribute.String & Attribute.Required;
    Fullname: Attribute.String & Attribute.Required;
    Job: Attribute.String & Attribute.Required;
    SocialNetworks: Attribute.Component<'shared.social-network', true>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'blocks.cta': BlocksCta;
      'blocks.cta-command-line': BlocksCtaCommandLine;
      'blocks.faq': BlocksFaq;
      'blocks.features': BlocksFeatures;
      'blocks.features-with-images': BlocksFeaturesWithImages;
      'blocks.hero': BlocksHero;
      'blocks.pricing': BlocksPricing;
      'blocks.team': BlocksTeam;
      'blocks.testimonial': BlocksTestimonial;
      'common.dictionary-item': CommonDictionaryItem;
      'common.meta': CommonMeta;
      'common.meta-item': CommonMetaItem;
      'common.quote': CommonQuote;
      'common.quote-item': CommonQuoteItem;
      'common.rich-text': CommonRichText;
      'global.footer': GlobalFooter;
      'global.navigation': GlobalNavigation;
      'hotel.hotel': HotelHotel;
      'pricing.perks': PricingPerks;
      'pricing.pricing-cards': PricingPricingCards;
      'question.answer': QuestionAnswer;
      'question.comment': QuestionComment;
      'question.vote': QuestionVote;
      'restaurant.dish': RestaurantDish;
      'restaurant.dish-slider': RestaurantDishSlider;
      'restaurant.information': RestaurantInformation;
      'restaurant.location': RestaurantLocation;
      'restaurant.opening-hours': RestaurantOpeningHours;
      'restaurant.related-restaurants': RestaurantRelatedRestaurants;
      'restaurant.restaurant': RestaurantRestaurant;
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
