const MongoClient = require('mongodb').MongoClient,
  url = 'mongodb://localhost:27017',
  dbName = 'myblog'

let mongo = {}

mongo.getDatabase = async () => {

  try {
    let db = await MongoClient.connect(url)
    return db.db(dbName)
  }
  catch(err){
    console.error(err)
  }
}



mongo.getCollection = async (collectionName,db) => {

  if(!collectionName) throw('no collection name')
  let collection

  if(!db){
    db = await mongo.getDatabase()
  }

  collection = db.collection(collectionName)

  return [
    db,
    collection
  ]

}


mongo.insertData = async (dts,tmp,idName)=>{
    try{
        if(typeof dts  === 'string'){
          let [ db,collection ] = await mongo.getCollection(dts)

          dts = {}
          dts.db = db
          dts.collection = collection
        }
        const [ ,collection ] = await mongo.getCollection('ids',dts.db)


        const incData = await mongo.newID(collection,tmp,idName)

        if(!incData) return false

        const result = await dts.collection.insert(incData,{safe:true})

        return {
          db:dts.db,
          collection:dts.collection,
          result:incData[idName]
        }
    }
    catch(e){
        console.error(e)
    }

}

mongo.newID = async (collection,tmp,idName)=>{

     try {
        let result = await collection.findAndModify({_id:idName}, [], {$inc:{[idName]:1}},{new:true,upsert:true})

        if(result) {
           tmp[idName]=result.value[idName]

           return tmp
         }
     }
     catch(err){
        console.error('自增失败:'+err);
     }

}





module.exports = mongo
