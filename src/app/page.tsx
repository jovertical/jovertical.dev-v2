import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <div>
        <h1>Home page</h1>
      </div>

      <nav>
        <ul>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/articles">Articles</Link>
          </li>
          <li>
            <Link href="/projects">Projects</Link>
          </li>
        </ul>
      </nav>
    </main>
  );
}
