# C# Coding Standard

**Important:** Use [CSharpGuidelines](https://github.com/dennisdoomen/CSharpGuidelines) for any topics not covered in this document.

- [File Organization](#file-organization)
- [Formatting](#formatting)
 - [Layout](#layout)
 - [Indentation](#indentation)
 - [White Space](#white-space)
- [Naming Conventions](#naming-conventions)
- [Commenting Conventions](#commenting-conventions)
- [Language Conventions](#language-conventions)
- [References](#references)

## File Organization
**1. Source file name and class name should always match.**<br>
MyClass.cs --> `public class MyClass { ... }`

**2. Directory names should follow namespace for the class.**<br>
`System.Windows.Forms.Control` should use the path System\Windows\Forms\Control.cs
> Do not use namespace name with dots. This will make it easier to map namespaces to the directory layout.

## Formatting
### Layout
**1. Avoid putting multiple namespaces or classes per file.**<br>
This will make your codes more readable and also make it easier to find the .cs file for a particular class.

**2. Place *using* directives at the top of the file; grouped and ordered alphabetically.**<br>

```cs
// .NET namespaces first
using System;
using System.Collections;

// Then any other namespaces in alphabetical order
using Company.Business;
using Company.Standard;

using Telerik.Ajax;
using Telerik.WebControls;
```

**3. Maintain a common order for each file.**<br>
i. Member variable<br>
ii. Constructors and Finalizer<br>
iii. Nested Enums, Structs and Classes<br>
iv. Properties<br>
v. Methods<br>
> Sequence declaration within type groups are based on visibility in this order: `public, protected, internal, private`

### Indentation
**1. Basic indentation should be 4 spaces.**<br>

```cs
// A Hello World! program in C#.
using System;

namespace HelloWorld
{
    class Hello 
    {
        static void Main() 
        {
            Console.WriteLine("Hello World!");
        }
    }
}
```

**2. Maximum line length is 130 characters.**<br>
When an expression does not fit, follow the general guidelines:

- Break after a comma
- Break after an operator
- Align the new line with the beginning of the expression at the same level on the previous line
- Prefer higher-level breaks to lower-level breaks

Example of breaking up method calls:

![](Good.png)

```cs
longMethodCall(expr1, expr2,
               expr3, expr4, expr5);
```

![](Bad.png)

```cs
longMethodCall(expr1, expr2
		,expr3, expr4, expr5);
```

Example of breaking an arithmetic expression:

![](Good.png)

```cs
var result = a * b / (c - g + f) +
             4 * z;
```

![](Bad.png)

```cs
var result = a * b / (c - g +
             f) + 4 * z;
```

The top one is preferred, since the break occurs outside the parenthesized expression, which is higher-level.

**3. Always place curly braces on a new line.**<br>
This is known as the [Allman style](https://en.wikipedia.org/wiki/Indent_style#Allman_style).

```cs
while (x == y)
{
    firstMethod();
    secondMethod();
}

lastMethod();
```

**4. Always put curly braces even if it might not be required.**<br>
Such as having only one statement in the `if` clause. This is to enforce consistency.

```cs
if (x > y) 
{
	doSomething();
}
```

### White Space
**1. General guidelines.**<br>

- Keywords like `if`, `while` should be followed by a white space.
- Semicolons in `for` statements should be followed by a white space.
- Commas should be followed by a white space.
- Add a white space around operators like `+`, `-`, `==` etc.
- Do not add white space after `(` and before `)`.

Some examples:

![](Good.png)

```cs
a = (b + c) * d;
```

```cs
while (true) {
```

```cs
doSomething(a, b, c, d)
```

```cs
for (i = 0; i < 10; i++) {
```

![](Bad.png)

```cs
a=(b+c)*d;
```

```cs
while(true){
```

```cs
doSomething(a,b,c,d)
```

```cs
for(i=0;i<10;i++){
```

## Naming Conventions
**1. All names should be written in English.**<br>
English is the preferred language for international development.

**2.Use proper casing for language elements.**<br>

> Pascal casing: the first letter of every word is capitalized.<br>
> Camel casing: the first letter of every word, except for the first word, is capitalized.

Language element | Casing | Example
--------|--------|--------
Class, Struct | Pascal | `AppDomain`
Interface | Pascal | `IBusinessService`
Enumeration type | Pascal | `ErrorLevel`
Enumeration values | Pascal | `FatalError`
Event | Pascal | `Click`
Private field | Camel | `listItem`
Protected field | Pascal | `MainPanel`
Constant field | Pascal | `MaximumItems`
Constant local variable | Camel | `maximumItems`
Read-only static field | Pascal | `RedValue`
Local variable | Camel | `listOfValues`
Method | Pascal | `ToString`
Namespace | Pascal | `System.Drawing`
Parameter | Camel | `typeName`
Type parameter | Pascal | `TView`
Property | Pascal | `BackColor`


**3. Avoid using abbreviations.**<br>
Unless the full name is excessive:

- Avoid abbreviations longer than 5 characters.<br>
- Abbreviations must be widely known and accepted.<br>
- Use upper case for 2 characters abbreviations, and Pascal Case for longer abbreviations.<br>

![](Good.png)

```cs
UIControl
HtmlSource
```

![](Bad.png)

```cs
UiControl
HTMLSource
```

**4. Prefix boolean variables with `Can`, `Is`, or `Has`.**<br>
Example: `CanEvaluate`, `IsVisible`, `HasLicense`.<br>

> Avoid boolean variables that represent the negation of a things. e.g., use `IsInitialized` instead of `IsNotInitialized`.
 
**5. Do not include the parent class name within a property name.**<br>

![](Good.png)

```cs
Customer.Name
```

![](Bad.png)

```cs
Customer.CustomerName
```

**6. Do not use Hungarian Notation.**<br>
Hungarian notation is a defined set of pre and postfixes which are applied to names to reflect the type of the variable. This style was used in early Windows programming, but is now obsolete.

![](Good.png)

```cs
Name
Colors
```

![](Bad.png)

```cs
strName
ColorsEnum
```

> **Exception**: All fields and varible names that contains GUI elements like button should be postfixed with their type name without abbreviations. e.g., `cancelButton`, `nameTextBox`.


## Commenting Conventions
**1. General guidelines.**<br>

- Place the comment on a separate line, not at the end of a line of code.
- Begin comment text with an upper case letter.
- Insert one space between comment delimiter (`//`) and comment text.
- Use `//` or `///` but never `/* ... */`
- The length of comment should not exceed the length of code.

**2. Document all public, protected and internal types and members.**<br>
Documenting your code allows Visual Studio to pop-up the documentation when your class is used somewhere else. You can form your documentation using [XML tags](https://msdn.microsoft.com/en-us/library/5ast78ax.aspx).

```cs
/// <summary>
/// Get a value indicating whether the user has a license.
/// </summary>
/// <returns>
/// <c>true</c> if the user has a license; otherwise <c>false</c>.
/// </returns>
public bool HasLicense() { ... }
```

## Language Conventions
**1. Do not omit access modifiers.**<br>
Explicitly declare all identifiers with the appropriate access modifiers instead of allowing the default.

![](Good.png)

```cs
private void WriteEvent(string message)
```

![](Bad.png)

```cs
void WriteEvent(string message)
```

**2. Always use the built in C# data type aliases, instead of the .NET common type system.**<br>

![](Good.png)

```cs
short
int
long
string
```

![](Bad.png)

```cs
Int16
Int32
Int64
String
```

**3. Only use var when the type is very obvious.**<br>
When the type of a variable is clear from the context, use var in the declaration.

```cs
var welcomeMessage = "This is a welcome message!";
var account = new Account();
```

Do not use var when the type is not apparent from the right side of the assignment.

```cs
int result = ExampleClass.ResultSoFar();
```
> To know more about when to use/not to use implicit typing read [Uses and misuses of implicit typing](https://blogs.msdn.microsoft.com/ericlippert/2011/04/20/uses-and-misuses-of-implicit-typing/).

**4. Favor Object and Collection initializers over separate statements.**<br>

![](Good.png)

```cs
var startInfo = new ProcessStartInfo("myapp.exe");
{
	StandardOutput = Console.Output,
	UseShellExecute = true
};

```

![](Bad.png)

```cs
var startInfo = new ProcessStartInfo("myapp.exe");
startInfo.StandardOutput = Console.Output;
startInfo.UseShellExecute = true;
```

## References
1.[https://msdn.microsoft.com/en-us/library/ff926074.aspx](https://msdn.microsoft.com/en-us/library/ff926074.aspx)<br>
2.[http://se.inf.ethz.ch/old/teaching/ss2007/251-0290-00/project/CSharpCodingStandards.pdf](http://se.inf.ethz.ch/old/teaching/ss2007/251-0290-00/project/CSharpCodingStandards.pdf)<br>
3.[https://github.com/dennisdoomen/CSharpGuidelines](https://github.com/dennisdoomen/CSharpGuidelines)<br>
4.[http://www.icsharpcode.net/TechNotes/SharpDevelopCodingStyle03.pdf](http://www.icsharpcode.net/TechNotes/SharpDevelopCodingStyle03.pdf)<br>
