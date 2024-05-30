export const initialComments = [
  {
    id: 1,
    content:
      "Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design and the responsiveness at various breakpoints works really well.",
    createdAt: "2024-04-29 08:08:08",
    score: 12,
    user: {
      image: {
        png: "../src/assets/images/avatars/image-amyrobson.png",
        webp: "../src/assets/images/avatars/image-amyrobson.webp",
      },
      username: "amyrobson",
    },
    replies: [],
  },
  {
    id: 2,
    content:
      "Woah, your project looks awesome! How long have you been coding for? I'm still new, but think I want to dive into React as well soon. Perhaps you can give me an insight on where I can learn React? Thanks!",
    createdAt: "2024-05-15 08:08:08",
    score: 5,
    user: {
      image: {
        png: "../src/assets/images/avatars/image-maxblagun.png",
        webp: "../src/assets/images/avatars/image-maxblagun.webp",
      },
      username: "maxblagun",
    },
    replies: [
      {
        id: 3,
        content:
          "If you're still new, I'd recommend focusing on the fundamentals of HTML, CSS, and JS before considering React. It's very tempting to jump ahead but lay a solid foundation first.",
        createdAt: "2024-05-22 08:08:08",
        score: 4,
        replyingTo: "maxblagun",
        user: {
          image: {
            png: "../src/assets/images/avatars/image-ramsesmiron.png",
            webp: "../src/assets/images/avatars/image-ramsesmiron.webp",
          },
          username: "ramsesmiron",
        },
      },
      {
        id: 4,
        content: 
          "I couldn't agree more with this. Everything moves so fast and it always seems like everyone knows the newest library/framework. But the fundamentals are what stay constant.",
        createdAt: "2024-05-28 08:08:08",
        score: 2,
        replyingTo: "ramsesmiron",
        user: {
          image: {
            png: "../src/assets/images/avatars/image-juliusomo.png",
            webp: "../src/assets/images/avatars/image-juliusomo.webp",
          },
          username: "juliusomo",
        },
      },
    ],
  },
  {
    id: 4,
    content:
      "Lorem so i faced a difficulty in this project you can see that when you click on someones reply button it auto dropdown its input and in that input there is his or her @username",
    createdAt: "2024-05-28 08:08:08",
    score: 2,
    user: {
      image: {
        png: "../src/assets/images/avatars/image-juliusomo.png",
        webp: "../src/assets/images/avatars/image-juliusomo.webp",
      },
      username: "juliusomo",
    },
    replies: [],
  },
];

export const initUser = {
  image: {
    png: "../src/assets/images/avatars/image-juliusomo.png",
    webp: "../src/assets/images/avatars/image-juliusomo.png",
  },
  username: "juliusomo",
};
