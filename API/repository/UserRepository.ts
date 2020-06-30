import { users, IUser } from "../models/User.ts";
export const userRepository = (() => {
    const addUser = async (userBody: IUser) => {
        return await users.insertOne(userBody);
    }

    const getUsers = async () => {
        return await users.find({}, {});
    }

    const getUserById = async (id: string) => {
        return await users.findOne({ _id: { "$oid": id } });
    }

    const updateUser = async (id: string, updatedUser: IUser) => {
        return await users.updateOne(
            { _id: { "$oid": id } },
            { $set: updatedUser }
        )
    }

    return {
        addUser,
        getUsers,
        getUserById,
        updateUser
    }
})();