## Coa, Rc, ua-parser-js

Check the version of the packaging and see if it wasn't compromised.

List of versions was taken from: 
https://therecord.media/malware-found-in-coa-and-rc-two-npm-packages-with-23m-weekly-downloads/
https://therecord.media/malware-found-in-npm-package-with-millions-of-weekly-downloads/

## Instructions
Place line by line the path of your node_modules folder on your system in "node_modules_on_disk.txt".
Execute the script with `node main.js`

> ⚠️ If the script stop before `"Complete check done"`, it mean that the subfolder contains a compromised version. ⚠️

### Windows
You can research "node_modules" in windows search, when it's done: `CTRL + A` and `SHIFT + Right click` select `Copy as path` and paste it in the "node_modules_on_disk.txt"

### Linux
You can research "node_modules" with `find / -type d -name "node_modules" 2>/dev/null > node_modules_on_disk.txt`