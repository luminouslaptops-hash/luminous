import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI;

// Only require MONGODB_URI at runtime, not during build
if (!MONGODB_URI && process.env.NODE_ENV !== 'production') {
  console.warn(
    'MONGODB_URI environment variable not defined. Database features will not work until configured.'
  );
}

let cached = global as any;

if (!cached.mongoose) {
  cached.mongoose = {
    conn: null,
    promise: null,
  };
}

async function connectDB() {
  if (!MONGODB_URI) {
    throw new Error('MONGODB_URI is not defined');
  }

  if (cached.mongoose.conn) {
    return cached.mongoose.conn;
  }

  if (!cached.mongoose.promise) {
    const opts = {
      bufferCommands: false,
    };

    cached.mongoose.promise = mongoose
      .connect(MONGODB_URI, opts)
      .then((mongoose) => {
        return mongoose;
      });
  }

  try {
    cached.mongoose.conn = await cached.mongoose.promise;
  } catch (e) {
    cached.mongoose.promise = null;
    throw e;
  }

  return cached.mongoose.conn;
}

export default connectDB;
