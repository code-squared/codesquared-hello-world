import { Hono } from 'hono'

const schema = {
  "openapi": "3.0.3",
  "info": {
    "title": "Hello world",
    "version": "1.0"
  },
  "paths": {
    "/hello": {
      "get": {
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "text/plain": {
                "schema": {
                  "type": "string",
                  "enum": [
                    "Hello, World!"
                  ]
                }
              }
            }
          }
        }
      }
    }
  },
  "servers": [
    {
      "url": "https://hello-world.skm.tc",
      "description": "Skmtc hello world demo server"
    }
  ]
}

const app = new Hono()

app.get('/hello', (c) => c.text('Hello, World!'))
app.get('/schema.json', (c) => c.json(schema))

export default app