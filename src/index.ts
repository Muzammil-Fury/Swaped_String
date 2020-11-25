//intiate 
const simpleText: string = "Hi there !!!";
console.log("simpleText:", simpleText);

//get length of string
const simpleTextLength: number = simpleText.length;

//start loop with i = to last index ,
let swapedText = "";
for (var i = simpleTextLength - 1; i >= 0; i--) {
    swapedText += simpleText[i];
}
console.log("swapedText:", swapedText);
