import { Request, Response } from "express";
import { sessionStore } from "./session-store";
import { db } from './database'
import { DbUser } from "./db-user";
import * as argon2 from 'argon2';
import { randomBytes } from "./security.utils";

export function login(req: Request, res: Response): void {
  const creditentials = req.body;

  const user: DbUser = db.findUserByEmail(creditentials.email);

  if (!user) {
    res.sendStatus(403);
  } else {
    loginAndBuildResponse(creditentials, user, res);
  }
}

async function loginAndBuildResponse(creditentials: any, user: DbUser, res: Response){

  try {
   const sessionId = attemptLogin(creditentials, user);

    console.log('login successfull');
    res.cookie('SESSIONID', sessionId, {httpOnly: true, secure: true});
    res.status(200).json({id: user.id, email: user.email});
  } catch (err) {
    console.log('login failed');
    res.sendStatus(403);
  }
}


async function attemptLogin(creditentials: any, user: DbUser) {
  const isPasswordValid = await argon2.verify(user.passwordDigest,
  creditentials.password);

  if (!isPasswordValid) {
    throw new Error('Password Invalid');
  }

  const sessionId = await randomBytes(32).then(bytes => bytes.toString('hex'));
  console.log('sessionId', sessionId);
  sessionStore.createSession(sessionId, user);

    return sessionId;
}
