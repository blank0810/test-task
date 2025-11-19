# ClipFactory AI Dashboard - Development Notes

## Project Overview
A clean, minimalist dashboard application built with Next.js 15, TailwindCSS, and Shadcn UI for managing video projects and content creation.

## Tech Stack
- **Framework**: Next.js 15 (App Router)
- **Styling**: TailwindCSS + Shadcn UI
- **UI Components**: Shadcn UI (Card, Button)
- **Icons**: Lucide React
- **Language**: TypeScript
- **Package Manager**: npm

## Project Structure
```
test-task/
├── app/
│   ├── layout.tsx              # Root layout with Sidebar and Header
│   ├── page.tsx                # Dashboard homepage
│   ├── projects/page.tsx       # Projects page
│   ├── scripts/page.tsx        # Scripts page
│   ├── media-library/page.tsx  # Media library page
│   ├── billing/page.tsx        # Billing page
│   └── settings/page.tsx       # Settings page
├── components/
│   ├── ui/                     # Shadcn UI components
│   │   ├── card.tsx           # Card component
│   │   └── button.tsx         # Button component
│   ├── Sidebar.tsx             # Navigation sidebar component
│   ├── Header.tsx              # Top header component
│   └── DashboardCard.tsx       # Reusable card component for dashboard metrics
├── lib/
│   └── utils.ts                # Utility functions (cn)
└── public/                     # Static assets
```

## Key Features Implemented

### 1. Minimalist Design Philosophy
- **Ultra-clean UI**: Minimal colors, maximum whitespace
- **Shadcn UI Components**: Consistent, accessible component library
- **Subtle Borders**: Light borders instead of heavy shadows
- **Muted Color Palette**: Neutral grays with minimal accent colors
- **Small Typography**: Reduced font sizes for a more refined look

### 2. Component Architecture
- **Shadcn UI Integration**: Card, Button components from Shadcn UI
- **Lucide Icons**: Clean, consistent icon set throughout
- **Type Safety**: Full TypeScript implementation with proper interfaces
- **Reusable Components**: Modular design for maintainability

### 3. Routing
- **File-based Routing**: Next.js App Router with file-based routing
- **Multi-page Navigation**: 6 distinct pages (Dashboard, Projects, Scripts, Media Library, Billing, Settings)
- **Active State**: Sidebar highlights current page with subtle accent

### 4. UI/UX Design
- **Minimalist Layout**: Clean sidebar + header + content
- **Responsive Design**: Mobile-first approach
- **Consistent Spacing**: Uniform padding and gaps
- **Subtle Interactions**: Gentle hover states
- **Reduced Visual Noise**: No unnecessary colors or decorations

### 5. Dashboard Features
- **Metric Cards**: 4 main dashboard cards with minimal design
- **Icon-based UI**: Lucide React icons for clean visuals
- **Dummy Data**: All data is hardcoded for demonstration

## Design Decisions

### 1. Minimalist Approach
- **Why Shadcn UI**: Provides unstyled, accessible components that can be customized
- **Muted Colors**: Used `muted-foreground` and neutral colors throughout
- **Smaller Elements**: Reduced padding, font sizes, and visual weight
- **No Shadows**: Replaced heavy shadows with subtle borders

### 2. Layout Pattern
- **Persistent Layout**: Sidebar and header in `layout.tsx`
- **Compact Sidebar**: Narrower sidebar (w-56) for more content space
- **Minimal Header**: Single-line header with small text

### 3. Styling Approach
- **Shadcn + Tailwind**: Combined approach for best results
- **CSS Variables**: Uses CSS variables for theming
- **Utility Classes**: Tailwind utilities for all styling
- **No Custom CSS**: Zero custom CSS files

### 4. Component Design
- **DashboardCard**: Minimalist card with icon, title, value, and optional change
- **Compact Cards**: Reduced padding and spacing
- **Icon Placement**: Icons positioned subtly at top-right

### 5. File-based Routing
- Each route has its own `page.tsx` file
- Follows Next.js 15 conventions
- Clean URLs

## Minimalist Design Features

### Color Palette
- **Background**: `bg-background` (white/neutral)
- **Text**: `text-foreground` (dark gray)
- **Muted Text**: `text-muted-foreground` (lighter gray)
- **Accents**: Minimal use of `bg-accent`
- **Borders**: `border` (very subtle)

### Typography
- **Headers**: Small, `text-lg` or `text-sm`
- **Body**: `text-sm` for most text
- **Labels**: `text-xs` for metadata
- **Weight**: Medium (500) or Semibold (600) only

### Spacing
- **Cards**: `p-4` or `p-6` padding
- **Gaps**: `gap-4` or `space-y-6`
- **Margins**: Minimal, rely on gaps

### Components
- **Cards**: Subtle border, no shadow
- **Buttons**: Small size (`size="sm"`), minimal style
- **Icons**: `h-4 w-4` for consistency
- **Forms**: Clean inputs with subtle borders

## Running the Project

### Install Dependencies
```bash
npm install
```

### Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view the dashboard.

### Build for Production
```bash
npm run build
npm start
```

## Dependencies Added
- `lucide-react` - Icon library
- `class-variance-authority` - CVA for component variants
- `clsx` - Classname utility
- `tailwind-merge` - Merge Tailwind classes

## Design Comparison

### Before (Colorful)
- Heavy colors (blue, green, purple backgrounds)
- Large shadows and borders
- Emoji icons
- Larger padding and spacing
- Bold, colorful design

### After (Minimalist)
- Neutral color palette
- Subtle borders, no shadows
- Clean Lucide icons
- Compact spacing
- Refined, minimal design

## Time Taken
Approximately 60-75 minutes total:
- Initial implementation: 45-60 minutes
- Minimalist redesign with Shadcn: 15-20 minutes

## Notes
- All data is dummy/mock data
- No backend or API calls
- Focus on clean, minimalist design
- Shadcn UI components for consistency
- Ready for Vercel deployment
