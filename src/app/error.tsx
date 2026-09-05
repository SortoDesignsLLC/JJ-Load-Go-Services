"use client";
export default function ErrorPage({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return <main className="grid min-h-screen place-content-center gap-6 px-6 text-center"><h1 className="text-4xl">This page didn’t load</h1><p>Please try again, or call 571-428-6909.</p><button onClick={reset} className="rounded-md bg-primary px-6 py-3 text-primary-foreground">Try again</button></main>;
}
