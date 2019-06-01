# Openfisca test generator
This will generate all permutations of your input variables for [openfisca](https://www.openfisca.org). It doesn't (yet) work out what the output variables should be. It ma do that in future.

When writing tests there are a bunch of input variables. For example, a piece of sealand legislation might need an input variable to know whether somebody is:
- tall or short
- a resident of sealand (or not)
- a citizen of sealand (or not)
and
- their age

There are 16 combinations of that list (assuming you test for 2 ages). Let's say that if they're a resident or citizen and over 18 they get a free boat, and if they're short and a citizen they get a free step to stand on when they can't reach stuff. That means we have 2 openfisca output variables:
- free_boat_person_is_eligible
- free_step_person_is_eligible

This tool allows you to enter the first dimension (height, residency, citizenship, eye colour), generate an input box for each of those, and list the acceptable answers in those.

Then it'll generate an array using a torn-apart version of [this handy snippet](https://codepen.io/franciskim/pen/eNjrpR), generate an array of arrays by re-running the array generator over the first dimension, and finally generate a complete list of permutations using [this other handy snippet](https://github.com/BigAB/jQuery-Combinations-Plugin/) and format them in to openfisca YAML tests.
