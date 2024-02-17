package Userdash

import (
	"bookfutsal/database"
	"fmt"
	"net/http"

	"github.com/gin-gonic/gin"
)

type Ground struct {
	ID       int    `json:"id"`
	Name     string `json:"name"`
	Location string `json:"location"`
}

func ThrowGrounds(c *gin.Context) {
 // fmt.Println(user)
	query := `SELECT "id","name","location" FROM "ground"`
	rows, err := database.MakeSearchQuery(query)
	if err != nil {
		fmt.Println("Error:", err)
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to fetch grounds"})
		return
	}
	defer rows.Close()

	var grounds []Ground
	for rows.Next() {
		var ground Ground
		if err := rows.Scan(&ground.ID, &ground.Name, &ground.Location); err != nil {
			fmt.Println("Error scanning row:", err)
			c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to scan row"})
			return
		}
		grounds = append(grounds, ground)
	}

	if err := rows.Err(); err != nil {
		fmt.Println("Error during iteration:", err)
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Error during iteration"})
		return
	}

	c.JSON(http.StatusOK, grounds)
}
