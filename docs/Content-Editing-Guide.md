# Diamond Warranty Website — Content Editing Guide (Sanity)

This guide explains, in simple terms, how your website content works and how to edit it using Sanity (the content management system). No technical knowledge is required.

---

## 1) What is Sanity and how does it power the site?

- Sanity is where your website content lives (text, images, links, page sections).
- Your website reads the content you publish in Sanity and displays it on the live site.
- You can safely make edits in Sanity and review them. When you are happy, click Publish to push the changes live.

Important: Only Published content appears on the live website. Draft changes remain visible only inside Sanity until published.

---

## 2) Accessing your Content Studio

- You’ll receive a link to your Sanity Studio (the editing dashboard). Open that link in your browser.
- Sign in (Google/GitHub or email, depending on your account).
- You’ll see a left-hand menu listing content types (e.g., Hero Section, About Page, FAQ Page, etc.). Click any item to open and edit it.

If you don’t have a link or user access, ask your project owner or developer to invite you.

---

## 3) Editing workflow (quick start)

1) Open the Sanity Studio link and sign in.
2) In the left menu, select the content type you want to edit.
3) Open the document (for many sections there is only one document to edit).
4) Make your changes (text, images, links, lists, etc.).
5) Click Publish (top-right) when ready. This updates the live site.
6) Check your website in a new browser tab and refresh the page.

If you change your mind, you can use the document history in Sanity to review previous versions and restore.

---

## 4) Content you can edit (by section)

Below is a plain-English map of your content. Each item appears in the Studio’s left menu.

### A) Site Settings
- Navigation: Manage the site’s top navigation menu (Text + Link for each item).
- Footer Text: A general text area for footer messaging.
- Global SEO: Default Title and Description used if a page doesn’t set its own.

Use this section for global items that appear across the site.

### B) Home/Top: Hero Section (singleton)
- Rating Text: Short line like “Rated 3.3 / 5 by 117 customers”.
- Main Headline and Description: The main text at the top of the homepage.
- Primary Button and Secondary Button: Button Text and Link.
- Hero Image: Upload an image and set Alt Text (important for accessibility/SEO).
- Section Content: Extra sub-section with its own Heading, Description, and Button.

Tip: There should be only one Hero document. Edit the existing one.

### C) Home: Benefits Section
- Section Heading: Title above the benefits.
- Benefits: A list. Each benefit has:
  - Image + Alt Text (Alt Text is required)
  - Title
  - Description

### D) Home: Testimonials Section
- Section Heading
- Testimonials: A list. Each testimonial has:
  - Testimonial Text
  - Author Name

### E) Home: Bottom Section
- Section Title and Description: Text shown near the bottom of the homepage.
- Buttons: Up to two buttons. Each button has Text, Link, and Style (Blue or White).

### F) Footer Section
- Logo Text and Logo Link (clicking the logo goes to this URL)
- Right Text (short line on the top bar — e.g., compliance status)
- Disclaimer (footer disclaimer text)
- Copyright
- Bottom Links (list of footer links with Text + URL)

### G) Pages
These pages follow a similar pattern: SEO fields, a main hero section, and then page-specific content.

1) About Page
- SEO Title, SEO Description
- Hero Headline, Hero Description
- Logos (a list): Each has Source (URL/path), Alt Text, Width, Height
- About Sections (a list): Each has ID, Image Source (URL/path), Alt Text, Title, Description

2) Coverages Page
- SEO Title, SEO Description
- Hero Headline, Hero Description
- Plans (a list): Each plan has Title, Description, and
  - Sections (list): Each has a Section Title and Items (bulleted list)
  - Terms (list): Short terms or bullet points
  - Footnotes (list): Text with an optional “Bold” flag

3) FAQ Page
- SEO Title, SEO Description
- Hero Headline, Hero Description
- FAQs (a list): Each has Question + Answer

4) Dealers Page
- SEO Title, SEO Description
- Hero Headline, Hero Description
- Download Forms (a list): Each has Title, Subtitle, Download Link (URL), Image Source (URL/path), Alt Text, Width, Height

5) Contact Page
- SEO Title, SEO Description
- Page Title
- Hero: Headline + Description
- Contact Cards (a list): For each card
  - Card Title
  - Content (a list): Label, Value, and optional Link (URL)

6) Terms Page
- SEO Title, SEO Description
- Page Title
- Hero: Headline + Image
- Agreement Points (a list): Each is a short text item

### H) Blog Post
- Title, Slug
- Content: Rich text blocks and images
- Published At: Date/time
- Author: Name
- SEO Title, SEO Description

To add a new blog post, click “Create new” in Blog Post, fill in fields, and Publish.

### I) Service/Product
- Name, Slug
- Description, Price (optional)
- Image (upload)
- SEO Title, SEO Description

---

## 5) Creating new items vs editing existing

- Singletons (one-off sections): Hero Section and Site Settings are intended to be single documents. Open and edit the existing item. Do not create a second one.
- Lists (repeatable content): Benefits, Testimonials, FAQs, Plans, Forms, Blog Posts, Services, etc. Use “Create new” to add a new item. You can also Duplicate an existing item to reuse its structure.

---

## 6) Working with images and links

- Image fields (e.g., Hero Image, Service Image): Click “Upload,” choose a file, and set Alt Text.
- “Image Source” or “Source” fields: These are text URL/paths. Paste a full image URL or the path provided by your team.
- Links: For internal pages you can use paths like “/contact” or “/terms”. For external sites, paste the full URL (https://...).

---

## 7) SEO fields (best practices)

- SEO Title: Keep concise and descriptive (around 50–60 characters recommended).
- SEO Description: 1–3 short sentences (around 120–160 characters recommended). Summarize what the page is about.

These help search engines and also control how pages appear when shared.

---

## 8) Publishing and seeing changes live

- Publish: Click the Publish button (top-right) to send changes live.
- Drafts: Changes remain drafts until you Publish. Drafts do not appear on the live site.
- Refresh the page on your website after publishing to see the update. If you don’t see changes, try a hard refresh (Shift + Refresh) or clear your browser cache.

---

## 9) Safety, history, and reverting

- Sanity keeps version history per document. Use the “History” or “Changes” panel in the editor to view past versions and restore if needed.
- Avoid deleting documents that are in use. If unsure, ask your project owner or developer.
- Keep slugs stable for live pages and posts. Changing a slug changes the page URL.

---

## 10) Where each section appears on the site

- Site Settings — navigation and default SEO: affects the whole website.
- Hero / Benefits / Testimonials / Bottom Section: appear on the homepage.
- Footer Section: appears at the bottom across the site.
- About / Coverages / FAQ / Dealers / Contact / Terms: dedicated pages.
- Blog Post and Service/Product: show in their respective areas (and individual detail pages) if your site’s navigation links to them.

---

## 11) Troubleshooting

- I published but don’t see changes: Refresh the live page, clear cache, or wait a minute. Ensure you published (not just saved as draft).
- I can’t upload an image: Check file size/format or try a smaller image.
- A link doesn’t work: Make sure it starts with “/” for internal links or “https://” for external links.
- I don’t see the content type I need: Your account may require extra permissions. Contact your project owner or developer.

---

## 12) Need help?

If you need new sections, fields, design changes, or access updates, contact your project owner or developer. They can update the structure in Sanity or the website as needed.

---

## 13) Previewing draft content (Sanity Preview)

Use Preview to see your changes on the website before you publish them.

Prerequisites
- Sanity API token with read access to drafts
  1) Go to sanity.io/manage → your project → API → Tokens
  2) Create a new token (name it “Local Preview”) with Read permissions
- Allow your site origin in CORS
  1) In the same API settings, add CORS origins:
     - http://localhost:5173 (development)
     - Your production domain (e.g., https://your-site.com)

Set the token locally
- Create a file named .env in the project root (or .env.local) with:
  VITE_SANITY_READ_TOKEN=your_sanity_read_token
- Restart the dev server after adding or changing .env

How to use preview
- Start the site locally: npm run dev (default: http://localhost:5173)
- In Sanity, make your edits but do not publish (keep them as drafts)
- Open any site URL with ?preview=true to view drafts:
  - Home: http://localhost:5173/?preview=true
  - About: http://localhost:5173/about?preview=true
  - Coverages: http://localhost:5173/products?preview=true
  - Dealers: http://localhost:5173/dealers?preview=true
  - FAQ: http://localhost:5173/faq?preview=true
  - Contact: http://localhost:5173/contact?preview=true
  - Terms: http://localhost:5173/terms?preview=true
- Remove ?preview=true to switch back to published content

What you should see
- The page content reflects your draft edits immediately (titles, descriptions, lists, etc.)
- The browser tab title and SEO meta tags update for drafts as well

Troubleshooting
- Drafts do not appear
  - Ensure ?preview=true is in the URL
  - Ensure you restarted the dev server after creating .env
  - Confirm the token in .env starts with “sk…” and has read permission
  - Check CORS origins include your local URL or production domain
- Unauthorized (401/403)
  - Token is missing, wrong, or lacks permission; verify the token and role
  - CORS origin not allowed in Sanity’s API settings
- Home hero not updating
  - The home hero is a “Hero Section” singleton with id heroSettings; make sure you are editing that document
- Still stuck
  - Confirm src/client.js projectId and dataset match your Sanity project

Security note
- Do not commit your .env files to version control
- The preview token is used client-side for convenience; only use in trusted environments. For production-grade secure previews, consider a server-side proxy pattern.

You’re all set to manage your content with confidence. Happy editing!