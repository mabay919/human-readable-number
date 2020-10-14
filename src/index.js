module.exports = function toReadable(number) {
    let firstRange = [
        "zero",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "ten",
    ];
    let secondRange = [
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];
    if (number < 100) {
        if (number <= 10) {
            return firstRange[number];
        } else if (number === 20) {
            return "twenty";
        } else if (number > 10 && number < 20) {
            return secondRange[number - 11];
        } else if (number > 20 && number < 30) {
            return `twenty ${firstRange[number - 20]}`;
        } else if (number >= 30 && number < 40) {
            if (number === 30) {
                return "thirty";
            }
            return `thirty ${firstRange[number - 30]}`;
        } else if (number >= 40 && number < 50) {
            if (number === 40) {
                return "forty";
            }
            return `forty ${firstRange[number - 40]}`;
        } else if (number >= 50 && number < 60) {
            if (number === 50) {
                return "fifty";
            }
            return `fifty ${firstRange[number - 50]}`;
        } else if (number >= 60 && number < 70) {
            if (number === 60) {
                return "sixty";
            }
            return `sixty ${firstRange[number - 60]}`;
        } else if (number >= 70 && number < 80) {
            if (number === 70) {
                return "seventy";
            }
            return `seventy ${firstRange[number - 70]}`;
        } else if (number >= 80 && number < 90) {
            if (number === 80) {
                return "eighty";
            }
            return `eighty ${firstRange[number - 80]}`;
        } else if (number >= 90 && number < 100) {
            if (number === 90) {
                return "ninety";
            }
            return `ninety ${firstRange[number - 90]}`;
        }
    } else if (number >= 100 && number < 200) {
        if (number === 100) {
            return `${firstRange[number / 100]} hundred`;
        } else {
            return `${
                firstRange[Math.trunc(number / 100)]
            } hundred ${toReadable(number - 100)}`;
        }
    } else if (number >= 200 && number < 300) {
        if (number === 200) {
            return `${firstRange[number / 100]} hundred`;
        } else {
            return `${
                firstRange[Math.trunc(number / 100)]
            } hundred ${toReadable(number - 200)}`;
        }
    } else if (number >= 300 && number < 400) {
        if (number === 300) {
            return `${firstRange[number / 100]} hundred`;
        } else {
            return `${
                firstRange[Math.trunc(number / 100)]
            } hundred ${toReadable(number - 300)}`;
        }
    } else if (number >= 400 && number < 500) {
        if (number === 400) {
            return `${firstRange[number / 100]} hundred`;
        } else {
            return `${
                firstRange[Math.trunc(number / 100)]
            } hundred ${toReadable(number - 400)}`;
        }
    } else if (number >= 500 && number < 600) {
        if (number === 500) {
            return `${firstRange[number / 100]} hundred`;
        } else {
            return `${
                firstRange[Math.trunc(number / 100)]
            } hundred ${toReadable(number - 500)}`;
        }
    } else if (number >= 600 && number < 700) {
        if (number === 600) {
            return `${firstRange[number / 100]} hundred`;
        } else {
            return `${
                firstRange[Math.trunc(number / 100)]
            } hundred ${toReadable(number - 600)}`;
        }
    } else if (number >= 700 && number < 800) {
        if (number === 700) {
            return `${firstRange[number / 100]} hundred`;
        } else {
            return `${
                firstRange[Math.trunc(number / 100)]
            } hundred ${toReadable(number - 700)}`;
        }
    } else if (number >= 800 && number < 900) {
        if (number === 800) {
            return `${firstRange[number / 100]} hundred`;
        } else {
            return `${
                firstRange[Math.trunc(number / 100)]
            } hundred ${toReadable(number - 800)}`;
        }
    } else if (number >= 900 && number < 1000) {
        if (number === 900) {
            return `${firstRange[number / 100]} hundred`;
        } else {
            return `${
                firstRange[Math.trunc(number / 100)]
            } hundred ${toReadable(number - 900)}`;
        }
    }
};
