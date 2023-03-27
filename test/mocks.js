const constants = require('../constants');
module.exports = {
    addressMocks: {
        array: {
            addresses: [
                'ectest:qq0zx8rlnv6ptk4220h95lsjuys0qrkzzgefe7v48f',
                'ectest:pqg4zrf9vpu5k0khhae5hs8qxrnsund59586xakacv',
                'ectest:qzgm3at0z4grpa6ztxly8hl5m99xykxcfgq8as2f5s',
                'ectest:prtypwksltlza6kfls8q7z0m3xgxvf37hueurlt7k3',
                'ectest:qq9qtzhvwky0e2qqwppkkqsvx5kz3ydksquux5n57t',
                'ectest:pqzk7ksuqllr35n7249c30v90ajtm28tduc9xy7waa',
                'ectest:qpdgg52njxr0adzh3d84vy7ldxg7xpuzxq86lyhgzt',
                'ectest:pzvzn76pu0ptea4pvscs57kt7zkucrp7uyvxumlan8',
            ],
            newPrefix: 'ecash',
            result: [
                'ecash:qq0zx8rlnv6ptk4220h95lsjuys0qrkzzglz87tcyc',
                'ecash:pqg4zrf9vpu5k0khhae5hs8qxrnsund595p3ca3sma',
                'ecash:qzgm3at0z4grpa6ztxly8hl5m99xykxcfgxvrsdyhp',
                'ecash:prtypwksltlza6kfls8q7z0m3xgxvf37hulhalvn4q',
                'ecash:qq9qtzhvwky0e2qqwppkkqsvx5kz3ydksq6hc55ea6',
                'ecash:pqzk7ksuqllr35n7249c30v90ajtm28tdu7wcyer7v',
                'ecash:qpdgg52njxr0adzh3d84vy7ldxg7xpuzxqp3pys9p6',
                'ecash:pzvzn76pu0ptea4pvscs57kt7zkucrp7uy2dzmcssk',
            ],
        },
        string: {
            address: 'ecash:prfhcnyqnl5cgrnmlfmms675w93ld7mvvqd0y8lz07',
            newPrefix: 'etoken',
            result: 'etoken:prfhcnyqnl5cgrnmlfmms675w93ld7mvvqr3d9f9tf',
        },
    },
    parseMocks: {
        outputScripts: [
            {
                outputScript:
                    '6a0464726f70200ade3e5b813b2e9e41eeea0ddc73fc904209fcec4c9e74fdff6e4f3148f40b0f04007461622de69da5e887aa474443202065746f6b656ee79a84e7a9bae68a95e5a596e58ab1efbc812d2d2d2de585b0e59089',
                txid: 'ec2b5a3c02c3efccf3658e02718fbc497735389ce243458e9d1d3200eee76606',
                parsed: [
                    constants.opReturn.appPrefixes['64726f70'],
                    '0ade3e5b813b2e9e41eeea0ddc73fc904209fcec4c9e74fdff6e4f3148f40b0f',
                    constants.opReturn.appPrefixes['00746162'],
                    '来自GDC  etoken的空投奖励！----兰吉',
                ],
            },
            {
                outputScript:
                    '6a040074616233f09f8e89436f6e67726174756c6174696f6e7320746f207468652044696365f09f8eb257696e21f09f8e89202d654b6f757368',
                txid: '2958a0bf0f69be1e5e237a21172f19a422e9e25c7eb9e790daec148f8d4d53cd',
                parsed: [
                    constants.opReturn.appPrefixes['00746162'],
                    '🎉Congratulations to the Dice🎲Win!🎉 -eKoush',
                ],
            },
        ],
    },
};
