// as early as possible import and configure dotenv
// require('dotenv').config({path: './env'}) // bad practice to configure dotenv

import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config({
    path: './env'
})

connectDB()
    .then(() => {
        app.listen(process.env.PORT || 8000, () => { 
            console.log(`server is running at ${process.env.PORT}`)
        })
    })
    .catch((err) => {
        console.log("MongoDB Connection failed !!!", err);
    })








/* 
ye 1st approach hai jisme index.js me hi db connection bana diya using iffe, it is optimised approach but not good practice to pollute index.js

dusri approach jisme haam dusre folder me database rakhe aur waha se index file me import karwaye
db is always be placed in different continent

import mongoose from "mongoose";
import { DB_NAME } from "./constants";

import express from "express"
const app = express()

    // starting iife with ; is professional approach, in case if ";" is missing above any previous statements so it hnadles it.
    ; (async () => {
        try {
            await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
            app.on("error", (error) => {
                console.log("ERROR: ", error);
                throw error
            })

            app.listen(process.env.PORT, () => {
                console.log(`APP is listening on port ${process.env.PORT}`);
            })
        } catch (error) {
            console.log("ERROR: ", error);
            throw err
        }
    })()

*/