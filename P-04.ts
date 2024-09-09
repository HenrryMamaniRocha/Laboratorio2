function createUser(name: string, ci: string, email: string): { name: string; ci: string; email: string } {
    return {
        name: name,
        ci: ci,
        email: email
    };
}
const user = createUser('Ademar', '12345678', 'ademar@example.com');
console.log(user);
