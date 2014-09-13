#global require: true, describe: true, it: true
do ->
  'use strict'

  expect = require('chai').expect
  challenges = require '../challenges'

  #alias describe as context keyword keeping inline with rpec syntax
  context = describe
  #turn off console.log for testing
  challenges.log = ->

  describe '#getEqualSumSubstring()', ->
    context 'when undefined', ->
      it 'should print 0', ->
        expect(challenges.getEqualSumSubstring()).to.eql 0
        
    context 'when null', ->
      it 'should print 0', ->
        expect(challenges.getEqualSumSubstring null ).to.eql 0
        
    context 'when empty', ->
      it 'should print 0', ->
        expect(challenges.getEqualSumSubstring '').to.eql 0
        
    context 'when contains 0', ->
      it 'should print 0', ->
        expect(challenges.getEqualSumSubstring '0').to.eql 0
        
    context 'when no matches found', ->
      it 'should print 0', ->
        expect(challenges.getEqualSumSubstring '12345').to.eql 0
        
    context 'when all matches found', ->
      cases = require './testCases1'
      for k,v of cases
        for k1,v1 of v
          len = parseInt(k1, 10)
          substr = v1
        context "when #{k}", ->
          left = substr.substring(0, substr.length / 2)
          right = substr.substring(substr.length / 2, substr.length)
          it "should print len = #{len} '#{left}|#{right}'", ->
            expect(challenges.getEqualSumSubstring k).to.eql len

  describe '#getNextNWhereOnesCountInRangeOneToNEqualsN()', ->
    it 'should print 199981 for next largest value of N', ->
      expect(challenges.getNextNWhereOnesCountInRangeOneToNEqualsN()).to.eql 199981

  describe '#getLongestPalindrome()', ->
    context 'when empty', ->
      it 'should print empty string', ->
        expect(challenges.getLongestPalindrome '').to.eql ''
        
    context 'when less than 2 chars long', ->
      it 'should print empty string', ->
        expect(challenges.getLongestPalindrome 'a').to.eql ''
        
    context 'when no matches found', ->
      it 'should print empty string', ->
        expect(challenges.getLongestPalindrome 'abc').to.eql ''
        
    context 'when all matches found', ->
      cases = require './testCases2'
      for k,v of cases
        for k1,v1 of v
          len = parseInt(k1, 10)
          maxPalindrome = v1
        context "when #{k}", ->
          it "should print '#{maxPalindrome}' len = #{len}", ->
            expect(challenges.getLongestPalindrome k).to.eql maxPalindrome

  describe 'GengoAPI', ->
    context 'POST /translate/jobs', ->
      data = require './testCases3'
      it.skip 'should return valid response', (done) ->
        challenges.gengoPostTranslationJobs data, (res) ->
          expect(res).to.include.keys 'opstat'
          expect(res.opstat).to.eql 'ok'
          done()
