const low = require('lowdb');
const path = require('path');

const FileSync = require('lowdb/adapters/FileSync');
const adapter = new FileSync(path.join(__dirname, 'announcements.json'));

const announces = low(adapter);

//Set some defaults (required if your JSON file is empty)

announces.defaults({ ancm: []}).write();

module.exports = announces;