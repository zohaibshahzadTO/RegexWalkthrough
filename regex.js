// Removing whitespace between a word character and . or,
String.pattern = "(\\w)(\\s+)([\\..])";
System.out.println(EXAMPLE_TEST.replaceAll(pattern, "$1$3"));

// This example extracts the text between a title tag.
pattern = "(?i)(<title.*?>)(.+?)()";
String updated = EXAMPLE_TEST.replaceAll(pattern, "$2");
