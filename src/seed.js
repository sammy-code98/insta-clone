// NOTE: replace 'esD3VV4MClhCj1ggX14TMQZBFFz1' with your Firebase auth user id (can be taken from Firebase)
export function seedDatabase(firebase) {
    const users = [
      {
        userId: 'esD3VV4MClhCj1ggX14TMQZBFFz1',
        username: 'sammy',
        fullName: 'Samuel Uzor',
        emailAddress: 'ugosammy98@gmail.com',
        following: ['2'],
        followers: ['2', '3', '4', '5'],
        dateCreated: Date.now()
      },
      {
        userId: '2',
        username: 'chimdi',
        fullName: 'Nze Chimdi',
        emailAddress: 'nzedollar@gmail.com',
        following: [],
        followers: ['esD3VV4MClhCj1ggX14TMQZBFFz1'],
        dateCreated: Date.now()
      },
      {
        userId: '3',
        username: 'Emma',
        fullName: 'Emma Uchewa',
        emailAddress: 'copyninja@gmail.com',
        following: [],
        followers: ['esD3VV4MClhCj1ggX14TMQZBFFz1'],
        dateCreated: Date.now()
      },
      {
        userId: '4',
        username: 'orwell',
        fullName: 'George Orwell',
        emailAddress: 'george@orwell.com',
        following: [],
        followers: ['esD3VV4MClhCj1ggX14TMQZBFFz1'],
        dateCreated: Date.now()
      },
      {
        userId: '5',
        username: 'ugochukwu',
        fullName: 'Ugochukwu Samuel',
        emailAddress: 'ugochukwu@gmail.com',
        following: [],
        followers: ['esD3VV4MClhCj1ggX14TMQZBFFz1'],
        dateCreated: Date.now()
      }
    ];
  
    for (let k = 0; k < users.length; k++) {
      firebase.firestore().collection('users').add(users[k]);
    }
  
    for (let i = 1; i <= 5; ++i) {
      firebase
        .firestore()
        .collection('photos')
        .add({
          photoId: i,
          userId: '2',
          imageSrc: `/images/users/${i}.jpg`,
          caption: 'Saint George and the Dragon',
          likes: [],
          comments: [
            {
              displayName: 'emma',
              comment: 'Love this place, looks like my animal farm!'
            },
            {
              displayName: 'nze',
              comment: 'Would you mind if I used this picture?'
            }
          ],
          userLatitude: '40.7128°',
          userLongitude: '74.0060°',
          dateCreated: Date.now()
        });
    }
  }