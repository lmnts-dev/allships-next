/**
 *
 * @name Types
 * @author Peter Laxalt
 * @description Our site typings.
 *
 */

// Begin Component
//////////////////////////////////////////////////////////////////////

/**
 *
 * @name Colors
 *
 */

export type LMNTS_Sanity_RGBA_Color = {
  a: number;
  r: number;
  g: number;
  b: number;
};

export type LMNTS_Sanity_HSVA_Color = {
  a: number;
  h: number;
  s: number;
  v: number;
};

export type LMNTS_Sanity_HSLA_Color = {
  a: number;
  h: number;
  l: number;
  s: number;
};

export type LMNTS_Sanity_Color = {
  alpha: number;
  hex: string;
  hsl: LMNTS_Sanity_HSLA_Color;
  hsv: LMNTS_Sanity_HSVA_Color;
  rgb: LMNTS_Sanity_RGBA_Color;
};

/**
 *
 * @name LMNTS_Airtable_DefaultRecord
 *
 */

export type LMNTS_Airtable_DefaultRecord = {
  _table?: object;
  _rawJson?: object;
  id?: string;
  fields: [];
};

/**
 *
 * @name LMNTS_Airtable_ImageAssetReference
 *
 */
export type LMNTS_Airtable_ImageAssetReference = {
  filename: string;
  id: string;
  size: string;
  thumbnails: {
    small: {
      height: number;
      url: string;
      width: number;
    };
    large: {
      height: number;
      url: string;
      width: number;
    };
    full: {
      height: number;
      url: string;
      width: number;
    };
  };
  type: string;
  url: string;
};

/**
 *
 * @name LMNTS_ContentCardFields
 *
 */

export type LMNTS_ContentCardFields = {
  Attachments?: LMNTS_Airtable_ImageAssetReference[];
  Author?: string;
  Category?: string;
  Link?: string;
  Name?: string;
  Notes?: string;
  Tags?: string[];
  Featured?: boolean;
  Published?: boolean;
  "Date Added": string;
};

/**
 *
 * @name LMNTS_ContentItem
 *
 */

export type LMNTS_ContentItem = LMNTS_Airtable_DefaultRecord & {
  fields: LMNTS_ContentCardFields;
};
