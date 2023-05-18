// print the odd numbers in an array

var od = (arra) => {
    let odd = [];
     for(let i = 0; i<arra.length; i++){
        if (arra[i]%2 !== 0)
            odd.push(arra[i]);
    }

    console.log(odd);
}
od([1, 2, 3, 4, 5, 6, 7, 8, 9, 10,11]);

//Convert all the strings to title caps in a string array

var convert = (arro) => {
    var caps = [];
    for (var i = 0; i<arro.length; i++) {
        caps = caps + arro[i][0].toUpperCase() + arro[i].slice(1);
    } console.log(caps);
}
convert(["surya", "vijay", "kamal", "rajini"]);

//Sum of all numbers in an array

var nums = (num1,num2,num3) => {
  let sum;
  sum = num1+num2+num3
  console.log(sum);
} 
nums(10,15,20);

//Return all the prime numbers in an array

var pnum = (arr) => {
    let p = [];
    arr.forEach(num => {
        if (num <= 1)
            return false;
        for (let i = 2; i < num; i++) {
            if (num % i === 0)
                return false;
        }
        return p.push(num);
    })
    console.log(`${p}`);
}
pnum([2,3,4,5,6,7,8,9,10,11,12,13,14,15]);

//Return all the palindromes in an array

var ispalindrome = (arr) => {
    var palintrome = [];
    arr.filter(element => {
        var str = String(element);
        let i = 0;
        let j = str.length - 1;
        while (i < j) {
            if (str[i] == str[j]) {
                i++;
                j--;
            }
            else
                return false;
        }
        return palintrome.push(element);
    })
    console.log(`${palintrome}`);

}
ispalindrome(["rotor", "level", "day", "class", "madam", "malayalam", "car"]);