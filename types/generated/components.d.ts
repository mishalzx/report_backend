import type { Schema, Struct } from '@strapi/strapi';

export interface OrgOrgInfo extends Struct.ComponentSchema {
  collectionName: 'components_org_org_infos';
  info: {
    displayName: 'Org Info';
  };
  attributes: {
    businessType: Schema.Attribute.Enumeration<
      ['Hospitality', 'Retail', 'Manufacturing', 'Services', 'Other']
    >;
    businessTypeOther: Schema.Attribute.String;
    companyName: Schema.Attribute.String;
    contactPerson: Schema.Attribute.String;
    department: Schema.Attribute.String;
    departmentOther: Schema.Attribute.String;
    email: Schema.Attribute.Email;
    phone: Schema.Attribute.String;
    surveyBy: Schema.Attribute.Enumeration<['company', 'consultant', 'other']>;
    test: Schema.Attribute.String;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

export interface SurveyResultItem extends Struct.ComponentSchema {
  collectionName: 'components_survey_result_items';
  info: {
    displayName: 'Result Item';
  };
  attributes: {
    index: Schema.Attribute.BigInteger;
    part: Schema.Attribute.String & Schema.Attribute.Required;
    question: Schema.Attribute.String & Schema.Attribute.Required;
    selectedItems: Schema.Attribute.Component<'survey.selected-items', true>;
  };
}

export interface SurveyScore extends Struct.ComponentSchema {
  collectionName: 'components_survey_scores';
  info: {
    displayName: 'Score';
  };
  attributes: {
    maxPoints: Schema.Attribute.BigInteger;
    percentage: Schema.Attribute.BigInteger;
    totalPoints: Schema.Attribute.BigInteger;
  };
}

export interface SurveySelectedItems extends Struct.ComponentSchema {
  collectionName: 'components_survey_selected_items';
  info: {
    displayName: 'Selected Items';
  };
  attributes: {
    index: Schema.Attribute.BigInteger;
    label: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'org.org-info': OrgOrgInfo;
      'shared.media': SharedMedia;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
      'survey.result-item': SurveyResultItem;
      'survey.score': SurveyScore;
      'survey.selected-items': SurveySelectedItems;
    }
  }
}
