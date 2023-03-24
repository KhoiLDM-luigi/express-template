import "dotenv/config";
import server from "./app/index.js";

const run = () => {
  try {
    server.listen(process.env.PORT, () => {
      console.log(`Server listen at ${process.env.PORT}`);
    });
  } catch (error) {
    console.error(error, "err");
    process.exit(1);
  }
};

run();
