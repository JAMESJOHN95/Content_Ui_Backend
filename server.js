const { server } = require("./app");

const PORT = process.env.PORT || 5000; // Correct order
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
