import {
  Download,
  Trash2,
  FolderX,
  ShieldCheck,
  Smartphone,
  CheckCircle2,
  ChevronRight,
  AlertCircle,
  Info,
} from "lucide-react";
import Link from "next/link";
import OptimizedImage from "@/components/utilities/OptimizedImage";

const steps = [
  {
    title: "Gỡ bản ứng dụng cũ",
    description:
      "Trước khi cài đặt bản mới, hãy tìm biểu tượng ứng dụng Quawaco trên màn hình, nhấn giữ và chọn 'Gỡ cài đặt' để loại bỏ phiên bản cũ khỏi thiết bị.",
    icon: Trash2,
    color: "bg-red-50 text-red-600",
    details: [
      "Nhấn giữ biểu tượng ứng dụng Quawaco khoảng 2-3 giây.",
      "Chọn biểu tượng thùng rác hoặc chữ 'Gỡ cài đặt' (Uninstall).",
      "Xác nhận 'OK' để hoàn tất quá trình gỡ bỏ.",
    ],
  },
  {
    title: "Xoá thư mục dữ liệu cũ",
    description:
      "Mở ứng dụng 'File của bạn' hoặc trình quản lý tệp tin và xóa bỏ các thư mục rác để tránh xung đột dữ liệu.",
    icon: FolderX,
    color: "bg-orange-50 text-orange-600",
    details: [
      "Truy cập vào ứng dụng 'File của bạn' hoặc 'Quản lý tập tin' trên điện thoại.",
      "Tìm đến Bộ nhớ trong (Internal Storage).",
      "Tìm và nhấn giữ để xoá hai thư mục: QUAWACO và ImagesGCS.",
    ],
  },
  {
    title: "Tải và cài đặt bản mới",
    description:
      "Tải về tệp APK Quawaco v1.8 mới nhất và thực hiện cài đặt lên thiết bị của bạn.",
    icon: Download,
    color: "bg-blue-50 text-blue-600",
    details: [
      "Nhấn vào nút 'Tải về APK' ở đầu trang này.",
      "Sau khi tải xong, nhấn chọn tệp tin vừa tải về.",
      "Nếu có cảnh báo 'Nguồn không xác định', hãy chọn 'Cài đặt' hoặc 'Cho phép'.",
    ],
  },
  {
    title: "Cấp quyền cho ứng dụng",
    description:
      "Đây là bước quan trọng nhất để ứng dụng có thể hoạt động đầy đủ tính năng như chụp ảnh, định vị.",
    icon: ShieldCheck,
    color: "bg-green-50 text-green-600",
    details: [
      "Nhấn giữ biểu tượng ứng dụng Quawaco mới cài đặt trong 3 giây.",
      "Chọn biểu tượng (i) hoặc 'Thông tin ứng dụng' (App Info).",
      "Chọn mục 'Quyền' (Permissions).",
      "Tại danh sách 'Không được phép', chọn từng quyền (Máy ảnh, Vị trí, Danh bạ...) và nhấn 'Cho phép'.",
    ],
  },
];

export default function TutorialsPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden bg-slate-50 border-b border-slate-200">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full opacity-5 hover:opacity-10 transition-opacity pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent-500 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500 rounded-full blur-[100px]"></div>
        </div>

        <div className="relative px-8 mx-auto md:px-12 lg:px-24 max-w-7xl">
          <div className="max-w-3xl">
            <nav className="flex items-center gap-2 text-sm font-medium text-slate-500 mb-8">
              <Link
                href="/"
                className="hover:text-accent-600 transition-colors"
              >
                Trang chủ
              </Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-slate-900">Hướng dẫn cài đặt chi tiết</span>
            </nav>
            <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight lg:text-balance leading-[1.1]">
              Cài đặt ứng dụng <br />
              <span className="text-accent-600">Quawaco v1.8</span>
            </h1>
            <p className="mt-6 text-xl text-slate-600 font-medium leading-relaxed">
              Vui lòng thực hiện chính xác 4 bước dưới đây để đảm bảo ứng dụng
              hoạt động ổn định và không xảy ra lỗi đồng bộ dữ liệu.
            </p>
            <div className="flex flex-col gap-1 mt-10">
              <a
                href="/datafiles/Quawaco-v1.8-19-1-2026-2.apk"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent-600 text-white font-bold rounded-2xl hover:bg-accent-700 transition-all shadow-xl shadow-accent-600/20 group"
                download
              >
                Tải về APK (Bản mới nhất)
                <Download className="w-5 h-5 group-hover:translate-y-0.5 transition-transform" />
              </a>
              <p className="text-xs italic text-base-500 text-center">
                update 19-1-2026
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-24">
        <div className="px-8 mx-auto md:px-12 lg:px-24 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Steps List */}
            <div className="space-y-16">
              {steps.map((step, index) => (
                <div key={index} className="flex gap-6 relative group">
                  {index !== steps.length - 1 && (
                    <div className="absolute left-7 top-16 bottom-[-48px] w-px bg-slate-200 group-hover:bg-accent-200 transition-colors"></div>
                  )}
                  <div
                    className={`shrink-0 w-14 h-14 rounded-2xl ${step.color} flex items-center justify-center relative z-10 shadow-sm transition-transform group-hover:scale-110`}
                  >
                    <step.icon className="w-7 h-7" />
                  </div>
                  <div className="flex-1">
                    <span className="text-xs font-bold text-accent-600 uppercase tracking-wider mb-1 block">
                      Bước {index + 1}
                    </span>
                    <h3 className="text-2xl font-bold text-slate-900 mb-3">
                      {step.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed font-medium mb-4">
                      {step.description}
                    </p>
                    <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                      <h4 className="text-sm font-bold text-slate-800 mb-3 flex items-center gap-2">
                        <Info className="w-4 h-4 text-accent-600" />
                        Chi tiết thực hiện:
                      </h4>
                      <ul className="space-y-2">
                        {step.details.map((detail, dIndex) => (
                          <li
                            key={dIndex}
                            className="text-sm text-slate-600 flex gap-2"
                          >
                            <span className="text-accent-600 font-bold">•</span>
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Visual Preview */}
            <div className="sticky top-24">
              <div className="relative group">
                <div className="absolute -inset-4 bg-accent-500/10 rounded-[2.5rem] blur-2xl group-hover:bg-accent-500/20 transition duration-700"></div>
                <div className="relative bg-white p-6 rounded-[2.5rem] shadow-2xl ring-1 ring-slate-200">
                  <div className="bg-slate-100 rounded-2xl overflow-hidden aspect-[4/3]">
                    <OptimizedImage
                      src="/images/ghiso_1_8.jpg"
                      alt="Minh họa ứng dụng"
                      width={800}
                      height={600}
                      className="w-full h-full object-cover object-top grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700"
                    />
                  </div>
                  <div className="mt-8 p-6 bg-amber-50 rounded-2xl border border-amber-200 flex gap-4">
                    <AlertCircle className="w-6 h-6 text-amber-600 shrink-0" />
                    <div>
                      <h4 className="font-bold text-amber-900 mb-1">
                        Cảnh báo dữ liệu
                      </h4>
                      <p className="text-sm text-amber-800 font-medium leading-normal">
                        Việc xoá thư mục QUAWACO và ImagesGCS (Bước 2) sẽ xoá
                        toàn bộ ảnh cũ chưa được đồng bộ. Hãy chắc chắn bạn đã
                        gửi hết dữ liệu trước khi thực hiện.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ/Help CTA Section */}
      <section className="pb-24">
        <div className="px-8 mx-auto md:px-12 lg:px-24 max-w-7xl">
          <div className="bg-slate-900 rounded-[3rem] p-12 md:p-16 relative overflow-hidden text-center md:text-left">
            <div className="absolute top-0 right-0 w-full h-full opacity-20 pointer-events-none">
              <div className="absolute -top-24 -right-24 w-96 h-96 bg-accent-500 rounded-full blur-[100px]"></div>
            </div>

            <div className="relative grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Bạn vẫn còn thắc mắc?
                </h2>
                <p className="text-slate-400 text-lg font-medium leading-relaxed">
                  Nếu bạn gặp khó khăn ở bất kỳ bước nào, hãy liên hệ ngay với
                  nhân viên phòng Công nghệ qua Zalo để được hỗ trợ.
                </p>
              </div>
              {/* <div className="flex flex-col sm:flex-row gap-4 md:justify-end">
                <button className="px-8 py-4 bg-white text-slate-900 font-bold rounded-xl hover:bg-slate-100 transition-colors shadow-lg">
                  Hotline Kỹ thuật
                </button>
                <button className="px-8 py-4 bg-slate-800 text-white border border-slate-700 font-bold rounded-xl hover:bg-slate-700 transition-colors">
                  Gửi yêu cầu hỗ trợ
                </button>
              </div> */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
