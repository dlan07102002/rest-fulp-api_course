# Content type

1. application/json

{
"name": "Hoàng An",
"email": "hoangan.web@gmail.com"
}

2. application/x-www-form-urlencoded

name=Hoàng+An&email=hoangan.web@gmail.com

Cài đặt:

- NodeJS: Kiểm tra node -v và npm -v
- Postman
- Đăng ký tài khoản Mogodb Cloud

# Vấn đề khi dùng NodeJS thuần

- Xử lý URL
- Parse Body
- Http Method
- Chia các module

# Cài Express Generator

- npx express-generator --view=ejs myapp

- cd myapp

- npm i

- npm start

=> Gõ: http://127.0.0.1:3000


# Buổi 2
<!-- Schema, Data
 -->
<!-- Product: name, desc -->

# Xây dựng resource / posts
- title
- content
Xử lý
- Lấy danh sách posts
- Thêm post mới
- Lấy chi tiết 1 post theo id

# Các bước triển khai

- Tạo model
- Tạo controller
- Tạo route

## Authentication

Controller: AuthController

- /login
- /logout
- /register

Model: user
Schema: name, email, password

Middleware

- AuthMiddleWare => kiểm tra đăng nhập

## Đăng ký tài khoản
- Post Request => Lấy data => Validate? => Mã hóa mật khẩu (bcrypt) => Insert vào database => Tạo Access Token và Refresh Token => Trả về response (status, Token)