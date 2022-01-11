import { initServer } from "./server";

const init = async () => {
    initServer();
};

init().catch(console.error);

// json data from: https://github.com/bialek-k/Sucharromana-app