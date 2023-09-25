// Import server here and start the applicationconst
import server from './api/index.js'
const port = 4000;

server.listen(port, ()=>{
    console.log(`server Listening at ${port}`);
})