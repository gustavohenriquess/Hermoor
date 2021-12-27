import { app } from './app';

app.listen(process.env.SRV_PORT, () => {
  console.log(`Server running on http://localhost:${process.env.SRV_PORT}`);
});
