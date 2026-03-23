import { Request, Response } from "express";

export const getUsers = (req: Request, res: Response) => {
    const users = [
        { id: 1, name: "Justice" },
        { id: 2, name: "User2" }
    ];

    res.json(users);
};