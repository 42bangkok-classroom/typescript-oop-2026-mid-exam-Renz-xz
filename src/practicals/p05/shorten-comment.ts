const comment = "TypeScript is a strongly typed programming language"

function shortenComment(comment: string): string {
  let words: string[] = comment.split(' ');
  let filteredwords: string[] = words.filter((word) => word.length>=5 && word.length<=10);
  console.log(filteredwords);
}