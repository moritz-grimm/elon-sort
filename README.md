# elon-sort

Elon-Sort is a next-gen algorithm designed to eventually sort arrays.  
A collection of elon-sort implementations in different languages. I’ll expand this collection every time I’m bored.

## How elon-sort works

1. randomly eliminate half of the elements
2. bring them back
3. loop thru 1&2 for a random number of times
4. declare the array sorted without checking
5. (Optional) Sleep for a duration proportional to how many loops you’re running

## How to run

I don’t think I need to explain this, but since we’re here:
```bash
node .\src\elon-sort.js
```

or

```bash
npm run elon-sort
```

## Fun Fact

elon-sort does, in fact, **not** work.

## License

[MIT](#license) License - you are free to use, modify, or pretend it works.
