import Link from "next/link";
import { ChevronRight } from "lucide-react";
import type { ReactNode } from "react";

interface PageHeaderProps {
  title: string;
  description?: ReactNode;
  breadcrumbs: Array<{ label: string; href?: string }>;
}

export function PageHeader({ title, description, breadcrumbs }: PageHeaderProps) {
  return (
    <header className="border-b border-line bg-surface">
      <div className="container-page py-14 lg:py-20">
        <nav aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-1.5 text-sm text-muted">
            {breadcrumbs.map((crumb, index) => (
              <li key={crumb.label} className="flex items-center gap-1.5">
                {index > 0 ? <ChevronRight className="size-3.5" aria-hidden="true" /> : null}
                {crumb.href ? (
                  <Link href={crumb.href} className="hover:text-primary-dark">
                    {crumb.label}
                  </Link>
                ) : (
                  <span aria-current="page" className="text-ink">
                    {crumb.label}
                  </span>
                )}
              </li>
            ))}
          </ol>
        </nav>
        <h1 className="mt-6 max-w-3xl text-5xl sm:text-6xl">{title}</h1>
        {description ? <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">{description}</p> : null}
      </div>
    </header>
  );
}
