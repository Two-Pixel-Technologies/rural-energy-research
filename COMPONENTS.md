# Reusable Components Documentation

This document describes the reusable components and design patterns used in the Rural Energy Research Group website.

## Design System

The website uses a consistent design language with:
- **Fonts**: Libre Baskerville (headings) and Source Serif 4 (body)
- **Colors**: Forest greens (#2c3e50, #1e3d30) with sage green accents (#5a9a7c)
- **Spacing**: CSS custom properties using --space-* variables
- **Typography**: Serif fonts throughout for academic aesthetic

## Page Header Component

Use this pattern for all content pages (not the homepage):

```html
<header class="page-header-section">
    <div class="page-header-container">
        <h1 class="page-header-title">Your Page Title</h1>
        <p class="page-header-subtitle">
            A descriptive subtitle explaining the page content.
        </p>
    </div>
</header>
```

**Features:**
- Gradient background using accent colors
- Responsive typography
- Consistent spacing
- Centered container with max-width

## Navigation Bar

The navbar is fixed and already implemented in all pages:

```html
<nav class="navbar">
    <div class="nav-container nav-centered">
        <button class="nav-toggle" id="navToggle">
            <span></span>
            <span></span>
            <span></span>
        </button>
        <ul class="nav-menu" id="navMenu">
            <li><a href="index.html" class="nav-link">Home</a></li>
            <li><a href="projects.html" class="nav-link nav-link-active">Projects</a></li>
            <!-- Add more links as needed -->
        </ul>
    </div>
</nav>
```

**Features:**
- Fixed position at top
- Hamburger menu on mobile
- Active state highlighting (use `nav-link-active` class)
- Responsive dropdown menu

## Card Grid Layout

### Three-Column Card Grid (Projects Card View)

```html
<section class="projects-section-main">
    <div class="projects-container">
        <div class="projects-grid-layout">
            <!-- Card with image -->
            <article class="project-card-item">
                <div class="project-card-image"><span>Project Image</span></div>
                <div class="project-card-body">
                    <span class="project-card-tag">Category</span>
                    <h3 class="project-card-heading">Card Title</h3>
                    <p class="project-card-text">
                        Card description text...
                    </p>
                    <a href="#" class="project-card-link-btn">
                        Learn more <span class="arrow-icon">→</span>
                    </a>
                </div>
            </article>

            <!-- Card without image -->
            <article class="project-card-item project-card-item-no-image">
                <div class="project-card-body">
                    <div class="project-card-header-group">
                        <span class="project-card-tag">Category</span>
                    </div>
                    <h3 class="project-card-heading">Card Title</h3>
                    <p class="project-card-text">
                        Card description text...
                    </p>
                    <a href="#" class="project-card-link-btn">
                        Learn more <span class="arrow-icon">→</span>
                    </a>
                </div>
            </article>
        </div>
    </div>
</section>
```

**Responsive Behavior:**
- Desktop (>992px): 3 columns
- Tablet (576-991px): 2 columns
- Mobile (<576px): 1 column

### Two-Column List Layout

```html
<section class="projects-section-main">
    <div class="projects-container">
        <div class="projects-list-layout">
            <article class="project-list-item-card">
                <div class="project-list-item-header">
                    <span class="project-card-tag">Category</span>
                </div>
                <h3 class="project-list-item-title">Item Title</h3>
                <p class="project-list-item-description">
                    More detailed description for list view...
                </p>
                <a href="#" class="project-card-link-btn">
                    Learn more <span class="arrow-icon">→</span>
                </a>
            </article>
        </div>
    </div>
</section>
```

**Responsive Behavior:**
- Desktop (>768px): 2 columns
- Mobile (<768px): 1 column

## Category Tags

Category tags provide visual categorization:

```html
<span class="project-card-tag">Category Name</span>
```

**Features:**
- Sage green background (#e3f2eb)
- Uppercase text
- Consistent padding and border radius
- Can be used in any card context

## View Switcher

Add view switching functionality between different layouts:

```html
<div class="view-switcher">
    <span class="view-switcher-label">View as:</span>
    <a href="page-cards.html" class="view-switcher-btn view-switcher-btn-active">Cards</a>
    <a href="page-list.html" class="view-switcher-btn">List</a>
</div>
```

**Features:**
- Centered alignment
- Active state styling (use `view-switcher-btn-active` class)
- Forest green active button color

## Footer

The footer is consistent across all pages:

```html
<footer class="footer" id="contact">
    <div class="footer-content">
        <div class="footer-section">
            <h3>Section Title</h3>
            <p>Section content...</p>
        </div>
        <!-- Repeat for 2-3 columns -->
    </div>
    <div class="footer-bottom">
        <p>&copy; 2025 Your Organization. All rights reserved.</p>
    </div>
</footer>
```

**Features:**
- Dark forest green background (#0c1a14)
- Three-column layout on desktop
- Single column on mobile
- Copyright section at bottom

## CSS Classes Reference

### Layout Classes
- `.page-header-section` - Page header wrapper
- `.page-header-container` - Centered container for header content
- `.projects-container` - Max-width container (1200px)
- `.projects-section-main` - Main content section with padding

### Card Classes
- `.project-card-item` - Card wrapper
- `.project-card-item-no-image` - Card without image variant
- `.project-card-body` - Card content container
- `.project-card-image` - Card image placeholder/container
- `.project-card-tag` - Category tag
- `.project-card-heading` - Card title (h3)
- `.project-card-text` - Card description
- `.project-card-link-btn` - Card link with arrow

### List Classes
- `.project-list-item-card` - List item wrapper
- `.project-list-item-title` - List item title
- `.project-list-item-description` - List item description

### Navigation Classes
- `.nav-link-active` - Active navigation link state

### Typography Classes
- `.page-header-title` - Main page title
- `.page-header-subtitle` - Page subtitle/description

## Creating New Pages

### Step 1: Copy Template Structure
Start with either `projects.html` or `projects-list.html` as a template.

### Step 2: Update Navigation
Add the `nav-link-active` class to the current page's nav link.

### Step 3: Customize Header
Update the page header title and subtitle to match your content.

### Step 4: Choose Layout
Use either the card grid or list layout based on your content needs.

### Step 5: Add Content
Fill in cards or list items with your specific content.

## Responsive Design

All components are mobile-responsive by default:
- Fixed navbar collapses to hamburger menu
- Grid layouts stack to single column
- Typography scales appropriately
- Spacing adjusts for smaller screens

## Color Palette

Primary colors from CSS variables:
- `--color-primary-900`: #0c1a14 (Footer background)
- `--color-primary-700`: #1e3d30 (Navbar)
- `--color-primary-600`: #2a5442 (Headings)
- `--color-accent-500`: #5a9a7c (Links, dates)
- `--color-accent-100`: #e3f2eb (Light backgrounds)
- `--color-neutral-600`: #4a524d (Body text)

## Best Practices

1. **Consistency**: Use the same component classes across pages
2. **Accessibility**: Maintain semantic HTML structure
3. **Responsive**: Test on multiple screen sizes
4. **Performance**: Keep images optimized
5. **Maintainability**: Use CSS custom properties for theming

## Examples

See the following files for complete examples:
- `projects.html` - Card grid layout
- `projects-list.html` - List layout
- `index.html` - Homepage with custom layout

## Future Extensions

This component system can be extended for:
- Publications page (similar card/list pattern)
- Team members page (card grid with photos)
- Workshops/Events page (timeline or card layout)
- News/Updates page (list or card layout)

All these pages can reuse the existing components with minimal modifications.


