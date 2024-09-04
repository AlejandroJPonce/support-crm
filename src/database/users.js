// import { db } from "./firebase";
// import { ref } from "firebase/database";

export class Users {

  constructor() {
    if (Users.instance) {
      return Users.instance
    }

    this._data = [
      {
        id: 1,
        name: 'Alejandro',
        lastName: 'Ponce',
        status: 'Online',
        imageUrl: 'https://unavatar.io/microlink/microlink.io'
      },
      {
        id: 2,
        name: 'David',
        lastName: 'Pena',
        status: 'Online',
        imageUrl: 'https://unavatar.io/microlink/microlink.io'
      }
    ]
    Users.instance = this
  }

  getData () {
    return this._data
  }

  setData (newData) {
    this._data = newData
  }

  // onValue(){
  //   let users = []
  //   ref(db), (snapshot) => {
  //     const data = snapshot.val()
  //   if (data !== null) {
  //     Object.values(data).map((element) => {
  //       users.push(element);
  //     });
  //   };
  //   return users;
  //   }
  // }

}

