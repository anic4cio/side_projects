import fs from 'firebase-admin';
const serviceAccount: object = {
  "type": "service_account",
  "project_id": "anic4cio",
  "private_service": "https://cloud.google.com/sdk/gcloud/reference/auth/activate-service-account"
}

fs.initializeApp({
 credential: fs.credential.cert(serviceAccount)
})

// function to add content to Firestore database
const addBikes = async (): Promise<void> => {
  const db = fs.firestore()
  const bikesDb = db.collection('bikes')
  // const monark = bikesDb.doc('wayker')
  await bikesDb.doc('bmx').set({
    first: 'strike',
    model: '99',
    height: 14,
    price: '$1100',
    made: '26/8/2016'
   })
}

// function to get content from Firestore database, return pending promise
const getBikes = async (doc: string): Promise<any> => {
  const db = fs.firestore()
  const content = await db.collection('bikes').doc(doc).get()
  if(!content.exists) {
    return 'No document found!'
  } else {
    return content.data()
  }
}

// function to print the return of getBikes() using await
const await_return = async (target: string) => {
  console.log(await getBikes(target))
}

addBikes()
await_return('new_bike')

