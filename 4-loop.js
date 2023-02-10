//1. Display "Ajke amar mon valo nei" for 39 times

/* for(var i = 1; i<=39; i++){
    console.log("Ajke amar mon valo nei");
    console.log(i);
} */

// 2. Display numbers between 58 to 98

/*  for (var i = 58; i <= 98; i++){
    console.log(i);
 } */

// 3. Show all even numbers from 412 to 456

/* for (var i = 412; i <= 456; i+=2){
    console.log(i);
} */

/* var number = 412;
while (number <= 456){
    console.log(number);
    number+=2;
} */

// 4. Show all odd numbers 581 to 623

/* for (var i = 581; i <= 623; i+=2){
    console.log(i);
}
 */

// 6. Declare an array for all the topics that you have learned last few days
// display then as output

/* var learnedTopics = ['html', 'css', 'bootstrap', 'tailwind', 'javascript', 'git', 'github'];
for(var i = 0; i < learnedTopics.length; i++){
    var learnedTopic = learnedTopics[i];
    console.log(learnedTopics[i]);
} */

// 7. Create an array for all the mobile phones. Display all the elements of the array by using a while loop

/* var mobilePhones = ['Nokia', 'Samsung', 'Sprint', 'Sony', 'Symphony', 'Xaiomi', 'Oppo'];

while(mobilePhones.length > 0){
    var mobilePhone = mobilePhones;
    console.log(mobilePhone);
    mobilePhones++;
} */

/* var mobilePhones = ['Nokia', 'Samsung', 'Sprint', 'Sony', 'Symphony', 'Xaiomi', 'Oppo'];

while(mobilePhones.length > 0){
  var mobilePhone = mobilePhones.shift();
  console.log(mobilePhone);
} */

// 8. Run a loop from 30 to 86. this loop will stop if the values get higher than 44

/* for (var i = 30; i <= 86; i++){
    console.log(i);
    if(i == 44){
        break;
    }
}
 */

// 9. Write the price of the books that you have. Display the prices if the prices is lower than 200

var bookPrices = [250 ,300, 120, 150, 200, 130, 500, 160];
for (var i = 0; i < bookPrices.length; i++){
    var bookPrice = bookPrices[i];
    if (bookPrice >= 200){
        continue;
    }
    console.log(bookPrice);
}