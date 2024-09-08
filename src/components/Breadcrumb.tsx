import Link from "next/link";
import { usePathname } from "next/navigation";

// Array of colors for progressive dark to light transition
const colors = [
  "bg-zinc-900 text-white", // Darkest for home
  "bg-zinc-800 text-white",
  "bg-zinc-700 text-white",
  "bg-zinc-600 text-white", // Lightest
];

const Breadcrumb = () => {
  const pathname = usePathname();
  const pathSegments = pathname.split("/").filter(Boolean);

  // Breadcrumb items
  const breadcrumbs = pathSegments.map((segment, index) => {
    const breadcrumbPath = "/" + pathSegments.slice(0, index + 1).join("/");
    const segmentName = segment.charAt(0).toUpperCase() + segment.slice(1);

    // Determine the color for the current breadcrumb and the previous triangle
    const currentColor = colors[index + 1] || colors[colors.length - 1]; // Default to last color if more segments than colors
    const previousColor = colors[index] || colors[0];

    return (
      <li key={breadcrumbPath} className="relative flex items-center">
        {/* Previous triangle clip with the color of the previous breadcrumb */}
        <span
          className={`absolute inset-y-0 -start-px h-8 w-4 ${previousColor} [clip-path:_polygon(0_0,_0%_100%,_100%_50%)] rtl:rotate-180`}
        />
        {/* Breadcrumb Link */}
        <Link
          href={breadcrumbPath}
          className={`flex h-8 items-center pe-4 ps-8 text-xs font-medium transition hover:text-zinc-900 ${currentColor}`}
        >
          {segmentName}
        </Link>
      </li>
    );
  });

  return (
    <div className="w-screen justify-center fixed top-20 left-0 hidden md:flex">
      <nav aria-label="Breadcrumb" className="flex">
        <ol className="flex overflow-hidden rounded-b-lg text-zinc-600">
          {/* Home Link */}
          <li className="flex items-center">
            <Link
              href="/"
              className="flex h-8 items-center gap-1.5 bg-zinc-900 text-white px-4 transition hover:text-zinc-100"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
              <span className="ms-1.5 text-xs font-medium">Home</span>
            </Link>
          </li>

          {/* Dynamic Breadcrumb Links */}
          {breadcrumbs}
        </ol>
      </nav>
    </div>
  );
};

export default Breadcrumb;
