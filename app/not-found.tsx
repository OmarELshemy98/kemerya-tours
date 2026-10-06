import Link from "next/link";

export default function NotFound() {
  return (
    <main className="page-shell">
      <div className="empty-state">
        <p className="eyebrow">404</p>
        <h1>Page not found</h1>
        <p>The page you are looking for does not exist.</p>
        <Link href="/en" className="button button--primary">
          Return home
        </Link>
      </div>
    </main>
  );
}
