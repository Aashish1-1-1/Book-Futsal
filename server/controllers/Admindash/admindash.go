package Admindash

import (
	"bookfutsal/database"
	"fmt"
	"net/http"

	"github.com/gin-gonic/gin"
)

type Whobooked struct {
	ID       int    `json:"id"`
	Name     string `json:"name"`
  Time     string `json:"Time"`
  Contact  string  `json:"Contact"` 
}

func ThrowWhobooked(c *gin.Context) {
 // fmt.Println(user)
  id := c.Param("id")
	query := `SELECT "user_id","time_interval_id" FROM "booking" WHERE "ground_id"=$1`
	rows, err := database.MakeSearchQuery(query,id)
	if err != nil {
		fmt.Println("Error:", err)
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to fetch grounds"})
		return
	}
	defer rows.Close()

	var whobooks []Whobooked
	for rows.Next() {
		var whobooked Whobooked
		if err := rows.Scan(&whobooked.ID,&whobooked.Time); err != nil {
			fmt.Println("Error scanning row:", err)
			c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to scan row"})
			return
		}
    
      query := `SELECT "name" FROM "users" WHERE "user_id"=$1`
      whobooked.Name, err = database.Searchsmt(query, whobooked.ID)
      if err!=nil{
        c.AbortWithStatus(http.StatusInternalServerError)
      }
    	if err != nil {
    		c.AbortWithStatus(http.StatusInternalServerError)
    		return
    	}
    

      query = `SELECT "contact" FROM "users" WHERE "user_id"=$1`
      whobooked.Contact, err = database.Searchsmt(query, whobooked.ID)
      if err!=nil{
        c.AbortWithStatus(http.StatusInternalServerError)
      }
    	if err != nil {
    		c.AbortWithStatus(http.StatusInternalServerError)
    		return
    	}
	whobooks = append(whobooks, whobooked)
	}

	if err := rows.Err(); err != nil {
		fmt.Println("Error during iteration:", err)
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Error during iteration"})
		return
	}

	c.JSON(http.StatusOK, whobooks)
}
