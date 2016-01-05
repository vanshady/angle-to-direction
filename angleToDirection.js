
var angleToDirection = {
    degree: function (deg) {
        switch (Math.ceil(((deg + 360 - 22.5) % 360 + 22.5) / 45)) {
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
    },
    degreeAbbr: function (deg) {
        switch (Math.ceil(((deg + 360 - 22.5) % 360 + 22.5) / 45)) {
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
        }
    }
};

module.exports = angleToDirection;