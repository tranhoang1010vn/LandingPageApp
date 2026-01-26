"use client";

import { useState } from "react";
import Link from "next/link";
import { YouTubeEmbed } from "@next/third-parties/google";

interface TutorialItem {
  title: string;
  content: string | React.ReactNode;
  video?: string;
  images?: string[];
}

export default function QwaterHubTutorialPage() {
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const tutorials = [
    {
      id: "registration",
      title: "Đăng ký tài khoản",
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
          title: "Đăng ký tài khoản QwaterHub",
          content: (
            <div className="space-y-3">
              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
                <p className="font-semibold text-blue-900 mb-2">
                  📱 Hướng dẫn chi tiết:
                </p>
                <div className="text-blue-800 space-y-2">
                  <p>
                    <span className="font-mono bg-blue-100 px-2 py-0.5 rounded">
                      Bước 1:
                    </span>{" "}
                    Mở ứng dụng QwaterHub tại Đăng nhập. Người dùng nhấn vào{" "}
                    <strong>"Đăng ký"</strong> ở góc dưới bên phải.
                  </p>
                  <p>
                    <span className="font-mono bg-blue-100 px-2 py-0.5 rounded">
                      Bước 2:
                    </span>{" "}
                    Người dùng thực hiện các bước đăng ký tài khoản mới:
                  </p>
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>
                      Nhập <strong>"Tên đăng nhập"</strong>: đây là tên đăng
                      nhập chốt số của tổ trạm (ví dụ: thalam)
                    </li>
                    <li>
                      Nhập <strong>"Mật khẩu"</strong>: tự đặt mật khẩu.
                    </li>
                    <li>
                      Nhập <strong>"Họ tên"</strong>: Nhập họ tên đầy đủ (ví dụ:
                      Phạm Thanh Phong)
                    </li>
                    <li>
                      Nhập <strong>"Đơn vị - Tổ trạm"</strong>: Nhập Tổ/trạm
                      người dùng đang làm việc tương ứng với tên đăng nhập ở
                      trên (ví dụ: Trạm Hà Lầm)
                    </li>
                  </ul>
                  <p>
                    <span className="font-mono bg-blue-100 px-2 py-0.5 rounded">
                      Bước 3:
                    </span>{" "}
                    Người dùng nhấn nút <strong>"Đăng ký"</strong>.
                  </p>
                  <p>
                    <span className="font-mono bg-blue-100 px-2 py-0.5 rounded">
                      Bước 4:
                    </span>{" "}
                    Thông báo <em>"Đăng ký thành công, hãy đợi admin duyệt"</em>{" "}
                    xuất hiện ở phía trên cùng màn hình. Giao diện quay trở lại
                    trang Đăng nhập. Người dùng chờ quản trị viên hệ thống duyệt
                    tài khoản.
                  </p>
                  <p>
                    <span className="bg-blue-100 px-2 italic text-xs py-0.5 rounded">
                      Xem video hướng dẫn:
                    </span>{" "}
                  </p>
                </div>
              </div>
            </div>
          ),
          // images: [
          //   "/images/tutorial/qwaterhub-download.jpg",
          //   "/images/tutorial/qwaterhub-install.jpg",
          // ],
          video: "M0KC-38Nems",
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
            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
          />
        </svg>
      ),
      items: [
        {
          title: "Đang cập nhật...",
          content: "...",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-linear-to-br from-indigo-500 to-purple-500 text-white">
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
            <div className="flex items-center gap-3 mb-4">
              <h1 className="text-3xl/snug leading-tight tracking-tight sm:text-4xl/snug md:text-5xl/snug font-bold">
                Hướng dẫn sử dụng QwaterHub
              </h1>
              <span className="px-3 py-1 text-sm font-bold bg-white/20 rounded-full">
                MỚI
              </span>
            </div>
            <p className="text-lg leading-relaxed mt-6 text-white/90 font-medium">
              Hướng dẫn toàn diện về ứng dụng quản lý chốt số đồng hồ nguồn
              tuyến - Từ cơ bản đến nâng cao
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
                    className="flex items-center gap-3 p-3 rounded-lg border border-base-200 hover:border-indigo-500 hover:bg-indigo-50 transition-all group"
                  >
                    <div className="w-10 h-10 bg-linear-to-br from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center text-white shrink-0 group-hover:scale-105 transition-transform">
                      {section.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-xs text-base-500 font-semibold">
                        Phần {index + 1}
                      </div>
                      <div className="font-semibold text-base-900 group-hover:text-indigo-600 transition-colors truncate">
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
                    <div className="w-12 h-12 bg-linear-to-br from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center text-white shrink-0">
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
                        <div className="text-base-700 leading-relaxed mb-4">
                          {typeof item.content === "string" ? (
                            <p>{item.content}</p>
                          ) : (
                            item.content
                          )}
                        </div>

                        {/* Video */}
                        {item.video && (
                          <div className="mb-4 rounded-lg overflow-hidden">
                            <YouTubeEmbed
                              videoid={item.video}
                              params="controls=1"
                            />
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

      {/* Tips Section */}
      <section className="py-8 px-8 mx-auto md:px-12 lg:px-24 max-w-7xl">
        <div className="max-w-5xl mx-auto">
          <div className="bg-linear-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-indigo-200">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center shrink-0">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-base-900 mb-3">
                  💡 Mẹo sử dụng hiệu quả
                </h3>
                <ul className="space-y-2 text-base-700">
                  <li className="flex items-start gap-2">
                    <svg
                      className="w-5 h-5 text-indigo-600 mt-0.5 shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>
                      Đồng bộ dữ liệu trước khi đi hiện trường để có thể làm
                      việc offline
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg
                      className="w-5 h-5 text-indigo-600 mt-0.5 shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>
                      Chụp ảnh đồng hồ với góc nhìn thẳng và đủ sáng để số liệu
                      rõ ràng
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg
                      className="w-5 h-5 text-indigo-600 mt-0.5 shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>
                      Sử dụng tính năng lộ trình tối ưu để tiết kiệm thời gian
                      di chuyển
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg
                      className="w-5 h-5 text-indigo-600 mt-0.5 shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>
                      Kiểm tra và xóa dữ liệu cũ định kỳ để ứng dụng chạy mượt
                      mà
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="py-8 px-8 mx-auto md:px-12 lg:px-24 max-w-7xl">
        <div className="max-w-5xl mx-auto">
          <div className="bg-linear-to-br from-accent-50 to-indigo-50 rounded-2xl p-8 border border-accent-200">
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
                    d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-base-900 mb-2">
                Cần trợ giúp?
              </h3>
              <p className="text-base-600 mb-6">
                Đội ngũ hỗ trợ của chúng tôi luôn sẵn sàng giải đáp mọi thắc mắc
                của bạn
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
                  Email: support@quawaco.com
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
