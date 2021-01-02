function santasSecretHelper(input) {
    let key = Number(input.shift());
    let message = input.shift();
    let goodKids = [];

    while (message != 'end') {
        let decoded = '';
        message.split('').forEach(a => {
            char = String.fromCharCode(a.charCodeAt() - key);
            decoded += char;
        });
        let pattern = /@(?<name>[a-zA-Z]+)[^@!:>-]*!(?<behavior>[GN])!/;
        let match = pattern.exec(decoded);
        if (match) {
            let name = match.groups.name;
            let behavior = match.groups.behavior;
            if (behavior == 'G'){
                goodKids.push(name);
            }
        }
        message = input.shift();
    }
    console.log(goodKids.join('\n'));
}
santasSecretHelper([
    '3',
    'CNdwhamigyenumje$J$',
    'CEreelh-nmguuejn$J$',
    'CVwdq&gnmjkvng$Q$',
    'end'
]);

santasSecretHelper([
    '4',
    '~lwzjkl~jenlymfDFsffmiCwozwlzjln%K%',
    '0zfjrl}xnrlDWeqqmi/wnznlwzjnn%K%onhfhnf',
    ';:<lyiljz{onzDPere=;=9<;8=rhknlf%K%',
    "Wonvfkmwzkmpwvzkm'lhjnlDWeqerxle0wlnzj{nz%K%nohwn",
    'DReh}e=<4lhzj1%K%',
    'end'
  ]);

  santasSecretHelper([
    '3',
    "N}eideidmk$'(mnyenmCNlpamnin$J$",
    'ddddkkkkmvkvmCFrqqru-nvevek$J$nmgievnge',
    'ppqmkkkmnolmnnCEhq/vkievk$Q$',
    'yyegiivoguCYdohqwlqh/kguimhk$J$',
    'end'
  ]
  );