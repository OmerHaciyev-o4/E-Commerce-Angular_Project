import { Product } from "../products/product";

export interface Card{
    id: string;
    product: Product;
    count: number;
}