import ProductList from "@/components/shared/product/product-list";
import { getLatestProducts } from "@/lib/actions/product.actions";

// import sampleData from "@/db/sample-data";
// import { Button } from "@/components/ui/button";

const HomePage = async () => {
  const latestProducts = await getLatestProducts();
  return (
    <>
      <ProductList data={latestProducts} title="New Arrivals"/>
    </>
  );
};

export default HomePage;
