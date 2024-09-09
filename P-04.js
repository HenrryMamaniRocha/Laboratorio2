function createUser(name, ci, email) {
    return {
        name: name,
        ci: ci,
        email: email
    };
}
var user = createUser('Ademar', '12345678', 'ademar@example.com');
console.log(user);
