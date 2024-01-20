package main

import (
	"bookfutsal/router"
)

func main() {
	r := Router.Routes()
	_ = r.Run(":6996")
}
