const findTheOldest = function (people) {
    const birthYear = people.map(people => people.yearOfBirth);
    const deathYear = people.map(people => people.yearOfDeath);
    let age = new Array;
    let oldest;
    const currentYear = new Date().getFullYear();
    for (i = 0; i < birthYear.length; i++) {
        if (typeof deathYear[i] === 'undefined') {
            age.push(currentYear - birthYear[i]);
        } else
            age.push(deathYear[i] - birthYear[i]);
    };
    if (age[0] < age[2] && age[1] < age[2]) {
        oldest = people[2];
    } else if (age[1] < age[0] && age[2] < age[0]) {
        oldest = people[0];
    } else if (age[2] < age[1] && age[0] < age[1]) {
        oldest = people[1];
    } return oldest;
};

module.exports = findTheOldest;
