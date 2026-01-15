# Hướng dẫn triển khai ứng dụng lên Máy chủ (Server)

Tài liệu này hướng dẫn bạn cách đưa mã nguồn lên máy chủ, xây dựng Docker Image và chạy Container sử dụng mạng của máy chủ (host network).

## 1. Chuẩn bị mã nguồn
Trước khi tải lên, hãy đảm bảo bạn đã nén các tệp tin cần thiết. Bạn **KHÔNG** cần nén các thư mục `node_modules` hoặc `.next`.

**Các tệp cần thiết:**
- Toàn bộ thư mục `src/`
- `package.json` và **`pnpm-lock.yaml`** (Bắt buộc để Docker build thành công)
- `next.config.ts`
- `Dockerfile` và `.dockerignore`
- `tsconfig.json` và các tệp cấu hình khác (`postcss`, `tailwind`,...)

## 2. Đưa code lên máy chủ
Bạn có thể sử dụng `SCP`, `SFTP` hoặc Git để đưa code lên.

**Ví dụ sử dụng SCP:**
```bash
scp -r ./path-to-your-project user@your-server-ip:/home/user/app
```

## 3. Cài đặt Docker trên máy chủ
Nếu máy chủ chưa có Docker, hãy cài đặt bằng lệnh (Ubuntu):
```bash
sudo apt update
sudo apt install docker.io -y
sudo systemctl start docker
sudo systemctl enable docker
```

## 4. Xây dựng Docker Image
Di chuyển vào thư mục chứa code trên máy chủ và chạy lệnh build:

```bash
# Di chuyển vào thư mục app
cd /home/user/app

# Xây dựng image với tên 'quawaco-app'
sudo docker build -t quawaco-app .
```

## 5. Chạy Container (Sử dụng Host Network)
Để container sử dụng trực tiếp mạng của máy chủ (nhanh hơn và dễ quản lý cổng hơn), sử dụng tham số `--network host`.

**Lệnh chạy:**
```bash
sudo docker run -d \
  --name quawaco-container \
  --network host \
  --restart always \
  quawaco-app
```

**Lưu ý khi dùng `--network host`:**
- Ứng dụng sẽ chạy trực tiếp trên cổng đã cấu hình trong Dockerfile (**3025**).
- Bạn không cần dùng tham số `-p 3025:3025` khi đã dùng `--network host`.
- Đảm bảo cổng **3025** đã được mở trên Firewall của máy chủ.

## 6. Kiểm tra trạng thái
```bash
# Kiểm tra container đang chạy
sudo docker ps

# Xem log của ứng dụng
sudo docker logs -f quawaco-container
```

## 7. Xử lý lỗi thường gặp
**Lỗi `ERR_PNPM_OUTDATED_LOCKFILE`:**
- Lỗi này xảy ra khi tệp `pnpm-lock.yaml` không khớp với `package.json`.
- **Cách sửa:** Hãy chạy lệnh `pnpm install` ở máy cá nhân trước khi build Docker hoặc trước khi nén code gửi lên server để cập nhật tệp lock mới nhất.
- Trong Dockerfile, tôi đã đổi thành `pnpm i --no-frozen-lockfile` để linh hoạt hơn, nhưng tốt nhất vẫn nên đồng bộ lockfile ở máy local.
