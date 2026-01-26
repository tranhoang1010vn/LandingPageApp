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
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ghi số Quawaco - Hướng dẫn cài đặt",
  description:
    "Hướng dẫn chi tiết cài đặt ứng dụng Ghi số Quawaco trên Android",
};

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
    title: "Cấp quyền truy cập",
    description:
      "Sau khi cài đặt, ứng dụng sẽ yêu cầu một số quyền truy cập để hoạt động ổn định. Hãy cấp phép đầy đủ.",
    icon: ShieldCheck,
    color: "bg-green-50 text-green-600",
    details: [
      "Cho phép truy cập vị trí (GPS) để định vị chính xác.",
      "Cho phép truy cập thư viện ảnh để lưu hình ảnh đồng hồ.",
      "Cho phép máy ảnh nếu muốn chụp ảnh đồng hồ nước trực tiếp từ ứng dụng.",
    ],
  },
];

export default function QuawacoGCSPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <section className="pt-28 pb-16 px-6 sm:px-8 md:px-12 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Smartphone className="w-4 h-4" />
              Ứng dụng Android
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Ghi số Quawaco v1.8
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-10">
              Ứng dụng ghi chỉ số đồng hồ nước chuyên nghiệp dành cho nhân viên
              ghi số của QUAWACO. Nhanh chóng, chính xác và dễ sử dụng.
            </p>

            {/* Download Button */}
            <div className="flex flex-col items-center gap-1">
              <a
                href="/datafiles/Quawaco-v1.8-19-1-2026-2.apk"
                download
                className="group inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all shadow-lg hover:shadow-xl"
              >
                <Download className="w-6 h-6 group-hover:animate-bounce" />
                Tải về APK (v1.8)
              </a>
              <p className="text-xs italic text-gray-500">update 19-1-2026</p>
            </div>

            {/* Stats */}
            <div className="mt-12 flex flex-wrap justify-center gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-blue-600">v1.8</div>
                <div className="text-sm text-gray-600 mt-1">Phiên bản</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600">3.9★</div>
                <div className="text-sm text-gray-600 mt-1">Đánh giá</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600">15MB</div>
                <div className="text-sm text-gray-600 mt-1">Dung lượng</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600">
                  Android 6+
                </div>
                <div className="text-sm text-gray-600 mt-1">Yêu cầu</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Important Notice */}
      <section className="py-8 px-6 sm:px-8 md:px-12 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="bg-amber-50 border-l-4 border-amber-500 rounded-lg p-6 shadow-sm">
            <div className="flex gap-4">
              <AlertCircle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-amber-900 text-lg mb-2">
                  Lưu ý quan trọng
                </h3>
                <p className="text-amber-800 leading-relaxed">
                  Nếu bạn đã cài đặt phiên bản cũ trước đó, vui lòng thực hiện
                  đầy đủ các bước gỡ cài đặt và xóa dữ liệu cũ trước khi cài bản
                  mới để tránh xung đột và đảm bảo ứng dụng hoạt động ổn định.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Installation Steps */}
      <section className="py-16 px-6 sm:px-8 md:px-12 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Hướng dẫn cài đặt từng bước
            </h2>
            <p className="text-lg text-gray-600">
              Vui lòng thực hiện chính xác 4 bước dưới đây để đảm bảo ứng dụng
              hoạt động ổn định và không xảy ra lỗi đồng bộ dữ liệu.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Steps List */}
            <div className="space-y-16">
              {steps.map((step, index) => (
                <div key={index} className="flex gap-6 relative group">
                  {index !== steps.length - 1 && (
                    <div className="absolute left-7 top-16 -bottom-12 w-px bg-slate-200 group-hover:bg-blue-200 transition-colors"></div>
                  )}
                  <div
                    className={`shrink-0 w-14 h-14 rounded-2xl ${step.color} flex items-center justify-center relative z-10 shadow-sm transition-transform group-hover:scale-110`}
                  >
                    <step.icon className="w-7 h-7" />
                  </div>
                  <div className="flex-1">
                    <span className="text-xs font-bold text-blue-600 uppercase tracking-wider mb-1 block">
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
                        <Info className="w-4 h-4 text-blue-600" />
                        Chi tiết thực hiện:
                      </h4>
                      <ul className="space-y-2">
                        {step.details.map((detail, dIndex) => (
                          <li
                            key={dIndex}
                            className="text-sm text-slate-600 flex gap-2"
                          >
                            <span className="text-blue-600 font-bold">•</span>
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
                <div className="absolute -inset-4 bg-blue-500/10 rounded-[2.5rem] blur-2xl group-hover:bg-blue-500/20 transition duration-700"></div>
                <div className="relative bg-white p-6 rounded-[2.5rem] shadow-2xl ring-1 ring-slate-200">
                  <div className="bg-slate-100 rounded-2xl overflow-hidden aspect-[4/3]">
                    <OptimizedImage
                      src="/images/ghiso_1_8.jpg"
                      alt="Minh họa ứng dụng Ghi số Quawaco"
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

      {/* Features Section */}
      <section className="py-16 px-6 sm:px-8 md:px-12 lg:px-16 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Tính năng nổi bật
            </h2>
            <p className="text-lg text-gray-600">
              Những tính năng giúp công việc ghi số trở nên dễ dàng hơn
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: "📱",
                title: "Giao diện thân thiện",
                description:
                  "Thiết kế đơn giản, dễ sử dụng ngay cả với người mới",
              },
              {
                icon: "📍",
                title: "Định vị GPS",
                description: "Tự động ghi nhận vị trí khi ghi số đồng hồ",
              },
              {
                icon: "📸",
                title: "Chụp ảnh đồng hồ",
                description:
                  "Lưu trữ hình ảnh đồng hồ nước để đối chiếu sau này",
              },
              {
                icon: "☁️",
                title: "Đồng bộ cloud",
                description: "Tự động đồng bộ dữ liệu lên server QUAWACO",
              },
              {
                icon: "🔒",
                title: "Bảo mật cao",
                description: "Mã hóa dữ liệu, đăng nhập an toàn",
              },
              {
                icon: "⚡",
                title: "Nhanh chóng",
                description:
                  "Ghi số hàng trăm đồng hồ mỗi ngày một cách hiệu quả",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-6 sm:px-8 md:px-12 lg:px-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Câu hỏi thường gặp
            </h2>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "Tại sao phải gỡ bản cũ trước khi cài bản mới?",
                a: "Để tránh xung đột dữ liệu và đảm bảo ứng dụng hoạt động ổn định. Việc gỡ bản cũ và xóa dữ liệu cũ sẽ giúp bản mới chạy mượt mà hơn.",
              },
              {
                q: "Tôi có mất dữ liệu khi gỡ bản cũ không?",
                a: "Dữ liệu đã được đồng bộ lên server QUAWACO sẽ không bị mất. Sau khi cài bản mới, bạn chỉ cần đăng nhập lại và dữ liệu sẽ được tải về.",
              },
              {
                q: "Ứng dụng có hỗ trợ offline không?",
                a: "Có, bạn vẫn có thể ghi số khi không có kết nối internet. Dữ liệu sẽ được lưu tạm và tự động đồng bộ khi có mạng.",
              },
              {
                q: "Làm sao để cập nhật lên phiên bản mới?",
                a: "Theo dõi trang web hoặc thông báo từ QUAWACO để biết khi có phiên bản mới. Sau đó tải APK mới và cài đặt đè lên bản cũ.",
              },
            ].map((faq, index) => (
              <details
                key={index}
                className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden group"
              >
                <summary className="px-6 py-4 cursor-pointer font-semibold text-gray-900 flex items-center justify-between hover:bg-gray-50 transition-colors">
                  <span>{faq.q}</span>
                  <ChevronRight className="w-5 h-5 text-gray-400 group-open:rotate-90 transition-transform" />
                </summary>
                <div className="px-6 pb-4 text-gray-600 leading-relaxed">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="py-16 px-6 sm:px-8 md:px-12 lg:px-16 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <Info className="w-16 h-16 text-white mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Cần hỗ trợ thêm?
          </h2>
          <p className="text-blue-100 text-lg mb-8">
            Đội ngũ kỹ thuật của QUAWACO luôn sẵn sàng hỗ trợ bạn
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:0123456789"
              className="inline-flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              📞 Hotline: 0123 456 789
            </a>
            <a
              href="mailto:support@quawaco.com.vn"
              className="inline-flex items-center gap-2 bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors"
            >
              ✉️ Email hỗ trợ
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
