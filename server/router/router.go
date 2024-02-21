package Router

import(
  "bookfutsal/controllers/Auth"
  "bookfutsal/controllers/Book"
   "bookfutsal/database"
   "bookfutsal/controllers/Userdash"
    "bookfutsal/middleware"
    "bookfutsal/controllers/Admindash"

  "github.com/gin-gonic/gin"
  "github.com/gin-contrib/cors"
)

func Routes() *gin.Engine{

    database.Init()
    defer database.CloseDB()
    

    router := gin.Default()
    router.Use(cors.Default())
    router.POST("/api/login",Auth.HandelLogin)
    router.POST("/api/signup",Auth.HandelSignUP)
    router.GET("/api/book/:id",Book.ThrowFutsalDetails)
    router.POST("/api/book/:id",middleware.RequireAuth,Book.HandelBook)
    router.POST("/api/registerfutsal",Auth.HandelFutsalRegister)
    router.GET("/api/user/:id",Userdash.ThrowGrounds)
    router.GET("/api/owner/:id",Admindash.ThrowWhobooked)
    return router
}


