# A very lightweight HTTP Proxy

Powered by: [tinyproxy](https://github.com/tinyproxy)

DockerHub: https://hub.docker.com/r/joestldr/http-proxy

GitHub: https://github.com/joes-tldr/http-proxy

## TLDR; Quickstart

```bash
docker run \
    --name joestldr-http-proxy \
    --detach \
    --restart=unless-stopped \
    --publish=3128:3128 \
  joestldr/http-proxy:latest
```

## Use config file

Sample (default) `tinyproxy.conf`:
```
Port 3128
Listen 0.0.0.0
Timeout 600
Allow 0.0.0.0/0
LogLevel Connect
XTinyproxy No
```
Ref: http://tinyproxy.github.io

Run with `*.conf` file:
```bash
CONF_PATH='/path/to/tinyproxy.conf'

docker run \
    --name joestldr-http-proxy \
    --detach \
    --restart=unless-stopped \
    --publish=3128:3128 \
    --mount="type=bind,source=${CONF_PATH},target=/etc/tinyproxy.conf,readonly" \
  joestldr/http-proxy:latest
```

# License

Copyright 2023 [joes-tldr](https://github.com/joes-tldr)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
