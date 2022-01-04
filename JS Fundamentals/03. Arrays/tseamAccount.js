function tseam(arr) {
    let index = 0;
    let games = arr[index].split(' ');
    index++;
    while (arr[index] != 'Play!') {
        let action = arr[index].split(' ')[0];
        let game = arr[index].split(' ')[1];
        switch (action) {
            case 'Install':
                if (!games.includes(game)) {
                    games.push(game);
                }
                break;
            case 'Uninstall':
                if (games.includes(game)) {
                    let uninstallIndex = games.indexOf(game);
                    games.splice(uninstallIndex, 1);
                }
                break;
            case 'Update':
                if (games.includes(game)) {
                    let updateIndex = games.indexOf(game);
                    games.splice(updateIndex, 1);
                    games.push(game);
                }
                break;
            case 'Expansion':
                let expandedGame = game.split('-')[0];
                let expansion = game.split('-')[1];
                let expandIndex = games.indexOf(expandedGame);
                if (games.includes(expandedGame)) {
                    games.splice(expandIndex + 1, 0, `${expandedGame}:${expansion}`);
                }
                break;
        }
        index++;
    }
    console.log(games.join(' '));
}

tseam(['CS WoW Diablo',
    'Install LoL',
    'Uninstall WoW',
    'Update Diablo',
    'Expansion CS-Go',
    'Play!'
]);