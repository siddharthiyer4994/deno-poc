import { IUser } from "../models/User.ts";
import { userRepository } from "../repository/UserRepository.ts";

export const userService = (() => {

    const addUser = async (userBody: IUser) => {
        return await userRepository.addUser(userBody);
    }

    const getUsers = async () => {
        return await userRepository.getUsers();
    }

    const updateUser = async (id: string, updatedUser: IUser) => {
        const userData = await userRepository.getUserById(id);
        let message = "User Updated!!";
        if (userData) {
            const { matchedCount } = await userRepository.updateUser(id, updatedUser);
            if (!matchedCount) {
                message = "error while updating user!";
            }
        }
        return {
            message
        };
    }

    return {
        addUser,
        getUsers,
        updateUser
    }
})();