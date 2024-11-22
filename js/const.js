const footwear = {
    women: {
        sandals: {
            url: "https://www.amazon.in/MOSAC-Womens-Stylish-Comfortable-Fashion/dp/B09Q1G58X8", // Unique URL for sandals category
            products: [
                {
                    id: 1,
                    name: "Casual Sandals",
                    description: "Comfortable sandals for daily wear.",
                    brand: "Hush Puppies",
                    price: 45.99,
                    category: "Casual",
                    sizes: [5, 6, 7, 8, 9],
                    colors: ["Brown", "Beige"],
                    material: "Synthetic",
                    stock: 25,
                    imageUrls: [
                        "https://example.com/images/sandals1.jpg",
                        "https://example.com/images/sandals2.jpg"
                    ],
                    rating: 4.4,
                    reviews: 75
                },
                {
                    id: 2,
                    name: "Stylish Sandals",
                    description: "Fashionable sandals for a chic look.",
                    brand: "Mosac",
                    price: 39.99,
                    category: "Casual",
                    sizes: [6, 7, 8],
                    colors: ["Black", "Pink"],
                    material: "Leather",
                    stock: 30,
                    imageUrls: [
                        "https://example.com/images/sandals3.jpg",
                        "https://example.com/images/sandals4.jpg"
                    ],
                    rating: 4.5,
                    reviews: 50
                }
            ]
        },
        shoes: {
            url: "https://www.amazon.in/Women-Shoes-Collection/dp/B09Q1G58X8",  // Unique URL for shoes category
            products: [
                {
                    id: 1,
                    name: "High Heels",
                    description: "Elegant high heels for formal events.",
                    brand: "Gucci",
                    price: 120.99,
                    category: "Formal",
                    sizes: [5, 6, 7, 8],
                    colors: ["Black", "Red"],
                    material: "Leather",
                    stock: 10,
                    imageUrls: [
                        "https://pixabay.com/illustrations/ai-generated-shoe-womens-shoe-8802531/"
                    ],
                    rating: 4.7,
                    reviews: 90
                }
            ]
        }
    },
    men: {
        sports: {
            url: "https://www.example.com/sports-shoes",  // Unique URL for sports category
            products: [
                {
                    id: 3,
                    name: "Running Shoes",
                    description: "Lightweight running shoes with breathable material.",
                    brand: "Adidas",
                    price: 89.99,
                    category: "Sports",
                    sizes: [7, 8, 9, 10, 11],
                    colors: ["Blue", "Black"],
                    material: "Synthetic",
                    stock: 20,
                    imageUrls: [
                        "https://example.com/images/runningshoes1.jpg",
                        "https://example.com/images/runningshoes2.jpg"
                    ],
                    rating: 4.5,
                    reviews: 150
                }
            ]
        },
        formal: {
            url: "https://www.example.com/formal-shoes",  // Unique URL for formal shoes category
            products: [
                {
                    id: 4,
                    name: "Formal Leather Shoes",
                    description: "Stylish leather shoes perfect for office wear.",
                    brand: "Clarks",
                    price: 99.99,
                    category: "Formal",
                    sizes: [7, 8, 9, 10],
                    colors: ["Black", "Brown"],
                    material: "Leather",
                    stock: 15,
                    imageUrls: [
                        "https://example.com/images/formalshoes1.jpg",
                        "https://example.com/images/formalshoes2.jpg"
                    ],
                    rating: 4.6,
                    reviews: 95
                }
            ]
        }
    },
    kids: {
        casual: {
            url: "https://www.example.com/kids-casual-shoes",  // Unique URL for kids casual shoes
            products: [
                {
                    id: 5,
                    name: "Light-Up Sneakers",
                    description: "Fun sneakers with light-up soles.",
                    brand: "Sketchers",
                    price: 49.99,
                    category: "Casual",
                    sizes: [1, 2, 3, 4],
                    colors: ["Pink", "Blue", "Green"],
                    material: "Fabric",
                    stock: 30,
                    imageUrls: [
                        "https://example.com/images/lightupsneakers1.jpg",
                        "https://example.com/images/lightupsneakers2.jpg"
                    ],
                    rating: 4.9,
                    reviews: 200
                }
            ]
        },
        sandals: {
            url: "https://www.example.com/kids-sandals",  // Unique URL for kids sandals category
            products: [
                {
                    id: 6,
                    name: "Sports Sandals",
                    description: "Durable sandals for active kids.",
                    brand: "Puma",
                    price: 29.99,
                    category: "Sports",
                    sizes: [10, 11, 12],
                    colors: ["Gray", "Blue"],
                    material: "Rubber",
                    stock: 40,
                    imageUrls: [
                        "https://example.com/images/sportssandals1.jpg",
                        "https://example.com/images/sportssandals2.jpg"
                    ],
                    rating: 4.7,
                    reviews: 110
                }
            ]
        }
    }
};

export default footwear;
