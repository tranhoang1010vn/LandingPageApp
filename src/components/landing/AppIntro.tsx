import OptimizedImage from "@/components/utilities/OptimizedImage";
import { Download } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function AppIntro() {
  return (
    <section className="py-24 bg-base-50 overflow-hidden">
      <div className="px-8 mx-auto md:px-12 lg:px-24 max-w-7xl">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
          <div className="lg:pl-12">
            <p className="text-sm leading-normal font-bold uppercase text-accent-600">
              Mobile Application
            </p>
            <h2 className="text-3xl leading-tight tracking-tight sm:text-4xl md:text-5xl mt-4 font-semibold text-base-900 lg:text-balance">
              Ứng dụng dành cho nhân viên ghi số, thu ngân Quawaco
            </h2>
            <p className="text-lg leading-relaxed mt-6 text-base-500 font-medium">
              Introducing our specialized mobile application designed for
              efficiency and seamless data management. The Quawaco app version
              1.8 brings powerful features directly to your fingertips, allowing
              you to stay connected and productive even on the go.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <div className="flex flex-col gap-1">
                <a
                  href="/datafiles/Quawaco-v1.8-19-1-2026-2.apk"
                  className="inline-flex items-center align-center justify-center gap-2 transition-all duration-300 transform hover:-translate-y-1 focus:ring-2 focus:outline-none text-white bg-accent-600 hover:bg-accent-700 active:bg-accent-800 focus:ring-accent-500/50 h-14 px-8 py-4 text-lg font-semibold rounded-xl w-full sm:w-auto shadow-lg shadow-accent-600/20"
                  download
                >
                  Download APK
                  <Download className="w-6 h-6" />
                </a>
                <p className="text-xs italic text-base-500 text-center">
                  update 19-1-2026
                </p>
              </div>
              <Link
                href="/tutorials"
                className="text-primary inline-flex items-center gap-3"
              >
                <span className="font-semibold">Hướng dẫn cài đặt</span>
              </Link>
            </div>
            <div className="mt-12 grid grid-cols-2 gap-6 border-t border-base-200 pt-8">
              <div>
                <p className="text-2xl font-bold text-base-900">5.0</p>
                <p className="text-sm text-base-500 font-medium">Đánh giá</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-base-900">v1.8</p>
                <p className="text-sm text-base-500 font-medium">
                  Phiên bản mới nhất
                </p>
              </div>
            </div>
          </div>
          <div className="relative group">
            <div className="absolute -inset-4 bg-accent-500/10 rounded-3xl blur-2xl group-hover:bg-accent-500/20 transition duration-500"></div>
            <div className="relative bg-white p-4 rounded-3xl shadow-2xl ring-1 ring-base-200">
              <OptimizedImage
                src="/images/ghiso_1_8.jpg"
                alt="App Interface Preview"
                width={800}
                height={600}
                className="rounded-2xl w-full object-cover shadow-inner"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
