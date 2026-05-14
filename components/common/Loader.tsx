"use client";

import { useEffect, useState } from "react";

export default function Loader() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const timer = setTimeout(() => {

      setLoading(false);

    }, 1000);

    return () => clearTimeout(timer);

  }, []);

  if (!loading) return null;

  return (

    <div className="bb-loader">

      <img
        src="/assets/img/logo/loader.png"
        alt="loader"
      />

      <span className="loader"></span>

    </div>

  );

}