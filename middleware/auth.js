export default function ({ app, route, redirect }) {
  if(route.path !== '/auth/signin'){
    if(!app.$fire.auth.currentUser && route.path !== '/auth/signup'){
      return redirect('/auth/signin');
    }
  } else {
    if(app.$fire.auth.currentUser) {
      return redirect('/dashboard');
    }
  }
}