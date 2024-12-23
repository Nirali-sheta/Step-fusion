const products = [
    // mens sneakers
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
            "men/sneakers/img1.jpg"
        ],
        rating: 4.4,
        reviews: 75,
        subcategoryId: 1
    },
    {
        id: 2,
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
            "men/sneakers/img2.jpg"
        ],
        rating: 4.4,
        reviews: 75,
        subcategoryId: 1
    },
    {
        id: 3,
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
            "men/sneakers/img3.jpg"
        ],
        rating: 4.4,
        reviews: 75,
        subcategoryId: 1
    },
    {
        id: 4,
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
            "men/sneakers/img4.jpg"
        ],
        rating: 4.4,
        reviews: 75,
        subcategoryId: 1
    },
    {
        id: 5,
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
            "men/sneakers/img5.jpg"
        ],
        rating: 4.4,
        reviews: 75,
        subcategoryId: 1
    },
    {
        id: 6,
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
            "men/sneakers/img6.jpg"
        ],
        rating: 4.4,
        reviews: 75,
        subcategoryId: 1
    },
    {
        id: 7,
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
            "men/sneakers/img7.jpg"
        ],
        rating: 4.4,
        reviews: 75,
        subcategoryId: 1
    },
    {
        id: 8,
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
            "men/sneakers/Mens Prada.jpeg"
        ],
        rating: 4.4,
        reviews: 75,
        subcategoryId: 1
    },

    // men's formal
    // {
    //     id: 9,
    //     name: "Stylish Sandals",
    //     description: "Fashionable sandals for a chic look.",
    //     brand: "Mosac",
    //     price: 39.99,
    //     category: "Casual",
    //     sizes: [6, 7, 8],
    //     colors: ["Black", "Pink"],
    //     material: "Leather",
    //     stock: 30,
    //     imageUrls: [
    //         "home3.jpg",
    //         "https://example.com/images/sandals4.jpg"
    //     ],
    //     rating: 4.5,
    //     reviews: 50,
    //     subcategoryId: 1
    // },
    // {
    //     id: 3,
    //     name: "High Heels",
    //     description: "Elegant high heels for formal events.",
    //     brand: "Gucci",
    //     price: 120.99,
    //     category: "Formal",
    //     sizes: [5, 6, 7, 8],
    //     colors: ["Black", "Red"],
    //     material: "Leather",
    //     stock: 10,
    //     imageUrls: [
    //         "home3.jpg",
    //         "https://pixabay.com/illustrations/ai-generated-shoe-womens-shoe-8802531/"
    //     ],
    //     rating: 4.7,
    //     reviews: 90,
    //     subcategoryId: 1
    // },
    // {
    //     id: 4,
    //     name: "Running Shoes",
    //     description: "Lightweight running shoes with breathable material.",
    //     brand: "Adidas",
    //     price: 89.99,
    //     category: "Sports",
    //     sizes: [7, 8, 9, 10, 11],
    //     colors: ["Blue", "Black"],
    //     material: "Synthetic",
    //     stock: 20,
    //     imageUrls: [
    //         "home3.jpg",
    //         "https://example.com/images/runningshoes2.jpg"
    //     ],
    //     rating: 4.5,
    //     reviews: 150,
    //     subcategoryId: 1
    // },
    // {
    //     id: 5,
    //     name: "Formal Leather Shoes",
    //     description: "Stylish leather shoes perfect for office wear.",
    //     brand: "Clarks",
    //     price: 99.99,
    //     category: "Formal",
    //     sizes: [7, 8, 9, 10],
    //     colors: ["Black", "Brown"],
    //     material: "Leather",
    //     stock: 15,
    //     imageUrls: [
    //         "home3.jpg",
    //         "https://example.com/images/formalshoes2.jpg"
    //     ],
    //     rating: 4.6,
    //     reviews: 95,
    //     subcategoryId: 4
    // },
    {
        id: 6,
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
            "home3.jpg",
            "https://example.com/images/lightupsneakers2.jpg"
        ],
        rating: 4.9,
        reviews: 200,
        subcategoryId: 5
    },
    {
        id: 7,
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
            "home3.jpg",
            "https://example.com/images/sportssandals2.jpg"
        ],
        rating: 4.7,
        reviews: 110,
        subcategoryId: 6
    }
];

export default products;
