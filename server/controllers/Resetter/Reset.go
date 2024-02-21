package Reset

import(
  "bookfutsal/database"
  "time"
)

func Resetter(c *gin.Context){
     c := cron.New()

    c.AddFunc("0 12 * * *", ResetTable)

    c.Start()

    select {}
}

func ResetTable(table string){
  Init()
  tx, err := Db.Begin()
    if err != nil {
        log.Fatal(err)
    }

    _, err = tx.Exec("TRUNCATE TABLE booking")
    if err != nil {
        tx.Rollback()
        log.Fatal(err)
    }

    _, err = tx.Exec("ALTER SEQUENCE your_table_id_seq RESTART WITH 1")
    if err != nil {
        tx.Rollback()
        log.Fatal(err)
    }

    if err := tx.Commit(); err != nil {
        log.Fatal(err)
    }

    log.Println("Table truncated and sequence restarted successfully")

}
