import { caesarCipher } from "../src/caesarCipher";

test("returns a string", () => {
  expect(typeof caesarCipher("hi", 3)).toBe("string");
});

test("works with one word lower case, 1 shift", () => {
  expect(caesarCipher("hi", 1)).toBe("ij");
});

test("works with one word lower case, 4 shift", () => {
  expect(caesarCipher("hello", 4)).toBe("lipps");
});

test("text wrapping z to a", () => {
  expect(caesarCipher("z", 1)).toBe("a");
});

test("text wrapping z to a with full word", () => {
  expect(caesarCipher("hello", 25)).toBe("gdkkn");
});

test("works with capitals, 1 shift", () => {
  expect(caesarCipher("HI", 1)).toBe("IJ");
});

test("works with capitals bigger word and shift", () => {
  expect(caesarCipher("HOWDY", 25)).toBe("GNVCX");
});

test("works with mixture of upper and lower case letters", () => {
  expect(caesarCipher("HoWdy", 25)).toBe("GnVcx");
});

test("can handle mutliple words", () => {
  expect(caesarCipher("HoWdy pARTner", 25)).toBe("GnVcx oZQSmdq");
});

test("can handle numbers", () => {
  expect(caesarCipher("123", 25)).toBe("123");
});

test("can handle mutliple words and punctuation", () => {
  expect(
    caesarCipher(
      `The well-known story I told at the conferences [about hypocondria] in Boston, New York, Philadelphia,...and Richmond went as follows: It amused people who knew Tommy to hear this; however, it distressed Suzi when Tommy (1982--2019) asked, "How can I find out who yelled, 'Fire!' in the theater?" and then didn't wait to hear Missy give the answer---"Dick Tracy."`,
      7
    )
  ).toBe(
    `Aol dlss-ruvdu zavyf P avsk ha aol jvumlylujlz [hivba ofwvjvukyph] pu Ivzavu, Uld Fvyr, Wopshklswoph,...huk Ypjotvuk dlua hz mvssvdz: Pa htbzlk wlvwsl dov ruld Avttf av olhy aopz; ovdlcly, pa kpzaylzzlk Zbgp dolu Avttf (1982--2019) hzrlk, "Ovd jhu P mpuk vba dov flsslk, 'Mpyl!' pu aol aolhaly?" huk aolu kpku'a dhpa av olhy Tpzzf npcl aol huzdly---"Kpjr Ayhjf."`
  );
});
