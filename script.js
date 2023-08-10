function age() {
    var d1 = parseInt(document.getElementById("date").value, 10);
    var m1 = parseInt(document.getElementById("month").value, 10);
    var y1 = parseInt(document.getElementById("year").value, 10);

    var date = new Date();
    var d2 = date.getDate();
    var m2 = 1 + date.getMonth();
    var y2 = date.getFullYear();
    var month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    // Leap year validation
    if (isLeapYear(y1)) {
        month[1] = 29;  // February has 29 days in a leap year
    }
    if (isLeapYear(y2) && m2 > 2) {
        month[1] = 29;  // If the current year is a leap year and the current month is past February
    }

    if (d1 > d2) {
        d2 = d2 + month[m2 - 1];
        m2 = m2 - 1;
    }

    if (m1 > m2) {
        m2 = m2 + 12;
        y2 = y2 - 1;
    }

    var d = d2 - d1;
    var m = m2 - m1;
    var y = y2 - y1;

    document.getElementById("age").innerHTML =
        "Your Age is " + y + " Years " + m + " Months " + d + " Days";
}

function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        return true;
    } else {
        return false;
    }
}

