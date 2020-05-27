export const mockAngularFireAuth: any = {
auth: jasmine.createSpyObj('auth', {
    'signInAnonymously': Promise.reject({
    code: 'auth/operation-not-allowed'
    }),
    // 'signInWithPopup': Promise.reject(),
    // 'signOut': Promise.reject()
}),
};