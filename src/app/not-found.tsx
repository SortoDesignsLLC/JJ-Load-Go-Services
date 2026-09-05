import Link from "next/link";
export default function NotFound() {
  return <main className="grid min-h-screen place-content-center gap-6 px-6 text-center"><h1 className="text-6xl">Page not found</h1><p>Let’s get you back on the right path.</p><Link href="/" className="rounded-md bg-primary px-6 py-3 text-primary-foreground">Back to home</Link></main>;
}
