import DealoftheDay from "@/components/home/DealoftheDay";
import Banner_1 from "@/components/home/Banner_1";
import Explore from "@/components/home/Explore";
import NewArrivals from "@/components/home/NewArrivals";

import { getProducts } from "@/services/api";

export default async function HomePage() {

  const products = await getProducts();

  return (

    <main>

      <Explore />

      <DealoftheDay
        products={products}
      />

      <Banner_1 />

      <NewArrivals
        products={products}
      />

    </main>

  );

}