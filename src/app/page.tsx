import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex items-center justify-center h-screen">
      <div>
        <div>
          <h1 className="text-lg font-medium text-center">Home page</h1>
        </div>

        <nav className="mt-3">
          <ul className="flex space-x-2.5">
            <li>
              <Link
                className="text-sm font-medium text-blue-400 hover:text-blue-500"
                href="/about"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                className="text-sm font-medium text-blue-400 hover:text-blue-500"
                href="/articles"
              >
                Articles
              </Link>
            </li>
            <li>
              <Link
                className="text-sm font-medium text-blue-400 hover:text-blue-500"
                href="/projects"
              >
                Projects
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </main>
  );
}
