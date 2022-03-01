import express from 'express'
import cookieParser from 'cookie-parser'
import logger from 'morgan'
import findLowItems from './utils/findLowItems.js'
import sendMultiText from './utils/sendMultiText.js'
import cron from 'node-cron'

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());


// sec min hour day of month month day of week
const everyDayOne = '00 0 13 * * *'
const everyDayTen = '00 0 10 * * *'
const everyMinTest = '00 * * * * *'

cron.schedule(everyDayTen, () => {
    findLowItems().then((items) => {
        sendMultiText(items)
    }
    )
})





export default app;
