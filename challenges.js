/*global module: true, require:true, console: true*/
module.exports = (function () {
  'use strict';

  var gengo = require('gengo-node');

  function getEqualSumSubstring(s) {
    s = s || '';
    var substr
      , len = s.length
      , maxLen = 0
      , left
      , right;

    try {
      parseInt(s, 10);
      if (s.split('').some(function (digit) { return digit === '0'; })) {
        throw new Error('Input string cannot contain any zeros');
      }
      if (s.length < 2) {
        throw new Error('Input string must be at least 2 chars long');
      }
    } catch (e) {
      console.log('Error: ' + e.message + '. Input string is invalid');
      return 0;
    }

    function sum(digitsStr) {
      return digitsStr.split('').reduce(function (i, num) { return parseInt(i, 10) + parseInt(num, 10); });
    }

    for (var i = 0; i + 1 < len; i++) {
      for (var j = 0; i - j >= 0 && i + j <= len; j++) {
        substr = s.substring(i - j, i + 2 + j);
        left = substr.substring(0, substr.length / 2);
        right = substr.substring(substr.length / 2, substr.length);
        if (sum(left) === sum(right)) {
          if (substr.length > maxLen) {
            maxLen = substr.length;
          }
        }
      }
    }

    return maxLen;
  }

  function getLongestPalindrome(s) {
    s = s || '';
    var maxPalindrome = ''
      , palindromeType = 'unknown'
      , substr
      , len = s.length;

    if (s.length < 2) {
      return '';
    }

    for (var i = 0; i < len; i++) {
      for (var j = 0; i - j >= 0 && i + 1 + j < len; j++) {
        if (palindromeType !== 'even' && i + j + 2 < len && s.charAt(i - j) === s.charAt(i + 2 + j)) {
          substr = s.substring(i - j, i + 3 + j);
          palindromeType = 'odd';
        }
        else if (palindromeType !== 'odd' && i + j + 1 < len && s.charAt(i - j) === s.charAt(i + 1 + j)) {
          substr = s.substring(i - j, i + 2 + j);
          palindromeType = 'even';
        }
        else {
          substr = null;
          palindromeType = 'unknown';
          break;
        }

        if (substr.length > maxPalindrome.length) {
          maxPalindrome = substr;
        }
      }
    }

    return maxPalindrome;
  }


  function getNextNWhereOnesCountInRangeOneToNEqualsN() {
    var n = 2
      , onesCount = 1;

    for (;;++n) {
      onesCount += n.toString().split('').reduce(function (i, j) {
            return parseInt(j, 10) === 1 ? i + 1 : i;
          }, 0);
      console.log('n=' + n + ' f(n)=' + onesCount);
      if (onesCount === n) {
        return n;
      }
    }
  }

  function gengoPostTranslationJobs(data, cb) {
    var creds = {
      publicKey: ')dDWI-{4K-UV16|^f}bYJwTSrGKLZNc4X[en25]Eyqd$ZHZLyC^^spg|YS5J|Y^d',
      privateKey: 'aE=5GK9FFK@^Z4~LN[Z^IAMduH6s1jr5xUoMi[lMciv6iMELp2yGBy$SJjFmmQ1h'
    };

    var gengoClient = new gengo.Gengo({
      'public': creds.publicKey,
      'private': creds.privateKey
    });

    gengoClient.postJobs(data, function (res) {
      console.log(res);
      cb(res);
    });
  }

  return {
    getEqualSumSubstring: getEqualSumSubstring,
    getLongestPalindrome: getLongestPalindrome,
    getNextNWhereOnesCountInRangeOneToNEqualsN: getNextNWhereOnesCountInRangeOneToNEqualsN,
    gengoPostTranslationJobs: gengoPostTranslationJobs
  };

}());
