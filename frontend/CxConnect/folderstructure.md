# 📁 CxConnect Client – Folder Structure with Comments

This documentation lists every folder and file along with comments to guide developers.

```
Frontend                              # Root folder for the client application
├─ Source                             # Application source code
│  ├─ Pages                            # All application pages/routes
│  │  ├─ login                         # Login page feature
│  │  │  ├─ components/                # Components specific to login UI
│  │  │  ├─ skeleton.tsx               # Loading skeleton for login page
│  │  │  ├─ error.tsx                  # Error fallback UI for login page
│  │  │  ├─ index.tsx                  # Main login page component
│  │  │  └─ login.md                   # Documentation for login module
│  │  ├─ register                      # User registration page
│  │  │  ├─ components/                # Components for register UI
│  │  │  ├─ skeleton.tsx               # Loading skeleton for register page
│  │  │  ├─ error.tsx                  # Error fallback for register page
│  │  │  ├─ index.tsx                  # Main register page component
│  │  │  └─ register.md                # Documentation for register module
│  │  ├─ forgot-password               # Forgot password page
│  │  │  ├─ components/                # Components for forgot-password UI
│  │  │  ├─ skeleton.tsx               # Loading skeleton
│  │  │  ├─ error.tsx                  # Error fallback
│  │  │  ├─ index.tsx                  # Main forgot-password component
│  │  │  └─ forgot-password.md         # Documentation for forgot-password
│  │  ├─ reset-password                # Reset password page
│  │  │  ├─ components/                # Components for reset-password UI
│  │  │  ├─ skeleton.tsx               # Loading skeleton
│  │  │  ├─ error.tsx                  # Error fallback
│  │  │  ├─ index.tsx                  # Main reset-password component
│  │  │  └─ reset-password.md          # Documentation for reset-password
│  │  └─ dashboard                     # Authenticated dashboard
│  │     ├─ components/                # Dashboard-specific components
│  │     │  ├─ widget.tsx              # Widget UI for stats
│  │     │  └─ chart.tsx               # Chart UI for analytics
│  │     ├─ skeleton.tsx               # Loading skeleton
│  │     ├─ error.tsx                  # Error fallback
│  │     ├─ index.tsx                  # Main dashboard page
│  │     └─ dashboard.md               # Documentation for dashboard
│  │
│  ├─ Components                       # Shared/reusable components
│  │  ├─ Layouts/                      # Global layout components
│  │  │  ├─ Header                     # Site header/navigation bar
│  │  │  ├─ Footer                     # Site footer
│  │  │  ├─ Sidebar                    # Sidebar navigation menu
│  │  │  └─ Main                       # Main layout wrapper
│  │  ├─ CxConnectUI/                  # Core reusable UI elements
│  │  │  ├─ Buttons                    # Button components
│  │  │  ├─ Inputs                     # Input field components
│  │  │  └─ Selects                    # Dropdown/select components
│  │  ├─ tables.tsx                    # Generic table component
│  │  ├─ forms.tsx                     # Generic form component
│  │  ├─ modals.tsx                    # Modal dialog component
│  │  ├─ toasts.tsx                    # Toast notification component
│  │  ├─ alerts.tsx                    # Alert component
│  │  ├─ cards.tsx                     # Card component
│  │  ├─ charts.tsx                    # Chart component
│  │  └─ icons/                        # Icon library
│  │     ├─ icons.tsx                  # Icon definitions
│  │     └─ index.tsx                  # Icon exports
│  │
│  ├─ Assets                           # Static assets (images, fonts, etc.)
│  ├─ Utils                            # Utility/helper functions
│  ├─ Types                            # TypeScript type definitions
│  ├─ Services                         # API service modules
│  │  ├─ user                          # User-related API calls
│  │  ├─ role                          # Role management APIs
│  │  ├─ permission                    # Permission management APIs
│  │  ├─ menu                          # Menu/Navigation APIs
│  │  ├─ setting                       # App settings APIs
│  │  ├─ log                           # Log management APIs
│  │  ├─ notification                  # Notification APIs
│  │  └─ message                       # Messaging APIs
│  │
│  ├─ Stores                           # State management (e.g., Redux/Zustand)
│  ├─ Hooks                            # Custom React hooks
│  └─ CXConnect                         # Internal docs and shared UI
│     ├─ documentation.md              # General documentation
│     ├─ UI.tsx                        # Global UI setup
│     ├─ branching.md                  # Git branching strategy
│     └─ folderStructure.md            # Folder structure doc
│
├─ routes/                             # Application routing
│  ├─ index.tsx                        # Entry point for routes
│  └─ routes.tsx                       # Route definitions
│
└─ .env                                # Environment variables configuration
```
