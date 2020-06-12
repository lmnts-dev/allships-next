/**
 *
 * @name Sanity_DefaultItem
 *
 */

export type Sanity_DefaultItem = {
  _updatedAt: string;
  _type: string;
  _rev: string;
  _id: string;
  _createdAt: string;
};

/**
 *
 * @name Colors
 *
 */

export type Sanity_RGBA_Color = {
  a: number;
  r: number;
  g: number;
  b: number;
};

export type Sanity_HSVA_Color = {
  a: number;
  h: number;
  s: number;
  v: number;
};

export type Sanity_HSLA_Color = {
  a: number;
  h: number;
  l: number;
  s: number;
};

export type Sanity_Color = {
  alpha: number;
  hex: string;
  hsl: Sanity_HSLA_Color;
  hsv: Sanity_HSVA_Color;
  rgb: Sanity_RGBA_Color;
};

/**
 *
 * @name Sanity_ImagePaletteSwatch
 *
 */

export type Sanity_ImagePaletteSwatch = {
  background: string;
  foreground: string;
  population: number;
  title: string;
  _type: string;
};

/**
 *
 * @name Sanity_ImagePalette
 *
 */

export type Sanity_ImagePalette = {
  darkMuted: Sanity_ImagePaletteSwatch;
  darkVibrant: Sanity_ImagePaletteSwatch;
  dominant: Sanity_ImagePaletteSwatch;
  lightMuted: Sanity_ImagePaletteSwatch;
  lightVibrant: Sanity_ImagePaletteSwatch;
  muted: Sanity_ImagePaletteSwatch;
  vibrant: Sanity_ImagePaletteSwatch;
  _type: string;
};

/**
 *
 * @name Sanity_ImageDimensions
 * 
 */

export type Sanity_ImageDimensions = {
  aspectRatio: number;
  height: number;
  width: number;
  _type: string;
};

/**
 *
 * @name Sanity_ImageMetadata
 *
 */

export type Sanity_ImageMetadata = {
  dimensions: Sanity_ImageDimensions;
  hasAlpha: boolean;
  isOpaque: boolean;
  lqip: string;
  palette: Sanity_ImagePalette;
  _type: string;
};

/**
 *
 * @name Sanity_ImageAsset
 *
 */

export type Sanity_ImageAsset = Sanity_DefaultItem & {
  assetId: string;
  extension: string;
  metadata: Sanity_ImageMetadata;
  mimeType: string;
  originalFilename: string;
  path: string;
  sha1hash: string;
  size: number;
  uploadId: string;
  url: string;
};

/**
 *
 * @name Sanity_Slug
 *
 */

export type Sanity_Slug = {
  current: string;
  _type: string;
};

/**
 *
 * @name Sanity_BlockContent
 *
 */

export type Sanity_BlockContent = Sanity_DefaultItem & {
  style: string;
  markDefs: [];
  children: Sanity_DefaultItem &
    {
      marks: [];
      text: string;
      _key: string;
    }[];
};
