# FileX

A concurrent file downloader built in Go, designed to download multiple files efficiently while keeping concurrency under control.

FileX is a practical exploration of Go's concurrency model — using goroutines, channels, semaphores, `sync.WaitGroup`, and `context` to build a downloader that is fast, coordinated, and cancellable.

## Features

* **Concurrent downloads** — Download multiple files in parallel.
* **Concurrency limiting** — Control the number of active downloads with a semaphore.
* **Goroutine synchronization** — Coordinate workers using `sync.WaitGroup`.
* **Channel-based communication** — Safely communicate results and status between goroutines.
* **Context cancellation** — Cancel running operations gracefully.
* **Download metrics** — Track useful information about download performance.
* **Simple HTTP-based implementation** — Built on Go's standard `net/http` package.

## Tech Stack

* **Language:** Go
* **HTTP:** `net/http`
* **Concurrency:** Goroutines, Channels, Semaphores, `sync.WaitGroup`
* **Cancellation:** `context`
* **Frontend:** HTML

## How It Works

FileX takes a collection of file URLs and processes them concurrently.

```text
                 File URLs
                     │
                     ▼
              ┌─────────────┐
              │   FileX      │
              │  Downloader  │
              └──────┬──────┘
                     │
             Concurrency Limit
                     │
          ┌──────────┼──────────┐
          ▼          ▼          ▼
       Goroutine  Goroutine  Goroutine
          │          │          │
          ▼          ▼          ▼
       Download   Download   Download
          │          │          │
          └──────────┼──────────┘
                     ▼
              Results / Metrics
```

A semaphore controls how many downloads can run simultaneously, while a `WaitGroup` ensures all download workers complete before the program exits. Channels are used for communication between concurrent operations, and `context` provides graceful cancellation.

## Project Structure

```text
FileX/
├── main.go
├── index.html
├── go.mod
├── Cool-cat-meme-2.jpg
├── I-survived.jpg
└── README.md
```

## Getting Started

### Prerequisites

* Go 1.XX or later

### Clone

```bash
git clone https://github.com/Vex-15/FileX.git
cd FileX
```

### Run

```bash
go run .
```

## Why FileX?

FileX was built to understand how Go handles real-world concurrent workloads rather than treating concurrency as just a language feature.

The project focuses on:

* Managing multiple concurrent operations
* Preventing uncontrolled resource usage
* Coordinating goroutines safely
* Handling cancellation
* Measuring concurrent work

It serves as a compact example of applying Go's concurrency primitives to an actual I/O-bound problem.

## Concepts Demonstrated

| Concept    | Usage                                     |
| ---------- | ----------------------------------------- |
| Goroutines | Execute downloads concurrently            |
| Channels   | Communicate between concurrent operations |
| Semaphores | Limit active downloads                    |
| WaitGroups | Synchronize download workers              |
| Context    | Cancellation and lifecycle control        |
| `net/http` | Perform HTTP downloads                    |

## Status

🚧 **Active project**

FileX is currently focused on the core concurrent downloader implementation, with room for further improvements around retries, progress reporting, checksum verification, and more advanced download management.
