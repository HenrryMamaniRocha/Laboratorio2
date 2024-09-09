const emaillist = [
    "javascript@gmail.com",
    "abc.com",
    "mydomain.com",
    "Python@hotmail.com",
    "test",
    "anotherEmail@kenkoo.com",
    "typescript@gmail.com",
    "mail0fPikachu@@@@@",
    "elta@kkk.co",
    "user123.....",
    "wrongEmail@gmail.com",
    "kattis.go",
    "java@gamil.com"
];
function isValidEmail(email) {
    return email.includes('@') && email.endsWith('.com');
}

const validEmails = emaillist.filter(isValidEmail);
console.log(validEmails);
