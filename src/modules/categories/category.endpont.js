import { roles } from "../../middleware/auth.js"

// const roles={
//     Admin:'Admin',User:'User'
// }
export const endPoint={
    create:[roles.Admin],
    getAlls:[roles.Admin],
    getActive:[roles.User],
    update:[roles.Admin],
    specific:[roles.User,roles.Admin]
}