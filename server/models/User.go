package models

import(

  "github.com/gin-gonic/gin"
  "net/http"
  "fmt"
)

type FormData struct{
  Email string `form:"email" binding:"required"`
	Password string `form:"password" binding:"required"`
}
type FormDataS struct{
  Name string  `form:"email" binding:required`
  Number int64  `form:"contact" binding:required`
  Email string `form:"email" binding:"required"`
	Password string `form:"password" binding:"required"`
}

func HandelLogin(c *gin.Context){
  var data FormData

  if err:=c.ShouldBind(&data); err!=nil {
    c.JSON(http.StatusBadRequest,gin.H{"error":err.Error()})
    return
  }

	email := data.Email
	password := data.Password

	c.JSON(http.StatusOK, gin.H{"message": "Form submitted successfully", "email": email, "password": password})
}


func HandelSignUP(c *gin.Context){
  var data FormDataS

  if err:=c.ShouldBind(&data); err!=nil {
    c.JSON(http.StatusBadRequest,gin.H{"error":err.Error()})
    return
  }
  name := data.Name
  contact :=data.Number
	email := data.Email
	password := data.Password

	c.JSON(http.StatusOK, gin.H{"message": "Form submitted successfully", "email": email, "password": password,"name": name, "contact": contact})
}
