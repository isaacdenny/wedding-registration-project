import jwt from 'jsonwebtoken'

export const verifyToken = (req, res, next) => { 
  try {
    const token = req.body

    if (!token) {
      res.status(401).json({ message: 'No token provided' })
    }
    else {
      const decode = jwt.verify(token, process.env.JWT_SECRET)
      res.status.json({ login: true, decode })
    }
    next()
  }
  catch (err) { 
    res.status(400).json({ error: err })
  }
}