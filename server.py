from SimpleHTTPServer import SimpleHTTPRequestHandler
import BaseHTTPServer

class XSSHeader (SimpleHTTPRequestHandler):
    def end_headers (self):
        self.send_header('X-XSS-Protection', '0')
        SimpleHTTPRequestHandler.end_headers(self)

if __name__ == '__main__':
    BaseHTTPServer.test(XSSHeader, BaseHTTPServer.HTTPServer)