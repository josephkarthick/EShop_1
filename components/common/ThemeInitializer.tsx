"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

declare global {
  interface Window {
    AOS: any;
    $: any;
  }
}

export default function ThemeInitializer() {

  const pathname = usePathname();

  useEffect(() => {

    const initTheme = async () => {

      try {

        /* AOS */
        if (window.AOS) {

          window.AOS.init({
            once: true,
          });

        }

        /* jQuery */
        if (window.$) {

          const $ = window.$;

          /* Destroy old sliders */
          $(".owl-carousel").trigger(
            "destroy.owl.carousel"
          );

          /* Reinitialize Owl */
          $(".owl-carousel").owlCarousel({
            loop: true,
            margin: 10,
            nav: false,
            dots: false,
            responsive: {
              0: {
                items: 1,
              },
              600: {
                items: 2,
              },
              1000: {
                items: 4,
              },
            },
          });

          /* Slick */
          if ($(".slick-slider").length) {

            $(".slick-slider").slick("refresh");

          }

        }

      } catch (error) {

        console.log(
          "Theme Init Error:",
          error
        );

      }

    };

    /* Delay for DOM render */
    setTimeout(() => {

      initTheme();

    }, 300);

  }, [pathname]);

  return null;
}