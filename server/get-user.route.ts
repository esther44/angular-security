

import {Request, Response} from "express";
import { db } from "./database";
import { DbUser } from "./db-user";



export function getUser(req: Request, res: Response) {

    // retrieve the actual user based on JWT content
    const user: DbUser = db.findUserById(req['userId']);

    if (user) {
        res.status(200).json({email: user.email, ud: user.id});
    } else {
        res.sendStatus(204);
    }
}
