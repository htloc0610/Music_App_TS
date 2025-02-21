import mongoose from "mongoose";

export const connect = async (): Promise<void> => {
  try {
    await mongoose.connect(process.env.MONGOOSE_URL);
    console.log("Connect database successful!!!");
  } catch (error) {
    console.log("Fail to connect database", error);
  }
};
