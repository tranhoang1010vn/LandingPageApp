import Link from "next/link";
import { FileQuestion, ArrowLeft, Home, BookOpen } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-8">
      <div className="max-w-2xl w-full text-center">
        {/* Animated Icon Section */}
        <div className="relative mb-8 inline-block">
          <div className="absolute inset-0 bg-accent-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="relative bg-white border border-slate-200 p-8 rounded-[2.5rem] shadow-2xl">
            <FileQuestion className="w-20 h-20 text-accent-600 animate-bounce" />
          </div>
        </div>

        {/* Error Message */}
        <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tight lg:text-balance leading-none mb-6">
          404
        </h1>
        <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-6">
          Không tìm thấy trang yêu cầu
        </h2>
        <p className="text-lg text-slate-500 font-medium leading-relaxed max-w-lg mx-auto mb-12">
          Xin lỗi, trang bạn đang tìm kiếm không tồn tại hoặc đã được di chuyển sang một địa chỉ khác.
        </p>

        {/* Navigation Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/"
            className="group flex items-center justify-center gap-2 px-8 py-4 bg-accent-600 text-white font-bold rounded-2xl hover:bg-accent-700 transition-all shadow-xl shadow-accent-600/20 w-full sm:w-auto"
          >
            <Home className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform" />
            Về Trang Chủ
          </Link>
          <Link
            href="/tutorials"
            className="group flex items-center justify-center gap-2 px-8 py-4 bg-white border border-slate-200 text-slate-900 font-bold rounded-2xl hover:bg-slate-50 transition-all w-full sm:w-auto"
          >
            <BookOpen className="w-5 h-5 group-hover:scale-110 transition-transform" />
            Xem Hướng dẫn
          </Link>
        </div>

        {/* Subtle Decorative Elements */}
        <div className="mt-20 flex justify-center gap-8 grayscale opacity-20 pointer-events-none">
           <div className="w-12 h-12 border-4 border-slate-200 rounded-full"></div>
           <div className="w-12 h-12 border-4 border-slate-200 rounded-lg rotate-45"></div>
           <div className="w-12 h-12 border-4 border-slate-200 rounded-none"></div>
        </div>
      </div>
    </div>
  );
}
