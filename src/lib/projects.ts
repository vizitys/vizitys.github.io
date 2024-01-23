export interface Project {
  title: string;
  shortDescription: string;
  longDescription: string;
  links: string[];
  mainImage: string;
  galleryImages: string[];
}

const projects: { [key: string]: Project } = {
  oispahalla: {
    title: "Oispahalla",
    shortDescription:
      "A 2048 clone with multiple backends, themes and board sizes. ~10k visitors monthly with 660+ registered users and >1TB of bandwith/month.",
    longDescription: `A 2048 clone with multiple backends, themes and board sizes. Created with SvelteKit, Firebase, NodeJS, MongoDB, Typescript and Rust.

    Some monthly stats at the peak of the project:
    
    - More than 10k visitors / month
    - Handled 1.56M requests total
    - Used a terabyte of bandwith

    Features:

    - Multiple themes
    - Multiple board sizes
    - Auth using Firebase
    - Leaderboards using MongoDB
    - Custom 2048 Anti-Cheat with Rust
    
    We are in the progress of adding more features, such as multiplayer and challenges.`,
    links: [
      "https://oispahalla.com",
      "https://github.com/hallabois/OispaHalla",
      "https://github.com/hallabois/OispaHallaLB",
    ],
    mainImage: "/projects/oispahalla/oispahalla.webp",
    galleryImages: ["/projects/oispahalla/oispahalla_lb.webp"],
  },
  junction2022: {
    title: "ComOwn - Junction 2022",
    shortDescription:
      "My first hackathon - Junction 2022 with the Wolt challenge",
    longDescription: `Our submission for the Junction 2022 Wolt "Better cities. Delivered." challenge, created in 48 hours. Built with Typescript and Sveltekit. ComOwn provides a platform for sharing tools and utilities for a community using the Wolt Drive API.
      
    My teammate and I were one of the only teams composed entirely of high schoolers out of the 1300+ attendees, receiving praise from the Wolt judges for our work and unofficially finishing in the Top 10 of the challenge track.`,
    links: [
      "https://comown.vercel.app/",
      "https://github.com/xypine/junction2022-wolt/",
      "https://eu.junctionplatform.com/projects/junction-2022-1/view/63655476913fea0043cd8db0",
    ],
    mainImage: "/projects/junction2022/comown.webp",
    galleryImages: [],
  },
  junctionNexus: {
    title: "EVE. - Junction Nexus 2023 track winner",
    shortDescription:
      'The track winner for the "Lifestyle Test for Youth" by Sitra and Top 3 finalist for Junction Nexus 2023 🏆',
    longDescription: `Our submission for the Junction Nexus 2023 Hackathon, winning the "Lifestyle Test for Youth" track by Sitra and being a Top 3 finalist for the hackathon. Built with Typescript, Sveltekit, SkeletonUI with mockups created in Figma.
    
    - Sitra track winner 🏆
    - Top 3 overall 🎉
    
    With a larger team of 3 people instead of just 2, we had a lot more time to focus on the design and polish. We also had a lot more time to work on the pitch, which was a huge part of the judging process. We were able to create a pitch that was both informative and entertaining, which was a huge part of our success.`,
    links: [
      "https://github.com/xypine/nexus-23",
      "https://nexus23.netlify.app/",
      "https://eu.junctionplatform.com/projects/nexus-2023-1/view/6454238a8f19c40036c0293b",
    ],
    mainImage: "/projects/nexus/nexus.webp",
    galleryImages: [
      "/projects/nexus/kuva1.webp",
      "/projects/nexus/kuva3.webp",
      "/projects/nexus/sitra.jpg",
    ],
  },
  junction2023: {
    title: "VeikkAS - Junction 2023",
    shortDescription:
      'A proof of concept for the Veikkaus "Next Level of Interactive Gaming Experiences" WebGPU/WebWorker challenge for Junction 2023.',
    longDescription: `A proof of concept for the Veikkaus "Next Level of Interactive Gaming Experiences" WebGPU/WebWorker challenge for Junction 2023. Built with Typescript, Sveltekit and Rust and using BabylonJS for WebGPU rendering.

    We learned a lot about WebGPU and WebWorkers during the hackathon, and we were able to create a proof of concept that was able to render a scene using WebGPU and WebWorkers. We also learned a lot about the limitations of WebGPU and WebWorkers, and how to work around them.
      
    Note: Please do note that if you can't run the demo, that's totally normal since your browser most likely doesn't have WebGPU enabled by default! You can preview the demo in the Youtube video provided.`,
    links: [
      "https://veikkas.vercel.app/",
      "https://github.com/xypine/Junction2023",
      "https://youtube.com/watch?v=ylYDjthFwvQ",
      "https://eu.junctionplatform.com/projects/junction-2023/view/654eaf0bd504d5b0e851598f",
    ],
    mainImage: "/projects/junction2023/veikkas.png",
    galleryImages: ["/projects/junction2023/veikkas2.png"],
  },
  hallacoin: {
    title: "Hallacoin",
    shortDescription:
      "A cryptocurrency created as a joke with a couple of friends.",
    longDescription: `A fork of Litecoin created as a joke with a couple of friends. Created with C++ and the Litecoin codebase. We hosted the blockchain with a Raspberry Pi and DigitalOcean nodes. We created a custom guide for mining Hallacoin, which is available at https://hallabois.github.io/Hallacoin-ohjeet/ (mostly in Finnish). The website was created with Svelte and ThreeJS.`,
    links: [
      "https://hallacoin.oispahalla.com/",
      "https://github.com/hallabois/hallacoin",
      "https://hallabois.github.io/Hallacoin-ohjeet/",
    ],
    mainImage: "/projects/hallacoin/hallacoin.webp",
    galleryImages: ["/projects/hallacoin/guide.webp"],
  },
};

export default projects;
