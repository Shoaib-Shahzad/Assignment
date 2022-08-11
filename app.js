        //Question No:1

function rev (number){
let stringnum = number.toString();
let rev = stringnum.split("").reverse().join("");
console.log(rev);
}
rev(32243);

        //Question No:2

function checkvalue(string){
var len = string.length;
for(let x = 0; x < len / 2 ; x++){
    if (string[x] !== string[len - 1 - x]){
        return 'It is not a palindrome';
    }
}
return 'It is a palindrome';
}
let string = prompt('Enter The String');
let value = checkvalue(string);
console.log(value);

        //Question No:3

        function stringcombination(strng){
        let StringList = [];

        for (a = 0; a < strng.length; a++){

            for(var x = a + 1; x < strng.length+1; x++){
                StringList.push(strng.slice(a,x))
            }
        }
        return StringList;
        }
        console.log(stringcombination("dog"));

        //Question No:4

    function alphabet(key)
    {
    return key.split('').sort().join('');
    }
    console.log(alphabet("webmaster"))

        //Question No:5

function Capital_and_small_letter(variable)
{
let len = variable.split(' ');
let len_1 = [];
    
for(var x = 0; x < len.length; x++){
    len_1.push(len[x].charAt(0).toUpperCase()+len[x].slice(1));
}
return len_1.join(' ');
}
console.log(Capital_and_small_letter("the quick brown fox"));

        //Question No:6

        function cell(strong){

            var short = strong.match(/\w[a-z]{0,}/gi);

            var remove = short[0];

            for(var x = 1 ; x < short.length ; x++){

            if(remove.length < short[x].length){
            remove = short[x];
            } 

            }
            return remove;
        }

        console.log(cell('Web Development Tutorial'));

        //Question No:7

function number(parameter)
{
    var string = 'aeiouAEIOU';
    var num = 0;

    for(var x = 0; x < parameter.length ; x++)
{
if (string.indexOf(parameter[x]) != -1)
{
num += 1;
}

}
return num;
}
console.log(number("The quick brown fox"));

        //Question No:8

function check(num)
{

if (num === 1)
{
return false
}
else if(num === 2)
{
return true;
}else
{
for(var i = 2; i < num; i++)
{
if(num % i === 0)
{
return false;
}
}
return true;  
}
}

console.log(check(23));

        //Question No:9

                    function argument(value)
            {
            var accepts = [Function, RegExp, Number, String, Boolean, Object], i, len;
                
            if (typeof valuae === "object" || typeof value === "function") 
                {
                for (i = 0, len = accepts.length; i < len; i++) 
                {
                        if (value instanceof accepts[i])
                        {
                            return accepts[i];
                        }
                }
                }
                
                return typeof value;
            }
            console.log(argument(2611));

            console.log(argument( 'ShoaibHussaib'));

            console.log(argument(true ));

        //Question No:10

        function array(save){

            save.sort(function(b,a)
            {
                return b-a;
                });
                var main = [save[0]];
            
                var pass = [];
            
            for(var i = 1; i < save.length; i++){
            
                if(save[i - 1] !== save[i])
                {
                main.push(save[i]);
                }
            }
                pass.push(main[1],main[main.length-2]);
                return pass.join(',');
            }
            
            console.log(array([1,2,3,4,5]));

