# Re2 Regex syntax short cheatsheet

This cheatsheet covers the basics of the regular expression syntax

|           | Repetitions                                  |
| --------- | -------------------------------------------- |
| `x*`      | zero or more `x`, prefer more                |
| `x+`      | one or more `x`, prefer more                 |
| `x?`      | zero or one `x`, prefer one                  |
| `x{n,m}`  | `n` or `n`+1 or ... or `m` `x`, prefer more  |
| `x{n,}`   | `n` or more `x`, prefer more                 |
| `x{n}`    | exactly `n` `x`                              |
| `x{n,m}?` | `n` or `n`+1 or ... or `m` `x`, prefer fewer |
| `x{n,}?`  | `n` or more `x`, prefer fewer                |
| `x{n}?`   | exactly `n` `x`                              |

| kinds of single-character expressions | examples |
| ------------------------------------- | -------- |
| any character                         | `.`      |
| character class                       | `[xyz]`  |
| negated character class               | `[^xyz]` |
| Perl character class                  | `\d`     |
| negated Perl character class          | `\D`     |

|      | Empty strings              |
| ---- | -------------------------- |
| `^`  | at beginning of text       |
| `$`  | at end of text             |
| `\b` | at ASCII word boundary     |
| `\B` | not at ASCII word boundary |

|      | Escape sequences           |
| ---- | -------------------------- |
| `\t` | horizontal tab (≡ `\011`)  |
| `\n` | newline (≡ `\012`)         |
| `\r` | carriage return (≡ `\015`) |

|       | Character class elements    |
| ----- | --------------------------- |
| `x`   | single character            |
| `A-Z` | character range (inclusive) |
| `\d`  | Perl character class        |

|      | Perl character classes (all ASCII-only) |
| ---- | --------------------------------------- |
| `\d` | digits (≡ `[0-9]`)                      |
| `\s` | whitespace (≡ `[\t\n\f\r ]`)            |
| `\w` | word characters (≡ `[0-9A-Za-z_]`)      |

|        | Composites              |
| ------ | ----------------------- |
| `xy`   | `x` followed by `y`     |
| `x\|y` | `x` or `y` (prefer `x`) |

|          | Grouping                            |
| -------- | ----------------------------------- |
| `(re)`   | numbered capturing group (submatch) |
| `(?:re)` | non-capturing group                 |

|     | Flags            |
| --- | ---------------- |
| `g` | global           |
| `i` | case-insensitive |
