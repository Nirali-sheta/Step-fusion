const products = [
    // mens sneakers
    {
        id: 1,
        name: "Sneakers for men",
        description: "Comfortable for daily wear.",
        brand: "Addidas",
        price: 4500,
        category: "Sneakers",
        sizes: [5, 6, 7, 8, 9],
        colors: ["Brown", "Beige"],
        material: "Synthetic",
        stock: 25,
        imageUrls: [
            "men/sneakers/img1.jpg"
        ],
        rating: 4.5,
        reviews: 75,
        subcategoryId: 1
    },
    {
        id: 2,
        name: "Casual sneaker",
        description: "Comfortable for daily wear.",
        brand: "Addidas",
        price: 999,
        category: "Sneakers",
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
        name: "Comfortable sneakers",
        description: "Comfortable sneakers for stylish look.",
        brand: "Hush Puppies",
        price: 4599,
        category: "Sneakers",
        sizes: [5, 6, 7],
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
        name: "Casual wear",
        description: "Comfortable for daily wear.",
        brand: "Skechers",
        price: 1259,
        category: "Sneakers",
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
        name: "Sneakers for men",
        description: "Comfortable for daily wear.",
        brand: "Addidas",
        price: 4500,
        category: "Sneakers",
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
        name: "Casual sneaker",
        description: "Comfortable for daily wear.",
        brand: "Addidas",
        price: 999,
        category: "Sneakers",
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
        name: "Comfortable sneakers",
        description: "Comfortable sneakers for stylish look.",
        brand: "Hush Puppies",
        price: 4599,
        category: "Sneakers",
        sizes: [5, 6, 7],
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
        name: "Casual wear",
        description: "Comfortable for daily wear.",
        brand: "Skechers",
        price: 1259,
        category: "Sneakers",
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
        name: "Leather formal",
        description: "Fashionable formal for a chic look.",
        brand: "Lee cooper",
        price: 3999,
        category: "Formal",
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
        id: 10,
        name: "Blue formal",
        description: "Stylish leather for men",
        brand: "Bata",
        price: 4999,
        category: "Formal",
        sizes: [10, 11, 12],
        colors: ["Gray", "Blue"],
        material: "Leather",
        stock: 40,
        imageUrls: [
            "men/formal/img2.jpg",
            "https://pixabay.com/illustrations/ai-generated-shoe-womens-shoe-8802531/"
        ],
        rating: 4.7,
        reviews: 90,
        subcategoryId: 2
    },
    {
        id: 11,
        name: "Leather black",
        description: "Stylish and comfortable leather for men",
        brand: "Bata",
        price: 3999,
        category: "Formal",
        sizes: [10, 11, 12],
        colors: ["Gray", "Blue"],
        material: "Leather",
        stock: 40,
        imageUrls: [
            "men/formal/img3.jpg",
            "https://example.com/images/runningshoes2.jpg"
        ],
        rating: 4.5,
        reviews: 150,
        subcategoryId: 2
    },
    {
        id: 12,
        name: "Leather simple",
        description: "Stylish leather for men",
        brand: "Lee cooper",
        price: 1999,
        category: "Formal",
        sizes: [10, 11, 12],
        colors: ["Gray", "Blue"],
        material: "Leather",
        stock: 40,
        imageUrls: [
            "men/formal/img4.jpg",
            "https://example.com/images/formalshoes2.jpg"
        ],
        rating: 4.6,
        reviews: 95,
        subcategoryId: 2
    },
    {
        id: 13,
        name: "Leather buckled",
        description: "Stylish buckled leather for men",
        brand: "Lee cooper",
        price: 3999,
        category: "Formal",
        sizes: [10, 11, 12],
        colors: ["Gray", "Blue"],
        material: "Leather",
        stock: 40,
        imageUrls: [
            "men/formal/img5.jpg",
            "https://example.com/images/lightupsneakers2.jpg"
        ],
        rating: 4.9,
        reviews: 200,
        subcategoryId: 2
    },
    {
        id: 14,
        name: "Buckeled dark brown",
        description: "Stylish buckled leather for men in dark color",
        brand: "Bata",
        price: 2999,
        category: "Formal",
        sizes: [10, 11, 12],
        colors: ["Gray", "Blue"],
        material: "Leather",
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
        id: 15,
        name: "Sports gray",
        description: "Shoes for daily comfort wear.",
        brand: "Puma",
        price: 2999,
        category: "Sports",
        sizes: [10, 11, 12],
        colors: ["Gray", "Blue"],
        material: "Synthetic",
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
        id: 16,
        name: "Blue Sports shoe",
        description: "Shoes for daily comfort wear.",
        brand: "Fila",
        price: 4999,
        category: "Sports",
        sizes: [10, 11, 12],
        colors: ["Gray", "Blue"],
        material: "Synthetic",
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
        id: 17,
        name: "Sports black",
        description: "Best shoes for running or gyming.",
        brand: "Fila",
        price: 4999,
        category: "Sports",
        sizes: [10, 11, 12],
        colors: ["Gray", "Blue"],
        material: "Synthetic",
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
        id: 18,
        name: "White shoe",
        description: "Stylish and comfortable for chic look.",
        brand: "Puma",
        price: 2999,
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
        id: 19,
        name: "Sports yellow shoe",
        description: "Stylish yellow sport shoes.",
        brand: "Fila",
        price: 1999,
        category: "Sports",
        sizes: [10, 11, 12],
        colors: ["Gray", "Blue"],
        material: "Synthetic",
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
        id: 20,
        name: "Formal Sandals",
        description: "Durable sandals for formal look.",
        brand: "Bata",
        price: 999,
        category: "Sandal",
        sizes: [10, 11, 12],
        colors: ["Gray", "Blue"],
        material: "Leather",
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
        id: 21,
        name: "Sports Sandals",
        description: "Durable sandals for daily look.",
        brand: "Bata",
        price: 999,
        category: "Sandal",
        sizes: [10, 11, 12],
        colors: ["Gray", "Blue"],
        material: "Velvet",
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
        id: 22,
        name: "Sports Sandals",
        description: "Durable sandals for daily wear.",
        brand: "Flite",
        price: 599,
        category: "Sandal",
        sizes: [10, 11, 12],
        colors: ["Gray", "Blue"],
        material: "Plastic",
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
        id: 23,
        name: "Black Sandals",
        description: "Durable sandals for men.",
        brand: "Flite",
        price: 799,
        category: "Sandal",
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
        id: 24,
        name: "Leather Sandals",
        description: "Leather sandals for men.",
        brand: "Bata",
        price: 999,
        category: "Sandal",
        sizes: [10, 11, 12],
        colors: ["Gray", "Blue"],
        material: "Leather",
        stock: 40,
        imageUrls: [
            "men/sandal/img5.jpg",
            "https://example.com/images/sportssandals2.jpg"
        ],
        rating: 4.7,
        reviews: 110,
        subcategoryId: 4
    },

    //Men's flip-flop
    {
        id: 26,
        name: "Leather Flipflop",
        description: "Stylish daily wear flip flop.",
        brand: "Puma",
        price: 899,
        category: "Flip flop",
        sizes: [10, 11, 12],
        colors: ["Gray", "Blue"],
        material: "Leather",
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
        id: 27,
        name: "Leather brown",
        description: "Stylish daily wear flip flop.",
        brand: "Bata",
        price: 1099,
        category: "Flip flop",
        sizes: [10, 11, 12],
        colors: ["Gray", "Blue"],
        material: "Leather",
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
        id: 28,
        name: "Leather light",
        description: "Stylish wear flip flop.",
        brand: "Lee cooper",
        price: 1899,
        category: "Flip flop",
        sizes: [10, 11, 12],
        colors: ["Gray", "Blue"],
        material: "Leather",
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
        id: 29,
        name: "White flipflop",
        description: "Durable flipflop for men.",
        brand: "Nike",
        price: 2999,
        category: "Flip flop",
        sizes: [10, 11, 12],
        colors: ["Gray", "Blue"],
        material: "Plastic",
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
        id: 30,
        name: "Blue flipflop",
        description: "Durable flipflop for men.",
        brand: "Nike",
        price: 2999,
        category: "Flipflop",
        sizes: [10, 11, 12],
        colors: ["Gray", "Blue"],
        material: "Plastic",
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
        id: 31,
        name: "Solid crocs",
        description: "Durable and good quality crocs.",
        brand: "Crocs",
        price: 2999,
        category: "Crocs",
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
        id: 32,
        name: "Gray crocs",
        description: "Durable and good quality crocs.",
        brand: "Crocs",
        price: 1999,
        category: "Crocs",
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
        id: 33,
        name: "Gray crocs",
        description: "Good quality crocs.",
        brand: "Crocs",
        price: 999,
        category: "Crocs",
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
        id: 34,
        name: "Crocs for men",
        description: "Durable crocs and comfortable also.",
        brand: "Crocs",
        price: 1099,
        category: "Crocs",
        sizes: [10, 11, 12],
        colors: ["Gray", "Blue"],
        material: "Plastic",
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
        id: 35,
        name: "Casual Sandals",
        description: "Durable sandals for women.",
        brand: "Bata",
        price: 899,
        category: "Casual",
        sizes: [10, 11, 12],
        colors: ["Gray", "Blue"],
        material: "Soft-leather",
        stock: 40,
        imageUrls: [
            "women/casual/img1.jpg",
            "https://example.com/images/sportssandals2.jpg"
        ],
        rating: 4.7,
        reviews: 110,
        subcategoryId: 7
    },{
        id: 36,
        name: "Step heeled Sandals",
        description: "Stylish sandal in lilac color.",
        brand: "Bata",
        price: 1999,
        category: "Casual",
        sizes: [10, 11, 12],
        colors: ["Gray", "Blue"],
        material: "soft-leather",
        stock: 40,
        imageUrls: [
            "women/casual/img2.jpg",
            "https://example.com/images/sportssandals2.jpg"
        ],
        rating: 4.7,
        reviews: 110,
        subcategoryId: 7
    },{
        id: 37,
        name: "White flat",
        description: "Stylish flat in white color.",
        brand: "Metro",
        price: 799,
        category: "Casual",
        sizes: [10, 11, 12],
        colors: ["Gray", "Blue"],
        material: "soft-leather",
        stock: 40,
        imageUrls: [
            "women/casual/img3.jpg",
            "https://example.com/images/sportssandals2.jpg"
        ],
        rating: 4.7,
        reviews: 110,
        subcategoryId: 7
    },{
        id: 38,
        name: "Sky flat",
        description: "Stylish flat in sky color.",
        brand: "Metro",
        price: 799,
        category: "Casual",
        sizes: [10, 11, 12],
        colors: ["Gray", "Blue"],
        material: "Soft-leather",
        stock: 40,
        imageUrls: [
            "women/casual/img4.jpg",
            "https://example.com/images/sportssandals2.jpg"
        ],
        rating: 4.7,
        reviews: 110,
        subcategoryId: 7
    },{
        id: 39,
        name: "Peach Sandals",
        name: "Peach flat",
        description: "Stylish flat in white color.",
        brand: "Metro",
        price: 799,
        category: "Casual",
        sizes: [10, 11, 12],
        colors: ["Gray", "Blue"],
        material: "Soft-leather",
        stock: 40,
        imageUrls: [
            "women/casual/img5.jpg",
            "https://example.com/images/sportssandals2.jpg"
        ],
        rating: 4.7,
        reviews: 110,
        subcategoryId: 7
    },{
        id: 40,
        name: "Pearled flat",
        description: "Stylish flat in pearled sandal.",
        brand: "Metro",
        price: 1099,
        category: "Casual",
        sizes: [10, 11, 12],
        colors: ["Gray", "Blue"],
        material: "Soft-leather",
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
        id: 41,
        name: "White sports",
        description: "Shoes for daily comfort wear.",
        brand: "Puma",
        price: 999,
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
        id: 42,
        name: "Sports shoes",
        description: "Best shoes for running or gyming.",
        brand: "Fila",
        price: 1999,
        category: "Sports",
        sizes: [10, 11, 12],
        colors: ["Gray", "Blue"],
        material: "Soft-Leather",
        stock: 40,
        imageUrls: [
            "women/sport/img2.jpg",
            "https://example.com/images/sportssandals2.jpg"
        ],
        rating: 4.7,
        reviews: 110,
        subcategoryId: 8
    },{
        id: 43,
        name: "Sports for running",
        description: "Best shoes for running or gyming.",
        brand: "Sneakers",
        price: 1099,
        category: "Sports",
        sizes: [10, 11, 12],
        colors: ["Gray", "Blue"],
        material: "Synthetic",
        stock: 40,
        imageUrls: [
            "women/sport/img3.jpg",
            "https://example.com/images/sportssandals2.jpg"
        ],
        rating: 4.7,
        reviews: 110,
        subcategoryId: 8
    },{
        id: 44,
        name: "Lilac sports",
        description: "Shoes for chic look",
        brand: "Puma",
        price: 2999,
        category: "Sports",
        sizes: [10, 11, 12],
        colors: ["Gray", "Blue"],
        material: "Soft-leather",
        stock: 40,
        imageUrls: [
            "women/sport/img4.jpg",
            "https://example.com/images/sportssandals2.jpg"
        ],
        rating: 4.7,
        reviews: 110,
        subcategoryId: 8
    },{
        id: 45,
        name: "Sports Shoe for women",
        description: "Durable shoes for daily wear.",
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
        id: 46,
        name: "Sports shoe brown",
        description: "Durable shoes for daily wear.",
        brand: "Sneakers",
        price: 29.99,
        category: "Sports",
        sizes: [10, 11, 12],
        colors: ["Gray", "Blue"],
        material: "Soft-leather",
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
        id: 47,
        name: "Women sneakers",
        description: "Brown sneakers for daily wear.",
        brand: "Puma",
        price: 899,
        category: "Sneakers",
        sizes: [10, 11, 12],
        colors: ["Gray", "Blue"],
        material: "Soft-leather",
        stock: 40,
        imageUrls: [
            "women/sneaker/img1.jpg",
            "https://example.com/images/sportssandals2.jpg"
        ],
        rating: 4.7,
        reviews: 110,
        subcategoryId: 9
    },{
        id: 48,
        name: "Women sneakers",
        description: "White sneakers for daily wear.",
        brand: "sneakers",
        price: 999,
        category: "Sneakers",
        sizes: [10, 11, 12],
        colors: ["Gray", "Blue"],
        material: "Soft-leather",
        stock: 40,
        imageUrls: [
            "women/sneaker/img2.jpg",
            "https://example.com/images/sportssandals2.jpg"
        ],
        rating: 4.7,
        reviews: 110,
        subcategoryId: 9
    },{
        id: 49,
        name: "Casual sneakers",
        description: "White sneakers for daily wear.",
        brand: "Puma",
        price: 1099,
        category: "Sneakers",
        sizes: [10, 11, 12],
        colors: ["Gray", "Blue"],
        material: "Soft-leather",
        stock: 40,
        imageUrls: [
            "women/sneaker/img3.jpg",
            "https://example.com/images/sportssandals2.jpg"
        ],
        rating: 4.7,
        reviews: 110,
        subcategoryId: 9
    },{
        id: 50,
        name: "Sports Sneakers",
        description: "White sneakers for daily wear.",
        brand: "U.S polo",
        price: 1299,
        category: "Sneakers",
        sizes: [10, 11, 12],
        colors: ["Gray", "Blue"],
        material: "Soft-leather",
        stock: 40,
        imageUrls: [
            "women/sneaker/img4.jpg",
            "https://example.com/images/sportssandals2.jpg"
        ],
        rating: 4.7,
        reviews: 110,
        subcategoryId: 9
    },{
        id: 51,
        name: "Brown sneakers",
        description: "Brown sneakers for daily wear.",
        brand: "Puma",
        price: 2999,
        category: "Sports",
        sizes: [10, 11, 12],
        colors: ["Gray", "Blue"],
        material: "Soft-leather",
        stock: 40,
        imageUrls: [
            "women/sneaker/img5.jpg",
            "https://example.com/images/sportssandals2.jpg"
        ],
        rating: 4.7,
        reviews: 110,
        subcategoryId: 9
    },{
        id: 52,
        name: "Brown sneakers",
        description: "Brown sneakers for daily wear.",
        brand: "Puma",
        price: 1999,
        category: "Sports",
        sizes: [10, 11, 12],
        colors: ["Gray", "Blue"],
        material: "Soft-leather",
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
        id: 53,
        name: "White flipflop",
        description: "Durable flip flop for women.",
        brand: "Puma",
        price: 999,
        category: "Flip flop",
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
        id: 54,
        name: "White flipflop",
        description: "White chained flip flop for women.",
        brand: "Metro",
        price: 999,
        category: "Flip flop",
        sizes: [10, 11, 12],
        colors: ["Gray", "Blue"],
        material: "Soft-leather",
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
        id: 55,
        name: "Sky flipflop",
        description: "Sky colored flip flop for daily wear.",
        brand: "Metro",
        price: 799,
        category: "flip flop",
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
        id: 56,
        name: "Sky flipflop",
        description: "Sky colored flip flop for daily wear.",
        brand: "Metro",
        price: 799,
        category: "Flip-flop",
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
        id: 57,
        name: "Cute white flipflop",
        description: "White colored flip flop for daily wear.",
        brand: "Zudio",
        price: 799,
        category: "Flip-flop",
        sizes: [10, 11, 12],
        colors: ["Gray", "Blue"],
        material: "Plastic",
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
        id: 58,
        name: "Brown Crocs",
        description: "Crocs for daily wear.",
        brand: "Crocs",
        price: 899,
        category: "Crocs",
        sizes: [10, 11, 12],
        colors: ["Gray", "Blue"],
        material: "Plastic",
        stock: 40,
        imageUrls: [
            "women/crocs/img1.jpg",
            "https://example.com/images/sportssandals2.jpg"
        ],
        rating: 4.7,
        reviews: 110,
        subcategoryId: 11
    }, {
        id: 59,
        name: "White charms crocs",
        description: "crocs for daily wear.",
        brand: "Crocs",
        price: 899,
        category: "Crocs",
        sizes: [10, 11, 12],
        colors: ["Gray", "Blue"],
        material: "Plastic",
        stock: 40,
        imageUrls: [
            "women/crocs/img2.jpg",
            "https://example.com/images/sportssandals2.jpg"
        ],
        rating: 4.7,
        reviews: 110,
        subcategoryId: 11
    }, {
        id: 60,
        name: "Pink crocs",
        description: "Crocs for daily wear.",
        brand: "Crocs",
        price: 599,
        category: "Crocs",
        sizes: [10, 11, 12],
        colors: ["Gray", "Blue"],
        material: "Plastic",
        stock: 40,
        imageUrls: [
            "women/crocs/img3.jpg",
            "https://example.com/images/sportssandals2.jpg"
        ],
        rating: 4.7,
        reviews: 110,
        subcategoryId: 11
    }, {
        id: 61,
        name: "Yellow charms crocs",
        description: "Crocs for daily wear.",
        brand: "Crocs",
        price: 1899,
        category: "Crocs",
        sizes: [10, 11, 12],
        colors: ["Gray", "Blue"],
        material: "Plastic",
        stock: 40,
        imageUrls: [
            "women/crocs/img4.jpg",
            "https://example.com/images/sportssandals2.jpg"
        ],
        rating: 4.7,
        reviews: 110,
        subcategoryId: 11
    }, {
        id: 62,
        name: "White crocs",
        description: "Crocs for daily wear.",
        brand: "Crocs",
        price: 899,
        category: "Crocs",
        sizes: [10, 11, 12],
        colors: ["Gray", "Blue"],
        material: "Plastic",
        stock: 40,
        imageUrls: [
            "women/crocs/img5.jpg",
            "https://example.com/images/sportssandals2.jpg"
        ],
        rating: 4.7,
        reviews: 110,
        subcategoryId: 11
    },
    // women's High-heels
    {
        id: 63,
        name: "Platform heels",
        description: "Platform heels in yellow color.",
        brand: "Metro",
        price: 2999,
        category: "High-heels",
        sizes: [10, 11, 12],
        colors: ["Gray", "Blue"],
        material: "Synthetic",
        stock: 40,
        imageUrls: [
            "women/highheels/img1.jpg",
            "https://example.com/images/sportssandals2.jpg"
        ],
        rating: 4.7,
        reviews: 110,
        subcategoryId: 12
    }, {
        id: 64,
        name: "Pencil heel",
        description: "Heels for elegent view.",
        brand: "Metro",
        price: 1999,
        category: "High-heels",
        sizes: [10, 11, 12],
        colors: ["Gray", "Blue"],
        material: "Synthetic",
        stock: 40,
        imageUrls: [
            "women/highheels/img2.jpg",
            "https://example.com/images/sportssandals2.jpg"
        ],
        rating: 4.7,
        reviews: 110,
        subcategoryId: 12
    }, {
        id: 65,
        name: "Platform heel",
        description: "Heels for elegent view.",
        brand: "Metro",
        price: 2999,
        category: "High-heels",
        sizes: [10, 11, 12],
        colors: ["Gray", "Blue"],
        material: "Synthetic",
        stock: 40,
        imageUrls: [
            "women/highheels/img3.jpg",
            "https://example.com/images/sportssandals2.jpg"
        ],
        rating: 4.7,
        reviews: 110,
        subcategoryId: 12
    }, {
        id: 67,
        name: "Platform heel",
        description: "Glass heels for elegent view.",
        brand: "Metro",
        price: 1099,
        category: "High-heels",
        sizes: [10, 11, 12],
        colors: ["Gray", "Blue"],
        material: "Synthetic",
        stock: 40,
        imageUrls: [
            "women/highheels/img4.jpg",
            "https://example.com/images/sportssandals2.jpg"
        ],
        rating: 4.7,
        reviews: 110,
        subcategoryId: 12
    }, {
        id: 68,
        name: "Pencil heel",
        description: "Lilac heels for elegent view.",
        brand: "Metro",
        price: 1999,
        category: "High-heels",
        sizes: [10, 11, 12],
        colors: ["Gray", "Blue"],
        material: "Synthetic",
        stock: 40,
        imageUrls: [
            "women/highheels/img5.jpg",
            "https://example.com/images/sportssandals2.jpg"
        ],
        rating: 4.7,
        reviews: 110,
        subcategoryId: 12
    }, {
        id: 69,
        name: "Platform heel",
        description: "Blue heels for elegent view.",
        brand: "Metro",
        price: 1999,
        category: "High-heels",
        sizes: [10, 11, 12],
        colors: ["Gray", "Blue"],
        material: "Synthetic",
        stock: 40,
        imageUrls: [
            "women/highheels/img6.jpg",
            "https://example.com/images/sportssandals2.jpg"
        ],
        rating: 4.7,
        reviews: 110,
        subcategoryId: 12
    },
    //Bridal
        {
        id: 71,
        name: "Bridal heels",
        description: "Elegent heels for bridal.",
        brand: "Metro",
        price: 2999,
        category: "Bridal",
        sizes: [10, 11, 12],
        colors: ["Gray", "Blue"],
        material: "Synthetic",
        stock: 40,
        imageUrls: [
            "women/bridal/img3.jpg",
            "https://example.com/images/sportssandals2.jpg"
        ],
        rating: 4.7,
        reviews: 110,
        subcategoryId: 13
    },{
        id: 72,
        name: "Bridal heels",
        description: "Elegent heels for bridal.",
        brand: "Metro",
        price: 3999,
        category: "Bridal",
        sizes: [10, 11, 12],
        colors: ["Gray", "Blue"],
        material: "Synthetic",
        stock: 40,
        imageUrls: [
            "women/bridal/img4.jpg",
            "https://example.com/images/sportssandals2.jpg"
        ],
        rating: 4.7,
        reviews: 110,
        subcategoryId: 13
    },{
        id: 73,
        name: "Bridal sandal",
        description: "Elegent heels for bridal.",
        brand: "Metro",
        price: 1999,
        category: "Bridal",
        sizes: [10, 11, 12],
        colors: ["Gray", "Blue"],
        material: "Synthetic",
        stock: 40,
        imageUrls: [
            "women/bridal/img5.jpg",
            "https://example.com/images/sportssandals2.jpg"
        ],
        rating: 4.7,
        reviews: 110,
        subcategoryId: 13
    },{
        id: 74,
        name: "Bridal heels",
        description: "Elegent heels for bridal.",
        brand: "Metro",
        price: 2999,
        category: "Bridal",
        sizes: [10, 11, 12],
        colors: ["Gray", "Blue"],
        material: "Synthetic",
        stock: 40,
        imageUrls: [
            "women/bridal/img6.jpg",
            "https://example.com/images/sportssandals2.jpg"
        ],
        rating: 4.7,
        reviews: 110,
        subcategoryId: 13
    },

    //Kids sneakers
    {
        id: 75,
        name: "kid's sneakers",
        description: "Sneakers for kids",
        brand: "Puma",
        price: 599,
        category: "Sneakers",
        sizes: [10, 11, 12],
        colors: ["Gray", "Blue"],
        material: "Soft-leather",
        stock: 40,
        imageUrls: [
            "kids/sneaker/img1.jpg",
            "https://example.com/images/sportssandals2.jpg"
        ],
        rating: 4.7,
        reviews: 110,
        subcategoryId: 14
    },
    {
        id: 76,
        name: "Kid's sneakers",
        description: "Sneakers for kids",
        brand: "Firstcry",
        price: 699,
        category: "Sneakers",
        sizes: [10, 11, 12],
        colors: ["Gray", "Blue"],
        material: "Soft-leather",
        stock: 40,
        imageUrls: [
            "kids/sneaker/img2.jpg",
            "https://example.com/images/sportssandals2.jpg"
        ],
        rating: 4.7,
        reviews: 110,
        subcategoryId: 14
    },
    {
        id: 77,
        name: "Comfortable sneakers",
        description: "Sneakers for kids",
        brand: "Firstcry",
        price: 799,
        category: "Sneakers",
        sizes: [10, 11, 12],
        colors: ["Gray", "Blue"],
        material: "Soft-leather",
        stock: 40,
        imageUrls: [
            "kids/sneaker/img3.jpg",
            "https://example.com/images/sportssandals2.jpg"
        ],
        rating: 4.7,
        reviews: 110,
        subcategoryId: 14
    },
    {
        id: 78,
        name: "White sneakers",
        description: "Sneakers for kids",
        brand: "Firstcry",
        price: 899,
        category: "Sneakers",
        sizes: [10, 11, 12],
        colors: ["Gray", "Blue"],
        material: "Soft-leather",
        stock: 40,
        imageUrls: [
            "kids/sneaker/img4.jpg",
            "https://example.com/images/sportssandals2.jpg"
        ],
        rating: 4.7,
        reviews: 110,
        subcategoryId: 14
    },
    {
        id: 79,
        name: "Kid's light sneakers",
        description: "Sneakers for kids",
        brand: "Firstcry",
        price: 799,
        category: "Sneakers",
        sizes: [10, 11, 12],
        colors: ["Gray", "Blue"],
        material: "Soft-leather",
        stock: 40,
        imageUrls: [
            "kids/sneaker/img5.jpg",
            "https://example.com/images/sportssandals2.jpg"
        ],
        rating: 4.7,
        reviews: 110,
        subcategoryId: 14
    },
    {
        id: 80,
        name: "Pink sneakers",
        description: "Sneakers for kids",
        brand: "Firstcry",
        price: 499,
        category: "Sneakers",
        sizes: [10, 11, 12],
        colors: ["Gray", "Blue"],
        material: "Soft-leather",
        stock: 40,
        imageUrls: [
            "kids/sneaker/img6.jpg",
            "https://example.com/images/sportssandals2.jpg"
        ],
        rating: 4.7,
        reviews: 110,
        subcategoryId: 14
    },
    //Kids sandal
    {
        id: 81,
        name: "Brown Sandals",
        description: "Durable sandals for active kids.",
        brand: "Flite",
        price: 599,
        category: "Sandal",
        sizes: [10, 11, 12],
        colors: ["Gray", "Blue"],
        material: "Rubber",
        stock: 40,
        imageUrls: [
            "kids/sandal/img1.jpg",
            "https://example.com/images/sportssandals2.jpg"
        ],
        rating: 4.7,
        reviews: 110,
        subcategoryId: 15
    }, {
        id: 82,
        name: "White Sandals",
        description: "Durable sandals for active kids.",
        brand: "Firstcry",
        price: 599,
        category: "Sandal",
        sizes: [10, 11, 12],
        colors: ["Gray", "Blue"],
        material: "Rubber",
        stock: 40,
        imageUrls: [
            "kids/sandal/img2.jpg",
            "https://example.com/images/sportssandals2.jpg"
        ],
        rating: 4.7,
        reviews: 110,
        subcategoryId: 15
    }, {
        id: 83,
        name: "White Sandals",
        description: "Durable sandals for active kids.",
        brand: "Firstcry",
        price: 699,
        category: "Sandal",
        sizes: [10, 11, 12],
        colors: ["Gray", "Blue"],
        material: "Soft-leather",
        stock: 40,
        imageUrls: [
            "kids/sandal/img3.jpg",
            "https://example.com/images/sportssandals2.jpg"
        ],
        rating: 4.7,
        reviews: 110,
        subcategoryId: 15
    }, {
        id: 84,
        name: "Black Sandals",
        description: "Durable sandals for active kids.",
        brand: "Firstcry",
        price: 699,
        category: "Sandal",
        sizes: [10, 11, 12],
        colors: ["Gray", "Blue"],
        material: "Soft-leather",
        stock: 40,
        imageUrls: [
            "kids/sandal/img4.jpg",
            "https://example.com/images/sportssandals2.jpg"
        ],
        rating: 4.7,
        reviews: 110,
        subcategoryId: 15
    }, {
        id: 85,
        name: "White Sandals",
        description: "Durable sandals for active kids.",
        brand: "Firstcry",
        price: 599,
        category: "Sandal",
        sizes: [10, 11, 12],
        colors: ["Gray", "Blue"],
        material: "Soft-leather",
        stock: 40,
        imageUrls: [
            "kids/sandal/img5.jpg",
            "https://example.com/images/sportssandals2.jpg"
        ],
        rating: 4.7,
        reviews: 110,
        subcategoryId: 15
    }, {
        id: 86,
        name: "Colorful Sandals",
        description: "Durable sandals for active kids.",
        brand: "Firstcry",
        price: 499,
        category: "Sandal",
        sizes: [10, 11, 12],
        colors: ["Gray", "Blue"],
        material: "Soft-leather",
        stock: 40,
        imageUrls: [
            "kids/sandal/img6.jpg",
            "https://example.com/images/sportssandals2.jpg"
        ],
        rating: 4.7,
        reviews: 110,
        subcategoryId: 15
    }, {
        id: 87,
        name: "Colorful Sandals",
        description: "Durable sandals for active kids.",
        brand: "Firstcry",
        price: 399,
        category: "Sandal",
        sizes: [10, 11, 12],
        colors: ["Gray", "Blue"],
        material: "Soft-leather",
        stock: 40,
        imageUrls: [
            "kids/sandal/img7.jpg",
            "https://example.com/images/sportssandals2.jpg"
        ],
        rating: 4.7,
        reviews: 110,
        subcategoryId: 15
        },
        //kids sport
        {
        id: 88,
        name: "Sports Shoes",
        description: "Durable shoes in blue color.",
        brand: "Puma",
        price: 799,
        category: "Sports",
        sizes: [10, 11, 12],
        colors: ["Gray", "Blue"],
        material: "Synthetic",
        stock: 40,
        imageUrls: [
            "kids/sport/img1.jpg",
            "https://example.com/images/sportssandals2.jpg"
        ],
        rating: 4.7,
        reviews: 110,
        subcategoryId: 16
        },
        {
        id: 89,
        name: "Sports Shoes",
        description: "Durable shoes in gray color.",
        brand: "Puma",
        price: 699,
        category: "Sports",
        sizes: [10, 11, 12],
        colors: ["Gray", "Blue"],
        material: "Synthetic",
        stock: 40,
        imageUrls: [
            "kids/sport/img2.jpg",
            "https://example.com/images/sportssandals2.jpg"
        ],
        rating: 4.7,
        reviews: 110,
        subcategoryId: 16
        },
        {
        id: 90,
        name: "Sports black",
        description: "Durable shoes in black color.",
        brand: "Puma",
        price: 699,
        category: "Sports",
        sizes: [10, 11, 12],
        colors: ["Gray", "Blue"],
        material: "Synthetic",
        imageUrls: [
            "kids/sport/img3.jpg",
            "https://example.com/images/sportssandals2.jpg"
        ],
        rating: 4.7,
        reviews: 110,
        subcategoryId: 16
        },
        {
        id: 91,
        name: "Sports black-white",
        description: "Durable shoes in black and white color.",
        brand: "Puma",
        price: 799,
        category: "Sports",
        sizes: [10, 11, 12],
        colors: ["Gray", "Blue"],
        material: "Synthetic",
            stock: 40,
            imageUrls: [
                "kids/sport/img4.jpg",
                "https://example.com/images/sportssandals2.jpg"
            ],
            rating: 4.7,
            reviews: 110,
            subcategoryId: 16
        },
        {
            id: 92,
            name: "Sports white shoe",
        description: "Durable shoes in blue color.",
        brand: "Puma",
        price: 599,
        category: "Sports",
        sizes: [10, 11, 12],
        colors: ["Gray", "Blue"],
        material: "Synthetic",
            imageUrls: [
                "kids/sport/img5.jpg",
                "https://example.com/images/sportssandals2.jpg"
            ],
            rating: 4.7,
            reviews: 110,
            subcategoryId: 16
        },
        //kids Crocs
        {
            id: 93,
            name: "Green charms crocs",
            description: "Durable crocs for kids.",
            brand: "Crocs",
            price: 999,
            category: "Crocs",
            sizes: [10, 11, 12],
            colors: ["Gray", "Blue"],
            material: "Plastic",
            stock: 40,
            imageUrls: [
                "kids/crocs/img1.jpg",
                "https://example.com/images/sportssandals2.jpg"
            ],
            rating: 4.7,
            reviews: 110,
            subcategoryId: 17
        }, {
            id: 94,
            name: "White charms crocs",
            description: "Durable crocs for kids.",
            brand: "Crocs",
            price: 799,
            category: "Crocs",
            sizes: [10, 11, 12],
            colors: ["Gray", "Blue"],
            material: "Plastic",
            stock: 40,
            imageUrls: [
                "kids/crocs/img2.jpg",
                "https://example.com/images/sportssandals2.jpg"
            ],
            rating: 4.7,
            reviews: 110,
            subcategoryId: 17
        }, {
            id: 95,
            name: "White crocs",
            description: "Durable crocs for kids.",
            brand: "Crocs",
            price: 899,
            category: "Crocs",
            sizes: [10, 11, 12],
            colors: ["Gray", "Blue"],
            material: "Plastic",
            stock: 40,
            imageUrls: [
                "kids/crocs/img3.jpg",
                "https://example.com/images/sportssandals2.jpg"
            ],
            rating: 4.7,
            reviews: 110,
            subcategoryId: 17
        }, {
            id: 96,
            name: "Blue crocs",
            description: "Durable crocs for kids.",
            brand: "Crocs",
            price: 799,
            category: "Crocs",
            sizes: [10, 11, 12],
            colors: ["Gray", "Blue"],
            material: "Plastic",
            stock: 40,
            imageUrls: [
                "kids/crocs/img4.jpg",
                "https://example.com/images/sportssandals2.jpg"
            ],
            rating: 4.7,
            reviews: 110,
            subcategoryId: 17
        }, {
            id: 97,
            name: "Black-white crocs",
            description: "Durable crocs for kids.",
            brand: "Crocs",
            price: 699,
            category: "Crocs",
            sizes: [10, 11, 12],
            colors: ["Gray", "Blue"],
            material: "Plastic",
            imageUrls: [
                "kids/crocs/img5.jpg",
                "https://example.com/images/sportssandals2.jpg"
            ],
            rating: 4.7,
            reviews: 110,
            subcategoryId: 17
        }, {
            id: 98,
            name: "Light-green crocs",
            description: "Durable crocs for kids.",
            brand: "Crocs",
            price: 999,
            category: "Crocs",
            sizes: [10, 11, 12],
            colors: ["Gray", "Blue"],
            material: "Plastic",
            stock: 40,
            imageUrls: [
                "kids/crocs/img6.jpg",
                "https://example.com/images/sportssandals2.jpg"
            ],
            rating: 4.7,
            reviews: 110,
            subcategoryId: 17
        }
];

export default products;
