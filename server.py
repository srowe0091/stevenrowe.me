from http.server import HTTPServer, SimpleHTTPRequestHandler
 
PORT = 8080
 
if __name__ == "__main__":
    server = HTTPServer(("", PORT), SimpleHTTPRequestHandler)
    print(f"Serving on http://localhost:{PORT}")
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        print("\nShutting down.")
        server.server_close()
 