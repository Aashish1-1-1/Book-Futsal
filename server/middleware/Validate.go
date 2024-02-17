package middleware

import (
	"fmt"
	"log"
	"net/http"
	"os"
	"time"

	"github.com/gin-gonic/gin"
  "github.com/golang-jwt/jwt/v5"

	"bookfutsal/database"
)

func RequireAuth(c *gin.Context) {
	tokenString, err := c.Cookie("Auth")
  fmt.Println(tokenString)
	if err != nil {
		c.AbortWithStatus(http.StatusUnauthorized)
		return
	}

	token, err := jwt.Parse(tokenString, func(token *jwt.Token) (interface{}, error) {
		// Validate signing method
		if _, ok := token.Method.(*jwt.SigningMethodHMAC); !ok {
			return nil, fmt.Errorf("Unexpected signing method: %v", token.Header["alg"])
		}

		// Load secret key from environment variable
		secret := os.Getenv("SECRET")
		if secret == "" {
			log.Fatal("Secret key not found")
		}

		return []byte(secret), nil
	})

	if err != nil || !token.Valid {
		c.AbortWithStatus(http.StatusUnauthorized)
		return
	}

	claims, ok := token.Claims.(jwt.MapClaims)
	if !ok {
		c.AbortWithStatus(http.StatusUnauthorized)
		return
	}

	exp, ok := claims["exp"].(float64)
	if !ok || float64(time.Now().Unix()) > exp {
		c.AbortWithStatus(http.StatusUnauthorized)
		return
	}

	userID, ok := claims["userid"].(float64)
	if !ok {
		c.AbortWithStatus(http.StatusUnauthorized)
		return
	}
  var user string
  query := `SELECT "name" FROM "users" WHERE "user_id"=$1`
  user, err = database.Searchsmt(query, int(userID))
  if err!=nil{
    c.AbortWithStatus(http.StatusInternalServerError)
  }
  fmt.Println("I am who",user)
	if err != nil {
		c.AbortWithStatus(http.StatusInternalServerError)
		return
	}

	c.Set("user", user)
	c.Next()
}
