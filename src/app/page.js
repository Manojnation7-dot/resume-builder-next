import dynamic from "next/dynamic";
import { Suspense } from "react";

// Option 1: Use Suspense with dynamic import for CSR fallback
import Home from "./components/ResumeBuilder";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Suspense fallback={<div>Loading...</div>}>
        <Home />
      </Suspense>
    </main>
  );
}
