import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 py-12 bg-black text-white font-sans">
      <main className="text-center max-w-2xl">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4 tracking-tight">
          Welcome to NEUROGEN
        </h1>
        <p className="text-lg sm:text-xl text-gray-300 mb-8">
          A portal for AI-powered self-evolution. Join the beta and begin the shift.
        </p>

        <a
          href="https://tally.so/r/nGy1go"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-8 py-3 text-base sm:text-lg font-medium bg-white text-black rounded-full hover:bg-gray-200 transition"
        >
          Join the Beta
        </a>
      </main>

      <footer className="mt-16 text-sm text-gray-500">
        © {new Date().getFullYear()} Julian Siwek · An AI Collaboration
      </footer>
    </div>
  );
}
