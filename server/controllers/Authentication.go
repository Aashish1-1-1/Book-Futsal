package Auth

import(
  "bookfutsal/models"

  "github.com/gin-gonic/gin"
  "net/http"
)
func HandelLogin(c *gin.Context){
  var data User.FormData

  if err:=c.ShouldBind(&data); err!=nil {
    c.JSON(http.StatusBadRequest,gin.H{"error":err.Error()})
    return
  }

	email := data.Email
	password := data.Password
  
	c.JSON(http.StatusOK, gin.H{"message": "Form submitted successfully", "email": email, "password": password})
}


func HandelSignUP(c *gin.Context){
  var data User.FormDataS

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

