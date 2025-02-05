export interface Project {
  name: string;
  images?: string[]; // Mark images as optional
  video?: string;    // Add optional video property
  description: string;
  pdf?: string;
}

export const projects: Project[] = [
  {
    name: "Chair Inspired by the Prehistoric Era - Conceptual Chair Furniture Design",
    images: [
      "/images/WoodChair/Chair7.png",
      "/images/WoodChair/Chair8.png",
      "/images/WoodChair/Chair1.jpeg",
      // "/images/WoodChair/Chair2.jpeg",
      "/images/WoodChair/Chair3.jpeg",
      "/images/WoodChair/Chair4.jpeg",
      "/images/WoodChair/Chair5.jpeg",
      // "/images/WoodChair/Chair6.jpeg"
    ],
    description: "A prehistoric themed chair can link with the living space by adding a unique and historical touch to it. It can be placed in various contexts, in concept-based theme hotels or private residencies to enhance the overall decor and ambiance.",
    // pdf: "/images/WoodChair/Chair Design.pdf",
    pdf: "https://drive.google.com/uc?export=download&id=1CEGjYHsr72qPc-rLCf51xMIv2L1finv_",
  },
  {
    name: "Multi-functional Compact Cupboard - Furniture Design",
    images: [
      "/images/Ward/Ward6.png",
      "/images/Ward/Ward7.png",
      "/images/Ward/Ward8.png",
      "/images/Ward/Ward5.png",
      "/images/Ward/Ward1.jpeg",
      // "/images/Ward/Ward2.jpeg",
      "/images/Ward/Ward3.jpeg",
      "/images/Ward/Ward4.jpeg"
     
    ],
    description: "Design inspired by the Japanese Yakomaga infinity cube that connects geometry with origami and allows endless possibilities and creativity. Ideal for compact spaces, this cupboard design can be modified to match the aesthetic of any living space, adding versatility, multifunctionality, convenience and style.",
    pdf: "https://drive.google.com/uc?export=download&id=1aOFdgXNVVlsC_9-wvF5hWFkmI4Ocxzxs",
  },
  {
    name: "Interior Design for an Educational Institute’s Hostel",
    images: [
      "/images/Institute/Institute1.png",
      "/images/Institute/Institute2.png",
      "/images/Institute/Institute3.png",
      "/images/Institute/Institute4.png",
      "/images/Institute/Institute5.png",
      "/images/Institute/Institute6.png",
      "/images/Institute/Institute7.png",
      "/images/Institute/Institute8.png"
    ],
    description: "A sustainable design for the Hostel of Diyagala Boys Town Vocational Institute, Ragama. This design emphasizes the use of metal as the primary material, with a strong focus on incorporating reclaimed and upcycled metal elements. The concept also explores the unique contrast and harmony created by pairing metal with other materials such as wood, fabric, and glass, highlighting the versatility and sustainability of each element.",
    pdf: "https://drive.google.com/uc?export=download&id=1BagrpyOhSfM_I5G_o5rlJSsiWOTTYf29",
  },
  {
    name: "SketchUp video of the design concept for Boys Town Vocational Institute’s Hostel",
    video: "/images/AutoCAD/AutoCAD.mp4", // Add a video path
    description: "The SketchUp video showcases a high-quality 3D visualization of the space. Such videos can be used to provide a comprehensive visual experience about a space, showing the details that bring designs to life.",
  },
  {
    name: "Transit Hub for Waves Sri Lanka®",
    images: [
      "/images/Waves/Waves1.png",
      "/images/Waves/Waves2.png",
      // "/images/Waves/Waves3.png",
      "/images/Waves/Waves4.png",
      // "/images/Waves/Waves5.png",
      // "/images/Waves/Waves6.png",
      // "/images/Waves/Waves7.png",
      // "/images/Waves/Waves8.png",
      "/images/Waves/Waves9.jpg",
      "/images/Waves/Waves10.jpg",
      "/images/Waves/Waves11.jpg",
      "/images/Waves/Waves12.jpg",
      "/images/Waves/Waves13.jpg",
      "/images/Waves/Waves14.jpg",
      "/images/Waves/Waves15.jpg",
    ],
    description: "Interior Design proposal for a flip flop store for Waves retail outlet at the Colombo Floating Market, focussed on creating an engaging shopping experience for both customers and non-customers, and attracting a diverse range of customers while maintaining pre-existing perception of the brand.",
    pdf: "https://drive.google.com/uc?export=download&id=1EIThz9Swb9gTJqaBl0ni7tWHjHRzz9lT",
  },
  {
    name: "Interior Design for a Modern, Themed Retail Kiosk",
    images: [
      "/images/Kiosk/Kiosk6.png",
      "/images/Kiosk/Kiosk7.png",
      "/images/Kiosk/Kiosk1.png",
      "/images/Kiosk/Kiosk2.png",
      "/images/Kiosk/Kiosk3.png",
      "/images/Kiosk/Kiosk4.png",
      "/images/Kiosk/Kiosk5.png",
     
    ],
    description: "A concept interior design for a designer-wear display kiosk, that incorporates two very different styles and textures -  denim and string art. This kiosk design incorporates a strategic layout that allows clear visibility from the exterior, offering passersby an inviting view of the interior. The SketchUp rendered images demonstrate the kiosk’s sleek structure, with a focus on how its design fosters an inviting atmosphere, seamlessly blending with its surroundings while standing out to potential customers.",
    pdf: "https://drive.google.com/uc?export=download&id=17OZUunruPR27AKnzdr4VYoSQaZYHjiqC",
  },
  {
    name: "Eatery with a Twist - A Fantasy-Themed Restaurant",
    images: [
      "/images/Twist/Twist7.png",
      "/images/Twist/Twist8.png",
      "/images/Twist/Twist1.jpg",
      "/images/Twist/Twist2.jpg",
      "/images/Twist/Twist3.jpg",
      "/images/Twist/Twist4.jpg",
      "/images/Twist/Twist5.jpg",
      "/images/Twist/Twist6.jpg",
    
     
    ],
    description: "Step into the future with this immersive fantasy-based restaurant design, inspired by the S.A.B.E.R. Space Station from Marvel comics. The interior blends the futuristic aesthetic with gravity defying concepts, offering a unique dining experience. Sleek architectural lines, metallic accents, and a carefully curated cosmic color palette transports guests to an otherworldly realm. Every detail is designed to enhance the sci-fi ambiance, making it a true fusion of innovation and storytelling.",
    pdf: "https://drive.google.com/uc?export=download&id=1RsKfn-vmoplHxfU7Bv9_t1OY_lEJZwY9",
  },
  // Add more projects here
];
