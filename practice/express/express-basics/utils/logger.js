const handleErr = (err, url) => {
  if (err) {
    console.log("\n");
    console.clear()
    console.log("❌ - ", err.message);
  } else {
    console.clear()
    console.log("✅ - ", url);

  }
};

module.exports = handleErr;
