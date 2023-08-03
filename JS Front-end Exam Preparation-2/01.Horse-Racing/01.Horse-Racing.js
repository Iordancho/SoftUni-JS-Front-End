function solve(input) {
  const horses = input.shift().split("|");

  let command = input.shift();

  while (command !== "Finish") {
    command = command.split(" ");
    const currCommand = command.shift();

    if (currCommand === "Retake") {
      let overtakingHorse = command[0];
      let overtakingHorsePosition = horses.indexOf(overtakingHorse);
      let overtakenHorse = command[1];
      let overtakenHorsePosition = horses.indexOf(overtakenHorse);

      if (overtakingHorsePosition < overtakenHorsePosition) {
        horses[overtakenHorsePosition] = overtakingHorse;
        horses[overtakingHorsePosition] = overtakenHorse;
        console.log(`${overtakingHorse} retakes ${overtakenHorse}.`);
      }
    } else if (currCommand === "Trouble") {
      let troubleHorse = command[0];
      let troubleHorsePosition = horses.indexOf(troubleHorse);

      if (troubleHorsePosition > 0) {
        horses[troubleHorsePosition] = horses[troubleHorsePosition - 1];
        horses[troubleHorsePosition - 1] = troubleHorse;
        console.log(`Trouble for ${troubleHorse} - drops one position.`);
      }
    } else if (currCommand === "Rage") {
      let horse = command[0];
      let horsePosition = horses.indexOf(horse);

      if (horsePosition === horses.length - 2) {
        horses[horsePosition] = horses[horses.length - 1];
        horses[horses.length - 1] = horse;
      } else if (horsePosition < horses.length - 2) {
        horses[horsePosition] = horses[horsePosition + 1];
        horses[horsePosition + 1] = horses[horsePosition + 2];
        horses[horsePosition + 2] = horse;
      }
      console.log(`${horse} rages 2 positions ahead.`);
    } else if (currCommand === "Miracle") {
      let horse = horses.shift();
      horses.push(horse);
      console.log(`What a miracle - ${horses[horses.length - 1]} becomes first.`);
    }

    command = input.shift();
  }

  console.log(horses.join('->'));
  console.log(`The winner is: ${horses.pop()}`)
}

solve((['Fancy|Lilly',
'Retake Lilly Fancy',
'Trouble Lilly',
'Trouble Lilly',
'Finish',
'Rage Lilly'])
);
