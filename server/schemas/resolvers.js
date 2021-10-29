const { User } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    users: async () => {
      return User.find().populate('savedBooks');
    },
    me: async (parent, args, context) => {
      if (context.user) {
        return await User.findOne({ _id: context.user.id }).populate('savedBooks');;
      }
      throw new AuthenticationError('You need to be logged in!');
    },
  },
  
  Mutation: {

    // create a user, sign a token, and send it back (to client/src/components/SignUpForm.js)
    async createUser(parent, { username, email, password }) {
      const user = await User.create({ username, email, password });

      const token = signToken(user);
      return ({ token, user });
    },
    // login a user, sign a token, and send it back (to client/src/components/LoginForm.js)
    async login(parent, { username, email, password }) {
      const user = await User.findOne({ $or: [{ username }, { email }] });
      if (!user) {
        throw new AuthenticationError('No user found!');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Wrong password!');
      }
      const token = signToken(user);
      return ({ token, user });
    },
    // save a book to a user's `savedBooks` field by adding it to the set (to prevent duplicates)
    // user comes from `req.user` created in the auth middleware function
    async saveBook(parent, { userId, bookId, authors, description, title, image, link }, context) {
      if (context.user) {
        const updatedUser = await User.findOneAndUpdate(
          { _id: userId },
          { $addToSet: { savedBooks: { bookId, authors, description, title, image, link } } },
          { new: true, runValidators: true }
        );

        return updatedUser;
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    // remove a book from `savedBooks`
    async deleteBook(parent, { bookId, authors, description, title, image, link }, context) {
      if (context.user) {
        const updatedUser = await User.findOneAndUpdate(
          { _id: context.user.id },
          { $pull: { savedBooks: { bookId, authors, description, title, image, link } } },
          { new: true, runValidators: true }
        );

        return updatedUser;
      }
      throw new AuthenticationError('You need to be logged in!');
    }
  }
}




module.exports = resolvers;
