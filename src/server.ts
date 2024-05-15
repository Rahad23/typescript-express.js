import app from './app';
import config from './app/config';
import mongoose from 'mongoose';

async function main() {
  try {
    await mongoose.connect(config.DATABASE_URL as string);

    app.listen(config.PORT, () => {
      console.log(`Example app listening on port ${config.PORT}`);
    });
  } catch (e) {
    console.log(e);
  }

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

main();
