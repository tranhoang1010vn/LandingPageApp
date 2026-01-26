import Link from "next/link";
import Image from "next/image";
import { softwareList as defaultSoftwareList } from "@/data/softwareList";

interface Software {
  id: string;
  name: string;
  description: string;
  rating: string;
  color: string;
  link: string;
  badge: string | null;
  logo: string | null;
}

interface SoftwareListProps {
  softwareList?: Software[];
  showTitle?: boolean;
  title?: string;
}

export default function SoftwareList({
  softwareList = defaultSoftwareList,
  showTitle = true,
  title = "Danh sách ứng dụng:",
}: SoftwareListProps) {
  return (
    <section className="py-8 px-4 mx-auto max-w-7xl">
      {/* Category Tabs */}
      {showTitle && (
        <div className="mb-6 px-4">
          <h2 className="text-xl text-center font-bold text-base-900 mb-4">
            {title}
          </h2>
        </div>
      )}

      {/* App List - Google Play Style */}
      <div className="bg-white rounded-lg border border-base-200 overflow-hidden max-w-2xl mx-auto">
        {softwareList.map((software, index) => (
          <Link
            key={software.id}
            href={software.link}
            className="flex items-center gap-4 p-4 hover:bg-base-50 transition-colors border-b border-base-100 last:border-b-0 group"
          >
            {/* Rank Number */}
            <div className="shrink-0 w-8 text-center">
              <span className="text-base-900 font-semibold text-base">
                {index + 1}
              </span>
            </div>

            {/* App Icon */}
            <div className="shrink-0">
              {software.logo ? (
                <div className="w-14 h-14 rounded-xl shadow-sm group-hover:shadow-md transition-shadow overflow-hidden">
                  <Image
                    src={software.logo}
                    alt={`${software.name} Logo`}
                    width={56}
                    height={56}
                    className="w-full h-full object-cover"
                  />
                </div>
              ) : (
                <div
                  className={`w-14 h-14 bg-linear-to-br ${software.color} rounded-xl flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow`}
                >
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                    />
                  </svg>
                </div>
              )}
            </div>

            {/* App Info */}
            <div className="flex-1 min-w-0">
              <div className="flex items-start gap-2 mb-0.5">
                <h3 className="text-sm font-semibold text-base-900 truncate">
                  {software.name}
                </h3>
                {software.badge && (
                  <span className="shrink-0 text-[10px] bg-red-600 text-white px-2 py-0.5 rounded-full font-bold uppercase">
                    {software.badge}
                  </span>
                )}
              </div>
              <p className="text-sm text-base-500 mb-1.5">
                {software.description}
              </p>
              <div className="flex items-center gap-1">
                <span className="text-xs font-medium text-base-900">
                  {software.rating}
                </span>
                <svg
                  className="w-3 h-3 text-yellow-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
            </div>

            {/* Arrow Icon */}
            <div className="shrink-0">
              <svg
                className="w-5 h-5 text-base-300 group-hover:text-base-500 transition-colors"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
