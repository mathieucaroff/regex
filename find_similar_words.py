import sys
from itertools import zip_longest
from json import load

a = []
pair = []


def diff(s, t):
    d = 0
    for a, b in zip_longest(s, t):
        d += a != b
    return d


with open(sys.argv[1]) as f:
    data = load(f)

for word in data:
    for w in a:
        if diff(w, word) == 1:
            pair.append((w, word))
    a.append(word)

pair.sort(key=lambda a: len(a[0]) + len(a[1]))

for p in pair:
    print(*p)
