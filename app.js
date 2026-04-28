const fs = require("fs/promises");

(async () => {
  const commandFileHandler = await fs.open("./command.txt", "r");

  commandFileHandler.on("change", () => {
    commandFileHandler.emit("change", async () => {
      const size = (await commandFileHandler.stat()).size;
      const buff = Buffer.alloc(size);
      const offset = 0;
      const length = buff.byteLength;
      const position = 0;

      await commandFileHandler.read(buff, offset, length, position);

      console.log(buff.toString("utf-8"));
    });
  });

  const watcher = fs.watch("./command.txt");

  for await (const event of watcher) {
    if (event.eventType === "change") {
      commandFileHandler.emit("change");
    }
  }
})();
