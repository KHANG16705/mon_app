# Bài tập 1 - Trang Web Nhiều Trang Với React Router (PTIT)

Ứng dụng Single Page Application (SPA) xây dựng bằng **React** và thư viện **react-router-dom**, hoàn thành toàn bộ yêu cầu đề bài của **Học viện Công nghệ Bưu chính Viễn thông (PTIT)**.

---

## 🎯 Chi Tiết Yêu Cầu & Kết Quả Thực Hiện

| Yêu cầu đề bài | Thành phần thực hiện | Nội dung hiển thị & Đường dẫn |
| :--- | :--- | :--- |
| **Trang chủ (`/`)** | [`Home.jsx`](src/pages/Home.jsx) | Hiển thị: **"Chào mừng đến với PTIT!"** |
| **Giới thiệu (`/about`)** | [`About.jsx`](src/pages/About.jsx) | Hiển thị: **"Đây là trang giới thiệu về Học viện."** |
| **Liên hệ (`/contact`)** | [`Contact.jsx`](src/pages/Contact.jsx) | Hiển thị: **"Email: contact@ptit.edu.vn"** |
| **react-router-dom** | [`App.jsx`](src/App.jsx) | Sử dụng đầy đủ `BrowserRouter`, `Routes`, `Route` |
| **Menu điều hướng** | [`Navbar.jsx`](src/components/Navbar.jsx) | Thẻ ngữ nghĩa `<nav>` chứa các đường dẫn `<NavLink>` có hiệu ứng active link |
| **Component riêng** | `src/pages/` | Mỗi trang là một component độc lập, rõ ràng, dễ bảo trì |

---

## 📂 Cấu Trúc Thư Mục Dự Án

```
bai-tap-1-react-router/
├── index.html                   # Entry HTML (chứa Google Font, Tiêu đề PTIT, SEO)
├── package.json                 # Dependencies (react, react-dom, react-router-dom v7)
├── vite.config.js               # Cấu hình Vite
├── src/
│   ├── main.jsx                 # Entry point khởi tạo React root
│   ├── App.jsx                  # Thiết lập BrowserRouter, Routes, Route, Navbar, Footer
│   ├── App.css                  # Tùy biến thêm nếu cần
│   ├── index.css                # Toàn bộ hệ thống giao diện hiện đại (PTIT Red theme)
│   ├── components/
│   │   ├── Navbar.jsx           # Menu điều hướng với thẻ <nav> và NavLink
│   │   └── Footer.jsx           # Chân trang với liên kết điều hướng và bản quyền
│   └── pages/
│       ├── Home.jsx             # Trang chủ: "Chào mừng đến với PTIT!"
│       ├── About.jsx            # Giới thiệu: "Đây là trang giới thiệu về Học viện."
│       ├── Contact.jsx          # Liên hệ: "Email: contact@ptit.edu.vn" + Form tương tác
│       └── NotFound.jsx         # Trang 404 điều hướng về trang chủ
```

---

## 🚀 Hướng Dẫn Cài Đặt & Chạy Ứng Dụng

### 1. Mở thư mục bài tập
```bash
cd bai-tap-1-react-router
```

### 2. Cài đặt các thư viện (đã cài đặt sẵn)
```bash
npm install
```

### 3. Chạy môi trường phát triển (Dev Server)
```bash
npm run dev
```
Truy cập trên trình duyệt tại: **http://localhost:5173/**

### 4. Build kiểm tra bản đóng gói
```bash
npm run build
```
Bản build hoàn tất được lưu vào thư mục `dist/`.
