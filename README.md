# Base-Responsive-Page
This page is intended to demonstrate a basic responsive web page. While it can work on a production site, it is not aimed at production-ready sites but for use in teaching responsive web design.

## Project 4: Improv Guide Site

This is a custom site about Improvisation Theater, built using the responsive base template. The site educates visitors about improv, where to see it, how to take classes, and features personal insights from an experienced improv performer.

### Design & Layout Decisions

**Color Palette:**
- **Primary background:** Light peach (`#FFE5D4`) — warm, inviting
- **Header/Footer:** Golden yellow (`#FFD700`) — energetic, consistent with improv's playful nature
- **Text:** Dark gray (`#333333`) — high contrast for readability
- **Accents:** Coral red (`#FF6B6B`) for buttons, light blue (`#4D96FF`) for cards and interactive states
- **Links:** Dark blue (`#103059`) in body text, dark gray (`#1E1E1E`) in navigation for contrast on gold background

**Responsive Breakpoints:**
- **Mobile-first:** Base styles for phones (< 768px)
- **Tablet (768px):** `.container` padding increases, `.row.row-2` layout becomes 2-column
- **Desktop (1240px):** Navigation menu becomes horizontal, header layout switches to flexbox, full-width menu visible

**Interactive Element:**
- **Accordion on home page:** Expands/collapses 4 sections explaining types of improv (long form, short form, improv games, musical improv)
- **Why accordion?** Keeps the page clean while providing quick access to detailed information. Users can explore at their own pace without scrolling through walls of text.
- **Accessibility:** Accordion uses ARIA attributes (`aria-expanded`, `aria-controls`, `role="region"`) for screen readers; smooth animations via jQuery `slideUp`/`slideDown`

**Typography:**
- **Headings:** 'Poppins' (bold, distinctive) for visual hierarchy
- **Body text:** 'Nunito' (clean, readable) at 20px base size with 1.65 line-height for comfortable reading

**Navigation:**
- Hamburger menu on mobile, horizontal menu on desktop
- Consistent across all 7 pages with `aria-current="page"` to indicate active page
- Links styled for maximum contrast on gold background

## Description of Files

* **css/base.css:** This has comprehensiv base styling for a site including:
    * **CSS Variables (Custom Properties)** for controlling Typography, Color and Spacing. These variables are used throughout the stylesheet and changing the values of them is one of the first things you can do to make this your own.
    * **Minimal Normalize**: this helps to make the site look the same across browsers. 
    * **Basic Type and Button styles**: this gives base styling to the most common text and interactive (links, buttons) elements
    * **Basic Responsive Media** styles for img, video, svg elements as well as to make embedded video responsive.
* **css/style.css:** Site-specific styles for layout, navigation, and component styling
* **css/accordion.css:** Accordion component styles with custom properties for colors, spacing, and typography
* **index.html:** Home page with accordion of improv types and hero image
* **forms.html:** Improv Games page with 3 embedded YouTube tutorials
* **classes.html:** Classes page with video and links to improv theaters
* **musical.html:** Musical Improv page with photo and performance recommendations
* **where.html:** Where to find improv in NYC with theater links and photo
* **aboutme.html:** About the site creator with personal background
* **js/main.js:** JavaScript for menu toggle and accordion interactivity (uses jQuery)
* **js/vendor/jquery:** Local jQuery fallback in case CDN fails

## Projects Used
This page inlcudes files from a number of other projects:

1. jQuery: https://jquery.com/
4. HTML5 Boilerplate: https://html5boilerplate.com/


In general it owes a inflential debt to HTML 5 Boilerplate. It is in some ways a simplified version that is less daunting to use directly from GitHub.

Generative AI was used to confirm the current use and acceptance of some of the CSS and HTML choices.

