import Link from 'next/link';
import { LINKEDIN_URL } from '@/constants/social';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 mt-auto">
      <div className="max-w-4xl mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-sm text-gray-600">
            © {new Date().getFullYear()} Damilola Israel Okewoye. All rights reserved.
          </p>
          <div className="flex gap-8">
            <Link href="/contact" className="text-sm font-medium text-black hover:text-accent transition-colors">
              Contact
            </Link>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-black hover:text-accent transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
