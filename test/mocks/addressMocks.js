module.exports = {
    changeAddressPrefixMocks: {
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
};
