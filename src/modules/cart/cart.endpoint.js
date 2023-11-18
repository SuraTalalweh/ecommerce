import { roles } from "../../middleware/auth.js";

export const endponts={
    create:[roles.User],
    delete:[roles.User],
    clear:[roles.User],
    get:[roles.User],
}