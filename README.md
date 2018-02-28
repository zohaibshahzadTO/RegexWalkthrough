# RegexWalkthrough

This walkthrough will introduce the concept of regular expressions and describe their usage in Java. It will also provides several Java regular expression examples.

# What are Regular Expressions?

A regular expression defines a search pattern for strings. The abbreviation is regular expressions is *regex*. The search pattern can be anything from a simple character, a fixed string or a complex expression containing special characters describing the pattern. The pattern defined by the regex may match one or several times or not at all for a given string.

Regex can be used to search, edit and manipulate text.

The process of analyzing or modifying a text with a regex is called: *The regular expression is applied to the text/string*. The pattern defined by the regex is applied fro left to right. Once a source character has been used in a match, it cannot be reused. For example, the regex *aba* will match *ababababa* only two times (aba_aba_).

# Regex Examples

A simple example, for a regular expression is a (literal) string. For example, the *Hello World* regex matches the "Hello World" string. *.* (dot) is another example for a regular expression. A dot matches any single character, it would match, for example, "a" or "1".

The following table lists several regular expressions and describes which pattern they would match.


# Rules of Writing Regular Expressions

The following description is an overview of available meta characters which can be used in regular expressions. This section is supposed to be a references for the different regex elements.

*Common Matching Symbols*


*Meta Characters*

The following meta characters have a pre-defined meaning and make certain common patterns easier to use, e.g., \d instead of [0..9]


*Quantifiers*

A quantifier defines how often an element can occur. The symbols ?, * , + and {} define the quantity of the regular expressions.
