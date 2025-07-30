# Mega Menu CSS Classes Guide

This document explains how to use the custom CSS classes for the mega menu component.

## Import the CSS

First, import the CSS file in your component:

```tsx
import './MegaMenu.css';
```

## CSS Classes Overview

### Base Container Classes

- `.mega-menu` - Main mega menu container
- `.mega-menu.active` - Active state for the mega menu
- `.mega-menu-grid` - Grid layout for menu items

### Category Classes

- `.mega-menu-category` - Individual category container
- `.mega-menu-category-header` - Category header with icon and title
- `.mega-menu-category-icon` - Category icon styling
- `.mega-menu-category-title` - Category title styling

### Menu Item Classes

- `.mega-menu-items` - Container for menu items
- `.mega-menu-item` - Individual menu item
- `.mega-menu-item-icon` - Icon container for menu items
- `.mega-menu-item-content` - Content container for title and description
- `.mega-menu-item-title` - Menu item title
- `.mega-menu-item-description` - Menu item description
- `.mega-menu-item.active` - Active state for menu items

### CTA Section Classes

- `.mega-menu-cta` - Call-to-action section container
- `.mega-menu-cta-text` - CTA text styling
- `.mega-menu-cta-button` - CTA button styling

### Utility Classes

- `.mega-menu-bridge` - Invisible bridge for mouse events
- `.mega-menu.loading` - Loading state
- `.mega-menu-enter` / `.mega-menu-enter-active` - Enter animations
- `.mega-menu-exit` / `.mega-menu-exit-active` - Exit animations

## Example Implementation

Here's how to structure your mega menu HTML with the CSS classes:

```tsx
<div className={`mega-menu ${isOpen ? 'active' : ''}`}>
  <div className="mega-menu-grid">
    {/* Category 1 */}
    <div className="mega-menu-category">
      <div className="mega-menu-category-header">
        <span className="mega-menu-category-icon">🌐</span>
        <h3 className="mega-menu-category-title">Web Development</h3>
      </div>
      <div className="mega-menu-items">
        <a href="/services/web-development" className="mega-menu-item">
          <div className="mega-menu-item-icon">
            <CodeBracketIcon className="w-5 h-5" />
          </div>
          <div className="mega-menu-item-content">
            <div className="mega-menu-item-title">Custom Web Applications</div>
            <div className="mega-menu-item-description">Scalable web solutions</div>
          </div>
        </a>
        {/* More menu items... */}
      </div>
    </div>

    {/* Category 2 */}
    <div className="mega-menu-category">
      <div className="mega-menu-category-header">
        <span className="mega-menu-category-icon">📱</span>
        <h3 className="mega-menu-category-title">Mobile Development</h3>
      </div>
      <div className="mega-menu-items">
        {/* Menu items... */}
      </div>
    </div>
  </div>

  {/* CTA Section */}
  <div className="mega-menu-cta">
    <p className="mega-menu-cta-text">Need a custom solution?</p>
    <a href="/contact" className="mega-menu-cta-button">
      Get Free Consultation
    </a>
  </div>
</div>
```

## Features Included

### 🎨 Visual Effects
- **Glassmorphism** - Backdrop blur and transparency
- **Smooth animations** - Enter/exit transitions
- **Hover effects** - Shimmer effect and icon scaling
- **Stagger animations** - Items animate in sequence

### 📱 Responsive Design
- **Desktop** - Full-width mega menu with grid layout
- **Tablet** - Adjusted width and spacing
- **Mobile** - Full-screen overlay with scroll

### ♿ Accessibility
- **Focus states** - Clear outline for keyboard navigation
- **ARIA labels** - Screen reader support
- **High contrast** - Readable text colors

### 🌙 Dark Mode
- **Automatic detection** - Uses `prefers-color-scheme`
- **Consistent theming** - All elements adapt to dark mode

### ⚡ Performance
- **Hardware acceleration** - Uses `transform` for animations
- **Efficient transitions** - Optimized cubic-bezier curves
- **Loading states** - Spinner for async operations

## Customization

### Colors
The mega menu uses CSS custom properties for easy theming:

```css
:root {
  --mega-menu-primary: #3b82f6;
  --mega-menu-primary-dark: #1d4ed8;
  --mega-menu-background: rgba(255, 255, 255, 0.98);
  --mega-menu-border: rgba(229, 231, 235, 0.8);
}
```

### Animations
Adjust animation timing and easing:

```css
.mega-menu {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
```

### Layout
Modify grid columns and spacing:

```css
.mega-menu-grid {
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}
```

## Browser Support

- ✅ Chrome 88+
- ✅ Firefox 87+
- ✅ Safari 14+
- ✅ Edge 88+

## Notes

- The mega menu uses `backdrop-filter` which may not work in older browsers
- Mobile implementation uses full-screen overlay for better UX
- All animations are hardware-accelerated for smooth performance
- Dark mode support is automatic based on system preferences 