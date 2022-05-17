# ForMe

1.          app.use(bodyParser.json()) 

looks at requests where the Content-Type: application/json header is present and transforms the text-based JSON input into JS-accessible variables under req.body.

2.          app.use(bodyParser.urlencoded({
              extended: true
            }) 

does the same for URL-encoded requests. the extended: true precises that the req.body object will contain values of any type instead of just strings.

3. For connecting node to postgres [npm i pg](https://node-postgres.com/)

4. [HTTP vs TCP](https://networkinterview.com/http-vs-tcp-know-the-difference/#:~:text=HTTP%20is%20a%20Hypertext%20Transfer%20Protocol%2C%20whereas%20TCP%20full%20form,and%20TCP%20uses%20no%20port.&text=HTTP%20is%20faster%20in%20comparison%20to%20TCP%2C%20which%20is%20slower.)

5. [Linux Command Line Cheat Sheet](https://cheatography.com/davechild/cheat-sheets/linux-command-line/)

6. [The Ultimate Guide to Python: How to Go From Beginner to Pro](https://www.freecodecamp.org/news/the-ultimate-guide-to-python-from-beginner-to-intermediate-to-pro/#conditional-statements-)

7. Clearing python colsole : 

          For Windows:

          >>> import os
          >>> clear = lambda: os.system('cls')
          >>> clear()
          
          For Linux it would be:

          >>> import os
          >>> clear = lambda: os.system('clear')
          >>> clear()
          >>> 


ML
tensorflow.js


    python virtual envs ubuntu
    
    pip install virtualenv
    mkdir VENVS
    python3 -m virtualenv venv1
    
    to activate  -> sourch path
    
    to deactivate -> deactivate
    
    
## Prisma

```
npm init

npm i express morgan http-errors dotenv

npm i -D nodemon prisma

npm i @prisma/client

npx prisma init

"[prisma]": {
    "editor.defaultFormatter": "Prisma.prisma"
  }

add this to settings.json

npx prisma migrate dev

npx prisma studio
  
```
