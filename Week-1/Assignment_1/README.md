WEEK-1 Assignment 1

Q1. When a user enters an URL in the browser, how does the browser fetch the desired result ?
     Explain this with the below in mind and Demonstrate this by drawing a diagram for the same

    a.What is the main functionality of the browser?
    b.High Level Components of a browser.
    c.Rendering engine and its use.
    d.Parsers (HTML, CSS, etc)
    e.Script Processors
    f.Tree construction.
    g.Order of script processing 
    h. Layout and painting 


Ans1 . When user enters an URL in browser, browser looks up for IP address for the domain , intiates TCP connections with server and sends Http request to the server , server process the request and sends back a response , the response hence through rendering engine translate that data into text and images 
![ScreenShot](/images/dig1.png)
![ScreenShot](/images/dig2.png)

a.The main function is to retrieve information from the World Wide Web and making it available for users in more interactive ways as user wants

b. High Level Compents of Browers 
User Interface => It is an environment allowing users to use certain features like search bar, refresh button, menu, bookmarks, etc.
Browser Engine => It monitors the rendition engine while manipulating the inputs coming from multiple user interfaces.
Networking => The protocol provides an URL and manages all sorts of safety, privacy and communication.
In addition, the store network traffic gets saved in retrieved documents.
Data Storage =>The cookies store information as the data store is an uniform layer that the browsers use. Storage processes like IndexedDB, WebSQL, localStorage, etc works well on browsers.
JavaScript Interpreter


c. Rendering engine and its use
As the name suggest it is responsible for rendering a specific web pages, A rendering engine is software that shows text and images on the screen. The engine is structured text from a document (often HTML), and formats it properly based on the given style declarations (often given in CSS) too .
![ScreenShot](/images/render.png)

d. Parsers (HTML, CSS, etc)
Parsing means analyzing and converting a program into an internal format that a runtime environment can actually run, for example the JavaScript engine inside browsers. The browser parses HTML into a DOM tree. HTML parsing involves tokenization and tree construction

e.Script Processors
The script processor executes Javascript code to process an event,This can be useful in situations where one of the other processors doesn’t provide the functionality you need to filter events.

f.Tree construction.
Process HTML markup and build the DOM tree.
Process CSS markup and build the CSSOM tree.
Combine the DOM and CSSOM into a render tree.
Run layout on the render tree to compute geometry of each node.
Paint the individual nodes to the screen.
![ScreenShot](/images/tree.png)

g.Order of script processing 
Execution Stages
Time of Processing
Order of Processing
Processing In Scripts

Execution Stage =>To configure the object attributes correctly so that the script elements behave as you expect, you must understand the stages of execution that a task goes through. The task is activated, generated, processed (that is, executed on the target computer) and finally completed.
Time of Processing => The time at which the script is generated depends on the Generate Task at attribute that you define on the object Attributes page. You have two options:
Generate Task at: Activation time
The script is generated at the beginning of the generation stage.
Generate Task at: Runtime
The script is generated much later in the generation stage
Order of Processing => Depending on the type of object, the task may have more than one Process page on which you can write scripts. The scripts in the Process pages are processed in the following order:
Pre-Process page and Process page
Child Post Process page
Post Process page
Processing In Scripts =>The Automation Engine processes scripts line by line. The results of executed script elements (such as the value of a variable that has been set) are regularly written to the AE database. This process is referred to as a commit. Other scripts can only access these new or modified values after the values have been committed.

h. Layout and painting 
The CSSOM and DOM trees are combined into a render tree, which is then used to compute the layout of each visible element and serves as an input to the paint process that renders the pixels to screen. Optimizing each of these steps is critical to achieving optimal rendering performance.
