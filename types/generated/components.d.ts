import type { Schema, Struct } from '@strapi/strapi';

export interface CommonContactLink extends Struct.ComponentSchema {
  collectionName: 'components_common_contact_links';
  info: {
    displayName: 'contact-link';
  };
  attributes: {
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    type: Schema.Attribute.Enumeration<['whatsapp', 'call', 'email']>;
    value: Schema.Attribute.Text;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'common.contact-link': CommonContactLink;
    }
  }
}
