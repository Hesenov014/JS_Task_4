let num1 = +prompt("Birinci ededi daxil edin")
let o = prompt("operatoru daxil edin")
let num2 = +prompt("Ikinci ededi daxil edin")

switch(o){
    case '+':
    document.write(num1 + num2)
        break;
    case '-':
    document.write(num1 - num2)
        break;
    case '*':
    document.write(num1 * num2)
        break;
    case '/':
    document.write(num1 / num2)
        break;
    default:
        document.write("duzgun eded daxil edin")

}