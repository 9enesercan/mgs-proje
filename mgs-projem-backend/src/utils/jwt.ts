import jwt from "jsonwebtoken"

export const GenerateJWTToken =  (userId: string) => {
    return jwt.sign({
        userId
    }, process.env.SECRET_KEY!)
}