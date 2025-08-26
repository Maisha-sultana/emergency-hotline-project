
 Answer the following questions clearly:

1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?
getElementById--Selects only one element by its ID and returns only one element.
getElementsByClassName--Selects all elements by the same class name and returns a collection of elements.
querySelector--Selects the first element that matches a CSS selector and returns only one element.
querySelectorAll--Selects all elements that match a CSS selector and returns a list of elements.

2. How do you **create and insert a new element into the DOM**?
create an element by document.createElement().
Add content by innerHTML.
Insert it into page by appendChild() or append().
  
3. What is **Event Bubbling** and how does it work?
Event Bubbling is a way how events move in the DOM. When an event happens on an element, then moves up to its parent, then grandparent and so on and all the way to the document.

4. What is **Event Delegation** in JavaScript? Why is it useful?
Event Delegation is a technique where we add an event listener to a parent element, instead of adding it to all child elements.
Useful--saves memory and improve performance and child elements are added dynamically

5. What is the difference between **preventDefault() and stopPropagation()** methods?
preventDefault() --Stops the default action of an element. Ex-Stops a form from submitting
stopPropagation()--Stops the event from bubbling up to the parent elements and it is useful when you don't want parent to handle the same event. 

---


