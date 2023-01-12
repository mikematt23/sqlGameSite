async function middleware(req,res,next){
  const auth = req.session.isAuth
  console.log(auth)
  if(!auth){
    return next()
  }

  res.locals.isAuth = auth
  next()
}

module.exports = middleware