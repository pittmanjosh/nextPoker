export default function shuffle(arr: Array<any>): Array<any> {
  const oldArr = [...arr];
  const shuffledArr: Array<any> = [];

  while (oldArr.length > 0) {
    const currentLength = oldArr.length;
    const targetIndex = Math.floor(Math.random() * currentLength);
    const target = oldArr.splice(targetIndex, 1)[0];
    shuffledArr.push(target);
  }

  return shuffledArr;
}
