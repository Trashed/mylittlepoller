package main

import (
	mlp "github.com/Trashed/mylittlepoller"
	"github.com/Trashed/mylittlepoller/web"
)

func main() {
	var server mlp.ManagementPageServer = web.NewServer()
	// TODO: Create poller engine instance

	app := app{}

	// TODO: Start a web server in a goroutine
	app.StartProcess(server.ServeManagementPage)

	// TODO: Start the polling engine in a goroutine
	app.RunAndBlock()
}
