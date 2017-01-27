# Additional Guidelines - Java

## Using assertions

Refer the article 
_[Programming With Assertions](http://docs.oracle.com/javase/8/docs/technotes/guides/language/assert.html)_ 
(from Oracle) for more details on the three general guidelines below.

1. **Do not use assertions to do any work that your application requires for correct operation.**<br> 
   If you do, the code will not work as expected when assertions are turned off.
   
   
1. **Do not use assertions for checking _preconditions_/parameters in public methods.**<br> 
   Those should be enforced by explicit checks that throw particular, 
   specified exceptions. e.g. `IllegalArgumentException`, `IndexOutOfBoundsException`, or `NullPointerException`.
   
   
1. **Assertions may be used to check _postconditions_ and class/method _invariants_ in both public 
   and nonpublic methods.**

In addition,

* **Do not handle 'impossible' exceptions using assertions**.<br> 
  Instead of handling 'impossible' exceptions using an `assert false` as given below, 
  throw a runtime error such as an `AssertionError`.

  ![](Bad.png)
  ```java
   ...
   } catch (Exception e) {
       assert false : "This exception should not happen";
   }
   ```
   
  ![](Good.png)
  ```java
   ...
   } catch (Exception e) {
       throw new AssertionError("This exception should not happen");
   }
   ```

  > Rationale: As the program flow has already triggered an exception, switching to assertions is not necessary when
  > another exception can handle it just as well.
