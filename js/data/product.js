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
    {
        id: 9,
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
            "men/formal/img1.jpg",
            "https://example.com/images/sandals4.jpg"
        ],
        rating: 4.5,
        reviews: 50,
        subcategoryId: 2
    },
    {
        id: 3,
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
            "men/formal/img2.jpg",
            "https://pixabay.com/illustrations/ai-generated-shoe-womens-shoe-8802531/"
        ],
        rating: 4.7,
        reviews: 90,
        subcategoryId: 2
    },
    {
        id: 4,
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
            "men/formal/img3.jpg",
            "https://example.com/images/runningshoes2.jpg"
        ],
        rating: 4.5,
        reviews: 150,
        subcategoryId: 2
    },
    {
        id: 5,
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
            "men/formal/img4.jpg",
            "https://example.com/images/formalshoes2.jpg"
        ],
        rating: 4.6,
        reviews: 95,
        subcategoryId: 2
    },
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
            "men/formal/img5.jpg",
            "https://example.com/images/lightupsneakers2.jpg"
        ],
        rating: 4.9,
        reviews: 200,
        subcategoryId: 2
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
            "men/formal/img6.jpg",
            "https://example.com/images/sportssandals2.jpg"
        ],
        rating: 4.7,
        reviews: 110,
        subcategoryId: 2
    },

    // men's sports
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
            "men/sport/img1.jpg",
            "https://example.com/images/sportssandals2.jpg"
        ],
        rating: 4.7,
        reviews: 110,
        subcategoryId: 3
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
            "men/sport/img2.jpg",
            "https://example.com/images/sportssandals2.jpg"
        ],
        rating: 4.7,
        reviews: 110,
        subcategoryId: 3
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
            "men/sport/img3.jpg",
            "https://example.com/images/sportssandals2.jpg"
        ],
        rating: 4.7,
        reviews: 110,
        subcategoryId: 3
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
            "men/sport/img4.jpg",
            "https://example.com/images/sportssandals2.jpg"
        ],
        rating: 4.7,
        reviews: 110,
        subcategoryId: 3
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
            "men/sport/img5.jpg",
            "https://example.com/images/sportssandals2.jpg"
        ],
        rating: 4.7,
        reviews: 110,
        subcategoryId: 3
    },

    // men's sandal
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
            "men/sandal/img1.jpg",
            "https://example.com/images/sportssandals2.jpg"
        ],
        rating: 4.7,
        reviews: 110,
        subcategoryId: 4
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
            "men/sandal/img2.jpg",
            "https://example.com/images/sportssandals2.jpg"
        ],
        rating: 4.7,
        reviews: 110,
        subcategoryId: 4
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
            "men/sandal/img3.jpg",
            "https://example.com/images/sportssandals2.jpg"
        ],
        rating: 4.7,
        reviews: 110,
        subcategoryId: 4
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
            "men/sandal/img4.jpg",
            "https://example.com/images/sportssandals2.jpg"
        ],
        rating: 4.7,
        reviews: 110,
        subcategoryId: 4
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
            "men/sandal/img5.jpg",
            "https://example.com/images/sportssandals2.jpg"
        ],
        rating: 4.7,
        reviews: 110,
        subcategoryId: 4
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
            "men/formal/img6.jpg",
            "https://example.com/images/sportssandals2.jpg"
        ],
        rating: 4.7,
        reviews: 110,
        subcategoryId: 4
    },

    //Men's flip-flop
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
            "men/flipflop/img1.jpg",
            "https://example.com/images/sportssandals2.jpg"
        ],
        rating: 4.7,
        reviews: 110,
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
            "men/flipflop/img2.jpg",
            "https://example.com/images/sportssandals2.jpg"
        ],
        rating: 4.7,
        reviews: 110,
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
            "men/flipflop/img3.jpg",
            "https://example.com/images/sportssandals2.jpg"
        ],
        rating: 4.7,
        reviews: 110,
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
            "men/flipflop/img4.jpg",
            "https://example.com/images/sportssandals2.jpg"
        ],
        rating: 4.7,
        reviews: 110,
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
            "men/flipflop/img5.jpg",
            "https://example.com/images/sportssandals2.jpg"
        ],
        rating: 4.7,
        reviews: 110,
        subcategoryId: 5
    },

    //Men's crocs
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
            "men/crocs/img1.jpg",
            "https://example.com/images/sportssandals2.jpg"
        ],
        rating: 4.7,
        reviews: 110,
        subcategoryId: 6
    },{
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
            "men/crocs/img2.jpg",
            "https://example.com/images/sportssandals2.jpg"
        ],
        rating: 4.7,
        reviews: 110,
        subcategoryId: 6
    },{
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
            "men/crocs/img3.jpg",
            "https://example.com/images/sportssandals2.jpg"
        ],
        rating: 4.7,
        reviews: 110,
        subcategoryId: 6
    },{
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
            "men/crocs/img4.jpg",
            "https://example.com/images/sportssandals2.jpg"
        ],
        rating: 4.7,
        reviews: 110,
        subcategoryId: 6
    },

    // Women's casual
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
            "women/casual/img1.jpg",
            "https://example.com/images/sportssandals2.jpg"
        ],
        rating: 4.7,
        reviews: 110,
        subcategoryId: 7
    },{
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
            "women/casual/img2.jpg",
            "https://example.com/images/sportssandals2.jpg"
        ],
        rating: 4.7,
        reviews: 110,
        subcategoryId: 7
    },{
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
            "women/casual/img3.jpg",
            "https://example.com/images/sportssandals2.jpg"
        ],
        rating: 4.7,
        reviews: 110,
        subcategoryId: 7
    },{
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
            "women/casual/img4.jpg",
            "https://example.com/images/sportssandals2.jpg"
        ],
        rating: 4.7,
        reviews: 110,
        subcategoryId: 7
    },{
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
            "women/casual/img5.jpg",
            "https://example.com/images/sportssandals2.jpg"
        ],
        rating: 4.7,
        reviews: 110,
        subcategoryId: 7
    },{
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
            "women/casual/img6.jpg",
            "https://example.com/images/sportssandals2.jpg"
        ],
        rating: 4.7,
        reviews: 110,
        subcategoryId: 7
    },

    // Women's sports
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
            "women/sport/img1.jpg",
            "https://example.com/images/sportssandals2.jpg"
        ],
        rating: 4.7,
        reviews: 110,
        subcategoryId: 8
    },{
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
            "women/sport/img2.jpg",
            "https://example.com/images/sportssandals2.jpg"
        ],
        rating: 4.7,
        reviews: 110,
        subcategoryId: 8
    },{
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
            "women/sport/img3.jpg",
            "https://example.com/images/sportssandals2.jpg"
        ],
        rating: 4.7,
        reviews: 110,
        subcategoryId: 8
    },{
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
            "women/sport/img4.jpg",
            "https://example.com/images/sportssandals2.jpg"
        ],
        rating: 4.7,
        reviews: 110,
        subcategoryId: 8
    },{
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
            "women/sport/img5.jpg",
            "https://example.com/images/sportssandals2.jpg"
        ],
        rating: 4.7,
        reviews: 110,
        subcategoryId: 8
    },{
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
            "women/sport/img6.jpg",
            "https://example.com/images/sportssandals2.jpg"
        ],
        rating: 4.7,
        reviews: 110,
        subcategoryId: 8
    },
    // women's sneakers
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
            "women/sneaker/img1.jpg",
            "https://example.com/images/sportssandals2.jpg"
        ],
        rating: 4.7,
        reviews: 110,
        subcategoryId: 9
    },{
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
            "women/sneaker/img2.jpg",
            "https://example.com/images/sportssandals2.jpg"
        ],
        rating: 4.7,
        reviews: 110,
        subcategoryId: 9
    },{
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
            "women/sneaker/img3.jpg",
            "https://example.com/images/sportssandals2.jpg"
        ],
        rating: 4.7,
        reviews: 110,
        subcategoryId: 9
    },{
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
            "women/sneaker/img4.jpg",
            "https://example.com/images/sportssandals2.jpg"
        ],
        rating: 4.7,
        reviews: 110,
        subcategoryId: 9
    },{
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
            "women/sneaker/img5.jpg",
            "https://example.com/images/sportssandals2.jpg"
        ],
        rating: 4.7,
        reviews: 110,
        subcategoryId: 9
    },{
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
            "women/sneaker/img6.jpg",
            "https://example.com/images/sportssandals2.jpg"
        ],
        rating: 4.7,
        reviews: 110,
        subcategoryId: 9
    },

    //women's filp-flop
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
            "women/flipflop/img1.jpg",
            "https://example.com/images/sportssandals2.jpg"
        ],
        rating: 4.7,
        reviews: 110,
        subcategoryId: 10
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
            "women/flipflop/img2.jpg",
            "https://example.com/images/sportssandals2.jpg"
        ],
        rating: 4.7,
        reviews: 110,
        subcategoryId: 10
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
            "women/flipflop/img3.jpg",
            "https://example.com/images/sportssandals2.jpg"
        ],
        rating: 4.7,
        reviews: 110,
        subcategoryId: 10
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
            "women/flipflop/img4.jpg",
            "https://example.com/images/sportssandals2.jpg"
        ],
        rating: 4.7,
        reviews: 110,
        subcategoryId: 10
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
            "women/flipflop/img5.jpg",
            "https://example.com/images/sportssandals2.jpg"
        ],
        rating: 4.7,
        reviews: 110,
        subcategoryId: 10
    },

    // women's Crocs
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
            "women/crocs/img1.jpg",
            "https://example.com/images/sportssandals2.jpg"
        ],
        rating: 4.7,
        reviews: 110,
        subcategoryId: 11
    }, {
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
            "women/crocs/img2.jpg",
            "https://example.com/images/sportssandals2.jpg"
        ],
        rating: 4.7,
        reviews: 110,
        subcategoryId: 11
    }, {
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
            "women/crocs/img3.jpg",
            "https://example.com/images/sportssandals2.jpg"
        ],
        rating: 4.7,
        reviews: 110,
        subcategoryId: 11
    }, {
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
            "women/crocs/img4.jpg",
            "https://example.com/images/sportssandals2.jpg"
        ],
        rating: 4.7,
        reviews: 110,
        subcategoryId: 11
    }, {
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
            "women/crocs/img5.jpg",
            "https://example.com/images/sportssandals2.jpg"
        ],
        rating: 4.7,
        reviews: 110,
        subcategoryId: 11
    },
    // women's high-heels
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
            "women/crocs/img5.jpg",
            "https://example.com/images/sportssandals2.jpg"
        ],
        rating: 4.7,
        reviews: 110,
        subcategoryId: 11
    },



];

export default products;
