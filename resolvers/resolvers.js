const User = require('../models/User');

const resolvers = {
    Query: {
        getUsers: async () => await User.findAll(),
        getUser: async (parent, { id }) => await User.findByPk(id),
    },
    Mutation: {
        createUser: async (parent, { name, email }) => {
            return await User.create({ name, email });
        },
        updateUser: async (parent, { id, name, email }) => {
            const user = await User.findByPk(id);
            if (!user) throw new Error('User not found');
            user.name = name || user.name;
            user.email = email || user.email;
            await user.save();
            return user;
        },
        deleteUser: async (parent, { id }) => {
            const user = await User.findByPk(id);
            if (!user) throw new Error('User not found');
            await user.destroy();
            return "User deleted";
        }
    }
};

module.exports = resolvers;
