import Link from 'next/link';

const CV_PATH = '/cv.docx';

export default function CVPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="font-display font-bold text-3xl text-black mb-4">CV</h1>
      <p className="text-gray-600 mb-8">
        Download my CV as a Word document (.docx). Open it in Microsoft Word, Google Docs, or Pages.
      </p>

      <div className="flex flex-wrap gap-4 mb-8">
        <a
          href={CV_PATH}
          download
          className="inline-flex items-center px-6 py-3 bg-accent text-white font-semibold text-sm rounded-md hover:bg-accent-hover transition-colors"
        >
          Download CV (.docx)
        </a>
        <a
          href={CV_PATH}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-6 py-3 border border-gray-300 text-black font-semibold text-sm rounded-md hover:border-accent hover:text-accent transition-colors"
        >
          Open in new tab
        </a>
        <Link
          href="/contact"
          className="inline-flex items-center px-6 py-3 border border-gray-300 text-black font-semibold text-sm rounded-md hover:border-accent hover:text-accent transition-colors"
        >
          Get in touch
        </Link>
      </div>

      <div className="border border-gray-200 rounded-lg bg-gray-50 px-6 py-10 text-center text-gray-600">
        <p className="max-w-xl mx-auto text-sm leading-relaxed">
          Inline preview is not available for Word files in the browser. Use{' '}
          <strong className="text-gray-800">Download</strong> to save the file, or{' '}
          <strong className="text-gray-800">Open in new tab</strong> if your device opens .docx directly.
        </p>
      </div>
    </div>
  );
}
