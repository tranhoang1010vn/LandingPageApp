import type { Metadata } from "next";
import Link from "next/link";
import SoftwareHeader from "@/components/software/SoftwareHeader";
import SoftwareList from "@/components/software/SoftwareList";

export const metadata: Metadata = {
  title: "Phần mềm - QUAWACO",
  description: "Danh sách các phần mềm và ứng dụng của QUAWACO",
};

export default function SoftwarePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <SoftwareHeader />

      {/* Google Play Style Ranking Section */}
      <SoftwareList />

      {/* Features Grid Section */}
      <section className="py-16 px-8 mx-auto md:px-12 lg:px-24 max-w-7xl bg-base-50 mt-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-base-900 mb-4">
              Tính năng nổi bật
            </h2>
            <p className="text-lg text-base-600">
              Những tính năng giúp công việc ghi số trở nên dễ dàng hơn
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex gap-4 p-6 bg-white rounded-lg border border-base-200 hover:border-accent-300 transition-colors">
              <div className="shrink-0 w-12 h-12 bg-accent-100 rounded-lg flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-accent-600"
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
              <div>
                <h3 className="font-bold text-base-900 mb-2">
                  Ghi số nhanh chóng
                </h3>
                <p className="text-sm text-base-600">
                  Ghi chỉ số đồng hồ nước dễ dàng, nhanh chóng chỉ trong vài
                  giây.
                </p>
              </div>
            </div>

            <div className="flex gap-4 p-6 bg-white rounded-lg border border-base-200 hover:border-accent-300 transition-colors">
              <div className="shrink-0 w-12 h-12 bg-accent-100 rounded-lg flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-accent-600"
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
              <div>
                <h3 className="font-bold text-base-900 mb-2">
                  Theo dõi lịch sử
                </h3>
                <p className="text-sm text-base-600">
                  Xem lịch sử tiêu thụ nước qua các tháng với biểu đồ trực quan.
                </p>
              </div>
            </div>

            <div className="flex gap-4 p-6 bg-white rounded-lg border border-base-200 hover:border-accent-300 transition-colors">
              <div className="shrink-0 w-12 h-12 bg-accent-100 rounded-lg flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-accent-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-base-900 mb-2">
                  Thông báo nhắc nhở
                </h3>
                <p className="text-sm text-base-600">
                  Nhận thông báo nhắc nhở định kỳ để ghi số đồng hồ đúng hạn.
                </p>
              </div>
            </div>

            <div className="flex gap-4 p-6 bg-white rounded-lg border border-base-200 hover:border-accent-300 transition-colors">
              <div className="shrink-0 w-12 h-12 bg-accent-100 rounded-lg flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-accent-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-base-900 mb-2">Bảo mật cao</h3>
                <p className="text-sm text-base-600">
                  Dữ liệu được mã hóa và bảo mật tuyệt đối theo tiêu chuẩn cao
                  nhất.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-16 px-8 mx-auto md:px-12 lg:px-24 max-w-7xl">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-md p-8 border border-base-200">
              <div className="w-12 h-12 bg-accent-100 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-accent-600"
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
              <h3 className="text-xl font-bold text-base-900 mb-3">
                Tải về miễn phí
              </h3>
              <p className="text-base-600 leading-relaxed">
                Tất cả ứng dụng của QUAWACO đều miễn phí tải về và sử dụng. Hỗ
                trợ cả Android và iOS.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-8 border border-base-200">
              <div className="w-12 h-12 bg-accent-100 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-accent-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-base-900 mb-3">
                Hỗ trợ 24/7
              </h3>
              <p className="text-base-600 leading-relaxed">
                Đội ngũ hỗ trợ sẵn sàng giúp bạn mọi lúc. Liên hệ qua email hoặc
                hotline để được tư vấn.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="py-16 px-8 mx-auto md:px-12 lg:px-24 max-w-7xl bg-base-50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-base-900 mb-4">Cần hỗ trợ?</h2>
          <p className="text-lg text-base-600 mb-8">
            Nếu bạn gặp vấn đề trong quá trình cài đặt hoặc sử dụng ứng dụng,
            đừng ngần ngại liên hệ với chúng tôi.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/tutorials"
              className="flex items-center justify-center transition-all duration-200 focus:ring-2 focus:outline-none text-white bg-accent-600 hover:bg-accent-700 focus:ring-accent-700/50 h-12 px-6 py-3 text-base font-semibold rounded-lg"
            >
              Xem hướng dẫn chi tiết
            </Link>
            <Link
              href="mailto:support@quawaco.com.vn"
              className="flex items-center justify-center transition-all duration-200 focus:ring-2 focus:outline-none text-base-700 bg-white hover:bg-base-50 ring-1 ring-base-300 focus:ring-base-400 h-12 px-6 py-3 text-base font-semibold rounded-lg"
            >
              Liên hệ hỗ trợ
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
