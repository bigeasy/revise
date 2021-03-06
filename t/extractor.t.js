require('proof')(1, prove)

function prove (assert) {
    var mvcc = require('..')

    var record = {
        first: 'George',
        last: 'Washington',
        occupation: 'President',
        version: 1
    }

    function extractor (record) {
        return {
            last: record.last,
            first: record.first
        }
    }

    var key = (mvcc.extractor(extractor))(record)

    assert(key, {
        value: {
            first: 'George',
            last: 'Washington',
        },
        version: 1
    }, 'equal')
}
