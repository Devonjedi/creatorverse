# WEB103 Prework - *Creatorverse*

Submitted by: **Devon Ek**

About this web app: **A full-stack React application that allows users to create, view, update, and delete their favorite content creators, backed by a Supabase database.**

Time spent: **10-12** hours

## Required Features

The following **required** functionality is completed:

- [x] **A logical component structure in React is used to create the frontend of the app**
- [x] **At least five content creators are displayed on the homepage of the app**
- [x] **Each content creator item includes their name, a link to their channel/page, and a short description of their content**
- [x] **API calls use the async/await design pattern via Axios or fetch()**
- [x] **Clicking on a content creator item takes the user to their details page, which includes their name, url, and description**
- [x] **Each content creator has their own unique URL**
- [x] **The user can edit a content creator to change their name, url, or description**
- [x] **The user can delete a content creator**
- [x] **The user can add a new content creator by entering a name, url, or description and then it is displayed on the homepage**

The following **optional** (Stretch) features are implemented:

- [x] **PicoCSS is used to style HTML elements**
- [x] **The content creator items are displayed in a creative format, like cards instead of a list**
- [x] **An image of each content creator is shown on their content creator card**

The following **additional** features are implemented:

* [x] **Security Best Practices**: Utilized `.env` files and Vite's `VITE_` prefix to securely manage Supabase API keys, ensuring they are not hard-coded into the repository.

## Video Walkthrough

Here's a walkthrough of implemented required features:

<img src='creatorverse.gif' title='Video Walkthrough' width='100%' alt='Video Walkthrough' />

GIF created with licecap

## Notes

One of the trickiest parts of the project was debugging silent database failures. I learned that Supabase is strictly case-sensitive when it comes to column names. If my React code sent a key as imageURL but the database expected image_url or a differently capitalized version, the request would fail without an obvious error on the frontend. I also had to overcome the new row violates row-level security policy error by correctly configuring database permissions to allow my app to write data.

## License

Copyright 2026, Devon Ek

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

> http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
