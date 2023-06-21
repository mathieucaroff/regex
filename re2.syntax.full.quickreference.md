# Re2 syntax quick reference

| kinds of single-character expressions              | examples       |
| -------------------------------------------------- | -------------- |
| any character, possibly including newline (s=true) | `.`            |
| character class                                    | `[xyz]`        |
| negated character class                            | `[^xyz]`       |
| Perl character class [(link)](#perl)               | `\d`           |
| negated Perl character class                       | `\D`           |
| ASCII character class [(link)](#ascii)             | `[[:alpha:]]`  |
| negated ASCII character class                      | `[[:^alpha:]]` |
| Unicode character class (one-letter name)          | `\pN`          |
| Unicode character class                            | `\p{Greek}`    |
| negated Unicode character class (one-letter name)  | `\PN`          |
| negated Unicode character class                    | `\P{Greek}`    |

|        | Composites              |
| ------ | ----------------------- |
| `xy`   | `x` followed by `y`     |
| `x\|y` | `x` or `y` (prefer `x`) |

|           | Repetitions                                  |
| --------- | -------------------------------------------- |
| `x*`      | zero or more `x`, prefer more                |
| `x+`      | one or more `x`, prefer more                 |
| `x?`      | zero or one `x`, prefer one                  |
| `x{n,m}`  | `n` or `n`+1 or ... or `m` `x`, prefer more  |
| `x{n,}`   | `n` or more `x`, prefer more                 |
| `x{n}`    | exactly `n` `x`                              |
| `x*?`     | zero or more `x`, prefer fewer               |
| `x+?`     | one or more `x`, prefer fewer                |
| `x??`     | zero or one `x`, prefer zero                 |
| `x{n,m}?` | `n` or `n`+1 or ... or `m` `x`, prefer fewer |
| `x{n,}?`  | `n` or more `x`, prefer fewer                |
| `x{n}?`   | exactly `n` `x`                              |

|                | Grouping                                      |
| -------------- | --------------------------------------------- |
| `(re)`         | numbered capturing group (submatch)           |
| `(?P<name>re)` | named & numbered capturing group (submatch)   |
| `(?:re)`       | non-capturing group                           |
| `(?flags)`     | set flags within current group; non-capturing |
| `(?flags:re)`  | set flags during re; non-capturing            |

|     | Flags                                                                                           |
| --- | ----------------------------------------------------------------------------------------------- |
| `i` | case-insensitive (default false)                                                                |
| `m` | multi-line mode: `^` and `$` match begin/end line in addition to begin/end text (default false) |
| `s` | let `.` match `\n` (default false)                                                              |
| `U` | ungreedy: swap meaning of `x*` and `x*?`, `x+` and `x+?`, etc (default false)                   |

|      | Empty strings                                                                  |
| ---- | ------------------------------------------------------------------------------ |
| `^`  | at beginning of text or line (`m`=true)                                        |
| `$`  | at end of text (like `\z` not `\Z`) or line (`m`=true)                         |
| `\A` | at beginning of text                                                           |
| `\b` | at ASCII word boundary (`\w` on one side and `\W`, `\A`, or `\z` on the other) |
| `\B` | not at ASCII word boundary                                                     |
| `\z` | at end of text                                                                 |

|              | Escape sequences                                 |
| ------------ | ------------------------------------------------ |
| `\a`         | bell (≡ `\007`)                                  |
| `\f`         | form feed (≡ `\014`)                             |
| `\t`         | horizontal tab (≡ `\011`)                        |
| `\n`         | newline (≡ `\012`)                               |
| `\r`         | carriage return (≡ `\015`)                       |
| `\v`         | vertical tab character (≡ `\013`)                |
| `\*`         | literal `*`, for any punctuation character `*`   |
| `\123`       | octal character code (up to three digits)        |
| `\x7F`       | hex character code (exactly two digits)          |
| `\x{10FFFF}` | hex character code                               |
| `\C`         | match a single byte even in UTF-8 mode           |
| `\Q...\E`    | literal text `...` even if `...` has punctuation |

|           | Character class elements                      |
| --------- | --------------------------------------------- |
| `x`       | single character                              |
| `A-Z`     | character range (inclusive)                   |
| `\d`      | Perl character class                          |
| `[:foo:]` | ASCII character class `foo`                   |
| `\p{Foo}` | Unicode character class `Foo`                 |
| `\pF`     | Unicode character class `F` (one-letter name) |

|               | Named character classes as character class elements                  |
| ------------- | -------------------------------------------------------------------- |
| `[\d]`        | digits (≡ `\d`)                                                      |
| `[^\d]`       | not digits (≡ `\D`)                                                  |
| `[\D]`        | not digits (≡ `\D`)                                                  |
| `[^\D]`       | not not digits (≡ `\d`)                                              |
| `[[:name:]]`  | named ASCII class inside character class (≡ `[:name:]`)              |
| `[^[:name:]]` | named ASCII class inside negated character class (≡ `[:^name:]`)     |
| `[\p{Name}]`  | named Unicode property inside character class (≡ `\p{Name}`)         |
| `[^\p{Name}]` | named Unicode property inside negated character class (≡ `\P{Name}`) |

|      | Perl character classes (all ASCII-only) |
| ---- | --------------------------------------- |
| `\d` | digits (≡ `[0-9]`)                      |
| `\D` | not digits (≡ `[^0-9]`)                 |
| `\s` | whitespace (≡ `[\t\n\f\r ]`)            |
| `\S` | not whitespace (≡ `[^\t\n\f\r ]`)       |
| `\w` | word characters (≡ `[0-9A-Za-z_]`)      |
| `\W` | not word characters (≡ `[^0-9A-Za-z_]`) |

|                | ASCII character classes                                                            |
| -------------- | ---------------------------------------------------------------------------------- |
| `[[:alnum:]]`  | alphanumeric (≡ `[0-9A-Za-z]`)                                                     |
| `[[:alpha:]]`  | alphabetic (≡ `[A-Za-z]`)                                                          |
| `[[:ascii:]]`  | ASCII (≡ `[\x00-\x7F]`)                                                            |
| `[[:blank:]]`  | blank (≡ `[\t ]`)                                                                  |
| `[[:cntrl:]]`  | control (≡ `[\x00-\x1F\x7F]`)                                                      |
| `[[:digit:]]`  | digits (≡ `[0-9]`)                                                                 |
| `[[:graph:]]`  | graphical (≡ `[!-~]` ≡ ` [A-Za-z0-9!"#$%&'()*+,\-./:;<=>?@[\\]^_```  ` ```{\|}~]`) |
| `[[:lower:]]`  | lower case (≡ `[a-z]`)                                                             |
| `[[:print:]]`  | printable (≡ `[ -~]` ≡ `[ [:graph:]]`)                                             |
| `[[:punct:]]`  | punctuation (≡ ` [!-/:-@[-```  ` ```{-~]`)                                         |
| `[[:space:]]`  | whitespace (≡ `[\t\n\v\f\r ]`)                                                     |
| `[[:upper:]]`  | upper case (≡ `[A-Z]`)                                                             |
| `[[:word:]]`   | word characters (≡ `[0-9A-Za-z_]`)                                                 |
| `[[:xdigit:]]` | hex digit (≡ `[0-9A-Fa-f]`)                                                        |

|      | Unicode character class names--general category |
| ---- | ----------------------------------------------- |
| `C`  | other                                           |
| `Cc` | control                                         |
| `Cf` | format                                          |
| `Co` | private use                                     |
| `Cs` | surrogate                                       |
| `L`  | letter                                          |
| `Ll` | lowercase letter                                |
| `Lm` | modifier letter                                 |
| `Lo` | other letter                                    |
| `Lt` | titlecase letter                                |
| `Lu` | uppercase letter                                |
| `M`  | mark                                            |
| `Mc` | spacing mark                                    |
| `Me` | enclosing mark                                  |
| `Mn` | non-spacing mark                                |
| `N`  | number                                          |
| `Nd` | decimal number                                  |
| `Nl` | letter number                                   |
| `No` | other number                                    |
| `P`  | punctuation                                     |
| `Pc` | connector punctuation                           |
| `Pd` | dash punctuation                                |
| `Pe` | close punctuation                               |
| `Pf` | final punctuation                               |
| `Pi` | initial punctuation                             |
| `Po` | other punctuation                               |
| `Ps` | open punctuation                                |
| `S`  | symbol                                          |
| `Sc` | currency symbol                                 |
| `Sk` | modifier symbol                                 |
| `Sm` | math symbol                                     |
| `So` | other symbol                                    |
| `Z`  | separator                                       |
| `Zl` | line separator                                  |
| `Zp` | paragraph separator                             |
| `Zs` | space separator                                 |

| Unicode character class names--scripts |
| -------------------------------------- |
| `Adlam`                                |
| `Ahom`                                 |
| `Anatolian_Hieroglyphs`                |
| `Arabic`                               |
| `Armenian`                             |
| `Avestan`                              |
| `Balinese`                             |
| `Bamum`                                |
| `Bassa_Vah`                            |
| `Batak`                                |
| `Bengali`                              |
| `Bhaiksuki`                            |
| `Bopomofo`                             |
| `Brahmi`                               |
| `Braille`                              |
| `Buginese`                             |
| `Buhid`                                |
| `Canadian_Aboriginal`                  |
| `Carian`                               |
| `Caucasian_Albanian`                   |
| `Chakma`                               |
| `Cham`                                 |
| `Cherokee`                             |
| `Chorasmian`                           |
| `Common`                               |
| `Coptic`                               |
| `Cuneiform`                            |
| `Cypriot`                              |
| `Cypro_Minoan`                         |
| `Cyrillic`                             |
| `Deseret`                              |
| `Devanagari`                           |
| `Dives_Akuru`                          |
| `Dogra`                                |
| `Duployan`                             |
| `Egyptian_Hieroglyphs`                 |
| `Elbasan`                              |
| `Elymaic`                              |
| `Ethiopic`                             |
| `Georgian`                             |
| `Glagolitic`                           |
| `Gothic`                               |
| `Grantha`                              |
| `Greek`                                |
| `Gujarati`                             |
| `Gunjala_Gondi`                        |
| `Gurmukhi`                             |
| `Han`                                  |
| `Hangul`                               |
| `Hanifi_Rohingya`                      |
| `Hanunoo`                              |
| `Hatran`                               |
| `Hebrew`                               |
| `Hiragana`                             |
| `Imperial_Aramaic`                     |
| `Inherited`                            |
| `Inscriptional_Pahlavi`                |
| `Inscriptional_Parthian`               |
| `Javanese`                             |
| `Kaithi`                               |
| `Kannada`                              |
| `Katakana`                             |
| `Kawi`                                 |
| `Kayah_Li`                             |
| `Kharoshthi`                           |
| `Khitan_Small_Script`                  |
| `Khmer`                                |
| `Khojki`                               |
| `Khudawadi`                            |
| `Lao`                                  |
| `Latin`                                |
| `Lepcha`                               |
| `Limbu`                                |
| `Linear_A`                             |
| `Linear_B`                             |
| `Lisu`                                 |
| `Lycian`                               |
| `Lydian`                               |
| `Mahajani`                             |
| `Makasar`                              |
| `Malayalam`                            |
| `Mandaic`                              |
| `Manichaean`                           |
| `Marchen`                              |
| `Masaram_Gondi`                        |
| `Medefaidrin`                          |
| `Meetei_Mayek`                         |
| `Mende_Kikakui`                        |
| `Meroitic_Cursive`                     |
| `Meroitic_Hieroglyphs`                 |
| `Miao`                                 |
| `Modi`                                 |
| `Mongolian`                            |
| `Mro`                                  |
| `Multani`                              |
| `Myanmar`                              |
| `Nabataean`                            |
| `Nag_Mundari`                          |
| `Nandinagari`                          |
| `New_Tai_Lue`                          |
| `Newa`                                 |
| `Nko`                                  |
| `Nushu`                                |
| `Nyiakeng_Puachue_Hmong`               |
| `Ogham`                                |
| `Ol_Chiki`                             |
| `Old_Hungarian`                        |
| `Old_Italic`                           |
| `Old_North_Arabian`                    |
| `Old_Permic`                           |
| `Old_Persian`                          |
| `Old_Sogdian`                          |
| `Old_South_Arabian`                    |
| `Old_Turkic`                           |
| `Old_Uyghur`                           |
| `Oriya`                                |
| `Osage`                                |
| `Osmanya`                              |
| `Pahawh_Hmong`                         |
| `Palmyrene`                            |
| `Pau_Cin_Hau`                          |
| `Phags_Pa`                             |
| `Phoenician`                           |
| `Psalter_Pahlavi`                      |
| `Rejang`                               |
| `Runic`                                |
| `Samaritan`                            |
| `Saurashtra`                           |
| `Sharada`                              |
| `Shavian`                              |
| `Siddham`                              |
| `SignWriting`                          |
| `Sinhala`                              |
| `Sogdian`                              |
| `Sora_Sompeng`                         |
| `Soyombo`                              |
| `Sundanese`                            |
| `Syloti_Nagri`                         |
| `Syriac`                               |
| `Tagalog`                              |
| `Tagbanwa`                             |
| `Tai_Le`                               |
| `Tai_Tham`                             |
| `Tai_Viet`                             |
| `Takri`                                |
| `Tamil`                                |
| `Tangsa`                               |
| `Tangut`                               |
| `Telugu`                               |
| `Thaana`                               |
| `Thai`                                 |
| `Tibetan`                              |
| `Tifinagh`                             |
| `Tirhuta`                              |
| `Toto`                                 |
| `Ugaritic`                             |
| `Vai`                                  |
| `Vithkuqi`                             |
| `Wancho`                               |
| `Warang_Citi`                          |
| `Yezidi`                               |
| `Yi`                                   |
| `Zanabazar_Square`                     |
