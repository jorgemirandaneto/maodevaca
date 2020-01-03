const db = require('../config/database');
const card = db.card;


exports.add = (cardAdd) => {
    const { name } = cardAdd
    card.create({
        name: cardAdd.name
    }).then(() => {return 'Ok!'})
 };