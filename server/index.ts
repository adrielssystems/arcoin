import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import { cors } from 'hono/cors'

const app = new Hono()

// Middleware
app.use('/*', cors())

// Routes
app.get('/', (c) => {
  return c.json({ message: 'Welcome to Arcoin API (Hono Node.js Server)' })
})

const port = 4000
console.log(`Server is running on http://localhost:${port}`)

serve({
  fetch: app.fetch,
  port
})
