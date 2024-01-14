package main

import (
  "bookfutsal/models"

  "github.com/gin-gonic/gin"
  "github.com/gin-contrib/cors"
)

func main() {

    router := gin.Default()
    router.Use(cors.Default())
    router.POST("/login",models.HandelLogin)
    router.POST("/signup",models.HandelSignUP) 
    router.Run(":8080")
}

