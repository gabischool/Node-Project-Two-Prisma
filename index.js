// Import server here and start the application
import server from "./api/index.js";
const port  = 5000;
server.listen(port,(req,res)=>{
    console.log(`app is running on port ${port}`)
})