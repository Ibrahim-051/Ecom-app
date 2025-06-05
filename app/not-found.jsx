export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-300 shadow-2xl text-black text-center">
      <div>
        <h1 className="text-4xl font-bold ">404 - Page Not Found</h1>
        <p className="text-lg mb-6">
          Sorry, the page you are looking for does not exist.
        </p>
        <a href="/" className="text-blue-500 hover:underline">
          Go Home
        </a>
      </div>
    </div>
  );
}
