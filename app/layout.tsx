import type { Metadata } from "next";
import Script from "next/script";

import "./globals.css";

/* Toast */
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

/* Vendor CSS */
import "@/public/assets/css/vendor/bootstrap.min.css";
import "@/public/assets/css/vendor/remixicon.css";
import "@/public/assets/css/vendor/aos.css";
import "@/public/assets/css/vendor/swiper-bundle.min.css";
import "@/public/assets/css/vendor/owl.carousel.min.css";
import "@/public/assets/css/vendor/slick.min.css";
import "@/public/assets/css/vendor/animate.min.css";
import "@/public/assets/css/vendor/jquery-range-ui.css";

/* Main CSS */
import "@/public/assets/css/style.css";

/* Context */
import { CartProvider } from "@/context/CartContext";
import { QuickViewProvider } from "@/context/QuickViewContext";

/* Layout Components */
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ThemeInitializer from "@/components/common/ThemeInitializer";

/* Common Components */
import Loader from "@/components/common/Loader";
import MobileMenu from "@/components/common/MobileMenu";
import CategorySidebar from "@/components/common/CategorySidebar";
import ToolsSidebar from "@/components/common/ToolsSidebar";
import BackToTop from "@/components/common/BackToTop";

/* Cart */
import CartSidebar from "@/components/cart/CartSidebar";

/* Modals */
import NewsletterModal from "@/components/modals/NewsletterModal";
import QuickViewModal from "@/components/modals/QuickViewModal";

export const metadata: Metadata = {
  title: "VaisKart",
  description: "Professional Ecommerce Website",
  icons: {
    icon: "/assets/img/favicon/favicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">

      <body>

        <CartProvider>

          <QuickViewProvider>
		  
		      <ThemeInitializer />

            {/* Loader */}
            <Loader />

            {/* Header */}
            <Header />

            {/* Main Content */}
            <main>
              {children}
            </main>

            {/* Footer */}
            <Footer />

            {/* Sidebars */}
            <CartSidebar />
            <MobileMenu />
            <CategorySidebar />
            <ToolsSidebar />

            {/* Modals */}
            <QuickViewModal />
            <NewsletterModal />

            {/* Utilities */}
            <BackToTop />

            {/* Toast Notifications */}
            <ToastContainer
              position="top-right"
              autoClose={2000}
              hideProgressBar={false}
              newestOnTop
              closeOnClick
              pauseOnHover
              draggable
              theme="light"
            />

          </QuickViewProvider>

        </CartProvider>

        {/* jQuery */}
        <Script
          src="/assets/js/vendor/jquery.min.js"
          strategy="beforeInteractive"
        />

        {/* Bootstrap */}
        <Script
          src="/assets/js/vendor/bootstrap.bundle.min.js"
          strategy="afterInteractive"
        />

        {/* Vendor Plugins */}
        <Script
          src="/assets/js/vendor/jquery.zoom.min.js"
          strategy="afterInteractive"
        />

        <Script
          src="/assets/js/vendor/aos.js"
          strategy="afterInteractive"
        />

        <Script
          src="/assets/js/vendor/swiper-bundle.min.js"
          strategy="afterInteractive"
        />

        <Script
          src="/assets/js/vendor/smoothscroll.min.js"
          strategy="afterInteractive"
        />

        <Script
          src="/assets/js/vendor/owl.carousel.min.js"
          strategy="afterInteractive"
        />

        <Script
          src="/assets/js/vendor/slick.min.js"
          strategy="afterInteractive"
        />

        <Script
          src="/assets/js/vendor/jquery-range-ui.min.js"
          strategy="afterInteractive"
        />

        <Script
          src="/assets/js/vendor/tilt.jquery.min.js"
          strategy="afterInteractive"
        />

        {/* Main JS */}
        <Script
          src="/assets/js/main.js"
          strategy="afterInteractive"
        />

      </body>

    </html>
  );
}