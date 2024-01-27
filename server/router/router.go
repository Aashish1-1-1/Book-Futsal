package Router

import(
  "bookfutsal/controllers"
   "bookfutsal/database"

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

    return router
}
