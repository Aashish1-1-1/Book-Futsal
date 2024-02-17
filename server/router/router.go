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
    router.POST("/api/book",Book.HandelBook)
    router.POST("/api/registerfutsal",Auth.HandelFutsalRegister)
    router.GET("/api/user/:id",middleware.RequireAuth,Userdash.ThrowGrounds)
    return router
}


