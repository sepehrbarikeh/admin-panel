# Admin Dashboard (Next.js)

A production-ready admin dashboard built with Next.js (App Router) and Tailwind CSS, fully responsive (mobile/tablet/desktop) with RTL support for Persian. Includes example pages for Users, Projects, Invoices, Emails, and Chats.

## Stack
- **Next.js 15+** (App Router)
- **React 18**
- **Tailwind CSS v4 (CSS-first)** with `@import "tailwindcss"` and custom at-rules like `@theme`, `@custom-variant`
- **Headless UI** for lightweight interactive elements
- **Lucide React** for icons
- **ECharts** (charts/analytics)
- **universal-cookie** to persist theme (Dark/Light)
- Persian fonts **Vazir** and **Vazir-Bold** (`public/font/`)

## Features
- **RTL-first**: `direction: rtl` via `:root`, helper class `.ltr` for exceptions
- **Dark/Light theme** persisted in cookies
- **Responsive layout** with sticky navbar and collapsible sidebar
- **Sample pages**: `Users`, `Projects`, `Invoices`, `Emails`, `Chats`
- **Remote images** configured in `next.config.ts` (domains: `randomuser.me`, `random.imagecdn.app`, `logo.clearbit.com`)

## Getting Started

Prerequisites: Node.js 18+

Install dependencies:
```bash
npm install
# or
yarn
# or
pnpm i
```

Development:
```bash
npm run dev
```
Then open http://localhost:3000

Build and start:
```bash
npm run build
npm run start
```

## Project Structure
```
src/
  app/
    layout.tsx          // root layout + global CSS import
    globals.css         // global styles, RTL, theme variables
    users/page.tsx      // user cards (responsive)
    projects/page.tsx   // project cards with filters/search (responsive)
    invoices/page.tsx   // invoice table with horizontal scroll on mobile
    emails/page.tsx     // emails list
    chats/page.tsx      // chat page
  components/
    nav.tsx             // sticky navbar
    sideBarLayout.tsx   // responsive sidebar
    shared/             // shared cards/components
  store/                // Zustand stores (tab name, sidebar toggle)
public/
  data/                 // mock data for pages
  images/               // static images
  font/                 // fonts
```

- Pages updated for responsiveness (`users`, `projects`, `invoices`):
  - Compact spacing on small screens (`mx-2`, `px-4`, `gap-3`)
  - Header controls stack on mobile (`flex-col`) and align in rows on larger screens
  - Grids start at 1 column on mobile and scale up with breakpoints
  - Invoice table wrapped in `overflow-x-auto` container for safe horizontal scroll

## Development Notes
- Tailwind v4 (CSS-first). Some IDEs may flag `@theme` or `@custom-variant` as unknown at-rules; build is unaffected.
- Theme toggle: cookie `theme` with values `dark`/`light`, applied as `dark` class on `html` (see `src/components/nav.tsx`).
- Global RTL via `:root`. Use `.ltr` utility where needed.

## Scripts
- `dev`: run development server
- `build`: production build
- `start`: start production server after build

## Images & Remote Patterns
`next.config.ts` includes `images.remotePatterns` for external avatars/logos. Add more domains as needed.

## Roadmap
- Add `tasks` page: `src/app/tasks/page.tsx` using the same responsive patterns
- Improve form accessibility (labels, aria-attributes)
- Cross-browser testing and performance tuning



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

