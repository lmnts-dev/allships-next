# [ALLSHIPS](www.allships.co)

By Peter Laxalt
[Laxalt & McIver](www.laxaltandmciver.co)

## Architecture

- [Next.js](https://nextjs.org/)
- [React.js](https://reactjs.org/)
- [Styled Components](https://styled-components.com/)
- [Typescript](https://www.typescriptlang.org/)
- [Sanity](https://www.sanity.io/)

## Data Sources

- [Sanity](https://manage.sanity.io/projects/hpvpbfax/settings/api)
- [Airtable](https://airtable.com/tblYVYIn8Qvez885Q/viwWlwGYVN7C5kRGB)

## Sanity Content Model

### Dataset

- Name: `Allships`
- Project ID: `hpvpbfax`
- URL: `www.`

### Types

#### @Post

- Title: `title: string`
- Content: `content: array[]`
- Author: `author: string`
- Date: `date: string`
- Visiblity: `visiblity: boolean`
- Cover Image: `cover_image: object`
- Category: `category: string[]`
- Tags: `tags: string[]`
- Theme: `theme: Theme`

#### @Page

- Title: `title: string`
- Theme: `theme: Theme`
- Content: `content: array[]`

#### @Theme

- Primary: `primary: string`
- Secondary: `secondary: string`
- Background: `background: string`
- Text: `text: string`
- Dialog: `dialog: string`

### Posts

#### Events

`/events/[category]/[event].tsx`

- Extends: `<Post>`
- Start Date: `start: string`
- End Date: `end?: string`

#### Articles

`/editorial/[category]/[article].tsx`

- Extends: `<Post>`

#### Podcasts

`/podcasts/[category]/[podcast].tsx`

- Extends: `<Post>`
  - Podcast Embed

### Pages

#### Pages

`/[page].tsx`

- Extends: `<Page>`

#### About Us

`/agency.tsx`

- Extends: `<Page>`

#### Frontpage

`/`

- Extends: `<Page>`
- Hero Image: `hero: object`
- Embellishment: `embellishment: object`

### Settings

#### Footer

- Footer

#### Navigation

- Items: `navigation: array[]`

#### Terminal Name

- Items: `terminal: string`

#### Contact Information

- Items: `terminal: string`
