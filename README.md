# 🛒 Full Stack E-Commerce Application

A modern Full-Stack E-Commerce Platform built using the MERN Stack. The application provides a complete online shopping experience with user authentication, product management, shopping cart functionality, secure payments, order tracking, and an admin dashboard.

---

## 🚀 Features

### User Features

* User Registration & Login
* JWT Authentication & Authorization
* Browse Products
* Search & Filter Products
* Add Products to Cart
* Update Cart Quantity
* Place Orders
* Online Payment Integration (Stripe/Razorpay)
* View Order History
* Responsive Design for Mobile & Desktop

### Admin Features

* Admin Login
* Add New Products
* Upload Product Images to Cloudinary
* Manage Products
* View Customer Orders
* Update Order Status
* Manage Inventory

---

## 🛠️ Tech Stack

### Frontend

* React.js
* Vite
* Tailwind CSS
* Context API
* React Router DOM
* Axios

### Backend

* Node.js
* Express.js
* JWT Authentication
* Bcrypt Password Hashing

### Database & Cloud Services

* MongoDB Atlas
* Mongoose
* Cloudinary

### Payment Gateway

* Stripe / Razorpay

---

## 📂 Project Structure

```bash
E-Commerce/
│
├── frontend/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── backend/
│   ├── controllers/
│   ├── routes/
│   ├── middleware/
│   ├── models/
│   └── server.js
│
├── admin/
│   ├── src/
│   └── package.json
│
└── README.md
```

## 🔐 Authentication Flow

1. User registers with email and password.
2. Password is hashed using Bcrypt.
3. User logs in.
4. Server generates a JWT token.
5. Token is stored on the client side.
6. Protected routes verify the token before granting access.

---

## 🛒 Cart Management

The cart is managed using React Context API and supports:

* Add to Cart
* Remove from Cart
* Quantity Updates
* Size-based Product Selection
* Persistent Cart State

---

## ☁️ Image Upload Flow

1. Admin uploads product images.
2. Images are sent to the backend using FormData.
3. Multer processes uploaded files.
4. Cloudinary stores images securely.
5. Cloudinary URLs are saved in MongoDB.

---

## 💳 Payment Integration

The application supports secure online payments through:

* Stripe
* Razorpay

Payment status is verified before order confirmation.

---

## ⚙️ Installation & Setup

### Clone Repository

```bash
git clone https://github.com/your-username/your-repository-name.git
```

### Backend Setup

```bash
cd backend
npm install
npm run server
```

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

### Admin Setup

```bash
cd admin
npm install
npm run dev
```

---

## 🔑 Environment Variables

Create a `.env` file inside the backend directory:

```env
PORT=4000

MONGODB_URI=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret

CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_SECRET_KEY=your_secret_key

STRIPE_SECRET_KEY=your_stripe_secret_key

RAZORPAY_KEY_ID=your_razorpay_key
RAZORPAY_SECRET=your_razorpay_secret
```

---

## 📸 Screenshots

Add screenshots here:

* Home Page
* Product Details Page
* Shopping Cart
* Checkout Page
* Orders Page
* Admin Dashboard

---

## 🌟 Future Improvements

* Product Reviews & Ratings
* Wishlist Functionality
* Email Notifications
* Coupon & Discount System
* Advanced Product Recommendations
* Redis Caching
* Microservices Architecture

---

## 📈 Learning Outcomes

Through this project, I gained practical experience in:

* Full Stack Development
* REST API Design
* Authentication & Authorization
* State Management
* Database Design
* Cloud Storage Integration
* Payment Gateway Integration
* Deployment & Production Practices

---

## 👨‍💻 Author

Praneeth Sai

⭐ If you found this project useful, consider giving it a star on GitHub!
