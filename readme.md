# FileX

A concurrent file downloader written in Go.

FileX uses Go's concurrency primitives to download multiple files in parallel while limiting the number of active downloads.

### Features

* Concurrent file downloads
* Configurable concurrency using semaphores
* Goroutine synchronization with WaitGroups
* Channel-based communication
* Context-based cancellation
* Download metrics

### Tech Stack

* Go
* `net/http`
* Goroutines
* Channels
* WaitGroups
* Semaphores
* Context

