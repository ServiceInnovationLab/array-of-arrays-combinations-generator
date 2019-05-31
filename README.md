# array-of-arrays-combinations-generator
Generates an array of arrays and converts to an array or permutations. Array.

When writing tests (for openfisca, in my case) there are a bunch of input variables. For example, a piece of sealand legislation might need to know whether somebody is:
- tall or short
- a resident of sealand (or not)
- a citizen of sealand (or not)
- has blue, green, or brown eyes

There are 24 combinations of that list.

This simple tool will allow you to enter the first dimension (height, residency, citizenship, eye colour) and then allow you to enter the allowed values for each.

Then it'll generate an array using [this handy snippet](https://codepen.io/franciskim/pen/eNjrpR), generate an array of arrays by re-running the array generator over the first dimension, and finally generate a complete list of permutations using [this other handy snippet](https://github.com/BigAB/jQuery-Combinations-Plugin/).
