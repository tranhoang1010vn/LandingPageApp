import Image from "next/image";

interface Props {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  [key: string]: any;
}

export default function OptimizedImage({ src, alt, width, height, className, ...rest }: Props) {
  // Map public paths to correct Next.js public directory usage
  const imageSrc = src.startsWith("/") ? src : `/${src}`;

  return (
    <Image
      src={imageSrc}
      alt={alt}
      width={width || 500}
      height={height || 500}
      className={className}
      {...rest}
    />
  );
}
