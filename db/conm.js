const mongoose = require("mongoose");

async function main() {
  try {
    await mongoose.connect(
      "mongodb+srv://contatoisraelhamdan:dSOnpC5MD82YpT7G@cluster0.oso5a1r.mongodb.net/"
    );
  } catch (error) {
    console.log();
  }
}

module.exports = main;
