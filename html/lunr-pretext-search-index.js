var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "root-1-2-2-2",
  "level": "1",
  "url": "root-1-2-2-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " Fall 2022 Edition  https:\/\/emmath.org  copyright  "
},
{
  "id": "Sec-Introduction",
  "level": "1",
  "url": "Sec-Introduction.html",
  "type": "Preface",
  "number": "",
  "title": "Introduction",
  "body": " Introduction  In January 2017, Dr. Francis E. Su, president of the Mathematical Association of America, gave his retiring presidential address, Mathematics for Human Flourishing In 2018, he gave an expanded version of this talk as a First Mondays address at Dordt College. . In this address and the subsequent book , Su describes ways that the practice of mathematics can help human beings cultivate virtues which in turn enable us live the good life. He identifies several desires that encourage the cultivation of virtue, among them exploration , play , truth , justice , and beauty .  This book uses guided exploration to investigate mathematical topics that specifically meet those desires. We will explore the Rubik's cube and other puzzles and thus play with mathematics. We'll see how deductive reasoning can be used to argue for truth , while also exploring its limitations. Justice will be explored by application of mathematics to democracy and the networks used to exploit our fellow image-bearers. And we'll finish the semester with projects that explore beauty in mathematics.   F. E. Su, C. Jackson, Mathematics for Human Flourishing . Yale University Press, 2020.   "
},
{
  "id": "sec-NoteToStudents",
  "level": "1",
  "url": "sec-NoteToStudents.html",
  "type": "Preface",
  "number": "",
  "title": "A Note to Students",
  "body": " A Note to Students  This work was compiled with some strong opinions.  The first is that, as with a sport, instrument, or nearly any other skill, you can't learn mathematics without doing mathematics. Thus, there are few worked-out examples in this book. We would rather spend a long time in productive struggle to understand an idea deeply than be spoon-fed solutions.  The second is that most people's ideas of what counts as a mathematical question are far too narrow. Mathematics is not merely geometry, algebra, and calculus (maybe with a dash of statistics for good measure). Mathematics is a way of thinking; it's about abstraction, deductive reasoning, and problem-solving. This way of thinking can be applied in surprising places, and can lead to delight and wonder at the world around us. We will explore some of these questions this semester.  "
},
{
  "id": "sec-NoteToInstructors",
  "level": "1",
  "url": "sec-NoteToInstructors.html",
  "type": "Preface",
  "number": "",
  "title": "A Note to Instructors",
  "body": " A Note to Instructors  First, thank you for taking a look at this text! If you have any questions or suggestions, please don't hesitate to email me .  This text is sufficient for a one-semester liberal arts math course. My stated goal with the text is to expand its readers' notion of the sorts of questions that mathematics can help answer. In addition to those found here, one could choose many different topics for such a course, and I hope to add more over the coming years. I would also welcome suggestions and contributions from the text's users, so feel free to get in touch if you'd like to explore these ideas further. Additionally, the independent nature of the topics in such a course means that the order in which things are covered matters little; I typically cover them in more or less the order presented here.  The text is designed with a focus on active learning. I've found that it works particularly well as a sequenced collection of small-group activities. Also, as the suggests, I've designed and grouped these topics and activities so that they can be read with Francis Su and Christopher Jackson's Mathematics for Human Flourishing . I typically have students read and discuss Chapters 1-5 as we are transitioning from Play to Truth, Chapters 6-7 as we transition from Truth to Power, Chapters 8-11 as we shift from Power to Justice, and Chapters 12-13 (and the epilogue) near the end of the course. I am consistently impressed by their insights and the connections they make between their own major disciplines and mathematics as described by Su and Jackson.  "
},
{
  "id": "sec-versions",
  "level": "1",
  "url": "sec-versions.html",
  "type": "Preface",
  "number": "",
  "title": "Versions of this text",
  "body": " Versions of this text  There are three main versions of this text.   The HTML version, avaialable at https:\/\/emmath.org , is the author's preferred version. It is easy to update and can contain things like Sage cells, links to spreadsheets for doing lots of arithemtic, and video examples.  For various reasons, a PDF version is often helpful. You can download the PDF here .  Finally, the PreTeXt source code is available on GitHub .   "
},
{
  "id": "sec-acknowledgements",
  "level": "1",
  "url": "sec-acknowledgements.html",
  "type": "Preface",
  "number": "",
  "title": "Acknowledgments",
  "body": " Acknowledgments  First, we acknowledge and thank the Iowa Private Academic Libraries for a generous grant in Fall 2021 to make the initial version of this text possible.  Many aspects of this text were influenced by similar texts. We particularly acknowledge the Discovering the Art of Mathematics project, Hodge and Klima's The Mathematics of Voting and Elections , Oscar Levin's Discrete Mathematics: An Open Introduction , and Burger and Starbird's The Heart of Mathematics: An Invitation to Effective Thinking .  We also thank the two students who were hired to help write the text, Anika Homan and Libby Riege. Their contributions, particularly in Chapters 1-2, were extremely helpful.  My interest in compiling this work is a direct result of the existence of the PreTeXt toolset. Thanks to Rob Beezer and the other contributors for building such a wonderful system.  We finally thank our friends and colleagues in the math department at Dordt for their support of open educational resources and this class.  "
},
{
  "id": "sec-play-intro",
  "level": "1",
  "url": "sec-play-intro.html",
  "type": "Section",
  "number": "1.1",
  "title": "Introduction and Background",
  "body": " Introduction and Background    Motivating Questions   In this section, we will explore the following questions.  What does it mean to play?  What are the components of the Cube?  What are some of the elementary mathematical properties of the Cube?        Thinking about Play    By yourself or in small groups, consider the questions:  What are the essential qualities of play? That is, what makes one activity play , and another not?  What does it mean to be playful in your own major disciplines?  What does it mean to be an explorer in your major disciplines?  What are you excited about this semester? Your answer can be from one of your classes or outside of your classes.  Write your answers in your notes. We'll discuss your responses before working on .    The Dutch historian and cultural theorist Johan Huizinga identified several elements of play: it should be voluntary ; it should be distinct from ordinary life, taking place within its circumscribed time and locality, since dubbed the magic circle ; and it, like a game of chess or solve of a Rubik's cube, can be repeated.  It is the goal of this text to make mathematics playful, inasmuch as is possible. We recognize that you may be reading this for a class which was not voluntary, and you are constrained in your mathematical play by the requirements put upon you by your instructor. However, we encourage you to approach not only the solution of the Rubik's cube from a playful posture, but subsequent explorations as well.    Exploring the Cube    In your groups, investigate your Cubes. What do you notice? What do you wonder? Make a list of as many observations and questions as you can, and write them in your notes.     cubie  cubie center  cubie corner  cubie edge   The little cubes which make up the Cube are often called cubies . The cubies located at the corners are imaginatively called corner cubies , the cubies located at the centers center cubies , and the others edge cubies .      In this investigation we'll consider the corner cubies. Hold your Cube with the white center cubie facing up and the red center cubie facing you.  How many corners are there?  How many stickers does a corner cubie have?  Can you move a corner cubie to a position other than a corner? Explain your reasoning.  Identify all the positions on the Cube to which a corner cubie can be moved while keeping the white center cubie on top and red in front.  As always, make sure you can explain your answers.    There are 8 corners, with three stickers each. Since all corners have three stickers, and other cubies have fewer stickers, we can't move a corner cubie to any location other than another corner. But we can move a given corner to any other corner.     In this investigation we'll consider the edge cubies. Hold your Cube with the white center cubie facing up and the red center cubie facing you.  How many edge cubies are there?  How many stickers does an edge cubie have?  Can you move an edge cubie to a position other than an edge? Explain your reasoning.  Identify all the positions on the Cube to which an edge cubie can be moved while keeping the white center cubie on top and red in front.  As always, make sure you can explain your answers.    There are twelve edge cubies, with two stickers each. As was the case with corners, we can only put edge cubies in other edge locations, but we can move a given edge cubie to any other edge.     In this investigation we'll consider the center cubies. Hold your Cube with the white center cubie facing up and the red center cubie facing you.  How many center cubies are there?  How many stickers does an center cubie have?  Can you move a center cubie to a position other than a center? Explain your reasoning.  Identify all the positions on the Cube to which a center cubie can be moved while keeping the white center cubie on top and red in front.  As always, make sure you can explain your answers.    Finally, we saw that the six center cubies (each with one sticker) cannot move relative to the others.    Question   How can you tell when a cubie is in the correct location ? How can you tell when it is oriented correctly? Is there a difference? Does it depend on the cubie?    Since the centers don't move relative to one another, we can use the centers to tell us where a given cubie goes. For instance, the corner cubie at the corner of the white, red, and blue faces must have a white, red and blue sticker. It is properly oriented when the correct sticker is in each face.    In this section, we thought a bit about play, and began exploring our Cubes. There are three types of cubies: corners, edges, and centers. We finally noted that since the centers don't move, we can use them to determine if a given cubie is in the right location by checking to see that the stickers on the cubie match the colors of the centers.     Do some research on the internet to determine the number of possible configurations of a Rubik's Cube. It's quite large, so think of one or two ways to put this number in context (for instance, a stack of this number of pennies would be how high?). Be prepared to share your examples.   "
},
{
  "id": "expl_intro",
  "level": "2",
  "url": "sec-play-intro.html#expl_intro",
  "type": "Exploration",
  "number": "1.1.1",
  "title": "",
  "body": "  By yourself or in small groups, consider the questions:  What are the essential qualities of play? That is, what makes one activity play , and another not?  What does it mean to be playful in your own major disciplines?  What does it mean to be an explorer in your major disciplines?  What are you excited about this semester? Your answer can be from one of your classes or outside of your classes.  Write your answers in your notes. We'll discuss your responses before working on .   "
},
{
  "id": "invest-firstquestionsaboutthecube",
  "level": "2",
  "url": "sec-play-intro.html#invest-firstquestionsaboutthecube",
  "type": "Investigation",
  "number": "1.1.2",
  "title": "",
  "body": "  In your groups, investigate your Cubes. What do you notice? What do you wonder? Make a list of as many observations and questions as you can, and write them in your notes.   "
},
{
  "id": "sec-play-intro-4-3",
  "level": "2",
  "url": "sec-play-intro.html#sec-play-intro-4-3",
  "type": "Definition",
  "number": "1.1.3",
  "title": "",
  "body": " cubie  cubie center  cubie corner  cubie edge   The little cubes which make up the Cube are often called cubies . The cubies located at the corners are imaginatively called corner cubies , the cubies located at the centers center cubies , and the others edge cubies .   "
},
{
  "id": "invest-corner-cubies",
  "level": "2",
  "url": "sec-play-intro.html#invest-corner-cubies",
  "type": "Investigation",
  "number": "1.1.4",
  "title": "",
  "body": "  In this investigation we'll consider the corner cubies. Hold your Cube with the white center cubie facing up and the red center cubie facing you.  How many corners are there?  How many stickers does a corner cubie have?  Can you move a corner cubie to a position other than a corner? Explain your reasoning.  Identify all the positions on the Cube to which a corner cubie can be moved while keeping the white center cubie on top and red in front.  As always, make sure you can explain your answers.    There are 8 corners, with three stickers each. Since all corners have three stickers, and other cubies have fewer stickers, we can't move a corner cubie to any location other than another corner. But we can move a given corner to any other corner.  "
},
{
  "id": "invest-edge-cubies",
  "level": "2",
  "url": "sec-play-intro.html#invest-edge-cubies",
  "type": "Investigation",
  "number": "1.1.5",
  "title": "",
  "body": "  In this investigation we'll consider the edge cubies. Hold your Cube with the white center cubie facing up and the red center cubie facing you.  How many edge cubies are there?  How many stickers does an edge cubie have?  Can you move an edge cubie to a position other than an edge? Explain your reasoning.  Identify all the positions on the Cube to which an edge cubie can be moved while keeping the white center cubie on top and red in front.  As always, make sure you can explain your answers.    There are twelve edge cubies, with two stickers each. As was the case with corners, we can only put edge cubies in other edge locations, but we can move a given edge cubie to any other edge.  "
},
{
  "id": "invest-center-cubies",
  "level": "2",
  "url": "sec-play-intro.html#invest-center-cubies",
  "type": "Investigation",
  "number": "1.1.6",
  "title": "",
  "body": "  In this investigation we'll consider the center cubies. Hold your Cube with the white center cubie facing up and the red center cubie facing you.  How many center cubies are there?  How many stickers does an center cubie have?  Can you move a center cubie to a position other than a center? Explain your reasoning.  Identify all the positions on the Cube to which a center cubie can be moved while keeping the white center cubie on top and red in front.  As always, make sure you can explain your answers.    Finally, we saw that the six center cubies (each with one sticker) cannot move relative to the others.  "
},
{
  "id": "sec-play-intro-5-1",
  "level": "2",
  "url": "sec-play-intro.html#sec-play-intro-5-1",
  "type": "Exercise",
  "number": "1.1.3.1",
  "title": "",
  "body": "Do some research on the internet to determine the number of possible configurations of a Rubik's Cube. It's quite large, so think of one or two ways to put this number in context (for instance, a stack of this number of pennies would be how high?). Be prepared to share your examples. "
},
{
  "id": "sec-play-describing-the-cube",
  "level": "1",
  "url": "sec-play-describing-the-cube.html",
  "type": "Section",
  "number": "1.2",
  "title": "Describing the Cube",
  "body": " Describing the Cube   Motivating Questions   In this section, we will explore the following questions.  What are faces and layers, and what methods exist for solving them?  How can we describe a complex series of Cube moves?  What is the order of a Cube move?       In this section, we'll define a few terms and work on an initial exploration of the Cube's white layer. Then, we'll discuss the need for a precise method communicating about our Cubes, and introduce some standard notation.    Faces and Layers  We begin with a definition.   Cube face  face  Cube face solved   A face of the Cube refers to one of its sides. We say a face is solved if all the stickers on that side are the same color.    There are many ways to solve the Cube, and we'll explore one approach later in this chapter. A crucial step in learning to solve the Cube is learning to solve one face.   Challenge   Scramble your Cube. Then solve the white face. If you have not done this before (or even if you have), this may take hours or days, not minutes! Avoid relying on any outside resources (including websites, friends, etc.). When you solve it, congratulations! Then scramble the face and solve it again. Repeat this process until you can reliably do it in just a few minutes. Once you can reliably solve the white face, describe, in writing , your methods as clearly and precisely as you can. What challenges did you have to overcome? How did you overcome them?    Congratulations on solving a face of your Cube! But a question comes to mind. When your white face is in its solved state, are all the cubies on the white face in the correct location?   Cube layer  layer  Cube layer solved   A layer of the Cube consists of a face and all of the stickers on Cubies which compose the face. A layer is solved if all of the Cubies in the layer are in the correct location with the correct orientation.      What is the difference between a face and a layer? How is solving a layer different than solving a face?     Challenge   Scramble your Cube and then solve the white layer. As before, this may take hours or days. When you solve it, congratulations! Scramble it and do it again. Once you can reliably solve the white layer, describe, in writing, your methods as clearly and precisely as you can.      The Need for Notation    Find a partner. Take turns describing verbally and without pointing to your Cube your method for moving a corner cubie to its proper position. Similarly, verbally describe your method for moving an edge cubie to its proper position.      As you probably noticed, it is challenging to orally describe complex\/technical ideas in much detail without becoming lost. Is it easier to describe your cubie movements in writing? Why or why not?    Every area of inquiry has an associated collection of terminology and symbology. At its best, this terminology enables efficient and clear communication. However, terminology can often be a barrier. Thus, we want to avoid introducing unnecessary or confusing jargon whenever possible. However, as I hope and underscore, a lack of terminology or symbols severely impairs our ability to communicate deep technical ideas. It is with this background that we introduce the following notation, which has become standard in the Cubing community. Indeed, it seems no accident of history that Newton and Leibniz's calculus came about after algebraic notation became standardized.    Hold the Cube in such a way that you are looking at one of the faces (your choice).  The face you are looking at is referred to as the front (F) face.  The face on the side opposite the front is referred to as the back (B) face.  The face on the right side is referred to as the right (R) face.  The face opposite the right is the left (L) face.  The face on the top of the Cube is the up (U) face.  The face on the bottom of the Cube is the down (D) face.  A graphical version appears in .        List the colors of each of the six faces in .    As we we will see momentarily, the names described in not only help us refer to faces, but also moves of the Cube which help us solve it. In order to understand what a given move does to the Cube, we will need to refer to certain cubies by location. The following definition enables this.    A cubie is named by the face(s) on which it sits, using lowercase letters.      Consider the scrambled Cube in .   What colors are the cubie?  Give the colors of the cubie.  How can you tell whether the cubie in the named location is a corner or edge cubie?  How many letters are required to name a center cubie?  Where is the edge cubie that is blue and orange?     A scrambled cube.     We are most interested in using our new notation to describe moves of the various faces. We thus make the following definition.   Cube move face rotation   A given face name, e.g., , describes a clockwise turn of that face, as you look at the face . A given face name with prime symbol, e.g., , denotes a counterclockwise turn of that face, as you look at the face . A sequence of face moves is written multiplicatively, left to right. We may use parentheses and exponents to write our moves more compactly.      Consider the following questions in the context of a completely solved cube as pictured in .   After performing the move , what color(s) will be on the Up face?  Again starting from a solved cube, perform the move . What color(s) are on the Up face?  Explain the difference in your answers to the first two questions.  How are and related?  Consider the Cube move . Which face will you turn first: the left face, or the front face?  Again consider the Cube move . How many times in this move will we turn the right face?  What would it mean for two cube moves to be equal ? Test your definition by determining whether .  Suppose and are two cube moves. When, if ever, is ?     A solved cube.       Order  A useful algebraic concept for describing Cube moves is that of order .   Cube move order   The order of a cube move is the least number of times that can be repeated before a solved Cube is solved again. We write .      The order of is 4, since 4 clockwise quarter-turns of the right face of a solved Cube results in a solved Cube, and no fewer number of turns results in a solved Cube.       What is ?  Calculate . Why does this make sense?  Calculate .       Conclusion  In this section, we began a systematic exploration of the properties of the Cube. First, we described the need for a notational shorthand in solving the white face and layer.  The standard notation refers to each face as you look at it , ignoring color, and describes a clockwise turn of the face. So, means to first turn the front face clockwise, then the right face clockwise. We then noted that we can refer to a cubie by describing the face(s) on which it sits (using lowercase letters to distinguish cubies from faces): three letters refer to a corner, as it sits at the intersection of three faces; two letters refer to an edge, and one to a center.  We concluded by introducing the idea of order, which will help us analyze and understand more complex sequences of Cube moves in the next section.    Calculate .  Consider the Cube pictured below. What are the colors of the cubie is in the position?  Do some research online to find a sequence of Cube moves which gives the highest possible order. What is the move, and what is the order?   "
},
{
  "id": "def-cube-face",
  "level": "2",
  "url": "sec-play-describing-the-cube.html#def-cube-face",
  "type": "Definition",
  "number": "1.2.1",
  "title": "",
  "body": " Cube face  face  Cube face solved   A face of the Cube refers to one of its sides. We say a face is solved if all the stickers on that side are the same color.   "
},
{
  "id": "def-cube-layer",
  "level": "2",
  "url": "sec-play-describing-the-cube.html#def-cube-layer",
  "type": "Definition",
  "number": "1.2.2",
  "title": "",
  "body": " Cube layer  layer  Cube layer solved   A layer of the Cube consists of a face and all of the stickers on Cubies which compose the face. A layer is solved if all of the Cubies in the layer are in the correct location with the correct orientation.   "
},
{
  "id": "sec-play-describing-the-cube-4-8",
  "level": "2",
  "url": "sec-play-describing-the-cube.html#sec-play-describing-the-cube-4-8",
  "type": "Question",
  "number": "1.2.3",
  "title": "",
  "body": "  What is the difference between a face and a layer? How is solving a layer different than solving a face?   "
},
{
  "id": "discussion-verbal-cubie-moves",
  "level": "2",
  "url": "sec-play-describing-the-cube.html#discussion-verbal-cubie-moves",
  "type": "Discussion",
  "number": "1.2.4",
  "title": "",
  "body": "  Find a partner. Take turns describing verbally and without pointing to your Cube your method for moving a corner cubie to its proper position. Similarly, verbally describe your method for moving an edge cubie to its proper position.   "
},
{
  "id": "discussion-written-cubie-moves",
  "level": "2",
  "url": "sec-play-describing-the-cube.html#discussion-written-cubie-moves",
  "type": "Discussion",
  "number": "1.2.5",
  "title": "",
  "body": "  As you probably noticed, it is challenging to orally describe complex\/technical ideas in much detail without becoming lost. Is it easier to describe your cubie movements in writing? Why or why not?   "
},
{
  "id": "def-face-names",
  "level": "2",
  "url": "sec-play-describing-the-cube.html#def-face-names",
  "type": "Definition",
  "number": "1.2.6",
  "title": "",
  "body": " Hold the Cube in such a way that you are looking at one of the faces (your choice).  The face you are looking at is referred to as the front (F) face.  The face on the side opposite the front is referred to as the back (B) face.  The face on the right side is referred to as the right (R) face.  The face opposite the right is the left (L) face.  The face on the top of the Cube is the up (U) face.  The face on the bottom of the Cube is the down (D) face.  A graphical version appears in .     "
},
{
  "id": "sec-play-describing-the-cube-5-6",
  "level": "2",
  "url": "sec-play-describing-the-cube.html#sec-play-describing-the-cube-5-6",
  "type": "Activity",
  "number": "1.2.8",
  "title": "",
  "body": "  List the colors of each of the six faces in .   "
},
{
  "id": "def-cubie-names",
  "level": "2",
  "url": "sec-play-describing-the-cube.html#def-cubie-names",
  "type": "Definition",
  "number": "1.2.9",
  "title": "",
  "body": "  A cubie is named by the face(s) on which it sits, using lowercase letters.   "
},
{
  "id": "act-cubie-names",
  "level": "2",
  "url": "sec-play-describing-the-cube.html#act-cubie-names",
  "type": "Activity",
  "number": "1.2.10",
  "title": "",
  "body": "  Consider the scrambled Cube in .   What colors are the cubie?  Give the colors of the cubie.  How can you tell whether the cubie in the named location is a corner or edge cubie?  How many letters are required to name a center cubie?  Where is the edge cubie that is blue and orange?     A scrambled cube.    "
},
{
  "id": "def-face-moves",
  "level": "2",
  "url": "sec-play-describing-the-cube.html#def-face-moves",
  "type": "Definition",
  "number": "1.2.12",
  "title": "",
  "body": " Cube move face rotation   A given face name, e.g., , describes a clockwise turn of that face, as you look at the face . A given face name with prime symbol, e.g., , denotes a counterclockwise turn of that face, as you look at the face . A sequence of face moves is written multiplicatively, left to right. We may use parentheses and exponents to write our moves more compactly.   "
},
{
  "id": "expl-turning-faces",
  "level": "2",
  "url": "sec-play-describing-the-cube.html#expl-turning-faces",
  "type": "Exploration",
  "number": "1.2.13",
  "title": "",
  "body": "  Consider the following questions in the context of a completely solved cube as pictured in .   After performing the move , what color(s) will be on the Up face?  Again starting from a solved cube, perform the move . What color(s) are on the Up face?  Explain the difference in your answers to the first two questions.  How are and related?  Consider the Cube move . Which face will you turn first: the left face, or the front face?  Again consider the Cube move . How many times in this move will we turn the right face?  What would it mean for two cube moves to be equal ? Test your definition by determining whether .  Suppose and are two cube moves. When, if ever, is ?     A solved cube.    "
},
{
  "id": "def-order",
  "level": "2",
  "url": "sec-play-describing-the-cube.html#def-order",
  "type": "Definition",
  "number": "1.2.15",
  "title": "",
  "body": " Cube move order   The order of a cube move is the least number of times that can be repeated before a solved Cube is solved again. We write .   "
},
{
  "id": "sec-play-describing-the-cube-6-4",
  "level": "2",
  "url": "sec-play-describing-the-cube.html#sec-play-describing-the-cube-6-4",
  "type": "Example",
  "number": "1.2.16",
  "title": "",
  "body": "  The order of is 4, since 4 clockwise quarter-turns of the right face of a solved Cube results in a solved Cube, and no fewer number of turns results in a solved Cube.   "
},
{
  "id": "sec-play-describing-the-cube-6-5",
  "level": "2",
  "url": "sec-play-describing-the-cube.html#sec-play-describing-the-cube-6-5",
  "type": "Exploration",
  "number": "1.2.17",
  "title": "",
  "body": "   What is ?  Calculate . Why does this make sense?  Calculate .    "
},
{
  "id": "sec-play-describing-the-cube-8-1",
  "level": "2",
  "url": "sec-play-describing-the-cube.html#sec-play-describing-the-cube-8-1",
  "type": "Exercise",
  "number": "1.2.4.1",
  "title": "",
  "body": "Calculate . "
},
{
  "id": "sec-play-describing-the-cube-8-2",
  "level": "2",
  "url": "sec-play-describing-the-cube.html#sec-play-describing-the-cube-8-2",
  "type": "Exercise",
  "number": "1.2.4.2",
  "title": "",
  "body": "Consider the Cube pictured below. What are the colors of the cubie is in the position? "
},
{
  "id": "sec-play-describing-the-cube-8-3",
  "level": "2",
  "url": "sec-play-describing-the-cube.html#sec-play-describing-the-cube-8-3",
  "type": "Exercise",
  "number": "1.2.4.3",
  "title": "",
  "body": "Do some research online to find a sequence of Cube moves which gives the highest possible order. What is the move, and what is the order? "
},
{
  "id": "sec-play-moving-cubies",
  "level": "1",
  "url": "sec-play-moving-cubies.html",
  "type": "Section",
  "number": "1.3",
  "title": "Moving Cubies",
  "body": " Moving Cubies   Motivating Questions   In this section, we will explore the following questions.  How can we move the corner cubies so they are in the correct location?  How can we describe the movement of the middle slice of our Cube?  How can we move the edge cubies so they are in the correct location?       Our goal in this chapter is to explore, and eventually solve, the Cube. To do this, every cubie must be in the correct location with the correct orientation . In this section, we focus on two moves which will allow us to put the cubies in the correct location. Once they are in the correct location, we'll see moves in the next section which will help us orient them correctly, enabling us to (finally) solve the Cube.   We begin by considering .   Moving Corners   Consider the following sequence of Cube moves.      Cube move moving corners   The Cube move described in moves some of the corners on the front face of the Cube.   By performing this move several times, identify on the blank Cube below what is happening to the front face of the Cube.  Using the cubie notation described in , describe what happens to the front face of the Cube after performing this move.  Given what happens to the front face, exercise your human creativity and suggest a short name\/abbreviation for this move.  What is the order of the move?  Practice the move until you can reliably execute it.     A blank cube.       Now that you have identified exactly what does, use it to solve as much of your Cube it enables.    In order to move the edges, it will be helpful to add one more type of fundamental Cube move to our repertoire.   Cube move middle slice   By we mean a clockwise rotation of the (vertical) middle slice as we look at the right face .          Cube move moving edges  Moving Edges   Consider the following sequence of Cube moves.       The Cube move described in moves some of the edges on the up face of the Cube.   By performing this move several times, identify on the blank Cube below what is happening to the up face of the Cube.  Using the cubie notation described in , describe what is happens to the up face of the Cube after performing this move.  Given what happens to the up face, exercise your human creativity and suggest a short name\/abbreviation for this move.  What is the order of the move?  Practice the move until you can reliably execute it.     A blank cube.       Now that you have identified exactly what and do, use them to put every cubie on your Cube in its correct location.     Conclusion  In this section, we focused on two moves that enable us to put our cubies in the correct location. We first found , which affects corners on the front face, and no other cubies. Similarly, affects edges on the up face, and no other cubies. We were then able to put every cubie on our Cube in the correct location. Hurray!    Consider the state of Lila's Cube in . She is so close to solving it! Can you help her finish?    Sam is nearly done with his Cube; it's pictured in . Can you help him finish?    Thanks to your help, Lila solved her Cube in , but now she needs more help! Can you help her finish the Cube pictured in ?    Consider the situation in . Why will alone be insufficient for putting the corners in their correct locations? Devise a strategy for putting the corners in the correct locations.     "
},
{
  "id": "cube-move-cr",
  "level": "2",
  "url": "sec-play-moving-cubies.html#cube-move-cr",
  "type": "Cube Move",
  "number": "1.3.1",
  "title": "Moving Corners.",
  "body": " Moving Corners   Consider the following sequence of Cube moves.    "
},
{
  "id": "expl-cube-move-cr",
  "level": "2",
  "url": "sec-play-moving-cubies.html#expl-cube-move-cr",
  "type": "Exploration",
  "number": "1.3.2",
  "title": "",
  "body": " Cube move moving corners   The Cube move described in moves some of the corners on the front face of the Cube.   By performing this move several times, identify on the blank Cube below what is happening to the front face of the Cube.  Using the cubie notation described in , describe what happens to the front face of the Cube after performing this move.  Given what happens to the front face, exercise your human creativity and suggest a short name\/abbreviation for this move.  What is the order of the move?  Practice the move until you can reliably execute it.     A blank cube.    "
},
{
  "id": "act-cube-move-cr",
  "level": "2",
  "url": "sec-play-moving-cubies.html#act-cube-move-cr",
  "type": "Activity",
  "number": "1.3.4",
  "title": "",
  "body": "  Now that you have identified exactly what does, use it to solve as much of your Cube it enables.   "
},
{
  "id": "def-sr",
  "level": "2",
  "url": "sec-play-moving-cubies.html#def-sr",
  "type": "Definition",
  "number": "1.3.5",
  "title": "",
  "body": " Cube move middle slice   By we mean a clockwise rotation of the (vertical) middle slice as we look at the right face .        "
},
{
  "id": "cube-move-er",
  "level": "2",
  "url": "sec-play-moving-cubies.html#cube-move-er",
  "type": "Cube Move",
  "number": "1.3.6",
  "title": "Moving Edges.",
  "body": " Cube move moving edges  Moving Edges   Consider the following sequence of Cube moves.    "
},
{
  "id": "expl-cube-move-er",
  "level": "2",
  "url": "sec-play-moving-cubies.html#expl-cube-move-er",
  "type": "Exploration",
  "number": "1.3.7",
  "title": "",
  "body": "  The Cube move described in moves some of the edges on the up face of the Cube.   By performing this move several times, identify on the blank Cube below what is happening to the up face of the Cube.  Using the cubie notation described in , describe what is happens to the up face of the Cube after performing this move.  Given what happens to the up face, exercise your human creativity and suggest a short name\/abbreviation for this move.  What is the order of the move?  Practice the move until you can reliably execute it.     A blank cube.    "
},
{
  "id": "act-cube-move-er",
  "level": "2",
  "url": "sec-play-moving-cubies.html#act-cube-move-er",
  "type": "Activity",
  "number": "1.3.9",
  "title": "",
  "body": "  Now that you have identified exactly what and do, use them to put every cubie on your Cube in its correct location.   "
},
{
  "id": "exer-scrambled-edges",
  "level": "2",
  "url": "sec-play-moving-cubies.html#exer-scrambled-edges",
  "type": "Exercise",
  "number": "1.3.1",
  "title": "",
  "body": "Consider the state of Lila's Cube in . She is so close to solving it! Can you help her finish?   "
},
{
  "id": "sec-play-moving-cubies-14-2",
  "level": "2",
  "url": "sec-play-moving-cubies.html#sec-play-moving-cubies-14-2",
  "type": "Exercise",
  "number": "1.3.2",
  "title": "",
  "body": "Sam is nearly done with his Cube; it's pictured in . Can you help him finish?   "
},
{
  "id": "sec-play-moving-cubies-14-3",
  "level": "2",
  "url": "sec-play-moving-cubies.html#sec-play-moving-cubies-14-3",
  "type": "Exercise",
  "number": "1.3.3",
  "title": "",
  "body": "Thanks to your help, Lila solved her Cube in , but now she needs more help! Can you help her finish the Cube pictured in ?   "
},
{
  "id": "sec-play-moving-cubies-14-4",
  "level": "2",
  "url": "sec-play-moving-cubies.html#sec-play-moving-cubies-14-4",
  "type": "Exercise",
  "number": "1.3.4",
  "title": "",
  "body": "Consider the situation in . Why will alone be insufficient for putting the corners in their correct locations? Devise a strategy for putting the corners in the correct locations.   "
},
{
  "id": "sec-play-reorienting-cubies",
  "level": "1",
  "url": "sec-play-reorienting-cubies.html",
  "type": "Section",
  "number": "1.4",
  "title": "Reorienting Cubies",
  "body": " Reorienting Cubies   Motivating Questions   In this section, we will explore the following questions.  How can we change the orientation of the corner cubies?  How can we change the orientation of the edge cubies?  How can we apply our four Cube moves to solve the Cube?       In , we considered ways of moving certain edge and corner cubies. The key that allows us to use and to put your cubies in the correct location is that each move affects precisely three cubies. All others are left unmoved. By using just and , we can thus put each cubie in the correct location. However, even if a cubie is in the correct location, it may be that its stickers are on the wrong faces in this case, it needs to be reoriented .  In this section, we will see how to reorient cubies once they are in the correct location. To do so, we'll learn two moves: one that reorients corners, and one that reorients edges. Once we are able to put each cubie in the correct location, and then orient it correctly, each scrambled Cube becomes a puzzle, solvable by clever application of these moves.   We begin by exploring a move that reorients two corners.   Cube move reorienting corners   Consider the following sequence of Cube moves.      Reorienting Corners   The Cube move described in reorients two corners: one on the Up face, and one on the Down face.   By performing this move several times, identify on the blank Cube below what is happening to the Up face of the Cube. Describe what is happening to the Down face as well.  Using the cubie notation described in , describe what is happens to the Up and Down faces of the Cube after performing this move.  Given what this move does, exercise your human creativity and suggest a short name\/abbreviation for this move.  What is the order of the move?  Practice the move until you can reliably execute it.     A blank cube.     Our last Cube move will reorient two edge cubies. Recall .   Cube move reorienting edges   Consider the following sequence of Cube moves.      Reorienting Edges   The Cube move described in reorients two edges on the Up face.   By performing this move several times, identify on the blank Cube below what is happening to the Up face of the Cube.  Using the cubie notation described in , describe what is happens to the Up face of the Cube after performing this move.  Given what this move does, exercise your human creativity and suggest a short name\/abbreviation for this move.  What is the order of the move?  Practice the move until you can reliably execute it.     A blank cube.      Solving the Cube  When you can consistently perform , , , and , you can use them to solve the Cube. You can use any strategy you want, but here is one to consider.  Put the corners in the correct location .  Put the edges in the correct location .  Reorient any corners that need reorienting.  Reorient any edges that need reorienting.  Celebrate!  Scramble the Cube and do it again.      Conclusion  In this section, we explored the last moves we need to solve the Cube. We also described a strategy for solving the Cube. Our method of solving the Cube is based on the corners-first (CF) method, which is distinct from the layer-by-layer (LL) method which is often the first solving method people learn. The first solution to the Cube, by Erno Rubik himself, was corners-first, and the first world speed-cubing record (22.95 seconds) was done corners-first.  There are advantages and disadvantages to all solution methods. Advantages to corners-first are:  The move sequences are generally shorter in CF  There are just a few important move sequences to memorize  You generally don't \"break\" your existing work and so can recover from mistakes more easily  The solution can scale from a leisurely solve of a few minutes or more to quite fast solves      Sam is nearly done with his Cube! Which of the Cube moves from this section does he need? How many times will he have to perform it?    Lila is nearly done with her Cube! Which move from this section will be helpful? How should she use it?    Sam has gotten himself into a bit of a pickle. How can he apply our moves to solve his Cube?    This configuration is known as the superflip . Describe what you see. Can you achieve this on your Cube?     "
},
{
  "id": "cube-move-co",
  "level": "2",
  "url": "sec-play-reorienting-cubies.html#cube-move-co",
  "type": "Cube Move",
  "number": "1.4.1",
  "title": "",
  "body": " Cube move reorienting corners   Consider the following sequence of Cube moves.    "
},
{
  "id": "expl-cube-move-co",
  "level": "2",
  "url": "sec-play-reorienting-cubies.html#expl-cube-move-co",
  "type": "Exploration",
  "number": "1.4.2",
  "title": "Reorienting Corners.",
  "body": " Reorienting Corners   The Cube move described in reorients two corners: one on the Up face, and one on the Down face.   By performing this move several times, identify on the blank Cube below what is happening to the Up face of the Cube. Describe what is happening to the Down face as well.  Using the cubie notation described in , describe what is happens to the Up and Down faces of the Cube after performing this move.  Given what this move does, exercise your human creativity and suggest a short name\/abbreviation for this move.  What is the order of the move?  Practice the move until you can reliably execute it.     A blank cube.    "
},
{
  "id": "cube-move-eo",
  "level": "2",
  "url": "sec-play-reorienting-cubies.html#cube-move-eo",
  "type": "Cube Move",
  "number": "1.4.4",
  "title": "",
  "body": " Cube move reorienting edges   Consider the following sequence of Cube moves.    "
},
{
  "id": "expl-cube-move-eo",
  "level": "2",
  "url": "sec-play-reorienting-cubies.html#expl-cube-move-eo",
  "type": "Exploration",
  "number": "1.4.5",
  "title": "Reorienting Edges.",
  "body": " Reorienting Edges   The Cube move described in reorients two edges on the Up face.   By performing this move several times, identify on the blank Cube below what is happening to the Up face of the Cube.  Using the cubie notation described in , describe what is happens to the Up face of the Cube after performing this move.  Given what this move does, exercise your human creativity and suggest a short name\/abbreviation for this move.  What is the order of the move?  Practice the move until you can reliably execute it.     A blank cube.    "
},
{
  "id": "sec-play-reorienting-cubies-12-1",
  "level": "2",
  "url": "sec-play-reorienting-cubies.html#sec-play-reorienting-cubies-12-1",
  "type": "Exercise",
  "number": "1.4.1",
  "title": "",
  "body": "Sam is nearly done with his Cube! Which of the Cube moves from this section does he need? How many times will he have to perform it?   "
},
{
  "id": "sec-play-reorienting-cubies-12-2",
  "level": "2",
  "url": "sec-play-reorienting-cubies.html#sec-play-reorienting-cubies-12-2",
  "type": "Exercise",
  "number": "1.4.2",
  "title": "",
  "body": "Lila is nearly done with her Cube! Which move from this section will be helpful? How should she use it?   "
},
{
  "id": "sec-play-reorienting-cubies-12-3",
  "level": "2",
  "url": "sec-play-reorienting-cubies.html#sec-play-reorienting-cubies-12-3",
  "type": "Exercise",
  "number": "1.4.3",
  "title": "",
  "body": "Sam has gotten himself into a bit of a pickle. How can he apply our moves to solve his Cube?   "
},
{
  "id": "sec-play-reorienting-cubies-12-4",
  "level": "2",
  "url": "sec-play-reorienting-cubies.html#sec-play-reorienting-cubies-12-4",
  "type": "Exercise",
  "number": "1.4.4",
  "title": "",
  "body": "This configuration is known as the superflip . Describe what you see. Can you achieve this on your Cube?   "
},
{
  "id": "chap-reasoning-3",
  "level": "1",
  "url": "chap-reasoning-3.html",
  "type": "Section",
  "number": "2.1",
  "title": "Inductive Reasoning",
  "body": " Inductive Reasoning   Motivating Questions   In this section, we will explore the following questions.  What is truth? What is fact? Is there a difference?  What is inductive reasoning? When is it helpful? What are its shortcomings?      We'll begin by attempting to define truth and fact , and compare them. We'll then explore inductive reasoning in depth, considering its benefits shortcomings.    What is truth? What is fact? How are the two concepts related? How are they different? Under which category does the sentence fall?      What's my world?   In the game What's my World? , one person thinks of a single law that defines a hypothetical world (e.g., My world does not contain things that start with the letter C . ). The other players attempt to guess this governing law by taking turns asking questions of the creator, such as Does your world contain dogs? Does it contain cats? and so on. When one of the guessers believe they can identify the governing law, they ask the creator.  Play a few rounds of this game, taking turns in the role of creator. Other than asking the creator directly , how could you be certain that you had determined the law of the world?    We played various rounds of this game, but the only way we identified that we could know for certain that we had guessed the governing law correctly is by asking the creator. We can amass evidence and develop facts and a theory based on those facts, but we can only know for certain by asking the creator directly.     inductive reasoning   Inductive reasoning is the process of drawing general conclusions from particular instances, generally known as data .   The work of the guesser in is to employ inductive reasoning to determine the general law put in place by the creator. This is the heart of the scientific endeavor: looking at the world in its orderliness and using our curiosity and creativity to infer larger governing principles.  But how does this work in mathematics?    Let's play a game with dots and lines. We'll start with at least two dots (though you'll probably want to increase this number pretty quickly). The rules are:   Split your dots into two groups, group and group , and draw each group on its own line.  Connect (some of) the dots from to (some of) the dots in with lines. The lines don't have to be straight they can curve in any way you want! but each line should connect precisely two dots: one from and one from .  Each dot should be connected to at least one other dot no lonely dots!   So, if I label four dots as , one possible drawing is given in .     However, there is a problem with this drawing: the lines cross! I know, this wasn't one of the rules above, but let's add it.   The lines must be drawn so that none of them cross.   Now consider the following questions.   Redraw the picture in so that none of the lines cross.  Give a name to drawings of figures like which can be drawn so that none of the lines cross.  Which (non-crossing!) drawings are possible with two or three dots?  What other non-crossing drawings are possible with four dots? Five?  Based on your work here, do you think it will always be possible to draw these pictures so that none of the lines cross? Explain your thinking.       Based on our work in this section, what are some strengths of inductive reasoning? What are some possible pitfalls? How can we minimize these potential downsides?     In this section, we explored inductive reasoning. We saw that inductive reasoning is the process of drawing general principles from data. It is generally the case that, the more evidence we have for a conclusion, the more sure we can feel about it. We note that, in mathematics and elsewhere, our inductive conclusions are tentative, always subject to new data for which we must account.     Do some internet research on the Twin Prime Conjecture . What is it? When was it first formulated? Is it true? Likely true?    The process of accounting for new data which challenges an accepted perspective is often messy and exciting. Find a time in scientific history in which new data and an accompanying theory challenged accepted understanding, and write two or three paragraphs about it. What was the status quo and how was it revised in light of new information?    "
},
{
  "id": "chap-reasoning-3-4",
  "level": "2",
  "url": "chap-reasoning-3.html#chap-reasoning-3-4",
  "type": "Discussion",
  "number": "2.1.1",
  "title": "",
  "body": "  What is truth? What is fact? How are the two concepts related? How are they different? Under which category does the sentence fall?    "
},
{
  "id": "act-whats-my-world",
  "level": "2",
  "url": "chap-reasoning-3.html#act-whats-my-world",
  "type": "Activity",
  "number": "2.1.2",
  "title": "What’s my world?",
  "body": " What's my world?   In the game What's my World? , one person thinks of a single law that defines a hypothetical world (e.g., My world does not contain things that start with the letter C . ). The other players attempt to guess this governing law by taking turns asking questions of the creator, such as Does your world contain dogs? Does it contain cats? and so on. When one of the guessers believe they can identify the governing law, they ask the creator.  Play a few rounds of this game, taking turns in the role of creator. Other than asking the creator directly , how could you be certain that you had determined the law of the world?    We played various rounds of this game, but the only way we identified that we could know for certain that we had guessed the governing law correctly is by asking the creator. We can amass evidence and develop facts and a theory based on those facts, but we can only know for certain by asking the creator directly.   "
},
{
  "id": "chap-reasoning-3-6",
  "level": "2",
  "url": "chap-reasoning-3.html#chap-reasoning-3-6",
  "type": "Definition",
  "number": "2.1.3",
  "title": "",
  "body": " inductive reasoning   Inductive reasoning is the process of drawing general conclusions from particular instances, generally known as data .  "
},
{
  "id": "expl-dot-game",
  "level": "2",
  "url": "chap-reasoning-3.html#expl-dot-game",
  "type": "Exploration",
  "number": "2.1.4",
  "title": "",
  "body": "  Let's play a game with dots and lines. We'll start with at least two dots (though you'll probably want to increase this number pretty quickly). The rules are:   Split your dots into two groups, group and group , and draw each group on its own line.  Connect (some of) the dots from to (some of) the dots in with lines. The lines don't have to be straight they can curve in any way you want! but each line should connect precisely two dots: one from and one from .  Each dot should be connected to at least one other dot no lonely dots!   So, if I label four dots as , one possible drawing is given in .     However, there is a problem with this drawing: the lines cross! I know, this wasn't one of the rules above, but let's add it.   The lines must be drawn so that none of them cross.   Now consider the following questions.   Redraw the picture in so that none of the lines cross.  Give a name to drawings of figures like which can be drawn so that none of the lines cross.  Which (non-crossing!) drawings are possible with two or three dots?  What other non-crossing drawings are possible with four dots? Five?  Based on your work here, do you think it will always be possible to draw these pictures so that none of the lines cross? Explain your thinking.    "
},
{
  "id": "chap-reasoning-3-10",
  "level": "2",
  "url": "chap-reasoning-3.html#chap-reasoning-3-10",
  "type": "Discussion",
  "number": "2.1.6",
  "title": "",
  "body": "  Based on our work in this section, what are some strengths of inductive reasoning? What are some possible pitfalls? How can we minimize these potential downsides?   "
},
{
  "id": "chap-reasoning-3-12-1",
  "level": "2",
  "url": "chap-reasoning-3.html#chap-reasoning-3-12-1",
  "type": "Exercise",
  "number": "2.1.1",
  "title": "",
  "body": " Do some internet research on the Twin Prime Conjecture . What is it? When was it first formulated? Is it true? Likely true?  "
},
{
  "id": "chap-reasoning-3-12-2",
  "level": "2",
  "url": "chap-reasoning-3.html#chap-reasoning-3-12-2",
  "type": "Exercise",
  "number": "2.1.2",
  "title": "",
  "body": " The process of accounting for new data which challenges an accepted perspective is often messy and exciting. Find a time in scientific history in which new data and an accompanying theory challenged accepted understanding, and write two or three paragraphs about it. What was the status quo and how was it revised in light of new information?  "
},
{
  "id": "chap-reasoning-4",
  "level": "1",
  "url": "chap-reasoning-4.html",
  "type": "Section",
  "number": "2.2",
  "title": "Deductive Reasoning",
  "body": " Deductive Reasoning   Motivating Questions   In this section, we will explore the following questions.  What is deductive reasoning? How does it differ from inductive reasoning?  How is deductive reasoning employed in mathematics?  What are some strengths and weaknesses of deductive reasoning?      Formal mathematical reasoning is deductive (defined momentarily), and begins with axioms , which are statements that should be self-evident and taken to be true. Note that while axioms are not always explicitly stated, they can be when necessary.    The most famous set of axioms are Euclid's postulates for geometry, defined in The Elements , which not only shaped thousands of years of geometry, but solidified the deductive approach to doing and explaining mathematics that we will explore in this unit. At the beginning of Book I of The Elements , Euclid identified five postulates and five axioms.  Euclid's postulates are:   A straight line segment can be drawn joining any two points.  Any straight line segment can be extended indefinitely in a straight line.  Any circle can be described given a center and (radial) distance.  All right angles are equal to one another.  If a straight line intersecting two straight lines make the interior angles on the same side less than two right angles, the two straight lines, if produced indefinitely, meet on the side on which the angles are less than two right angles.   Euclid's axioms (or common notions ) are:   Things which are equal to the same thing are also equal to one another.  If equals are added to equals, the wholes are equal.  If equals are subtracted from equals, the remainders are equal.  Things which coincide with one another are equal to one another.  The whole is greater than the part.   The desired qualities of a system of axioms are:   consistency : we cannot deduce contradictory propositions, such as \"God exists\" and \"God does not exist\" from the same set of axioms  simplicity : we have as few axioms as possible, and they are no more complicated than they need to be  completeness : the system can answer every question we can think to ask   In your groups, discuss Euclid's postulates and common notions, perhaps in view of the desired qualities of an axiomatic system. What strikes you as being interesting or noteworthy? Make a list of at least 2-3 observations. Then consider: on what axioms or assumptions do you make decisions (e.g., about how to spend your time, resources, etc)?    Axioms are unproved, self-evident propositions on top of which logical deductions can be made, and entire fields of study rest. They should be as simple as possible; all except Euclid's fifth postulate (the parallel postulate) are considered quite straightforward. The parallel postulate has a fascinating history; it turns out be independent of the other postulates, and one can create new geometries (on the surface of a sphere, for instance), by rejecting it.  There are lots of unproved assumptions that we make in life. Many Christian mathematicians make explicit that they view the authority of Scripture as an axiom; they can't use logic to conclusively deduce that Scripture is the only authority for Christian faith and life, but they assume it in order to draw conclusions about faith and life.    The process of deductive reasoning in mathematics begins from a set of generally agreed-upon axioms of set theory It should be noted that there is disagreement about the Axiom of Choice, mostly due to some of its surprising consequences. and uses logic to make inevitable conclusions from those axioms. These conclusions are generally called theorems . They are usually given as conditional statements of the form If , then , where and are sensible statements. Moreover, since most deductive statements are presented in conditional form, their scope is generally limited. That is, the statement if it is Monday, then we have math class is only making a claim about what happens on Mondays; it says nothing whatsoever about any other day of the week. We will explore the consequences of this more in .  The author Lewis Carroll loved logic puzzles (he was actually a mathematics professor!), and wrote many of them. Here is one, axiomatized for easy reference.   (Carroll)   Consider the axioms:   If a kitten loves fish, then it is teachable.  Every kitten without a tail will play with a gorilla.  All kittens with whiskers love fish.  If a kitten has green eyes, then it is not teachable.  All kittens have whiskers or do not have tails.     Once you have a deductive argument that (generally) begins from your premises and reasons, step-by-step, to your conclusion, you can write out the argument in a short essay known as a proof . For our purposes, a proof is just a convicing argument . It should be written at a level appropriate to the reader and clearly lay out the steps necessary for a reader who accepts your hypotheses to believe the conclusion. As an example, consider the following.    All kittens with whiskers are teachable.   Proof . Suppose we have a kitten with whiskers. Let's call him Arthur. By #3, Arthur loves fish. Since Arthur loves fish, #1 implies that Arthur is teachable.  Since Arthur was an arbitrary kitten, we conclude that all kittens with whiskers are teachable.    There are several observations which are worth a moment of our time in the proof in .   We first note that the proof is written using standard conventions of academic writing, including complete sentences, proper punctuation and capitalization, etc. This is important! In order to convince someone that your argument is valid, they need to be able to read it.  While the statement to be proved is not written as if , then , it can be stated that way: If is a kitten with whiskers, then is teachable . Thus, our proof begins by considering an arbitrary kitten with whiskers, who we name Arthur. We observe, however, that there is nothing special about Arthur that figures into our proof in a meaningful way, so the argument will apply just as well to any kitten with whiskers we may find.  In each step we take throughout the proof, we refer to the specific axiom from that allow us to take that step. It is valuable to be able to do this, but generally we do not specifically refer to the axioms by number. This is to improve the readability of the proof.  Finally, note that our proof concludes with a conclusion: all kittens with whiskers are teachable. This is good practice and sends an unmistakable signal to the reader that you are done.   Now, prove the theorems that follow using .    If a kitten has green eyes, then it does not love fish.      If a kitten has a tail, then it does not have green eyes.    TBD! We tried some things, but there are issues. We'll look at it again after we study .      Every kitten with green eyes will play with a gorilla.      Compare and contrast the structures of the proofs of the preceding theorems. Can you clarify the general reasoning patterns you used to prove them?      We have now explored both inductive and deductive reasoning. How are they similar? How are they different? How might you decide which type of reasoning to employ in a given situation? What are their strengths and weaknesses?     Conclusion  In this section, we explored deductive reasoning, which begins from accepted axioms and premises and then reasons, step by logical step, toward a conclusion. This is the primary form of reasoning used in mathematics. We saw that while conclusions reached via deductive reasoning are generally tighter and more certain, there are still some drawbacks.  The main drawback of deductive reasoning involves scope. We must begin with axioms, so the axioms must be well-chosen and sensible. However, if one disagrees with the choice of a set of axioms, then one must be willing to set aside any results deduced from them (or, at least, deduced from the particular axioms with which one disagrees).  A second drawback having to do with scope concerns the premises of a conditional statement. In particular, if the premises of a statement are not satisfied, the statement makes no assertion whatsoever (though, as we will see in , there is still a consistent way to assign truth values to statements whose premises are not satisfied).     Invent one or two additional theorems that can be deduced from . Prove them.    While deductive proofs are crucial for the advancement of mathematical knowledge, they can often be complex and hard to understand, even for experts. An extreme example of this arose in the 1970s via the proof of the four color theorem . Read about this theorem and the controversy surrounding its proof, and write a one-paragraph summary. What is the current state of the theorem?    "
},
{
  "id": "chap-reasoning-4-3",
  "level": "2",
  "url": "chap-reasoning-4.html#chap-reasoning-4-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "axioms "
},
{
  "id": "chap-reasoning-4-4",
  "level": "2",
  "url": "chap-reasoning-4.html#chap-reasoning-4-4",
  "type": "Investigation",
  "number": "2.2.1",
  "title": "",
  "body": "  The most famous set of axioms are Euclid's postulates for geometry, defined in The Elements , which not only shaped thousands of years of geometry, but solidified the deductive approach to doing and explaining mathematics that we will explore in this unit. At the beginning of Book I of The Elements , Euclid identified five postulates and five axioms.  Euclid's postulates are:   A straight line segment can be drawn joining any two points.  Any straight line segment can be extended indefinitely in a straight line.  Any circle can be described given a center and (radial) distance.  All right angles are equal to one another.  If a straight line intersecting two straight lines make the interior angles on the same side less than two right angles, the two straight lines, if produced indefinitely, meet on the side on which the angles are less than two right angles.   Euclid's axioms (or common notions ) are:   Things which are equal to the same thing are also equal to one another.  If equals are added to equals, the wholes are equal.  If equals are subtracted from equals, the remainders are equal.  Things which coincide with one another are equal to one another.  The whole is greater than the part.   The desired qualities of a system of axioms are:   consistency : we cannot deduce contradictory propositions, such as \"God exists\" and \"God does not exist\" from the same set of axioms  simplicity : we have as few axioms as possible, and they are no more complicated than they need to be  completeness : the system can answer every question we can think to ask   In your groups, discuss Euclid's postulates and common notions, perhaps in view of the desired qualities of an axiomatic system. What strikes you as being interesting or noteworthy? Make a list of at least 2-3 observations. Then consider: on what axioms or assumptions do you make decisions (e.g., about how to spend your time, resources, etc)?    Axioms are unproved, self-evident propositions on top of which logical deductions can be made, and entire fields of study rest. They should be as simple as possible; all except Euclid's fifth postulate (the parallel postulate) are considered quite straightforward. The parallel postulate has a fascinating history; it turns out be independent of the other postulates, and one can create new geometries (on the surface of a sphere, for instance), by rejecting it.  There are lots of unproved assumptions that we make in life. Many Christian mathematicians make explicit that they view the authority of Scripture as an axiom; they can't use logic to conclusively deduce that Scripture is the only authority for Christian faith and life, but they assume it in order to draw conclusions about faith and life.   "
},
{
  "id": "chap-reasoning-4-5",
  "level": "2",
  "url": "chap-reasoning-4.html#chap-reasoning-4-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "deductive reasoning theorems "
},
{
  "id": "axiom-kittens",
  "level": "2",
  "url": "chap-reasoning-4.html#axiom-kittens",
  "type": "Axiom",
  "number": "2.2.2",
  "title": "(Carroll).",
  "body": " (Carroll)   Consider the axioms:   If a kitten loves fish, then it is teachable.  Every kitten without a tail will play with a gorilla.  All kittens with whiskers love fish.  If a kitten has green eyes, then it is not teachable.  All kittens have whiskers or do not have tails.    "
},
{
  "id": "example-kitten-deduction",
  "level": "2",
  "url": "chap-reasoning-4.html#example-kitten-deduction",
  "type": "Example",
  "number": "2.2.3",
  "title": "",
  "body": "  All kittens with whiskers are teachable.   Proof . Suppose we have a kitten with whiskers. Let's call him Arthur. By #3, Arthur loves fish. Since Arthur loves fish, #1 implies that Arthur is teachable.  Since Arthur was an arbitrary kitten, we conclude that all kittens with whiskers are teachable.   "
},
{
  "id": "chap-reasoning-4-13",
  "level": "2",
  "url": "chap-reasoning-4.html#chap-reasoning-4-13",
  "type": "Theorem",
  "number": "2.2.4",
  "title": "",
  "body": "  If a kitten has green eyes, then it does not love fish.   "
},
{
  "id": "chap-reasoning-4-14",
  "level": "2",
  "url": "chap-reasoning-4.html#chap-reasoning-4-14",
  "type": "Theorem",
  "number": "2.2.5",
  "title": "",
  "body": "  If a kitten has a tail, then it does not have green eyes.    TBD! We tried some things, but there are issues. We'll look at it again after we study .   "
},
{
  "id": "chap-reasoning-4-15",
  "level": "2",
  "url": "chap-reasoning-4.html#chap-reasoning-4-15",
  "type": "Theorem",
  "number": "2.2.6",
  "title": "",
  "body": "  Every kitten with green eyes will play with a gorilla.   "
},
{
  "id": "chap-reasoning-4-16",
  "level": "2",
  "url": "chap-reasoning-4.html#chap-reasoning-4-16",
  "type": "Activity",
  "number": "2.2.7",
  "title": "",
  "body": "  Compare and contrast the structures of the proofs of the preceding theorems. Can you clarify the general reasoning patterns you used to prove them?   "
},
{
  "id": "chap-reasoning-4-17",
  "level": "2",
  "url": "chap-reasoning-4.html#chap-reasoning-4-17",
  "type": "Discussion",
  "number": "2.2.8",
  "title": "",
  "body": "  We have now explored both inductive and deductive reasoning. How are they similar? How are they different? How might you decide which type of reasoning to employ in a given situation? What are their strengths and weaknesses?   "
},
{
  "id": "chap-reasoning-4-19-1",
  "level": "2",
  "url": "chap-reasoning-4.html#chap-reasoning-4-19-1",
  "type": "Exercise",
  "number": "2.2.1",
  "title": "",
  "body": " Invent one or two additional theorems that can be deduced from . Prove them.  "
},
{
  "id": "chap-reasoning-4-19-2",
  "level": "2",
  "url": "chap-reasoning-4.html#chap-reasoning-4-19-2",
  "type": "Exercise",
  "number": "2.2.2",
  "title": "",
  "body": " While deductive proofs are crucial for the advancement of mathematical knowledge, they can often be complex and hard to understand, even for experts. An extreme example of this arose in the 1970s via the proof of the four color theorem . Read about this theorem and the controversy surrounding its proof, and write a one-paragraph summary. What is the current state of the theorem?  "
},
{
  "id": "sec-connectives",
  "level": "1",
  "url": "sec-connectives.html",
  "type": "Section",
  "number": "3.1",
  "title": "Logical Connectives and Rules of Inference",
  "body": " Logical Connectives and Rules of Inference   Motivating Questions   In this section, we will explore the following questions.  What is a proposition?  What are logical connectives? How can they be used to build new propositions?  What does it mean for two propositions to be logically equivalent?      In the late 19th and early 20th centuries, mathematicians began mathematize and formalize logic itself. Today we begin to explore these foundational issues. We'll start with some definitions.   proposition  proposition elementary  logical connectives  A proposition is a declarative sentence which is either true or false, but not both. An elementary proposition is a sentence with a subject and a verb, but no connectives (such as and, or, not, if-then, or if-and-only-if ).     Determine which of the following are propositions (elementary or otherwise). If a given sentence is a proposition, determine its truth value. If it isn't, explain why not.   Barack Obama was the 44th president of the United States.  The square root of a whole number is always a whole number.  The Green Bay Packers are the worst football team.  Why is this class so much fun?  This sentence is false.  A group of crows is called a murder.  Everyone likes cats.      This is a true proposition.  This is a false proposition. As an example, is not a whole number.  This one is harder (though it's an easy \"true\" from your instructor). But it's likely either a false proposition (due to the Packers not having the worst record in the league) or not a proposition at all, as agreement with the sentence is a matter of subjective taste.  This is an interrogative, not a declaration.  This is a declarative sentence, but it's neither true nor false; it's a paradox.  This is a true proposition! Who knew?  This is a false proposition.     Now that we have a sense for what a proposition is, we'll take old propositions and make new ones using logical connectives . In order to describe how the connectives work, mathematicians define the truth values of the new propositions formally that is, without regard to the content of the propositions themselves in terms of the possible combinations of truth values from the constituent propositions. This gives us an abstract way of considering the truth values of propositions.   negation  logical connectives negation   Suppose and are statements (e.g., like those in ). The negation of , denoted and read \"not \", has the opposite truth value of and is defined by .   The negation of .            T  F    F  T        and  logical connectives and   The conjunction of and , denoted and read and , is true when both and are true, and false otherwise. See .   The conjunction of and .               T  T  T    T  F  F    F  T  F    F  F  F        or  logical connectives or   The disjunction of and , denoted and read or , is true when is true, is true, or both are true, and false otherwise. See .   The disjunction of and .               T  T  T    T  F  T    F  T  T    F  F  F         Meaningfully negate the following propositions (without just saying \"It is not the case that...\").   is a negative real number.  Iowa is the tenth largest state in the U.S.A. (by population).  17 is a prime number.        Determine the truth values of the following propositions.   Our math class meets on Mondays and the capital of Iowa is Des Moines.  Our math class meets on Mondays and the capital of Minnesota is Minneapolis.  Our math class meets on Mondays or the capital of Minnesota is Minneapolis.     We want to emphasize that the truth of the conjunction or disjunction depends only on the truth of the constituent statements . It doesn't matter whether it makes sense semantically to combine the constituents this way.   This is true, as both constituents are true.  This is false; the capital of Minnesota is St. Paul, not Minneapolis.  This is true, since it's a disjunctive statement and one of the constituents is true (Math 149 meets on Mondays).     The last connective we'll consider (for now) is implication .   implication  if-then  conditional statements  logical connectives implies  Let and be statements. The implication , \" implies \" (or \"if , then \") is denoted , and is false only when is true but is false. See .   The implication .               T  T  T    T  F  F    F  T  T    F  F  T        Determine the truth values of the following statements. Identify which row of you are in.   If is a negative real number, then triangles have three sides.  If our math class meets today, then it is Wednesday.  If , then dogs do not have wings.  If , then dogs do have wings.      The formalization of mathematical logic ramps up a bit when we consider conditional statements. It is important to remember that we define the truth value of the proposition  purely formally based on the structure of the conditional statement and the truth values of the constituents and . There need not be a causal relationship between and !  The last two rows of are also worth a moment of our time. They state that if the statement Often called the antecedent. is false, then the implication  is true . Note that this is different than saying that Often called the consequent. is true. When the implication is true because is false, we usually say that is vacuously true .   vacuous truth   Suppose your professor promises that, if everyone has solved a Rubik's cube by Friday, then they will bring snacks to class This is purely hypothetical. . Unfortunately, a few students do not solve a Rubik's cube by Friday, so the class does not get snacks.  Decide the truth value of the following implication:  If everyone in the class solves a Rubik's cube by Friday, the professor will bring snacks to class.  Explain your thinking.     An important tool in our logical toolkit is one you likely employed in the theorems you deduced from .   contrapositive   Let and be statements. The contrapositive of the implication is the implication . Complete . Is the contrapositive equivalent to anything we've looked at thus far?   The contrapositive of .                     T  T              T  F              F  T              F  F                   Write the contrapositives of the following statements. Be ready to explain why the contrapositives are equivalent to the original implications.   If a kitten loves fish, then it is teachable.  If a kitten does not have a tail, then it will play with a gorilla.  If a kitten has green eyes, then it is not teachable.  If today is Wednesday, then we have math class.     We have now explored several ways of combining existing propositions into larger propositions using logical connectives. When we use logic to write proofs, we also employ tools known as rules of inference . They clearly describe what steps we are allowed to take. There are many such rules; we will highlight two.  The way in which reasoning with implications is often done uses a rule of inference known as modus ponens which runs roughly:   If , then .  ,  Therefore,   A closely related rule of inference is known as modus tollens , and runs thusly:   If , then .  Not ,  Therefore, not .    In this section, we explored the fundamentals of logical reasoning employed in mathematics. Propositions are constructed out of elementary propositions and logical connectives. The truth values of these propositions can be determined purely formally in a consistent fashion. We then use laws of inference like modus ponens or modus tollens to reason from true proposition to true proposition.     Given an implication , the converse is the statement . Find the truth table for ; is it the same as ? Think of an example of a specific statement that illustrates this.    A statement is called a tautology if is it always true. Similarly, a statement is known as a contradiction if it is never true. Determine which of the following, if any, are tautologies, and which are contradictions.          "
},
{
  "id": "sec-connectives-4",
  "level": "2",
  "url": "sec-connectives.html#sec-connectives-4",
  "type": "Definition",
  "number": "3.1.1",
  "title": "",
  "body": " proposition  proposition elementary  logical connectives  A proposition is a declarative sentence which is either true or false, but not both. An elementary proposition is a sentence with a subject and a verb, but no connectives (such as and, or, not, if-then, or if-and-only-if ).  "
},
{
  "id": "act-propositions",
  "level": "2",
  "url": "sec-connectives.html#act-propositions",
  "type": "Activity",
  "number": "3.1.2",
  "title": "",
  "body": "  Determine which of the following are propositions (elementary or otherwise). If a given sentence is a proposition, determine its truth value. If it isn't, explain why not.   Barack Obama was the 44th president of the United States.  The square root of a whole number is always a whole number.  The Green Bay Packers are the worst football team.  Why is this class so much fun?  This sentence is false.  A group of crows is called a murder.  Everyone likes cats.      This is a true proposition.  This is a false proposition. As an example, is not a whole number.  This one is harder (though it's an easy \"true\" from your instructor). But it's likely either a false proposition (due to the Packers not having the worst record in the league) or not a proposition at all, as agreement with the sentence is a matter of subjective taste.  This is an interrogative, not a declaration.  This is a declarative sentence, but it's neither true nor false; it's a paradox.  This is a true proposition! Who knew?  This is a false proposition.    "
},
{
  "id": "sec-connectives-7",
  "level": "2",
  "url": "sec-connectives.html#sec-connectives-7",
  "type": "Definition",
  "number": "3.1.3",
  "title": "",
  "body": " negation  logical connectives negation   Suppose and are statements (e.g., like those in ). The negation of , denoted and read \"not \", has the opposite truth value of and is defined by .   The negation of .            T  F    F  T      "
},
{
  "id": "sec-connectives-8",
  "level": "2",
  "url": "sec-connectives.html#sec-connectives-8",
  "type": "Definition",
  "number": "3.1.5",
  "title": "",
  "body": " and  logical connectives and   The conjunction of and , denoted and read and , is true when both and are true, and false otherwise. See .   The conjunction of and .               T  T  T    T  F  F    F  T  F    F  F  F      "
},
{
  "id": "sec-connectives-9",
  "level": "2",
  "url": "sec-connectives.html#sec-connectives-9",
  "type": "Definition",
  "number": "3.1.7",
  "title": "",
  "body": " or  logical connectives or   The disjunction of and , denoted and read or , is true when is true, is true, or both are true, and false otherwise. See .   The disjunction of and .               T  T  T    T  F  T    F  T  T    F  F  F      "
},
{
  "id": "sec-connectives-10",
  "level": "2",
  "url": "sec-connectives.html#sec-connectives-10",
  "type": "Activity",
  "number": "3.1.9",
  "title": "",
  "body": "  Meaningfully negate the following propositions (without just saying \"It is not the case that...\").   is a negative real number.  Iowa is the tenth largest state in the U.S.A. (by population).  17 is a prime number.     "
},
{
  "id": "sec-connectives-11",
  "level": "2",
  "url": "sec-connectives.html#sec-connectives-11",
  "type": "Exploration",
  "number": "3.1.10",
  "title": "",
  "body": "  Determine the truth values of the following propositions.   Our math class meets on Mondays and the capital of Iowa is Des Moines.  Our math class meets on Mondays and the capital of Minnesota is Minneapolis.  Our math class meets on Mondays or the capital of Minnesota is Minneapolis.     We want to emphasize that the truth of the conjunction or disjunction depends only on the truth of the constituent statements . It doesn't matter whether it makes sense semantically to combine the constituents this way.   This is true, as both constituents are true.  This is false; the capital of Minnesota is St. Paul, not Minneapolis.  This is true, since it's a disjunctive statement and one of the constituents is true (Math 149 meets on Mondays).    "
},
{
  "id": "def-implications",
  "level": "2",
  "url": "sec-connectives.html#def-implications",
  "type": "Definition",
  "number": "3.1.11",
  "title": "",
  "body": " implication  if-then  conditional statements  logical connectives implies  Let and be statements. The implication , \" implies \" (or \"if , then \") is denoted , and is false only when is true but is false. See .   The implication .               T  T  T    T  F  F    F  T  T    F  F  T     "
},
{
  "id": "sec-connectives-14",
  "level": "2",
  "url": "sec-connectives.html#sec-connectives-14",
  "type": "Exploration",
  "number": "3.1.13",
  "title": "",
  "body": "  Determine the truth values of the following statements. Identify which row of you are in.   If is a negative real number, then triangles have three sides.  If our math class meets today, then it is Wednesday.  If , then dogs do not have wings.  If , then dogs do have wings.     "
},
{
  "id": "sec-connectives-16",
  "level": "2",
  "url": "sec-connectives.html#sec-connectives-16",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "vacuously true "
},
{
  "id": "sec-connectives-17",
  "level": "2",
  "url": "sec-connectives.html#sec-connectives-17",
  "type": "Activity",
  "number": "3.1.14",
  "title": "",
  "body": " vacuous truth   Suppose your professor promises that, if everyone has solved a Rubik's cube by Friday, then they will bring snacks to class This is purely hypothetical. . Unfortunately, a few students do not solve a Rubik's cube by Friday, so the class does not get snacks.  Decide the truth value of the following implication:  If everyone in the class solves a Rubik's cube by Friday, the professor will bring snacks to class.  Explain your thinking.    "
},
{
  "id": "sec-connectives-19",
  "level": "2",
  "url": "sec-connectives.html#sec-connectives-19",
  "type": "Exploration",
  "number": "3.1.15",
  "title": "",
  "body": " contrapositive   Let and be statements. The contrapositive of the implication is the implication . Complete . Is the contrapositive equivalent to anything we've looked at thus far?   The contrapositive of .                     T  T              T  F              F  T              F  F                "
},
{
  "id": "sec-connectives-20",
  "level": "2",
  "url": "sec-connectives.html#sec-connectives-20",
  "type": "Activity",
  "number": "3.1.17",
  "title": "",
  "body": "  Write the contrapositives of the following statements. Be ready to explain why the contrapositives are equivalent to the original implications.   If a kitten loves fish, then it is teachable.  If a kitten does not have a tail, then it will play with a gorilla.  If a kitten has green eyes, then it is not teachable.  If today is Wednesday, then we have math class.    "
},
{
  "id": "sec-connectives-22",
  "level": "2",
  "url": "sec-connectives.html#sec-connectives-22",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "modus ponens "
},
{
  "id": "sec-connectives-24",
  "level": "2",
  "url": "sec-connectives.html#sec-connectives-24",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "modus tollens "
},
{
  "id": "sec-connectives-27-1",
  "level": "2",
  "url": "sec-connectives.html#sec-connectives-27-1",
  "type": "Exercise",
  "number": "3.1.1",
  "title": "",
  "body": " Given an implication , the converse is the statement . Find the truth table for ; is it the same as ? Think of an example of a specific statement that illustrates this.  "
},
{
  "id": "sec-connectives-27-2",
  "level": "2",
  "url": "sec-connectives.html#sec-connectives-27-2",
  "type": "Exercise",
  "number": "3.1.2",
  "title": "",
  "body": " A statement is called a tautology if is it always true. Similarly, a statement is known as a contradiction if it is never true. Determine which of the following, if any, are tautologies, and which are contradictions.        "
},
{
  "id": "sec-formal-systems-incompleteness",
  "level": "1",
  "url": "sec-formal-systems-incompleteness.html",
  "type": "Section",
  "number": "3.2",
  "title": "Formal Systems and Incompleteness",
  "body": " Formal Systems and Incompleteness   Motivating Questions   In this section, we will explore the following questions.  What are formal systems?  What was Hilbert's goal? How was it resolved?  How did Cantor describe infinite sets?       Formal Systems  We have seen thus far a way of formalizing logic so that we can think about the truth of a statement purely syntactically (structurally) without regard for the semantic meaning of the statements under consideration. In the late 19th century, mathematicians developed what became known as formal systems , consisting of axioms, which were strings of symbols, such as along with a logical calculus , which govern the rules of inference that can be used on the axioms to deduce new theorems.  Further, mathematicians had long assumed there were consistent foundational axioms for their discipline. Newly discovered paradoxes challenged this view.   Russell's Paradox  In a certain town lives a barber who only cuts the hair of all people who do not cut their own hair. Who cuts the barber's hair?    Two main schools of mathematical philosophy sprung up in the wake of these discoveries. The formalists argued that statements of mathematics and logic are really just about the rules and consequences for manipulating symbols and strings of letters. That is, mathematics does not have a subject matter at all--just empty symbols, which may be given an interpretation in particular situations and thus have meaning.  The response came from the intuitionists Of course, these are not the only two options for philosophies of mathematics; many mathematicians talk about their work as if they are platonists at some level. . Intuitionism is an approach that considers mathematics to be purely the result of the constructive mental activity of humans rather than the discovery of any principles which we can reasonably claim exist in an objective reality. Thus, in some sense, mathematics is up to whoever is doing the mathematics. To the intuitionists, the formalists were reducing mathematics to a meaningless game with symbols.   What strikes you about the formalist and intuitionist approaches to mathematics? Why?   In 1900, at the second International Congress of Mathematicians in Paris, the esteemed mathematician David Hilbert posed 23 theretofore unanswered problems in mathematics that he thought were important to guide the development of mathematics in the 20th century. Most of Hilbert's problems have been solved, but three are unresolved, two are thought to be too vague to ever get consensus on what a solution would look like, and one is the subject of much debate.  In an attempt to resolve the issues raised by paradoxes like Russell's Paradox, Hilbert posed this problem, the second on the list:  But above all I wish to designate the following as the most important among the numerous questions which can be asked with regard to the axioms: To prove that they are not contradictory, that is, that a definite number of logical steps based upon them can never lead to contradictory results….  That is, Hilbert wanted mathematicians to prove that the axioms on which mathematics was founded did not lead to a contradiction. The resolution to this problem is surprising, and to begin to explore its solution, we will turn to the infinite.    Infinity and Incompleteness  In , we learned about the push from mathematicians in the late 19th\/early 20th century were trying to show that the axioms, the very foundations on which mathematics was built, were both complete (the truth of every sensible statement could be decided via deductions from the axioms) and consistent (one could never deduce contradictory statements from the axioms).  For reasons which are hopefully clear, we'll assume that the axioms are consistent, that is, no contradictions will arise from them. (If contradictions can arise, we are in trouble indeed.) But if the axioms are consistent, can it be shown that they're complete? To answer this question, we dive into the realm of infinity.   Let and be sets , which we may think of as collections of objects. We say that and have the same cardinality if there is a one-to-one correspondence between the objects of and those of , i.e., if each element of can be paired up with one and only one unique element of . In this case, we write .   The idea that we can compare sizes of collections of objects by placing them in one-to-one correspondence is known to very young children. However, they are mostly concerned with finite collections. Georg Cantor's crucial insight in studying the mathematics of the infinite was that one-to-one correspondences could also be used to study infinite collections of numbers. This is widely (though not universally) accepted today, but was the subject of much controversy in the late 19th century when he introduced it.    Let , , and .   Can you find a one-to-one correspondence between and ? Describe it, or explain why none exist.  Can you find a one-to-one correspondence between and ? Describe it, or explain why none exist.  Can you find a one-to-one correspondence between and ? Describe it, or explain why none exist.     In order to explore our undecidable statement, we need to set some notation.   We define the following sets of numbers.   The natural numbers are given by .  The whole numbers are given by .  The integers are given by .  The even integers are given by .  The set of rational numbers is denoted by and consists of all fractions , where are integers and .  The set of real numbers is denoted by and is given by all positive and negative infinite decimals (alternatively, every point on the number line).      For the numbers that follow, identify all sets described in they live in.            We now look for some one-to-one correspondences.    For the following pairs of sets, determine whether a one-to-one correspondence between the two sets exists. If it does, describe it. If it does not, give a justification.   and  and  and  and  (Challenge) and       Let's explore the relationship between the cardinalities of and by considering the interval consisting of all real numbers (points on the number line) satisfying . We will use the notation to denote the infinite decimal with tenths place value , hundredths , and so on.   What is the relationship between and ?  Suppose we have a one-to-one correspondence between and . Explain why this means that we can write where is the th decimal digit of the th number on the list.  Define a real number where if and if . Suppose the first three numbers on the list above are What is in this case?  In general, is it true that ?  Where is on the list in Question 2?  What does your answer to the previous question suggest about the one-to-one correspondence we wrote down in Question 2?  What does your answer to the previous question suggest about the relationship between and ? Between and ?      Given your responses to and , do you think there is a set such that and ? Why or why not?    incompleteness theorems In the early 1930s, the Austrian mathematical logician Kurt Gödel revolutionized mathematical logic with his two incompleteness theorems . Informally, first incompleteness theorem states that any sufficiently strong, consistent formal system contains undecidable statements. That is, there are sensible statements, such as the one raised in , which cannot be proved from within the system. In that case, we may choose to adopt either the statement or its negation as an additional axiom, and may do so without creating any contradiction.  The question in leads to just such a proposition, namely that no such set exists. This has been known as the continuum hypothesis . It was first suggested by Cantor in 1878, and was one of Hilbert's 23 problems. Gödel himself proved in 1940 that its negation, i.e., that such a set does exist, is independent of the usual axioms of set theory. The mathematician Paul Cohen proved in 1963 that the continuum hypothesis itself is independent of the usual axioms of set theory, thus verifying that the hypothesis is undecidable.    In this section, we explored the idea of a formal system, which consists of axioms describing the use of certain symbols, and the rules of logical inference used to make deductions from them. We were introduced to Hilbert's second problem, which challenged mathematicians to find consistent foundational axioms for the entire discipline. In the 1930s, Kurt Gödel proved that no such collection of axioms could exist; if math is consistent, then it will necessarily contain statements whose truth values are independent of the axioms. An example of such a statement is the continuum hypothesis , which asserts the non-existence of a set satisfying .     Suppose the list of real numbers described in is   Calculate the number generated by Cantor's diagonal argument.    How have mathematicians reacted to Gödel's incompleteness theorems? What consequences, if any, have there been for the work of discovering new mathematics?    The existence of undecidable statements in mathematics, such as the continuum hypothesis, may seem like an esoteric quirk without any real consequences. However, there have been similar undecidable statements discovered in related disciplines such as computer science and physics. Find such a statement and, as best you can, describe it.    "
},
{
  "id": "subsec-formal-systems-2",
  "level": "2",
  "url": "sec-formal-systems-incompleteness.html#subsec-formal-systems-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "formal systems logical calculus "
},
{
  "id": "subsec-formal-systems-4",
  "level": "2",
  "url": "sec-formal-systems-incompleteness.html#subsec-formal-systems-4",
  "type": "Exploration",
  "number": "3.2.1",
  "title": "Russell’s Paradox.",
  "body": " Russell's Paradox  In a certain town lives a barber who only cuts the hair of all people who do not cut their own hair. Who cuts the barber's hair?   "
},
{
  "id": "subsec-formal-systems-5",
  "level": "2",
  "url": "sec-formal-systems-incompleteness.html#subsec-formal-systems-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "formalists "
},
{
  "id": "subsec-formal-systems-6",
  "level": "2",
  "url": "sec-formal-systems-incompleteness.html#subsec-formal-systems-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "intuitionists "
},
{
  "id": "subsec-formal-systems-7",
  "level": "2",
  "url": "sec-formal-systems-incompleteness.html#subsec-formal-systems-7",
  "type": "Discussion",
  "number": "3.2.2",
  "title": "",
  "body": " What strikes you about the formalist and intuitionist approaches to mathematics? Why?  "
},
{
  "id": "subsec-infinite-sets-4",
  "level": "2",
  "url": "sec-formal-systems-incompleteness.html#subsec-infinite-sets-4",
  "type": "Definition",
  "number": "3.2.3",
  "title": "",
  "body": " Let and be sets , which we may think of as collections of objects. We say that and have the same cardinality if there is a one-to-one correspondence between the objects of and those of , i.e., if each element of can be paired up with one and only one unique element of . In this case, we write .  "
},
{
  "id": "subsec-infinite-sets-6",
  "level": "2",
  "url": "sec-formal-systems-incompleteness.html#subsec-infinite-sets-6",
  "type": "Activity",
  "number": "3.2.4",
  "title": "",
  "body": "  Let , , and .   Can you find a one-to-one correspondence between and ? Describe it, or explain why none exist.  Can you find a one-to-one correspondence between and ? Describe it, or explain why none exist.  Can you find a one-to-one correspondence between and ? Describe it, or explain why none exist.    "
},
{
  "id": "def-number_sets",
  "level": "2",
  "url": "sec-formal-systems-incompleteness.html#def-number_sets",
  "type": "Definition",
  "number": "3.2.5",
  "title": "",
  "body": " We define the following sets of numbers.   The natural numbers are given by .  The whole numbers are given by .  The integers are given by .  The even integers are given by .  The set of rational numbers is denoted by and consists of all fractions , where are integers and .  The set of real numbers is denoted by and is given by all positive and negative infinite decimals (alternatively, every point on the number line).   "
},
{
  "id": "subsec-infinite-sets-9",
  "level": "2",
  "url": "sec-formal-systems-incompleteness.html#subsec-infinite-sets-9",
  "type": "Activity",
  "number": "3.2.6",
  "title": "",
  "body": "  For the numbers that follow, identify all sets described in they live in.           "
},
{
  "id": "expl-countable",
  "level": "2",
  "url": "sec-formal-systems-incompleteness.html#expl-countable",
  "type": "Exploration",
  "number": "3.2.7",
  "title": "",
  "body": "  For the following pairs of sets, determine whether a one-to-one correspondence between the two sets exists. If it does, describe it. If it does not, give a justification.   and  and  and  and  (Challenge) and    "
},
{
  "id": "expl-uncountable",
  "level": "2",
  "url": "sec-formal-systems-incompleteness.html#expl-uncountable",
  "type": "Exploration",
  "number": "3.2.8",
  "title": "",
  "body": "  Let's explore the relationship between the cardinalities of and by considering the interval consisting of all real numbers (points on the number line) satisfying . We will use the notation to denote the infinite decimal with tenths place value , hundredths , and so on.   What is the relationship between and ?  Suppose we have a one-to-one correspondence between and . Explain why this means that we can write where is the th decimal digit of the th number on the list.  Define a real number where if and if . Suppose the first three numbers on the list above are What is in this case?  In general, is it true that ?  Where is on the list in Question 2?  What does your answer to the previous question suggest about the one-to-one correspondence we wrote down in Question 2?  What does your answer to the previous question suggest about the relationship between and ? Between and ?    "
},
{
  "id": "disc-ch",
  "level": "2",
  "url": "sec-formal-systems-incompleteness.html#disc-ch",
  "type": "Discussion",
  "number": "3.2.9",
  "title": "",
  "body": " Given your responses to and , do you think there is a set such that and ? Why or why not?  "
},
{
  "id": "subsec-infinite-sets-14",
  "level": "2",
  "url": "sec-formal-systems-incompleteness.html#subsec-infinite-sets-14",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "incompleteness theorems "
},
{
  "id": "subsec-infinite-sets-15",
  "level": "2",
  "url": "sec-formal-systems-incompleteness.html#subsec-infinite-sets-15",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "continuum hypothesis "
},
{
  "id": "sec-formal-systems-incompleteness-5-1",
  "level": "2",
  "url": "sec-formal-systems-incompleteness.html#sec-formal-systems-incompleteness-5-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "continuum hypothesis "
},
{
  "id": "sec-formal-systems-incompleteness-6-1",
  "level": "2",
  "url": "sec-formal-systems-incompleteness.html#sec-formal-systems-incompleteness-6-1",
  "type": "Exercise",
  "number": "3.2.3.1",
  "title": "",
  "body": " Suppose the list of real numbers described in is   Calculate the number generated by Cantor's diagonal argument.  "
},
{
  "id": "sec-formal-systems-incompleteness-6-2",
  "level": "2",
  "url": "sec-formal-systems-incompleteness.html#sec-formal-systems-incompleteness-6-2",
  "type": "Exercise",
  "number": "3.2.3.2",
  "title": "",
  "body": " How have mathematicians reacted to Gödel's incompleteness theorems? What consequences, if any, have there been for the work of discovering new mathematics?  "
},
{
  "id": "sec-formal-systems-incompleteness-6-3",
  "level": "2",
  "url": "sec-formal-systems-incompleteness.html#sec-formal-systems-incompleteness-6-3",
  "type": "Exercise",
  "number": "3.2.3.3",
  "title": "",
  "body": " The existence of undecidable statements in mathematics, such as the continuum hypothesis, may seem like an esoteric quirk without any real consequences. However, there have been similar undecidable statements discovered in related disciplines such as computer science and physics. Find such a statement and, as best you can, describe it.  "
},
{
  "id": "sec-intro-to-dds",
  "level": "1",
  "url": "sec-intro-to-dds.html",
  "type": "Section",
  "number": "4.1",
  "title": "Sequences",
  "body": " Sequences   Motivating Questions   In this section, we will explore the following questions.  What is a sequence?  How can we use discrete sequences to describe real-world phenomena?  What is the difference between a recursive definition and an explicit formula for a discrete sequence?      We begin our study with an exploration of sequences .   sequence  sequence terms of   A sequence is an ordered list of numbers, called terms .    That's it! Typically, we explore sequences which continue forever; these are generally called infinite sequences . Such sequences are typically described using a mathematical rule of some sort. Let's look at an example.   Joris is a collector of board games. His collection currently has 37 games, and each year he budgets enough to acquire 8 new games. We'll use the notation to describe how many games Joris has in year , where we consider (that is, in year ) to be the number of games he currently has. Thus, . We would also expect , and . We say that are the first three terms of the sequence.  This way of describing the number of games Joris has is known as a recursive description, where each term depends on previous terms. That is, the recursive description is given by the formula    Since the sequence above only allows for whole number inputs, it cannot estimate the number of board games Joris will have in 1.3 years, or years; the system's prediction changes by 8 as the elapsed time changes from 1 to 2, 5 to 6, and so on. This makes the sequence discrete .  We also note the recursive nature of the definition of the sequence in . But there are other ways to describe sequences, and we turn to those now.    A recursive definition is nice because it is reasonably intuitive and fits with our usual understanding of how things change over time: they start from where they are now, and then change a little every so often. But perhaps we'd like to know how long it will take Joris to accumulate 500 games.    Clearly describe in 2-3 sentences a process for using the recursive definition in that would allow you to determine how many years it would take Joris to accumulate 500 board games. Please do not use this process to answer the question!  In 2-3 sentences, describe the disadvantage in the process you used in Question 1 for finding how long it would take Joris to accumulate 500 games.  What we want is a explicit formula for . That is, we want a formula that allows us to plug in a value for that will give us the number of games that Joris has in year without having to know any of the previous terms in the sequence. Find such a formula, and compute the first three terms to convince your group that your formula produces the same sequence as .      Just using the recursive formula provided in , we could find the number of years it would take Joris to accumulate 500 board games by generating the terms of the sequence and seeing when it passes 500. We would do this by first finding , then to find , then using to find , etc.  This is highly inefficient! In order to know, e.g., , you would need to compute all preceding terms.  An explicit formula is given by . Observe that , , and .     The sequence described in is known as a linear sequence. This is because, like a line, it grows at a constant rate. Linear growth is extremely useful because it is straightforward to understand and apply. However, it has its shortcomings as well.    Lila is 6 years old, and is 43.5 inches tall. Her parents are told to expect her to grow at approximately 2.25 inches\/year. Let denote Lila's height years from now.   Predict Lila's height when she turns 8.  Give a recursive description for Lila's height.  Give an explicit formula for Lila's height.  How tall will Lila be when she is 50? Give your answer in feet (remember: there are 12 inches in a foot).  In 2-3 sentences, clearly articulate at least one shortcoming of extrapolating using linear models.      Since she is 39 inches tall when she is 4, she should be 41.25 inches tall when she is 5, and 43.5 inches tall when she is 6.  We can recursively describe her height years from now by for .  This model again assumes linear growth: Lila's height is predicted by .  When Lila is 50, the model predicts that she will be inches tall, or 12 feet, 7.5 inches tall.  Almost nothing changes linearly over a long enough time scale. So while linear models are helpful on short time scales, they eventually become unreliable.      Conclusion  In this section, we explored the idea of a (discrete) sequence. A sequence is just a list of numbers, and we considered sequences which are (in theory, at least) infinite. We saw two ways of describing a sequence other than just listing the numbers in order: recursively, and with an explicit formula. The recursive definition fits with our intuition about how quantities change over time, but it can be tedious to calculate terms that appear late in the sequence, as you need to calculate every term leading up to the one in which you're interested. Explicit formulas, on the other hand, give us shortcuts to calculating any term we want, but can often be hard to find and can obscure the actual behavior of the sequence.  Next time, we'll take a look at the ways in which we can combine multiple sequences to create systems . These systems can be used to describe the behavior of real-world interactions. In particular, we'll explore a basic predator-prey model (involving two populations, the predators and the prey), and then a system of three sequences that describes the basic dynamics of the spread of a disease.     Find an explicit formula for each of the following.        The first three terms in a sequence are listed below as numbers of dots. Determine a recursive description for the sequence. If possible, determine an explicit formula for the sequence.       The first four terms in a sequence are listed below as numbers of dots. Determine a recursive description for the sequence. If possible, determine an explicit formula for the sequence.       "
},
{
  "id": "def-sequence",
  "level": "2",
  "url": "sec-intro-to-dds.html#def-sequence",
  "type": "Definition",
  "number": "4.1.1",
  "title": "",
  "body": " sequence  sequence terms of   A sequence is an ordered list of numbers, called terms .   "
},
{
  "id": "sec-intro-to-dds-5",
  "level": "2",
  "url": "sec-intro-to-dds.html#sec-intro-to-dds-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "infinite sequences "
},
{
  "id": "example-recursive",
  "level": "2",
  "url": "sec-intro-to-dds.html#example-recursive",
  "type": "Example",
  "number": "4.1.2",
  "title": "",
  "body": " Joris is a collector of board games. His collection currently has 37 games, and each year he budgets enough to acquire 8 new games. We'll use the notation to describe how many games Joris has in year , where we consider (that is, in year ) to be the number of games he currently has. Thus, . We would also expect , and . We say that are the first three terms of the sequence.  This way of describing the number of games Joris has is known as a recursive description, where each term depends on previous terms. That is, the recursive description is given by the formula   "
},
{
  "id": "sec-intro-to-dds-7",
  "level": "2",
  "url": "sec-intro-to-dds.html#sec-intro-to-dds-7",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "discrete "
},
{
  "id": "act-games",
  "level": "2",
  "url": "sec-intro-to-dds.html#act-games",
  "type": "Activity",
  "number": "4.1.3",
  "title": "",
  "body": "  A recursive definition is nice because it is reasonably intuitive and fits with our usual understanding of how things change over time: they start from where they are now, and then change a little every so often. But perhaps we'd like to know how long it will take Joris to accumulate 500 games.    Clearly describe in 2-3 sentences a process for using the recursive definition in that would allow you to determine how many years it would take Joris to accumulate 500 board games. Please do not use this process to answer the question!  In 2-3 sentences, describe the disadvantage in the process you used in Question 1 for finding how long it would take Joris to accumulate 500 games.  What we want is a explicit formula for . That is, we want a formula that allows us to plug in a value for that will give us the number of games that Joris has in year without having to know any of the previous terms in the sequence. Find such a formula, and compute the first three terms to convince your group that your formula produces the same sequence as .      Just using the recursive formula provided in , we could find the number of years it would take Joris to accumulate 500 board games by generating the terms of the sequence and seeing when it passes 500. We would do this by first finding , then to find , then using to find , etc.  This is highly inefficient! In order to know, e.g., , you would need to compute all preceding terms.  An explicit formula is given by . Observe that , , and .    "
},
{
  "id": "sec-intro-to-dds-10",
  "level": "2",
  "url": "sec-intro-to-dds.html#sec-intro-to-dds-10",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "linear "
},
{
  "id": "act-linear-growth",
  "level": "2",
  "url": "sec-intro-to-dds.html#act-linear-growth",
  "type": "Activity",
  "number": "4.1.4",
  "title": "",
  "body": "  Lila is 6 years old, and is 43.5 inches tall. Her parents are told to expect her to grow at approximately 2.25 inches\/year. Let denote Lila's height years from now.   Predict Lila's height when she turns 8.  Give a recursive description for Lila's height.  Give an explicit formula for Lila's height.  How tall will Lila be when she is 50? Give your answer in feet (remember: there are 12 inches in a foot).  In 2-3 sentences, clearly articulate at least one shortcoming of extrapolating using linear models.      Since she is 39 inches tall when she is 4, she should be 41.25 inches tall when she is 5, and 43.5 inches tall when she is 6.  We can recursively describe her height years from now by for .  This model again assumes linear growth: Lila's height is predicted by .  When Lila is 50, the model predicts that she will be inches tall, or 12 feet, 7.5 inches tall.  Almost nothing changes linearly over a long enough time scale. So while linear models are helpful on short time scales, they eventually become unreliable.    "
},
{
  "id": "sec-intro-to-dds-13-1",
  "level": "2",
  "url": "sec-intro-to-dds.html#sec-intro-to-dds-13-1",
  "type": "Exercise",
  "number": "4.1.1",
  "title": "",
  "body": " Find an explicit formula for each of the following.      "
},
{
  "id": "sec-intro-to-dds-13-2",
  "level": "2",
  "url": "sec-intro-to-dds.html#sec-intro-to-dds-13-2",
  "type": "Exercise",
  "number": "4.1.2",
  "title": "",
  "body": " The first three terms in a sequence are listed below as numbers of dots. Determine a recursive description for the sequence. If possible, determine an explicit formula for the sequence.     "
},
{
  "id": "sec-intro-to-dds-13-3",
  "level": "2",
  "url": "sec-intro-to-dds.html#sec-intro-to-dds-13-3",
  "type": "Exercise",
  "number": "4.1.3",
  "title": "",
  "body": " The first four terms in a sequence are listed below as numbers of dots. Determine a recursive description for the sequence. If possible, determine an explicit formula for the sequence.     "
},
{
  "id": "sec-dds",
  "level": "1",
  "url": "sec-dds.html",
  "type": "Section",
  "number": "4.2",
  "title": "Discrete Dynamical Systems",
  "body": " Discrete Dynamical Systems   Motivating Questions   In this section, we will explore the following questions.  What is a discrete dynamical system? How do they relate to sequences?  How can we use discrete dynamical systems to describe real-world phenomena like predator-prey interactions, or the spread of a disease in a population?       In , we introduced the notion of a sequence. In this section, we will focus on situations in which our sequences represent a quantity changing over discrete, consistent periods of time. We will also consider systems of sequences: two or more interrelated sequences which describe the behavior of multiple changing quantities all at once. Before we dive into such systems, we consider another type of growth.    Exponential Growth  Populations of people and animals do not grow linearly. Instead, they usually grow by a percentage of the whatever the current population is. So, if that annual percentage is, say, 10%, and the current population of a group of fish in a pond is 1000, this model predicts a population of fish for next year.  In symbols, if represents the number of fish years from now, then , . The number 0.1 is called the growth rate , , and the number 1.1 is the growth multiplier .  In what follows, I will occasionally provide Sage cells in which you can do basic computations (and in which I may help get you started). To see how this works, click \"Evaluate\" in the Sage cell below to see what happens.     Consider a population of 1000 fish growing at 10% per year.   Give a formula for in terms of , and then a formula for in terms of .  Using your answer to the previous part as a guide, give a formula for in terms of .  Again, using your answer to Question 1 and the work in the paragraph preceding this activity, give a formula for in terms of . Use this formula to find in terms of . Why might these formulas be more useful than the ones you found in Question 1?  State your best guess for a formula for in terms of . Use your formula to estimate the number of fish in the pond after 10, 20, and 50 years. What is this model missing?  Press Evaluate below to confirm your response to Question 4. What happens if you increase or decrease the growth rate, ? Try it, and reevaluate.       We have Similarly, .  We may reasonably extrapolate that .  We see . Similarly, . These formulas are more useful because we only need to know the first term, .  Best guess: . Much like the linear model from the previous activity, this model assumes that the population continues to grow forever.  You should notice that the curve grows more slowly if , and more quickly if .     The type of growth explored in called exponential , as the growth comes from taking the growth multiplier to larger and larger powers (exponents). We saw the danger of extrapolation with linear models in , and we note a similar danger in extrapolating with exponential models. If nothing else, it's likely that the pond cannot hold 100,000 fish. Thankfully, we can modify our exponential growth model by introducing an upper limit for what the habitat can hold.    Suppose our pond can hold 5000 fish. This is known as the carrying capacity , and we'll denote it with the letter . We'll now let be our maximum growth rate, but we'll let it slowly reduce as the population grows.   As increases and gets closer and closer to over time, what happens to the ratio ? What number does it get close to?  Thus, what happens to the expression as increases and gets closer and closer to ?  Ecologically speaking, what does it mean for to get closer and closer to ?  As the phenomena described in Question 3 occurs, what do we expect the graph of over time to look like?  Test your suspicion by evaluating the Sage code below.       As gets closer and closer to , the ratio approaches 1.  Since is approaching 1, approaches .  As approaches , the population of fish is approaching the maximum number of fish that the pond can support (the carrying capacity).  While we expect some sort of growth early (exponential is a good guess), we then expect the population to level off over time as it approaches the carrying capacity.  Suspicion confirmed!       A discrete predator-prey model  We now consider systems of discrete sequences, called discrete dynamical systems .   A dynamical system refers to any fixed mathematical rule which describes how a system changes over time. A discrete dynamical system changes at fixed intervals in time (e.g., each hour), and does not change between the fixed points in time (e.g., a system that changes each hour will view the changing quantity as static between the hours of 1:00pm and 2:00pm).   There are two main types of dynamical systems: discrete and continuous. The study of continuous dynamical systems is the domain of calculus and its related disciplines (e.g., differential equations). Continuous dynamical systems treat time as infinitely divisible; discrete dynamical systems do not. Typically, a dynamical system involves multiple related quantities that change over time.  We begin with a classic predator-prey model adapted from the Feedback Systems Wiki at Caltech. For historical reasons, we let be the size of a population of Canadian lynxes in year and be the size of a population of snowshoe hares, the lynx's primary prey. Of course, we can carry out the following analysis using any predator\/prey pair.    Let be the initial population of hares, and the initial population of lynxes. For , the discrete Lotka-Volterra model for the lynx\/hare population is given by:   where is the hare birth rate per unit time as a function of the food supply , is the lynx mortality rate, and and are interaction coefficients.   Note the interrelationship between the two equations: the formula for calculating requires knowing not only , but also . This makes sense! These populations interact, so the presence (or absence) of lynx should reasonably affect the hare population. Let's further analyze this model.    Consider the predator\/prey model introduced in .   What do the terms and represent?  Which term in the model represents an increase in the hare population? Which term represents a decrease in the hare population? Explain how you know.  Which term in the model represents an increase in the lynx population? Which term represents a decrease in the lynx population? Explain how you know.  What does the product represent? (The multiplication principle may be helpful here; also consider what is described to be.)  What simplifying assumptions does this model make about how the populations increase and decrease?       Let's start by assuming that and . That is, we begin with 20 hares and 35 lynxes. Let's further assume that , , and (parameters scaled by 12 months).   Compute and . What seems to be happening to the two populations? Confirm using the Sage cell below, which will display the first ten months' worth of predictions, or explore this spreadsheet . Note that the hare population is given by the blue dots and the lynx population by the red.   The interaction coefficients translate to a decrease in the lynx population and an increase in the hare population. What do you expect to happen if we increase it from 0.014 to 0.05?  Test your suspicion using the Sage cell below, or this spreadsheet .   Qualitatively describe the dynamics displayed in the Sage output in the previous question.     One might reasonably wonder how such a simple model does in making predictions about the long-term dynamics of these populations. The answer is: surprisingly well! In , observe the actual collected data on hare and lynx populations over 90 years, from 1845 to 1935. In , we see dynamics predicted by the model. Note the same cyclical patterns of an increase in the hare population followed by an increase in the lynx population, which in turn causes a decrease in the hare population, etc.   Data on hare and lynx populations over time. ( Source )     The predicted dynamics of hare and lynx populations over time. ( Source )    To be clear, the purpose of the model is not to make absolutely certain predictions about the precise numbers of hares and lynxes present in the Canadian wilderness. Instead, we want to understand the broad dynamics of how the populations change relative to one another. Mathematical ecologists can then use these models to understand how small changes in the parameters (say, an increase in the rate of predation) affect the broader dynamics of the ecological system.    The discrete SIR epidemiological model  We now arrive at the main goal of this chapter: the description of a basic mathematical model for the spread of an infectious disease. We'll first present the model itself and examine its features and assumptions. As was the case with the predator-prey model, we'll see that while it does make simplifying assumptions, it still allows us to analyze the broader dynamics of the disease transmission. We'll then look at ways of reducing the rate of infection, including the so-called \"flattening the curve\" method.  We begin with the model. It is known as a compartmental model , as it divides the population into compartments and assumes that every individual in the same compartment has the same characteristics (at least as far as the transmission of the disease is concerned). We'll look at the simplest such model, the discrete SIR model. Many more complex models are built on the SIR model.   Consider a population of people through which a disease is spreading. For some discrete time , let denote the number of individuals susceptible to the disease, the number of individuals infected with the disease, and the number of individuals who have recovered from the disease. We assume that that people move through the compartments as follows:   For , the model is given by the following equations.   The constant is known as the recovery rate parameter, which roughly describes how fast someone moves from the infected compartment to the recovered compartment. The constant is known as the infection rate , and roughly describes how fast someone moves from the susceptible compartment to the infected compartment.   Let's explore the equations.     What does mean? What assumptions does this make? How does it simplify our analysis?  What does the first equation in the set of four mean? What assumptions does it make about the population?  The second equation describes how the susceptible population changes over time. It contains the term . Based on our work above with a predator-prey model and the definition of , what epidemiological event is this term describing?  Explain why it makes sense that we add in the equation defining .  What does the term mean in the equation for ? Why does it make sense to add  in the equation for ?  Note that there are no terms being subtracted in the equation for . What assumption does this tell us that the model is making?       Let's see what happens when we plug in some numbers. Assume that , , and .   Why does it make sense that we have (assuming we have a new disease entering a population).  What is ?  Let's assume that and . Compute , and .  Use your answer to the previous part to compute , and .  Now check your work using this spreadsheet (download a copy to your device and edit it there).       In this and the following activity, we'll use the spreadsheet found here . Download the file and play around with the numbers at the top of the sheet to change some of the features; e.g., how does increasing\/decreasing the number of initial infected individuals change the shape of the curves? What do you notice? What do you wonder? Give at least 2-3 observations or questions.    The COVID-19 pandemic introduced many people to a quantity called . Read R-naught or R-zero . This is known as the basic reproduction number , and is the expected number of new infections directly generated by a single case. So, if Sam were to get COVID-19, would be the expected number of people Sam would directly infect. We would then expect each of them to infect another people, and so on.  Generally, if , we expect the disease to spread. If , we expect it to die out.  The next activity explores the ways in which varying impacts new cases of the disease caused both directly and indirectly by a single person.    In this activity, we assume different values for . However, we will make two assumptions that don't change.  First, assume that all direct infections are done within a 5-day period. Second, assume that that those infected don't infect others until the next five day period.  Let be the number of cases I've caused after five-day periods. Assume (me).   Explain why .  Explain why .  After 30 days, six five-day periods will have passed. Explain why  Our SIR model approximates by the formula Using that formula, what is the approximate for the situation described in ?  Given that value of , use the Sage cell below (replacing the ? with the value you found) to estimate how many cases Sam directly or indirectly causes over a 30-day period.  The practice of social distancing is intended to reduce . Assume that strict social distancing is observed, and this reduces to approximately 1.25 (one direct infection fewer). Now how many cases does Sam cause over the course of a 30-day period?  As the COVID-19 situation is ongoing, estimates for vary significantly (and are variant-dependent). One study from February 2020 found an average of 3.28. If that is the true number, approximately how many cases will a typical infected person be responsible for over the course of a month? Use the Sage cell to determine your answer.  Other studies suggest that, in the absence of any social interventions, the original variant of COVID-19 has . In that case, how many cases would an infected person be responsible for over the course of a month?  The Delta variant of COVID-19 has . If I am infected with the Delta variant, approximately how many new cases will I cause within a month?  The Omicron variant of COVID-19 has an estimated (note that this is being written in February 2022, just as the first major Omicron wave is subsiding; it should therefore be treated as preliminary). If Sam is infected with the Omicron variant, approximately how many new cases will he cause within a month?      For our last activity, we'll explore how reducing  flattens the curve of infected people at time , . There are two main advantages of a flattened infected curve. First, this often corresponds to fewer infected people overall. Second, the lack of a spike in infected persons makes it easier for the healthcare system to effectively treat those who are infected (not to mention anyone with other medical concerns).    One last time, consider the values for the variables we used in ; for reference, this was , , , , and . We'll again use the Google sheet to answer these questions.   What is ? (Recall from Question 4 of .)  This value is pretty high (though it is approximately the of diseases like measles and chicken pox!), but is convenient for our purposes. Nonetheless, we can still explore the ways in which changes in affect the shape of the curves; our qualitative observations will still apply to real-world situations like the current coronavirus pandemic.  Recall that and assume our population size and recovery rate are constant. Compute the three values of that result from infection rates of , and . In turn, plug these values into the Google sheet and comment on the shape of the infection curve: how tall is the spike of infected individuals, and at what time is it at its highest point?  Similarly, assuming and are constant, compute the values of that result from , and . In turn, plug these values into the Google sheet and comment on the shape of the (green) infection curve: how tall is the spike of infected individuals, and at what time is it at its highest point?       In this section, we first saw exponential growth, and discussed the strengths and weaknesses of using exponential growth to model a changing population. We also explored a basic predator-prey model, and noted that though the specific predictions made by the model may not be completely accurate, it does a good job of describing the broader dynamics and trends in the populations of the predator and prey.  We concluded by exploring a discrete version of the SIR epedimiological model, which is useful for describing the spread of a disease through a population. We used the model to test the effect of various interventions and observed how slowing the spread of the disease flattens the curve of infected individuals.     The predator-prey model described in is known as a discrete Lotka-Volterra model. Do some research online to determine who Lotka and Volterra were, and what questions they were interested in. Write one or two paragraphs describing your findings.    An advantage of the SIR model explored in this section is its simplicity: the population is split into only three compartments. However, through the use of more compartments it is possible to identify subtler dynamics at work; find such a model, such as an SEIR model, describe the choices it makes, and what is gained by the additional complexity.    "
},
{
  "id": "subsec-exponential-growth-3",
  "level": "2",
  "url": "sec-dds.html#subsec-exponential-growth-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "growth rate growth multiplier "
},
{
  "id": "expl-exponential-growth",
  "level": "2",
  "url": "sec-dds.html#expl-exponential-growth",
  "type": "Exploration",
  "number": "4.2.1",
  "title": "",
  "body": "  Consider a population of 1000 fish growing at 10% per year.   Give a formula for in terms of , and then a formula for in terms of .  Using your answer to the previous part as a guide, give a formula for in terms of .  Again, using your answer to Question 1 and the work in the paragraph preceding this activity, give a formula for in terms of . Use this formula to find in terms of . Why might these formulas be more useful than the ones you found in Question 1?  State your best guess for a formula for in terms of . Use your formula to estimate the number of fish in the pond after 10, 20, and 50 years. What is this model missing?  Press Evaluate below to confirm your response to Question 4. What happens if you increase or decrease the growth rate, ? Try it, and reevaluate.       We have Similarly, .  We may reasonably extrapolate that .  We see . Similarly, . These formulas are more useful because we only need to know the first term, .  Best guess: . Much like the linear model from the previous activity, this model assumes that the population continues to grow forever.  You should notice that the curve grows more slowly if , and more quickly if .    "
},
{
  "id": "subsec-exponential-growth-7",
  "level": "2",
  "url": "sec-dds.html#subsec-exponential-growth-7",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "exponential "
},
{
  "id": "expl-carrying-capacity",
  "level": "2",
  "url": "sec-dds.html#expl-carrying-capacity",
  "type": "Exploration",
  "number": "4.2.2",
  "title": "",
  "body": "  Suppose our pond can hold 5000 fish. This is known as the carrying capacity , and we'll denote it with the letter . We'll now let be our maximum growth rate, but we'll let it slowly reduce as the population grows.   As increases and gets closer and closer to over time, what happens to the ratio ? What number does it get close to?  Thus, what happens to the expression as increases and gets closer and closer to ?  Ecologically speaking, what does it mean for to get closer and closer to ?  As the phenomena described in Question 3 occurs, what do we expect the graph of over time to look like?  Test your suspicion by evaluating the Sage code below.       As gets closer and closer to , the ratio approaches 1.  Since is approaching 1, approaches .  As approaches , the population of fish is approaching the maximum number of fish that the pond can support (the carrying capacity).  While we expect some sort of growth early (exponential is a good guess), we then expect the population to level off over time as it approaches the carrying capacity.  Suspicion confirmed!    "
},
{
  "id": "sec-dds-5-2",
  "level": "2",
  "url": "sec-dds.html#sec-dds-5-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "discrete dynamical systems "
},
{
  "id": "def-dynamical-system",
  "level": "2",
  "url": "sec-dds.html#def-dynamical-system",
  "type": "Definition",
  "number": "4.2.3",
  "title": "",
  "body": " A dynamical system refers to any fixed mathematical rule which describes how a system changes over time. A discrete dynamical system changes at fixed intervals in time (e.g., each hour), and does not change between the fixed points in time (e.g., a system that changes each hour will view the changing quantity as static between the hours of 1:00pm and 2:00pm).  "
},
{
  "id": "def-lotkavolterra",
  "level": "2",
  "url": "sec-dds.html#def-lotkavolterra",
  "type": "Definition",
  "number": "4.2.4",
  "title": "",
  "body": " Let be the initial population of hares, and the initial population of lynxes. For , the discrete Lotka-Volterra model for the lynx\/hare population is given by:   where is the hare birth rate per unit time as a function of the food supply , is the lynx mortality rate, and and are interaction coefficients.  "
},
{
  "id": "sec-dds-5-8",
  "level": "2",
  "url": "sec-dds.html#sec-dds-5-8",
  "type": "Exploration",
  "number": "4.2.5",
  "title": "",
  "body": "  Consider the predator\/prey model introduced in .   What do the terms and represent?  Which term in the model represents an increase in the hare population? Which term represents a decrease in the hare population? Explain how you know.  Which term in the model represents an increase in the lynx population? Which term represents a decrease in the lynx population? Explain how you know.  What does the product represent? (The multiplication principle may be helpful here; also consider what is described to be.)  What simplifying assumptions does this model make about how the populations increase and decrease?    "
},
{
  "id": "sec-dds-5-9",
  "level": "2",
  "url": "sec-dds.html#sec-dds-5-9",
  "type": "Activity",
  "number": "4.2.6",
  "title": "",
  "body": "  Let's start by assuming that and . That is, we begin with 20 hares and 35 lynxes. Let's further assume that , , and (parameters scaled by 12 months).   Compute and . What seems to be happening to the two populations? Confirm using the Sage cell below, which will display the first ten months' worth of predictions, or explore this spreadsheet . Note that the hare population is given by the blue dots and the lynx population by the red.   The interaction coefficients translate to a decrease in the lynx population and an increase in the hare population. What do you expect to happen if we increase it from 0.014 to 0.05?  Test your suspicion using the Sage cell below, or this spreadsheet .   Qualitatively describe the dynamics displayed in the Sage output in the previous question.    "
},
{
  "id": "fig-harelynxdata",
  "level": "2",
  "url": "sec-dds.html#fig-harelynxdata",
  "type": "Figure",
  "number": "4.2.7",
  "title": "",
  "body": " Data on hare and lynx populations over time. ( Source )   "
},
{
  "id": "fig-harelynxmodel",
  "level": "2",
  "url": "sec-dds.html#fig-harelynxmodel",
  "type": "Figure",
  "number": "4.2.8",
  "title": "",
  "body": " The predicted dynamics of hare and lynx populations over time. ( Source )   "
},
{
  "id": "sec-dds-6-4",
  "level": "2",
  "url": "sec-dds.html#sec-dds-6-4",
  "type": "Definition",
  "number": "4.2.9",
  "title": "",
  "body": " Consider a population of people through which a disease is spreading. For some discrete time , let denote the number of individuals susceptible to the disease, the number of individuals infected with the disease, and the number of individuals who have recovered from the disease. We assume that that people move through the compartments as follows:   For , the model is given by the following equations.   The constant is known as the recovery rate parameter, which roughly describes how fast someone moves from the infected compartment to the recovered compartment. The constant is known as the infection rate , and roughly describes how fast someone moves from the susceptible compartment to the infected compartment.  "
},
{
  "id": "sec-dds-6-6",
  "level": "2",
  "url": "sec-dds.html#sec-dds-6-6",
  "type": "Exploration",
  "number": "4.2.10",
  "title": "",
  "body": "   What does mean? What assumptions does this make? How does it simplify our analysis?  What does the first equation in the set of four mean? What assumptions does it make about the population?  The second equation describes how the susceptible population changes over time. It contains the term . Based on our work above with a predator-prey model and the definition of , what epidemiological event is this term describing?  Explain why it makes sense that we add in the equation defining .  What does the term mean in the equation for ? Why does it make sense to add  in the equation for ?  Note that there are no terms being subtracted in the equation for . What assumption does this tell us that the model is making?    "
},
{
  "id": "act-sirnumbers",
  "level": "2",
  "url": "sec-dds.html#act-sirnumbers",
  "type": "Activity",
  "number": "4.2.11",
  "title": "",
  "body": "  Let's see what happens when we plug in some numbers. Assume that , , and .   Why does it make sense that we have (assuming we have a new disease entering a population).  What is ?  Let's assume that and . Compute , and .  Use your answer to the previous part to compute , and .  Now check your work using this spreadsheet (download a copy to your device and edit it there).    "
},
{
  "id": "sec-dds-6-8",
  "level": "2",
  "url": "sec-dds.html#sec-dds-6-8",
  "type": "Investigation",
  "number": "4.2.12",
  "title": "",
  "body": "  In this and the following activity, we'll use the spreadsheet found here . Download the file and play around with the numbers at the top of the sheet to change some of the features; e.g., how does increasing\/decreasing the number of initial infected individuals change the shape of the curves? What do you notice? What do you wonder? Give at least 2-3 observations or questions.   "
},
{
  "id": "sec-dds-6-9",
  "level": "2",
  "url": "sec-dds.html#sec-dds-6-9",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "basic reproduction number "
},
{
  "id": "act-r0",
  "level": "2",
  "url": "sec-dds.html#act-r0",
  "type": "Activity",
  "number": "4.2.13",
  "title": "",
  "body": "  In this activity, we assume different values for . However, we will make two assumptions that don't change.  First, assume that all direct infections are done within a 5-day period. Second, assume that that those infected don't infect others until the next five day period.  Let be the number of cases I've caused after five-day periods. Assume (me).   Explain why .  Explain why .  After 30 days, six five-day periods will have passed. Explain why  Our SIR model approximates by the formula Using that formula, what is the approximate for the situation described in ?  Given that value of , use the Sage cell below (replacing the ? with the value you found) to estimate how many cases Sam directly or indirectly causes over a 30-day period.  The practice of social distancing is intended to reduce . Assume that strict social distancing is observed, and this reduces to approximately 1.25 (one direct infection fewer). Now how many cases does Sam cause over the course of a 30-day period?  As the COVID-19 situation is ongoing, estimates for vary significantly (and are variant-dependent). One study from February 2020 found an average of 3.28. If that is the true number, approximately how many cases will a typical infected person be responsible for over the course of a month? Use the Sage cell to determine your answer.  Other studies suggest that, in the absence of any social interventions, the original variant of COVID-19 has . In that case, how many cases would an infected person be responsible for over the course of a month?  The Delta variant of COVID-19 has . If I am infected with the Delta variant, approximately how many new cases will I cause within a month?  The Omicron variant of COVID-19 has an estimated (note that this is being written in February 2022, just as the first major Omicron wave is subsiding; it should therefore be treated as preliminary). If Sam is infected with the Omicron variant, approximately how many new cases will he cause within a month?     "
},
{
  "id": "sec-dds-6-14",
  "level": "2",
  "url": "sec-dds.html#sec-dds-6-14",
  "type": "Exploration",
  "number": "4.2.14",
  "title": "",
  "body": "  One last time, consider the values for the variables we used in ; for reference, this was , , , , and . We'll again use the Google sheet to answer these questions.   What is ? (Recall from Question 4 of .)  This value is pretty high (though it is approximately the of diseases like measles and chicken pox!), but is convenient for our purposes. Nonetheless, we can still explore the ways in which changes in affect the shape of the curves; our qualitative observations will still apply to real-world situations like the current coronavirus pandemic.  Recall that and assume our population size and recovery rate are constant. Compute the three values of that result from infection rates of , and . In turn, plug these values into the Google sheet and comment on the shape of the infection curve: how tall is the spike of infected individuals, and at what time is it at its highest point?  Similarly, assuming and are constant, compute the values of that result from , and . In turn, plug these values into the Google sheet and comment on the shape of the (green) infection curve: how tall is the spike of infected individuals, and at what time is it at its highest point?    "
},
{
  "id": "sec-dds-8-1",
  "level": "2",
  "url": "sec-dds.html#sec-dds-8-1",
  "type": "Exercise",
  "number": "4.2.4.1",
  "title": "",
  "body": " The predator-prey model described in is known as a discrete Lotka-Volterra model. Do some research online to determine who Lotka and Volterra were, and what questions they were interested in. Write one or two paragraphs describing your findings.  "
},
{
  "id": "sec-dds-8-2",
  "level": "2",
  "url": "sec-dds.html#sec-dds-8-2",
  "type": "Exercise",
  "number": "4.2.4.2",
  "title": "",
  "body": " An advantage of the SIR model explored in this section is its simplicity: the population is split into only three compartments. However, through the use of more compartments it is possible to identify subtler dynamics at work; find such a model, such as an SEIR model, describe the choices it makes, and what is gained by the additional complexity.  "
},
{
  "id": "sec-intro-gt",
  "level": "1",
  "url": "sec-intro-gt.html",
  "type": "Section",
  "number": "5.1",
  "title": "Intro to Graph Theory",
  "body": " Intro to Graph Theory   Motivating Questions   In this section, we will explore the following questions.  What is a graph? What are some of the basic ideas and terminology used to describe graphs?  What features of the world can graphs help us study?       The Bridges of Konigsberg  The study of graph theory often traces its roots to a historical problem known as the Seven Bridges of Königsberg, and its solution by the mathematician Leonhard Euler.   Seven Bridges of Königsberg  Königsberg, Seven Bridges of  puzzle seven bridges  In the town of Königsberg in Prussia, there was a river containing two islands. The islands were connected to the banks of the river by seven bridges as seen in . On their days off, townspeople would play a little game with themselves as they walked over the bridges: was it possible to plan a walk so that you cross each bridge once and only once?   The seven bridges (credit: Oscar Levin)      Background and terminology  You've almost certainly encountered the word graph in a math class.    What is meant by the word graph in a mathematical context? Give as many answers as you can, and be as clear and precise as possible.    A relatively new (by mathematical standards) use of the word graph in mathematics involves the notion of connection. It is this notion that we will be exploring in this unit. We present a formal definition below.   A graph , , is a collection of vertices (or nodes ), , and a collection of edges, , which are pairs of vertices. We denote the graph as .   This relatively simple, short definition nonetheless has deep consequences. We'll see an example below, but note that the primary defining features of a graph are some objects (vertices) and the connections between (some of) the objects (the edges). If a vertex is connected to another vertex by an edge , we say is incident to , and we say is adjacent to and is in the neighborhood of .   As a straightforward initial example, consider the graph where and . This graph has four vertices, and three edges. One representation (drawing) of it is given in .  One drawing of .   As stated above, the most important feature of a graph is the connections it describes. Thus, we would say the graph in  also represents the graph from .  Another drawing of .        In this activity, your job is to invent a graph with the following properties. Draw it and be ready to share it. Then explain why your example meets the given criteria (e.g., for Question 4, which vertex has at least three neighbors?).   Your graph should have six vertices  Your graph should have ten edges  There should be at least one pair of vertices between which you cannot trace a path of edges  One vertex should should have at least three others in its neighborhood       We saw in the last unit that we could model changing quantities over time using discrete dynamical systems. Graphs, on the other hand, describe connections between objects. Brainstorm or research at least two or three complex, real-world situations which graphs might be helpful to model. That is, can you think of at least two or three situations in which one of the fundamental properties is connection ? Briefly describe each situation in 3-4 sentences, and make clear how graphs can be used to describe these situations. If you find examples of such graphs, be ready to share.    In order to discuss the nuances of the connections modeled by a graph, we need a bit more terminology.   Let be a graph. A vertex in is isolated if it has no neighbors. The number of edges incident to a vertex is known as the degree of , denoted . If between every pair of vertices in there is a path of edges, we say is connected . Otherwise, we say is not connected. Each of the largest possible connected pieces of is known as a component of .     For this exploration, we will consider the graph in .   A graph .     Is connected? How many components does it have?  Does have any isolated vertices? If so, what are their degrees?  What is the largest degree of a vertex in ? Which vertex\/vertices have that degree?  Suppose that represents a social network; that is, the vertices represent people, and the edges represent friendship. Who are 's friends?  Still viewing as the model of a network of friends, which pair of people do you think are more likely to become friends next: and , or and ? Why?  Still viewing as the model of a network of friends, which pair of people do you think are more likely to become friends next: and , or and ? Why?       In this section, we introduced the idea of a graph as essentially a network: a collection of vertices connected by edges . We thought about the types of situations that could be described with a graph, and learned some terminology that will help us ask and answer additional questions about graphs in future sections.     Do some internet research about (Kevin) Bacon numbers . What are they? How could you use a graph to model the situation described by a Bacon number? Then look up two or three people and report their Bacon numbers.    Draw two different representations of the graph with vertices and edges .    Do an internet search for social graph . What is it? How has it been used, and by whom?    "
},
{
  "id": "dGT",
  "level": "2",
  "url": "sec-intro-gt.html#dGT",
  "type": "Investigation",
  "number": "5.1.1",
  "title": "",
  "body": " Seven Bridges of Königsberg  Königsberg, Seven Bridges of  puzzle seven bridges  In the town of Königsberg in Prussia, there was a river containing two islands. The islands were connected to the banks of the river by seven bridges as seen in . On their days off, townspeople would play a little game with themselves as they walked over the bridges: was it possible to plan a walk so that you cross each bridge once and only once?   The seven bridges (credit: Oscar Levin)   "
},
{
  "id": "sec-intro-gt-4-3",
  "level": "2",
  "url": "sec-intro-gt.html#sec-intro-gt-4-3",
  "type": "Discussion",
  "number": "5.1.3",
  "title": "",
  "body": "  What is meant by the word graph in a mathematical context? Give as many answers as you can, and be as clear and precise as possible.   "
},
{
  "id": "sec-intro-gt-4-5",
  "level": "2",
  "url": "sec-intro-gt.html#sec-intro-gt-4-5",
  "type": "Definition",
  "number": "5.1.4",
  "title": "",
  "body": " A graph , , is a collection of vertices (or nodes ), , and a collection of edges, , which are pairs of vertices. We denote the graph as .  "
},
{
  "id": "sec-intro-gt-4-6",
  "level": "2",
  "url": "sec-intro-gt.html#sec-intro-gt-4-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "incident adjacent neighborhood "
},
{
  "id": "sec-intro-gt-4-7",
  "level": "2",
  "url": "sec-intro-gt.html#sec-intro-gt-4-7",
  "type": "Example",
  "number": "5.1.5",
  "title": "",
  "body": " As a straightforward initial example, consider the graph where and . This graph has four vertices, and three edges. One representation (drawing) of it is given in .  One drawing of .   As stated above, the most important feature of a graph is the connections it describes. Thus, we would say the graph in  also represents the graph from .  Another drawing of .     "
},
{
  "id": "sec-intro-gt-4-8",
  "level": "2",
  "url": "sec-intro-gt.html#sec-intro-gt-4-8",
  "type": "Activity",
  "number": "5.1.8",
  "title": "",
  "body": "  In this activity, your job is to invent a graph with the following properties. Draw it and be ready to share it. Then explain why your example meets the given criteria (e.g., for Question 4, which vertex has at least three neighbors?).   Your graph should have six vertices  Your graph should have ten edges  There should be at least one pair of vertices between which you cannot trace a path of edges  One vertex should should have at least three others in its neighborhood    "
},
{
  "id": "sec-intro-gt-4-9",
  "level": "2",
  "url": "sec-intro-gt.html#sec-intro-gt-4-9",
  "type": "Exploration",
  "number": "5.1.9",
  "title": "",
  "body": "  We saw in the last unit that we could model changing quantities over time using discrete dynamical systems. Graphs, on the other hand, describe connections between objects. Brainstorm or research at least two or three complex, real-world situations which graphs might be helpful to model. That is, can you think of at least two or three situations in which one of the fundamental properties is connection ? Briefly describe each situation in 3-4 sentences, and make clear how graphs can be used to describe these situations. If you find examples of such graphs, be ready to share.   "
},
{
  "id": "def-deg",
  "level": "2",
  "url": "sec-intro-gt.html#def-deg",
  "type": "Definition",
  "number": "5.1.10",
  "title": "",
  "body": " Let be a graph. A vertex in is isolated if it has no neighbors. The number of edges incident to a vertex is known as the degree of , denoted . If between every pair of vertices in there is a path of edges, we say is connected . Otherwise, we say is not connected. Each of the largest possible connected pieces of is known as a component of .  "
},
{
  "id": "sec-intro-gt-4-12",
  "level": "2",
  "url": "sec-intro-gt.html#sec-intro-gt-4-12",
  "type": "Exploration",
  "number": "5.1.11",
  "title": "",
  "body": "  For this exploration, we will consider the graph in .   A graph .     Is connected? How many components does it have?  Does have any isolated vertices? If so, what are their degrees?  What is the largest degree of a vertex in ? Which vertex\/vertices have that degree?  Suppose that represents a social network; that is, the vertices represent people, and the edges represent friendship. Who are 's friends?  Still viewing as the model of a network of friends, which pair of people do you think are more likely to become friends next: and , or and ? Why?  Still viewing as the model of a network of friends, which pair of people do you think are more likely to become friends next: and , or and ? Why?    "
},
{
  "id": "sec-intro-gt-6-1",
  "level": "2",
  "url": "sec-intro-gt.html#sec-intro-gt-6-1",
  "type": "Exercise",
  "number": "5.1.3.1",
  "title": "",
  "body": " Do some internet research about (Kevin) Bacon numbers . What are they? How could you use a graph to model the situation described by a Bacon number? Then look up two or three people and report their Bacon numbers.  "
},
{
  "id": "sec-intro-gt-6-2",
  "level": "2",
  "url": "sec-intro-gt.html#sec-intro-gt-6-2",
  "type": "Exercise",
  "number": "5.1.3.2",
  "title": "",
  "body": " Draw two different representations of the graph with vertices and edges .  "
},
{
  "id": "sec-intro-gt-6-3",
  "level": "2",
  "url": "sec-intro-gt.html#sec-intro-gt-6-3",
  "type": "Exercise",
  "number": "5.1.3.3",
  "title": "",
  "body": " Do an internet search for social graph . What is it? How has it been used, and by whom?  "
},
{
  "id": "sec-planar-graphs",
  "level": "1",
  "url": "sec-planar-graphs.html",
  "type": "Section",
  "number": "5.2",
  "title": "Planar Graphs and Graph Coloring",
  "body": " Planar Graphs and Graph Coloring   Motivating Questions   In this section, we will explore the following questions.  What does it mean for a graph to be planar? Are all graphs planar?  What does it mean to color a graph's vertices? How can vertex coloring be used to solve applied problems?  What does the four color theorem say?       Planar Graphs    Suppose there are three houses, each needing to be connected to three utilities: water, natural gas, and electricity, as pictured in . For safety reasons, we wish to draw the lines connecting the utilities to the houses so that they do not cross. Can you find an arrangement of utility lines that do not cross?  Three utilities and three houses.      Suppose there are five train stations, each wishing to be directly connected to the other four without having to pass underneath or over another rail line (no bridges or tunnels). However, the rail lines do not need to be straight, nor do they need to take the shortest path. Can you find a way to draw them so that they do not cross?  Five train stations.    The two graphs you drew above are famous and have special names: the first is the complete bipartite graph , because you can group the vertices into two parts ( bi-partite ) such that every vertex from one group is connected to every vertex in the other. The second is called the complete graph on five vertices, , because it contains all possible edges connecting the vertices.    Find at least two different drawings each of the graphs and . If possible, try to find drawings of the graphs which solve the original problems. Note that your different drawings still describe the same connections.     planar graph   A graph is called planar if it is possible to draw the graph in such a way that none of the edges cross.      Consider the graphs below. For each graph, determine whether it is planar. If so, draw it so none of the edges cross. If not, explain why not.       Thus, the utilities and train station problems can be stated as follows: Are or planar? The answer comes from a theorem of Kuratowski.   Kuratowski (1930)  A graph is planar if and only if it does not contain a copy of or , or a subdivision of or .     To see what we mean by subdivision , is the following graph planar?         Graph Coloring  Another application of planar graphs arises when deciding how to color a map. A useful coloring must not color states that share a common border (that is, a part of their boundary) with the same color (otherwise it’s difficult to tell where one starts and another begins!). However, an efficient mapmaker might wonder how many colors are needed to color any world map so that no countries which share a border are given the same color.    Consider the blank map of the USA displayed in . How many different colors are needed in order to color the states so that no states that share a border are given the same color? How could we model this problem with a graph?        Four Color Theorem   Four colors suffice to color any map such that any two countries which share a part of a border are given different colors.    The proof was very controversial, as it involves the use of computers to check thousands of cases. The proof is generally accepted now, however.  We can use graphs to model maps. The graph in models the borders found in the generic map shown in .      Why must the graph associated to a map be planar? Why must it have no loops or multiple edges?     Lest you think graph coloring is just a fun game, consider the following version of a very real situation.    Suppose your friendly local university is looking to schedule its final exams. Obviously, it can't schedule them so that someone in two different classes is scheduled for an exam at the same time. But how many times are actually required?   First, make up a list of at least 5 courses, and 10 students who are in some of these courses. Ensure that each course shares at least one student in common with at least two other courses (this is just to make the problem sufficiently interesting).  Create a graph whose vertices are the courses. Draw an edge between any pair of courses for which a student is enrolled in both courses.  How many colors are required to color the vertices so that no pair of adjacent vertices gets the same color? Can the answer be more than 4? Why or why not?  How many final exam timeslots are required?       In this section, we explored notions of planarity and graph coloring. Planar graphs are useful when modeling connections formed by, e.g., the boundaries on a map. Graph coloring is a helpful concept when needing to partition our vertex sets into unrelated parts (given by the colors).     Determine the smallest number of colors required to color the graph in .    As we discussed above, the utilities problem is not solvable on a flat sheet of paper (i.e., in the plane). Is it solvable on another surface (e.g., a sphere? maybe something else?). Draw some examples to see if you can find a solution. If you run stuck, do some research online to see if you can find a solution.    A cycle on vertices, denoted , is the graph with vertex set and edge set . Draw examples of for , and then calculate the fewest number of colors needed to color the vertices of a cycle for those graphs. Make a conjecture about what might be true in general and be ready to explain your thinking.    "
},
{
  "id": "sec-planar-graphs-3-2",
  "level": "2",
  "url": "sec-planar-graphs.html#sec-planar-graphs-3-2",
  "type": "Exploration",
  "number": "5.2.1",
  "title": "",
  "body": "  Suppose there are three houses, each needing to be connected to three utilities: water, natural gas, and electricity, as pictured in . For safety reasons, we wish to draw the lines connecting the utilities to the houses so that they do not cross. Can you find an arrangement of utility lines that do not cross?  Three utilities and three houses.   "
},
{
  "id": "sec-planar-graphs-3-3",
  "level": "2",
  "url": "sec-planar-graphs.html#sec-planar-graphs-3-3",
  "type": "Exploration",
  "number": "5.2.3",
  "title": "",
  "body": "  Suppose there are five train stations, each wishing to be directly connected to the other four without having to pass underneath or over another rail line (no bridges or tunnels). However, the rail lines do not need to be straight, nor do they need to take the shortest path. Can you find a way to draw them so that they do not cross?  Five train stations.   "
},
{
  "id": "sec-planar-graphs-3-4",
  "level": "2",
  "url": "sec-planar-graphs.html#sec-planar-graphs-3-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "complete bipartite graph complete graph on five vertices, "
},
{
  "id": "sec-planar-graphs-3-5",
  "level": "2",
  "url": "sec-planar-graphs.html#sec-planar-graphs-3-5",
  "type": "Activity",
  "number": "5.2.5",
  "title": "",
  "body": "  Find at least two different drawings each of the graphs and . If possible, try to find drawings of the graphs which solve the original problems. Note that your different drawings still describe the same connections.   "
},
{
  "id": "sec-planar-graphs-3-6",
  "level": "2",
  "url": "sec-planar-graphs.html#sec-planar-graphs-3-6",
  "type": "Definition",
  "number": "5.2.6",
  "title": "",
  "body": " planar graph   A graph is called planar if it is possible to draw the graph in such a way that none of the edges cross.   "
},
{
  "id": "sec-planar-graphs-3-7",
  "level": "2",
  "url": "sec-planar-graphs.html#sec-planar-graphs-3-7",
  "type": "Exploration",
  "number": "5.2.7",
  "title": "",
  "body": "  Consider the graphs below. For each graph, determine whether it is planar. If so, draw it so none of the edges cross. If not, explain why not.      "
},
{
  "id": "sec-planar-graphs-3-9",
  "level": "2",
  "url": "sec-planar-graphs.html#sec-planar-graphs-3-9",
  "type": "Theorem",
  "number": "5.2.9",
  "title": "",
  "body": " Kuratowski (1930)  A graph is planar if and only if it does not contain a copy of or , or a subdivision of or .  "
},
{
  "id": "sec-planar-graphs-3-10",
  "level": "2",
  "url": "sec-planar-graphs.html#sec-planar-graphs-3-10",
  "type": "Exploration",
  "number": "5.2.10",
  "title": "",
  "body": "  To see what we mean by subdivision , is the following graph planar?      "
},
{
  "id": "sec-graph-coloring-3",
  "level": "2",
  "url": "sec-planar-graphs.html#sec-graph-coloring-3",
  "type": "Exploration",
  "number": "5.2.12",
  "title": "",
  "body": "  Consider the blank map of the USA displayed in . How many different colors are needed in order to color the states so that no states that share a border are given the same color? How could we model this problem with a graph?      "
},
{
  "id": "sec-graph-coloring-4",
  "level": "2",
  "url": "sec-planar-graphs.html#sec-graph-coloring-4",
  "type": "Theorem",
  "number": "5.2.14",
  "title": "Four Color Theorem.",
  "body": " Four Color Theorem   Four colors suffice to color any map such that any two countries which share a part of a border are given different colors.   "
},
{
  "id": "fig-map",
  "level": "2",
  "url": "sec-planar-graphs.html#fig-map",
  "type": "Figure",
  "number": "5.2.15",
  "title": "",
  "body": ""
},
{
  "id": "fig-map-graph",
  "level": "2",
  "url": "sec-planar-graphs.html#fig-map-graph",
  "type": "Figure",
  "number": "5.2.16",
  "title": "",
  "body": ""
},
{
  "id": "sec-graph-coloring-9",
  "level": "2",
  "url": "sec-planar-graphs.html#sec-graph-coloring-9",
  "type": "Question",
  "number": "5.2.17",
  "title": "",
  "body": "  Why must the graph associated to a map be planar? Why must it have no loops or multiple edges?   "
},
{
  "id": "sec-graph-coloring-11",
  "level": "2",
  "url": "sec-planar-graphs.html#sec-graph-coloring-11",
  "type": "Activity",
  "number": "5.2.18",
  "title": "",
  "body": "  Suppose your friendly local university is looking to schedule its final exams. Obviously, it can't schedule them so that someone in two different classes is scheduled for an exam at the same time. But how many times are actually required?   First, make up a list of at least 5 courses, and 10 students who are in some of these courses. Ensure that each course shares at least one student in common with at least two other courses (this is just to make the problem sufficiently interesting).  Create a graph whose vertices are the courses. Draw an edge between any pair of courses for which a student is enrolled in both courses.  How many colors are required to color the vertices so that no pair of adjacent vertices gets the same color? Can the answer be more than 4? Why or why not?  How many final exam timeslots are required?    "
},
{
  "id": "sec-planar-graphs-6-1",
  "level": "2",
  "url": "sec-planar-graphs.html#sec-planar-graphs-6-1",
  "type": "Exercise",
  "number": "5.2.3.1",
  "title": "",
  "body": " Determine the smallest number of colors required to color the graph in .  "
},
{
  "id": "sec-planar-graphs-6-2",
  "level": "2",
  "url": "sec-planar-graphs.html#sec-planar-graphs-6-2",
  "type": "Exercise",
  "number": "5.2.3.2",
  "title": "",
  "body": " As we discussed above, the utilities problem is not solvable on a flat sheet of paper (i.e., in the plane). Is it solvable on another surface (e.g., a sphere? maybe something else?). Draw some examples to see if you can find a solution. If you run stuck, do some research online to see if you can find a solution.  "
},
{
  "id": "sec-planar-graphs-6-3",
  "level": "2",
  "url": "sec-planar-graphs.html#sec-planar-graphs-6-3",
  "type": "Exercise",
  "number": "5.2.3.3",
  "title": "",
  "body": " A cycle on vertices, denoted , is the graph with vertex set and edge set . Draw examples of for , and then calculate the fewest number of colors needed to color the vertices of a cycle for those graphs. Make a conjecture about what might be true in general and be ready to explain your thinking.  "
},
{
  "id": "sec-trees",
  "level": "1",
  "url": "sec-trees.html",
  "type": "Section",
  "number": "5.3",
  "title": "Trees",
  "body": " Trees   Motivating Questions   In this section, we will explore the following questions.  What are paths and cycles?  What is a tree?  How are trees useful?      Two fundamental questions in the analysis of graphs are: given two vertices, is there a path between them? And if so, how can we find the shortest possible path? Let's consider the second question first.  Notice in the graph in that there are several paths between, say, and . There is a path spanning two edges: . There is also a path spanning four edges: . In general, by the distance between two vertices, we mean a path consisting of the fewest edges possible, so the distance between and is 1.    Consider the graph in .   A graph.     Find three paths from vertex to vertex .  Determine the distance from vertex to vertex . How many paths of this distance can you find?     Returning to the first question above, if the graph is connected, the answer is obviously yes . So, given a graph , we are often interested in removing superfluous edges in a systematic way to arrive at a smallest (which will be made precise shortly) connected subgraph  .   A cycle on vertices is the graph with edges . We denote such a cycle by . That is, a cycle consists of a path , where the only repeated vertex is the first\/last one.      One of the major questions in theoretical graph theory is: given a graph , is there an algorithm that determines whether contains any cycles? There are several such algorithms, and they are relatively efficient. A related question is: given a graph , is there an efficient algorithm which can produce a cycle that visits each vertex exactly once? The answer to this question is currently unknown (as of April 2020), but an active area of research. This is known as a Hamiltonian cycle .   Our focus for the rest of this section is graphs that do not contain any cycles.   tree  A connected graph that does not contain any cycles is known as a tree . A graph that does not contain any cycles is known as a forest . Yes, a forest is a collection of trees.       The description given in is pretty close to what we want. Given a graph , we want a tree such that every vertex of is also a vertex of , and every edge of to be an edge of . Such a tree is known as a spanning tree for .    Determine whether the given graph is a tree. Justify your answer by making explicit reference to .     The graph for Question 1. Is it a tree, or no?       The graph for Question 2. Is it a tree, or no?       The graph for Question 3. Is it a tree, or no?        The last big idea that we'll explore is the notion of a graph, which we introduce with an example.   Consider the graph in . Suppose the vertices represent stations in a factory, and the edges represent conveyor belts between the stations.   A graph representing the arrangements of conveyor belts between four stations in a factory.    A manager in the factory may be interested in how efficiently the conveyor belts can be run. Suppose that belt costs $11\/day to run, belt costs $8\/day to run, belt costs $9\/day to run, belt costs $12\/day to run, and belt costs $11\/day to run. We can represent this by labeling each edge with its cost, as seen in .   A weighted graph representing the arrangements of conveyor belts between four stations in a factory.    This is an example of a weighted graph , which is just a graph with the edges labeled. The labels usually represent something meaningful about the situation the graph represents. For example, we could have weighted the edges in with the time it takes to move an object from one station to another, or the distance between stations (as one might find on a map), etc.   We tie this all together with the concept of a minimal spanning tree , which is a spanning tree with the smallest total weight.   Again, consider the weighted graph representing our conveyor belt in . The total cost to run the belts for one day is $51. Assume that eliminating a belt does not substantially increase the cost of running the others. How could we find a lower-cost arrangement?    There are several algorithms for finding minimum weight spanning trees in addition to the one presented in . A famous such example is Prim's algorithm .   Prim's Algorithm  An important algorithm, due to Vojtěch Jarník and later rediscovered and published by Robert Prim and Edsger Dijkstra, provides a minimum-weight spanning tree as follows:   Choose one of the vertices of the graph.  Grow the tree by finding an edge of minimum weight which connects the existing tree to a vertex in the graph not yet in the tree, and put this edge in the tree.  Continue until all the vertices of the graph are in the tree.   The algorithm is demonstrated in the video below.     In this section, we introduced the idea of a tree; given a connected graph , of particular interest is a spanning tree for , which contains all the vertices of . We are often interested in spanning trees of minimum weight, which may represent things like minimum distances or costs. There are several algorithms for calculating minimum weight spanning trees; one is often called Prim's algorithm and works by growing the tree from one vertex, adding a minimum-weight edge at each step.     Is the following graph a tree? Explain.     Is the following graph a tree? Explain.     Is the following graph a tree? Explain.     Do some internet research to find at least one application of spanning trees. Describe the application, who is interested in it, and why.    Consider the state capitals of the upper Midwestern U.S. to be: St. Paul, MN; Bismarck, ND; Pierre, SD; Lincoln, NE; Des Moines, IA; Madison, WI; Springfield, IL.   Calculate the distance from each state capital to the others. Use this information to create a weighted graph.  Calculate a minimum weight spanning tree of the graph you just found.  How could this minimum wieght spanning tree be useful?     "
},
{
  "id": "sec-trees-4",
  "level": "2",
  "url": "sec-trees.html#sec-trees-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "distance "
},
{
  "id": "sec-trees-5",
  "level": "2",
  "url": "sec-trees.html#sec-trees-5",
  "type": "Activity",
  "number": "5.3.1",
  "title": "",
  "body": "  Consider the graph in .   A graph.     Find three paths from vertex to vertex .  Determine the distance from vertex to vertex . How many paths of this distance can you find?    "
},
{
  "id": "sec-trees-6",
  "level": "2",
  "url": "sec-trees.html#sec-trees-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "subgraph "
},
{
  "id": "sec-trees-7",
  "level": "2",
  "url": "sec-trees.html#sec-trees-7",
  "type": "Definition",
  "number": "5.3.3",
  "title": "",
  "body": " A cycle on vertices is the graph with edges . We denote such a cycle by . That is, a cycle consists of a path , where the only repeated vertex is the first\/last one.  "
},
{
  "id": "sec-trees-8",
  "level": "2",
  "url": "sec-trees.html#sec-trees-8",
  "type": "Example",
  "number": "5.3.4",
  "title": "",
  "body": "  "
},
{
  "id": "sec-trees-9",
  "level": "2",
  "url": "sec-trees.html#sec-trees-9",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Hamiltonian cycle "
},
{
  "id": "def-tree",
  "level": "2",
  "url": "sec-trees.html#def-tree",
  "type": "Definition",
  "number": "5.3.5",
  "title": "",
  "body": " tree  A connected graph that does not contain any cycles is known as a tree . A graph that does not contain any cycles is known as a forest . Yes, a forest is a collection of trees.   "
},
{
  "id": "sec-trees-12",
  "level": "2",
  "url": "sec-trees.html#sec-trees-12",
  "type": "Example",
  "number": "5.3.6",
  "title": "",
  "body": "  "
},
{
  "id": "sec-trees-13",
  "level": "2",
  "url": "sec-trees.html#sec-trees-13",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "spanning tree "
},
{
  "id": "sec-trees-14",
  "level": "2",
  "url": "sec-trees.html#sec-trees-14",
  "type": "Exploration",
  "number": "5.3.7",
  "title": "",
  "body": "  Determine whether the given graph is a tree. Justify your answer by making explicit reference to .     The graph for Question 1. Is it a tree, or no?       The graph for Question 2. Is it a tree, or no?       The graph for Question 3. Is it a tree, or no?       "
},
{
  "id": "sec-trees-16",
  "level": "2",
  "url": "sec-trees.html#sec-trees-16",
  "type": "Example",
  "number": "5.3.11",
  "title": "",
  "body": " Consider the graph in . Suppose the vertices represent stations in a factory, and the edges represent conveyor belts between the stations.   A graph representing the arrangements of conveyor belts between four stations in a factory.    A manager in the factory may be interested in how efficiently the conveyor belts can be run. Suppose that belt costs $11\/day to run, belt costs $8\/day to run, belt costs $9\/day to run, belt costs $12\/day to run, and belt costs $11\/day to run. We can represent this by labeling each edge with its cost, as seen in .   A weighted graph representing the arrangements of conveyor belts between four stations in a factory.    This is an example of a weighted graph , which is just a graph with the edges labeled. The labels usually represent something meaningful about the situation the graph represents. For example, we could have weighted the edges in with the time it takes to move an object from one station to another, or the distance between stations (as one might find on a map), etc.  "
},
{
  "id": "sec-trees-17",
  "level": "2",
  "url": "sec-trees.html#sec-trees-17",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "minimal spanning tree "
},
{
  "id": "ex-mwst-elimination",
  "level": "2",
  "url": "sec-trees.html#ex-mwst-elimination",
  "type": "Example",
  "number": "5.3.14",
  "title": "",
  "body": " Again, consider the weighted graph representing our conveyor belt in . The total cost to run the belts for one day is $51. Assume that eliminating a belt does not substantially increase the cost of running the others. How could we find a lower-cost arrangement?   "
},
{
  "id": "sec-trees-19",
  "level": "2",
  "url": "sec-trees.html#sec-trees-19",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Prim's algorithm "
},
{
  "id": "alg-prim",
  "level": "2",
  "url": "sec-trees.html#alg-prim",
  "type": "Algorithm",
  "number": "5.3.15",
  "title": "Prim’s Algorithm.",
  "body": " Prim's Algorithm  An important algorithm, due to Vojtěch Jarník and later rediscovered and published by Robert Prim and Edsger Dijkstra, provides a minimum-weight spanning tree as follows:   Choose one of the vertices of the graph.  Grow the tree by finding an edge of minimum weight which connects the existing tree to a vertex in the graph not yet in the tree, and put this edge in the tree.  Continue until all the vertices of the graph are in the tree.   The algorithm is demonstrated in the video below.   "
},
{
  "id": "sec-trees-22-1",
  "level": "2",
  "url": "sec-trees.html#sec-trees-22-1",
  "type": "Exercise",
  "number": "5.3.1",
  "title": "",
  "body": " Is the following graph a tree? Explain.   "
},
{
  "id": "sec-trees-22-2",
  "level": "2",
  "url": "sec-trees.html#sec-trees-22-2",
  "type": "Exercise",
  "number": "5.3.2",
  "title": "",
  "body": " Is the following graph a tree? Explain.   "
},
{
  "id": "sec-trees-22-3",
  "level": "2",
  "url": "sec-trees.html#sec-trees-22-3",
  "type": "Exercise",
  "number": "5.3.3",
  "title": "",
  "body": " Is the following graph a tree? Explain.   "
},
{
  "id": "sec-trees-22-4",
  "level": "2",
  "url": "sec-trees.html#sec-trees-22-4",
  "type": "Exercise",
  "number": "5.3.4",
  "title": "",
  "body": " Do some internet research to find at least one application of spanning trees. Describe the application, who is interested in it, and why.  "
},
{
  "id": "sec-trees-22-5",
  "level": "2",
  "url": "sec-trees.html#sec-trees-22-5",
  "type": "Exercise",
  "number": "5.3.5",
  "title": "",
  "body": " Consider the state capitals of the upper Midwestern U.S. to be: St. Paul, MN; Bismarck, ND; Pierre, SD; Lincoln, NE; Des Moines, IA; Madison, WI; Springfield, IL.   Calculate the distance from each state capital to the others. Use this information to create a weighted graph.  Calculate a minimum weight spanning tree of the graph you just found.  How could this minimum wieght spanning tree be useful?   "
},
{
  "id": "sec-intro-to-mod-arithmetic",
  "level": "1",
  "url": "sec-intro-to-mod-arithmetic.html",
  "type": "Section",
  "number": "6.1",
  "title": "Adding in Circles",
  "body": " Adding in Circles   Motivating Questions   In this section, we will explore the following questions.  What is congruence modulo ?  How can we do arithemtic modulo ?  What are some real-world examples of congruence?      This topic comes to us from the realm of mathematics known as number theory , which is all about the properties of the integers: positive whole numbers, negatives of whole numbers, and zero. Number theory is one of the oldest branches of mathematics; some of its hallmark theorems, still vital and taught today, have been known for thousands of years. And many of the deep structural features of the integers have found modern application in the hiding and transmitting of information. It is toward this last application that we now turn.  First, however, we need to be reminded of a suprisingly important result from school mathematics. We begin with some warmup questions.    For each pair of positive integers given below, perform long division to divide the first number by the second.   42, 6  42, 8  71, 9  0, 17  9, 71  8675309, 627      division algorithm  dividend  divisor  quotient  remainder  The Division Algorithm   Let and be integers, with . Then there exist unique integers , , such that We call the dividend , the divisor , the quotient , and the remainder .      For each long division problem from , identify the dividend, divisor, quotient, and remainder as described in the Division Algorithm . What do you notice? What do you wonder?      What is meant by the word unique in the Division Algorithm ? Or, put slightly differently, when dividing 71 by 9, why do you think we do we not give a quotient of 6 and remainder of 17?    Of primary importance for us will be a consideration of the remainders obtained by dividing by a fixed positive integer .    Throughout this activity, we will be dividing by . However, you should be thinking about how the answers might differ if we divide by a different integer .   What remainders do you obtain when dividing the integers by 5?  What remainders do you obtain when dividing the integers by 5?  What remainders are possible upon division by 5? How do you know?  What remainders do you expect to be possible upon division by 103? How do you know?  For each of the five integers from the first question, find the integer from the second question whose remainder upon division by 5 is the same and write the pairs in a list.  For each pair in the list you made in the previous question, find the difference between the two integers and divide that number by . What do you notice? What do you wonder?     The work you did in provides motivation for the following definition.   congruence modulo  modulus   Let be integers and an integer. We say that and are congruent modulo if and have the same remainder upon division by . In this case, we write and call the modulus .  Equivalently, we say and are congruent modulo if evenly divides .    Let's explore this definition a bit more.    For the given values below, determine whether .   , ,  , ,  , ,     Congruence modulo possesses several important properties. We highlight three of them in the following theorem.    Let be an integer, and suppose are integers.   Congruence is reflexive :  Congruence is symmetric : If , then .  Congruence is transitive : If and , then .     Now that we are a bit more familiar with the definition, let's test its limits.    Choose two different values of , and for each value you choose, find two values of and so that .   Now choose a third integer . For the integers you chose, is it true that ? Is it true that ? What about ?  For each integer you chose, find an integer such that . Is it true that ? Is it true that ? What about ?  Finally, note that . Does it follow that ?     Our discoveries in delineate the operations known as modular arithmetic : we may add, subtract, and multipy integers mod , but we may not divide.    Find the smallest nonnegative integer satisfying:           Questions   Consider the following questions, and what they have to do with modular arithmetic.  What day of the week will it be 62 days from now?  What month will it be 40 months from now?  What time will it be 27 hours from now?       In this section, we explored the notion of congruence modulo . We saw that we can reduce any integer to its remainder upon division by , and then do arithemtic operations of addition, subtraction, and multiplication mod . This corresponds to natural cyclical process, such as times and dates.  In the next section, we'll see how modular arithmetic can be used to reliably transmit information.     Find all solutions to the congruence .    Find all solutions to the congruence .    Let be an integer and let be any integer. Explain why is divisible by if and only if .    Recall that the decimal representation of a number is a sum of powers of 10; for instance, .   Reduce and .  What do you think it the smallest whole number satisfying for any positive integer power ?  Explain why .  Use your answers to these questions and to guess a way to determine if a number is divisible by 3. Explain your thinking.     "
},
{
  "id": "warmup-long-division",
  "level": "2",
  "url": "sec-intro-to-mod-arithmetic.html#warmup-long-division",
  "type": "Warmup",
  "number": "6.1.1",
  "title": "",
  "body": "  For each pair of positive integers given below, perform long division to divide the first number by the second.   42, 6  42, 8  71, 9  0, 17  9, 71  8675309, 627    "
},
{
  "id": "thm-divalg-7",
  "level": "2",
  "url": "sec-intro-to-mod-arithmetic.html#thm-divalg-7",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "dividend divisor quotient remainder "
},
{
  "id": "sec-intro-to-mod-arithmetic-7",
  "level": "2",
  "url": "sec-intro-to-mod-arithmetic.html#sec-intro-to-mod-arithmetic-7",
  "type": "Activity",
  "number": "6.1.2",
  "title": "",
  "body": "  For each long division problem from , identify the dividend, divisor, quotient, and remainder as described in the Division Algorithm . What do you notice? What do you wonder?   "
},
{
  "id": "sec-intro-to-mod-arithmetic-8",
  "level": "2",
  "url": "sec-intro-to-mod-arithmetic.html#sec-intro-to-mod-arithmetic-8",
  "type": "Discussion",
  "number": "6.1.3",
  "title": "",
  "body": "  What is meant by the word unique in the Division Algorithm ? Or, put slightly differently, when dividing 71 by 9, why do you think we do we not give a quotient of 6 and remainder of 17?   "
},
{
  "id": "act-remainders",
  "level": "2",
  "url": "sec-intro-to-mod-arithmetic.html#act-remainders",
  "type": "Activity",
  "number": "6.1.4",
  "title": "",
  "body": "  Throughout this activity, we will be dividing by . However, you should be thinking about how the answers might differ if we divide by a different integer .   What remainders do you obtain when dividing the integers by 5?  What remainders do you obtain when dividing the integers by 5?  What remainders are possible upon division by 5? How do you know?  What remainders do you expect to be possible upon division by 103? How do you know?  For each of the five integers from the first question, find the integer from the second question whose remainder upon division by 5 is the same and write the pairs in a list.  For each pair in the list you made in the previous question, find the difference between the two integers and divide that number by . What do you notice? What do you wonder?    "
},
{
  "id": "def-congruence",
  "level": "2",
  "url": "sec-intro-to-mod-arithmetic.html#def-congruence",
  "type": "Definition",
  "number": "6.1.5",
  "title": "",
  "body": " congruence modulo  modulus   Let be integers and an integer. We say that and are congruent modulo if and have the same remainder upon division by . In this case, we write and call the modulus .  Equivalently, we say and are congruent modulo if evenly divides .   "
},
{
  "id": "sec-intro-to-mod-arithmetic-14",
  "level": "2",
  "url": "sec-intro-to-mod-arithmetic.html#sec-intro-to-mod-arithmetic-14",
  "type": "Activity",
  "number": "6.1.6",
  "title": "",
  "body": "  For the given values below, determine whether .   , ,  , ,  , ,    "
},
{
  "id": "thm-congruence-equiv-relation",
  "level": "2",
  "url": "sec-intro-to-mod-arithmetic.html#thm-congruence-equiv-relation",
  "type": "Theorem",
  "number": "6.1.7",
  "title": "",
  "body": "  Let be an integer, and suppose are integers.   Congruence is reflexive :  Congruence is symmetric : If , then .  Congruence is transitive : If and , then .    "
},
{
  "id": "expl-arithmetic-mod-m",
  "level": "2",
  "url": "sec-intro-to-mod-arithmetic.html#expl-arithmetic-mod-m",
  "type": "Exploration",
  "number": "6.1.8",
  "title": "",
  "body": "  Choose two different values of , and for each value you choose, find two values of and so that .   Now choose a third integer . For the integers you chose, is it true that ? Is it true that ? What about ?  For each integer you chose, find an integer such that . Is it true that ? Is it true that ? What about ?  Finally, note that . Does it follow that ?    "
},
{
  "id": "sec-intro-to-mod-arithmetic-19",
  "level": "2",
  "url": "sec-intro-to-mod-arithmetic.html#sec-intro-to-mod-arithmetic-19",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "modular arithmetic "
},
{
  "id": "sec-intro-to-mod-arithmetic-20",
  "level": "2",
  "url": "sec-intro-to-mod-arithmetic.html#sec-intro-to-mod-arithmetic-20",
  "type": "Activity",
  "number": "6.1.9",
  "title": "",
  "body": "  Find the smallest nonnegative integer satisfying:         "
},
{
  "id": "sec-intro-to-mod-arithmetic-23-1",
  "level": "2",
  "url": "sec-intro-to-mod-arithmetic.html#sec-intro-to-mod-arithmetic-23-1",
  "type": "Exercise",
  "number": "6.1.1",
  "title": "",
  "body": " Find all solutions to the congruence .  "
},
{
  "id": "sec-intro-to-mod-arithmetic-23-2",
  "level": "2",
  "url": "sec-intro-to-mod-arithmetic.html#sec-intro-to-mod-arithmetic-23-2",
  "type": "Exercise",
  "number": "6.1.2",
  "title": "",
  "body": " Find all solutions to the congruence .  "
},
{
  "id": "exer-divisibility-mod-m",
  "level": "2",
  "url": "sec-intro-to-mod-arithmetic.html#exer-divisibility-mod-m",
  "type": "Exercise",
  "number": "6.1.3",
  "title": "",
  "body": " Let be an integer and let be any integer. Explain why is divisible by if and only if .  "
},
{
  "id": "sec-intro-to-mod-arithmetic-23-4",
  "level": "2",
  "url": "sec-intro-to-mod-arithmetic.html#sec-intro-to-mod-arithmetic-23-4",
  "type": "Exercise",
  "number": "6.1.4",
  "title": "",
  "body": " Recall that the decimal representation of a number is a sum of powers of 10; for instance, .   Reduce and .  What do you think it the smallest whole number satisfying for any positive integer power ?  Explain why .  Use your answers to these questions and to guess a way to determine if a number is divisible by 3. Explain your thinking.   "
},
{
  "id": "sec-coding",
  "level": "1",
  "url": "sec-coding.html",
  "type": "Section",
  "number": "6.2",
  "title": "Coding Theory",
  "body": " Coding Theory   Motivating Questions   In this section, we will explore the following questions.  How can modular arithmetic be applied to the transmission of information?  How does the UPC check digit scheme work? What errors can it detect? What errors can it correct?        Get into groups of (ideally) 7-10 (larger is better!) and sit in a line. Then play the game of telephone: one person, sitting at the end, whispers a short message to the person sitting next to them. They then turn and whisper it to the person sitting next to them, and so on until the last person receives the message. The last person shares the message they received, and it is compared to the original version.  Part of the fun of the activity is that the message is often garbled somewhere along the line; what could be done to mitigate this? Brainstorm a couple of ideas and be ready to share them with the class.    In , we learned about modular arithmetic, which works by considering the remainders obtained upon division by a fixed number . In this section, we'll consider a relatively recent application of modular arithmetic to coding theory , which is the mathematical study of transmitting information.  The basic problem of coding theory is as follows: in order to send information from one entity to another, it needs to be encoded in some form by the sender (e.g., written, recorded, etc) and transmitted across a channel (e.g., mailed, emailed, uploaded\/downloaded, etc) to the receiver . However, as in the classic game of telephone, errors can creep into the process written messages can be smudged, physical defects or packet loss can corrupt digital messages, and so on, resulting in information that either cannot be read at all, or can be misread. How can we be reasonably sure that common errors can be detected, and, perhaps, corrected?    Alice wants to send a bit of information to her friend Bob; for simplicity's sake, let's assume she seeks to send a 0 or 1. To improve the chances that the message is received correctly, she decides to send it three times in a row. So, if Alice desires to send Bob a 1, she'll actually send 111; if she desires to send a 0, she'll send 000.   As described above, errors can creep into the transmitted messsage; perhaps Alice sends Bob 111 and that is what he receives, but what if he receives 101? Or 100? How should Bob interpet those two (different) messages?  What strengths and weaknesses do you see in Alice's system? How could you improve the chances that Bob interprets Alice's message as she intends?  Perhaps you decided that Alice's system is still too prone to errors, so you decide she should send the intended digit seven times instead of 3. In what way(s) is this revised system better? Worse?     Lots of information is encoded using numbers, which makes the reliable transmission of numbers an important problem to solve. A fundamental example is alluded to in , wherein we consider the transmission of a binary digit, 0 or 1 this is the language of digital computers. The actual codes that are used to transmit digital signals over the internet rely on lots of sophisticated mathematics and so are beyond the scope of our work here.  However, certain codes are within the grasp of those familiar with modular arithmetic. We turn to one such example now: the UPC check digit scheme.  Universal Product Codes (UPCs) are found on most items available for sale (though books have their own identifiers called International Standard Book Numbers, or ISBNs) UPCs are often encoded with barcodes so as to be machine-readable. We will concern ourselves only with the digits, not the barcodes .  Let's consider the UPC from a copy of the game The Resistance :   The first digit (7) indicates a product type. This is typically 0, 1, or 6-9 (other digits are reserved for coupons, loyalty cards, etc). The first group of five digits (22301) is a manufacturer number, while the second group of five digits (92617) describes the product. The last digit (8) is known as the check digit ; it is chosen so that   More generally, if the digits of a UPC are , the check digit is chosen so that   The check digit is called thus as it is an extra bit of information which helps validate everything that came before it. Recall that our primary question is: how can we send information reliably over a channel? That is, how can we send information in such a way that we can (a) if the information received is the same as what we sent, and (b) if not, (ideally) correct the information?    Consider the following questions.   Calculate the check digit for the UPC .  Is a valid UPC? Explain. If it is invalid, change it to be a valid UPC.     We saw in that the check digit scheme can determine that a given proposed UPC is invalid. However, we have no clear understanding of what went wrong. Were two (or more) digits transposed? Did we simply record a digit incorrectly? In , we'll see what sorts of errors can be detected.    As best you can, answer the following questions.   Consider the following UPC with missing digit : Can you determine the value of ?  A certain box of chalk has UPC . Choose two adjacent digits (e.g., 6 and 1) and switch their places. Is the resulting 12-digit number still a valid UPC? How can you tell?  A certain product has UPC . Choose two adjacent digits and switch their places. Is the resulting 12-digit number still a valid UPC? How can you tell?      In this section, we learned about the main problem of coding theory: how can we reliably transmit information across a noisy channel (as in the game of telephone)? We saw that number theory has been used to encode extra information into Universal Product Codes. This extra information allows us to recover missing digits and detect if a given 12-digit code is valid or not. If all 12 digits are present and the code is invalid, the UPC check digit scheme cannot generally allow us to identify what went wrong in transmission.     The following is presented as a possible UPC; is it valid? Explain.     The following is presented as a possible UPC; is it valid? Explain.     Identify the missing digit in the following partial UPC.     Sam is learning to write his letters, but sometimes confuses the 6 and the 9. He records the following UPC; is it valid? If so, justify. If not, can you correct it so that it is?      "
},
{
  "id": "sec-coding-3",
  "level": "2",
  "url": "sec-coding.html#sec-coding-3",
  "type": "Activity",
  "number": "6.2.1",
  "title": "",
  "body": "  Get into groups of (ideally) 7-10 (larger is better!) and sit in a line. Then play the game of telephone: one person, sitting at the end, whispers a short message to the person sitting next to them. They then turn and whisper it to the person sitting next to them, and so on until the last person receives the message. The last person shares the message they received, and it is compared to the original version.  Part of the fun of the activity is that the message is often garbled somewhere along the line; what could be done to mitigate this? Brainstorm a couple of ideas and be ready to share them with the class.   "
},
{
  "id": "sec-coding-4",
  "level": "2",
  "url": "sec-coding.html#sec-coding-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "coding theory "
},
{
  "id": "warmup-coding",
  "level": "2",
  "url": "sec-coding.html#warmup-coding",
  "type": "Activity",
  "number": "6.2.2",
  "title": "",
  "body": "  Alice wants to send a bit of information to her friend Bob; for simplicity's sake, let's assume she seeks to send a 0 or 1. To improve the chances that the message is received correctly, she decides to send it three times in a row. So, if Alice desires to send Bob a 1, she'll actually send 111; if she desires to send a 0, she'll send 000.   As described above, errors can creep into the transmitted messsage; perhaps Alice sends Bob 111 and that is what he receives, but what if he receives 101? Or 100? How should Bob interpet those two (different) messages?  What strengths and weaknesses do you see in Alice's system? How could you improve the chances that Bob interprets Alice's message as she intends?  Perhaps you decided that Alice's system is still too prone to errors, so you decide she should send the intended digit seven times instead of 3. In what way(s) is this revised system better? Worse?    "
},
{
  "id": "sec-coding-12",
  "level": "2",
  "url": "sec-coding.html#sec-coding-12",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "check digit "
},
{
  "id": "act-upc-first",
  "level": "2",
  "url": "sec-coding.html#act-upc-first",
  "type": "Activity",
  "number": "6.2.3",
  "title": "",
  "body": "  Consider the following questions.   Calculate the check digit for the UPC .  Is a valid UPC? Explain. If it is invalid, change it to be a valid UPC.    "
},
{
  "id": "expl-upc-errors",
  "level": "2",
  "url": "sec-coding.html#expl-upc-errors",
  "type": "Exploration",
  "number": "6.2.4",
  "title": "",
  "body": "  As best you can, answer the following questions.   Consider the following UPC with missing digit : Can you determine the value of ?  A certain box of chalk has UPC . Choose two adjacent digits (e.g., 6 and 1) and switch their places. Is the resulting 12-digit number still a valid UPC? How can you tell?  A certain product has UPC . Choose two adjacent digits and switch their places. Is the resulting 12-digit number still a valid UPC? How can you tell?    "
},
{
  "id": "sec-coding-21-1",
  "level": "2",
  "url": "sec-coding.html#sec-coding-21-1",
  "type": "Exercise",
  "number": "6.2.1",
  "title": "",
  "body": " The following is presented as a possible UPC; is it valid? Explain.   "
},
{
  "id": "sec-coding-21-2",
  "level": "2",
  "url": "sec-coding.html#sec-coding-21-2",
  "type": "Exercise",
  "number": "6.2.2",
  "title": "",
  "body": " The following is presented as a possible UPC; is it valid? Explain.   "
},
{
  "id": "sec-coding-21-3",
  "level": "2",
  "url": "sec-coding.html#sec-coding-21-3",
  "type": "Exercise",
  "number": "6.2.3",
  "title": "",
  "body": " Identify the missing digit in the following partial UPC.   "
},
{
  "id": "sec-coding-21-4",
  "level": "2",
  "url": "sec-coding.html#sec-coding-21-4",
  "type": "Exercise",
  "number": "6.2.4",
  "title": "",
  "body": " Sam is learning to write his letters, but sometimes confuses the 6 and the 9. He records the following UPC; is it valid? If so, justify. If not, can you correct it so that it is?   "
},
{
  "id": "sec-voting-intro",
  "level": "1",
  "url": "sec-voting-intro.html",
  "type": "Section",
  "number": "7.1",
  "title": "Elections with Two Candidates",
  "body": " Elections with Two Candidates   Motivating Questions   In this section, we will explore the following questions.  What is a voting system?  What are some common means of choosing winners of elections?  What are some drawbacks for these common systems?       Our main task in this chapter is to explore the mathematics of voting systems. A voting system refers both to the ways votes are cast in elections and the way those votes are used to determine a winner.  We will see in this section that while two-candidate systems are fairly straightforward, they provide a fertile ground for exploring the characteristics we desire in all systems. We first want to determine how each system treats the voters and the candidates. A fair system should aim to treat each voter and each candidate equally.     It is time for the citizens of Scranton to elect a new mayor, and they have two choices: Angela and Stanley. How could the winner of this election be determined? How should the winner of this election be determined?     dictatorship   If seemed too easy, consider the following (likely alternative) suggestion.  Angela's husband, Dwight, has been a longtime player in Scranton politics. Thus, the system Scranton has adopted is: everyone votes, but whomever Dwight votes for will be declared the winner, regardless of how the other votes are cast.  Of the 76,328 citizens of Scranton, suppose 76,327 vote for Stanley, and Dwight votes for Angela. Who wins the election?    Angela wins!    The method described in is known as a dictatorship , with Dwight as the dictator. We note that, in the context of voting theory, the word dictatorship only refers to how the outcomes of elections are determined and has nothing to do with the system of government.    Does a dictatorship treat all voters equally? That is, does every vote count the same ? Does a dictatorship treat the candidates equally? Explain.    It does not. George's special status means the system treats him differently than the other voters.     imposed rule   If a dictatorship isn't your style, try this one: before the election runs and the citizens of Scranton vote, it is decided that Angela will win. Does this method treat all of the voters equally? That is, do all votes count the same? Does it treat the candidates equally? That is, could each candidate win, depending on the how the votes come in? Explain.    Yes, all voters are treated equally. Each voter has the same amount of influence on the outcome. On the other hand, the candidates are not treated equally. One candidate is chosen ahead of time, and the other one has no chance, regardless how the votes come in.    The method described in is known as imposed rule .  Let's try one more system on for size.   minority rule   Consider the following system. Each citizen of Scranton votes, and the votes are counted. The winner is the candidate with the smallest number of votes. This is known as minority rule .   Suppose that the citizens of Scranton vote, with 76,327 voters voting for Stanley and one (Dwight, no longer a dictator) votes for Angela. Who wins under minority rule?  Now suppose that Dwight convinces 38164 of the prospective Stanley voters to switch and vote for Angela. Who wins in this case under minority rule?  Does minority rule treat all voters equally? Does it treat all candidates equally? Explain.  Under minority rule, is it beneficial or detrimental for a candidate to receive additional votes? Explain.      fairness criteria In our quest for a mathematically just voting system, we will find it helpful to define certain desirable qualities for a fair and just system to satisfy. However : When we say that a voting system satisfies a certain criterion, we mean that it always satisfies it; that is, it can never violate that criterion. We will refer to these important criteria as fairness criteria . We have already observed a few important criteria that we now formally define.   fairness criteria anonymous  fairness criteria neutral  fairness criteria monotone  A voting system for a two-candidate election is anonymous if it treats all voters equally. That is, if any two voters switched their votes, the outcome of the election should remain the same.  A voting system for a two-candidate election is neutral if it treats both candidates equally. That is, if every voter changes their vote, the outcome of the election should also change.  A voting system for a two-candidate election is monotone if is impossible for a winning candidate to become a losing candidate by gaining votes (and not losing any others), or for a losing candidate to become a winning candidate by losing votes (and not gaining any others).     Now suppose three members of the board of the Dunder Mifflin Paper Company are voting to determine who should take over the business. The candidates are Michael and Andy. In order to vote, their friend , Toby, has devised a voting system. Three possible combinations of votes by Jim, Pam, and Kevin are presented in .   The results of Toby's voting system.    Jim  Pam  Kevin  Winner    A  M  M  A    A  A  M  M    M  M  A  M      Which of the three properties described in are satisfied by Toby's voting system? Explain.  Is Toby's sytem equivalent to any of the other three systems we've investigated thus far? Why or why not?      None of the three properties are satisfied. Rows 1 and 3 demonstrate that Barry's system isn't anonymous; rows 1 and 2 demonstrate that it's not monotone; and rows 2 and 3 demonstrate that it's not neutral.  No. If it were imposed rule, the winner would always be the same. If anyone were a dictator, they would vote for the winner each time. And it's not minority rule, as Michael wins in row 3 despite Buster getting a minority of the vote.       Let's investigate the three criteria in in relation to the three voting systems we've examined.   Which of the three fairness criteria are satisfied by dictatorships? Explain clearly for each of your answers.  Which of the three fairness criteria are satisfied by imposed rule? Explain clearly for each of your answers.  Which of the three fairness criteria are satisfied by minority rule? Explain clearly for each of your answers.    Here is what we came up with.  Fairness criteria satisfied by our two-candidate systems.    Voting System  Anonymous  Neutral  Monotone    Dictatorship  No  Yes  Yes    Imposed Rule  Yes  No  Yes    Minority Rule  Yes  Yes  No       The two-candidate voting system we haven't yet explored is probably the one that you actually suggested in . Perhaps it is something like:  Each voter should vote for the candidate they want to win the election. Whichever candidate gets the most votes wins the election.  This is known as majority rule .    Which of the three fairness criteria does majority rule satisfy? Explain.    All of them! It behaves much the same way as minority rule, except now it's helpful to get more votes.    In fact, for elections with two candidates, majority rule is the only system to satisfy all three fairness criteria.   K. May (1952)   In a two-candidate election with an odd number of voters, majority rule is the only voting system that is anonymous, neutral, and monotone and avoids the possibility of a tie.     Thus, for elections with two candidates, there is a clear fair and just choice for a voting system subject: majority rule. However, as we know, most elections don't have just two candidates, so in the remainder of this chapter we will consider the question of fairness in the context of these larger elections. We'll refine the existing fairness criteria to handle three or more candidates, and develop additional criteria due to surprising situations that can arise.   "
},
{
  "id": "sec-voting-intro-3-1",
  "level": "2",
  "url": "sec-voting-intro.html#sec-voting-intro-3-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "voting system "
},
{
  "id": "act-voting-intro",
  "level": "2",
  "url": "sec-voting-intro.html#act-voting-intro",
  "type": "Activity",
  "number": "7.1.1",
  "title": "",
  "body": "  It is time for the citizens of Scranton to elect a new mayor, and they have two choices: Angela and Stanley. How could the winner of this election be determined? How should the winner of this election be determined?   "
},
{
  "id": "invest-dictatorship",
  "level": "2",
  "url": "sec-voting-intro.html#invest-dictatorship",
  "type": "Investigation",
  "number": "7.1.2",
  "title": "",
  "body": " dictatorship   If seemed too easy, consider the following (likely alternative) suggestion.  Angela's husband, Dwight, has been a longtime player in Scranton politics. Thus, the system Scranton has adopted is: everyone votes, but whomever Dwight votes for will be declared the winner, regardless of how the other votes are cast.  Of the 76,328 citizens of Scranton, suppose 76,327 vote for Stanley, and Dwight votes for Angela. Who wins the election?    Angela wins!   "
},
{
  "id": "sec-voting-intro-6",
  "level": "2",
  "url": "sec-voting-intro.html#sec-voting-intro-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "dictatorship "
},
{
  "id": "sec-voting-intro-7",
  "level": "2",
  "url": "sec-voting-intro.html#sec-voting-intro-7",
  "type": "Exploration",
  "number": "7.1.3",
  "title": "",
  "body": "  Does a dictatorship treat all voters equally? That is, does every vote count the same ? Does a dictatorship treat the candidates equally? Explain.    It does not. George's special status means the system treats him differently than the other voters.   "
},
{
  "id": "invest-imposedrule",
  "level": "2",
  "url": "sec-voting-intro.html#invest-imposedrule",
  "type": "Investigation",
  "number": "7.1.4",
  "title": "",
  "body": " imposed rule   If a dictatorship isn't your style, try this one: before the election runs and the citizens of Scranton vote, it is decided that Angela will win. Does this method treat all of the voters equally? That is, do all votes count the same? Does it treat the candidates equally? That is, could each candidate win, depending on the how the votes come in? Explain.    Yes, all voters are treated equally. Each voter has the same amount of influence on the outcome. On the other hand, the candidates are not treated equally. One candidate is chosen ahead of time, and the other one has no chance, regardless how the votes come in.   "
},
{
  "id": "sec-voting-intro-9",
  "level": "2",
  "url": "sec-voting-intro.html#sec-voting-intro-9",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "imposed rule "
},
{
  "id": "invest-minorityrule",
  "level": "2",
  "url": "sec-voting-intro.html#invest-minorityrule",
  "type": "Investigation",
  "number": "7.1.5",
  "title": "",
  "body": " minority rule   Consider the following system. Each citizen of Scranton votes, and the votes are counted. The winner is the candidate with the smallest number of votes. This is known as minority rule .   Suppose that the citizens of Scranton vote, with 76,327 voters voting for Stanley and one (Dwight, no longer a dictator) votes for Angela. Who wins under minority rule?  Now suppose that Dwight convinces 38164 of the prospective Stanley voters to switch and vote for Angela. Who wins in this case under minority rule?  Does minority rule treat all voters equally? Does it treat all candidates equally? Explain.  Under minority rule, is it beneficial or detrimental for a candidate to receive additional votes? Explain.    "
},
{
  "id": "sec-voting-intro-12",
  "level": "2",
  "url": "sec-voting-intro.html#sec-voting-intro-12",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "fairness criteria "
},
{
  "id": "def-fairness1",
  "level": "2",
  "url": "sec-voting-intro.html#def-fairness1",
  "type": "Definition",
  "number": "7.1.6",
  "title": "",
  "body": " fairness criteria anonymous  fairness criteria neutral  fairness criteria monotone  A voting system for a two-candidate election is anonymous if it treats all voters equally. That is, if any two voters switched their votes, the outcome of the election should remain the same.  A voting system for a two-candidate election is neutral if it treats both candidates equally. That is, if every voter changes their vote, the outcome of the election should also change.  A voting system for a two-candidate election is monotone if is impossible for a winning candidate to become a losing candidate by gaining votes (and not losing any others), or for a losing candidate to become a winning candidate by losing votes (and not gaining any others).  "
},
{
  "id": "sec-voting-intro-14",
  "level": "2",
  "url": "sec-voting-intro.html#sec-voting-intro-14",
  "type": "Investigation",
  "number": "7.1.7",
  "title": "",
  "body": "  Now suppose three members of the board of the Dunder Mifflin Paper Company are voting to determine who should take over the business. The candidates are Michael and Andy. In order to vote, their friend , Toby, has devised a voting system. Three possible combinations of votes by Jim, Pam, and Kevin are presented in .   The results of Toby's voting system.    Jim  Pam  Kevin  Winner    A  M  M  A    A  A  M  M    M  M  A  M      Which of the three properties described in are satisfied by Toby's voting system? Explain.  Is Toby's sytem equivalent to any of the other three systems we've investigated thus far? Why or why not?      None of the three properties are satisfied. Rows 1 and 3 demonstrate that Barry's system isn't anonymous; rows 1 and 2 demonstrate that it's not monotone; and rows 2 and 3 demonstrate that it's not neutral.  No. If it were imposed rule, the winner would always be the same. If anyone were a dictator, they would vote for the winner each time. And it's not minority rule, as Michael wins in row 3 despite Buster getting a minority of the vote.    "
},
{
  "id": "sec-voting-intro-15",
  "level": "2",
  "url": "sec-voting-intro.html#sec-voting-intro-15",
  "type": "Investigation",
  "number": "7.1.9",
  "title": "",
  "body": "  Let's investigate the three criteria in in relation to the three voting systems we've examined.   Which of the three fairness criteria are satisfied by dictatorships? Explain clearly for each of your answers.  Which of the three fairness criteria are satisfied by imposed rule? Explain clearly for each of your answers.  Which of the three fairness criteria are satisfied by minority rule? Explain clearly for each of your answers.    Here is what we came up with.  Fairness criteria satisfied by our two-candidate systems.    Voting System  Anonymous  Neutral  Monotone    Dictatorship  No  Yes  Yes    Imposed Rule  Yes  No  Yes    Minority Rule  Yes  Yes  No      "
},
{
  "id": "sec-voting-intro-18",
  "level": "2",
  "url": "sec-voting-intro.html#sec-voting-intro-18",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "majority rule "
},
{
  "id": "sec-voting-intro-19",
  "level": "2",
  "url": "sec-voting-intro.html#sec-voting-intro-19",
  "type": "Investigation",
  "number": "7.1.11",
  "title": "",
  "body": "  Which of the three fairness criteria does majority rule satisfy? Explain.    All of them! It behaves much the same way as minority rule, except now it's helpful to get more votes.   "
},
{
  "id": "thm-may",
  "level": "2",
  "url": "sec-voting-intro.html#thm-may",
  "type": "Theorem",
  "number": "7.1.12",
  "title": "",
  "body": " K. May (1952)   In a two-candidate election with an odd number of voters, majority rule is the only voting system that is anonymous, neutral, and monotone and avoids the possibility of a tie.   "
},
{
  "id": "sec-plurality-borda",
  "level": "1",
  "url": "sec-plurality-borda.html",
  "type": "Section",
  "number": "7.2",
  "title": "Plurality and the Borda Count",
  "body": " Plurality and the Borda Count    Motivating Questions   In this section, we will explore the following questions.  How are elections with two candidates different from those with more than two?  What is a plurality, and how is it different than a majority?  How can we fairly evaluate voting systems with multiple candidates?       Describing the Problem  Let's begin with a warmup activity.    The popular vote totals from the state of Florida in the 2000 U.S. presidential election are given in .   The Florida popular vote in 2000.    Candidate  Popular Votes    George W. Bush  2,912,790    Al Gore  2,912,254    Ralph Nader  97,488    Others  40,579      In this election, did any candidate receive a majority (more than half) of the popular votes cast in the state of Florida?  Suppose the system used in Florida in 2000 is: whoever gets the most votes wins. Under this system, who wins the presidential popular vote in Florida in 2000? By how many votes does this person win? By what percentage of the vote does this person win?  If George W. Bush and Al Gore had been the only candidates on the ballot in Florida in 2000, do you think that Gore might have possibly received more popular votes than Bush in Florida?      spoiler candidate In fact, many political scientists believe that Ralph Nader was a spoiler candidate for Gore in 2000; that is, they believe that a large percentage of the Nader voters likely would have voted for Gore if Nader had not been on the ballot. In this section, we'll explore the wrinkles introduced by additional candidates, and develop alternative systems for choosing winners of elections. First, we'll define an important term for a concept you are likely already familiar with.   plurality  A candidate in an election who receives more votes than any of the other candidates is said to receive a plurality of the votes cast.   It is crucial that we understand the difference between plurality and majority .     For elections with two candidates, explain why the words plurality and majority mean exactly the same thing.  For elections with more than two candidates, explain why the words plurality and majority do not mean exactly the same thing.     We adopt the following definitions.   majority rule with more than two candidates  plurality method  voting system plurality method   Consider an election with more than two candidates.   Majority rule is the voting system that elects the candidate who receives more than half the votes, if such a candidate exists. If no such candidate exists, the election is declared a tie with no winner.  The plurality method is the voting system that elects the candidate that receives the largest number of votes. The plurality method only produces a tie when two candidates receive exactly the same number of votes, and this number is more than any other candidate.        Which of the two methods described in do you think is more likely to result in a tie?  If a candidate wins an election under majority rule, would that candidate also be guaranteed to win under the plurality method?  If a candidate wins an election under the plurality method, would that candidate also be guaranteed to win under majority rule?     We now explore the plurality method in more depth. Because it is familiar, it likely seems quite fair. But let's consider the next exploration.    It's time to vote for the mayor of Scranton again, and this time there are thirteen candidates: Jim, Pam, Michael, Dwight, Andy, Angela, Kevin, Stanley, Phyllis, Ryan, Kelly, Meredith, and Toby.   Suppose Kevin wins with 6,000 votes out of 76,328 cast. Did he receive a majority of the votes cast for mayor? (You may want to convince yourself that this is possible!) What percentage of the overall vote did he receive?  What is the smallest number of votes Kevin could have received and still won the election under the plurality method? (Be careful!)  Under the scenario described in the previous question, what is the largest number of voters who could have preferred Kevin least among all 13 candidates and still left him with a chance at winning the election?  Using your answers to the previous question, carefully articulate a critique of the plurality method.        A solution  As we saw in , when there are candidates, it is possible for the vote to be split so thoroughly that one candidate can win with just over -th of the vote. In this case, a majority of the voters will prefer someone other than the person who is ultimately elected. But as we saw, the situation can get even worse than that it's possible for the candidate who wins the plurality of the vote to be the last choice of a majority of voters, but still win! The main reason that the plurality method is susceptible to this is that it only accounts for a voter's first choice; there is no penalty for being a voter's last choice, and no benefit to being the voter's second choice.   preference order We will therefore explore methods of voting and fairness criteria that account for a full top-to-bottom ranking of candidates by voters, called a preference order . If there are three candidates in an election, say Michael, Angela, and Stanley, and my preference order is that Michael is my top candidate, Stanley my second choice, and Angela my third, we may write , where the symbol means \"is preferred to\".     Consider a 3-candidate election for the mayorship of Scranton between Michael, Angela, and Stanley. How many possible preference orders are there? In other words, in how many different ways could the voters rank them?  Suppose their friend Toby enters the race, bringing the total number of candidates to 4. Now how many preference orders are possible now?      preference ballot Since our voters will be casting preference ballots , we need a different way of displaying the votes cast.    Suppose Stanley, Toby, Angela, and Michael are running for the presidency of Dunder Mifflin, the premier paper company in Scranton. The preference orders for each of the 13 board members of the company are displayed in , a visualization known as a preference schedule . The column headings indicate the number of voters with the preference order displayed in the column. For instance, the first column shows that 6 shareholders have the preference order . Note that the preference orders displayed are the five that were cast as preference ballots in the election; there are many others that were possible but not cast, and thus are not displayed.   Preference schedule for the presidency of Dunder Mifflin.    Rank  6  3  2  1  1    1  S  T  A  M  A    2  A  A  M  T  T    3  T  M  T  A  M    4  M  S  S  S  S      Under majority rule, what would the outcome of the election be?  Under the plurality method, what would the outcome of the election be?  Rank the candidates based on the outcome produced by the plurality method. The final ranking of candidates by a voting system is known as the societal preference order .  Do you think the plurality winner best represents the will and preferences of the voters? If so, explain why. If not, give a convincing argument for why you think some other candidate would be better.       The Borda Count  One very popular method for choosing the winner of a multi-candidate election is the Borda count.   Borda count  voting system Borda count  Consider an election with candidates. The Borda count works as follows. Each voter submits a ballot that contains their entire preference order for all candidates in the election. For each ballot cast, points are awarded to each candidate according to the following rules:   A last-place vote is worth 1 point.  A second-to-last-place vote is worth 2 points.   A third-place vote is worth points.  A second-place vote is worth points.  A first-place vote is worth points.   The candidate who accumulates the largest number of total points from all of the ballots is declared the winner, and the societal preference order is determined by listing the candidates in order of the number of points they received, largest to smallest. If two or more candidates are tied with the largest number of points, they are all declared winners (or some suitable prearranged tiebreaking procedure is used).     Under the Borda count, what would the outcome of the Dunder Mifflin presidential election in be?    Consider the following interesting feature of the Borda count.    Controversy at the Dunder Mifflin board! Due to some shenanigans involving a major shareholder, the election displayed in has to be rerun. The following preference schedule is produced.   Preference schedule for the presidency of Dunder Mifflin.    Rank  6  3  2    1  S  T  A    2  A  A  M    3  T  M  T    4  M  S  S      Who wins under majority rule?  Who wins under the Borda count? Does this seem strange to you?     Lest you think this is a contrived example, be aware that things like this can happen in real life. A version of the Borda count is used by the Associated Press to rank the top 25 college football and basketball teams. In the 1971 AP preseason poll, the author's Nebraska Cornhuskers received 26 of 50 first-place votes, yet were ranked #2. The results of things like this AP polling anomaly or suggest a new fairness criterion.   majority criterion  fairness criteria majority  A voting system satisfies the majority criterion if whenever a candidate is ranked first by a majority of voters, that candidate will be ranked first in the resulting societal preference order.     Of all the voting systems we've explored thus far, which must always satisfy the majority criterion?    In , we defined three fairness criteria. Our definitions from can be modified to extend in a natural way to elections with three or more candidates.   fairness criteria anonymous  fairness criteria majority  fairness criteria neutral   A voting system is anonymous if it treats all of the voters equally, meaning that if any two voters traded preference orders , the outcome of the election (and the resulting societal preference order) would remain the same.  A voting system is neutral if it treats all of the candidates equally, meaning that if every voter switched the positions of two particular candidates in their individual preference orders, the positions of these two candidates would switch in the resulting societal preference order as well.  A voting system is monotone if changes favorable only to a particular candidate in individual preference orders cannot cause that candidate to be ranked lower in the resulting societal preference order.       Which of the properties of anonymity, neutrality, and monotonicity are satisfied by plurality? Which are not satisfied? Give a convincing argument to justify each of your answers.  Which of the properties of anonymity, neutrality, and monotonicity are satisfied by the Borda count? Which of these three properties are not satisfied? Give a convincing argument to justify each of your answers.  Do either of your answers to Questions 1 or 2 contradict ? Explain.      In this section, we have seen that things become more complicated when we consider more than two candidates. In an election with only two candidates, a vote for one implicitly ranks the other candidate second. With more than two candidates, not only can societal preferences be more diffuse, but they are also more complex than can be captured with simple plurality voting. It is possible for a candidate who is the least desirable choice of an overwhelming majority of the voters to win if there are enough other candidates.  In the next section, we will explore additional voting systems and fairness criteria that attempt to overcome the shortcomings of the Borda count.       Consider the election run between Paul (P), Tom (T), Sally (S), and Ann (A) as shown in the table below.     Rank  5  5  4  2  1    1  S  T  P  P  A    2  T  A  S  T  T    3  P  S  A  S  P    4  A  P  T  A  S      Does any candidate receive a majority of first-place votes? Explain.  Determine the outcome of the election under majority rule. Explain.  Determine the outcome of the election using the plurality method. Explain.  Determine the outcome of the election using the Borda count. Explain.     As described in this section, the plurality method suffers when there are a large number of candidates. Read about the 2016 Republican presidential primary process. How many candidates were there? How many (total) votes were cast? Assuming the only thing that mattered was the total number of first-place votes received, how few votes could a candidate have (hypothetically) received and still been declared the winner?    As described in the text, a form of the Borda count is used to rank college sports teams in the U.S. Find another use of the Borda count in a different context (e.g., a political one), and do some research to determine why it was chosen.    "
},
{
  "id": "sec-plurality-borda-2-2-3",
  "level": "2",
  "url": "sec-plurality-borda.html#sec-plurality-borda-2-2-3",
  "type": "Activity",
  "number": "7.2.1",
  "title": "",
  "body": "  The popular vote totals from the state of Florida in the 2000 U.S. presidential election are given in .   The Florida popular vote in 2000.    Candidate  Popular Votes    George W. Bush  2,912,790    Al Gore  2,912,254    Ralph Nader  97,488    Others  40,579      In this election, did any candidate receive a majority (more than half) of the popular votes cast in the state of Florida?  Suppose the system used in Florida in 2000 is: whoever gets the most votes wins. Under this system, who wins the presidential popular vote in Florida in 2000? By how many votes does this person win? By what percentage of the vote does this person win?  If George W. Bush and Al Gore had been the only candidates on the ballot in Florida in 2000, do you think that Gore might have possibly received more popular votes than Bush in Florida?    "
},
{
  "id": "def-plurality",
  "level": "2",
  "url": "sec-plurality-borda.html#def-plurality",
  "type": "Definition",
  "number": "7.2.3",
  "title": "",
  "body": " plurality  A candidate in an election who receives more votes than any of the other candidates is said to receive a plurality of the votes cast.  "
},
{
  "id": "sec-plurality-borda-2-2-7",
  "level": "2",
  "url": "sec-plurality-borda.html#sec-plurality-borda-2-2-7",
  "type": "Discussion",
  "number": "7.2.4",
  "title": "",
  "body": "   For elections with two candidates, explain why the words plurality and majority mean exactly the same thing.  For elections with more than two candidates, explain why the words plurality and majority do not mean exactly the same thing.    "
},
{
  "id": "def-majoritypluralityrule",
  "level": "2",
  "url": "sec-plurality-borda.html#def-majoritypluralityrule",
  "type": "Definition",
  "number": "7.2.5",
  "title": "",
  "body": " majority rule with more than two candidates  plurality method  voting system plurality method   Consider an election with more than two candidates.   Majority rule is the voting system that elects the candidate who receives more than half the votes, if such a candidate exists. If no such candidate exists, the election is declared a tie with no winner.  The plurality method is the voting system that elects the candidate that receives the largest number of votes. The plurality method only produces a tie when two candidates receive exactly the same number of votes, and this number is more than any other candidate.    "
},
{
  "id": "sec-plurality-borda-2-2-10",
  "level": "2",
  "url": "sec-plurality-borda.html#sec-plurality-borda-2-2-10",
  "type": "Discussion",
  "number": "7.2.6",
  "title": "",
  "body": "   Which of the two methods described in do you think is more likely to result in a tie?  If a candidate wins an election under majority rule, would that candidate also be guaranteed to win under the plurality method?  If a candidate wins an election under the plurality method, would that candidate also be guaranteed to win under majority rule?    "
},
{
  "id": "expl-office-voting",
  "level": "2",
  "url": "sec-plurality-borda.html#expl-office-voting",
  "type": "Exploration",
  "number": "7.2.7",
  "title": "",
  "body": "  It's time to vote for the mayor of Scranton again, and this time there are thirteen candidates: Jim, Pam, Michael, Dwight, Andy, Angela, Kevin, Stanley, Phyllis, Ryan, Kelly, Meredith, and Toby.   Suppose Kevin wins with 6,000 votes out of 76,328 cast. Did he receive a majority of the votes cast for mayor? (You may want to convince yourself that this is possible!) What percentage of the overall vote did he receive?  What is the smallest number of votes Kevin could have received and still won the election under the plurality method? (Be careful!)  Under the scenario described in the previous question, what is the largest number of voters who could have preferred Kevin least among all 13 candidates and still left him with a chance at winning the election?  Using your answers to the previous question, carefully articulate a critique of the plurality method.    "
},
{
  "id": "sec-plurality-borda-2-3-3",
  "level": "2",
  "url": "sec-plurality-borda.html#sec-plurality-borda-2-3-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "preference order "
},
{
  "id": "sec-plurality-borda-2-3-4",
  "level": "2",
  "url": "sec-plurality-borda.html#sec-plurality-borda-2-3-4",
  "type": "Activity",
  "number": "7.2.8",
  "title": "",
  "body": "   Consider a 3-candidate election for the mayorship of Scranton between Michael, Angela, and Stanley. How many possible preference orders are there? In other words, in how many different ways could the voters rank them?  Suppose their friend Toby enters the race, bringing the total number of candidates to 4. Now how many preference orders are possible now?    "
},
{
  "id": "sec-plurality-borda-2-3-5",
  "level": "2",
  "url": "sec-plurality-borda.html#sec-plurality-borda-2-3-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "preference ballots "
},
{
  "id": "expl-dmprez",
  "level": "2",
  "url": "sec-plurality-borda.html#expl-dmprez",
  "type": "Exploration",
  "number": "7.2.9",
  "title": "",
  "body": "  Suppose Stanley, Toby, Angela, and Michael are running for the presidency of Dunder Mifflin, the premier paper company in Scranton. The preference orders for each of the 13 board members of the company are displayed in , a visualization known as a preference schedule . The column headings indicate the number of voters with the preference order displayed in the column. For instance, the first column shows that 6 shareholders have the preference order . Note that the preference orders displayed are the five that were cast as preference ballots in the election; there are many others that were possible but not cast, and thus are not displayed.   Preference schedule for the presidency of Dunder Mifflin.    Rank  6  3  2  1  1    1  S  T  A  M  A    2  A  A  M  T  T    3  T  M  T  A  M    4  M  S  S  S  S      Under majority rule, what would the outcome of the election be?  Under the plurality method, what would the outcome of the election be?  Rank the candidates based on the outcome produced by the plurality method. The final ranking of candidates by a voting system is known as the societal preference order .  Do you think the plurality winner best represents the will and preferences of the voters? If so, explain why. If not, give a convincing argument for why you think some other candidate would be better.    "
},
{
  "id": "sec-plurality-borda-2-4-3",
  "level": "2",
  "url": "sec-plurality-borda.html#sec-plurality-borda-2-4-3",
  "type": "Definition",
  "number": "7.2.11",
  "title": "",
  "body": " Borda count  voting system Borda count  Consider an election with candidates. The Borda count works as follows. Each voter submits a ballot that contains their entire preference order for all candidates in the election. For each ballot cast, points are awarded to each candidate according to the following rules:   A last-place vote is worth 1 point.  A second-to-last-place vote is worth 2 points.   A third-place vote is worth points.  A second-place vote is worth points.  A first-place vote is worth points.   The candidate who accumulates the largest number of total points from all of the ballots is declared the winner, and the societal preference order is determined by listing the candidates in order of the number of points they received, largest to smallest. If two or more candidates are tied with the largest number of points, they are all declared winners (or some suitable prearranged tiebreaking procedure is used).  "
},
{
  "id": "sec-plurality-borda-2-4-4",
  "level": "2",
  "url": "sec-plurality-borda.html#sec-plurality-borda-2-4-4",
  "type": "Activity",
  "number": "7.2.12",
  "title": "",
  "body": "  Under the Borda count, what would the outcome of the Dunder Mifflin presidential election in be?   "
},
{
  "id": "act-dmprez2",
  "level": "2",
  "url": "sec-plurality-borda.html#act-dmprez2",
  "type": "Activity",
  "number": "7.2.13",
  "title": "",
  "body": "  Controversy at the Dunder Mifflin board! Due to some shenanigans involving a major shareholder, the election displayed in has to be rerun. The following preference schedule is produced.   Preference schedule for the presidency of Dunder Mifflin.    Rank  6  3  2    1  S  T  A    2  A  A  M    3  T  M  T    4  M  S  S      Who wins under majority rule?  Who wins under the Borda count? Does this seem strange to you?    "
},
{
  "id": "def-majoritycriterion",
  "level": "2",
  "url": "sec-plurality-borda.html#def-majoritycriterion",
  "type": "Definition",
  "number": "7.2.15",
  "title": "",
  "body": " majority criterion  fairness criteria majority  A voting system satisfies the majority criterion if whenever a candidate is ranked first by a majority of voters, that candidate will be ranked first in the resulting societal preference order.  "
},
{
  "id": "sec-plurality-borda-2-4-9",
  "level": "2",
  "url": "sec-plurality-borda.html#sec-plurality-borda-2-4-9",
  "type": "Discussion",
  "number": "7.2.16",
  "title": "",
  "body": "  Of all the voting systems we've explored thus far, which must always satisfy the majority criterion?   "
},
{
  "id": "def-fairness2",
  "level": "2",
  "url": "sec-plurality-borda.html#def-fairness2",
  "type": "Definition",
  "number": "7.2.17",
  "title": "",
  "body": " fairness criteria anonymous  fairness criteria majority  fairness criteria neutral   A voting system is anonymous if it treats all of the voters equally, meaning that if any two voters traded preference orders , the outcome of the election (and the resulting societal preference order) would remain the same.  A voting system is neutral if it treats all of the candidates equally, meaning that if every voter switched the positions of two particular candidates in their individual preference orders, the positions of these two candidates would switch in the resulting societal preference order as well.  A voting system is monotone if changes favorable only to a particular candidate in individual preference orders cannot cause that candidate to be ranked lower in the resulting societal preference order.   "
},
{
  "id": "sec-plurality-borda-2-4-12",
  "level": "2",
  "url": "sec-plurality-borda.html#sec-plurality-borda-2-4-12",
  "type": "Exploration",
  "number": "7.2.18",
  "title": "",
  "body": "   Which of the properties of anonymity, neutrality, and monotonicity are satisfied by plurality? Which are not satisfied? Give a convincing argument to justify each of your answers.  Which of the properties of anonymity, neutrality, and monotonicity are satisfied by the Borda count? Which of these three properties are not satisfied? Give a convincing argument to justify each of your answers.  Do either of your answers to Questions 1 or 2 contradict ? Explain.    "
},
{
  "id": "sec-plurality-borda-3-1",
  "level": "2",
  "url": "sec-plurality-borda.html#sec-plurality-borda-3-1",
  "type": "Exercise",
  "number": "7.2.1",
  "title": "",
  "body": " Consider the election run between Paul (P), Tom (T), Sally (S), and Ann (A) as shown in the table below.     Rank  5  5  4  2  1    1  S  T  P  P  A    2  T  A  S  T  T    3  P  S  A  S  P    4  A  P  T  A  S      Does any candidate receive a majority of first-place votes? Explain.  Determine the outcome of the election under majority rule. Explain.  Determine the outcome of the election using the plurality method. Explain.  Determine the outcome of the election using the Borda count. Explain.   "
},
{
  "id": "sec-plurality-borda-3-2",
  "level": "2",
  "url": "sec-plurality-borda.html#sec-plurality-borda-3-2",
  "type": "Exercise",
  "number": "7.2.2",
  "title": "",
  "body": " As described in this section, the plurality method suffers when there are a large number of candidates. Read about the 2016 Republican presidential primary process. How many candidates were there? How many (total) votes were cast? Assuming the only thing that mattered was the total number of first-place votes received, how few votes could a candidate have (hypothetically) received and still been declared the winner?  "
},
{
  "id": "sec-plurality-borda-3-3",
  "level": "2",
  "url": "sec-plurality-borda.html#sec-plurality-borda-3-3",
  "type": "Exercise",
  "number": "7.2.3",
  "title": "",
  "body": " As described in the text, a form of the Borda count is used to rank college sports teams in the U.S. Find another use of the Borda count in a different context (e.g., a political one), and do some research to determine why it was chosen.  "
},
{
  "id": "sec-pwc-irv",
  "level": "1",
  "url": "sec-pwc-irv.html",
  "type": "Section",
  "number": "7.3",
  "title": "Pairwise Comparisons and Instant Runoff Voting",
  "body": " Pairwise Comparisons and Instant Runoff Voting    Motivating Questions   In this section, we will explore the following questions.  How should head-to-head preferences figure into an election outcome?  What is the method of pairwise comparisons? What are its strengths and weaknesses?  What is instant runoff voting? What are its strengths and weaknesses?  What does Arrow's Theorem say, and what are its consequences for democracy?       Pairwise Comparisons  Consider the following situation Borrowed, again, from Hodge and Klima's The Mathematics of Voting and Elections , 2nd ed. .    Suppose Skip, Norm, and Jesse are all running for President of the 10,000 Lakes Club, with the preferences of the 100 members of the club as shown in .   The preference schedule schedule for the 10,000 Lakes Club presidency.    Rank  35  28  20  17    1  N  S  J  J    2  S  N  N  S    3  J  J  S  N      What would be the outcome of the election under majority rule?  What would be the outcome of the election under plurality?  What would be the outcome of the election under the Borda count?  Which candidate is ranked first by the largest number of voters?  Which candidate is ranked last by the largest number of voters?  In a head-to-head contest between just Skip and Norm, who would win?  In a head-to-head contest between just Skip and Jesse, who would win?  In a head-to-head contest between just Norm and Jesse, who would win?  Does anything about your answers to Questions 1-8 strike you as being strange or unusual?     In , we saw that the plurality method can fail to elect a candidate who would win a head-to-head matchup against all other candidates. Perhaps worse, we also saw that plurality can elect a candidate who would lose a head-to-head matchup against all other candidates. This has struck voting theorists as unfair, and we make the following definition, named after Marie Jean Antoine Nicolas de Caritat, the Marquis de Condorcet.   A Condorcet winner is a candidate in an election who would win a head-to-head contest (with the winner decided by majority rule) against each of the other candidates.  A Condorcet loser is a candidate in an election who would lose a head-to-head contest (with the winner decided by majority rule) against each of the other candidates.  A voting system that will always elect a Condorcet winner, whenever one exists , is said to satisfy the Condorcet winner criterion (CWC) .  A voting system that will never elect a Condorcet loser is said to satisfy the Condorcet loser criterion (CLC) .     Consider the preference schedule in .   A preference schedule.    Rank  1  1  1    1  A  B  C    2  B  C  A    3  C  A  B      In a head-to-head contest between just candidates A and B, who would win?  In a head-to-head contest between just candidates B and C, who would win?  In a head-to-head contest between just candidates A and C, who would win?  Does anything about Questions 1-3 strike you as unusual?  Is there a Condorcet winner and\/or loser in this election? Explain.        Explain why a candidate who received a majority of first-place votes is also a Condorcet winner.  Does your answer to Question 1 imply that majority rule satisfies the CWC? If so, explain why. Otherwise, give an example to show that majority rule can violate the CWC.  Does your answer to Question 1 imply that majority rule satisfies the CLC? If so, explain why. Otherwise, give an example to show that majority rule can violate the CLC.  Are there special types of elections for which majority rule does satisfy the CWC? Give a convincing argument to justify your answer.  Use your answer to Question 1 to explain why any voting system that violates the majority criterion ( ) must also violate the CWC.  Use your answer to Question 5 to explain why the Borda count violates the CWC.     In order to find a voting system that satisfies the CWC and CLC, let's return to the Dunder Mifflin presidential election in .    Consider the following proposed voting system, using as the preference schedule.   Step 1: List all possible head-to-head matchups between candidates.  Step 2: Determine the winner of each head-to-head matchup. Award 1 point for each win, 0 points for a loss, and 1\/2 point to each in the event of a tie.  Step 3: The candidate with the most points from Step 2 wins.   Consider the method described above.   Under this method, who wins the presidency of the Bluth Company?  Under this method, what societal preference order is produced?  Is there a Condorcet winner and\/or loser in this election? Explain.   The method described above is known as the method of pairwise comparisions (PWC). What strikes you as being different or unusual about it, especially compared to the plurality and Borda count systems we've already explored?        Could a Condorcet winner ever lose a head-to-head contest with another candidate? Why or why not?  What does your answer to Question 1 allow you to conclude about the method of pairwise comparisons and the CWC?  Does the method of pairwise comparisons satisfy the CLC? If so, explain why. Otherwise, give an example of a preference schedule for the method of pairwise comparisons could elect a Condorcet loser.     As we have just seen, the method of pairwise comparisons satisfies the CWC. This means that it will always elect a Condorcet winner if one exists . However, when a Condorcet winner does not exist, strange things can happen.    Consider the preference schedule given in .   A preference schedule.    Rank  10  3  7  6    1  C  E  D  B    2  E  A  A  A    3  D  D  C  C    4  A  C  B  D    5  B  B  E  E      Who wins this election using the method of pairwise comparisons?  Is there a Condorcet winner? A Condorcet loser?  Due to a scandal following the counting of the votes, candidate D withdraws. The election is re-run using the votes already cast, again with the method of pairwise comparisons. Who wins?  Does this seem strange?     The phenomenon observed in is an example of a violation of a new fairness criterion, the independence of irrelevant alternatives . It's more subtle than some of the others, so we'll present a few versions of it.   If a voting system has the property that the societal preference between any two candidates depends only on the voters' preferences between those two candidates, then the system is said to satisfy the independence of irrelevant alternatives criterion (IIA).  Put another way, a voting system satisfies IIA if some or all of the voters in an election change their preference ballots but no voter changes their preference between two candidates and , then the societal preference between and must also remain unchanged.  Or, if an election is run and produces as the winner, and later a non-winning candidate drops out, then should still be the winner of the election.   IIA is often interpreted as saying that if a candidate ( ) would win an election, and a new candidate ( ) were added to the ballot, then either or should win the election. A further delightful illustration of a violation of IIA is attributed to Sidney Morgenbesser :  After finishing dinner, Sidney Morgenbesser decides to order dessert. The waitress tells him he has two choices: apple pie and blueberry pie. Sidney orders the apple pie. After a few minutes the waitress returns and says that they also have cherry pie at which point Morgenbesser says In that case I'll have the blueberry pie.   Let's consider our current systems and IIA.     Does plurality satisfy IIA? Why or why not?  Does the Borda count satisfy IIA? Why or why not?  Does PWC satisfy IIA? Why or why not?        Is the method of pairwise comparisons anonymous? Monotone? Does it satisfy the majority criterion? Justify your answers.    Let's take stock of where we're at.    Fill in , indicating whether each voting system satisfies the given criteria.   Voting systems and fairness criteria          Anonymous  Neutral  Monotone  Majority  CWC  CLC  IIA    Majority rule                                  Plurality                                  Borda count                                  PWC                                       Instant Runoff Voting and Arrow's Theorem  In this section, we'll examine one last (new) voting system, called instant runoff voting (IRV) or ranked choice voting (RCV). The nonpartisan election advocacy group, FairVote, refers to this system as RCV. I prefer calling the system instant runoff ; the non-plurality systems we've looked at for three or more candidates all involve ranking candidates, so I find the term too general. This system was proposed in the mid-1800s by Thomas Hare, and has slowly grown in popularity. Other than plurality, it is likely the most widely used system for choosing elected officials in the U.S. For example, the City of Minneapolis uses IRV for its city-wide elections, and Maine uses it for all state-wide elections , including, for the first time in 2020, for the general election for president .   The instant runoff voting (IRV) system works as follows.   Each voter in the election submits their entire preference order.  If a candidate has a majority of first-place votes, they are declared the winner.  If no candidate has a majority of first-place votes, then the candidate (or candidates, in the case of a tie) with the fewest first-place votes is eliminated from each voter's preference order, and the remaining candidates are moved up, yielding a new preference schedule.  Step 2 is repeated until a single candidate remains. That candidate is declared the winner.      Consider the hypothetical preference schedule shown in .   A hypothetical election    Rank  6  7  9  3    1  A  B  C  A    2  B  C  B  C    3  C  A  A  B      Under IRV, which candidate is eliminated first?  Under IRV, which candidate is eliminated second?  Who would win the election under IRV? What would be the resulting societal preference order?     As has been our wont, let's explore which fairness criteria are satisfied by IRV.    Use to write a thorough explanation of why IRV is both neutral and anonymous.      Explain why IRV satisfies the majority criterion.      Consider the election run in . Suppose that the three voters in the rightmost column of got wind of candidate 's support and switched their votes to to be on the side of the winner.   With these new preferences, who would win the election under IRV?  Compare your answer to Question 1 of this activity to Question 3 of . What conclusions can you draw?  Do some research on FairVote.org about this phenomenon. How do they respond to a potential critique?     The phenomonon observed in suggests our last fairness criterion: the monotonicity criterion .   monotonicity criterion   A voting system is said to satisfy the monotonicity criterion if when a candidate wins, and on a recount or reelection, only changes favorable to occur, then will still win. That is, changes that only favor the winner should not change the winner.      Consider an election between three candidates with the preference schedule shown in .   A hypothetical election.    Rank  1  2  2    1  A  B  C    2  B  A  A    3  C  C  B      Is there a Condorcet winner in this election?  Who would win the election under IRV?  Does IRV satisfy the Condorcet winner criterion? Use your answers to Questions 1 and 2, together with (and what we know about when implications are false! Recall .).        What about Dunder Mifflin? Who wins the company presidency with the preference schedule in under IRV?  Given all the investigations we've done into the Dunder Mifflin presidency, write an argument to the company's board of directors arguing for a particular voting system to be used to choose the company's president. Your argument should make some allusion to the fairness criteria we've explored.     At this point, you may be wondering which voting system is best. We saw a decisive answer if our election has only two candidates (the familiar majority rule ), but when the election has more than two candidates, things have gotten complicated. Plurality, majority rule, the Borda count, PWC, and IRV all fail to satisfy at least one of our criteria.  In 1951, economist Kenneth Arrow proved the following landmark result. It states that our quest is hopeless! There is no fairest voting system. Each has tradeoffs which make it suitable in certain circumstances and unsuitable in others.   Arrow's Impossibility Theorem  In an election with more than two candidates, it is impossible for a voting system to satisfy monotonicity, neutrality, anonymity, IIA, the majority criterion, and the CWC. Technically, we also need to assume that the votes matter (not imposed rule), and that there is no dictator.      In this section, we explored additional voting systems (the method of pairwise comparisions and instant runoff voting) and fairness criteria (IIA and the monotonicity criterion). As we saw that none of our systems satisfied all of our criteria, we were faced with a question: is there any voting system out there that is completely fair? Arrow's landmark theorem tells us that no democratic voting system can satisfy all of our criteria. This does not mean that our explorations have been fruitless instead, we'll need to consider which criteria are most important to us when selecting a voting system, and choose accordingly.       Consider the hypothetical election below.     Rank  8  6  4  2    1  A  C  D  B    2  B  A  C  C    3  D  B  B  A    4  C  D  A  D      Who wins the election using the method of pairwise comparisons?  Suppose that after a scandal emerges, candidate drops out and the results are re-tabulated. Who wins the election?  Does the answer to the previous question give an example of a violation of one of our fairness criteria? Explain.  Suppose instead that, before the original election is run, the four voters in the third column switch their preference ballot to . Who wins the election? Is this an example of a violation of one of our fairness criteria? Explain.  Using the original preference schedule, who wins the election using instant runoff voting? Explain.     One criticism of non-plurality voting systems is that they are too complex, or ballots too difficult to understand. Find an article that makes this point and respond to it in a well-reasoned paragraph or two. Do you agree? Disagree?    "
},
{
  "id": "act-10klakes",
  "level": "2",
  "url": "sec-pwc-irv.html#act-10klakes",
  "type": "Activity",
  "number": "7.3.1",
  "title": "",
  "body": "  Suppose Skip, Norm, and Jesse are all running for President of the 10,000 Lakes Club, with the preferences of the 100 members of the club as shown in .   The preference schedule schedule for the 10,000 Lakes Club presidency.    Rank  35  28  20  17    1  N  S  J  J    2  S  N  N  S    3  J  J  S  N      What would be the outcome of the election under majority rule?  What would be the outcome of the election under plurality?  What would be the outcome of the election under the Borda count?  Which candidate is ranked first by the largest number of voters?  Which candidate is ranked last by the largest number of voters?  In a head-to-head contest between just Skip and Norm, who would win?  In a head-to-head contest between just Skip and Jesse, who would win?  In a head-to-head contest between just Norm and Jesse, who would win?  Does anything about your answers to Questions 1-8 strike you as being strange or unusual?    "
},
{
  "id": "def-cwcclc",
  "level": "2",
  "url": "sec-pwc-irv.html#def-cwcclc",
  "type": "Definition",
  "number": "7.3.3",
  "title": "",
  "body": " A Condorcet winner is a candidate in an election who would win a head-to-head contest (with the winner decided by majority rule) against each of the other candidates.  A Condorcet loser is a candidate in an election who would lose a head-to-head contest (with the winner decided by majority rule) against each of the other candidates.  A voting system that will always elect a Condorcet winner, whenever one exists , is said to satisfy the Condorcet winner criterion (CWC) .  A voting system that will never elect a Condorcet loser is said to satisfy the Condorcet loser criterion (CLC) .  "
},
{
  "id": "subsec-pwc-6",
  "level": "2",
  "url": "sec-pwc-irv.html#subsec-pwc-6",
  "type": "Exploration",
  "number": "7.3.4",
  "title": "",
  "body": "  Consider the preference schedule in .   A preference schedule.    Rank  1  1  1    1  A  B  C    2  B  C  A    3  C  A  B      In a head-to-head contest between just candidates A and B, who would win?  In a head-to-head contest between just candidates B and C, who would win?  In a head-to-head contest between just candidates A and C, who would win?  Does anything about Questions 1-3 strike you as unusual?  Is there a Condorcet winner and\/or loser in this election? Explain.    "
},
{
  "id": "subsec-pwc-7",
  "level": "2",
  "url": "sec-pwc-irv.html#subsec-pwc-7",
  "type": "Investigation",
  "number": "7.3.6",
  "title": "",
  "body": "   Explain why a candidate who received a majority of first-place votes is also a Condorcet winner.  Does your answer to Question 1 imply that majority rule satisfies the CWC? If so, explain why. Otherwise, give an example to show that majority rule can violate the CWC.  Does your answer to Question 1 imply that majority rule satisfies the CLC? If so, explain why. Otherwise, give an example to show that majority rule can violate the CLC.  Are there special types of elections for which majority rule does satisfy the CWC? Give a convincing argument to justify your answer.  Use your answer to Question 1 to explain why any voting system that violates the majority criterion ( ) must also violate the CWC.  Use your answer to Question 5 to explain why the Borda count violates the CWC.    "
},
{
  "id": "expl-pwc",
  "level": "2",
  "url": "sec-pwc-irv.html#expl-pwc",
  "type": "Exploration",
  "number": "7.3.7",
  "title": "",
  "body": "  Consider the following proposed voting system, using as the preference schedule.   Step 1: List all possible head-to-head matchups between candidates.  Step 2: Determine the winner of each head-to-head matchup. Award 1 point for each win, 0 points for a loss, and 1\/2 point to each in the event of a tie.  Step 3: The candidate with the most points from Step 2 wins.   Consider the method described above.   Under this method, who wins the presidency of the Bluth Company?  Under this method, what societal preference order is produced?  Is there a Condorcet winner and\/or loser in this election? Explain.   The method described above is known as the method of pairwise comparisions (PWC). What strikes you as being different or unusual about it, especially compared to the plurality and Borda count systems we've already explored?   "
},
{
  "id": "subsec-pwc-10",
  "level": "2",
  "url": "sec-pwc-irv.html#subsec-pwc-10",
  "type": "Investigation",
  "number": "7.3.8",
  "title": "",
  "body": "   Could a Condorcet winner ever lose a head-to-head contest with another candidate? Why or why not?  What does your answer to Question 1 allow you to conclude about the method of pairwise comparisons and the CWC?  Does the method of pairwise comparisons satisfy the CLC? If so, explain why. Otherwise, give an example of a preference schedule for the method of pairwise comparisons could elect a Condorcet loser.    "
},
{
  "id": "invest-iia",
  "level": "2",
  "url": "sec-pwc-irv.html#invest-iia",
  "type": "Investigation",
  "number": "7.3.9",
  "title": "",
  "body": "  Consider the preference schedule given in .   A preference schedule.    Rank  10  3  7  6    1  C  E  D  B    2  E  A  A  A    3  D  D  C  C    4  A  C  B  D    5  B  B  E  E      Who wins this election using the method of pairwise comparisons?  Is there a Condorcet winner? A Condorcet loser?  Due to a scandal following the counting of the votes, candidate D withdraws. The election is re-run using the votes already cast, again with the method of pairwise comparisons. Who wins?  Does this seem strange?    "
},
{
  "id": "subsec-pwc-14",
  "level": "2",
  "url": "sec-pwc-irv.html#subsec-pwc-14",
  "type": "Definition",
  "number": "7.3.11",
  "title": "",
  "body": " If a voting system has the property that the societal preference between any two candidates depends only on the voters' preferences between those two candidates, then the system is said to satisfy the independence of irrelevant alternatives criterion (IIA).  Put another way, a voting system satisfies IIA if some or all of the voters in an election change their preference ballots but no voter changes their preference between two candidates and , then the societal preference between and must also remain unchanged.  Or, if an election is run and produces as the winner, and later a non-winning candidate drops out, then should still be the winner of the election.  "
},
{
  "id": "subsec-pwc-18",
  "level": "2",
  "url": "sec-pwc-irv.html#subsec-pwc-18",
  "type": "Investigation",
  "number": "7.3.12",
  "title": "",
  "body": "   Does plurality satisfy IIA? Why or why not?  Does the Borda count satisfy IIA? Why or why not?  Does PWC satisfy IIA? Why or why not?    "
},
{
  "id": "subsec-pwc-19",
  "level": "2",
  "url": "sec-pwc-irv.html#subsec-pwc-19",
  "type": "Exploration",
  "number": "7.3.13",
  "title": "",
  "body": "  Is the method of pairwise comparisons anonymous? Monotone? Does it satisfy the majority criterion? Justify your answers.   "
},
{
  "id": "subsec-pwc-21",
  "level": "2",
  "url": "sec-pwc-irv.html#subsec-pwc-21",
  "type": "Activity",
  "number": "7.3.14",
  "title": "",
  "body": "  Fill in , indicating whether each voting system satisfies the given criteria.   Voting systems and fairness criteria          Anonymous  Neutral  Monotone  Majority  CWC  CLC  IIA    Majority rule                                  Plurality                                  Borda count                                  PWC                                    "
},
{
  "id": "subsec-irv-2",
  "level": "2",
  "url": "sec-pwc-irv.html#subsec-irv-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "instant runoff voting ranked choice voting "
},
{
  "id": "subsec-irv-3",
  "level": "2",
  "url": "sec-pwc-irv.html#subsec-irv-3",
  "type": "Definition",
  "number": "7.3.16",
  "title": "",
  "body": " The instant runoff voting (IRV) system works as follows.   Each voter in the election submits their entire preference order.  If a candidate has a majority of first-place votes, they are declared the winner.  If no candidate has a majority of first-place votes, then the candidate (or candidates, in the case of a tie) with the fewest first-place votes is eliminated from each voter's preference order, and the remaining candidates are moved up, yielding a new preference schedule.  Step 2 is repeated until a single candidate remains. That candidate is declared the winner.   "
},
{
  "id": "act-irv1",
  "level": "2",
  "url": "sec-pwc-irv.html#act-irv1",
  "type": "Activity",
  "number": "7.3.17",
  "title": "",
  "body": "  Consider the hypothetical preference schedule shown in .   A hypothetical election    Rank  6  7  9  3    1  A  B  C  A    2  B  C  B  C    3  C  A  A  B      Under IRV, which candidate is eliminated first?  Under IRV, which candidate is eliminated second?  Who would win the election under IRV? What would be the resulting societal preference order?    "
},
{
  "id": "subsec-irv-6",
  "level": "2",
  "url": "sec-pwc-irv.html#subsec-irv-6",
  "type": "Investigation",
  "number": "7.3.19",
  "title": "",
  "body": "  Use to write a thorough explanation of why IRV is both neutral and anonymous.   "
},
{
  "id": "subsec-irv-7",
  "level": "2",
  "url": "sec-pwc-irv.html#subsec-irv-7",
  "type": "Investigation",
  "number": "7.3.20",
  "title": "",
  "body": "  Explain why IRV satisfies the majority criterion.   "
},
{
  "id": "act-monotonicity-crit",
  "level": "2",
  "url": "sec-pwc-irv.html#act-monotonicity-crit",
  "type": "Activity",
  "number": "7.3.21",
  "title": "",
  "body": "  Consider the election run in . Suppose that the three voters in the rightmost column of got wind of candidate 's support and switched their votes to to be on the side of the winner.   With these new preferences, who would win the election under IRV?  Compare your answer to Question 1 of this activity to Question 3 of . What conclusions can you draw?  Do some research on FairVote.org about this phenomenon. How do they respond to a potential critique?    "
},
{
  "id": "def-mono-crit",
  "level": "2",
  "url": "sec-pwc-irv.html#def-mono-crit",
  "type": "Definition",
  "number": "7.3.22",
  "title": "",
  "body": " monotonicity criterion   A voting system is said to satisfy the monotonicity criterion if when a candidate wins, and on a recount or reelection, only changes favorable to occur, then will still win. That is, changes that only favor the winner should not change the winner.   "
},
{
  "id": "subsec-irv-11",
  "level": "2",
  "url": "sec-pwc-irv.html#subsec-irv-11",
  "type": "Investigation",
  "number": "7.3.23",
  "title": "",
  "body": "  Consider an election between three candidates with the preference schedule shown in .   A hypothetical election.    Rank  1  2  2    1  A  B  C    2  B  A  A    3  C  C  B      Is there a Condorcet winner in this election?  Who would win the election under IRV?  Does IRV satisfy the Condorcet winner criterion? Use your answers to Questions 1 and 2, together with (and what we know about when implications are false! Recall .).    "
},
{
  "id": "subsec-irv-12",
  "level": "2",
  "url": "sec-pwc-irv.html#subsec-irv-12",
  "type": "Investigation",
  "number": "7.3.25",
  "title": "",
  "body": "   What about Dunder Mifflin? Who wins the company presidency with the preference schedule in under IRV?  Given all the investigations we've done into the Dunder Mifflin presidency, write an argument to the company's board of directors arguing for a particular voting system to be used to choose the company's president. Your argument should make some allusion to the fairness criteria we've explored.    "
},
{
  "id": "sec-pwc-irv-3-1",
  "level": "2",
  "url": "sec-pwc-irv.html#sec-pwc-irv-3-1",
  "type": "Exercise",
  "number": "7.3.1",
  "title": "",
  "body": " Consider the hypothetical election below.     Rank  8  6  4  2    1  A  C  D  B    2  B  A  C  C    3  D  B  B  A    4  C  D  A  D      Who wins the election using the method of pairwise comparisons?  Suppose that after a scandal emerges, candidate drops out and the results are re-tabulated. Who wins the election?  Does the answer to the previous question give an example of a violation of one of our fairness criteria? Explain.  Suppose instead that, before the original election is run, the four voters in the third column switch their preference ballot to . Who wins the election? Is this an example of a violation of one of our fairness criteria? Explain.  Using the original preference schedule, who wins the election using instant runoff voting? Explain.   "
},
{
  "id": "sec-pwc-irv-3-2",
  "level": "2",
  "url": "sec-pwc-irv.html#sec-pwc-irv-3-2",
  "type": "Exercise",
  "number": "7.3.2",
  "title": "",
  "body": " One criticism of non-plurality voting systems is that they are too complex, or ballots too difficult to understand. Find an article that makes this point and respond to it in a well-reasoned paragraph or two. Do you agree? Disagree?  "
},
{
  "id": "root-1-2-10-1",
  "level": "1",
  "url": "root-1-2-10-1.html",
  "type": "Index",
  "number": "",
  "title": "Index",
  "body": " Index   "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
