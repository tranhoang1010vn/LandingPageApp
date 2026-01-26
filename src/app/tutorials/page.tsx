import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Hướng dẫn - QUAWACO",
  description: "Hướng dẫn sử dụng các sản phẩm và dịch vụ của QUAWACO",
};

export default function TutorialsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="overflow-hidden bg-linear-to-b from-base-50 to-white">
        <div className="px-8 pt-32 pb-16 mx-auto md:px-12 lg:px-24 max-w-7xl">
          <div className="max-w-3xl text-center mx-auto">
            <p className="text-sm leading-normal font-bold uppercase text-accent-600">
              Trung tâm trợ giúp
            </p>
            <h1 className="text-3xl/snug leading-tight tracking-tight sm:text-4xl/snug md:text-5xl/snug lg:text-6xl/snug mt-4 font-bold text-base-900">
              Hướng dẫn sử dụng
            </h1>
            <p className="text-lg leading-relaxed mt-6 text-base-600 font-medium max-w-2xl mx-auto">
              Tìm kiếm hướng dẫn, tài liệu và video hướng dẫn cho các sản phẩm
              của QUAWACO
            </p>
          </div>
        </div>
      </section>

      {/* Tutorials Grid Section */}
      <section className="py-16 px-8 mx-auto md:px-12 lg:px-24 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Quawaco GCS Tutorial Card */}
          <Link
            href="/tutorials/quawaco-gcs"
            className="group relative overflow-hidden rounded-2xl bg-white border border-base-200 hover:border-accent-500 transition-all duration-300 hover:shadow-xl"
          >
            <div className="p-8">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
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
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-base-900 mb-3 group-hover:text-accent-600 transition-colors">
                Ghi số Quawaco
              </h3>
              <p className="text-base-600 mb-6">
                Hướng dẫn chi tiết sử dụng ứng dụng ghi số và thu ngân. Bao gồm
                đăng ký, đăng nhập và các chức năng cơ bản.
              </p>
              <div className="flex items-center text-accent-600 font-semibold group-hover:gap-2 transition-all">
                Xem hướng dẫn
                <svg
                  className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"
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
            </div>
          </Link>

          {/* QwaterHub Tutorial Card */}
          <Link
            href="/tutorials/qwaterhub"
            className="group relative overflow-hidden rounded-2xl bg-white border border-base-200 hover:border-accent-500 transition-all duration-300 hover:shadow-xl"
          >
            <div className="p-8">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
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
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
              </div>
              <div className="flex items-center gap-2 mb-3">
                <h3 className="text-2xl font-bold text-base-900 group-hover:text-accent-600 transition-colors">
                  QwaterHub
                </h3>
                <span className="px-2 py-1 text-xs font-bold text-accent-600 bg-accent-50 rounded-full">
                  MỚI
                </span>
              </div>
              <p className="text-base-600 mb-6">
                Hướng dẫn sử dụng ứng dụng quản lý chốt số đồng hồ nguồn tuyến.
                Tất cả các tính năng từ cơ bản đến nâng cao.
              </p>
              <div className="flex items-center text-accent-600 font-semibold group-hover:gap-2 transition-all">
                Xem hướng dẫn
                <svg
                  className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"
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
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
}
