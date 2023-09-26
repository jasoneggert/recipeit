const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const seedData = async () => {
  // Create users
  const user1 = await prisma.user.create({
    data: {
      email: "user1@example.com",
      username: "user1",
      password: "password123",
      recipes: {
        create: [
          {
            name: "Recipe 1",
            ingredients: ["Ingredient 1", "Ingredient 2"],
            steps: "Step 1. Step 2.",
          },
        ],
      },
    },
  });
  console.log("🚀 ~ file: seed.js:23 ~ seedData ~ user1:", user1);

  const user2 = await prisma.user.create({
    data: {
      email: "user2@example.com",
      username: "user2",
      password: "password456",
      recipes: {
        create: [
          {
            name: "Recipe 2",
            ingredients: ["Ingredient A", "Ingredient B"],
            steps: "Step A. Step B.",
          },
        ],
      },
    },
  });
  console.log("🚀 ~ file: seed.js:41 ~ seedData ~ user2:", user2);

  // Create votes
  const vote1 = await prisma.vote.create({
    data: {
      userId: user1.id,
      recipeId: user2.recipes[0].id,
      type: "UPVOTE",
    },
  });
  console.log("🚀 ~ file: seed.js:51 ~ seedData ~ vote1:", vote1);

  const vote2 = await prisma.vote.create({
    data: {
      userId: user2.id,
      recipeId: user1.recipes[0].id,
      type: "DOWNVOTE",
    },
  });

  // Create comments
  const comment1 = await prisma.comment.create({
    data: {
      userId: user1.id,
      recipeId: user2.recipes[0].id,
      text: "This is a great recipe!",
    },
  });

  const comment2 = await prisma.comment.create({
    data: {
      userId: user2.id,
      recipeId: user1.recipes[0].id,
      text: "I really enjoyed making this recipe.",
    },
  });

  console.log("Seed data created successfully.");
};

seedData()
  .catch((error) => console.error(error))
  .finally(async () => {
    await prisma.$disconnect();
  });
