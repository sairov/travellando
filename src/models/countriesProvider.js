const data = require('../database/countries.json');

module.exports = {
    getCountries: () => {
        return data;
    }
}