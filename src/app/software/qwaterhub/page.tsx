"use client";

import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function DownloadPage() {
  const [showVideoModal, setShowVideoModal] = useState(false);
  const googlePlayUrl =
    "https://play.google.com/store/apps/details?id=vn.com.quawaco.qwaterhub";
  const appStoreUrl =
    "https://apps.apple.com/us/app/qwaterhub-ghi-s%E1%BB%91-%C4%91h-quawaco/id6755372170";

  // QR Code URLs using QR Server API
  const googlePlayQR = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(googlePlayUrl)}`;
  const appStoreQR = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(appStoreUrl)}`;

  return (
    <div className="min-h-screen bg-linear-to-b from-base-50 to-white">
      {/* Hero Section */}
      <section className="overflow-hidden">
        <div className="px-8 pt-32 pb-16 mx-auto md:px-12 lg:px-24 max-w-7xl">
          <div className="max-w-3xl text-center mx-auto">
            <p className="text-sm leading-normal font-bold uppercase text-accent-600">
              Ứng dụng di động
            </p>
            <div className="flex items-center justify-center gap-4 mt-4">
              <Image
                src="/images/logo_qwaterhub.png"
                alt="QwaterHub Logo"
                width={80}
                height={80}
                className="rounded-2xl"
              />
              <h1 className="text-3xl/snug leading-tight tracking-tight sm:text-4xl/snug md:text-5xl/snug lg:text-6xl/snug font-bold text-base-900">
                Tải QwaterHub
              </h1>
            </div>
            <p className="text-lg leading-relaxed mt-6 text-base-600 font-medium max-w-2xl mx-auto">
              Ứng dụng ghi số đồng hồ nước QUAWACO - Giải pháp hiện đại, nhanh
              chóng và chính xác cho việc quản lý tiêu thụ nước của bạn.
            </p>
          </div>
        </div>
      </section>

      {/* Download Buttons & QR Codes Section */}
      <section className="py-8 px-8 mx-auto md:px-12 lg:px-24 max-w-7xl">
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Google Play */}
          <div className="bg-white rounded-2xl shadow-lg p-6 border border-base-200 hover:shadow-xl transition-shadow">
            <div className="flex flex-col items-center space-y-5">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-accent-100 rounded-full flex items-center justify-center">
                  <svg
                    className="w-7 h-7 text-accent-600"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-base-900">Android</h3>
              </div>
              <div className="bg-base-50 p-3 rounded-lg border border-base-200">
                <Image
                  src={googlePlayQR}
                  alt="QR Code Google Play"
                  width={160}
                  height={160}
                  className="rounded"
                />
              </div>
              <p className="text-sm text-base-500 text-center">
                Quét mã QR hoặc nhấn nút bên dưới
              </p>
              <Link
                href={googlePlayUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-3 transition-all duration-200 focus:ring-2 focus:outline-none text-white bg-base-900 hover:bg-base-800 focus:ring-base-700/50 h-12 px-6 py-3 text-base font-semibold rounded-lg"
              >
                <svg
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                </svg>
                Tải trên Google Play
              </Link>
            </div>
          </div>

          {/* App Store */}
          <div className="bg-white rounded-2xl shadow-lg p-6 border border-base-200 hover:shadow-xl transition-shadow">
            <div className="flex flex-col items-center space-y-5">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-accent-100 rounded-full flex items-center justify-center">
                  <svg
                    className="w-7 h-7 text-accent-600"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-base-900">iOS</h3>
              </div>
              <div className="bg-base-50 p-3 rounded-lg border border-base-200 relative">
                <Image
                  src={appStoreQR}
                  alt="QR Code App Store"
                  width={160}
                  height={160}
                  className="rounded opacity-30"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="bg-amber-100 text-amber-800 text-xs font-semibold px-3 py-1 rounded-full border border-amber-300">
                    Đang cập nhật
                  </span>
                </div>
              </div>
              <p className="text-sm text-amber-600 text-center font-medium">
                Phiên bản iOS đang được cập nhật
              </p>
              <div className="w-full flex items-center justify-center gap-3 h-12 px-6 py-3 text-base font-semibold rounded-lg bg-base-100 text-base-500 border-2 border-dashed border-base-300 cursor-not-allowed">
                <svg
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z" />
                </svg>
                Đang cập nhật
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Installation Guide Section */}
      <section className="py-16 px-8 mx-auto md:px-12 lg:px-24 max-w-7xl bg-base-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-base-900 text-center mb-12">
            Hướng dẫn cài đặt chi tiết
          </h2>

          {/* Android Installation */}
          <div className="bg-white rounded-xl shadow-md p-8 mb-8 border border-base-200">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-accent-100 rounded-lg flex items-center justify-center">
                <svg
                  className="w-7 h-7 text-accent-600"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-base-900">
                Cài đặt trên Android
              </h3>
            </div>

            <ol className="space-y-4">
              <li className="flex gap-4">
                <span className="shrink-0 w-8 h-8 bg-accent-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                  1
                </span>
                <div>
                  <h4 className="font-semibold text-base-900 mb-1">
                    Mở Google Play Store
                  </h4>
                  <p className="text-base-600">
                    Tìm và mở ứng dụng Google Play Store trên thiết bị Android
                    của bạn.
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="   shrink-0 w-8 h-8 bg-accent-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                  2
                </span>
                <div>
                  <h4 className="font-semibold text-base-900 mb-1">
                    Tìm kiếm QwaterHub
                  </h4>
                  <p className="text-base-600">
                    Nhập "QwaterHub" vào thanh tìm kiếm, hoặc quét mã QR ở trên
                    để truy cập trực tiếp.
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="shrink-0 w-8 h-8 bg-accent-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                  3
                </span>
                <div>
                  <h4 className="font-semibold text-base-900 mb-1">
                    Cài đặt ứng dụng
                  </h4>
                  <p className="text-base-600">
                    Nhấn nút "Cài đặt" và chờ quá trình tải xuống hoàn tất. Ứng
                    dụng sẽ tự động cài đặt sau khi tải xong.
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="shrink-0 w-8 h-8 bg-accent-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                  4
                </span>
                <div>
                  <h4 className="font-semibold text-base-900 mb-1">
                    Mở và đăng nhập
                  </h4>
                  <p className="text-base-600">
                    Sau khi cài đặt xong, mở ứng dụng và đăng nhập bằng tài
                    khoản QUAWACO của bạn để bắt đầu sử dụng.
                  </p>
                </div>
              </li>
            </ol>

            <button
              onClick={() => setShowVideoModal(true)}
              className="mt-6 w-full flex items-center justify-start gap-2 transition-all duration-200 focus:ring-2 focus:outline-none text-red-600 bg-red-50 hover:bg-red-100 focus:ring-red-500/50 h-12 px-6 py-3 text-base rounded-lg border border-red-200"
            >
              <svg
                className="w-5 h-5 text-red-600"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M10,16.5V7.5L16,12M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" />
              </svg>
              Xem video
            </button>

            <div className="mt-6 p-4 bg-accent-50 border border-accent-200 rounded-lg">
              <p className="text-sm text-accent-800">
                <strong>Yêu cầu hệ thống:</strong> Android 8.0 trở lên
              </p>
            </div>
          </div>

          {/* iOS Installation */}
          <div className="bg-white rounded-xl shadow-md p-8 border border-base-200">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-accent-100 rounded-lg flex items-center justify-center">
                <svg
                  className="w-7 h-7 text-accent-600"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-base-900">
                Cài đặt trên iOS
              </h3>
            </div>

            <div className="mb-6 p-4 bg-amber-50 border-2 border-amber-300 rounded-lg">
              <div className="flex items-center gap-3">
                <svg
                  className="w-6 h-6 text-amber-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <p className="text-amber-800 font-semibold">
                  Phiên bản iOS hiện đang được cập nhật và sẽ sớm ra mắt. Vui
                  lòng sử dụng phiên bản Android hoặc theo dõi thông báo từ
                  chúng tôi.
                </p>
              </div>
            </div>

            <ol className="space-y-4 opacity-50">
              <li className="flex gap-4">
                <span className="shrink-0 w-8 h-8 bg-base-400 text-white rounded-full flex items-center justify-center font-bold text-sm">
                  1
                </span>
                <div>
                  <h4 className="font-semibold text-base-600 mb-1">
                    Với iPhone bạn phải click trực tiếp vào link hoặc quét mã QR
                    ở trên để truy cập App Store.
                  </h4>
                  <p className="text-base-500">
                    Sử dụng trình duyệt Safari trên iPhone/iPad của bạn để mở
                    link tải ứng dụng hoặc quét mã QR ở trên.
                  </p>
                </div>
              </li>

              <li className="flex gap-4">
                <span className="shrink-0 w-8 h-8 bg-base-400 text-white rounded-full flex items-center justify-center font-bold text-sm">
                  2
                </span>
                <div>
                  <h4 className="font-semibold text-base-600 mb-1">
                    Tải và cài đặt
                  </h4>
                  <p className="text-base-500">
                    Nhấn nút "Tải" (hoặc biểu tượng mây), xác thực bằng Face
                    ID/Touch ID/mật khẩu Apple ID. Ứng dụng sẽ tự động tải về và
                    cài đặt.
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="shrink-0 w-8 h-8 bg-base-400 text-white rounded-full flex items-center justify-center font-bold text-sm">
                  3
                </span>
                <div>
                  <h4 className="font-semibold text-base-600 mb-1">
                    Mở và đăng nhập
                  </h4>
                  <p className="text-base-500">
                    Sau khi cài đặt xong, mở ứng dụng từ màn hình chính và đăng
                    nhập bằng tài khoản QUAWACO của bạn.
                  </p>
                </div>
              </li>
            </ol>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-8 mx-auto md:px-12 lg:px-24 max-w-7xl">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-base-900 text-center mb-12">
            Tính năng nổi bật
          </h2>

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
              <div className=" shrink-0 w-12 h-12 bg-accent-100 rounded-lg flex items-center justify-center">
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

      {/* Support Section */}
      <section className="py-16 px-8 mx-auto md:px-12 lg:px-24 max-w-7xl bg-base-50">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/tutorials/qwaterhub"
              className="flex items-center justify-center transition-all duration-200 focus:ring-2 focus:outline-none text-white bg-accent-600 hover:bg-accent-700 focus:ring-accent-700/50 h-12 px-6 py-3 text-base font-semibold rounded-lg"
            >
              Xem hướng dẫn chi tiết
            </Link>
            <Link
              href="/tutorials/qwaterhub"
              className="flex items-center justify-center transition-all duration-200 focus:ring-2 focus:outline-none text-base-700 bg-white hover:bg-base-50 ring-1 ring-base-300 focus:ring-base-400 h-12 px-6 py-3 text-base font-semibold rounded-lg"
            >
              Liên hệ hỗ trợ
            </Link>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {showVideoModal && (
        <div
          className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4"
          onClick={() => setShowVideoModal(false)}
        >
          <div
            className="relative bg-white rounded-2xl max-w-4xl w-full overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-4 border-b border-base-200">
              <h3 className="text-xl font-bold text-base-900">
                Hướng dẫn cài đặt trên Android
              </h3>
              <button
                onClick={() => setShowVideoModal(false)}
                className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-base-100 transition-colors"
              >
                <svg
                  className="w-6 h-6 text-base-600"
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
            </div>
            <div className="relative aspect-video">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/FRHYWFV6ZYI"
                title="Hướng dẫn cài đặt QwaterHub trên Android"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
