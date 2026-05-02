const generateUsername = (name) => {
    return name + '-' +( Math.floor(Math.random() * 9000) + 1000);
}

module.exports = generateUsername;