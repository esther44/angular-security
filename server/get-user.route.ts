import { Request, Response } from "express";
import { sessionStore } from './session-store';
import { User } from '../src/app/model/user';


export function getUser(req: Request, res: Response): void {
const sessionId = req.cookies['SESSIONID'];

const user: User = sessionStore.findUserBySessionId(sessionId);

  if (user) {
    res.status(200).json(user);
  }else {
    res.sendStatus(204);
  }
}
