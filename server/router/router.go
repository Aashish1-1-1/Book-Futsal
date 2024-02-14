package Router

import(
  "bookfutsal/controllers/Auth"
  "bookfutsal/controllers/Book"
   "bookfutsal/database"
   "bookfutsal/controllers/Userdash"

  "github.com/gin-gonic/gin"
  "github.com/gin-contrib/cors"
)

func Routes() *gin.Engine{

    database.Init()
    defer database.CloseDB()
    

    router := gin.Default()
    router.Use(cors.Default())
    router.POST("/login",Auth.HandelLogin)
    router.POST("/signup",Auth.HandelSignUP)
    router.POST("/book",Book.HandelBook)
    router.POST("/registerfutsal",Auth.HandelFutsalRegister)
    router.GET("/user/:id",Userdash.ThrowGrounds)
    return router
}
