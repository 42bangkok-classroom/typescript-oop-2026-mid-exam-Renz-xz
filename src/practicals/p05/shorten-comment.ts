const comment = "TypeScript is a strongly typed programming language"

function shortenComment(comment: string): string {
  let wordArray: string[] = comment.split(' ');
  if(wordArray.length >=5 && wordArray.length<=10){
    console.log(wordArray)
  }
}