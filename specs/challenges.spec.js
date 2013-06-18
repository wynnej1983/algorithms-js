/*global require: true, describe: true, it: true*/
(function () {
  'use strict';

  var expect = require('chai').expect
    , challenges = require('../challenges');

  describe('#getEqualSumSubstring() \n`Print length of longest contiguous substring of s, such that length of substring is 2*N digits and sum of the leftmost N digits equals the sum of the rightmost N digits, otherwise print 0`', function () {
    describe('when null or undefined', function () {
      it('should print 0', function () {
        expect(challenges.getEqualSumSubstring(null)).to.eql(0);
        expect(challenges.getEqualSumSubstring()).to.eql(0);
      });
    });

    describe('when empty', function () {
      it('should print 0', function () {
        expect(challenges.getEqualSumSubstring('')).to.eql(0);
      });
    });

    describe('when contains 0', function () {
      it('should print 0', function () {
        expect(challenges.getEqualSumSubstring('0')).to.eql(0);
      });
    });

    describe('when no matches found', function () {
      it('should print 0', function () {
        expect(challenges.getEqualSumSubstring('12345')).to.eql(0);
      });
    });

    var cases = {
      '123231': { 6: '123231' },
      '986561517416921217551395112859219257312': { 36: '656151741692121755139511285921925731' },
      '2213': { 4: '2213' },
      '239844329845': { 10: '2398443298' },
      '11111122222222222': { 10: '2222222222' },
      '91111122222421265': { 12: '911111222224' },
      '726354726354781263547826354782635423465234': { 32: '26354781263547826354782635423465' },
      '531435235315353532543': { 14: '43523531535353' },
      '53263': { 4: '5326' }
    };
    Object
      .keys(cases)
      .forEach(function (i) {
        var len = parseInt(Object.keys(cases[i])[0], 10)
          , substr = cases[i][len];

        describe('when ' + '"' + i + '"', function () {
          it('should print len = ' + len + ' "' + substr.substring(0, substr.length / 2) + '|' + substr.substring(substr.length / 2, substr.length) + '"', function () {
            expect(challenges.getEqualSumSubstring(i)).to.eql(len);
          });
        });

      });
  });

  describe('#getNextNWhereOnesCountInRangeOneToNEqualsN()\n`Given a function f which takes a positive integer n which returns the number of 1s in the decimal representation of all the integers from 2 to n, inclusive, find the next value of n where f(n) = n`', function () {

    it('should print 199981 for next largest value of N', function () {
      expect(challenges.getNextNWhereOnesCountInRangeOneToNEqualsN()).to.eql(199981);
    });

  });

  describe('#getLongestPalindrome()\n`Prints the longest palindrome in a string`', function () {

    describe('when empty', function () {
      it('should print empty string', function () {
        expect(challenges.getLongestPalindrome('')).to.eql('');
      });
    });

    describe('when less than 2 chars long', function () {
      it('should print empty string', function () {
        expect(challenges.getLongestPalindrome('a')).to.eql('');
      });
    });

    describe('when no matches found', function () {
      it('should print empty string', function () {
        expect(challenges.getLongestPalindrome('abc')).to.eql('');
      });
    });

    var cases = {
      'racecar': { 7: 'racecar' },
      'bananas': { 5: 'anana' },
      'xxxnavanyyy': { 5: 'navan' },
      'xxavayy': { 3: 'ava' },
      'naan': { 4: 'naan' },
      'abracadabra': { 3: 'aca' }
    };
    Object
      .keys(cases)
      .forEach(function (i) {
        var len = parseInt(Object.keys(cases[i])[0], 10)
          , maxPalindrome = cases[i][len];

        describe('when ' + i, function () {
          it('should print ' + '"' + maxPalindrome + '"' + ' len = ' + len, function () {
            expect(challenges.getLongestPalindrome(i)).to.eql(maxPalindrome);
          });
        });

      });
  });

  describe('GengoAPI', function () {

    describe('POST /translate/jobs', function () {

      function getData() {
        return {
          'jobs': {
            'job_1': {
              'type': 'text',
              'slug': 'Single :: English to Japanese',
              'body_src': 'did i pass the test?',
              'lc_src': 'en',
              'lc_tgt': 'ja',
              'tier': 'standard'
            },
            'job_2': {
              'type': 'text',
              'slug': 'Single :: English to Japanese',
              'body_src': 'did i pass the test yet?',
              'lc_src': 'en',
              'lc_tgt': 'ja',
              'tier': 'standard'
            }
          }
        };
      }

      it.skip('should return valid response', function (done) {
        var data = getData();
        challenges.gengoPostTranslationJobs(data, function (res) {
          expect(res).to.include.keys('opstat');
          expect(res.opstat).to.eql('ok');
          done();
        });
      });

    });

  });

}());
