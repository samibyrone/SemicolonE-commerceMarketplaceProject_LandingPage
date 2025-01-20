import shoe from "../images/shoe.png";
import shoe2 from "../images/shoe2.png";
import shoe3 from "../images/shoe3.png";
import suit from "../images/suit.png";
import suit2 from "../images/suit2.png";
import suit3 from "../images/suit3.png";
import tux from "../images/tux.png";
import tux2 from "../images/tux2.png";
import tux3 from "../images/tux3.png";
import casual from "../images/casual.png";
import casual2 from "../images/casual2.png";
import casual3 from "../images/casual3.png";
import top from "../images/top.png";
import top2 from "../images/top2.png";
import top3 from "../images/top3.png";
import laceShoe from "../images/laceShoe.png";
import laceShoe2 from "../images/laceShoe2.png";
import laceShoe3 from "../images/laceShoe3.png";
import dress from "../images/dress.png";
import dress2 from "../images/dress2.png";
import dress3 from "../images/dress3.png";
import sleeve from "../images/sleeve.png";
import sleeve2 from "../images/sleeve2.png";
import sleeve3 from "../images/sleeve3.png";
import ankara from "../images/ankara.png";
import ankara2 from "../images/ankara2.png";
import ankara3 from "../images/ankara3.png";
import flatshoe from "../images/flatshoe.png";
import flatshoe2 from "../images/flatshoe2.png";
import algazi from "../images/algazi.png";
import algazi2 from "../images/algazi2.png";
import algazi3 from "../images/algazi3.png";
import joggers from "../images/joggers.png";
import joggers2 from "../images/joggers2.png";
import joggers3 from "../images/joggers3.png";
import leather from "../images/leather.png";
import leather2 from "../images/leather2.png";
import leather3 from "../images/leather3.png";
import polo from "../images/polo.png";
import polo2 from "../images/polo2.png";
import crochet from "../images/crochet.png";
import crochet2 from "../images/crochet2.png";
import crochet3 from "../images/crochet3.png";
import vintage from "../images/vintage.png";
import vintage2 from "../images/vintage2.png";
import vintage3 from "../images/vintage3.png";
import jean from "../images/jean.png";
import jean2 from "../images/jean2.png";
import shipping2 from "../images/shipping2.png";
import freeshipping from "../images/freeshipping.png";


export const menuLists = [
  {
    id: 1,
    path: "/home",
    link: "Home"
  },
  {
    id: 2,
    path: "/shop",
    link: "Shop"
  },
  {
    id: 3,
    path: "/blog",
    link: "Blog"
  },
  {
    id: 4,
    path: "/about",
    link: "About"
  },
  {
    id: 5,
    path: "/services",
    link: "Services"
  },
  {
    id: 6,
    path: "/contact",
    link: "Contact"
  }
];

export const herolist = [
  {
    id: 1,
    title: "GALUIN Men's Sneakers Products",
    description: "GALUIN 2024 Men's Casual Shoes Sneakers Big Size 39-47.",
    image: shoe,   
    price: [
      { color: "red", value: 12.800 },
      { color: "yellow", value: 10.400 },
      { color: "green", value: 9.500 },
    ],
    color: [
      { value: "red" },
      { value: "yellow" },
      { value: "green" }
    ],
  },

  {
    id: 2,
    title: "KANGERDUN Men's Leather Shoe Products",
    description: "KANGERDUN Men Leather Shoes Oxford Wedding Corporate Formal Loafers Slip - Black.",
    image: shoe2,
    price: [
      { color: "red", value: 13.900 },
      { color: "yellow", value: 12.400 },
      { color: "green", value: 11.500 },
    ],
    color: [
      { value: "red" },
      { value: "yellow" },
      { value: "green" }
    ]
  },

  {
    id: 3,
    title: "ALAGZI Men's Casual Shoe Products",
    description: "ALagzi Mens Casual High-Top Shoes Running Sneakers - Beige.",
    image: shoe3,
    price: [
      { color: "red", value: 20.900 },
      { color: "yellow", value: 18.400 },
      { color: "green", value: 17.500 },
    ],
    color: [
      { value: "red" },
      { value: "yellow" },
      { value: "green" }
    ]
  },
];

export const productlists = [
  {
    id: 1,
    title: "Men’s Slim Fit Suit Corporate Suit",
    description: "",
    images: [
      { image: suit },
      { image: suit2 },
      { image: suit3 }
    ],
    discount: 10,
    rating: 2.5,
    featured: true,
    price: [
      { color: "red", value: 65.000 },
      { color: "yellow", value: 63.000 },
      { color: "green", value: 68.000 }
    ],
    color: [{ value: "red" }, { value: "yellow" }, { value: "green" }]
  },
  {
    id: 2,
    title: "Standard Chinese Suit Set Tuxedo",
    description: "(2pcs-white)Plus Size S-6XL Men Suit Chinese Style Stand Collar Suit Male Wedding Groom Slim Fit Standerd Size Blazer Set Tuxedo Jacket+Pant MAA",
    images: [
      { image: tux3 },
      { image: tux },
      { image: tux2 }
    ],
    discount: 15,
    rating: 4.2,
    featured: false,
    price: [
      { color: "blue", value: 74.700 },
      { color: "white", value: 76.500 },
      { color: "black", value: 73.500 }
    ],
    color: [
      { value: "blue" }, 
      { value: "white" }, 
      { value: "brown" }
    ]
  },
  {
    id: 3,
    title: "COOFENRISY Men's Casual Wear",
    description: "Flower Casual Button Down Short Sleeve Hawaiian Shirt Suits",
    images: [
      { image: casual },
      { image: casual2 },
      { image: casual3 }
    ],
    discount: 12,
    rating: 4.5,
    featured: true,
    price: [
      { color: "clear", value: 15.500 },
      { color: "brown", value: 11.500 },
      { color: "green", value: 12.500 }
    ],
    color: [
      { value: "clear" }, 
      { value: "brown" }, 
      { value: "green" }
    ]
  },
  {
    id: 4,
    title: "GALUIN Men's Short",
    description: "GALUIN 2 In 1 Men's Short Sleeve Shorts Casual Set-White",
    images: [
      { image: top },
      { image: top2 },
      { image: top3 }
    ],
    discount: 18,
    rating: 4.8,
    featured: false,
    price: [
      { color: "natural", value: 12.000 },
      { color: "dark brown", value: 10.000 },
      { color: "light brown", value: 8.500 }
    ],
    color: [
      { value: "natural" },
      { value: "dark brown" },
      { value: "light brown" }
    ]
  },
  {
    id: 5,
    title: "Danami joggers and Crop Hoodies",
    description: "Indulge in luxury with our Elegant and Comfortable Danami Women's Set Of Joggers And Crop Hoodie (Up & Down)- Light Grey.",
    images: [
      { image: joggers },
      { image: joggers2 },
      { image: joggers3 }
    ],
    discount: 25,
    rating: 4.8,
    featured: true,
    price: [
      { color: "black", value: 17.500 },
      { color: "gray", value: 15.500 },
      { color: "beige", value: 16.000 }
    ],
    color: [
      { value: "black" }, 
      { value: "gray" }, 
      { value: "beige" }
    ]
  },
  {
    id: 6,
    title: "Casual Turkey Wears Dress",
    description: "Dinner Gown For Ladies Women Office Skirt Casual Turkey Wears Dress.",
    images: [
      { image: dress },
      { image: dress2 },
      { image: dress3 }
    ],
    discount: 20,
    rating: 4.2,
    featured: true,
    price: [
      { color: "natural", value: 15.500 },
      { color: "brown", value: 12.500 },
      { color: "black", value: 11.700 }
    ],
    color: [
      { value: "natural"}, 
      { value: "brown" }, 
      { value: "black" }
    ]
  },
  {
    id: 7,
    title: "Luxury Top Sleeve Top For Ladies",
    description: "Elevate your hydration experience with our Luxury Top Sleeve Top For Ladies.",
    images: [
      { image: sleeve },
      { image: sleeve2 },
      { image: sleeve3 }
    ],
    discount: 15,
    rating: 3.5,
    featured: false,
    price: [
      { color: "blue", value: 10.000 },
      { color: "green", value: 8.700 },
      { color: "brown", value: 11.200 }
    ],
    color: [
      { value: "blue" }, 
      { value: "green" }, 
      { value: "brown" }
    ]
  },
  {
    id: 8,
    title: "Signature ANKARA DRESS",
    description: "Indulge in luxury with our Elegant and Comfortable Osc Signature OSC SOLA SHIRT ANKARA DRESS.",
    images: [
      { image: ankara },
      { image: ankara2 },
      { image: ankara3 }
    ],
    discount: 25,
    rating: 4.8,
    featured: true,
    price: [
      { color: "black", value: 17.500 },
      { color: "gray", value: 15.500 },
      { color: "beige", value: 16.000 }
    ],
    color: [
      { value: "black" }, 
      { value: "gray" }, 
      { value: "beige" }
    ]
  },
  {
    id: 9,
    title: "Ladies Casual Flat Shoe",
    description: "Women Shoes Sandals Flat Ladies Shoes Casual Shoes - Gold.",
    images: [
      { image: flatshoe },
      { image: flatshoe2 },
      { image: flatshoe }
    ],
    discount: 25,
    rating: 4.8,
    featured: true,
    price: [
      { color: "black", value: 8.500 },
      { color: "gray", value: 7.500 },
      { color: "beige", value: 8.000 }
    ],
    color: [
      { value: "black" }, 
      { value: "gray" }, 
      { value: "beige" }
    ]
  },
  {
    id: 10,
    title: "Men's Sneakers Lace Up Shoes",
    description: "The 15% discount ensures affordability without compromising on style. but they are a delightful loving collection.",
    images: [
      { image: laceShoe },
      { image: laceShoe2 },
      { image: laceShoe3 }
    ],
    discount: 15,
    rating: 4.0,
    featured: false,
    price: [
      { color: "dark", value: 40.000 },
      { color: "light", value: 38.500 },
      { color: "white", value: 35.000 }
    ],
    color: [
      { value: "dark" }, 
      { value: "light" }, 
      { value: "white" }
    ]
  },
  {
    id: 11,
    title: "Classic Alagzi Fashion Shoe ",
    description: "Indulge in luxury with our Elegant and Comfortable ALagzi 2024 Ladies Classic Fashion Casual Shoes - Khaki.",
    images: [
      { image: algazi },
      { image: algazi2 },
      { image: algazi3 }
    ],
    discount: 25,
    rating: 4.8,
    featured: true,
    price: [
      { color: "black", value: 11.500 },
      { color: "gray", value: 10.000 },
      { color: "beige", value: 11.000 }
    ],
    color: [
      { value: "black" }, 
      { value: "gray" }, 
      { value: "beige" }
    ]
  },
  {
    id: 12,
    title: "Pointed Leather Men's Shoe",
    description: "Indulge in luxury with our Elegant and Comfortable Men's Thick-Soled Pointed Leather Shoes Business Shoes Red.",
    images: [
      { image: leather },
      { image: leather2 },
      { image: leather3 }
    ],
    discount: 25,
    rating: 4.8,
    featured: true,
    price: [
      { color: "black", value: 55.500 },
      { color: "gray", value: 53.500 },
      { color: "beige", value: 52.000 }
    ],
    color: [
      { value: "black" }, 
      { value: "gray" }, 
      { value: "beige" }
    ]
  },
  {
    id: 13,
    title: "Berrykey Men's Stitching Polos Shirt",
    description: "Indulge in luxury with our Elegant and Comfortable Berrykey Men's Color Stitching Polos Shirt Round Neck Short Sleeve T-shirt Business.",
    images: [
      { image: polo },
      { image: polo2 },
      { image: polo }
    ],
    discount: 25,
    rating: 4.8,
    featured: true,
    price: [
      { color: "black", value: 15.000 },
      { color: "gray", value: 12.500 },
      { color: "beige", value: 10.700 }
    ],
    color: [
      { value: "black" }, 
      { value: "gray" }, 
      { value: "beige" }
    ]
  },
  {
    id: 14,
    title: "Crochet Outfit-Multicolored",
    description: "Indulge in luxury with our Elegant and Comfortable 2 Piece Trendy Crochet Outfit-Multicolored.",
    images: [
      { image: crochet },
      { image: crochet2 },
      { image: crochet3 }
    ],
    discount: 25,
    rating: 4.8,
    featured: true,
    price: [
      { color: "black", value: 25.500 },
      { color: "gray", value: 23.000 },
      { color: "beige", value: 22.500 }
    ],
    color: [
      { value: "black" }, 
      { value: "gray" }, 
      { value: "beige" }
    ]
  },
  {
    id: 15,
    title: "Vintage Floral Men's Polo",
    description: "Indulge in luxury with our Elegant and Comfortable Mens Long Sleeve Casual Pattern Vintage Floral Polo Business Official Shirts.",
    images: [
      { image: vintage },
      { image: vintage2 },
      { image: vintage3 }
    ],
    discount: 25,
    rating: 4.8,
    featured: true,
    price: [
      { color: "black", value: 15.500 },
      { color: "gray", value: 13.500 },
      { color: "beige", value: 12.000 }
    ],
    color: [
      { value: "black" }, 
      { value: "gray" }, 
      { value: "beige" }
    ]
  },
  {
    id: 16,
    title: "Ladies High Waist Skinny Jean",
    description: "Indulge in luxury with our Elegant and Comfortable Ladies High Waist Skinny Jean- Black.",
    images: [
      { image: jean },
      { image: jean2 },
      { image: jean }
    ],
    discount: 25,
    rating: 4.8,
    featured: true,
    price: [
      { color: "black", value: 23.500 },
      { color: "gray", value: 22.500 },
      { color: "beige", value: 23.000 }
    ],
    color: [
      { value: "black" }, 
      { value: "gray" }, 
      { value: "beige" }
    ]
  }
];

/* import { FaShippingFast } from "react-icons/fa";

  import { MdOutlineMarkUnreadChatAlt } from "react-icons/md";
  import { FaCircleDollarToSlot } from "react-icons/fa6";
  
  const additionalInfo = [
    {
      id: 1,
      title: "FREE SHIPPING",
      description: "Enjoy Free Shipping On All Orders - No Minimum Purchase Required.",
      icon: <FaShippingFast size={50} />,
    },
    {
      id: 2,
      title: "24/7 SUPPORT",
      description: "Our Team Is Available 24/7 To Help With Any Questions Or Concerns.",
      icon: <MdOutlineMarkUnreadChatAlt size={50} />,
    },
    {
      id: 3,
      title: "MONEY BACK",
      description: "We Offer A 100% Money-Back Guarantee For Your Satisfaction.",
      icon: <FaCircleDollarToSlot size={50} />,
    },
  ];
   */

export const promotionalInfo = [
  {
    id: 1,
    title: "Free Shipping On All Orders Over ₦ 5,000",
    description: "Shop & shipment across Lagos and the whole Nigeria. Lorem Ipsum is simply dummy text of It’s easy to get lost in the world of lovely valley vapour around and the meridian sun strikes the upper surface.",
    image: freeshipping
  },
  {
    id: 2,
    title: "Free Shipping From ₦ 5,000",
    description: "Get Classic Wear at a Good rate to Any Location of your Choice. Lorem Ipsum is simply dummy text of It’s easy to get lost in the world of lovely valley vapour around and the meridian sun strikes the upper surface.",
    image: shipping2
  }
];

export const instagramPosts = [
  {
    id: 1,
    image: laceShoe,
    caption: "Caption for post 1",
    likes: 150,
    comments: 25
  },
  {
    id: 2,
    image: crochet2,
    caption: "Caption for post 2",
    likes: 200,
    comments: 30
  },
  {
    id: 3,
    image: leather2,
    caption: "Caption for post 3",
    likes: 180,
    comments: 20
  },
  {
    id: 4,
    image: dress,
    caption: "Caption for post 4",
    likes: 250,
    comments: 40
  },
  {
    id: 5,
    image: polo2,
    caption: "Caption for post 5",
    likes: 300,
    comments: 35
  },
  {
    id: 6,
    image: jean2,
    caption: "Caption for post 6",
    likes: 190,
    comments: 15
  }
];

export const pageLinks = [
  {
    category: "Normal",
    pages: [
      {
        id: 1,
        title: "Normal",
        type: "Normal"
      },
      {
        id: 2,
        title: "Shop With Sidebar",
        type: "Shop"
      },
      {
        id: 3,
        title: "Shop With Category",
        type: "Shop"
      },
      {
        id: 4,
        title: "Shop Filters Top Bar",
        type: "Shop"
      },
      {
        id: 5,
        title: "Shop Wide",
        type: "Shop"
      },
      {
        id: 6,
        title: "My Account",
        type: "Normal"
      }
    ]
  },
  {
    category: "About",
    pages: [
      {
        id: 7,
        title: "About Us",
        type: "Normal"
      },
      {
        id: 8,
        title: "Portfolio",
        type: "Normal"
      },
      {
        id: 9,
        title: "FAQs",
        type: "Normal"
      },
      {
        id: 10,
        title: "Contact Us",
        type: "Normal"
      },
      {
        id: 11,
        title: "Our Team",
        type: "Normal"
      },
      {
        id: 12,
        title: "Term & Conditions",
        type: "Normal"
      }
    ]
  },
  {
    category: "Blog",
    pages: [
      {
        id: 13,
        title: "Blog Dark",
        type: "Blog"
      },
      {
        id: 14,
        title: "Blog Light",
        type: "Blog"
      },
      {
        id: 15,
        title: "Blog Half Image",
        type: "Blog"
      },
      {
        id: 16,
        title: "Blog Column",
        type: "Blog"
      },
      {
        id: 17,
        title: "Blog Category",
        type: "Blog"
      },
      {
        id: 18,
        title: "Blog Archive",
        type: "Blog"
      }
    ]
  }
];
