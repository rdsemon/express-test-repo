import express from 'express';
import type { Request, Response } from 'express';
import { error } from 'node:console';
import { z } from 'zod';
const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.send('Hello from the server');
});

app.post('/twitte', (req: Request, res: Response) => {
  console.log('hello world');
  const TwitteShcema = z.object({
    user: z.string(),
    text: z.string(),
    price: z.number(),
  });

  const result = TwitteShcema.safeParse(req.body);

  console.log(result.error!);
  const pretty = z.prettifyError(result.error!);

  res.status(201).json({ data: 'the post is created', error: pretty });
});

app.listen(port, () => {
  console.log(`listing in from port ${port}`);
});
