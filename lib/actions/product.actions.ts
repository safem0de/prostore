"use server"

import { PrismaClient } from "@prisma/client"
import { convertToPlainObject } from "../utils";

// Get latest Products
export async function getLatestProducts() {
    const prisma = new PrismaClient();
    const data = await prisma.product.findMany({
        take: 4,
        orderBy: { createdAt: 'desc' },
    });

    return convertToPlainObject(data);
}

export async function getProductBySlug(slug: string) {
    const prisma = new PrismaClient();
    return await prisma.product.findFirst({
        where: { slug: slug },
    });
}