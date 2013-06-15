/*global require: true, describe: true, it: true*/
(function () {
  'use strict';

  var expect = require('chai').expect
    , challenges = require('../challenges');

  describe('#getEqualSumSubstring() \n`Print length of longest contiguous substring of s, such that length of substring is 2*N digits and sum of the leftmost N digits equals the sum of the rightmost N digits, otherwise print 0`', function () {
    it('prints 0 when empty string', function () {
      expect(challenges.getEqualSumSubstring('')).to.eql(0);
    });

    it('prints 0 when input is null or undefined', function () {
      try {
        challenges.getEqualSumSubstring(null);
      } catch (e) {
        expect(e).not.to.be.null;
      }
    });

    it('prints 0 when input has zero in string', function () {
      try {
        challenges.getEqualSumSubstring('0');
      } catch (e) {
        expect(e).not.to.be.null;
      }
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
        it(i + ' prints longest contiguous substring ' + substr.substring(0, substr.length / 2) + '|' + substr.substring(substr.length / 2, substr.length) + ' of length ' + len, function () {
          expect(challenges.getEqualSumSubstring(i)).to.eql(len);
        });
      });

  });

  describe('#getNextNWhereOnesCountInRangeOneToNEqualsN() \n`Given a function f which takes a positive integer n which returns the number of 1s in the decimal representation of all the integers from 2 to n, inclusive, find the next value of n where f(n) = n`', function () {

    it('prints 199981 for next largest value of N', function () {
      expect(challenges.getNextNWhereOnesCountInRangeOneToNEqualsN()).to.eql(199981);
    });

  });

  describe('#getLongestPalindrome() \n`Prints the longest palindrome in a string`', function () {

    it('prints empty string when input is empty string', function () {
      expect(challenges.getLongestPalindrome('')).to.eql('');
    });

    it('prints empty string when input is less then 2 chars long', function () {
      expect(challenges.getLongestPalindrome('a')).to.eql('');
    });

    it('prints empty string when input contains no palindromes', function () {
      expect(challenges.getLongestPalindrome('abc')).to.eql('');
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
        it(i + ' prints longest palindrome ' + maxPalindrome + ' of length ' + len, function () {
          expect(challenges.getLongestPalindrome(i)).to.eql(maxPalindrome);
        });
      });

  });

  describe('GengoAPI', function () {

    describe('POST /translate/jobs', function () {

      it('returns 200 OK');

    });

  });

}());
