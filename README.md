Riddle Game - Project Guide
Overview
A riddle game where the user enters their name, a player instance is created with a list of riddles. For each riddle, the user is prompted to answer correctly (using the ask function which does not end until the correct answer is given). During the game, the response times are recorded, and at the end, the average time the player took to solve the riddles is calculated.

Code Structure
Files
Player.js — Player class

Riddle.js — Riddle class

riddlesData.js — Exports an array of predefined riddles

main.js — Main execution file where the game runs

Classes and Functions
Player
Fields
name (string) — Player’s name

times (array of numbers) — Array of times (in seconds) the player took for each riddle

totalTime (number) — Total time taken for all riddles (in seconds)

Functions
addTime(time) — Adds a time entry to the times array and updates totalTime

getAverageTime() — Calculates and returns the average time the player spent on each riddle

Riddle
Fields
id (number) — Unique identifier of the riddle

level (number) — Difficulty level of the riddle

question (string) — The riddle question text

correctAnswer (string) — The correct answer for the riddle

Functions
ask() — Interacts with the user, asks the question, and waits until the correct answer is given. Does not return until the answer matches the correct one.

riddlesData.js
Exports an array of pre-made Riddle instances (at least 3 riddles).

Game Flow (main.js)
Ask the user to enter their name.

Create a new Player instance with the given name.

Load the list of riddles from riddlesData.

For each riddle in the list:

Start timing.

Run the riddle’s ask() function.

After a correct answer, stop timing.

Update the player with the time taken for the riddle.

After all riddles are answered, display the player’s average response time.


-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Riddle Game - מדריך פרויקט
תאור כללי
משחק חידות שבו המשתמש מזין את שמו, נוצר מופע של שחקן עם רשימת חידות. על כל חידה המשתמש מתבקש להשיב נכון (עם פונקציית ask שאינה מסתיימת עד שהתשובה נכונה). במהלך המשחק נשמרים זמני התשובות, ובסוף מחושב ממוצע הזמנים שהשחקן לקח לפתור את החידות.

מבנה הקוד
קבצים
Player.js — מחלקת השחקן

Riddle.js — מחלקת חידה

riddlesData.js — קובץ המייצא מערך של חידות מוכנות מראש

main.js — קובץ הריצה הראשי שבו מתקיים המשחק

מחלקות ופונקציות
Player (שחקן)
שדות
name (string) — שם השחקן

times (array of numbers) — מערך של זמנים (בשניות) שהשחקן לקח לכל חידה

totalTime (number) — הזמן הכולל של כל החידות (בשניות)

פונקציות
addTime(time) — מוסיף זמן למערך הזמנים ומעדכן את totalTime

getAverageTime() — מחשב ומחזיר את ממוצע הזמן שהשחקן השקיע בכל חידה

Riddle (חידה)
שדות
id (number) — מזהה ייחודי של החידה

level (number) — רמת החידה

question (string) — טקסט החידה

correctAnswer (string) — התשובה הנכונה לחידה

פונקציות
ask() — מבצעת אינטראקציה עם המשתמש, שואלת את השאלה ומחכה לתשובה נכונה. לא מסתיימת עד שהתשובה תואמת את התשובה הנכונה.

riddlesData.js
מייצא מערך של מופעי Riddle מוכנים מראש (לפחות 3 חידות).

תהליך המשחק (main.js)
מבקשים מהמשתמש להכניס את שמו.

יוצרים מופע חדש של Player עם השם שנבחר.

טוענים את רשימת החידות מ-riddlesData.

עבור כל חידה ברשימה:

מתחילים מדידת זמן.

מפעילים את פונקציית ask() של החידה.

עם תשובה נכונה, עוצרים את מדידת הזמן.

מעדכנים את השחקן עם הזמן של החידה.

לאחר כל החידות, מציגים את ממוצע הזמנים של השחקן.
