# Architect

Architect is a tiny utility wrapper for doing unobtrusive javascript. Its goal is to help build module-based javascript and html pages. Simple usage can be seen in test.html. Architect is licensed under the GPL v3.

# Methods

*Architect.action(name, callback)*

Executes callback function for each element that has a matching data- attribute. Passes in the elment and it's value, such as "callback(element, value)" Returns an array of matching elements.


*Architect.find(name)*

Returns an array with all elements which have a data- attribute matching data-name


*Architect.getValue(name)*

Returns an array with all values from elements which have a data- attribute matching data-name

*Architect.removeAttribute(element, name)*

Removes an attribute from the passed in element, then returns the element.
