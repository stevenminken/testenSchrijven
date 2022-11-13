function add(a, b) {
    return a + b;
}

function makePersonObject(firstname, age) {
    return {
        name: firstname,
        age: age,
    }
}

module.exports = {
    add: add,
    makePersonObject: makePersonObject,
}