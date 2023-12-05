import { roles } from "../../middleware/auth.js";
export const endponts={
    create:[roles.User],
}