package main

import (
  "bookfutsal/controllers"

  "github.com/gin-gonic/gin"
  "github.com/gin-contrib/cors"
)

func main() {

    router := gin.Default()
    router.Use(cors.Default())
    router.POST("/login",Auth.HandelLogin)
    router.POST("/signup",Auth.HandelSignUP)
    //router.POST("/Book",Book.HandelBook)
    router.Run(":6996")
}

