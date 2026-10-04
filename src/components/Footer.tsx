"use client";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <p className="text-sm font-medium text-foreground">Meeti Doshi</p>
            <p className="text-xs text-muted mt-0.5">Mumbai, India</p>
          </div>
          <p className="text-xs text-muted">
            Built with curiosity. © {year}
          </p>
        </div>
      </div>
    </footer>
  );
}
