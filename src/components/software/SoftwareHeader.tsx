interface SoftwareHeaderProps {
  title?: string;
  subtitle?: string;
  description?: string;
}

export default function SoftwareHeader({
  title = "Phần mềm QUAWACO",
  subtitle = "Sản phẩm của công ty Cổ phần Nước sạch Quảng Ninh",
  description = "Khám phá các ứng dụng và phần mềm của QUAWACO - Giải pháp công nghệ cho quản lý nước sạch",
}: SoftwareHeaderProps) {
  return (
    <section className="overflow-hidden bg-linear-to-b from-base-50 to-white">
      <div className="px-8 pt-32 pb-12 mx-auto md:px-12 lg:px-24 max-w-7xl">
        <div className="max-w-3xl text-center mx-auto">
          <p className="text-sm leading-normal font-bold uppercase text-accent-600">
            {subtitle}
          </p>
          <h1 className="text-3xl/snug leading-tight tracking-tight sm:text-4xl/snug md:text-5xl/snug lg:text-6xl/snug mt-4 font-bold text-base-900">
            {title}
          </h1>
          <p className="text-lg leading-relaxed mt-6 text-base-600 font-medium max-w-2xl mx-auto">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}
