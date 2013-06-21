#*global require: true, describe: true, it: true
do ->
  'use strict'

  expect = require('chai').expect
  challenges = require '../challenges'

  #turn off console.log for testing
  challenges.log = ->

  describe 'getEqualSumSubstring()', ->
    describe 'when undefined', ->
      it 'should print 0', ->
        expect(challenges.getEqualSumSubstring()).to.eql 0
    describe 'when null', ->
      it 'should print 0', ->
        expect(challenges.getEqualSumSubstring null ).to.eql 0
    describe 'when empty', ->
      it 'should print 0', ->
        expect(challenges.getEqualSumSubstring '').to.eql 0
    describe 'when contains 0', ->
      it 'should print 0', ->
        expect(challenges.getEqualSumSubstring '0').to.eql 0
    describe 'when no matches found', ->
      it 'should print 0', ->
        expect(challenges.getEqualSumSubstring '12345').to.eql 0

    cases =
      '123231':
        6: '123231'
      '986561517416921217551395112859219257312':
        36: '656151741692121755139511285921925731'
      '2213':
        4: '2213'
      '239844329845':
        10: '2398443298'
      '11111122222222222':
        10: '2222222222'
      '91111122222421265':
        12: '911111222224'
      '726354726354781263547826354782635423465234':
        32: '26354781263547826354782635423465'
      '531435235315353532543':
        14: '43523531535353'
      '53263':
        4: '5326'

    for k,v of cases
      for k1,v1 of v
        len = parseInt(k1, 10)
        substr = v1
      describe "when #{k}", ->
        left = substr.substring(0, substr.length / 2)
        right = substr.substring(substr.length / 2, substr.length)
        it "should print len = #{len} '#{left}|#{right}'", ->
          expect(challenges.getEqualSumSubstring k).to.eql len

  describe '#getNextNWhereOnesCountInRangeOneToNEqualsN()', ->
    it 'should print 199981 for next largest value of N', ->
      expect(challenges.getNextNWhereOnesCountInRangeOneToNEqualsN()).to.eql 199981

  describe '#getLongestPalindrome()', ->
    describe 'when empty', ->
      it 'should print empty string', ->
        expect(challenges.getLongestPalindrome '').to.eql ''
    describe 'when less than 2 chars long', ->
      it 'should print empty string', ->
        expect(challenges.getLongestPalindrome 'a').to.eql ''
    describe 'when no matches found', ->
      it 'should print empty string', ->
        expect(challenges.getLongestPalindrome 'abc').to.eql ''

    cases =
      'racecar':
        7: 'racecar'
      'bananas':
        5: 'anana'
      'xxxnavanyyy':
        5: 'navan'
      'xxavayy':
        3: 'ava'
      'naan':
        4: 'naan'
      'abracadabra':
        3: 'aca'

    for k,v of cases
      for k1,v1 of v
        len = parseInt(k1, 10)
        maxPalindrome = v1
      describe "when #{k}", ->
        it "should print '#{maxPalindrome}' len = #{len}", ->
          expect(challenges.getLongestPalindrome k).to.eql maxPalindrome

  describe 'GengoAPI', ->
    describe 'POST /translate/jobs', ->

      getData = ->
          'jobs':
            'job_1':
              'type': 'text'
              'slug': 'Single :: English to Japanese'
              'body_src': 'did i pass the test?'
              'lc_src': 'en'
              'lc_tgt': 'ja'
              'tier': 'standard'
            'job_2':
              'type': 'text'
              'slug': 'Single :: English to Japanese'
              'body_src': 'did i pass the test yet?'
              'lc_src': 'en'
              'lc_tgt': 'ja'
              'tier': 'standard'

      it.skip 'should return valid response', (done) ->
        data = getData()
        challenges.gengoPostTranslationJobs data, (res) ->
          expect(res).to.include.keys 'opstat'
          expect(res.opstat).to.eql 'ok'
          done()
