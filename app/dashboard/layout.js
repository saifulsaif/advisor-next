import Link from 'next/link';

export default function DashboardLayout({children}) {
    return (
      <section>
            {/* Include shared UI here e.g. a header or sidebar */}

            <p>Dashboard parent page </p>

            <ul>
                    <li>
                         <Link href="/">Home</Link>
                         <Link href="/dashboard">Dashboard</Link>
                         <Link href="/dashboard/profile">Profile</Link>
                    </li>
            </ul>
        {children}
      </section>
    );
  }