# NANO Visitor HQ - Visitor Management System

A modern, responsive, and efficient Visitor Management System (VMS) built with **React 19**, **Vite**, and **Tailwind CSS 4**. This system streamlines the visitor check-in process, allowing for seamless coordination between visitors, employees, and security personnel.

## 🚀 Key Features

- **Multi-Role System**: Dedicated portals for Visitors, Employees, Security Guards, and Administrators.
- **QR Code Integration**: instant role selection and status tracking via QR codes.
- **Visitor Registration**: Easy-to-use form for visitors to request access.
- **Approval Workflow**: Employees can approve or reject visitor requests in real-time.
- **Security Dashboard**: Guards can manage visitor entries and exits with a "Check-in/Check-out" system.
- **Persistent Data**: Uses Browser LocalStorage to maintain visitor logs and statuses across sessions.
- **Modern UI**: Built with a "Banana Cream" aesthetic, featuring smooth transitions and responsive layouts.

## 🛠️ Tech Stack

- **Frontend**: React 19 (using the new React Compiler)
- **Tooling**: Vite 7
- **Styling**: Tailwind CSS 4 (with PostCSS)
- **Routing**: React Router 7
- **Utilities**: `react-qr-code` for generating tracking codes.

## 📥 Installation & Setup

### Prerequisites

- **Node.js**: v18 or higher recommended.
- **npm**: v9 or higher.

### Step 1: Clone and Install

```bash
# Navigate to the project directory
cd Visitor-System

# Install dependencies
npm install
```

### Step 2: Running the Development Server

The project is configured to run on **Port 8000**.

```bash
npm run dev
```

The application will be available at [http://localhost:8000](http://localhost:8000).

---

## 📂 Project Structure

- `src/pages`: Main view components (Admin, Employee, Guard dashboards, Visitor forms).
- `src/components`: Reusable UI elements like Navbar, Button, and Card.
- `src/context`: State management using React Context (`RequestContext.jsx`).
- `src/index.css`: Global styles and Tailwind configuration.
- `src/App.jsx`: Main routing configuration.

---

## 🔄 System Workflow

### 1. Visitor Entry

- Visitors land on the **Role Selection** page or access via a QR code.
- They fill out the **Visitor Form**, specifying the purpose of the visit and the employee they wish to meet.

### 2. Employee Approval

- Employees log in to the **Employee Portal**.
- They see pending requests and can **Approve** or **Reject** them instantly.

### 3. Security Check

- Security guards monitor the **Security Portal**.
- Once a visitor arrives and their status is "Approved," guards can check them in and out of the facility.

### 4. Admin Management

- Administrators have a holistic view of all requests and system activity via the **Admin Dashboard**.

---

## 🏗️ Building for Production

To create an optimized production build:

```bash
npm run build
```

The output will be in the `dist/` directory.

---

## 📝 License

This project is private and intended for use by Gautam Gupta.
