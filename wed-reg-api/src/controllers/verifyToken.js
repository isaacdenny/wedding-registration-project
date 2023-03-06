import jwt from 'jsonwebtoken'

export const verifyToken = (req, res, next) => { 
  try {
    const { token } = req.body

    if (!token) {
      res.status(401).json({ message: 'No token provided' })
    }
    else {
      jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
          console.log(err)
          req.authenticated = false
          req.decoded = null
        } else {
          req.decoded = decoded
          req.authenticated = true
        }
      });
    }
    next()
  }
  catch (err) { 
    console.log(err)
    res.status(400).json({ error: err })
  }
}