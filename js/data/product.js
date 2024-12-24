const products = [
    // mens sneakers
    {
        id: 1,
        name: "sneakers for men",
        description: "Comfortable for daily wear.",
        brand: "addidas",
        price: 4500,
        category: "sneakers",
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
        brand: "addidas",
        price: 999,
        category: "sneakers",
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
        name: "comfortable sneakers",
        description: "Comfortable sneakers for stylish look.",
        brand: "Hush Puppies",
        price: 4599,
        category: "sneakers",
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
        brand: "skechers",
        price: 1259,
        category: "sneakers",
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
        name: "sneakers for men",
        description: "Comfortable for daily wear.",
        brand: "addidas",
        price: 4500,
        category: "sneakers",
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
        brand: "addidas",
        price: 999,
        category: "sneakers",
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
        name: "comfortable sneakers",
        description: "Comfortable sneakers for stylish look.",
        brand: "Hush Puppies",
        price: 4599,
        category: "sneakers",
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
        brand: "skechers",
        price: 1259,
        category: "sneakers",
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
        name: "leather formal",
        description: "Fashionable formal for a chic look.",
        brand: "lee cooper",
        price: 3999,
        category: "formal",
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
        name: "blue formal",
        description: "stylish leather for men",
        brand: "bata",
        price: 4999,
        category: "formal",
        sizes: [10, 11, 12],
        colors: ["Gray", "Blue"],
        material: "leather",
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
        name: "leather black",
        description: "stylish and comfortable leather for men",
        brand: "bata",
        price: 3999,
        category: "formal",
        sizes: [10, 11, 12],
        colors: ["Gray", "Blue"],
        material: "leather",
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
        name: "leather simple",
        description: "stylish leather for men",
        brand: "lee cooper",
        price: 1999,
        category: "formal",
        sizes: [10, 11, 12],
        colors: ["Gray", "Blue"],
        material: "leather",
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
        name: "leather buckled",
        description: "stylish buckled leather for men",
        brand: "lee cooper",
        price: 3999,
        category: "formal",
        sizes: [10, 11, 12],
        colors: ["Gray", "Blue"],
        material: "leather",
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
        name: "buckeled dark brown",
        description: "stylish buckled leather for men in dark color",
        brand: "bata",
        price: 2999,
        category: "formal",
        sizes: [10, 11, 12],
        colors: ["Gray", "Blue"],
        material: "leather",
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
        description: "shoes for daily comfort wear.",
        brand: "Puma",
        price: 2999,
        category: "Sports",
        sizes: [10, 11, 12],
        colors: ["Gray", "Blue"],
        material: "synthetic",
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
        name: "blue Sports shoe",
        description: "shoes for daily comfort wear.",
        brand: "fila",
        price: 4999,
        category: "Sports",
        sizes: [10, 11, 12],
        colors: ["Gray", "Blue"],
        material: "synthetic",
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
        description: "best shoes for running or gyming.",
        brand: "fila",
        price: 4999,
        category: "Sports",
        sizes: [10, 11, 12],
        colors: ["Gray", "Blue"],
        material: "synthetic",
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
        name: "white shoe",
        description: "stylish and comfortable for chic look.",
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
        description: "stylish yellow sport shoes.",
        brand: "fila",
        price: 1999,
        category: "Sports",
        sizes: [10, 11, 12],
        colors: ["Gray", "Blue"],
        material: "synthetic",
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
        name: "formal Sandals",
        description: "Durable sandals for formal look.",
        brand: "bata",
        price: 999,
        category: "sandal",
        sizes: [10, 11, 12],
        colors: ["Gray", "Blue"],
        material: "leather",
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
        brand: "bata",
        price: 999,
        category: "sandal",
        sizes: [10, 11, 12],
        colors: ["Gray", "Blue"],
        material: "velvet",
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
        brand: "flite",
        price: 599,
        category: "sandal",
        sizes: [10, 11, 12],
        colors: ["Gray", "Blue"],
        material: "plastic",
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
        name: "black Sandals",
        description: "Durable sandals for men.",
        brand: "flite",
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
        name: "leather Sandals",
        description: "leather sandals for men.",
        brand: "bata",
        price: 999,
        category: "Sandal",
        sizes: [10, 11, 12],
        colors: ["Gray", "Blue"],
        material: "leather",
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
        name: "leather flipflop",
        description: "stylish daily wear flip flop.",
        brand: "Puma",
        price: 899,
        category: "flip flop",
        sizes: [10, 11, 12],
        colors: ["Gray", "Blue"],
        material: "leather",
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
        name: "leather brown",
        description: "stylish daily wear flip flop.",
        brand: "bata",
        price: 1099,
        category: "flip flop",
        sizes: [10, 11, 12],
        colors: ["Gray", "Blue"],
        material: "leather",
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
        name: "leather light",
        description: "stylish wear flip flop.",
        brand: "lee cooper",
        price: 1899,
        category: "flip flop",
        sizes: [10, 11, 12],
        colors: ["Gray", "Blue"],
        material: "leather",
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
        name: "white flipflop",
        description: "Durable flipflop for men.",
        brand: "nike",
        price: 2999,
        category: "flipflop",
        sizes: [10, 11, 12],
        colors: ["Gray", "Blue"],
        material: "plastic",
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
        name: "blue flipflop",
        description: "Durable flipflop for men.",
        brand: "nike",
        price: 2999,
        category: "flipflop",
        sizes: [10, 11, 12],
        colors: ["Gray", "Blue"],
        material: "plastic",
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
        name: "solid crocs",
        description: "Durable and good quality crocs.",
        brand: "crocs",
        price: 2999,
        category: "crocs",
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
        name: "gray crocs",
        description: "Durable and good quality crocs.",
        brand: "crocs",
        price: 1999,
        category: "crocs",
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
        name: "gray crocs",
        description: "good quality crocs.",
        brand: "crocs",
        price: 999,
        category: "crocs",
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
        name: "crocs for men",
        description: "Durable crocs and comfortable also.",
        brand: "crocs",
        price: 1099,
        category: "crocs",
        sizes: [10, 11, 12],
        colors: ["Gray", "Blue"],
        material: "plastic",
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
        name: "casual Sandals",
        description: "Durable sandals for women.",
        brand: "bata",
        price: 899,
        category: "casual",
        sizes: [10, 11, 12],
        colors: ["Gray", "Blue"],
        material: "soft-leather",
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
        name: "step heeled Sandals",
        description: "stylish sandal in lilac color.",
        brand: "",
        price: 1999,
        category: "casual",
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
        name: "white flat",
        description: "stylish flat in white color.",
        brand: "metro",
        price: 799,
        category: "casual",
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
        name: "sky flat",
        description: "stylish flat in sky color.",
        brand: "metro",
        price: 799,
        category: "casual",
        sizes: [10, 11, 12],
        colors: ["Gray", "Blue"],
        material: "soft-leather",
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
        name: "peach Sandals",
        name: "peach flat",
        description: "stylish flat in white color.",
        brand: "metro",
        price: 799,
        category: "casual",
        sizes: [10, 11, 12],
        colors: ["Gray", "Blue"],
        material: "soft-leather",
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
        name: "pearled flat",
        description: "stylish flat in pearled sandal.",
        brand: "metro",
        price: 1099,
        category: "casual",
        sizes: [10, 11, 12],
        colors: ["Gray", "Blue"],
        material: "soft-leather",
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
        name: "white sports",
        description: "shoes for daily comfort wear.",
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
        description: "best shoes for running or gyming.",
        brand: "fila",
        price: 1999,
        category: "Sports",
        sizes: [10, 11, 12],
        colors: ["Gray", "Blue"],
        material: "soft-leather",
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
        description: "best shoes for running or gyming.",
        brand: "sneakers",
        price: 1099,
        category: "Sports",
        sizes: [10, 11, 12],
        colors: ["Gray", "Blue"],
        material: "synthetic",
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
        name: "lilac sports",
        description: "shoes for chic look",
        brand: "Puma",
        price: 2999,
        category: "Sports",
        sizes: [10, 11, 12],
        colors: ["Gray", "Blue"],
        material: "soft-leather",
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
        brand: "sneakers",
        price: 29.99,
        category: "Sports",
        sizes: [10, 11, 12],
        colors: ["Gray", "Blue"],
        material: "soft-leather",
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
        name: "women sneakers",
        description: "brown sneakers for daily wear.",
        brand: "Puma",
        price: 899,
        category: "Sneakers",
        sizes: [10, 11, 12],
        colors: ["Gray", "Blue"],
        material: "soft-leather",
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
        name: "women sneakers",
        description: "white sneakers for daily wear.",
        brand: "sneakers",
        price: 999,
        category: "Sneakers",
        sizes: [10, 11, 12],
        colors: ["Gray", "Blue"],
        material: "soft-leather",
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
        name: "casual sneakers",
        description: "white sneakers for daily wear.",
        brand: "Puma",
        price: 1099,
        category: "Sneakers",
        sizes: [10, 11, 12],
        colors: ["Gray", "Blue"],
        material: "soft-leather",
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
        description: "white sneakers for daily wear.",
        brand: "u.s,polo",
        price: 1299,
        category: "Sneakers",
        sizes: [10, 11, 12],
        colors: ["Gray", "Blue"],
        material: "soft-leather",
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
        name: "brown sneakers",
        description: "brown sneakers for daily wear.",
        brand: "Puma",
        price: 2999,
        category: "Sports",
        sizes: [10, 11, 12],
        colors: ["Gray", "Blue"],
        material: "soft-leather",
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
        name: "brown sneakers",
        description: "brown sneakers for daily wear.",
        brand: "Puma",
        price: 1999,
        category: "Sports",
        sizes: [10, 11, 12],
        colors: ["Gray", "Blue"],
        material: "soft-leather",
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
        name: "white flipflop",
        description: "Durable flip flop for women.",
        brand: "Puma",
        price: 999,
        category: "flip-flop",
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
        name: "white flipflop",
        description: "white chained flip flop for women.",
        brand: "metro",
        price: 999,
        category: "flip-flop",
        sizes: [10, 11, 12],
        colors: ["Gray", "Blue"],
        material: "soft-leather",
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
        description: "sky colored flip flop for daily wear.",
        brand: "metro",
        price: 799,
        category: "flip-flop",
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
        description: "sky colored flip flop for daily wear.",
        brand: "metro",
        price: 799,
        category: "flip-flop",
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
        name: "cute white flipflop",
        description: "white colored flip flop for daily wear.",
        brand: "zudio",
        price: 799,
        category: "flip-flop",
        sizes: [10, 11, 12],
        colors: ["Gray", "Blue"],
        material: "plastic",
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
        name: "brown crocs",
        description: "crocs for daily wear.",
        brand: "crocs",
        price: 899,
        category: "crocs",
        sizes: [10, 11, 12],
        colors: ["Gray", "Blue"],
        material: "plastic",
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
        name: "white charms crocs",
        description: "crocs for daily wear.",
        brand: "crocs",
        price: 899,
        category: "crocs",
        sizes: [10, 11, 12],
        colors: ["Gray", "Blue"],
        material: "plastic",
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
        name: "pink crocs",
        description: "crocs for daily wear.",
        brand: "crocs",
        price: 599,
        category: "crocs",
        sizes: [10, 11, 12],
        colors: ["Gray", "Blue"],
        material: "plastic",
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
        name: "yellow charms crocs",
        description: "crocs for daily wear.",
        brand: "crocs",
        price: 1899,
        category: "crocs",
        sizes: [10, 11, 12],
        colors: ["Gray", "Blue"],
        material: "plastic",
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
        name: "white crocs",
        description: "crocs for daily wear.",
        brand: "crocs",
        price: 899,
        category: "crocs",
        sizes: [10, 11, 12],
        colors: ["Gray", "Blue"],
        material: "plastic",
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
        name: "platform heels",
        description: "platform heels in yellow color.",
        brand: "metro",
        price: 2999,
        category: "high-heels",
        sizes: [10, 11, 12],
        colors: ["Gray", "Blue"],
        material: "synthetic",
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
        name: "pencil heel",
        description: "heels for elegent view.",
        brand: "metro",
        price: 1999,
        category: "high-heels",
        sizes: [10, 11, 12],
        colors: ["Gray", "Blue"],
        material: "synthetic",
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
        name: "platform heel",
        description: "heels for elegent view.",
        brand: "metro",
        price: 2999,
        category: "high-heels",
        sizes: [10, 11, 12],
        colors: ["Gray", "Blue"],
        material: "synthetic",
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
        name: "platform heel",
        description: "glass heels for elegent view.",
        brand: "metro",
        price: 1099,
        category: "high-heels",
        sizes: [10, 11, 12],
        colors: ["Gray", "Blue"],
        material: "synthetic",
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
        name: "pencil heel",
        description: "lilac heels for elegent view.",
        brand: "metro",
        price: 1999,
        category: "high-heels",
        sizes: [10, 11, 12],
        colors: ["Gray", "Blue"],
        material: "synthetic",
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
        name: "platform heel",
        description: "blue heels for elegent view.",
        brand: "metro",
        price: 1999,
        category: "high-heels",
        sizes: [10, 11, 12],
        colors: ["Gray", "Blue"],
        material: "synthetic",
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
        name: "bridal heels",
        description: "elegent heels for bridal.",
        brand: "metro",
        price: 2999,
        category: "bridal",
        sizes: [10, 11, 12],
        colors: ["Gray", "Blue"],
        material: "synthetic",
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
        name: "bridal heels",
        description: "elegent heels for bridal.",
        brand: "metro",
        price: 3999,
        category: "bridal",
        sizes: [10, 11, 12],
        colors: ["Gray", "Blue"],
        material: "synthetic",
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
        name: "bridal sandal",
        description: "elegent heels for bridal.",
        brand: "metro",
        price: 1999,
        category: "bridal",
        sizes: [10, 11, 12],
        colors: ["Gray", "Blue"],
        material: "synthetic",
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
        name: "bridal heels",
        description: "elegent heels for bridal.",
        brand: "metro",
        price: 2999,
        category: "bridal",
        sizes: [10, 11, 12],
        colors: ["Gray", "Blue"],
        material: "synthetic",
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
        description: "sneakers for kids",
        brand: "Puma",
        price: 599,
        category: "sneakers",
        sizes: [10, 11, 12],
        colors: ["Gray", "Blue"],
        material: "soft-leather",
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
        name: "kid's sneakers",
        description: "sneakers for kids",
        brand: "firstcry",
        price: 699,
        category: "sneakers",
        sizes: [10, 11, 12],
        colors: ["Gray", "Blue"],
        material: "soft-leather",
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
        name: "comfortable sneakers",
        description: "sneakers for kids",
        brand: "firstcry",
        price: 799,
        category: "sneakers",
        sizes: [10, 11, 12],
        colors: ["Gray", "Blue"],
        material: "soft-leather",
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
        name: "white sneakers",
        description: "sneakers for kids",
        brand: "firstcry",
        price: 899,
        category: "sneakers",
        sizes: [10, 11, 12],
        colors: ["Gray", "Blue"],
        material: "soft-leather",
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
        name: "kid's light sneakers",
        description: "sneakers for kids",
        brand: "firstcry",
        price: 799,
        category: "sneakers",
        sizes: [10, 11, 12],
        colors: ["Gray", "Blue"],
        material: "soft-leather",
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
        name: "pink sneakers",
        description: "sneakers for kids",
        brand: "firstcry",
        price: 499,
        category: "sneakers",
        sizes: [10, 11, 12],
        colors: ["Gray", "Blue"],
        material: "soft-leather",
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
            "kids/sandal/img1.jpg",
            "https://example.com/images/sportssandals2.jpg"
        ],
        rating: 4.7,
        reviews: 110,
        subcategoryId: 15
    }, {
        id: 82,
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
            "kids/sandal/img2.jpg",
            "https://example.com/images/sportssandals2.jpg"
        ],
        rating: 4.7,
        reviews: 110,
        subcategoryId: 15
    }, {
        id: 83,
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
            "kids/sandal/img3.jpg",
            "https://example.com/images/sportssandals2.jpg"
        ],
        rating: 4.7,
        reviews: 110,
        subcategoryId: 15
    }, {
        id: 84,
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
            "kids/sandal/img4.jpg",
            "https://example.com/images/sportssandals2.jpg"
        ],
        rating: 4.7,
        reviews: 110,
        subcategoryId: 15
    }, {
        id: 85,
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
            "kids/sandal/img5.jpg",
            "https://example.com/images/sportssandals2.jpg"
        ],
        rating: 4.7,
        reviews: 110,
        subcategoryId: 15
    }, {
        id: 86,
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
            "kids/sandal/img6.jpg",
            "https://example.com/images/sportssandals2.jpg"
        ],
        rating: 4.7,
        reviews: 110,
        subcategoryId: 15
    }, {
        id: 87,
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
            "kids/sport/img1.jpg",
            "https://example.com/images/sportssandals2.jpg"
        ],
        rating: 4.7,
        reviews: 110,
        subcategoryId: 16
        },
        {
        id: 89,
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
            "kids/sport/img2.jpg",
            "https://example.com/images/sportssandals2.jpg"
        ],
        rating: 4.7,
        reviews: 110,
        subcategoryId: 16
        },
        {
        id: 90,
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
            "kids/sport/img3.jpg",
            "https://example.com/images/sportssandals2.jpg"
        ],
        rating: 4.7,
        reviews: 110,
        subcategoryId: 16
        },
        {
            id: 91,
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
                "kids/sport/img4.jpg",
                "https://example.com/images/sportssandals2.jpg"
            ],
            rating: 4.7,
            reviews: 110,
            subcategoryId: 16
        },
        {
            id: 91,
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
                "kids/sport/img5.jpg",
                "https://example.com/images/sportssandals2.jpg"
            ],
            rating: 4.7,
            reviews: 110,
            subcategoryId: 16
        },
        //kids Crocs
        {
            id: 92,
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
                "kids/crocs/img1.jpg",
                "https://example.com/images/sportssandals2.jpg"
            ],
            rating: 4.7,
            reviews: 110,
            subcategoryId: 17
        }, {
            id: 93,
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
                "kids/crocs/img2.jpg",
                "https://example.com/images/sportssandals2.jpg"
            ],
            rating: 4.7,
            reviews: 110,
            subcategoryId: 17
        }, {
            id: 94,
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
                "kids/crocs/img3.jpg",
                "https://example.com/images/sportssandals2.jpg"
            ],
            rating: 4.7,
            reviews: 110,
            subcategoryId: 17
        }, {
            id: 95,
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
                "kids/crocs/img4.jpg",
                "https://example.com/images/sportssandals2.jpg"
            ],
            rating: 4.7,
            reviews: 110,
            subcategoryId: 17
        }, {
            id: 96,
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
                "kids/crocs/img5.jpg",
                "https://example.com/images/sportssandals2.jpg"
            ],
            rating: 4.7,
            reviews: 110,
            subcategoryId: 17
        }, {
            id: 97,
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
                "kids/crocs/img6.jpg",
                "https://example.com/images/sportssandals2.jpg"
            ],
            rating: 4.7,
            reviews: 110,
            subcategoryId: 17
        }
];

export default products;
