module.exports = {
  /*
  "rest-cache": {
    config: {
      // https://github.com/strapi-community/strapi-plugin-rest-cache/blob/main/docs/documentation/configuration-reference.md#cachekeysconfig
      // https://api-dev.meanmine.com/api/company-directories
      provider: {
        name: "memory",
        options: {
          max: 32767,
          maxAge: 3600000,
          enableEtagSupport: true,
          debug: true,
          hitpass: false
          },
      },
      strategy: {
        debug: true,
        hitpass: false,
        maxAge: 3600000,        
        contentTypes: [
          "api::auto.auto",
          "api::auto-color.auto-color",
          "api::auto-condition.auto-condition",
          "api::auto-cylinder.auto-cylinder",
          "api::auto-drive.auto-drive",
          "api::auto-fuel.auto-fuel",
          "api::auto-size.auto-size",
          "api::auto-status.auto-status",
          "api::auto-transmission.auto-transmission",
          "api::auto-type.auto-type",
//          "api::blog.blog",
          "api::coaching.coaching",
//          "api::company.company",
//          "api::company-directory.company-directory",
          "api::country.country",
          "api::course.course",
          "api::currency.currency",
          "api::event.event",
          "api::house.house",
          "api::house-type.house-type",
          "api::menu.menu",
          "api::question.question",
          "api::restaurant.restaurant",
          "api::tenant.tenant",
          "api::todo.todo"
          // list of Content-Types UID to cache
        ],
      },
    },
  },
*/
  // ...
  translate: {
    enabled: true,
    config: {
      // Choose one of the available providers
      provider: 'libretranslate',
      // Pass credentials and other options to the provider
      providerOptions: {
        // your API key - required and wil cause errors if not provided
        apiKey: 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx',
        // api url - required 
        apiUrl: 'https://translate.vronsky.com/',
        // maximum number of requests per minute - optional, default is `undefined` => no limit
        apiMaxRPM: 80,
        // maximum number of chars per request - optional, default is `undefined` => no limit
        //apiMaxChars: 1234,
        // maximum number of texts per request
        apiMaxTexts: 55,
        // manually overwrite the Strapi Locale to LibreTranslate Locale mapping.
        // default is the string before the `-` character for every locale
        localeMap:{ }
      },
/*
      // Which field types are translated (default string, text, richtext, components and dynamiczones)
      // Either string or object with type and format
      // Possible formats: plain, markdown, html (default plain)
      translatedFieldTypes: [
        'string',
        { type: 'text', format: 'plain' },
        { type: 'richtext', format: 'markdown' },
        'component',
        'dynamiczone',
      ],
      // If relations should be translated (default true)
      translateRelations: true,
*/      
    },
  },
  // ...
  // ...
  'multi-tenant': {
    enabled: true,
  },
  // ...
  
};