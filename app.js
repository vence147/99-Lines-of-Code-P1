const friends = ['Vence', 'Hans', 'Ice', 'David', 'Pika'];
var num = 99;

for (i = 0; i < friends.length; i++) { // 0 , 1
    console.log(friends[i] + ':'); // Vence, Hans
    num = 99;
    while (num > 0) { // 99, 1, 99, 98
        if (num == 1) { // 1, 99
            console.log(num + ' line of code in the file, ' + num + ' line of code; ' + friends[i] + ' strikes one out, clears it all out, no more lines of code in the file');
        } else { 
            console.log(num + ' lines of code in the file, ' + num + ' lines of code; ' + friends[i] + ' strikes one out, clears it all out, ' + (num - 1) + ' lines of code in the file');
        }
        num--; // 98, 0, 98
    }
    
} 

