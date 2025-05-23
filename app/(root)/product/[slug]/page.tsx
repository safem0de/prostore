import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

import { getProductBySlug } from "@/lib/actions/product.actions";
import { notFound } from "next/navigation";
import ProductImages from "@/components/shared/product/product-images";

const ProductDetailsPage = async (props: { params: Promise<{ slug: string }> }) => {
    const { slug } = await props.params;
    const product = await getProductBySlug(slug);

    if (!product) notFound();

    return (<>
        <section>
            <div className="grid grid-cols-1 md:grid-cols-5">
                {/* Images Columns */}
                <div className="col-span-2">
                    {/* Image Component */}
                    <ProductImages images={product.images} />
                </div>
                <div className="col-span-2 p-5">
                    <div className="flex flex-col gap-6">
                        <p>
                            {product.brand} {product.category}
                        </p>
                        <h1 className="h3-bold">
                            {product.name}
                        </h1>
                        <p>{Number(product.rating)} of {product.numReviews}</p>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                            {Number(product.price)}
                        </div>
                    </div>
                    <div className="mt-10">
                        <p className="font-semibold">Description</p>
                        <p>{product.description}</p>
                    </div>
                </div>
            </div>
            {/* Action Column */}
            <div>
                <Card>
                    <CardContent className="p-4">
                        <div className="mb-2 flex justify-between">
                            {Number(product.price)}
                        </div>
                        <div className="mb-2 flex justify-between">
                            <div>
                                Status
                            </div>
                            {product.stock > 0 ? (
                                <Badge variant="outline">In Stock</Badge>
                            ) : (
                                <Badge variant="destructive">Out Of Stock</Badge>
                            )}
                        </div>
                        {product.stock > 0 && (
                            <div className="flex-center">
                                <Button className="w-full">Add to Cart</Button>
                            </div>
                        )}
                    </CardContent>
                </Card>
            </div>
        </section >
    </>);
}

export default ProductDetailsPage;