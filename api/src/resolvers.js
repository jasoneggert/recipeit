const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const resolvers = {
  Query: {
    users: async (_, __, { prisma }) => {
      return prisma.user.findMany();
    },
    recipes: async (_, __, { prisma }) => {
      return prisma.recipe.findMany();
    },
    votes: async (_, __, { prisma }) => {
      return prisma.vote.findMany();
    },
    comments: async (_, __, { prisma }) => {
      return prisma.comment.findMany();
    },
  },
  Mutation: {
    createUser: async (_, { email, username, password }, { prisma }) => {
      const hashedPassword = await bcrypt.hash(password, 10);
      const user = await prisma.user.create({
        data: {
          email,
          username,
          password: hashedPassword,
        },
      });
      return user;
    },
    createRecipe: async (
      _,
      { name, ingredients, steps, userId },
      { prisma }
    ) => {
      const recipe = await prisma.recipe.create({
        data: {
          name,
          ingredients,
          steps,
          userId,
        },
      });
      return recipe;
    },
    createVote: async (_, { userId, recipeId, type }, { prisma }) => {
      const vote = await prisma.vote.create({
        data: {
          userId,
          recipeId,
          type,
        },
      });
      return vote;
    },
    updateUser: async (_, { id, email, username, password }, { prisma }) => {
      const user = await prisma.user.update({
        where: { id },
        data: {
          email,
          username,
          password,
        },
      });
      return user;
    },
    updateRecipe: async (
      _,
      { id, name, ingredients, steps, userId },
      { prisma }
    ) => {
      const recipe = await prisma.recipe.update({
        where: { id },
        data: {
          name,
          ingredients,
          steps,
          userId,
        },
      });
      return recipe;
    },
    updateVote: async (_, { id, userId, recipeId, type }, { prisma }) => {
      const vote = await prisma.vote.update({
        where: { id },
        data: {
          userId,
          recipeId,
          type,
        },
      });
      return vote;
    },
    deleteUser: async (_, { id }, { prisma }) => {
      const user = await prisma.user.delete({
        where: { id },
      });
      return user;
    },
    deleteRecipe: async (_, { id }, { prisma }) => {
      const recipe = await prisma.recipe.delete({
        where: { id },
      });
      return recipe;
    },
    deleteVote: async (_, { id }, { prisma }) => {
      const vote = await prisma.vote.delete({
        where: { id },
      });
      return vote;
    },
  },
};

module.exports = resolvers;
