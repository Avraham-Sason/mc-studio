import Link from "next/link";

export default function NotFound() {
  return (
    <html lang="en">
      <body className="flex min-h-screen items-center justify-center bg-neutral-50 font-sans antialiased">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-neutral-900">404</h1>
          <p className="mt-4 text-lg text-neutral-500">Page not found</p>
          <Link
            href="/he"
            className="mt-6 inline-block rounded-full bg-neutral-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-neutral-700"
          >
            Go Home
          </Link>
        </div>
      </body>
    </html>
  );
}
