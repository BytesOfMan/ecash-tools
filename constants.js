'use strict';
module.exports = {
    opReturn: {
        opReturnPrefix: '6a',
        opReturnAppPrefixLength: '04',
        opPushDataOne: '4c',
        appPrefixes: {
            '00746162': { app: 'Cashtab Msg', containsHash: false },
            '65746162': { app: 'Cashtab Encrypted', containsHash: false },
            '2e786563': { app: 'Alias', containsHash: false },
            '46555a00': { app: 'Cash Fusion', containsHash: false },
            '64726f70': { app: 'Airdrop', containsHash: true },
            '53575000': { app: 'Swap', containsHash: true },
        },
        memo: {
            prefix: '026d',
            app: 'memo',
            actions: {
                '6d01': {
                    action: 'Set name',
                    containsHash: false,
                    containsAddress: false,
                },
                '6d02': {
                    action: 'Post memo',
                    containsHash: false,
                    containsAddress: false,
                },
                '6d03': {
                    action: 'Reply to memo',
                    containsHash: true,
                    containsAddress: false,
                },
                '6d04': {
                    action: 'Like / tip memo',
                    containsHash: true,
                    containsAddress: false,
                },
                '6d05': {
                    action: 'Set profile text',
                    containsHash: false,
                    containsAddress: false,
                },
                '6d06': {
                    action: 'Follow user',
                    containsHash: false,
                    containsAddress: true,
                },
                '6d07': {
                    action: 'Unfollow user',
                    containsHash: false,
                    containsAddress: true,
                },
                '6d0a': {
                    action: 'Set profile picture',
                    containsHash: false,
                    containsAddress: false,
                },
                '6d0b': {
                    // Planned but not implemented
                    action: 'Repost memo',
                    containsHash: true,
                    containsAddress: false,
                },
                '6d0c': 'Post topic message',
                '6d0d': 'Topic follow',
                '6d0e': 'Topic unfollow',
                '6d10': 'Create poll',
                '6d13': 'Add poll option',
                '6d14': 'Poll vote',
                '6d16': 'Mute user',
                '6d17': 'Unmute user',
                '6d24': 'Send money',
                '6d30': 'Sell tokens Spec',
                '6d31': 'Token buy offer Spec',
                '6d32': 'Attach token sale signature Spec',
                '6d35': 'Pin token post',
                '6d20': 'Link request',
                '6d21': 'Link accept',
                '6d22': 'Link revoke',
                '6d26': 'Set address alias',
            },
        },
    },
};
