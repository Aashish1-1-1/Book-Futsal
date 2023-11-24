package main

import (
  "fmt"
)

func main(){

  m :=make(map[string]int)
  m["C1"] = 3
  m["C2"] = 4

  fmt.Println("First is",m["C1"])
  fmt.Println(m)
}
