// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    var empty = {};
    if (currency <= 0) return (empty);
    err = new Object;
    err.error = 'You are rich, my friend! We don\'t have so much coins for exchange';
    if (currency > 10000) {
        return err;
    }

    var half_dollar, quarters, dimes, nickels, pennies, result;
    half_dollar = Math.floor(currency / 50);
    quarters = Math.floor((currency - half_dollar*50)/ 25);
    dimes = Math.floor((currency - half_dollar * 50 - quarters*25) / 10);
    nickels = Math.floor((currency - half_dollar * 50 - quarters * 25-dimes*10) / 5);
    pennies = Math.floor(currency - half_dollar * 50 - quarters * 25 - dimes * 10 - nickels * 5);

    coins = new Object();
    if (half_dollar>0) {
        coins.H = half_dollar;
    }

    if (quarters > 0) {
        coins.Q = quarters;
    }

    if (dimes > 0) {
        coins.D = dimes;
    }

    if (nickels > 0) {
        coins.N = nickels;
    }

    if (pennies > 0) {
        coins.P = pennies;
    }
    return (coins);
}
