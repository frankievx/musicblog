'use strict';
import * from 'babel/register'({});
import server from './server/server';


const PORT = process.env.PORT || 3000;


server.listen(PORT, function () {
  console.log('Server listening on', PORT);
});

