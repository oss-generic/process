<h1> CSS Coding Standard </h1>

# General

* Use the [Google CSS Style Guide](https://google.github.io/styleguide/htmlcssguide.xml)
  for any topics not covered in this document.

* If the project is using a framework (e.g. Bootstrap/jQuery UI), use classes from the framework as much as possible.

* Divide long CSS files into sections. 

 > By segmenting the file(s) in this logical way, it is easy to locate css rules and to ensure that a new rule
 > being added is not already present.


# CSS Files

* CSS file includes must be done using `<link>` tags in the HTML/JSP files and NOT using `@import` in other css files.
  
  > **`@import`** can be slow and may result in the page being rendered without css for a while before the page 
  > magically comes to life. As of now we are using css files as styles of HTML pages and thus the dependency 
  > must be clearly visible in the HTML page.

  ![](Good.png)
  
  ```html
     <link rel="stylesheets" href="../common.css" type="text/css">
  ```
  ![](Bad.png)
  
  ```css
     @import "common.css";
  ```

* NO inline style sheets or inline styles in the HTML/JSP files.

  > The whole idea is to have Separation of Concerns (SoC). If css rules are specified everywhere, editing them
  > in the future will be a hassle and redundant overriding of css rules may occur. If all are in one place
  > management is also easier.

  ![](Good.png)
  
  ```css
  #mainDiv {
     border: thin solid black;
     color: white;
     margin: auto;
  }
  ```
  ![](Bad.png)
  
  ```html
  <style>
  #mainDiv {
     color: white;
  }
  </style>
  ```
  
  ![](Bad.png)
  
  ```html
  <div id="mainDiv" style="border: thin solid black; margin: auto">
  ```

# Selectors

* Do not use CSS3 selectors.

  > Although they are powerful, cross-browser compatibility is difficult to achieve and many rules are supported by 
  > different browsers starting from different versions 
  > (refer: [W3CSchools List](http://www.w3schools.com/cssref/css3_browsersupport.asp)). 
  > Also, we can stick to more functional names for the css and use classes to achieve our needs 
  > → more readable and easier to manage.

## Selector Formatting

* The selector(s) must be specified in separate lines.
  
  > This eases reading as well as helps in revision control as conflicts reduce.

  ![](Good.png)
  
  ```css
  .button-sort-ascending:hover,
  .button-sort-none:hover {
     cursor: pointer;
  }
  ```
  ![](Bad.png)
  
  ```css
  .button-sort-ascending:hover, .button-sort-none:hover {
     cursor: pointer;
  }
  ```

* Group related/hierarchical style specifications (eg :hover, child specifier, etc) and provide an additional indent 
  to the more specific selector. Refer to [here](http://isobar-idev.github.io/code-standards/#_css_formatting) 
  for examples.

  > This gives a nice hierarchical structure to the file and helps to visually group css rules by indentation.
  > In addition this gives an immediate idea as to how certain classes are being used in the HTML files
  > (from the hierarchy) without actually reading HTML files.

## Use of Efficient Selectors

* Do not qualify class/ID selectors using tag names (do not use: `div.mainContent`, simply use `.mainContent`).
  Refer to [Writing efficient CSS][efficient-css]
  for examples.

  > This speeds up the css match lookup. If such a qualification is actually required, either use another
  > class on top of this to change the style or use a completely different class to start with. In any case,
  > if this kind of qualification is needed, then probably the class has not been named well enough
  > (see naming standards for classes).

* Use child selector rather than descendant selector (use `#container > span` rather than `#container span`).
  Refer to [Writing efficient CSS][efficient-css]
  for examples.

  > This is a strong recommendation as descendant selector is extremely expensive, especially when the
  > specified ancestor has a lot of descendants.

# Classes

## Naming Standards

* Use all lowercase letters.<br>
  Separate words with hyphens (`-`) and no other separator.<br>
  We use 2 kinds of classes: Atomic and Component.
  
  > Atomic Classes describe atomic attributes like border-gray, align-center that can be used on any element.
  > They have at most 2 rules in them. Start their names with the attribute, followed by the value.
  > (eg: .align-center and not .center-align)
  
  > Component Classes are used for components that have a particular role that (preferably) recurs in multiple
  > pages. To name these classes, describe the function of the element rather than its location.
  > (eg: .panel-details rather than .top-details-box)

  ![](Good.png)
  
  ```css
  /* Component Class */
  .comment-list
  .sort-icon
  /* Atomic Class */
  .align-center
  .border-gray
  ```
  ![](Bad.png)
  
  ```css
  .commentList
  .sort_icon
  .centeralign
  ```
  
* When adding classes to style elements in the page, follow the following steps:<br>
  * Try and style the entire component using Bootstrap.<br>
  * For any additional css, if the component is used in many places create a functional name for the class.<br>
  * If the component does not have any recurring function, utilise the generic classes to achieve the styling.<br>
  * **Exception:** If a particular element requires too many generic classes ( > 5) create a functional class name for it.

# Attributes

## Order of Attributes

* Alphabetize the attributes, disregarding any browser prefix.<br>
  All browser-prefixed versions of an attribute must be written together.
  
  > Rationale: It makes it easier to locate attributes in a css file.

  ![](Good.png)
  
  ```css
  .sort-icon {
     display: block;
     float: right;
     height: 17px;
     margin-top: 1px;
     width: 12px;
  }
  ```
  
  ![](Bad.png)
  
  ```css
  .sort-icon {
     width: 12px;
     height: 17px;
     display: block;
     margin-top: 1px;
     float: right;
  }
  ```


## Attribute Formatting

* Semicolon after every attribute specification.
* Space after colon.
* Drop the units for 0 values (eg: margin: 0).
* All attribute(s) are to be specified in individual lines.
* Attributes must have one more indentation than the selector.
* Indent attributes that require browser specifications so that the actual attribute being declared is in one column.
  Refer to [Writing Your Best Code](http://learn.shayhowe.com/html-css/writing-your-best-code/#css-coding-practices) 
  for examples.

## General Details

* Use shorthands as much as possible (eg `border: 2px 0 1px 4px`).

* DO NOT use `!important` specifier.<br>
  
  > Using the **!important** specifier overrides the natural flow of specificity and cascading hierarchy of css styles.
  > Unless absolutely necessary do not use it. If there is such a situation clearly state the reason 
  > with comments (/*  */).
  
  ![](Bad.png)
  
  ```css
   margin: 10px 0 !important;
  ```


# Resources

### Highly Recommended

* [Google CSS Style Guide](https://google-styleguide.googlecode.com/svn/trunk/htmlcssguide.xml)
* [Writing Your Best Code - CSS Coding Practices](http://learn.shayhowe.com/html-css/writing-your-best-code/#css-coding-practices)

### Other Readings

* [30 CSS Best Practices For Beginners](https://code.tutsplus.com/tutorials/30-css-best-practices-for-beginners--net-6741)
* [A list of CSS style guides](https://css-tricks.com/css-style-guides)
* [Isobar Coding Standards](http://isobar-idev.github.io/code-standards/)
* [Writing efficient CSS (MDN article)](https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Writing_efficient_CSS)

[efficient-css]: https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Writing_efficient_CSS#Guidelines_for_Efficient_CSS