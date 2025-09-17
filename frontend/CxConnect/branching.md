# Design System JSON Documentation

# This document provides a comprehensive JSON-based design system profile extracted from provided screenshots. It maps visual patterns, component structures, and styling conventions for consistent implementation across applications.

---

## Element Styling JSON

```json
{
  "elementStyling": {
    "cards": {
      "default": {
        "background": "linear-gradient(135deg, #FF6B6B 0%, #4ECDC4 100%)",
        "border": "#E0E0E0",
        "borderRadius": "12px",
        "shadow": "0 4px 12px rgba(0,0,0,0.1)",
        "icons": {
          "fill": "#FFFFFF",
          "background": "none"
        },
        "text": {
          "primary": "#1A1A1A",
          "secondary": "#555555"
        }
      },
      "hover": {
        "background": "linear-gradient(135deg, #FF5252 0%, #3AC8BA 100%)",
        "shadow": "0 6px 16px rgba(0,0,0,0.15)"
      },
      "active": {
        "background": "linear-gradient(135deg, #FF3B3B 0%, #32B8A2 100%)",
        "shadow": "0 2px 8px rgba(0,0,0,0.2)"
      },
      "disabled": {
        "background": "#F0F0F0",
        "border": "#D0D0D0",
        "icons": {
          "fill": "#A0A0A0"
        },
        "text": {
          "primary": "#B0B0B0"
        }
      }
    },
    "buttons": {
      "primary": {
        "background": "linear-gradient(90deg, #007AFF 0%, #0056CC 100%)",
        "text": "#FFFFFF",
        "icon": {
          "fill": "#FFFFFF"
        },
        "hover": {
          "background": "linear-gradient(90deg, #0056CC 0%, #0041A8 100%)"
        },
        "active": {
          "background": "#0041A8",
          "shadow": "0 2px 4px rgba(0,0,0,0.2)"
        },
        "disabled": {
          "background": "#C0C0C0",
          "text": "#FFFFFF",
          "icon": {
            "fill": "#FFFFFF"
          }
        },
        "focus": {
          "outline": "2px solid #0056CC"
        }
      },
      "secondary": {
        "background": "#E0E0E0",
        "text": "#1A1A1A",
        "hover": {
          "background": "#D0D0D0"
        },
        "disabled": {
          "background": "#F0F0F0",
          "text": "#B0B0B0"
        }
      }
    },
    "icons": {
      "navigation": {
        "fill": "#333333",
        "background": "transparent",
        "hover": {
          "fill": "#007AFF"
        }
      },
      "action": {
        "fill": "#FFFFFF",
        "background": "#007AFF",
        "hover": {
          "background": "#0056CC"
        }
      }
    },
    "typography": {
      "heading": {
        "h1": "#1A1A1A",
        "h2": "#2A2A2A",
        "h3": "#333333"
      },
      "body": {
        "primary": "#555555",
        "secondary": "#777777",
        "disabled": "#B0B0B0"
      },
      "links": {
        "default": "#007AFF",
        "hover": "#0056CC",
        "visited": "#4E4E4E"
      }
    },
    "backgrounds": {
      "page": "#FFFFFF",
      "section": "linear-gradient(180deg, #F9F9F9 0%, #EAEAEA 100%)"
    }
  },
  "DO_NOT": {
    "rules": [
      "Do not apply card gradients to icons.",
      "Do not use button text colors as icon fills.",
      "Do not place shadows on text elements.",
      "Do not use icon backgrounds on card containers."
    ]
  }
}



# Frontend Application Development Prompt Template

Use this template to outline and plan the development of a frontend application with clear specifications.

---

## Pages Required

[List key pages and their primary functionality]

- **Example:**  
  - `Dashboard` – Displays summary metrics and charts.  
  - `User Management` – View, add, edit, and delete users.  
  - `Settings` – Configure system preferences.

---

## User Roles and Permissions

[Define who can do what in the system]

- **Example:**  
  - `Admin` – Full access to all pages and actions.  
  - `Editor` – Can edit content but cannot manage users.  
  - `Viewer` – Can only view dashboards and reports.

---

## Shared Components

### Navigation System

[Describe navigation approach: Sidebar, Top nav, etc.]

- Example:  
  - `Sidebar` – Collapsible, with icons and labels.  
  - `Top Navigation` – Quick links, search bar, and notifications.

### Header/Top Bar

[Describe common elements: user info, theme toggle, etc.]

- Example:  
  - User profile picture and dropdown menu  
  - Theme toggle (light/dark mode)  
  - Notification bell with badge  

### Breadcrumbs (Optional)

(If needed for hierarchical navigation)

- Example:  
  - Shows current page path: `Dashboard > Users > Edit User`

---

## Modals/Popups

[List main interactive elements that appear as overlays]

- Example:  
  - `Add/Edit User` modal with form fields  
  - `Confirmation` popup for delete actions  
  - `Alert` popup for errors or success messages

---

## Technical Requirements

- **CSS Framework:** [Specify CSS Framework, e.g., Tailwind, Bootstrap, Material-UI]  
- **Component Reusability:** Focus on creating reusable components  
- **Routing:** Implement URL-based routing for all pages  
- **API Handling:** Create proper hooks and services for API data handling  
- **Mock API Store:** Develop realistic data structure with IDs  
- **End-to-End Functionality:** Ensure the application is fully functional  

---

## Notes

- Maintain consistent styling and spacing across components.  
- Ensure accessibility standards (ARIA attributes, keyboard navigation).  
- Use state management (e.g., React Context, Redux) if necessary for global state.  
- Include clear separation of concerns: components, hooks, services, and utils.  

