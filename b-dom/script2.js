class Backpack {
    constructor(
      name,
      volume,
      color,
      pocketNum,
      strapLengthL,
      strapLengthR,
      lidOpen,
      dateAcquired
    ) {
      this.name = name;
      this.volume = volume;
      this.color = color;
      this.pocketNum = pocketNum;
      this.strapLength = {
        left: strapLengthL,
        right: strapLengthR,
      };
      this.lidOpen = lidOpen;
      this.dateAcquired = dateAcquired;
    }
    toggleLid(lidStatus) {
      this.lidOpen = lidStatus;
    }
    newStrapLength(lengthLeft, lengthRight) {
      this.strapLength.left = lengthLeft;
      this.strapLength.right = lengthRight;
    }
    backpackAge() {
      let now = new Date();
      let acquired = new Date(this.dateAcquired);
      let elapsed = now - acquired;
      let daysSinceAcquired = Math.floor(elapsed / (1000 * 3600 * 24 * 365.25));
      return daysSinceAcquired;
    }
  }
  

const everydayPack = new Backpack(
  "Everyday Backpack",
  30,
  "grey",
  15,
  26,
  26,
  false,
  "April 5, 2018 15:00:00 PST"
);


console.log("The everydayPack object:", everydayPack);
console.log("The pocketNum value:", everydayPack.pocketNum);
console.log("Days since aquired:", everydayPack.backpackAge());

document.body.innerHTML = 
`
<main>
  <article>
    <h1>${everydayPack.name}:</h1>
    <ul>
      <li>Volume: ${everydayPack.volume}.</li>
      <li>Color: ${everydayPack.color}.</li>
      <li>Age: ${everydayPack.backpackAge()}.</li>
      <li>Number of pockets: ${everydayPack.pocketNum}.</li>
      <li>Left strap length: ${everydayPack.strapLength.left}.</li>
      <li>Right strap length: ${everydayPack.strapLength.right}.</li>
      <li>Lid status: ${everydayPack.lidOpen}.</li>
    </ul>
  </article>
</main>
`
;

const main = document.querySelector("main");
const li = document.querySelector("li");
main.style.backgroundColor = 'red';
main.style.color = 'yellow';
li.style.backgroundColor = 'blue';
li.style.color = 'red';

const attr = li.attributes;
console.log(attr);