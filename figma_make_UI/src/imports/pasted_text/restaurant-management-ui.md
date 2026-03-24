> Design a **professional, practical, and user-friendly web UI** for a **Vietnamese Restaurant Management System**, similar to popular systems in Vietnam such as **iPOS, CUKCUK, KiotViet, and Sapo FnB**.

---

### 🎨 Visual Style & UX

* Clean, business-focused, modern SaaS style
* Dark sidebar + light main content (common in VN management software)
* Primary colors: green / blue / orange accents
* High readability, minimal decoration
* Optimized for **fast operations in busy restaurants**
* Desktop-first (POS-style), responsive for tablets
* Use clear icons and action buttons
* Confirmation modals for delete / cancel actions

---

### 👥 User Roles

* **Manager (Admin)**
* **Staff**
* **Customer**

Role-based navigation and permissions.

---

## 🔐 Authentication & Account Flow

* **Login**
* **Register (Customer)**

  * Enter registration info
  * Email/Phone OTP or verification link
  * Create account after verification
* Logout available in user profile menu

---

## 🧑‍💼 Manager (Admin) Dashboard

### 📊 Overview Dashboard

* Revenue statistics
* Order count
* Table status summary
* Low-stock ingredient alerts

---

### 🍽 Menu Management

* Grid-based menu list **with food images**
* Each item includes:

  * Food image thumbnail
  * Name
  * Price
  * Availability status (Available / Out of stock)
* Actions:

  * Add new item
  * Edit item
  * Delete item
  * Toggle availability

---

### 🪑 Table Management

* Visual table layout
* Table status colors:

  * Available
  * Occupied
  * Reserved
* Actions:

  * Add table
  * Edit table info
  * Delete table
  * Assign table area/zone

---

### 🎯 Discount Management

* Create discount programs
* Edit discount rules
* Delete discounts
* View discount list
* Apply discounts to orders

---

### 📦 Ingredient Management

* Ingredient list
* Add new ingredients
* Edit ingredient info
* Import stock (inventory input)
* Delete ingredients
* Stock quantity tracking

---

### 👨‍🍳 Employee Management

* Employee list
* Add employee accounts
* Edit employee information
* Disable employee accounts
* Assign roles and permissions

---

## 👩‍💼 Staff Dashboard

### 🧾 Order Management

* Create order (Take order)
* Select table
* Add food items from **image-based menu**
* Adjust quantity
* Add special notes / customer requests
* Auto-create invoice

---

### ✏️ Edit & Cancel Order

* Edit items
* Remove items
* Cancel order with confirmation

---

### 💰 Payment & Invoice

* Apply discounts
* Calculate total amount
* Confirm payment
* Generate invoice/receipt

---

### 🪑 Table Operations

* Open table
* Update table status
* Close table after payment

---

## 👤 Customer Interface

### 🍽 View Menu

* Browse menu with **large food images**
* View price and availability

---

### 📅 Table Reservation

* Book table
* Cancel reservation
* View reservation history
* View table status

---

## 🧭 Navigation Structure

* **Sidebar navigation** for Manager & Staff
* Icons + labels (Dashboard, Orders, Menu, Tables, Discounts, Employees, Ingredients)
* Top bar:

  * Search
  * Notifications
  * User profile
  * Logout

---

## 🧩 Components to Generate

* Data tables
* Food cards with images
* Status badges
* Modal dialogs
* Forms with validation
* Primary / secondary / danger buttons

---

## 📄 Pages to Generate

* Login
* Register (OTP verification)
* Manager Dashboard
* Staff Dashboard
* Menu Management (with images)
* Order & Invoice
* Table Management
* Discount Management
* Ingredient Management
* Employee Management
* Customer Menu
* Table Reservation