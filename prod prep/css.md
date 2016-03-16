# CSS Paradigm research

While the program will be focused in having a very minimalistic UI, following the idea that "less can tell more" it is important to try and still make the CSS as scalable and readable as possible as it is an integral part of the project, and in fact holds the pillar that holds the programs USP, which is the interface. While most of the styling will be handled through the JavaScript the core of the UI will be all set in CSS.

The different CSS paradigms researched have been Atomic CSS, BEM and OOCSS

## Atomic CSS

This paradigm makes a lot of sense and is very similar to the way functional programming works. The core of the ideology suggests that CSS should be divided into components that are as specific as possible and do something as specific as possible, this way the components can be constantly reused and html entities can be customized with a lot of detail with out having to write any extra CSS. This requires to set more classes for the HTML entities in exchange of making the classes in the CSS much smaller. This however however is normally much less that the amount of code that is normally written if writing non structured CSS.
Atomic CSS can be a bit hard to maintain however as it contributes to many more CSS classes to remember making it very important to create a very structured and organized CSS file system.

## OOCSS

OOCSS (Object Oriented CSS) brings the concept of object oriented programming to the way we structure CSS. The same way we would see a person as an object with attributes like personality or age, OOCSS sees components as objects the same way we see them in JavaScript. Having a header being the object with a title being the sub element of the object. By doing this, it is very simple to separate layout and content, allowing to set as many reusable classes as possible and then specializing them by defining them as a child of an object.

## BEM

BEM (Blocks, Elements, Modifiers) takes the best of both Atomic CSS and OOCSS. It structures CSS in an object like structure. Blocks would be the equivalent of an object, being something that have semantic meaning on it's own (header, article, footer). Elements would be the independent entities within a block (ul, p, h1) and would follow the inheritance system that OOCSS uses. Modifiers are classes which are only reponsible of modifying the main behavior of blocks and elements. By having these three types of classes it is very easy to have very compartmentalized classes that are very easily defined and are smantically strong while having modifiers that modify behavior in very small ways making much of the code reusable. Because of this I will be using BEM as it is as readable and maintainable as OOCSS but has also the scalability and efficiency of Atomic CSS.
