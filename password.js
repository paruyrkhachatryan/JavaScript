let symbols = "!@#$%^&*()_+-=?/>.<,\"':;][}{\\|~`";
let actualPassword = prompt("Enter password: ");
let currentPassword = ["0", "0", "0"];
let count = 0;

for (let i = 0; i < symbols.length; i++) {
    for (let j = 0; j < actualPassword.length; j++) {
        if (symbols[i] === actualPassword[j]) {
            currentPassword[j] = symbols[i]
    }
}
    count ++
    if(!currentPassword.includes("0")){
        break
    }
}
currentPassword = currentPassword.join()
console.log(`Password found: ${currentPassword}`)
console.log(`Attempts: ${count}`)