"use client";

import { useState } from "react";
import Link from "next/link";

interface TutorialItem {
  title: string;
  content: string;
  video?: string;
  images?: string[];
}

export default function QuawacoGCSTutorialPage() {
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const tutorials = [
    {
      id: "getting-started",
      title: "Bắt đầu",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
      items: [
        {
          title: "Tải và cài đặt ứng dụng",
          content:
            "Truy cập CH Play hoặc App Store để tải ứng dụng Ghi số Quawaco. Sau khi tải xong, mở ứng dụng để bắt đầu quá trình cài đặt ban đầu.",
        },
        {
          title: "Đăng ký tài khoản mới",
          content:
            "Trên màn hình chào mừng, chọn 'Đăng ký'. Nhập số điện thoại, email và mật khẩu của bạn. Xác nhận qua OTP được gửi đến số điện thoại. Điền thông tin công ty và mã đơn vị được cấp.",
          images: [
            "/images/tutorial/quawaco-register-step1.jpg",
            "/images/tutorial/quawaco-register-step2.jpg",
          ],
        },
        {
          title: "Đăng nhập vào hệ thống",
          content:
            "Nhập số điện thoại hoặc email đã đăng ký. Nhập mật khẩu và chọn 'Đăng nhập'. Có thể bật tính năng 'Ghi nhớ đăng nhập' để đăng nhập tự động lần sau.",
        },
      ],
    },
    {
      id: "basic-features",
      title: "Chức năng cơ bản",
      icon: (
        <svg
          className="w-6 h-6"
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
      ),
      items: [
        {
          title: "Ghi số đồng hồ",
          content:
            "Từ màn hình chính, chọn 'Ghi số'. Quét mã QR trên đồng hồ hoặc nhập mã số thủ công. Nhập chỉ số mới của đồng hồ. Chụp ảnh đồng hồ để xác thực. Kiểm tra và xác nhận thông tin trước khi lưu.",
          video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
          images: [
            "/images/tutorial/quawaco-scan-meter.jpg",
            "/images/tutorial/quawaco-input-reading.jpg",
            "/images/tutorial/quawaco-photo-capture.jpg",
          ],
        },
        {
          title: "Xem lịch sử ghi số",
          content:
            "Vào menu 'Lịch sử' để xem tất cả các lần ghi số. Có thể lọc theo ngày, tháng hoặc mã khách hàng. Nhấn vào từng bản ghi để xem chi tiết và ảnh chụp.",
        },
        {
          title: "Thu tiền",
          content:
            "Chọn khách hàng cần thu tiền từ danh sách. Nhập số tiền cần thu và chọn phương thức thanh toán (tiền mặt/chuyển khoản). In hoặc gửi biên lai qua email/SMS cho khách hàng.",
        },
        {
          title: "Quản lý tuyến đường",
          content:
            "Xem danh sách các tuyến được phân công trong 'Tuyến của tôi'. Sắp xếp thứ tự khách hàng để tối ưu lộ trình. Đánh dấu trạng thái hoàn thành cho từng điểm.",
        },
      ],
    },
    {
      id: "advanced-features",
      title: "Tính năng nâng cao",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      ),
      items: [
        {
          title: "Đồng bộ dữ liệu",
          content:
            "Ứng dụng tự động đồng bộ khi có kết nối internet. Vào 'Cài đặt > Đồng bộ' để xem trạng thái đồng bộ và cấu hình thời gian đồng bộ tự động.",
        },
        {
          title: "Báo cáo và thống kê",
          content:
            "Truy cập 'Báo cáo' để xem thống kê theo ngày/tháng. Xem số lượng khách hàng đã ghi, tổng số tiền thu, và hiệu suất làm việc. Xuất báo cáo dưới dạng PDF hoặc Excel.",
        },
        {
          title: "Làm việc offline",
          content:
            "Ứng dụng hỗ trợ làm việc không cần internet. Dữ liệu sẽ được lưu tạm và tự động đồng bộ khi có kết nối trở lại.",
        },
      ],
    },
    {
      id: "troubleshooting",
      title: "Xử lý sự cố",
      icon: (
        <svg
          className="w-6 h-6"
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
      ),
      items: [
        {
          title: "Không đăng nhập được",
          content:
            "Kiểm tra kết nối internet. Đảm bảo số điện thoại/email và mật khẩu chính xác. Thử chức năng 'Quên mật khẩu' nếu cần. Liên hệ quản trị viên nếu tài khoản bị khóa.",
        },
        {
          title: "Lỗi khi ghi số",
          content:
            "Kiểm tra camera có hoạt động bình thường không. Đảm bảo mã số đồng hồ được nhập đúng. Kiểm tra chỉ số mới phải lớn hơn chỉ số cũ. Thử khởi động lại ứng dụng nếu lỗi vẫn tiếp diễn.",
        },
        {
          title: "Dữ liệu không đồng bộ",
          content:
            "Kiểm tra kết nối internet ổn định. Vào 'Cài đặt > Đồng bộ' và chọn 'Đồng bộ ngay'. Xóa cache ứng dụng nếu cần thiết. Liên hệ hỗ trợ kỹ thuật nếu vẫn gặp vấn đề.",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-linear-to-br from-blue-500 to-cyan-500 text-white">
        <div className="px-8 pt-32 pb-16 mx-auto md:px-12 lg:px-24 max-w-7xl">
          <div className="max-w-3xl">
            <Link
              href="/tutorials"
              className="inline-flex items-center text-white/90 hover:text-white mb-6 transition-colors"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              Quay lại trang hướng dẫn
            </Link>
            <h1 className="text-3xl/snug leading-tight tracking-tight sm:text-4xl/snug md:text-5xl/snug font-bold">
              Hướng dẫn sử dụng Ghi số Quawaco
            </h1>
            <p className="text-lg leading-relaxed mt-6 text-white/90 font-medium">
              Hướng dẫn chi tiết từ A-Z về cách sử dụng ứng dụng Ghi số Quawaco
              cho công việc ghi số và thu ngân
            </p>
          </div>
        </div>
      </section>

      {/* Tutorial Content - 2 Column Layout */}
      <section className="py-16 px-8 mx-auto md:px-12 lg:px-24 max-w-7xl">
        <div className="flex gap-8 lg:gap-12">
          {/* Left Sidebar - Navigation */}
          <aside className="hidden lg:block w-80 shrink-0">
            <div className="sticky top-24">
              <h3 className="text-lg font-bold text-base-900 mb-4">
                Nội dung hướng dẫn
              </h3>
              <nav className="space-y-2">
                {tutorials.map((section, index) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    className="flex items-center gap-3 p-3 rounded-lg border border-base-200 hover:border-blue-500 hover:bg-blue-50 transition-all group"
                  >
                    <div className="w-10 h-10 bg-linear-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center text-white shrink-0 group-hover:scale-105 transition-transform">
                      {section.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-xs text-base-500 font-semibold">
                        Phần {index + 1}
                      </div>
                      <div className="font-semibold text-base-900 group-hover:text-blue-600 transition-colors truncate">
                        {section.title}
                      </div>
                    </div>
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          {/* Right Content Area */}
          <div className="flex-1 min-w-0">
            <div className="space-y-12">
              {tutorials.map((section, sectionIndex) => (
                <div key={section.id} className="scroll-mt-24" id={section.id}>
                  {/* Section Header */}
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-12 h-12 bg-linear-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center text-white shrink-0">
                      {section.icon}
                    </div>
                    <div>
                      <span className="text-sm font-semibold text-accent-600">
                        Phần {sectionIndex + 1}
                      </span>
                      <h2 className="text-2xl font-bold text-base-900">
                        {section.title}
                      </h2>
                    </div>
                  </div>

                  {/* Section Items */}
                  <div className="space-y-6">
                    {section.items.map((item: TutorialItem, itemIndex) => (
                      <div
                        key={itemIndex}
                        className="bg-base-50 rounded-xl p-6 border border-base-200 hover:border-accent-300 transition-colors"
                      >
                        <h3 className="text-lg font-bold text-base-900 mb-3 flex items-center gap-3">
                          <span className="flex items-center justify-center w-8 h-8 bg-accent-100 text-accent-600 rounded-lg text-sm font-bold">
                            {itemIndex + 1}
                          </span>
                          {item.title}
                        </h3>
                        <p className="text-base-700 leading-relaxed mb-4">
                          {item.content}
                        </p>

                        {/* Video */}
                        {item.video && (
                          <div className="mb-4 rounded-lg overflow-hidden">
                            <div className="relative aspect-video bg-base-900">
                              <iframe
                                src={item.video}
                                title={item.title}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                className="absolute inset-0 w-full h-full"
                              />
                            </div>
                          </div>
                        )}

                        {/* Images */}
                        {item.images && item.images.length > 0 && (
                          <div
                            className={`grid gap-4 ${
                              item.images.length === 1
                                ? "grid-cols-1"
                                : item.images.length === 2
                                  ? "grid-cols-2"
                                  : "grid-cols-2 md:grid-cols-3"
                            }`}
                          >
                            {item.images.map((image, imgIndex) => (
                              <div
                                key={imgIndex}
                                className="relative aspect-video bg-base-200 rounded-lg overflow-hidden group cursor-pointer"
                                onClick={() => setLightboxImage(image)}
                              >
                                <img
                                  src={image}
                                  alt={`${item.title} - Ảnh ${imgIndex + 1}`}
                                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                  onError={(e) => {
                                    e.currentTarget.src =
                                      'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect fill="%23f3f4f6" width="400" height="300"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-family="monospace" font-size="16" fill="%239ca3af"%3EẢnh minh họa%3C/text%3E%3C/svg%3E';
                                  }}
                                />
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                                  <svg
                                    className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={2}
                                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                                    />
                                  </svg>
                                </div>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="py-8 px-8 mx-auto md:px-12 lg:px-24 max-w-7xl">
        <div className="max-w-5xl mx-auto">
          <div className="bg-linear-to-br from-accent-50 to-blue-50 rounded-2xl p-8 border border-accent-200">
            <div className="text-center">
              <div className="w-16 h-16 bg-accent-600 rounded-full flex items-center justify-center mx-auto mb-4">
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
                    d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-base-900 mb-2">
                Cần hỗ trợ thêm?
              </h3>
              <p className="text-base-600 mb-6">
                Nếu bạn gặp khó khăn hoặc có câu hỏi, đừng ngại liên hệ với
                chúng tôi
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <a
                  href="mailto:support@quawaco.com"
                  className="inline-flex items-center justify-center px-6 py-3 bg-accent-600 text-white font-semibold rounded-lg hover:bg-accent-700 transition-colors"
                >
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  Gửi email hỗ trợ
                </a>
                <a
                  href="tel:0123456789"
                  className="inline-flex items-center justify-center px-6 py-3 bg-white text-accent-600 font-semibold rounded-lg border-2 border-accent-600 hover:bg-accent-50 transition-colors"
                >
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  Hotline: 0123 456 789
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setLightboxImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-base-300 transition-colors"
            onClick={() => setLightboxImage(null)}
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <div
            className="max-w-7xl max-h-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={lightboxImage}
              alt="Xem ảnh phóng to"
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
}
