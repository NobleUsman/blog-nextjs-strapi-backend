import type { Schema, Struct } from '@strapi/strapi';

export interface BlogContentHeading extends Struct.ComponentSchema {
  collectionName: 'components_blog_content_headings';
  info: {
    displayName: 'Heading';
  };
  attributes: {
    title: Schema.Attribute.String;
  };
}

export interface BlogContentQuote extends Struct.ComponentSchema {
  collectionName: 'components_blog_content_quotes';
  info: {
    displayName: 'Quote';
  };
  attributes: {
    author: Schema.Attribute.String;
    text: Schema.Attribute.Text;
  };
}

export interface BlogContentText extends Struct.ComponentSchema {
  collectionName: 'components_blog_content_texts';
  info: {
    displayName: 'Text';
  };
  attributes: {
    text: Schema.Attribute.Text;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'blog-content.heading': BlogContentHeading;
      'blog-content.quote': BlogContentQuote;
      'blog-content.text': BlogContentText;
    }
  }
}
