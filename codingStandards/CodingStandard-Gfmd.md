# GitHub Flavored Markdown Coding Standard

* The term `markdown` in this document refers to _GitHub Flavored Markdown_.
* Follow the syntax as specifed [here](https://guides.github.com/features/mastering-markdown/).

#### Follow strict GFMD syntax to be compatible with GitHub Pages 

Minor deviations from the markdown syntax are sometimes forgiven by GitHub markdown rendering but may not be forgiven
by [GitHub Pages html rendering](https://github.com/blog/2289-publishing-with-github-pages-now-as-easy-as-1-2-3). 

* Add a blank line at the beginning of a list
  
  :heavy_check_mark: :heavy_check_mark: :heavy_check_mark: :arrow_heading_down:
  ```markdown
  Here is a list:

  * item 1
  * item 2
  ```
  :heavy_multiplication_x: :heavy_multiplication_x: :heavy_multiplication_x: :arrow_heading_down:
  ```markdown
  Here is a list:
  * item 1
  * item 2
  ```
  
* Add space at the start of a heading
  
  :heavy_check_mark: :heavy_check_mark: :heavy_check_mark: :arrow_heading_down:
  ```markdown
  # Heading
  ```
  :heavy_multiplication_x: :heavy_multiplication_x: :heavy_multiplication_x: :arrow_heading_down:
  ```markdown
  #Heading
  ```

* Use blockquote symbol in every line of the blockquote
  
  :heavy_check_mark: :heavy_check_mark: :heavy_check_mark: :arrow_heading_down:
  ```markdown
  > first line
  > second line
  ```
  :heavy_multiplication_x: :heavy_multiplication_x: :heavy_multiplication_x: :arrow_heading_down:
  ```markdown
  > first line
    second line
  ```

#### Use blank lines to separate headings
 
:heavy_check_mark: :heavy_check_mark: :heavy_check_mark: :arrow_heading_down:
```markdown
## Heading

Content of the paragraph.
```
:heavy_multiplication_x: :heavy_multiplication_x: :heavy_multiplication_x: :arrow_heading_down:
```markdown
## Heading
Content of the paragraph.
```

#### Use blockquotes for additional info

Blockquotes are usually used for additional info the reader can skip over. 

:heavy_check_mark: :heavy_check_mark: :heavy_check_mark: :arrow_heading_down:
```markdown
> Some additional info.
```

#### Use generic numbering for ordered list

Using `1.` for every item in an ordered list can make it easy to insert more items later. 

> Generic numbers are converted to the correct numbers by GitHub markdown renderer.

  :heavy_check_mark: :heavy_check_mark: :heavy_check_mark: :arrow_heading_down:
  ```markdown
  1. item 1
  1. item 2
  1. item 3
  ```
  :heavy_multiplication_x: :heavy_multiplication_x: :heavy_multiplication_x: :arrow_heading_down:
  ```markdown
  1. item 1
  2. item 2
  3. item 3
  ```