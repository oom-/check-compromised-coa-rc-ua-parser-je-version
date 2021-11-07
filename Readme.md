## Coa, Rc, ua-parser-js

Check the version of the packaging (in list) and see if it wasn't compromised.

__The list of versions comes from:__
* https://therecord.media/malware-found-in-coa-and-rc-two-npm-packages-with-23m-weekly-downloads/
* https://therecord.media/malware-found-in-npm-package-with-millions-of-weekly-downloads/

## Instructions
1. Replace the content of **"node_modules_on_disk.txt"** by the list of **"node_modules"** folders on your system (one by line).
2. Execute the script with `node main.js`

> ⚠️ If the script stop before `"Complete check done"`, it mean that the subfolder contains a compromised version. ⚠️

![Screenshot](https://raw.githubusercontent.com/oom-/check_compromised_coa_rc_ua-parser-je_version/master/screenshot.jpg)

### Windows
You can research "node_modules" in windows search, when it's done: `CTRL + A` and `SHIFT + Right click` select `Copy as path` and paste it in the "node_modules_on_disk.txt"

### Linux
You can research "node_modules" with `find / -type d -name "node_modules" 2>/dev/null > node_modules_on_disk.txt`
