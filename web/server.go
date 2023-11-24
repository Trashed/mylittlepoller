package web

import (
	"log"
	"time"
)

type Server struct {
}

func (s Server) ServePage() {
	ticker := time.NewTicker(time.Second)

	for t := range ticker.C {
		log.Printf("Ticker ticking... %v\n", t.Second())
	}
}
