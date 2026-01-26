# Hướng dẫn thêm Ảnh và Video vào Tutorials

## Cấu trúc dữ liệu

Mỗi item trong tutorial có thể chứa:
- `title`: Tiêu đề bước (bắt buộc)
- `content`: Nội dung mô tả (bắt buộc)
- `video`: URL video YouTube hoặc video embed (không bắt buộc)
- `images`: Mảng các đường dẫn ảnh (không bắt buộc)

## Cách thêm Video

### 1. Video YouTube
```typescript
{
  title: "Đăng ký tài khoản",
  content: "Hướng dẫn đăng ký...",
  video: "https://www.youtube.com/embed/VIDEO_ID"
}
```

### 2. Lấy YouTube Embed URL
- Từ URL: `https://www.youtube.com/watch?v=dQw4w9WgXcQ`
- Chuyển thành: `https://www.youtube.com/embed/dQw4w9WgXcQ`

## Cách thêm Ảnh

### 1. Một ảnh
```typescript
{
  title: "Đăng nhập",
  content: "Nhập thông tin...",
  images: ["/images/tutorial/login-screen.jpg"]
}
```

### 2. Nhiều ảnh (hiển thị dạng grid)
```typescript
{
  title: "Chốt số đồng hồ",
  content: "Các bước chốt số...",
  images: [
    "/images/tutorial/step1.jpg",
    "/images/tutorial/step2.jpg",
    "/images/tutorial/step3.jpg"
  ]
}
```

## Layout hiển thị

- **1 ảnh**: Full width
- **2 ảnh**: Grid 2 cột
- **3+ ảnh**: Grid 2 cột (mobile) → 3 cột (desktop)

## Đặt ảnh vào thư mục

Tạo thư mục và đặt ảnh:
```
public/
  images/
    tutorial/
      quawaco-register.jpg
      quawaco-login.jpg
      qwaterhub-scan-qr.jpg
      ...
```

## Ví dụ đầy đủ

```typescript
{
  title: "Chốt số đồng hồ nguồn",
  content: "Vào 'Chốt số' từ menu chính. Quét mã QR...",
  video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  images: [
    "/images/tutorial/qwaterhub-scan-qr.jpg",
    "/images/tutorial/qwaterhub-input-meter.jpg",
    "/images/tutorial/qwaterhub-capture-photo.jpg"
  ]
}
```

## Tính năng

✅ Video responsive (16:9 aspect ratio)
✅ Ảnh tự động fallback nếu không tìm thấy
✅ Hover effects trên ảnh
✅ Click để zoom (sẵn sàng cho lightbox)
✅ Grid layout linh hoạt theo số lượng ảnh

## Lưu ý

1. **Tối ưu ảnh**: Nén ảnh trước khi upload (recommend: < 500KB/ảnh)
2. **Định dạng**: JPG, PNG, WebP đều được hỗ trợ
3. **Kích thước đề xuất**: 1920x1080 hoặc 1280x720
4. **Video**: Chỉ hỗ trợ YouTube embed (có thể mở rộng cho Vimeo, local video)
