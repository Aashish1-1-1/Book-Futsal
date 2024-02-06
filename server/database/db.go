package database

import (
	"database/sql"
	"fmt"
	"log"
	"os"

	_ "github.com/lib/pq"
	"github.com/joho/godotenv"
)

var Db *sql.DB

func Init() {
	if err := godotenv.Load(); err != nil {
		log.Fatal("Error loading .env file")
	}

	psqlInfo := fmt.Sprintf("user=%s password=%s dbname=%s sslmode=disable", os.Getenv("DB_USER"), os.Getenv("DB_PASSWORD"), os.Getenv("DB_NAME"))
	db, err := sql.Open("postgres", psqlInfo)
	if err != nil {
		log.Fatal(err)
	}
	err = db.Ping()
	if err != nil {
		log.Fatal(err)
	}

	fmt.Println("Successfully connected!")
  Db = db
}


func MakeInsertQuery(query string,values ...interface{}) error {
  Init()
//	prepare := `insert into "users"("username", "email","password") values($1, $2, $3)`
	_, err := Db.Exec(query,values...)
	if err != nil {
    fmt.Println(err)
		return err
	}
	fmt.Println("Query done Successfully")
  CloseDB()
	return nil
}


func MakeSearchQuery(email string,password string) (bool,error) {
  Init()
  var password1 string
  query := `SELECT "password" FROM "users" WHERE "email"=$1`
  err := Db.QueryRow(query, email).Scan(&password1)
  if err!=nil{
    fmt.Println(err)
    return false,err
  }
   if password1!=password{
      fmt.Println("Password not match")
      return false,nil 
  }
  CloseDB()
  fmt.Println("Password Matched")
  return true,nil
}

func CloseDB() {
	if Db != nil {
		Db.Close()
		fmt.Println("Closed connection")
	}
}
