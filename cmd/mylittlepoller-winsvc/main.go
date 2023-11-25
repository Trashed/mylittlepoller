package main

import (
	mlp "github.com/Trashed/mylittlepoller"
	"github.com/Trashed/mylittlepoller/web"
)

func main() {
	var server mlp.FrontendServer = web.NewServer()

	app := app{}

	// TODO: Start a web server in a goroutine
	app.StartProcess(server.ServeFrontend)

	// TODO: Start the polling engine in a goroutine
	app.RunAndBlock()
}
