import ProductList from "@/components/shared/product/product-list";
import sampleData from "@/db/sample-data";
// import { Button } from "@/components/ui/button";

const HomePage = () => {
  return (
    <>
      <ProductList data={sampleData.products} title="New Arrivals"/>
    </>
  );
};

export default HomePage;
