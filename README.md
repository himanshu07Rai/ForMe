# ForMe

1.          app.use(bodyParser.json()) 

looks at requests where the Content-Type: application/json header is present and transforms the text-based JSON input into JS-accessible variables under req.body.

2.          app.use(bodyParser.urlencoded({
              extended: true
            }) 

does the same for URL-encoded requests. the extended: true precises that the req.body object will contain values of any type instead of just strings.
