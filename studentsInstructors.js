var students = [
    { first_name: 'Michael', last_name: 'Jordan' },
    { first_name: 'John', last_name: 'Rosales' },
    { first_name: 'Mark', last_name: 'Guillen' },
    { first_name: 'KB', last_name: 'Tonel' }
]
// Michael Jordan
// John Rosales
// Mark Guillen
// KB Tonel
for (index in students) {
    console.log(students[index].first_name, students[index].last_name);
}

var users = {
    'Students': [
        { first_name: 'Michael', last_name: 'Jordan' },
        { first_name: 'John', last_name: 'Rosales' },
        { first_name: 'Mark', last_name: 'Guillen' },
        { first_name: 'KB', last_name: 'Tonel' }
    ],
    'Instructors': [
        { first_name: 'Michael', last_name: 'Choi' },
        { first_name: 'Martin', last_name: 'Puryear' }
    ]
}
// Students
// 1 - MICHAEL JORDAN - 13
// 2 - JOHN ROSALES - 11
// 3 - MARK GUILLEN - 11
// 4 - KB TONEL - 7
// Instructors
// 1 - MICHAEL CHOI - 11
// 2 - MARTIN PURYEAR - 13
for (user in users) {
    console.log(user);
    for (index in users[user]) {
        var num = Number(index) + 1;
        console.log(num + " - " + users[user][index].first_name + " " + users[user][index].last_name + " - " + (users[user][index].first_name.length + users[user][index].last_name.length));
    }
}