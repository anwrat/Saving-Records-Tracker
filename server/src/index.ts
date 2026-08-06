import { envConfig } from "./config/env.config";
import app from "./app";

app.listen(envConfig.port, () => {
  console.log(`Server is running on port ${envConfig.port}`);
});
