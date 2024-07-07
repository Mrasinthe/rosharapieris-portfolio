export interface Project {
  name: string;
  images?: string[]; // Mark images as optional
  video?: string;    // Add optional video property
  description: string;
}

export const projects: Project[] = [
  {
    name: "Wooden Chair Design",
    images: [
      "/images/WoodChair/Chair1.jpeg",
      "/images/WoodChair/Chair2.jpeg",
      "/images/WoodChair/Chair3.jpeg",
      "/images/WoodChair/Chair4.jpeg",
      "/images/WoodChair/Chair5.jpeg",
      "/images/WoodChair/Chair6.jpeg"
    ],
    description: "This handcrafted wooden chair is more than just a piece of furniture. It is a piece of art that brings the beauty of nature into any space.",
  },
  {
    name: "Multifunctional Cupboard Design",
    images: [
      "/images/Ward/Ward1.jpeg",
      "/images/Ward/Ward2.jpeg",
      "/images/Ward/Ward3.jpeg",
      "/images/Ward/Ward4.jpeg",
      "/images/Ward/Ward5.png"
    ],
    description: "A multifunctional cupboard, meticulously designed to adapt to various living environments and serve multiple purposes. It is an innovative solution for compact living spaces, where versatility and efficient use of space are paramount. This cupboard can be installed as a wall-fixed unit or used as a freestanding shelf, providing flexible storage and display options tailored to different needs.",
  },
  {
    name: "AutoCAD with 3Ds Max",
    video: "/images/AutoCAD/AutoCAD.mp4", // Add a video path
    description: "Designing a sustainable and functional hostel for students of an institute.",
  },
  {
    name: "Hostel Design for an Educational/Vocational Institute",
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
    description: "Designing a Hostel for an Existing educational/Vocational institute. ",
  },
  {
    name: "Transit Hub Retail Shop",
    images: [
      "/images/Waves/Waves1.png",
      "/images/Waves/Waves2.png",
      "/images/Waves/Waves3.png",
      "/images/Waves/Waves4.png",
      "/images/Waves/Waves5.png",
      "/images/Waves/Waves6.png",
      "/images/Waves/Waves7.png",
      "/images/Waves/Waves8.png"
    ],
    description: "Designing a 1000 sq. ft. retail outlet at The Floating Market, a bustling local transit hub, aims to create an engaging shopping experience for both passengers and non-passengers. Strategically located before the Customs and Security checking area, the store is designed to attract and captivate a diverse range of customers.",
  },
  // Add more projects here
];
