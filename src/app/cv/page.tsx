import Link from 'next/link';

const CV_PATH = '/cv.pdf';

export default function CVPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="font-display font-bold text-3xl text-black mb-4">CV</h1>
      <p className="text-gray-600 mb-8">
        Preview my CV below or download it as a PDF.
      </p>

      <div className="flex flex-wrap gap-4 mb-8">
        <a
          href={CV_PATH}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-6 py-3 bg-accent text-white font-semibold text-sm rounded-md hover:bg-accent-hover transition-colors"
        >
          Download CV (PDF)
        </a>
        <a
          href={CV_PATH}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-6 py-3 border border-gray-300 text-black font-semibold text-sm rounded-md hover:border-accent hover:text-accent transition-colors"
        >
          Open in new tab
        </a>
      </div>

      <div className="border border-gray-200 rounded-lg overflow-hidden bg-gray-50 min-h-[60vh]">
        <iframe
          src={CV_PATH}
          title="CV Preview"
          className="w-full h-[70vh] min-h-[500px]"
        />
      </div>

      <p className="mt-6 text-sm text-gray-500">
        Place your CV as <code className="bg-gray-100 px-1 rounded">public/cv.pdf</code> to enable preview and download. If the preview does not load, use the buttons above.
      </p>
    </div>
  );
}
