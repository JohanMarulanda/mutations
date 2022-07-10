host        =   'rs0/n1-c2-mongodb-clevercloud-customers.services.clever-cloud.com:27017,n2-c2-mongodb-clevercloud-customers.services.clever-cloud.com:27017',
db          =   'bulyhndakfleuog',
user        =   'u8hln3uia12omlssducw',
port        =   '27017',
password    =   'dtNFSDWLtRZDOottFmDV'


module.exports = {
    database:[`mongodb://${user}:${password}@${host}:${port}/${db}`]
};