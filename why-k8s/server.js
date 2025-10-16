const express = require('express');
const os = require('os');
const path = require('path');
const app = express();
const startedAt = new Date();
const instanceId = process.env.HOSTNAME || `local-${Math.random().toString(36).slice(2,8)}`;
const version = process.env.APP_VERSION || 'v1';
const accent = process.env.APP_ACCENT || '#2DD4BF';
app.use(express.static(path.join(__dirname, 'public')));
app.get('/info', (req,res)=>{
  const uptime = Math.floor((Date.now()-startedAt)/1000);
  res.json({instanceId, version, uptime, accent, hostname: os.hostname()});
});
app.post('/crash',(req,res)=>{res.json({msg:'bye'});setTimeout(()=>process.exit(1),200)});
app.get('/healthz',(req,res)=>res.send('ok'));
app.listen(8080,()=>console.log('Running on 8080', instanceId, version));