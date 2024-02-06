package Book

import(
  "bookfutsal/models/Booking"
  "bookfutsal/database"
  "fmt" 
  "github.com/gin-gonic/gin"
  "net/http"
)


func HandelBook(c *gin.Context){
  var data Booking.FormData  

  if err:=c.ShouldBind(&data); err!=nil {
    c.JSON(http.StatusBadRequest,gin.H{"error":err.Error()})
    return
  }

	time := data.Time
	price := data.Price
  query:=`insert into "TimeInterval"("time","price") values($1, $2)`
  err:= database.MakeInsertQuery(query,time,price)
  fmt.Println(time,price)
  if err!=nil{
  c.JSON(http.StatusInternalServerError,gin.H{"Error":"Some server error "})
  return
  }else{
  
 c.JSON(http.StatusOK, gin.H{"message": "Booked successfully"})
  }
}

