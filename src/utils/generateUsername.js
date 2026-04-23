const generateUsername = (first_name, last_name) => {
    const suffix = Math.floor(1000 + Math.random() * 9000);
    return first_name + last_name +'-' + suffix.toString();
}

module.exports = generateUsername;