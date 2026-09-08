
// Q1. Ek variable num1 aur num2 banayen (numbers), unka sum console.log() se print karayen.
let num1 = 10;
let num2 = 20;
console.log(num1 + num2); // Output: 30


// Q2. Variable name banayen apna naam store karke, use alert() se print karayen.
let name = "Ali";
alert(name); // Alert box mein "Ali" show hoga


// Q3. let city = "Karachi"; banayen aur console.log() se print karayen.
let city = "Karachi";
console.log(city); // Output: Karachi


// Q4. Ek variable age banayen aur uski value console.log() se print karayen.
let age = 22;
console.log(age); // Output: 22


// Q5. Teen variables banayen (number, string, boolean type) aur teeno ko print karayen.
let myNumber = 100;        // number type
let myString = "Hello";    // string type
let myBoolean = true;      // boolean type
console.log(myNumber); // Output: 100
console.log(myString); // Output: Hello
console.log(myBoolean); // Output: true


// Q6. let price = 1500; banayen aur alert() se print karayen.
let price = 1500;
alert(price); // Alert box mein "1500" show hoga



/* ============ Section 2: String Concatenation (Q7-Q11) ============ */

// Q7. firstName aur lastName banayen, + operator se jorh kar full name print karayen.
let firstName = "Ahmed";
let lastName = "Khan";
console.log(firstName + " " + lastName); // Output: Ahmed Khan


// Q8. console.log("5" + 5); ka output kya hoga? Likh kar batayen.
console.log("5" + 5);
// Output: "55"
// Explanation: "5" ek string hai, jab string ke sath number ko + operator se jorha jata hai
// to JavaScript number ko bhi string mein convert kar deta hai (type coercion),
// isliye result "55" (string) aata hai, 10 (number) nahi.


// Q9. Do variables banayen aur unhe concatenate kar ke ek sentence print karayen.
let fruit = "Mango";
let color = "yellow";
console.log("The " + fruit + " is " + color + "."); // Output: The Mango is yellow.


// Q10. age variable banayen aur "My age is " ke sath concatenate kar ke print karayen.
let ageValue = 25;
console.log("My age is " + ageValue); // Output: My age is 25


// Q11. Teen variables ko concatenate kar ke ek single line print karayen.
let country = "Pakistan";
let city2 = "Karachi";
let hobby = "Cricket";
console.log(country + " - " + city2 + " - " + hobby); // Output: Pakistan - Karachi - Cricket



/* ============ Section 3: Pre-Increment / Post-Increment (Q12-Q17) ============ */

// Q12. let a = 5; hai. console.log(a++); aur phir console.log(a); ka output batayen.
let a = 5;
console.log(a++); // Output: 5  (pehle purani value print hoti hai, phir increment hota hai)
console.log(a);   // Output: 6  (ab a increment ho chuka hai)


// Q13. let b = 10; hai. console.log(++b); aur phir console.log(b); ka output batayen.
let b = 10;
console.log(++b); // Output: 11 (pehle increment hota hai, phir nayi value print hoti hai)
console.log(b);   // Output: 11 (b pehle hi increment ho chuka tha)


// Q14. Pre-increment aur post-increment mein farq likhiye.
// Pre-Increment (++x): Pehle value ko 1 se increment karta hai, phir naya (updated) value return/use karta hai.
// Post-Increment (x++): Pehle purani (current) value ko return/use karta hai, phir uske baad value ko 1 se increment karta hai.
// Example: let x = 5; console.log(++x) => 6 (pehle increment)
//          let y = 5; console.log(y++) => 5 (baad mein increment, y ab 6 ho chuka hoga)


// Q15. let c = 0; se start karke c++ ko 3 dafa use karayen aur har dafa value print karayen.
let c = 0;
console.log(c++); // Output: 0
console.log(c++); // Output: 1
console.log(c++); // Output: 2
console.log(c);   // Output: 3 (final value)


// Q16. let x = 15; hai. console.log(x--); ka output batayen.
let x = 15;
console.log(x--); // Output: 15 (purani value print hoti hai, phir x decrement ho kar 14 ho jata hai)


// Q17. let y = 20; hai. console.log(--y); ka output batayen.
let y = 20;
console.log(--y); // Output: 19 (pehle decrement hota hai, phir nayi value print hoti hai)



/* ============ Section 4: If / Else If / Else - Single Condition Only (Q18-Q30) ============ */

// Q18. marks variable banayen. Agar marks 90 se zyada hain to "A Grade" print karayen, warna "Try Again" print karayen.
let marks = 95;
if (marks > 90) {
  console.log("A Grade");
} else {
  console.log("Try Again");
}


// Q19. age variable banayen. Agar age 18 se zyada hai to "Eligible" print karayen, warna "Not Eligible" print karayen.
let ageCheck = 20;
if (ageCheck > 18) {
  console.log("Eligible");
} else {
  console.log("Not Eligible");
}


// Q20. number variable banayen. Agar number 0 se bara hai to "Positive" print karayen, warna "Negative" print karayen.
let number = 5;
if (number > 0) {
  console.log("Positive");
} else {
  console.log("Negative");
}


// Q21. temperature variable banayen. Agar 40 se zyada hai to "Hot" print karayen, warna "Not Hot" print karayen.
let temperature = 45;
if (temperature > 40) {
  console.log("Hot");
} else {
  console.log("Not Hot");
}


// Q22. day variable banayen. Agar day 1 hai to "Monday" print karayen, warna "Not Monday" print karayen.
let day = 1;
if (day === 1) {
  console.log("Monday");
} else {
  console.log("Not Monday");
}


// Q23. score variable banayen. Agar score 50 se kam hai to "Fail" print karayen, warna "Pass" print karayen.
let score = 40;
if (score < 50) {
  console.log("Fail");
} else {
  console.log("Pass");
}


// Q24. x variable banayen. Agar x, 100 ke barabar hai to "Equal" print karayen, warna "Not Equal" print karayen.
let xValue = 100;
if (xValue === 100) {
  console.log("Equal");
} else {
  console.log("Not Equal");
}


// Q25. salary variable banayen. Agar salary 50000 se zyada hai to "High" print karayen, warna "Low" print karayen.
let salary = 60000;
if (salary > 50000) {
  console.log("High");
} else {
  console.log("Low");
}


// Q26. grade variable banayen. Agar grade "A" hai to "Excellent" print karayen, warna "Keep Trying" print karayen.
let grade = "A";
if (grade === "A") {
  console.log("Excellent");
} else {
  console.log("Keep Trying");
}


// Q27. time variable banayen. Agar time 12 se zyada hai to "Afternoon" print karayen, warna "Morning" print karayen.
let time = 14;
if (time > 12) {
  console.log("Afternoon");
} else {
  console.log("Morning");
}


// Q28. count variable banayen. Agar count, 0 ke barabar hai to "Empty" print karayen, warna "Not Empty" print karayen.
let count = 0;
if (count === 0) {
  console.log("Empty");
} else {
  console.log("Not Empty");
}


// Q29. status variable banayen. Agar status "active" hai to "Running" print karayen,
// else if status "paused" hai to "On Hold" print karayen, warna "Stopped" print karayen.
let status = "active";
if (status === "active") {
  console.log("Running");
} else if (status === "paused") {
  console.log("On Hold");
} else {
  console.log("Stopped");
}


// Q30. level variable banayen. Agar level 1 hai to "Beginner" print karayen,
// else if level 2 hai to "Intermediate" print karayen, warna "Advanced" print karayen.
let level = 1;
if (level === 1) {
  console.log("Beginner");
} else if (level === 2) {
  console.log("Intermediate");
} else {
  console.log("Advanced");
}