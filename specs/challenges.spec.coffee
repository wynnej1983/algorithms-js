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

    describe 'when all matches found', ->
      cases = require './testCases1'
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

    describe 'when all matches found', ->
      cases = require './testCases2'
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
