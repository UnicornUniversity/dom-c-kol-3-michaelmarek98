function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomItem(array) {
    return array[getRandomInt(0, array.length - 1)];
}

function getRandomBirthdate(minAge, maxAge) {
    const today = new Date();
    const maxDate = new Date(today.getFullYear() - minAge, today.getMonth(), today.getDate()).getTime();
    const minDate = new Date(today.getFullYear() - maxAge, today.getMonth(), today.getDate()).getTime();
    
    const randomTime = minDate + Math.random() * (maxDate - minDate);
    return new Date(randomTime).toISOString();
}

function main(dtoIn) {
    const count = dtoIn.count || 0;
    const minAge = dtoIn.age?.min || 18;
    const maxAge = dtoIn.age?.max || 65;

    const maleNames = ["Jan", "Petr", "Jiří", "Pavel", "Martin", "Tomáš", "Lukáš", "Josef", "Karel", "Michal", "Jakub", "Ondřej", "Marek", "Filip", "Adam"];
    const femaleNames = ["Jana", "Eva", "Anna", "Hana", "Lenka", "Michaela", "Veronika", "Lucie", "Klára", "Petra", "Kateřina", "Martina", "Tereza", "Marie", "Alena"];
    const maleSurnames = ["Novák", "Svoboda", "Novotný", "Dvořák", "Černý", "Procházka", "Kučera", "Veselý", "Krejčí", "Horák", "Němec", "Pokorný", "Marek", "Pospíšil", "Hájek"];
    const femaleSurnames = ["Nováková", "Svobodová", "Novotná", "Dvořáková", "Černá", "Procházková", "Kučerová", "Veselá", "Krejčová", "Horáková", "Němcová", "Pokorná", "Marková", "Pospíšilová", "Hájková"];
    
    const genders = ["male", "female"];
    const workloads = [10, 20, 30, 40];

    const employees = [];

    for (let i = 0; i < count; i++) {
        const gender = getRandomItem(genders);
        
        let name, surname;
        if (gender === "male") {
            name = getRandomItem(maleNames);
            surname = getRandomItem(maleSurnames);
        } else {
            name = getRandomItem(femaleNames);
            surname = getRandomItem(femaleSurnames);
        }

        const workload = getRandomItem(workloads);
        const birthdate = getRandomBirthdate(minAge, maxAge);

        const employee = {
            name: name,
            surname: surname,
            gender: gender,
            birthdate: birthdate,
            workload: workload
        };

        employees.push(employee);
    }

    const dtoOut = {
        totalCount: employees.length,
        employeeList: employees
    };

    return dtoOut;
}