package main

import (
	"database/sql"
	"fmt"
	"log"

	_ "github.com/lib/pq"
)

func main() {
	// Replace these connection parameters with your actual values
db, err := sql.Open("postgres", "user=aashish dbname=bookfutsal password=Aashish@123# sslmode=disable")
	if err != nil {
		log.Fatal(err)
	}
	defer db.Close()

	// Test the connection
	err = db.Ping()
	if err != nil {
		log.Fatal(err)
	}
	fmt.Println("Connected to the database")

	// Example: Query the users table
	rows, err := db.Query("SELECT user_id, username, email FROM users")
	if err != nil {
		log.Fatal(err)
	}
	defer rows.Close()

	// Iterate over the result set
	for rows.Next() {
		var userID int
		var username, email string
		err := rows.Scan(&userID, &username, &email)
		if err != nil {
			log.Fatal(err)
		}
		fmt.Printf("User ID: %d, Username: %s, Email: %s\n", userID, username, email)
	}

	// Check for errors from iterating over rows
	if err = rows.Err(); err != nil {
		log.Fatal(err)
	}
}
