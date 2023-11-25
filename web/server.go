package web

import (
	"embed"
	"log"
	"net/http"

	mlp "github.com/Trashed/mylittlepoller"
)

// TODO: Remove the whitespace after 'go:embed'
// go:embed html
// go:embed js
// go:embed styles
var WebPageFS embed.FS

type server struct {
}

func NewServer() mlp.FrontendServer {
	s := &server{}

	return s
}

func (s server) ServeFrontend() {

	// TODO: This is just for getting the server to start up! Remove when first actual route is being implemented.
	log.Fatalf("Failed to start web server: %v", http.ListenAndServe(":8080", http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		w.Write([]byte("My little poller"))
	})))
}
