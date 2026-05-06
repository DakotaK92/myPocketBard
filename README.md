# myPocketBard

myPocketBard is a responsive landing page for Pocket Bard, an immersive audio app
for tabletop roleplaying games. The site presents the app's core value: helping
game masters run music, ambience, and sound effects without breaking the flow of
the session.

The page is built as a single-page marketing experience with sections for the
hero, app features, crew, pricing, frequently asked questions, and footer links.
It uses Pocket Bard imagery, app preview GIFs, store badges, and social links to
give visitors a quick path from learning about the app to downloading it.

## Features

- Hero section with app positioning and download badges
- Feature walkthrough with animated app previews
- Interactive crew showcase
- Free and Open Worlds subscription pricing section
- Accordion-style FAQ section
- Responsive desktop and mobile navigation
- Social links for Discord, Instagram, TikTok, and YouTube

## Tech Stack

- Next.js 16
- React 19
- Tailwind CSS 4
- Radix UI Dialog for the mobile sheet menu
- Lucide React and React Icons for interface icons

## Project Structure

```txt
app/
  globals.css      Global styles and Tailwind setup
  layout.tsx       Root layout, metadata, header, and footer
  page.tsx         Landing page section composition

components/
  Home.jsx         Hero and download badges
  Info.jsx         Feature walkthrough
  Crew.jsx         Interactive team showcase
  Price.jsx        Pricing cards
  Questions.jsx    FAQ accordion
  Header.jsx       Sticky desktop navigation
  MobileNav.jsx    Mobile sheet navigation
  Footer.jsx       Brand and social links

public/assets/
  images/          App, crew, logo, and store badge images
  features/        Animated feature previews
```

## Notes

This project is currently a frontend-only landing page. App store links, feature
copy, pricing text, crew information, and FAQ content are managed directly in the
React components.
