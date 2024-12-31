function firstWord(s) {
  // your code here
	 s = s.trim() + " ";
  let firstBlank = s.indexOf(" ");
  return s.substr(0, firstBlank);
}

// Do not change the code below


const s = prompt("Enter String:");
alert(firstWord(s));
