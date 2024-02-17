package Router

import(
  "bookfutsal/controllers/Auth"
  "bookfutsal/controllers/Book"
   "bookfutsal/database"
   "bookfutsal/controllers/Userdash"
    "bookfutsal/middleware"

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
    router.GET("/api/book/:id",Book.ThrowFutsalDetails,Book.ThrowTimeInterval)
    router.POST("/api/book",middleware.RequireAuth,Book.HandelBook)
    router.POST("/api/registerfutsal",Auth.HandelFutsalRegister)
    router.GET("/api/user/:id",Userdash.ThrowGrounds)
    return router
}


