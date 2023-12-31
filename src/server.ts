import mongoose from 'mongoose';

// import config from './app/config';
import app from './app';
import config from './app/config';

// const mongoose = require('mongoose');

// main().catch(err => console.log(err));

async function main() {
  //   await mongoose.connect(config.database_url as string);

  //   app.listen(config.port, () => {
  //     console.log(`Example app listening on port ${config.port}`)
  //   })
  try {
    await mongoose.connect(config.database_url as string);

    app.listen(config.port, () => {
      console.log(`checking --- listening on port ${config.port}`);
    });
  } catch (err) {
    console.log(err);
  }
}
main();
