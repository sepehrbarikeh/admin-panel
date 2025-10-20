# Admin Dashboard (Next.js)

پنل مدیریت با Next.js (App Router) و TailwindCSS با پشتیبانی کامل از فارسی/RTL، ریسپانسیو برای موبایل/تبلت/دسکتاپ، و صفحاتی مانند کاربران، پروژه‌ها، فاکتورها، ایمیل و چت.

## Stack
- **Next.js 15+** (App Router)
- **React 18**
- **Tailwind CSS v4 (CSS-first)** با `@import "tailwindcss"` و at-rule های سفارشی مانند `@theme`, `@custom-variant`
- **Headless UI** برای المان‌های تعاملی سبک
- **Lucide React** برای آیکون‌ها
- **ECharts** (در دیتابرد/چارت‌ها)
- **universal-cookie** برای مدیریت تم (Dark/Light)
- فونت‌های فارسی **Vazir** و **Vazir-Bold** (پوشه `public/font/`)

## Features
- پشتیبانی کامل RTL (`direction: rtl` در `:root` و کلاس کمکی `.ltr`)
- تم تاریک/روشن با ذخیره در کوکی
- سایدبار واکنش‌گرا و ناوبری چسبان
- صفحات نمونه: `Users`, `Projects`, `Invoices`, `Emails`, `Chats`
- مدیریت تصاویر ریموت در `next.config.ts` (دامنه‌ها: `randomuser.me`, `random.imagecdn.app`, `logo.clearbit.com`)

## Getting Started

پیش‌نیاز: Node.js 18+

نصب وابستگی‌ها:
```bash
npm install
# یا
yarn
# یا
pnpm i
```

اجرای توسعه:
```bash
npm run dev
```
سپس به آدرس http://localhost:3000 بروید.

بیلد و اجرا:
```bash
npm run build
npm run start
```

## Project Structure
```
src/
  app/
    layout.tsx          // لایه ریشه و وارد کردن CSS سراسری
    globals.css         // استایل‌های سراسری، RTL، theme variables
    users/page.tsx      // لیست کارت کاربران (ریسپانسیو)
    projects/page.tsx   // کارت‌های پروژه با فیلتر/سرچ (ریسپانسیو)
    invoices/page.tsx   // جدول فاکتورها با اسکرول افقی در موبایل
    emails/page.tsx     // لیست ایمیل
    chats/page.tsx      // چت با باکس ورودی چسبان
  components/
    nav.tsx             // ناوبری بالای صفحه (sticky)
    sideBarLayout.tsx   // سایدبار واکنش‌گرا
    shared/             // کارت‌ها و آیتم‌های مشترک
  store/                // Zustand stores (tab name, sidebar toggle)
public/
  data/                 // داده‌های mock صفحات
  images/               // تصاویر استاتیک
  font/                 // فونت‌های فارسی
```
## Development Notes
- Tailwind v4 در حالت CSS-first استفاده می‌شود؛ at-rule های `@theme` و `@custom-variant` ممکن است برای برخی LSP ها ناشناخته باشد و هشدار بدهد؛ در بیلد Tailwind مشکلی ایجاد نمی‌کند.
- برای تغییر تم: کوکی `theme` با مقادیر `dark` یا `light` تنظیم می‌شود و کلاس `dark` روی `html` اعمال می‌گردد (فایل `components/nav.tsx`).
- جهت RTL به‌صورت سراسری در `:root` تنظیم شده و کلاس `.ltr` برای موارد خاص موجود است.

## Scripts
- `dev`: اجرای توسعه
- `build`: بیلد production
- `start`: اجرای سرور production بعد از بیلد

## Images & Remote Patterns
پیکربندی `next.config.ts` برای دامنه‌های خارجی صورتحساب‌ها/آواتارها انجام شده است. در صورت نیاز دامنه جدید اضافه کنید.

## TODO / Roadmap
- صفحه `tasks` (مسیر `src/app/tasks/page.tsx`) — ایجاد و هماهنگ با طراحی فعلی
- بهبود دسترس‌پذیری فرم‌ها (labels, aria-*)
- تست Cross-browser و بهینه‌سازی عملکرد

