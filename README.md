# Tabbed Component Demonstration

### Instructions

Clone git directory.
``cd`` into that directory.
Run ``open index.html`` from terminal. 


### Thoughts and improvements 

+ Definite improvements needed to the genereal design and UI - kept it very basic due to time constraints.
+ Change CSS for cursor over tabs - to emphasise the interactivity that's possible. 

+ I chose functional css tabs vs JS as we used this technique at work recently and it also makes the page slightly more lightweight. 

+ Ajax API call needs to be rewritten. There's repetition that should be refactored. Also, from an ux perspective, the data for all tabs should be fetched on page load. That way, if connectivity is lost, there's still relatively recent content visible.

+ Bootstrap grid used to create easy responsiveness. 