# Additional Guidelines - Java

## Argument validation

Validating arguments in _every_ method can be an unnecessary cost.
Following guidelines try to reduce the argument validation cost without losing its benefits. 

1. **Validate an argument only if an invalid value can result in an _undesirable_ yet _non-failure_ behavior _directly_ 
   within the method.**

   In the example below, `name` should be validated because an invalid `name` can result in invalid data in 
   the system from that point onwards without indicating that something went wrong.
   
   ```java
   void setName(String name){
       this.name = Objects.requireNonNull(name, "name cannot be null");
   }
   ```
   > Tip: You can use 
   > [Objects#requireNonNull()](https://docs.oracle.com/javase/7/docs/api/java/util/Objects.html#requireNonNull(T))
   > to ensure a value is not null.
   
   However, `name` in the example below need not be validated because it is not being used _directly_ in the method.
   
   ```java
   void setName(String name){
       saveName(name);
   }
   ```
   
   In the example below, `key` need not be validated against `null` because a `null` value is going to create a 
   detectable failure (i.e. a `NullPointerException`) anyway.
   
   ```java
   boolean isPersonKey(String key){
       return key.contains("P");
   }
   ```
   
   Furthermore, place the argument validation code immediately above the first line of code it tries to defend, so that
   the reader can easily deduce the reason for argument validation.
   
   
   ```java
   boolean updateEmail(Person p, String email){
       
       //some code
       
       if(!isValidEmail(email)){
           throw new IllegalArgumentException("Invalid email " + email);
       }
       p.email = email;
   }
   ```
   
   While the guidelines above delay parameter validation until the value is about to be used in a damage-causing manner,
   that should not be confused with _user input_ validation, which should be validated as early as possible.
   
1. **Validate arguments at boundaries of major components.**
 
   Detecting invalid arguments at boundaries of major component (e.g. between front-end and back-end) before they 
   propagate from one component to another spares the latter component from unnecessary debugging efforts.

## Using assertions

Refer the article 
_[Programming With Assertions](http://docs.oracle.com/javase/7/docs/technotes/guides/language/assert.html)_ 
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
   } catch (Exception e){
       assert false : "This exception should not happen";
   }
   ```
   
  ![](Good.png)
  ```java
   ...
   } catch (Exception e){
       throw new AssertionError("This exception should not happen");
   }
   ```

  > Rationale: As the program flow has already triggered an exception, switching to assertions is not necessary when
  > another exception can handle it just as well.