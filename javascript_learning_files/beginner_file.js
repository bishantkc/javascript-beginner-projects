console.log("Hello from JavaScript"); // hi
//  hello  use this to write comment
ahdal 

var my_name = "Jack"  // var is to define a variable. it can be edited later also.
my_name = 8

let our_name = "John"

const pi = 3.14

var a;
var b = 2;
console.log(a) // console.log is like print
 console.log(b)
 a = 5;     // once variable is assigned it can again be edited.";" can or not needed to put at last
 b = a
 
 console.log(a)
 console.log(b)  
 
 

// sum,difference.....

var sum = 10 + 10;
console.log(sum)

var difference = 4 - 2;
console.log(difference)

var product = 2 * 0;
console.log(product)

var quotient = 4 / 2;
console.log(quotient)

var myVar = 10;

myVar++  // can also done subtract by using --
console.log(myVar)

var remainder;
remainder = 5 % 2;
console.log(remainder)

var a = 2;
a += 3  // same goes to subtract can use -=, *=(multiply), /=(division)
console.log(a)

var my_str = "It's a cake."
console.log(my_str)

var hi = "First line\n Second line"
console.log(hi)

var ourstr = "hello " + "world "
ourstr += "everyone";
console.log(ourstr)

var ourName = "David"
var str = "Hello, my name is " + ourName + ", How are you?"
console.log(str)

var adjective = "Awesome!";
var word = "We are "
word += adjective
console.log(word)

var first_name_length = 0;
var first_name = "Computer"
first_name_length = first_name.length;
console.log(first_name_length)

var first_letter_of_first_name = "";
first_letter_of_first_name = first_name[0]
console.log(first_letter_of_first_name)

//to find last letter
 var name = "Jack";
 var last_letter_of_name = name[name.length - 1];
 console.log(last_letter_of_name)
 
 var array = ["The universe", 40] // array is stored in big bracket
 var my_array = [["hello", 20], ["hi", 10]]  // this is nest array
 
 var our_array = [50,50,70]
 var our_data = our_array[0]
 console.log(our_data)
 
 var my_array = [18,64,99]
 my_array[1] = 80
 console.log(my_array)
 
 var my_array = [[1,2,3], [4,5,6]];
 var data = my_array[1][1];
 console.log(data)
 
 var w_array = [["john", 20], ["cat", 10]]
 w_array.push(["dog",30]) // this pushes info into last array list
 console.log(w_array)
 
 var w_array = [["john", 20], ["cat", 10]]
 var removed_form_w_array = w_array.pop()  // this removes last array from the array list
 console.log(w_array)
 
 var w_array = [["john", 20], ["cat", 10]]
 var removed_from_w_array = w_array.shift()  //this removes first array bracket
 console.log(w_array)
 
 var w_array = [["john", 20], ["cat", 10]]
 w_array.shift()
 w_array.unshift(["dog",10]) // this pushes info into start of array list
 console.log(w_array)
 
 //function
 function reusable_function() {
     console.log("Hello world")
 }
 reusable_function()
 
 function addtion(a, b) {
     console.log(a + b)
 }
 addtion(10, 5)
 
 var outer_wear = "t-shirt"
 
 function my_outfit() {
     var outer_wear = "sweater"
     return outer_wear
 }
 console.log(my_outfit()) //in function outer_wear is sweater where outside is t-shirt
 console.log(outer_wear)
 
 function number(num) {
     return num - 2
 }
 console.log(number(10))
 
var processed = 0
function arg(num) {
    return (num + 5) / 3
}
processed = arg(10)
console.log(processed)

function next_in_line(arr, item) {
    arr.push(item)
    return arr.shift()
}
var testarr = [1,2,3,4,5]
console.log("Before: " + JSON.stringify(testarr))
next_in_line(testarr, 6)
console.log("After: " + JSON.stringify(testarr))

//if statement
function true_or_false(was_that_true) {
    if (was_that_true) {
        return "Yes, that was true"
    }
    return "No, that was false"
}
console.log(true_or_false(true))

function test_equal(val) {
    if (val == 12) {
        return "Equal"
    }
    return "Not equal"
}
console.log(test_equal(12))

function test_greater_than(val) {
    if (val > 100) {
        return "Over 100"
    }
    if (val > 10) {
        return "Over 10"
    }
    return "10 or under"
}
console.log(test_greater_than(101))

// and operator use &&
function test_logical_and(val) {
    if (val <= 50 && val >= 25) {
        return "Yes"
    }
    return "No"
}
console.log(test_logical_and(30))

// or operator use ||
function or(val){
    if (val < 10 || val > 20) {
        return "Outside"
    }
    return "Inside"
}
console.log(or(5))

function else_if(val) {
    if (val < 5) {
        return "Less than 5"     // this should be kept on order first 5 than 10
    }else if (val < 10) {
        return "Less than 10"
    }else{
        return "Greater than or equal to 10"
    }
}
console.log(else_if(15))

function case_in_switch(val) {
    var answer = ""
    switch(val) {
        case 1:
          answer = "alpha"
          break
        case 2:
          answer = "beta"
          break
        case 3:
          answer = "gamma"
          break
        case 4:
          answer = "delta"
          break
        default:    // default works as else in switch
          answer = "None"
    }
    return answer
}
console.log(case_in_switch(5))

function sequential_sizes(val) {
    var answer = ""
    switch(val) {
        case 1:
        case 2:
        case 3:
          answer = "Low"
          break
        case 4:
        case 5:
        case 6:
          answer = "Mid"
          break
        case 7:
        case 8:
        case 9:
          answer = "High"
          break
    }
    return answer
}
console.log(sequential_sizes(5))

function is_less(a, b) {
    return a < b   //this will directly give answer in true or false when compared
}
console.log(is_less(10,15))

//counting_cards
var count = 0
function cc(card) {
    switch(card) {
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
          count ++
          break
        case 10:
        case "J":
        case "Q":
        case "K":
        case "A":
          count --
          break
    }
    var holdbet = "hold"
    if (count > 0) {
        holdbet = "bet"
    }
    return count + " " + holdbet 
}

cc(2); cc("K"); cc(8); cc("Q"); cc("A")
console.log(cc(2))

//object
var my_dog = {
    "name": "Bulldog",
    "legs": 4,
    "tails": 1,
    "friends": [],
    "the food": "biscuit"
}
console.log(my_dog)
var dog_name = my_dog.name //dot notation
console.log(dog_name)

var dog_food = my_dog["the food"] // bracket notation mostly used when there is space in between
console.log(dog_food)

my_dog.name = "Happy dog" // can be updated by using dot notation
console.log(my_dog)

my_dog["bark"] = "bhau"  // this is used to add properties in object
delete my_dog.tails  // this is used to delete properties in object
console.log(my_dog)

function phonetic_lookup(val) {
    var result = ""
    var lookup = {
        "alpha": "adams",
        "bravo": "boston",
        "charlie": "chicago"
    }
    result = lookup[val]
    return result
}
console.log(phonetic_lookup("alpha"))

var my_obj = {
    "gift": "chocolate",
    "bed": "room"
}
function check_obj(check_prop) {
    if (my_obj.hasOwnProperty(check_prop)){
        return my_obj[check_prop]
    }else {
        return "Not found"
    }
}
console.log(check_obj("hello"))

//nested objects
var my_storage = {
    "car": {
        "inside":{
            "glove box": "maps",
            "passenger": "seat"
        },
        "outside": {
            "trunk": "jack"
        }
    }
}
var glove_box_contents = my_storage.car.inside["glove box"] //bracket is used cuz of space in betwn 
console.log(glove_box_contents)

//nested arrays
var my_plants = [
    {
        type: "flowers",
        list: [
            "rose",
            "tulip"
        ]
    },
    {
        type: "trees",
        list: [
            "fir",
            "pine"
        ]
    }
]
var second_tree = my_plants[1].list[1]
console.log(second_tree)

//while loops
var my_array = []
var i = 0
while (i < 5) {
    my_array.push(i)
    i++
}
console.log(my_array)

//for loop
var my_array = []
for (var i = 1; i < 6; i++) {
    my_array.push(i)
}
console.log(my_array)

//loop in array
var my_Arr = [2,3,4,5,6]
var total = 0

for (var i = 0; i < my_Arr.length; i++) {
    total += my_Arr[i]
}
console.log(total)

//random decimal number
function random_fraction() {
    return Math.random()
}
console.log(random_fraction())

//random whole number
var random_num = Math.floor(Math.random() * 20)
function random_whole_num() {
    return Math.floor(Math.random() * 10)
}
console.log(random_whole_num())

// convert to int
function convert_to_int(str) {
    return parseInt(str)
}
console.log(convert_to_int("56"))

// convert to int binary
function convert_to_int_binary(str) {
    return parseInt(str, 2) // 2 means only binary num will be converted
}
console.log(convert_to_int_binary("1011"))

function check_sign(num) {
    return num > 0 ? "positive" : num < 0 ? "negative" : "zero"
}
console.log(check_sign(1))
