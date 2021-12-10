import { User } from "../src/app/model/user";
import { Session } from "./session";

export class SessionStore {
    private sessions: {[key: string]: Session} = {};

    createSession(sessionId: string, user: User): void {
      this.sessions[sessionId] = new Session(sessionId, user);
    }

    findUserBySessionId(sessionId: string): User | undefined {
      const session: Session = this.sessions[sessionId];
      return this.isSessionValid(sessionId) ? session.user : undefined;
    }

    isSessionValid(sessionId: string): boolean {
      const session: Session = this.sessions[sessionId];
      return session && session.isValid();
    }

    destroySession(sessionId: string): void {
      delete this.sessions[sessionId];
    }
}

export const sessionStore: SessionStore = new SessionStore();
