import type { AuthUser } from "./auth.ts";

declare module 'express-session' {
    interface SessionData {
        user?:AuthUser
    }
}