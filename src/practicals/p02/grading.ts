// Write your code below
const input = +process.argv[2]
if (input>=0 && input<=49) {
    console.log('F')
}
else if (input>=50 && input<=59) {
    console.log('D')
}
else if (input>=60 && input<=69) {
    console.log('C')
}
else if (input>=70 && input<=79) {
    console.log('B')
}
else if (input>=80 && input<=100) {
    console.log('A')
}
else {
    console.log('Invalid input')
}