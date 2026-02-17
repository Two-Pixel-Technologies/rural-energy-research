# Project Page Conversion Guidelines

This document outlines the guidelines for converting project markdown files to HTML pages for the Rural Energy Research Group website.

## Core Principles

### 0. Navigation Consistency
- **CENTERED NAVBAR**: Use `nav-centered` class on the nav-container
- **NO LOGO**: The navbar should NOT include the site logo/title
- **CONSISTENT ACROSS SITE**: All pages (home, projects listing, project details) use the same navbar structure
- **ACTIVE STATE**: Mark the "Projects" link as active with `nav-link-active` class

### 1. Content Integrity
- **PRESERVE EXACT CONTENT**: The main content must be exactly the same as in the markdown file
- **NO MODIFICATIONS**: Do not rewrite, rephrase, or restructure the academic content
- **PARAGRAPH BREAKS**: Keep paragraph breaks exactly where they appear in the MD file
- **HEADINGS**: Add headings ONLY if they are present in the MD file - do not force subheadings or extra structure
- **PROFESSIONAL TONE**: This is an academic website - maintain professional, scholarly presentation

### 2. Design Language
- Follow the design patterns from `projects/pocra.html`
- Use the same navigation, footer, and sidebar structure
- Apply consistent CSS classes from `css/styles.css`
- Maintain the color scheme and typography

---

## Page Structure

### Layout Overview
```
┌─────────────────────────────────────────┐
│         Navigation (fixed)              │
├─────────────────────────────────────────┤
│  Tag | Title | Meta Information         │
├──────────────────────┬──────────────────┤
│                      │                  │
│  Main Body Content   │  Sidebar Cards   │
│  (2/3 width)         │  (1/3 width)     │
│                      │                  │
├──────────────────────┴──────────────────┤
│  Full-Width Content Section             │
│  (Images, additional content)           │
├─────────────────────────────────────────┤
│  Back Link                              │
├─────────────────────────────────────────┤
│         Footer                          │
└─────────────────────────────────────────┘
```

### Mobile Layout
On mobile (< 768px), the order changes:
1. Navigation
2. Tag, Title, Meta
3. Main Body Content
4. Full-Width Content Section
5. **Sidebar Cards (moved to end)**
6. Back Link
7. Footer

---

## Header Section

### Project Tag
```html
<span class="project-detail__tag">Agriculture</span>
```
- Choose appropriate category: Agriculture, Energy, Policy, etc.

### Project Title
```html
<h1 class="project-detail__title">Project Name from MD File</h1>
```
- Use exact title from markdown file

### Meta Information
```html
<div class="project-detail__meta">
    <div class="project-detail__meta-item">
        <strong>Year:</strong> YYYY - YYYY
    </div>
    <div class="project-detail__meta-item">
        <strong>Team:</strong> Name1, Name2, Name3
    </div>
    <div class="project-detail__meta-item">
        <strong>Type:</strong> PhD Thesis | Research Project | Study
    </div>
</div>
```

**What to include:**
- **Year**: Project duration or publication year
- **Team**: All team members and students who worked on it
- **Type**: Nature of work (PhD Thesis, Research Project, Study, etc.)

**What NOT to include:**
- Agency names
- Funding sources
- Detailed affiliations
(These can go in sidebar if needed)

---

## Main Content Area

### Structure
```html
<div class="project-detail__content">
    <div class="project-detail__body">
        <!-- Main text content here -->
    </div>
    
    <aside>
        <!-- Sidebar cards here -->
    </aside>
</div>
```

### Content Rules
1. **Extract metadata first**: Remove team names, publication info, and citations from main body
2. **Keep research content**: All descriptive and research content stays in main body
3. **No hero image**: Do NOT add a hero image at the top of the page
4. **Paragraph structure**: Maintain exact paragraph breaks from MD file
5. **Links**: Keep any inline links to external resources

### Text Formatting
- Use `<p>` tags for paragraphs
- Use `<strong>` for bold text if present in MD
- Keep all academic terminology intact
- Maintain line breaks between paragraphs

---

## Sidebar Cards

### Card Order
1. **Team Members** (first)
2. **Publications** (second)
3. **Other Projects** (last)

### 1. Team Members Card
```html
<div class="project-detail__sidebar-card">
    <h3 class="project-detail__sidebar-title">Team Members</h3>
    <ul class="project-detail__sidebar-list">
        <li><strong>Project Team:</strong> Name1, Name2</li>
        <li><strong>PhD Student:</strong> Name3</li>
        <li><strong>Researchers:</strong> Name4, Name5</li>
    </ul>
</div>
```

**What to include:**
- Project Team members
- PhD Students
- Researchers
- Collaborators

**Extract from:** Team information usually found at the beginning of MD file

### 2. Publications Card
```html
<div class="project-detail__sidebar-card">
    <h3 class="project-detail__sidebar-title">Publications</h3>
    <ul class="project-detail__sidebar-list">
        <li style="border-bottom: none; padding-bottom: 0;">
            <strong style="display: block; margin-bottom: 0.5rem; color: var(--pd-text-dark);">Publication Type (Year)</strong>
            <span style="display: block; font-size: var(--text-xs); line-height: 1.5; margin-bottom: 0.5rem;">Full title of publication</span>
            <span style="display: block; font-size: var(--text-xs); font-style: italic;">Journal/Conference Name, Year</span>
            <a href="URL" target="_blank" style="display: inline-block; margin-top: 0.5rem; color: var(--color-accent-600); text-decoration: underline; font-size: var(--text-xs);">Download Paper →</a>
        </li>
    </ul>
</div>
```

**What to include:**
- PhD Thesis information
- Journal articles with full citations
- Conference papers
- Reports
- Download links (if available)

**Extract from:** Citation information usually at top of MD file

### 3. Other Projects Card
```html
<div class="project-detail__sidebar-card">
    <h3 class="project-detail__sidebar-title">Other Projects</h3>
    <ul class="project-detail__sidebar-list">
        <li><a href="project1.html">Related Project 1</a></li>
        <li><a href="project2.html">Related Project 2</a></li>
    </ul>
</div>
```

**What to include:**
- Links to related projects on the site
- Parent projects (e.g., PoCRA for sub-projects)
- Thematically related work

---

## Images

### Placement
- **NO hero image at top of page**
- Images should be placed **exactly where they appear in the MD file**
- Usually images go in the "Full-Width Content Section" after the main body text

### Image Paths
```html
<img src="../projects_markdown/[PROJECT-FOLDER]/media/imageX.png" 
     alt="Description" 
     style="max-width: 700px; width: 100%; height: auto; border-radius: 8px; box-shadow: var(--shadow-md);">
```

**Path structure:**
- Use relative paths: `../projects_markdown/[PROJECT-FOLDER]/media/`
- Images are in project-specific folders with `/media/` subdirectory

### Image Sizing
- **Single large images**: `max-width: 700px; width: 100%;`
- **Small images** (like diagrams): `max-width: 400px; width: 100%;`
- **Side-by-side images**: Use grid layout
```html
<div style="margin: 2rem 0; display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1rem;">
    <img src="image1.png" ...>
    <img src="image2.png" ...>
</div>
```

### Image Captions
```html
<div style="margin: 2rem 0; text-align: center;">
    <img src="..." alt="...">
    <p style="margin-top: 1rem; font-size: var(--text-sm); color: var(--color-neutral-500); font-style: italic;">
        Caption text from MD file
    </p>
</div>
```

---

## Full-Width Content Section

### Purpose
After the two-column grid (main content + sidebar) ends, content should expand to full width. This is where images and additional content typically go.

### Implementation
```html
<!-- Full Width Content Section -->
<div class="project-detail__full-width">
    <!-- Images and additional content here -->
    <p>Additional text content...</p>
</div>
```

### CSS (Include in `<style>` tag in `<head>`)
```css
<style>
    /* Full width content section that appears after sidebar ends */
    .project-detail__full-width {
        margin-top: var(--space-10);
        width: 100%;
    }
    
    .project-detail__full-width p {
        margin-bottom: var(--space-4);
        line-height: var(--leading-loose);
        color: var(--pd-text-body);
    }
    
    /* Mobile layout: reorder to show sidebar at the very end */
    @media (max-width: 768px) {
        .project-detail__content {
            display: flex;
            flex-direction: column;
        }
        
        .project-detail__body {
            order: 1;
        }
        
        .project-detail__content aside {
            order: 3;
        }
        
        .project-detail__full-width {
            order: 2;
            margin-top: var(--space-8);
        }
    }
</style>
```

### What Goes Here
- Images from the markdown file
- Additional paragraphs that appear after images in MD
- Charts, graphs, diagrams
- Any content that benefits from full-width display

**Dynamic Behavior:**
- On desktop: Appears below the two-column section
- On mobile: Appears between main content and sidebar cards
- Automatically adjusts based on sidebar height

---

## Complete HTML Template

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="PROJECT NAME | Rural Energy Research Group">
    <title>PROJECT NAME | Rural Energy Research Group</title>
    
    <!-- Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Merriweather:wght@400;700&display=swap" rel="stylesheet">
    
    <!-- Stylesheet -->
    <link rel="stylesheet" href="../css/styles.css">
    
    <style>
        /* Full width content section */
        .project-detail__full-width {
            margin-top: var(--space-10);
            width: 100%;
        }
        
        .project-detail__full-width p {
            margin-bottom: var(--space-4);
            line-height: var(--leading-loose);
            color: var(--pd-text-body);
        }
        
        /* Mobile layout: reorder to show sidebar at the very end */
        @media (max-width: 768px) {
            .project-detail__content {
                display: flex;
                flex-direction: column;
            }
            
            .project-detail__body {
                order: 1;
            }
            
            .project-detail__content aside {
                order: 3;
            }
            
            .project-detail__full-width {
                order: 2;
                margin-top: var(--space-8);
            }
        }
    </style>
</head>
<body>
    <!-- Navigation -->
    <nav class="navbar">
        <div class="nav-container nav-centered">
            <button class="nav-toggle" id="navToggle">
                <span></span>
                <span></span>
                <span></span>
            </button>
            <ul class="nav-menu" id="navMenu">
                <li><a href="../index.html" class="nav-link">Home</a></li>
                <li><a href="../projects.html" class="nav-link nav-link-active">Projects</a></li>
                <li><a href="../index.html#publications" class="nav-link">Publications</a></li>
                <li><a href="../index.html#contact" class="nav-link">Contact Us</a></li>
            </ul>
        </div>
    </nav>

    <main>
        <article class="project-detail">
            <div class="project-detail-container">
                <!-- Project Header -->
                <span class="project-detail__tag">CATEGORY</span>
                <h1 class="project-detail__title">PROJECT TITLE</h1>
                
                <!-- Meta Information -->
                <div class="project-detail__meta">
                    <div class="project-detail__meta-item">
                        <strong>Year:</strong> YYYY – YYYY
                    </div>
                    <div class="project-detail__meta-item">
                        <strong>Team:</strong> Names
                    </div>
                    <div class="project-detail__meta-item">
                        <strong>Type:</strong> Project Type
                    </div>
                </div>

                <!-- Content Grid -->
                <div class="project-detail__content">
                    <div class="project-detail__body">
                        <!-- Main content from MD file (exact copy) -->
                    </div>

                    <!-- Sidebar -->
                    <aside>
                        <!-- Team Members Card -->
                        <div class="project-detail__sidebar-card">
                            <h3 class="project-detail__sidebar-title">Team Members</h3>
                            <ul class="project-detail__sidebar-list">
                                <!-- Team info -->
                            </ul>
                        </div>

                        <!-- Publications Card -->
                        <div class="project-detail__sidebar-card">
                            <h3 class="project-detail__sidebar-title">Publications</h3>
                            <ul class="project-detail__sidebar-list">
                                <!-- Publications info -->
                            </ul>
                        </div>

                        <!-- Other Projects Card -->
                        <div class="project-detail__sidebar-card">
                            <h3 class="project-detail__sidebar-title">Other Projects</h3>
                            <ul class="project-detail__sidebar-list">
                                <!-- Related projects -->
                            </ul>
                        </div>
                    </aside>
                </div>

                <!-- Full Width Content Section -->
                <div class="project-detail__full-width">
                    <!-- Images and additional content -->
                </div>

                <!-- Back Link -->
                <div style="margin-top: 3rem;">
                    <a href="../index.html#projects" class="btn btn--secondary">← Back to All Projects</a>
                </div>
            </div>
        </article>
    </main>

    <!-- Footer -->
    <footer class="footer">
        <div class="footer-content">
            <div class="footer-section">
                <h3>Rural Energy Research Group</h3>
                <p>Research on energy for irrigation, renewable energy, and rural electricity supply.</p>
            </div>
            <div class="footer-section">
                <h3>Contact Us</h3>
                <p>Email: info@ruralresearch.org</p>
                <p>Phone: +91 1234 567890</p>
                <p>Address: Research Campus, New Delhi, India</p>
            </div>
            <div class="footer-section">
                <h3>Quick Links</h3>
                <ul>
                    <li><a href="../index.html#home">Home</a></li>
                    <li><a href="../index.html#projects">Projects</a></li>
                    <li><a href="../index.html#publications">Publications</a></li>
                </ul>
            </div>
        </div>
        <div class="footer-bottom">
            <p>&copy; 2025 Rural Energy Research Group. All rights reserved.</p>
        </div>
    </footer>

    <!-- JavaScript -->
    <script src="../js/main.js"></script>
</body>
</html>
```

---

## Conversion Workflow

### Step-by-Step Process

1. **Read the MD file thoroughly**
   - Understand the content structure
   - Identify team members, publications, dates
   - Note image placements

2. **Extract metadata**
   - Team members → Sidebar "Team Members" card
   - Publications/citations → Sidebar "Publications" card
   - Year/duration → Header meta
   - Type of work → Header meta

3. **Structure main content**
   - Copy main research content as-is
   - Remove team/publication info (now in sidebar)
   - Keep all paragraphs and breaks intact
   - Preserve all academic text exactly

4. **Handle images**
   - Note image file names from MD
   - Verify image paths in `projects_markdown/[PROJECT-FOLDER]/media/`
   - Place images in full-width section with captions
   - Apply appropriate sizing (700px for large, 400px for small)

5. **Set up sidebar**
   - Team Members card (first)
   - Publications card (second)
   - Other Projects card (last)

6. **Test responsiveness**
   - Check desktop layout (2-column)
   - Check mobile layout (sidebar at end)
   - Verify images scale properly

7. **Validate links**
   - External links (publications)
   - Internal links (other projects)
   - Ensure target="_blank" for external links

---

## Common Pitfalls to Avoid

❌ **DON'T:**
- Rewrite or rephrase academic content
- Add headings that aren't in the MD file
- Put a hero image at the top
- Duplicate team/publication info in both main content and sidebar
- Use absolute paths for images
- Forget the mobile reordering CSS

✅ **DO:**
- Keep content exactly as written in MD
- Extract metadata to appropriate locations
- Use relative image paths
- Include the full-width section CSS
- Test on both desktop and mobile
- Maintain professional academic tone

---

## File Naming Convention

HTML files should be named descriptively and match the project:
- Use lowercase
- Separate words with hyphens
- Keep names concise but clear

Examples:
- `energy-water-crops.html`
- `lt-distribution-networks.html`
- `efficient-irrigation-pumps.html`

---

## Questions to Ask Before Converting

1. **What is the project duration/year?** → Goes in header
2. **Who worked on this project?** → Goes in header and Team Members card
3. **Are there publications from this work?** → Goes in Publications card
4. **Where are the images?** → Find in `projects_markdown/[FOLDER]/media/`
5. **What other projects is this related to?** → Goes in Other Projects card
6. **What type of work is this?** → Goes in header (PhD, Study, Research, etc.)

---

## Adding Project Card to Projects Listing Page

After creating the project detail page, you need to add a card for it on the `projects.html` listing page.

### Card Structure (No Image)

```html
<!-- Project - [Project Name] -->
<article class="project-card-item project-card-item-no-image">
    <div class="project-card-body">
        <div class="project-card-header-group">
            <span class="project-card-tag">CATEGORY</span>
        </div>
        <h3 class="project-card-heading" style="font-size: var(--text-lg);">Project Title</h3>
        <p class="project-card-text">
            Brief description of the project (2-3 sentences). Highlight the key contribution or focus.
        </p>
        <p style="font-size: var(--text-sm); color: var(--color-neutral-500); margin-bottom: var(--space-4);"><strong>Year:</strong> YYYY-YYYY</p>
        <a href="projects/project-filename.html" class="project-card-link-btn">
            Learn more <span class="arrow-icon">→</span>
        </a>
    </div>
</article>
```

### Card Elements

1. **Category Tag**
   - Choose appropriate category: Agriculture, Energy Systems, Irrigation, Water Resources, etc.
   - Keep it concise (1-2 words)

2. **Heading**
   - Use exact project title from the detail page
   - **Reduced size**: Apply `style="font-size: var(--text-lg);"` for better visual hierarchy
   - Makes the title more proportional to the card

3. **Description**
   - Write 2-3 sentences highlighting the key contribution
   - Focus on what makes this project unique or important
   - Keep it concise and readable

4. **Year (Separate Line)**
   - **Always on its own line** below the description
   - Format: `<strong>Year:</strong> YYYY-YYYY`
   - Styling: Smaller font (`var(--text-sm)`) and muted color (`var(--color-neutral-500)`)
   - This creates clear visual separation

5. **Link**
   - Points to the project detail page
   - Format: `projects/project-filename.html`

### Placement

- **New projects**: Add as the **first card** in the grid (after the opening `<div class="projects-grid-layout">`)
- This ensures newest/most relevant projects appear first
- Update comment numbers for subsequent projects

### Complete Example

```html
<!-- Project 1 - Modeling of Energy, Water and Crops linkages -->
<article class="project-card-item project-card-item-no-image">
    <div class="project-card-body">
        <div class="project-card-header-group">
            <span class="project-card-tag">Agriculture</span>
        </div>
        <h3 class="project-card-heading" style="font-size: var(--text-lg);">Modeling of Energy, Water and Crops linkages</h3>
        <p class="project-card-text">
            First work to quantify water-energy-food nexus linkages using a generalized methodology. 
            Provides crop-wise energy usage (kWh/ha) and water applied (mm) for irrigation systems in Maharashtra.
        </p>
        <p style="font-size: var(--text-sm); color: var(--color-neutral-500); margin-bottom: var(--space-4);"><strong>Year:</strong> 2017-2022</p>
        <a href="projects/energy-water-crops.html" class="project-card-link-btn">
            Learn more <span class="arrow-icon">→</span>
        </a>
    </div>
</article>
```

### Key Styling Notes

- **No image cards** use `project-card-item-no-image` class
- **Heading size reduction** improves readability and visual balance
- **Year on separate line** with muted styling creates clear information hierarchy
- **Consistent spacing** maintains grid alignment with other cards

---

## Example Reference

See `projects/energy-water-crops.html` as a complete working example that follows all these guidelines.

The corresponding card on `projects.html` shows how to present the project in the listing view.

---

*Last updated: February 2026*
