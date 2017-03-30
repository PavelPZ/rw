//Data from registry: HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\ContentIndex\Language
using System;
using System.Collections.Generic;

namespace StemmerBreaker {

  public enum PutTypes { put, alt, EOW, EOS, EOP, EOC, phraseStart, phraseEnd, phrase, phraseSmall, error }

  public struct Put { public Put(PutTypes type, string word, int srcPos = -1, string modifier = null) { this.type = type; this.word = word; this.srcPos = srcPos; this.modifier = modifier; } PutTypes type; string word; string modifier; int srcPos; }

  public class Runner {

    static bool initiated;

    public static void init(string libBasicPath) {
      if (initiated) return;
      initiated = true;
      Lib.initFactories(libBasicPath);
    }

    public Runner(Langs lang) {
      if (!initiated) throw new Exception("Call Runner.init first");
      this.lang = lang;
    }

    public List<Put> wordBreak(string text, List<Put> res = null) {
      if (res == null) res = new List<Put>();
      if (breaker == null) breaker = Lib.items[lang].getWordBreaker();
      if (breaker == null) breaker = Lib.items[Langs.neutral].getWordBreaker();
      CWordSink cws = new CWordSink(res);
      CPhraseSink cps = new CPhraseSink(res);
      TEXT_SOURCE pTextSource = new TEXT_SOURCE();
      pTextSource.pfnFillTextBuffer += fillTextBuffer;
      pTextSource.awcBuffer = text;
      pTextSource.iCur = 0;
      pTextSource.iEnd = text.Length;
      breaker.BreakText(ref pTextSource, cws, cps);
      return res;
    }

    public List<Put> stemm(string word, List<Put> res = null) {
      if (res == null) res = new List<Put>();
      if (stemmer == null) stemmer = Lib.items[lang].getStemmer();
      if (stemmer == null) { res.Add(new Put(PutTypes.put, word)); return res; }
      CWordFormSink sink = new CWordFormSink(res);
      stemmer.GenerateWordForms(word, word.Length, sink);
      return res;
    }

    public static void test(string libBasicPath) {
      Runner.init(libBasicPath);

      foreach (var kv in Lib.items) { var st = kv.Value.getStemmer(); var br = kv.Value.getWordBreaker(); }

      var stemm = new Runner(Langs.cs_cz);
      var res = stemm.stemm("udělají");
      res = stemm.wordBreak("Jak se u vás mají?");

      stemm = new Runner(Langs.ar_sa);
      res = stemm.stemm("XXX");
      res = stemm.wordBreak("XXX YYY ZZZ HHH");

      stemm = new Runner(Langs.neutral);
      res = stemm.stemm("XXX");
      res = stemm.wordBreak("XXX YYY ZZZ HHH");
    }

    //**************** private
    static uint fillTextBuffer(ref TEXT_SOURCE ts) {
      return WBREAK_E_END_OF_TEXT;
    }
    const uint WBREAK_E_END_OF_TEXT = 0x80041780;

    class CWordFormSink : IWordFormSink {
      public CWordFormSink(List<Put> data) { this.data = data; }
      List<Put> data;
      public void PutAltWord(string pwcInBuf, int cwc) { data.Add(new Put(PutTypes.alt, pwcInBuf.Substring(0, cwc))); }
      public void PutWord(string pwcInBuf, int cwc) { data.Add(new Put(PutTypes.put, pwcInBuf.Substring(0, cwc))); }
    }

    class CWordSink : IWordSink {
      public CWordSink(List<Put> data) { this.data = data; }
      List<Put> data;
      public void PutWord(int cwc, string pwcInBuf, int cwcSrcLen, int cwcSrcPos) { data.Add(new Put(PutTypes.put, pwcInBuf.Substring(0, cwcSrcLen), cwcSrcPos)); }
      public void PutAltWord(int cwc, string pwcInBuf, int cwcSrcLen, int cwcSrcPos) { data.Add(new Put(PutTypes.alt, pwcInBuf.Substring(0, cwcSrcLen), cwcSrcPos)); }
      public void StartAltPhrase() { data.Add(new Put(PutTypes.phraseStart, null)); }
      public void EndAltPhrase() { data.Add(new Put(PutTypes.phraseEnd, null)); }
      public void PutBreak(WORDREP_BREAK_TYPE breakType) {
        switch (breakType) {
          case WORDREP_BREAK_TYPE.WORDREP_BREAK_EOC: data.Add(new Put(PutTypes.EOC, null)); break;
          case WORDREP_BREAK_TYPE.WORDREP_BREAK_EOP: data.Add(new Put(PutTypes.EOP, null)); break;
          case WORDREP_BREAK_TYPE.WORDREP_BREAK_EOS: data.Add(new Put(PutTypes.EOS, null)); break;
          case WORDREP_BREAK_TYPE.WORDREP_BREAK_EOW: data.Add(new Put(PutTypes.EOW, null)); break;
          default: data.Add(new Put(PutTypes.error, null)); break;
        }
      }
    }

    class CPhraseSink : IPhraseSink {
      public CPhraseSink(List<Put> data) { this.data = data; }
      List<Put> data;
      public void PutSmallPhrase(string pwcNoun, int cwcNoun, string pwcModifier, int cwcModifier, int ulAttachmentType) { data.Add(new Put(PutTypes.phrase, pwcNoun.Substring(0, cwcNoun), -1, pwcModifier.Substring(0, cwcModifier))); }
      public void PutPhrase(string pwcPhrase, int cwcPhrase) { data.Add(new Put(PutTypes.phrase, pwcPhrase.Substring(0, cwcPhrase))); }
    }

    IStemmer stemmer;
    IWordBreaker breaker;
    Langs lang;
  }
}
