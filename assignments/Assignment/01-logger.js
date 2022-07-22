import chalk from 'chalk';
const log = console.log;

const success = () => {
    log(chalk.bgGreen.green.bold("SUCCESS ! , Hurray message has been passed !"));
}

const error = () => {
    log(chalk.bgRed.red.bold("OOPS ! ,Something went Wrong !"));
}
const warm = () => {
    log(chalk.bgYellow.yellow.bold("Warning ! , Check the Errors  !"));
}
success();
error();
warm();
log(success);
log(error);
log(warm);


