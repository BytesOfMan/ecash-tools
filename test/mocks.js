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
        hash160Conversions: [
            {
                prefix: 'ecash',
                type: 'P2SH',
                hash: 'd37c4c809fe9840e7bfa77b86bd47163f6fb6c60',
                address: 'ecash:prfhcnyqnl5cgrnmlfmms675w93ld7mvvqd0y8lz07',
            },
        ],
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
                    constants.opReturn.appPrefixes['64726f70'].app,
                    '0ade3e5b813b2e9e41eeea0ddc73fc904209fcec4c9e74fdff6e4f3148f40b0f',
                    constants.opReturn.appPrefixes['00746162'].app,
                    '来自GDC  etoken的空投奖励！----兰吉',
                ],
            },
            {
                outputScript:
                    '6a040074616233f09f8e89436f6e67726174756c6174696f6e7320746f207468652044696365f09f8eb257696e21f09f8e89202d654b6f757368',
                txid: '2958a0bf0f69be1e5e237a21172f19a422e9e25c7eb9e790daec148f8d4d53cd',
                parsed: [
                    constants.opReturn.appPrefixes['00746162'].app,
                    '🎉Congratulations to the Dice🎲Win!🎉 -eKoush',
                ],
            },
            {
                outputScript: '6a026d0106746573742032',
                txid: '753e29e81cdea12dc5fa30ca89049ca7d538d4062c4bb1b19ecf2a209a3ac8d9',
                parsed: [
                    `${constants.opReturn.memo.app}: ${constants.opReturn.memo.actions['6d01'].action}`,
                    'test 2',
                ],
            },
            {
                txid: 'c7e91099923a28cf86685c9683c74c8c029c8965a5039f84ad79886b42720f9b',
                outputScript:
                    '6a026d02374c6f72656d20697073756d20646f6c6f722073697420616d65742c20636f6e73656374657475722061646970697363696e6720656c6974',
                parsed: [
                    `${constants.opReturn.memo.app}: ${constants.opReturn.memo.actions['6d02'].action}`,
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
                ],
            },
            {
                txid: 'fc68765dec0674c531dec5e2aa53087814d642fe8720d886162a90b8618a284c',
                outputScript:
                    '6a026d0320fe32a4bc5a52ce9b861725462ad7d5d223d3554532eb172c7d29feca5722d44c145468616e6b7320666f72207469707072626f7421',
                parsed: [
                    `${constants.opReturn.memo.app}: ${constants.opReturn.memo.actions['6d03'].action}`,
                    'fe32a4bc5a52ce9b861725462ad7d5d223d3554532eb172c7d29feca5722d44c',
                    'Thanks for tipprbot!',
                ],
            },
            {
                txid: 'b7b9376659920ecbaad794bfb1cd0a5da095f9231fe1f4243474c9606623fc14',
                outputScript:
                    '6a026d04201f1f63293441c673033f9112bab1b3071b2f06f68d3032a23ba9eda819694520',
                parsed: [
                    `${constants.opReturn.memo.app}: ${constants.opReturn.memo.actions['6d04'].action}`,
                    `1f1f63293441c673033f9112bab1b3071b2f06f68d3032a23ba9eda819694520`,
                ],
            },
            {
                txid: '89ce64d809cfdfc2b407e94fc6eae43f1bc370dfe85b33c06e780831a1934a50',
                outputScript:
                    '6a026d0543566572696669636174696f6e3a2068747470733a2f2f747769747465722e636f6d2f6d656d6f6263682f7374617475732f393932303333363532373635373030303937',
                parsed: [
                    `${constants.opReturn.memo.app}: ${constants.opReturn.memo.actions['6d05'].action}`,
                    `Verification: https://twitter.com/memobch/status/992033652765700097`,
                ],
            },
            {
                txid: '7958e54680a4ed01316ce99489f54c26234060c0a18d5ffc4d4d44182e1a2891',
                outputScript:
                    '6a026d0614fe686b9b2ab589a3cb3368d02211ca1a9b88aa42',
                parsed: [
                    `${constants.opReturn.memo.app}: ${constants.opReturn.memo.actions['6d06'].action}`,
                    `ecash:qrlxs6um926cng7txd5dqgs3egdfhz92gg60t20kkn`,
                ],
            },
            {
                txid: 'a9987c7643a3d5a033b2630cf7e3603385b7ab6ec7b6be690f37b9a58c780acd',
                outputScript:
                    '6a026d0714fe686b9b2ab589a3cb3368d02211ca1a9b88aa42',
                parsed: [
                    `${constants.opReturn.memo.app}: ${constants.opReturn.memo.actions['6d07'].action}`,
                    `ecash:qrlxs6um926cng7txd5dqgs3egdfhz92gg60t20kkn`,
                ],
            },
            {
                txid: '71b69cf5872a3c13f3505f3261d715cc9cd3b5766f1849c830ce1d3741ef947e',
                outputScript:
                    '6a026d0a1f68747470733a2f2f692e696d6775722e636f6d2f4a504c695664382e706e67',
                parsed: [
                    `${constants.opReturn.memo.app}: ${constants.opReturn.memo.actions['6d0a'].action}`,
                    `https://i.imgur.com/JPLiVd8.png`,
                ],
            },
        ],
    },
};
