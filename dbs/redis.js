

const redis = require('redis')
const { promisify } = require('util')




let redisObj = {}


redisObj.openRedis = (ctx) => {
  return new Promise((resolve,reject) => {
    let client = redis.createClient(6379,'127.0.0.1',{});
     client.on("error", (err) => {
       reject(err)
       console.error(err)
     })

     // console.log(client)

     if(!client) reject('redis open error')

     resolve(client)
    })



}
redisObj.getRedis = (key,close = false,client) => {
   return new Promise(async (resolve,reject)=>{
     if(!key) throw 'redis GET error: no key param'

     try{
       if(!client) client = await redisObj.openRedis()

       client.get(key, (err, reply) => {
           if(err){
             console.log(err)
              reject('redis connect error'+err)
           }
           else{
              resolve({result:reply,client})
           }
           if(close) client.quit()
  	   });

     }
     catch(e){
       reject(e)
     }


   })
}

redisObj.setRedis = async (key,value,time = 0,close = false,client) => {
   return new Promise(async (resolve,reject)=>{
     if(!key) throw 'redis GET error: no key param'
     if(!value) throw 'redis GET error: no value param'

     try{
       if(!client) client = await redisObj.openRedis()
       client.set(key, value,(err, reply) => {
           if(err){
              reject('redis connect error'+err)
           }
           else{

             if(time) client.expire(key, time)

             resolve({result:reply,client})
           }
           if(close) client.quit()
  	   });
     }
     catch(e){
       reject(e)
     }

   })
}

redisObj.delRedis = async (key,close = false,client) => {
   return new Promise( async (resolve,reject)=>{
     if(!key) throw 'redis GET error: no key param'
     try{
       if(!client) client = await redisObj.openRedis()
       client.del(key,(err, reply) => {
           if(err){
              reject('redis connect error'+err)
           }
           else{

             resolve({result:reply,client})
           }
           if(close) client.quit()
  	   });
     }
     catch(e){
       reject(e)
     }




   })
}

redisObj.hset = async (key,data = {},time = 0,close = false,client) => {
   return new Promise(async (resolve,reject)=>{
     if(!key) throw 'redis HASH error: no key param'
     if(!Object.keys(data).length) throw 'redis HASH error: data object is null'
     try{
       if(!client) client = await redisObj.openRedis()
       let arr = []

       if(time){

         let expireTime = +new Date() + time * 1000
         for(let i in data){
           let v = data[i],tmp = {}
           tmp.time = expireTime
           tmp.value = v
           tmp = JSON.stringify(tmp)
           arr.push(i,tmp)
         }
       }
       else {
         for(let i in data){
           let v = data[i]
           arr.push(i,v)
         }
       }


       client.hset(key,arr,(err, reply) => {
           if(err){
              reject('redis connect error'+err)
           }
           else{

             resolve({result:reply,client})
           }
           if(close) client.quit()
  	   });
     }
     catch(e){
       reject(e)
     }


   })
}

redisObj.hget = async (key,field,close = false,client) => {
   return new Promise(async (resolve,reject)=>{
     if(!key) throw 'redis HASH error: no key param'
     if(!field) throw 'redis HASH error: no field param'
     try{
       if(!client) client = await redisObj.openRedis()
       client.hget(key,field,(err, reply) => {
           if(err){
              reject('redis connect error'+err)
           }
           else{
             if(reply){
               let val = JSON.parse(reply)


               if(val && typeof val === 'object' && val.time){
                  let time = +new Date()

                  if(val.time - time > 0) reply = val.value



                  else {
                     reply = null
                     redisObj.hdel(key,[field])
                  }
               }

             }


             resolve({result:reply,client})
           }
           if(close) client.quit()
      })
     }
     catch(e){
       reject(e)
     }

   })
}

redisObj.hdel = async (key,fields = [],close = false,client) => {
   return new Promise(async (resolve,reject)=>{
     if(!key) throw 'redis HASH error: no key param'
     if(!fields.length) throw 'redis HASH error: fields array length is 0'
     try{
       if(!client) client = await redisObj.openRedis()

       client.hdel(key,fields,(err, reply) => {
           if(err){
              reject('redis connect error'+err)
           }
           else{

             resolve({result:reply,client})
           }
           if(close) client.quit()
  	   })

     }
     catch(e){
       reject(e)
     }

   })
}

module.exports = redisObj
