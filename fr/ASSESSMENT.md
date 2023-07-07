# Regex training assessment

_to be fulfiled once at the beginning and once at the end of the training_.

### Syntaxe - match

- Quel est la syntaxe qui permet de matcher n'importe quelle majuscule ?
  - `(AZ)`
  - `[AZ]`
  - `{AZ}`
  - `<AZ>`
  - `(A-Z)`
  - `[A-Z]`
  - `{A-Z}`
  - `<A-Z>`
  - `(A:Z)`
  - `[A:Z]`
  - `{A:Z}`
  - `<A:Z>`
  - `(A,Z)`
  - `[A,Z]`
  - `{A,Z}`
  - `<A,Z>`
  - Je ne sais pas

- La classe de caractères `[A-z]`:
  - Est illégale car la plage `A-z` mélange minuscule et majuscule
  - Match 52 caractères différents, ni plus, ni moins
  - Contient toutes les lettres majuscules de l'alphabet
  - Je ne sais pas

- Le charactère `*`:
  - Il remplace n'importe quel suite de caractères
  - Il remplace n'importe quel suite de caractères dont le code ascii est compris entre 32 (" ") et 127 ("~")
  - Il autorise zero répétition-s ou plus du caractère ou groupe qui le précède
  - Il autorise zero répétition-s ou plus du caractère ou groupe qui le succède
  - Je ne sais pas

- Quel regex test si la longeur d'une chaine de caractères est paire ?
  - `.{0,2}`
  - `^.{0,2}$`
  - `(..)*`
  - `^(..)*$`
  - `(?:.*)\1`
  - `^(?:.*)\1$`
  - Je ne sais pas

### Syntaxe - remplacement

- Dans un éditeur de text, laquelle des substitutions ci-dessous permet de remplacer toutes les occurences du motif "wazaa" par "aarg", tel que le nombre de `a` à la fin de waza soit égal au nombre de `a` au début de arg ? Il est garanti que le nombre de `a` sera toujours compris entre 1 et 900.
  - `s/"waz(a)*"/"$1rg"/`
  - `s/"waz(a*)"/"$1rg"/`
  - `s/"waz(a)*"/"$1rg"/g`
  - `s/"waz(a*)"/"$1rg"/g`
  - Je ne sais pas

- Dans un éditeur de text, laquelle des substitutions ci-dessous permet de supprimer tout les commentaires d'un fichier Python ? Nous rappellons que en Python, les commentaires sont toujours introduit par le caractère `#`. Nous supposeront aussi que le caractère `#` est absent de toute chaine de caractère du fichier:
  - `s/ *#*//g`
  - `s/ *#.*//g`
  - `s/#(*)//g`
  - `s/*#(*)/$1/g`
  - `s/(*)#*/$1/g`
  - `s/.*#(.*)/$1/g`
  - Je ne sais pas

### Culture et Théorie

(Cloudflare regex filter crash + existing regex engines + )

### Utilisation en ligne de commande

(grep, sed)

- Quel option(s) faut-il passer à grep pour qu'il utilise la syntax usuelle des expressions régulière?
  - `-R`
  - `-I` or `-o`
  - `-E` or `-P`
  - `-F` or `-G`
  - Je ne sais pas

- Quel lettre du dialect `sed` permet de supprimer la ligne courante?
  - `b`
  - `c`
  - `d`
  - `p`
  - `s`
  - `t`
  - Je ne sais pas

### Utilisation en JS

(r.test, s.match, s.replace, s.split, new Regex())

- Laquelle des méthodes suivante de la classe `String` n'accèpte pas de Regex comme paramètre ?
  - `"".match(...)`
  - `"".replace(...)`
  - `"".split(...)`
  - `"".startsWith(...)`

- Laquelle des regexs ci-dessous match les noms de fichier et dossier directement contenu par le dossier `node_modules` tans sur système Unix que Windows ? Si plusieurs réponses conviennent on préfèrera la plus courte.
  - `new Regex("^node_modules[\\/][^\\/]*$")`
  - `new Regex("^node_modules[\\//][^\\//]*$")`
  - `new Regex("^node_modules[\\\\/][^\\\\/]*$")`
  - `new Regex("^node_modules[\\\\//][^\\\\//]*$")`

### Utilisation en Python

(re.match, re.sub, re.split)

- Laquelle des fonctions suivantes n'existe pas dans le module `re` de Python (Python 3.11.4) ?
  - `re.compile()`
  - `re.findall()`
  - `re.fullmatch()`
  - `re.match()`
  - `re.replace()`
  - `re.search()`
  - `re.split()`
  - `re.sub()`

Lequel des appels de fonction suivant retire toutes les occurrences du mot "master" entièrement en minuscules, dans les commentaires d'un code Python qui ne contient lui-même aucune chaine de caractère litérale? Le-dit code Python est présent dans la variable `s`.

- `re.sub(r"#(.*)\bmaster\b", "#$1", s)`
- `re.sub(r"#(.*)", "", s)`
- `re.sub(r"#(.*)\bmaster\b", "#\1", s)`
