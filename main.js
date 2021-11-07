const fs = require("fs");

(async () => {
    /** List compromised versions */
    let compromisedVersions = {
        coa: ['2.0.3', '2.0.4', '2.1.1', '2.1.3', '3.0.1', '3.1.3'],
        rc: ['1.2.9', '1.3.9', '2.3.9'],
        'ua-parser-js': ['0.7.29', '0.8.0', '1.0.0'],
    };
    let foldersToFind = Object.keys(compromisedVersions);

    /** The path list in wich to look */
    let txt = fs.readFileSync('./node_modules_on_disk.txt', { encoding: "utf-8" });
    let lines = txt.split('\n').map(line => line.replace(/"/gm, '').trim()).filter(line => fs.existsSync(line) && fs.lstatSync(line).isDirectory());
    console.log(`${lines.length} node_modules folders to check.`);

    /** Looking for sub folders */
    console.log(`Looking for: [${foldersToFind.join(', ')}] folders...`);
    for (let line of lines) {
        let folders = fs.readdirSync(line);
        for (let folder of folders) {
            let index = foldersToFind.indexOf(folder.toLowerCase());
            if (index != -1) {
                //-- Check version
                let package = JSON.parse(fs.readFileSync([line, folder, 'package.json'].join('/'), { encoding: 'utf-8' }));
                let versionOk = compromisedVersions[foldersToFind[index]].indexOf(package.version) == -1 ? `OK -> ${package.version}` : `KO -> ${package.version}`;
                console.log(`Found ${foldersToFind[index]} in: '${line}' version: ${versionOk}`);
                if (versionOk.indexOf('KO') != -1)
                    process.exit(0);
            }
        }
    }
    console.log('Complete check done, no compromised version found in the list of folder.');
})();
