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


func MakeInsertQuery(name string, contact int64,email string,password string) error {
  Init()
	prepare := `insert into "users"("username", "email","password") values($1, $2, $3)`
	_, err := Db.Exec(prepare,name,email,password)
	if err != nil {
    fmt.Println(err)
		return err
	}
	fmt.Println("Query done Successfully")
  CloseDB()
	return nil
}

func CloseDB() {
	if Db != nil {
		Db.Close()
		fmt.Println("Closed connection")
	}
}
