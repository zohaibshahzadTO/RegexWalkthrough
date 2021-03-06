# RegexWalkthrough

This walkthrough will introduce the concept of regular expressions and describe their usage in Java. It will also provides several Java regular expression examples.

# What are Regular Expressions?

A regular expression defines a search pattern for strings. The abbreviation is regular expressions is *regex*. The search pattern can be anything from a simple character, a fixed string or a complex expression containing special characters describing the pattern. The pattern defined by the regex may match one or several times or not at all for a given string.

Regex can be used to search, edit and manipulate text.

The process of analyzing or modifying a text with a regex is called: *The regular expression is applied to the text/string*. The pattern defined by the regex is applied fro left to right. Once a source character has been used in a match, it cannot be reused. For example, the regex *aba* will match *ababababa* only two times (aba_aba_).

# Regex Examples

A simple example, for a regular expression is a (literal) string. For example, the *Hello World* regex matches the "Hello World" string. *.* (dot) is another example for a regular expression. A dot matches any single character, it would match, for example, "a" or "1".

The following table lists several regular expressions and describes which pattern they would match.

![alt text](https://github.com/zohaibshahzadTO/RegexWalkthrough/blob/master/assets/figure1%20Regex.JPG)


# Rules of Writing Regular Expressions

The following description is an overview of available meta characters which can be used in regular expressions. This section is supposed to be a references for the different regex elements.

*Common Matching Symbols*

![alt text](https://github.com/zohaibshahzadTO/RegexWalkthrough/blob/master/assets/figure2%20regex.JPG)


*Meta Characters*

The following meta characters have a pre-defined meaning and make certain common patterns easier to use, e.g., \d instead of [0..9]

![alt text](https://github.com/zohaibshahzadTO/RegexWalkthrough/blob/master/assets/figure3%20regex.JPG)


*Quantifiers*

A quantifier defines how often an element can occur. The symbols ?, * , + and {} define the quantity of the regular expressions.

![alt text](https://github.com/zohaibshahzadTO/RegexWalkthrough/blob/master/assets/figure4%20regex.JPG)

# Grouping and back references

You can group parts of your regular expression. In the pattern, we group element with round brackets, eg, (). This allows us to assign a repetition operator to a complete group. In addition these groups also create a back reference to the part of the regular expression. This captures the group. A back reference stores the part of the String which matched the group. This allows you to use this part in the replacement.

Via the $ you can refer to a group. $1 is the first group, $2 the second, etc.

Let’s, for example, assume you want to replace all whitespace between a letter followed by a point or a comma. This would involve that the point or the comma is part of the pattern. Still it should be included in the result. See the regex file for this example.

# Negative Look Ahead

Negative look ahead provides the possibility to exclude a pattern. With this you can say that a string should not be followed by another string. Negative look ahead are defined via (?!pattern). For example, the following with match "a" if "a" is not followed by "b".

*a(?!b)*

# Specifying modes inside the regular expression

You can add the mode modifiers to the start of the regex. To specify multiple modes, simply put them together as (?ismx).

<li>(?i) makes the regex case insensitive.</li>

<li>(?s) for "single line mode" makes the dot match all characters, including line breaks.</li>

<li>(?m) for "multi-line mode" makes the caret and dollar match at the start and end of each line in the subject string.</li>

# Backslashes in Java

The backslash is an escape character in Java strings. That means the backslash has a predefined meaning in Java. You have to use double backslash to define a single backslash. If you want to define \w, then you must be using \\w in your regex. If you want to use backslash as a literal, you have to type \\\\ as \ is also an escape character in regular expressions.

--

# Redefined methods on String for processing regular expressions

Strings in Java have built-in support for regex. Strings have 4 built-in methods for regex, i.e., matches(), split(), replaceAll(), replaceFirst() methods. The replace() method does not support regex. These methods are not optimized for performance. Later on in this ReadME, we'll delve into classes that are optimized for performance.

In the exampleTwo.java file, we'll create an example class to illustrate those methods.
See exampleTwo.java in the repository.

![alt text](https://github.com/zohaibshahzadTO/RegexWalkthrough/blob/master/assets/figure5%20regex.JPG)


# Another Example

The following class give several examples for the usage of regex with strings.
See exampleThree.java.

The JUnit tester class for all examples are included in another file in the repository.


--

# Pattern and Matchers

For advanced regex, the *java.util.regex.Pattern* and *java.util.regex.Matcher* classes are used. First, we create a *Pattern* object which defines the regular expression. This Pattern object allows us to create a Matcher object for a given string. This Matcher object then allows us to do regex operations on a String.

# Java Regex Examples

The following will be dealing with typical examples for the usage of regular expressions.

Refer to the *javaRegexExamples.java file*


# Finding Duplicated Words

The following regular expression matches duplicated words:

*\b(\w+)\s+\1\b*

\b is a word boundary and \1 references to the captured match of the first group, i.e., the first word.

The *(?!-in)\b(\w+) \1\b* finds duplicate words if they do not start with "-in".

TIP: Add (?s) to search across multiple lines.

# Finding elements which start in a new line

The following regular expression allows you to find the "title" word, in case it starts in a new line, potentially with leading spaces.

  (\n\s*)title

# Finding (Non-Javadoc) statements

Sometimes (Non-Javadoc) are used in Java source code to indicate that the method overrides a super method. As of Java 1.6 this can be done via the @Override annotation and it is possible to remove these statements from your code. The following regular expression can be used to identify these statements:

  (?s) /\* \(non-Javadoc\)/*?\*/


*More Updates to Come*
