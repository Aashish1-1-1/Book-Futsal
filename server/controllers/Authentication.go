package Auth

import(
  "bookfutsal/models"
  "bookfutsal/database"

  "github.com/gin-gonic/gin"
  "net/http"
  "fmt"
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
  query := fmt.Sprintf("%s,%d,%s,%s",name,contact,email,password)
  database.MakeQuery(query)
	c.JSON(http.StatusOK, gin.H{"message": "Form submitted successfully", "email": email, "password": password,"name": name, "contact": contact})
}

