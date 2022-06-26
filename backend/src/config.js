require("dotenv").config();
exports.token = {
    TOKEN_SECRET: process.env.TOKEN_SECRET || "ALO123"
}