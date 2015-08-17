# Architect

Architect is an ultra-tiny way to do unobtrusive javascript quickly and easily. Simple usage can be seen in test.html.

# Methods

*Architect.action(name, callback)*

Executes callback function for each element that has a matching data- attribute. Passes in the elment and it's value, such as "callback(element, value)" Returns an array of matching elements.


*Architect.find(name)*

Returns an array with all elements which have a data- attribute matching data-name


*Architect.getValue(name)*

Returns an array with all values from elements which have a data- attribute matching data-name

*Architect.removeAttribute(element, name)*

Removes an attribute from the passed in element, then returns the element.
  
