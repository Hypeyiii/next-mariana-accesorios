export interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
    image_url: string;
    category: string;
    created_at: Date;
    colors: string[];
}

export interface CardProduct {
    id: string;
    name: string;
    description: string;
    price: number;
    image: string;
    colors: string[];
}