const { describe, it } = require('node:test');
const assert = require('node:assert/strict');
const { extractEmails, isValidEmail, getValidEmails } = require('./email');

describe('extractEmails', () => {
    it('returns email strings from member objects', () => {
        const members = [
            { name: 'Alice', email: 'alice@example.com' },
            { name: 'Bob', email: 'bob@example.com' },
        ];
        assert.deepEqual(extractEmails(members), ['alice@example.com', 'bob@example.com']);
    });

    it('returns empty array for non-array input', () => {
        assert.deepEqual(extractEmails(null), []);
        assert.deepEqual(extractEmails('not-an-array'), []);
    });
});

describe('isValidEmail', () => {
    it('accepts valid email addresses', () => {
        assert.equal(isValidEmail('user@example.com'), true);
    });

    it('rejects invalid email addresses', () => {
        assert.equal(isValidEmail('not-an-email'), false);
        assert.equal(isValidEmail(''), false);
        assert.equal(isValidEmail(null), false);
    });
});

describe('getValidEmails', () => {
    it('returns only valid emails from members', () => {
        const members = [
            { email: 'good@example.com' },
            { email: 'bad' },
            { email: 'also-good@test.org' },
            { email: 123 },
        ];
        assert.deepEqual(getValidEmails(members), ['good@example.com', 'also-good@test.org']);
    });

    it('returns empty array for non-array input', () => {
        assert.deepEqual(getValidEmails(undefined), []);
    });
});
