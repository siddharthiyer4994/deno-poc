import { userService } from "../services/UserService.ts";
import { users } from "../models/User.ts";

// @desc Save a User
// @route POST /api/v1/users

const addUser = async ({ request, response }: { request: any, response: any }) => {
    try {
        let newUser = await request.body();
        newUser = await userService.addUser(newUser);
        response.body = {
            success: true,
            data: newUser
        };
    } catch (error) {
        console.log(`Error ------> ${JSON.stringify(error)}`)
    };
}

// @desc Get all Users
// @route GET /api/v1/users

const getUsers = async ({ request, response }: { request: any, response: any }) => {
    try {
        const userData = await userService.getUsers();
        response.body = {
            success: true,
            data: userData
        };
    } catch (error) {
        console.log(`Error ------> ${JSON.stringify(error)}`)
    };
}

// @desc Update User
// @route POST /api/v1/users:id

const updateUser = async ({ request, params, response }: { request: any, params: { id: string }, response: any }) => {
    try {
        const { id } = params;
        let updatedUser = await request.body();
        const message = await userService.updateUser(id, updatedUser)
        response.body = {
            success: true,
            data: message
        };
    } catch (error) {
        console.log(`Error ------> ${JSON.stringify(error)}`)
    };
}

export { addUser, getUsers, updateUser };