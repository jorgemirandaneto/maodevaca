const db = require('../config/database');
const card = db.card;


exports.add = (cardAdd) => {
    const { Name ,  } = cardAdd
    console.log(cardAdd)
    card.create({
        Name,
        key_user,
        Limit
    }).then(() => {return 'Ok!'})
 };