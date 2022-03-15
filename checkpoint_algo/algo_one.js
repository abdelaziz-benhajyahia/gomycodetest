// declaration
var word = prompt("Write a word :");
var str = prompt("Write a lot of words :");
var vowels = "aeiou";
var vowels_in_str = "affaffuffuffffofffffiffeffffafffa.";

// number of characters
function lengthofstr(inner_word){
    var number_of_char = 0;
    var i = 0;

    while(inner_word[i] != "."){
        number_of_char++;
        i++;
    }
    console.log("Number of char in '"+inner_word+"': "+number_of_char);
}

// number of words
function numberofword(inner_str){
    var number_of_word = 1;
    var i = 0;

    while(inner_str[i] != "."){
        if(inner_str[i] == " "){
            number_of_word++;
        }
        i++;
    }
    console.log("Number of word in '"+inner_str+"': "+number_of_word);
}

// number of vowels
function numberofvowels(inner_vowels_in_str){
    var number_of_vowels = 0;
    var i = 0;

    while(inner_vowels_in_str[i] != "."){
        if(inner_vowels_in_str[i] == vowels[0] || 
            inner_vowels_in_str[i] == vowels[1] ||
            inner_vowels_in_str[i] == vowels[2] ||
            inner_vowels_in_str[i] == vowels[3] ||
            inner_vowels_in_str[i] == vowels[4]){
            number_of_vowels++;
            }
        i++;
    }
    console.log("Number of vowels in '"+inner_vowels_in_str+"': "+number_of_vowels)
}

// functions call
lengthofstr(word);
numberofword(str);
numberofvowels(vowels_in_str);