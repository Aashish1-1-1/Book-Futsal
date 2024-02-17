package Book

import(
  "bookfutsal/models/Booking"
  "bookfutsal/database"
  "fmt"
  "time"
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

func ThrowFutsalDetails(c *gin.Context) {
	query:=`SELECT "open" FROM "ground" WHERE "id"=$1`
  var opentime string
  var closetime string
  opentime, err := database.Searchsmt(query,4)
  if err != nil {
		fmt.Println("Error:", err)
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to fetch grounds"})
		return
	}
  parsedTime1, err := time.Parse(time.RFC3339, opentime)
    if err != nil {
        fmt.Println("Error parsing timestamp:", err)
        return
  }
  query =`SELECT "close" FROM "ground" WHERE "id"=$1`
  closetime, err = database.Searchsmt(query,4)

	if err != nil {
		fmt.Println("Error:", err)
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to fetch grounds"})
		return
	}
  
  parsedTime2, err := time.Parse(time.RFC3339, closetime)
    if err!=nil {
      fmt.Println("Error parsing timestamp:",err)
      return
    }
  c.JSON(http.StatusOK, gin.H{"opentime":parsedTime1.Hour(),"closetime":parsedTime2.Hour()})
}

func ThrowTimeInterval(c *gin.Context){
  query:=`SELECT "time_interval_id" FROM "bookings" WHERE  "ground_id"=$1`
  rows,err:=database.MakeSearchQuery(query,1)
  if err != nil {
		fmt.Println("Error:", err)
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to fetch grounds"})
		return
	}
	defer rows.Close()

	var bookedtimes []int
	for rows.Next() {
		var bookedtime int 
		if err := rows.Scan(&bookedtime); err != nil {
			fmt.Println("Error scanning row:", err)
			c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to scan row"})
			return
		}
		bookedtimes = append(bookedtimes, bookedtime)
	}

	if err := rows.Err(); err != nil {
		fmt.Println("Error during iteration:", err)
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Error during iteration"})
		return
	}

	c.JSON(http.StatusOK, bookedtimes)
}
