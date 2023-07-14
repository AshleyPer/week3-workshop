module.exports = {
    route: (app,path)=>{
    // app - passes in the express object needed for the route.
    // path - passes in a path object needed to find the file. The path module is part of node and needs to be required in the server.js file

        //if the user requests the root of the site
        app.get('/' , function(req, res){
            //Find the file to be used as the root of the site
            let filepath = path.resolve('./www/form.html');
            //send this file back to the client
            res.sendFile(filepath);
        });
    }
} 