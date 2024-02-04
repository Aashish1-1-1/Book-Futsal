package Auth

import(
  "bookfutsal/models/User"
  "bookfutsal/database"
  
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
  exist, err:= database.MakeSearchQuery(email,password)
  if err!=nil{
    c.JSON(http.StatusInternalServerError,gin.H{"Error":"Some server error "})
  }else{

      if exist{
          c.JSON(http.StatusOK, gin.H{"message": "Logged in "},)
      }else{
         c.JSON(http.StatusBadRequest,gin.H{"Error":"Email or password is incorrect"})
    }
  }
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
  query:=`insert into "users"("username","contact", "email","password") values($1, $2, $3, %4)`
  err := database.MakeInsertQuery(query,name,email,password);
  if err!=nil{
    c.JSON(http.StatusInternalServerError, gin.H{"error": "Internal Server Error"})
		return
  }
	c.JSON(http.StatusOK, gin.H{"message": "Form submitted successfully"})
}

