export default function Layout({ children }: { children: React.ReactNode }) {
  // Since DashboardSidebar is added in each page.tsx, we don't need it here to avoid duplication if layout persists.
  // HOWEVER, for sub-routes like /tickets/[id], we need consistency.
  // The current pattern is pages import Sidebar manually.
  // Let's create a layout that adds sidebar for all children, and REMOVE it from individual pages in this subtree?
  // Refactor: We will use a layout for /support that includes Sidebar IF we want it consistent.
  // Actually, the main /dashboard/[guildId]/layout.tsx should handle sidebar, but we don't have one globally yet.
  // For consistency with current pattern (explicit include), we will rely on page-level inclusion or add it here.
  // Given user request "same for sidebar, i want it on all pages", a layout is safer.
  
  // BUT: existing pages in /support like /support/page.tsx already import Sidebar.
  // If we add it to layout, we get double visual.
  // Strategy: Add layout that *wraps* children. If children have sidebar, we have issues.
  // Let's sticky with manual import for now to match current architecture, OR create a helper wrapper.
  // Wait, I can just create a page.tsx for each sub-module that imports Sidebar.
  
  return <>{children}</>;
}
