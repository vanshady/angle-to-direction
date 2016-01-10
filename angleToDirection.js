var convert = (angle, param) => Math.ceil(((angle + param / 16) % param) / (param / 8));

var print = (paramF) => {
    switch (paramF) {
        case 1:
            return "North";
            break;
        case 2:
            return "North East";
            break;
        case 3:
            return "East";
            break;
        case 4:
            return "South East";
            break;
        case 5:
            return "South";
            break;
        case 6:
            return "South West";
            break;
        case 7:
            return "West";
            break;
        case 8:
            return "North West";
            break;
    }
};

var printAbbr = (paramF) => {
    switch (paramF) {
        case 1:
            return "N";
            break;
        case 2:
            return "NE";
            break;
        case 3:
            return "E";
            break;
        case 4:
            return "SE";
            break;
        case 5:
            return "S";
            break;
        case 6:
            return "SW";
            break;
        case 7:
            return "W";
            break;
        case 8:
            return "NW";
            break;
    };
};

var angleToDirection = {
    degree: (deg) => print(convert(deg, 360)),
    degreeAbbr: (deg) => printAbbr(convert(deg, 360)),
    radian: (rad) => print(convert(rad, Math.PI * 2)),
    radianAbbr: (rad) => printAbbr(convert(rad, Math.PI * 2))
};

module.exports = angleToDirection;