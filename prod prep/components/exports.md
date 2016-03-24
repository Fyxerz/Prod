# File formatting exportation.

While exporting is extremely important in order to create a versatile application, I realized through some user research that there is no need to look for a wide range of export formats. The only two main formats that are of interest are PDF and DOCX. PDF would be used when intending to present articles to not be later formatted, like for example a research paper, or an official document, like a contract. The other format, DOCX is also of interest because it is the format used by Microsoft's Word. Seeing the overwelming amount of people that use Word, it could be almost said that it is not just the standard, but almost has a monopoly within the editor market. As it is the standard it is a must to have proper compatibility with the text editor as it is certain that in most contexts people will need to present documents in DOCX format. However, there is another context that would require one more output, when thinking about the three types of personas that would use the application. In the situation of a journalist or blogger, it would be of use to be able to export as html in order to embed their content as they like in wordpress or the CMS that they may use.

Apart from these three formats, there could be an interest in creating other types of export formats like PNG or other more obscure formats that while they wouldn't have much use to the normal public they may be of interest for specific contexts.

## HTML Exportation
In order to create a preview for the program it is necessary to generate HTML with the MD parser, this makes exporting HTML a very small step in order to get the whole process running.

## PDF Exportation
In order to export to PDF, there are two node modules that could have been of use. [html-to-pdf](https://www.npmjs.com/package/html-to-pdf) and [html-pdf](https://www.npmjs.com/package/html-pdf). While both work in very similar ways, and they both don't requiere node's fs (the embedded file system module that node uses), I decided to work with Html-pdf as it seems like it's better to compile CSS styling into the PDF which is one of the strong points that I would like the application to have.
 
## DOCX Exportation

DOCX exportation had very little to choose from, but I decided to choose [docx-js](https://github.com/evidenceprime/html-docx-js) which while a wrapper for a Java component, runs just fine when working on a node environment. Docx-js is specially good because it also allows for proper image exportation to the DOCX file which is something that wasn't available in most modules.