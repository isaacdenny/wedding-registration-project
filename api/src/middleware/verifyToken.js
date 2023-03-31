import jwt from 'jsonwebtoken'

export const verifyToken = (req, res, next) => { 
  try {
    const { token } = req.params

    if (!token) {
      return res.status(401).json({ message: 'No token provided' })
    }
    else {
      jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) throw err
        else {
          req.decoded = decoded
          req.authenticated = true
        }
      });
    }
    next()
  }
  catch (err) { 
    req.authenticated = false
    req.decoded = null
    res.status(400).json({ error: err })
  }
}