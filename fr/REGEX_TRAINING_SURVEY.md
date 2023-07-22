# Étude préliminaire pour la formation aux Regex

### Syntaxe - match

Pour chacune des syntaxes suivante, indiquez si:

- Vous ne connaissez pas cette syntaxe (U - unknown)
- Vous avez une idée vague de ce que fait cette syntaxe (V - vague)
- Vous avez une idée précise de ce que fait cette syntaxe et vous utiliez cette syntaxe, ou bien vous seriez capable de l'utiliser si vous en aviez besoin (P - precise)

Merci d'indiquer la lettre (U / V / P) en début de ligne, après le tiret. Par exemple:

- P `/./`

Les lettres `x` et `y` symbolisent un morceau d'expression régulière. Les lettres `a`, `b` et `c` symbolisent des caractères uniques et non-spéciaux.

- `/./`
- `/x?/`
- `/x+/`
- `/x*/`
- `/x{0,3}/`
- `/x{2,}/`
- `/[abc]/`
- `/[a-z]/`
- `/[abcA-Z0-9]/`
- `/\d/`
- `/\w/`
- `/\s/`
- `/\S/`
- `/x|y/`
- `/^x/`
- `/x$/`
- `/\bx/`
- `/x\b/`
- `/(xy)/`
- `/(?:x)/`
- `/(?P<name>x)/`
- `/x??/`
- `/x+?/`
- `/x*?/`
- `/\n/`
- `/\r\n/`
- `/\t/`
- `/[[:ascii:]]/`
- `/[[:graph:]]/`
- `/(?i)/`
- `/(?-i)/`

---

- `/(?=x)/`
- `/(?!x)/`
- `/(?<=x)/`
- `/(?<!x)/`
- `/(x|y)\1/`
- `/(?P<name>x|y)(?P=name)/`
- `/x?(?0)/`
- `/(x?)(?1)/`
- `/(?P<name>x?)(?&name)/`
- `/(?P<name>x?)(?P>name)/`

### Remplacement - techniques

Cette partie du questionnaire s'intéresses aux techniques connues que vous pouvez utiliser **dans votre IDE, ou éditeur de text**. Pour chaque question ci-dessous, indiquez si:

- Vous ne connaissez pas de manière de résoudre le problème avec un remplacement par regex (U - unknown)
- Vous avez une idée d'une manière de résoudre le problème, mais n'êtes pas sur que cette approche vas fonctionner (V - vague)
- Vous connaissez une approche dont vous êtes sur qu'elle va fonctionner (P - precise)

Les solutions qui nécessites d'executer plusieurs fois le remplacement sont accéptées. Lorsque le problème fait intervenir du code, vous pouvez considérer que celui-ci est auto-formaté, pour vous simplifier l'écriture de la regex.

Merci d'indiquer la lettre (U / V / P) en début de ligne, après le tiret. Par exemple:

- U "Supprimer toutes les lignes qui contiennent le mot 'brindille'"

Dans le cas ou vous êtes sûr (P), merci d'indiquer à la **fin** de la ligne le remplacement que vous utiliseriez. Merci d'utiliser la notation de remplacement suivante: `s/<regex>/<remplacement>/<flags>` (notation inspirée de `sed`). Dans le remplacement, merci d'utiliser les références numériques avec backslash (`s/(.)/\1/`) plutôt que celles avec dollar (`s/(.)/$1/`). Par exemple:

- P "Supprimer tous les caractères de chaque ligne, sauf le premier" s/(.).\*/\1/

---

- "Supprimer toutes les lignes vide d'un document"
- "Supprimer les lignes qui contiennent la suite de lettres 'foo'"
- "Dupliquer les lignes qui contiennent la suite de lettres 'gremlins'"
- "Supprimer le mot 'faire', mais **pas** ses mots dérivés, tel que 'refaire'"
- "Supprimer le text des lignes qui contiennent une suite de voyelle entourée par des espaces tel que ' au ', en concervant cependant la première suite de voyelle dans la ligne, mais sans conserver les espaces autour des voyelles."
- "Detecter et intervertir les assignations simples, de variable à variable, sans calcul: `a = b` devient `b = a`"

### Culture et Théorie

- "Êtes-vous intéressez par un module sur les différents moteurs d'expressions régulières et les risques de sécurité associés à ceux-ci ?"

### Utilisation en ligne de commande

- "Êtes-vous intéressez par un module sur l'utilisation des expressions régulières en ligne de commande ?"

### Utilisation en JS

- "Êtes-vous intéressez par un module sur l'utilisation des expressions régulières en JavaScript ?"

### Utilisation en Python

- "Êtes-vous intéressez par un module sur l'utilisation des expressions régulières en Python ?"

### Suggestions

- "Avez vous des attentes particulières vis-à-vis de cette formation, des suggestions à faire ?"
