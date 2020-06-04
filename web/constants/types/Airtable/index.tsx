/**
 *
 * @name Airtable_DefaultRecord
 *
 */

export type Airtable_DefaultRecord = {
  _table?: object;
  _rawJson?: object;
  id?: string;
  fields: [];
};

/**
 *
 * @name Airtable_ImageAssetReference
 *
 */

export type Airtable_ImageAssetReference = {
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
