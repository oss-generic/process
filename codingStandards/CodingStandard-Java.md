# Java Coding Standard (Beginner/Intermediate Level)

**Important**: Use the [Google Java Style Guide](https://google.github.io/styleguide/javaguide.html) for any topics 
not covered in this document.

Categories of style rules:

* **Basic Rules**: Marked with :star:
* **Intermediate Rules**: Marked with :star::star:
* **Advanced Rules**: Marked with :star::star::star:

- [Naming](#naming-conventions)
- [Layout](#layout)
- [Statements](#statements)
  - [Package and Import Statements](#package-and-import-statements)
  - [Classes and Interfaces](#classes-and-interfaces)
  - [Methods](#methods)
  - [Types](#types)
  - [Variables](#variables)
  - [Loops](#loops)
  - [Conditionals](#conditionals)
- [Comments](#comments)
- [References](#references)

## **Naming Conventions**


**1. :star: Names representing packages should be in all lower case.**

```java
com.company.application.ui
```

> [More on package naming](https://docs.oracle.com/javase/tutorial/java/package/namingpkgs.html)

For school projects, the root name of the package should be your group name or project name followed by logical group names.` e.g. todobuddy.ui, todobuddy.file etc`. 

>Rationale: Your code is not officially ‘*produced by NUS*’, therefore do not use `edu.nus.comp.*` or anything similar.

**2. :star: Class/enum names must be nouns and written in PascalCase.**

```java
Line, AudioSystem
```
 
**3. :star: Variable names must be in camelCase.**

```java
line, audioSystem
```

**4. :star: Constant names must be all uppercase using underscore to separate words.**

```java
MAX_ITERATIONS, COLOR_RED
```

**5. :star: Names representing methods must be verbs and written in camelCase.**

```java
getName(), computeTotalWidth()
```

Underscores may be used in test method names using the following three part format **`featureUnderTest_testScenario_expectedBehavior()`** 

e.g. `sortList_emptyList_exceptionThrown()` `getMember_memberNotFount_nullReturned`

Third part or both second and third parts can be omitted depending on what's covered in the test.  
For example, the test method `sortList_emptyList()` will test `sortList()` method for all variations of the 'empty list' 
scenario and the test method `sortList()` will test the `sortList()` method for all scenarios.

**6. :star::star: Abbreviations and acronyms should not be uppercase when used as a part of a name.**

<table>
  <tr>
    <th align="center">Good</th>
    <th align="center">Bad</th>
  </tr>
  <tr>
    <td>
      <pre lang="java">
exportHtmlSource();
openDvdPlayer();</pre>
    </td>
    <td>
      <pre lang="java">
exportHTMLSource();
openDVDPlayer();</pre>
    </td>
  </tr>
</table>


**7. :star: All names should be written in English.**

>Rationale: The code is meant for an international audience.

**8. :star::star: Variables with a large scope should have long names, variables with a small scope can have short names.**

Scratch variables used for temporary storage or indices can be kept short. A programmer reading such variables should be able to assume that its value is not used outside a few lines of code. Common scratch variables for integers are `i, j, k, m, n` and for characters `c` and `d`.

>Rationale: When the scope is small, the reader does not have to remember it for long.

**9. :star: Boolean variables/methods should be named to sound like booleans ‘is’**

```java
//variables
isSet, isVisible, isFinished, isFound, isOpen, hasData, wasOpen

//methods
boolean hasLicense();
boolean canEvaluate();
boolean shouldAbort = false;
```

Setter methods for boolean variables must be of the form:

```java
void setFound(boolean isFound);
```

>Rationale: This is the naming convention for boolean methods and variables used by Java core packages. It also makes the code read like normal English e.g. `if(isOpen) ...`

**10. :star::star: Plural form should be used on names representing a collection of objects.**

```java
Collection<Point> points;
int[] values;
```

>Rationale: Enhances readability since the name gives the user an immediate clue of the type of the variable and the operations that can be performed on its elements. One space character after the variable type is enough to obtain clarity.

**11. :star: Iterator variables can be called *i*, *j*, *k* etc.**

Variables named *j*, *k* etc. should be used for nested loops only.

```java
for (Iterator i = points.iterator(); i.hasNext(); ) {
    ...
}

for (int i = 0; i < nTables; i++) {
    ...
}
```

>Rationale: The notation is taken from mathematics where it is an established convention for indicating iterators. 

**12. :star::star: Associated constants (final variables) should be prefixed by a common type name.**

```java
final int COLOR_RED   = 1;
final int COLOR_GREEN = 2;
final int COLOR_BLUE  = 3;
```

>Rationale: This indicates that the constants belong together, and make them appear together when sorted alphabetically.

## **Layout**

**1. :star: Basic indentation should be 4 spaces (not tabs).**

```java
for (i = 0; i < nElements; i++) {
    a[i] = 0;
}
```

>Rationale: Just follow it :trollface:

**2. :star: Keep lines no longer than 120 chars.**

Try to keep line length shorter than 110 characters (soft limit). But it is OK to exceed the limit slightly (hard limit: 120 chars). If the line exceeds the limit, use line wrapping at appropriate places of the line.

**Indentation for wrapped lines should be 8 spaces** (i.e. twice the normal indentation of 4 spaces) more than the parent line.

```java
setText("Long line split"
        + "into two parts.");
if(isReady){
    setText("Long line split"
            + "into two parts.");
}
``` 

**3. :star::star: Place line break to improve readability**

When wrapping lines, the main objective is to improve readability. Do not always accept the auto-formatting suggested by the IDE.

In general:

- Break after a comma. 

- Break before an operator. This also applies to the following "*operator-like*" symbols: the dot separator `.`, the ampersand in type bounds `<T extends Foo & Bar>`, and the pipe in catch blocks `catch (FooException | BarException e)`

```java
totalSum = a + b + c 
          + d + e;
setText("Long line split"
         + "into two parts.");
method(param1,
       object.method()
             .method2(),
       param3);
```      

- A method or constructor name stays attached to the open parenthesis `(` that follows it.

<table>
  <tr>
    <th align="center">Good</th>
  </tr>
  <tr>
    <td>
      <pre lang="java">
someMethodWithVeryVeryVeryVeryVeryVeryVeryVeryVeryVeryVeryLongName(
        int anArg, Object anotherArg);</pre>
    </td> 
  <tr>
    <th align="center">Bad</th>
  </tr>
    <td>
      <pre lang="java">
someMethodWithVeryVeryVeryVeryVeryVeryVeryVeryVeryVeryVeryLongName
        (int anArg, Object anotherArg);</pre>
    </td>
  </tr>
</table>

- Prefer higher-level breaks to lower-level breaks. In the example below, the first is preferred, since the break occurs outside the parenthesized expression, which is at a higher level.

<table>
  <tr>
    <th align="center">Good</th>
  </tr>
  <tr>
    <td>
      <pre lang="java">
// PREFER THIS
longName1 = longName2 * (longName3 + longName4 - longName5)
        + 4 * longname6;</pre>
    </td> 
  <tr>
    <th align="center">Bad</th>
  </tr>
    <td>
      <pre lang="java">
// OVER THIS
longName1 = longName2 * (longName3 + longName4
        - longName5) + 4 * longname6;</pre>
    </td>
  </tr>
</table>

- Here are two acceptable ways to format ternary expressions:

```java
alpha = (aLongBooleanExpression) ? beta : gamma;
alpha = (aLongBooleanExpression)
        ? beta
        : gamma;
```


**4. :star: Use K&R style brackets (aka [Egyptian style](https://blog.codinghorror.com/new-programming-jargon/)).**

<table>
  <tr>
    <th align="center">Good</th>
    <th align="center">Bad</th>
  </tr>
  <tr>
    <td>
      <pre lang="java">
while (!done) {
    doSomething();
    done = moreToDo();
}</pre>
    </td>
    <td>
      <pre lang="java">
while (!done)
{
    doSomething();
    done = moreToDo();
}</pre>
    </td>
  </tr>
</table>

>Rationale: Just follow it. :trollface:

**5. :star: Method definitions should have the following form:**

```java
public void someMethod() throws SomeException {
    ...
}
```

**6. :star: The _if-else_ class of statements should have the following form:**

```java
if (condition) {
    statements;
}

if (condition) {
    statements;
} else {
    statements;
}

if (condition) {
    statements;
} else if (condition) {
    statements;
} else {
    statements;
}
```

**7. :star: The _for_ statement should have the following form:**

```java
for (initialization; condition; update) {
    statements;
}
```

**8. :star: The _while_ statement should have the following form:**

```java
while (condition) {
    statements;
}
```

**9. :star: The _do-while_ statement should have the following form:**

```java
do {
    statements;
} while (condition);
```

**10. :star: The _switch_ statement should have the following form:**

```java
switch (condition) {
case ABC:
    statements;
    // Fallthrough
case DEF:
    statements;
    break;
case XYZ:
    statements;
    break;
default:
    statements;
    break;
}
```

The explicit `//Fallthrough` comment should be included whenever there is a `case` statement without a break statement. 

>Rationale: Leaving out the `break` is a common error, and it must be made clear that it is intentional when it is not there.

**11. :star: A _try-catch_ statement should have the following form:**

```java
try {
    statements;
} catch (Exception exception) {
    statements;
}

try {
    statements;
} catch (Exception exception) {
    statements;
} finally {
    statements;
}
```

**12. :star::star: White space within a statement**

It is difficult to give a complete list of the suggested use of whitespace in Java code. The examples below however should give a general idea of the intentions.

<td></td>

<table>
  <tr>
    <th>Rule</th>
    <th align="center">Good</th>
    <th align="center">Bad</th>
  </tr>
  <tr>
    <td>Operators should be surrounded by a space character.</td>
    <td>
      <pre lang="java">
a = (b + c) * d;</pre>
    </td>
    <td>
      <pre lang="java">
a=(b+c)*d;</pre>
    </td>
  </tr>
  <tr>
    <td>Java reserved words should be followed by a white space.</td>
    <td>
      <pre lang="java">
while (true) {</pre>
    </td>
    <td>
      <pre lang="java">
while(true){</pre>
    </td>
  </tr>
  <tr>
    <td>Commas should be followed by a white space.</td>
    <td>
      <pre lang="java">
doSomething(a, b, c, d);</pre>
    </td>
    <td>
      <pre lang="java">
doSomething(a,b,c,d);</pre>
    </td>
  </tr>
  <tr>
    <td>
      Colons should be surrounded by white space when used as a binary/ternary operator. Does not apply to <code>switch x:</code>.<br>
      Semicolons in for statements should be followed by a space character.
    </td>
    <td>
      <pre lang="java">
for (i = 0; i < 10; i++) {</pre>
    </td>
    <td>
      <pre lang="java">
for(i=0;i<10;i++){</pre>
    </td>
  </tr>
</table>

Makes the individual components of the statements stand out and enhances readability. 

**13. :star::star: Logical units within a block should be separated by one blank line.**

```java
// Create a new identity matrix
Matrix4x4 matrix = new Matrix4x4();

// Precompute angles for efficiency
double cosAngle = Math.cos(angle);
double sinAngle = Math.sin(angle);

// Specify matrix as a rotation transformation
matrix.setElement(1, 1,  cosAngle);
matrix.setElement(1, 2,  sinAngle);
matrix.setElement(2, 1, -sinAngle);
matrix.setElement(2, 2,  cosAngle);

// Apply rotation
transformation.multiply(matrix);
```
Enhances readability by introducing white space between logical units. Each block is often introduced by a comment as indicated in the example above.

## **Statements**

### **Package and Import Statements**

**1a. :star: Put every class in a package.**

Every class should be part of some package. 

>Rationale: It will help you and other developers easily understand the code base when all the classes have been grouped in packages. 

**1b. :star::star::star: Put related classes in a single package.**

Package together the classes that are related. For example in Java, the classes related to file writing is grouped in the package `java.io` and the classes which handle lists, maps etc are grouped in `java.util` package.

**2. :star::star: The ordering of import statements must be consistent.**

>Rationale: A consistent ordering of import statements makes it easier to browse the list and determine the dependencies when there are many imports.


Example:

```java
import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertTrue;

import java.io.File;
import java.io.IOException;

import javax.xml.bind.JAXBContext;
import javax.xml.bind.JAXBException;

import org.loadui.testfx.GuiTest;
import org.testfx.api.FxToolkit;

import com.google.common.io.Files;

import javafx.geometry.Bounds;
import javafx.geometry.Point2D;
import junit.framework.AssertionFailedError;
```

>*Tip: IDEs have support for auto-ordering import statements.* However, note that the default orderings of different IDEs are not always the same. It is recommended that you and your team use the same IDE and stick to a consistent ordering.

**3. :star: Imported classes should always be listed explicitly.**

<table>
  <tr>
    <th align="center">Good</th>
    <th align="center">Bad</th>
  </tr>
  <tr>
    <td>
      <pre lang="java">
import java.util.List;
import java.util.ArrayList;
import java.util.HashSet;</pre>
    </td>
    <td>
      <pre lang="java">
import java.util.*;</pre>
    </td>
  </tr>
</table>

>Rationale: Importing classes explicitly gives an excellent documentation value for the class at hand and makes the class easier to comprehend and maintain. Appropriate tools should be used in order to always keep the import list minimal and up to date. IDE's can be configured to do this easily.

### **Classes and Interfaces**

**4. :star::star::star: Class and Interface declarations should be organized in the following manner:**

  1. Class/Interface documentation (Comments)
  2. **class** or **interface** statement
  3. Class (static) variables in the order **public**, **protected**, **package** (no access modifier), **private**
  4. Instance variables in the order **public**, **protected**, **package** (no access modifier), **private**
  5. Constructors
  6. Methods (no specific order)

>Rationale: Make code easy to navigate by making the location of each class element predictable.

### **Methods**

**5. :star::star::star: Method modifiers should be given in the following order:** 

`<access> static abstract synchronized <unusual> final native`

The `<access>` modifier (if present) must be the first modifier.

<table>
  <tr>
    <th align="center">Good</th>
    <th align="center">Bad</th>
  </tr>
  <tr>
    <td>
      <pre lang="java">
public static double square(double a);</pre>
    </td>
    <td>
      <pre lang="java">
static public double square(double a);</pre>
    </td>
  </tr>
</table>

```java
<access> = public | protected | private 
<unusual> = volatile | transient 
```

>Rationale: The most important point here is to keep the *access* modifier as the first modifier. The order is less important for the other modifiers, but it make sense to have a fixed convention.

### **Types**

**6. :star: Array specifiers must be attached to the type not the variable.**

<table>
  <tr>
    <th align="center">Good</th>
    <th align="center">Bad</th>
  </tr>
  <tr>
    <td>
      <pre lang="java">
int[] a = new int[20];</pre>
    </td>
    <td>
      <pre lang="java">
int a[] = new int[20];</pre>
    </td>
  </tr>
</table>

>Rationale: The *arrayness* is a feature of the base type, not the variable. Java allows both forms however.

### **Variables**

**7. :star::star: Variables should be initialized where they are declared and they should be declared in the smallest scope possible.**

<table>
  <tr>
    <th align="center">Good</th>
    <th align="center">Bad</th>
  </tr>
  <tr>
    <td>
      <pre lang="java">
int sum = 0;                  
for (int i = 0; i < 10; i++) {          
    for (int j = 0; j < 10; j++) {      
        sum += i * j;
    }
}</pre>
    </td>
    <td>
      <pre lang="java">
int i, j, sum;
sum = 0;
for (i = 0; i < 10; i++) {
    for (j = 0; j < 10; j++) {
        sum += i * j;
    }
}</pre>
    </td>
  </tr>
</table>

>Rationale: This ensures that variables are valid at any time. Sometimes it is impossible to initialize a variable to a valid value where it is declared. In these cases it should be left uninitialized rather than initialized to some phony value.

**8. :star::star: Class variables should never be declared public.**

<table>
  <tr>
    <th align="center">Bad</th>
  </tr>
  <tr>
    <td>
      <pre lang="java">
public class Foo{

   public int bar;

}
      </pre>
    </td>
  </tr>
</table>

>Rationale: The concept of Java information hiding and encapsulation is violated by public variables. Use private variables and access functions instead. One exception to this rule is when the class is essentially a data structure, with no behavior. In this case it is appropriate to make the class' instance variables public.

**9. :star::star::star: Avoid unnecessary use of `this` with fields.**

Use the `this` keyword only when a field is shadowed by a method or constructor parameter.

<table>
  <tr>
    <th align="center">Good</th>
    <th align="center">Bad</th>
  </tr>
  <tr>
    <td>
      <pre lang="java">
public User(String name) {
    this.name = name;
    ...
}
      </pre>
    </td>
    <td>
      <pre lang="java">
public User(String name) {
    // 'id' is not shadowed by any method parameters
    this.id = User.getNewId();
    ...
}
      </pre>
    </td>
  </tr>
</table>

>Rationale: to reduce unnecessary noise.

### **Loops**

**10. :star: The loop body should be wrapped by curly brackets irrespective of how many lines there are in the body.**

<table>
  <tr>
    <th align="center">Good</th>
    <th align="center">Bad</th>
  </tr>
  <tr>
    <td>
      <pre lang="java">
sum = 0;          
for (i = 0; i < 100; i++) {                
    sum += value[i];
}</pre>
    </td>
    <td>
      <pre lang="java">
for (i = 0, sum = 0; i < 100; i++)
    sum += value[i];</pre>
    </td>
  </tr>
</table>

>Rationale: When there is only one statement in the loop body, Java allows it to be written without wrapping it between `{ }`. However that is error prone and *very* strongly discouraged from using.

### **Conditionals**

**11. :star: The conditional should be put on a separate line.**

<table>
  <tr>
    <th align="center">Good</th>
    <th align="center">Bad</th>
  </tr>
  <tr>
    <td>
      <pre lang="java">
if (isDone) {
    doCleanup();
}</pre>
    </td>
    <td>
      <pre lang="java">
if (isDone) doCleanup();</pre>
    </td>
  </tr>
</table>

>Rationale: This helps when debugging using an IDE debugger. When writing on a single line, it is not apparent whether the condition is really true or not.

**12. :star: Single statement conditionals should still be wrapped by curly brackets.**

<table>
  <tr>
    <th align="center">Good</th>
    <th align="center">Bad</th>
  </tr>
  <tr>
    <td>
      <pre lang="java">
InputStream stream = File.open(fileName, "w");
if (stream != null) {
    readFile(stream);
}</pre>
    </td>
    <td>
      <pre lang="java">
InputStream stream = File.open(fileName, "w");
if (stream != null))
    readFile(stream);</pre>
    </td>
  </tr>
</table>

The body of the conditional should be wrapped by curly brackets irrespective of how many statements.
 
>Rationale: Omitting braces can lead to subtle bugs.


## **Comments**


**2. :star: All comments should be written in English.**

Furthermore, use American spelling and avoid local slang.

>Rationale: The code is meant for an international audience.

**1. :star::star: Write descriptive header comments for all public classes/methods.**

You MUST write header comments for all classes, public methods.

>Rationale: `public` method are meant to be used by others and the users should not be forced to read the code of the method to understand its exact behavior. The code, even if it is self-explanatory, can only tell the reader HOW the code works, not WHAT the code is supposed to do.

**2. :star::star::star: All non-trivial private methods should carry header comments.**

>Rationale: Writing header comments will hep novice programmers to self-detect abstraction problems. e.g. If it is hard to describe the method succinctly, there is something wrong with the method abstraction.


**3. :star::star: Javadoc comments should have the following form:**

```java
/**
 * Returns lateral location of the specified position.
 * If the position is unset, NaN is returned.
 *
 * @param x  X coordinate of position.
 * @param y Y coordinate of position.
 * @param zone Zone of position.
 * @return Lateral location.
 * @throws IllegalArgumentException  If zone is <= 0.
 */
public double computeLocation(double x, double y, int zone)
    throws IllegalArgumentException {
  ...
}
```

Note in particular:
- The opening `/**` on a separate line
- **Write the first sentence as a short summary of the method**, as Javadoc automatically places it in the method summary table (and index). 
  - In method header comments, the first sentence should start in the form `Returns ...`, `Sends ...`, `Adds ...` (not `Return` or `Returnning` etc.)
- Subsequent `*` is aligned with the first one
- Space after each `*`
- Empty line between description and parameter section
- Punctuation behind each parameter description
-No blank line between the documentation block and the method/class

Javadoc of class members can be specified on a single line as follows:

```java
/** Number of connections to this database */
private int connectionCount;
```

**4. :star: Comments should be indented relative to their position in the code.**

<table>
  <tr>
    <th align="center">Good</th>
    <th align="center">Bad</th>
    <th align="center">Bad</th>
  </tr>
  <tr>
    <td>
      <pre lang="java">
while (true) {
    // Do something
    something();
}</pre>
    </td>
    <td>
      <pre lang="java">
while (true) {
        // Do something
    something();
}</pre>
    </td>
    <td>
      <pre lang="java">
while (true) {
// Do something
    something();
}</pre>
    </td>
  </tr>
</table>

>Rationale: This is to avoid the comments from breaking the logical structure of the program.

## References

1. http://geosoft.no/development/javastyle.html
2. http://www.oracle.com/technetwork/java/codeconventions-150003.pdf
3. http://developers.sun.com/sunstudio/products/archive/whitepapers/java-style.pdf
4. Effective Java, 2nd Edition by Joshua Bloch
5. http://www.oracle.com/technetwork/java/javase/documentation/index-137868.html 

## Contributors

* Nimantha Baranasuriya - Initial draft
* Dai Thanh - Further tweaks
* Tong Chun Kit - Further tweaks
* Barnabas Tan - Converted from Google Docs to Markdown Document 

