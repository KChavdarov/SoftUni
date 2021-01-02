function crafting(input) {
    let particles = input.shift().split('|');
    let action = input.shift();

    while (action != 'Done') {
        let [command, instruction, index] = action.split(' ');
        index = Number(index);
        if (instruction == 'Right') {
            if (index >= 0 && index < particles.length - 1) {
                let particle = particles[index];
                particles.splice(index, 1);
                particles.splice(index + 1, 0, particle);
            }
        } else if (instruction == 'Left') {
            if (index > 0 && index < particles.length) {
                let particle = particles[index];
                particles.splice(index, 1);
                particles.splice(index - 1, 0, particle);
            }
        } else if (instruction == 'Even') {
            console.log(particles.filter((v, i) => i % 2 == 0).join(' '));
        } else if (instruction == 'Odd') {
            console.log(particles.filter((v, i) => i % 2 == 1).join(' '));
        }
        action = input.shift();
    }
    let weapon = particles.join('');
    console.log(`You crafted ${weapon}!`);
}
crafting(["ri|As|er|hb|ng",
"Move Left 1",
"Move Right 2",
"Move Right 3",
"Move Left 2",
"Done"]);
