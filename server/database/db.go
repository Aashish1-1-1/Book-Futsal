package database

import(
	"database/sql"
	"fmt"
	"log"
	"os"

	_ "github.com/lib/pq"
	"github.com/joho/godotenv"
)

var db *sql.DB

func Init(){
  	if err := godotenv.Load(); err != nil {
  		log.Fatal("Error loading .env file")
  	}
  
 // 	psqlInfo := fmt.Sprintf("%s",os.Getenv("DB_URI"))
      psqlInfo := fmt.Sprintf("user=%s password=%s dbname=%s sslmode=disable",os.Getenv("DB_USER"),os.Getenv("DB_PASSWORD"),os.Getenv("DB_NAME"))
  	db, err := sql.Open("postgres", psqlInfo)
  	if err != nil {
  		log.Fatal(err)
  	} 
  	err = db.Ping()
  	if err != nil {
  		log.Fatal(err)
  	}
  
  	fmt.Println("Successfully connected!")
  
  }

  func CloseDB()  {
    if db != nil{
      db.Close()
      fmt.Println("Closed connection")

    } 
  }
