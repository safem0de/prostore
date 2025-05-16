import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Product } from "@/types";

const ProductCard = ({ product }: { product: Product; }) => {
    return (
        <Card className="w-full max-w-sm">
            <CardHeader>
                <Link href={`/product/${product.slug}`}>
                    <Image
                        src={product.images[0]}
                        alt={product.name}
                        height={300}
                        width={300}
                        priority={true} />
                </Link>
            </CardHeader>
            <CardContent className="p-4 grid gap-4">
                <div className="text-xs">{product.brand}</div>
                <Link href={`/product/${product.slug}`}>
                    <h2 className="text-sm font-medium">{product.name}</h2>
                </Link>
                <div className="flex items-center justify-between gap-4">
                    <p className="text-sm text-muted-foreground">{product.rating} Stars</p>
                    {product.stock > 0 ? (
                        <p className="text-sm font-semibold text-primary">
                            ${product.price}
                        </p>
                    ) : (
                        <p className="text-sm text-destructive font-semibold">
                            Out Of Stock
                        </p>
                    )}
                </div>
            </CardContent>
        </Card>
    );
}

export default ProductCard;